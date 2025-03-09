import React from 'react'
import logo1 from '../../assets/WhatsApp Image 2025-03-09 at 14.19.48_4bb77583.jpg'
import logo2 from '../../assets/WhatsApp Image 2025-03-09 at 14.19.48_a1f9ade3.jpg'
import logo3 from '../../assets/WhatsApp Image 2025-03-09 at 14.33.18_40c550ae.jpg'
export const OtherCompany = () => {
    return (
        <div>
            <div className='flex justify-center gap-16 my-14 '>

                <img src={logo2} className=' h-20 w-auto' alt="Logo 2" />
                <img src={logo1} className=' h-20 w-auto' alt="Logo 1" />
                <img src={logo3} className=' h-20 w-auto' alt="Logo 3" />

            </div>




        </div>
    )
}
