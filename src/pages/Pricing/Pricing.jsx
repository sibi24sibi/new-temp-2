import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pricing.css";
import { Link, useNavigate } from "react-router-dom";
// import { io } from 'socket.io-client';

// Connect to the WebSocket server
// const socket = io('http://127.0.0.1');
const PaymentModal = ({
  isOpen,
  onClose,
  paymentUrl,
  selectedPlan,
  formatPrice,
  isAnnual,
}) => {
  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex flex-row items-center justify-center z-50">
      <div className="relative w-[80%]  min-h-[80vh] bg-transparent rounded-lg flex flex-row gap-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300"
        >
          <span className="h-24 w-24">X</span>
        </button>

        {/* Selected Plan Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-emerald-600 mb-4">
            Selected Plan
          </h3>
          <div className="plan-card max-w-md mx-auto">
            <h2 className="plan-name">{selectedPlan.name}</h2>
            {selectedPlan.price
              ? formatPrice(selectedPlan.price)
              : isAnnual
                ? `${formatPrice(selectedPlan.annualPrice)}/Dashboard`
                : `${formatPrice(selectedPlan.monthlyPrice)}/Dashboard`}
            <ul className="plan-features">
              {selectedPlan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment iFrame */}
        <iframe
          title="HDFC Payment"
          src={paymentUrl}
          className=" flex-grow rounded-lg"
          allowFullScreen
        />
      </div>
    </div>
  );
};
const Pricing = () => {
  // const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  // const paymentUrl = "https://smartgatewayuat.hdfcbank.com/payment-page/order/ordeh_fabb52a5aefe4298a7a63676e273c61f";
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState("");
  // const paymentUrl = "https://smartgatewayuat.hdfcbank.com/payment-page/order/ordeh_e088e536f422480db468bf6fa131fc5d";
  //                     https://smartgatewayuat.hdfcbank.com/payment-page/order/ordeh_0a9fd1d906814edab9074331cd0940a9
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeKit, setActiveKit] = useState("starter");
  const [userCurrency, setUserCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [paymentData, setPaymentData] = useState({ currency: "", amount: "" });
  const navigate = useNavigate();
  // Supported currencies by Frankfurter API
  const supportedCurrencies = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "GBP",
    "HKD",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR",
  ];

  const handleBuyClick = async (plan) => {
    try {
      // Get and parse the token from localStorage
      const userString = localStorage.getItem("user");
      if (!userString) {
        alert("Please login to continue");
        return;
      }

      // Parse the JSON string to get the token object
      const userObj = JSON.parse(userString);
      const accessToken = userObj.access_token;

      if (!accessToken) {
        alert("Invalid authentication token. Please login again.");
        return;
      }

      let amount;
      let currency = userCurrency;

      if (plan.price === "Free" || plan.price === "Custom") {
        amount = plan.price;
      } else {
        const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
        amount = parseFloat((price * exchangeRate).toFixed(2));
      }

      const payload = {
        amount: amount,
        currency: currency,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Use the parsed access token
        },
      };

      console.log("Sending payload:", payload);
      console.log("Access Token:", accessToken);
      console.log("Headers:", config.headers);

      const response = await axios.post(
        "http://127.0.0.1:5000/process_payment",
        payload,
        config
      );

      if (response.data.payment_url) {
        console.log("Payment URL:", response.data.payment_url);
        setPaymentUrl(response.data.payment_url);
        setSelectedPlan(plan);
        setIsPaymentModalOpen(true);
        // window.location.href = ;
      } else {
        alert("Failed to get payment URL");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
        if (error.response.status === 401) {
          alert("Session expired. Please login again.");
          // Optionally redirect to login page
        } else if (error.response.status === 422) {
          alert("Invalid request. Please check your input.");
        } else {
          alert("Error processing payment. Please try again.");
        }
      } else if (error.message === "Unexpected token") {
        alert("Authentication error. Please login again.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
  // Currency symbols mapping
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
    BRL: "R$",
    CNY: "¥",
    HKD: "HK$",
    IDR: "Rp",
    ILS: "₪",
    KRW: "₩",
    MXN: "MX$",
    MYR: "RM",
    NZD: "NZ$",
    PHP: "₱",
    SGD: "S$",
    THB: "฿",
    TRY: "₺",
    ZAR: "R",
    CHF: "CHF",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    PLN: "zł",
    RUB: "₽",
    SAR: "﷼",
    AED: "د.إ",
    CZK: "Kč",
  };

  const fetchExchangeRates = async (currency) => {
    if (currency === "USD") {
      setExchangeRate(1);
      return;
    }

    try {
      console.log("Fetching exchange rate for:", currency);
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=USD&to=${currency}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Exchange rate response:", data);

      if (!data.rates || !data.rates[currency]) {
        throw new Error(`No exchange rate found for ${currency}`);
      }

      const rate = data.rates[currency];
      console.log("Setting exchange rate:", rate);
      setExchangeRate(rate);
    } catch (error) {
      console.error("Error fetching exchange rates:", {
        message: error.message,
        currency,
        stack: error.stack,
      });
      setDefaultCurrency();
    }
  };
  const detectUserLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported");
      setDefaultCurrency();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          console.log("Got position:", {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });

          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log("Location data:", data);

          if (!data.address?.country_code) {
            throw new Error("No country code in response");
          }

          const countryCode = data.address.country_code.toUpperCase();
          console.log("Detected country code:", countryCode);

          const currency = getCurrencyFromCountryCode(countryCode);
          console.log("Mapped to currency:", currency);

          if (supportedCurrencies.includes(currency)) {
            setUserCurrency(currency);
            setCurrencySymbol(currencySymbols[currency] || currency);
            await fetchExchangeRates(currency);
          } else {
            console.log(
              "Currency not supported, falling back to USD:",
              currency
            );
            setDefaultCurrency();
          }
        } catch (error) {
          console.error("Error detecting location:", {
            message: error.message,
            stack: error.stack,
          });
          setDefaultCurrency();
        }
      },
      (error) => {
        console.error("Geolocation error:", {
          code: error.code,
          message: error.message,
        });
        setDefaultCurrency();
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const setDefaultCurrency = () => {
    console.log("Setting default currency (USD)");
    setUserCurrency("USD");
    setExchangeRate(1);
    setCurrencySymbol("$");
  };

  const getCurrencyFromCountryCode = (countryCode) => {
    const countryToCurrency = {
      US: "USD",
      GB: "GBP",
      IN: "INR",
      JP: "JPY",
      AU: "AUD",
      CA: "CAD",
      FR: "EUR",
      DE: "EUR",
      BR: "BRL",
      CN: "CNY",
      HK: "HKD",
      ID: "IDR",
      IL: "ILS",
      KR: "KRW",
      MX: "MXN",
      MY: "MYR",
      NZ: "NZD",
      PH: "PHP",
      SG: "SGD",
      TH: "THB",
      TR: "TRY",
      ZA: "ZAR",
      CH: "CHF",
      SE: "SEK",
      NO: "NOK",
      DK: "DKK",
      PL: "PLN",
      RU: "RUB",
      SA: "SAR",
      AE: "AED",
    };
    return countryToCurrency[countryCode] || "USD";
  };

  useEffect(() => {
    detectUserLocation();
    // socket.on('payment_status', (data) => {
    //     if (data.is_payment_successful) {
    //         console.log("Frontend integration is successfull");

    //             navigate('/pricing');  // Redirect after a delay
    //           // 3-second delay before redirect
    //     }
    // });

    // // Clean up on unmount
    // return () => {
    //     socket.disconnect();
    // };
  }, []);

  const formatPrice = (price) => {
    if (price === "Free" || price === "Custom") return price;

    const convertedPrice = (price * exchangeRate).toFixed(2);
    const formattedNumber = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedPrice);

    return `${currencySymbol}${formattedNumber}`;
  };
  const pricingData = {
    starter: [
      {
        name: "Starter Lite",
        monthlyPrice: "Free",
        annualPrice: "Free",
        features: [
          "1 Free Dashboard",
          "8 Free dashboard widgets",
          "1 Generative BI dashboard",
        ],
      },
      {
        name: "Starter Growth",
        monthlyPrice: 35,
        annualPrice: 10,
        features: ["Unlimited dashboard widgets", "2 Generative BI dashboards"],
      },
      {
        name: "Starter Scale",
        monthlyPrice: 29,
        annualPrice: 8,
        features: ["Unlimited dashboard widgets", "5 Generative BI dashboards"],
      },
    ],
    enterprise: [
      {
        name: "Enterprise Lite",
        monthlyPrice: 26,
        annualPrice: 7,
        features: [
          "Unlimited dashboard widgets",
          "10 Generative BI dashboards",
        ],
      },
      {
        name: "Enterprise Growth",
        monthlyPrice: 24,
        annualPrice: 7.5,
        features: [
          "Unlimited dashboard widgets",
          "30 Generative BI dashboards",
        ],
      },
      {
        name: "Enterprise Scale",
        monthlyPrice: 21,
        annualPrice: 6,
        features: [
          "Unlimited dashboard widgets",
          "50 Generative BI dashboards",
        ],
      },
    ],
    expert: [
      {
        name: "Generative BI Developer",
        price: "Custom",
        features: [
          "Dedicated Generative BI Developer",
          "to analyse your data using SmartCard AI and",
          "to Develop dashboards using SmartCard AI",
        ],
      },
      {
        name: "More Dashboards",
        price: "Custom",
        features: ["If you want Additional dashboards"],
      },
    ],
  };

  const handleClosePayment = () => {
    setIsPaymentModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="fixed h-[calc(100vh-72px)] bottom-0 overflow-y-auto w-full font-sans p-14 ">
      <div className="pricing-header mb-8">
        <div className="toggle-container">
          <button
            className={`toggle-button ${!isAnnual ? "active" : ""}`}
            onClick={() => setIsAnnual(false)}
            aria-label="Switch to monthly pricing"
          >
            Monthly
          </button>
          <button
            className={`toggle-button ${isAnnual ? "active" : ""}`}
            onClick={() => setIsAnnual(true)}
          >
            Annually
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">

        <div className="tabs">
          <div className="tab-container">
            <button
              className={`tab ${activeKit === "starter" ? "active" : ""}`}
              onClick={() => setActiveKit("starter")}
            >
              Starter Kit
            </button>
            <button
              className={`tab ${activeKit === "enterprise" ? "active" : ""}`}
              onClick={() => setActiveKit("enterprise")}
            >
              Enterprise Kit
            </button>
            <button
              className={`tab ${activeKit === "expert" ? "active" : ""}`}
              onClick={() => setActiveKit("expert")}
            >
              Expert Kit
            </button>
          </div>
        </div>
        <div className="tabs">
          <div className="tab-container">
            <Link
              to="/signup"
              className="bg-[#22c55e] hover:bg-[#22c55e] text-white px-4 py-2 rounded-3xl transition-colors"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="bg-[#22c55e] hover:bg-[#22c55e] text-white px-4 py-2 rounded-3xl transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="pricing-plans">
        {pricingData[activeKit].map((plan, index) => (
          <div className="plan-card" key={index}>
            <h2 className="plan-name">{plan.name}</h2>
            {activeKit !== "expert" && (
              <div className="plan-price">
                {plan.price
                  ? formatPrice(plan.price)
                  : isAnnual
                    ? `${formatPrice(plan.annualPrice)}/Dashboard`
                    : `${formatPrice(plan.monthlyPrice)}/Dashboard`}
              </div>
            )}
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            {plan.price === "Custom" ? (
              <button className="buy-button bg-[#223bc5]">Talk To Sales</button>
            ) : (
              <button
                onClick={() => {
                  handleBuyClick(plan);
                  console.log(plan);
                }}
                className="buy-button bg-[#223bc5]"
              >
                Buy Now
              </button>
            )}
          </div>
        ))}
      </div>

      <PaymentModal
        className="w-[80vw]"
        isOpen={isPaymentModalOpen}
        onClose={handleClosePayment}
        paymentUrl={paymentUrl}
        selectedPlan={selectedPlan}
        formatPrice={formatPrice}
        isAnnual={isAnnual}
      />
    </div>
  );
};

export default Pricing;