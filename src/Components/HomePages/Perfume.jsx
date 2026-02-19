import React from "react";

const Perfume = () => {

  const services = [
    {
      id: 1,
      title: "Maknoun",
      description:
        "A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.",
      price: "7 QAR",
      image:
        "https://lundary.vercel.app/home/maknoun.jpg",
    },
    {
      id: 2,
      title: "Mad",
      description:
        "A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence. ",
      price: "7 QAR",
      image:
        "https://lundary.vercel.app/home/mad.jpg",
    },
    {
      id: 3,
      title: "Lulwa",
      description:
        "The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.",
      price: "7 QAR",
      image:
        "https://lundary.vercel.app/home/lulwa.jpg",
    },
    {
      id: 4,
      title: "Sadf",
      description:
        "A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.",
      price: "7 QAR",
      image:
        "https://lundary.vercel.app/home/sadf.jpg",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="h-[30vh] w-full flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl md:text-5xl font-bold font-monoCustom text-center">
          Akoya Signature Fragrances
        </h1>

        <div className="px-3 text-lg md:text-xl text-[#72716f] text-center">
          Premium scents crafted to elevate your laundry experience
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4">

        {services.map((service) => (
          <div
            key={service.id}
            className="w-70 bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col hover:scale-105"
          >

            <div className="h-50 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
                   <div className="flex justify-center items-center  gap-30">
              <div className="mt-4">
                <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wide">
                  {service.price}
                </span>
              </div>
              <div className="mt-4">
                <button className="py-1 px-5.5 text-white bg-[#e5be3c] rounded-3xl">
                    Add
                </button>
              </div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Perfume;