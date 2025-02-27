<div className="max-w-7xl mx-auto p-8 overflow-hidden relative">
    {/* Navigation Buttons */}
    <button onClick={scrollPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">❮</button>
    <button onClick={scrollNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">❯</button>

    {/* Carousel */}
    <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-6">
            {statsData.map((stat) => {
                const totalIcons = stat.icons.length;
                const chunkSize = Math.ceil(totalIcons / 3);

                const firstSlice = stat.icons.slice(0, chunkSize);
                const secondSlice = stat.icons.slice(chunkSize, chunkSize * 2);
                const thirdSlice = stat.icons.slice(chunkSize * 2);

                return (
                    <div key={stat.id} className="bg-white rounded-xl p-6 shadow-lg flex flex-col gap-4 min-w-96">
                        {/* Marquee Effect with Slices */}
                        <div className="relative flex justify-center overflow-hidden h-48 bg-gray-100 rounded-md p-4">
                            {/* First slice */}
                            <div className="flex flex-col w-full space-y-3 animate-marquee">
                                {firstSlice.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center justify-center gap-2 bg-white shadow-md rounded-md p-3 w-24">
                                        {typeof item.icon === "string" ? (
                                            <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                        ) : (
                                            <item.icon className="w-10 h-10" />
                                        )}
                                        <p className="text-xs text-center">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Second slice */}
                            <div className="flex flex-col w-full space-y-3 animate-marquee-reverse">
                                {secondSlice.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center justify-center gap-2 bg-white shadow-md rounded-md p-3 w-24">
                                        {typeof item.icon === "string" ? (
                                            <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                        ) : (
                                            <item.icon className="w-10 h-10" />
                                        )}
                                        <p className="text-xs text-center">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Third slice */}
                            <div className="flex flex-col w-full space-y-3 animate-marquee">
                                {thirdSlice.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center justify-center gap-2 bg-white shadow-md rounded-md p-3 w-24">
                                        {typeof item.icon === "string" ? (
                                            <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                        ) : (
                                            <item.icon className="w-10 h-10" />
                                        )}
                                        <p className="text-xs text-center">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Info */}
                        <div className="text-center">
                            <p className="text-lg text-[#4a4a4a]">{stat.subtitle}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
</div>
