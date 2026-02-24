import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ahmed Al-Mansoori",
      role: "Head of Couture Care",
      bio: "20+ years in luxury garment care",
      img: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg",
    },
    {
      id: 2,
      name: "Layla Hassan",
      role: "Fabric Technology Expert",
      bio: "Fabric scientist and preservation expert",
      img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    },
    {
      id: 3,
      name: "Yousef Ibrahim",
      role: "Operations Director",
      bio: "Ensuring seamless service delivery",
      img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light">
          Meet Our Fabric Specialists
        </h2>
        <div className="w-20 h-px mx-auto bg-[#e5be3c] mt-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Our team of garment care experts brings decades of combined
          experience in handling luxury fabrics.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-[#f8f5f2] rounded-2xl p-8 shadow-md 
                       flex flex-col items-center text-center
                       max-w-[340px] w-full mx-auto
                       min-h-[350px]
                       hover:shadow-xl hover:-translate-y-2 
                       transition-all duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full border-4 border-[#e5be3c] mb-6 object-cover"
            />

            <h3 className="font-semibold text-lg mb-2">
              {member.name}
            </h3>

            <p className="text-[#e5be3c] text-sm mb-3">
              {member.role}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;