"use client";

import { Typography } from "@mui/material";

export default function KeyPrograms() {
  const programs = [
    {
      title: "Peace Building And Social Justice",
      description:
        "At UNKO, we prioritize the promotion of peace and social justice, particularly in areas affected by conflict. Our initiatives focus on fostering dialogue, encouraging reconciliation, and empowering communities to resolve conflicts amicably.",
      link: "#",
    },
    {
      title: "Education And Empowerment",
      description:
        "Our programs aim to increase access to quality education by building and rehabilitating schools in underserved areas, providing scholarships to disadvantaged students, and promoting adult literacy and vocational training.",
      link: "#",
    },
    {
      title: "Climate Change, Disaster Risk Reduction, And Humanitarian Intervention",
      description:
        "UNKO is committed to addressing climate change and its impacts. Our programs focus on sustainable environmental practices, such as eco-friendly agriculture and water conservation.",
      link: "#",
    },
    {
      title: "WASH (Water, Sanitation, And Hygiene) And Health",
      description:
        "We prioritize improving health outcomes through access to clean water, sanitation, and healthcare services. Our initiatives include establishing sustainable water sources, promoting hygiene education, and enhancing healthcare accessibility.",
      link: "#",
    },
  ];

  return (
    <div className="p-8">
      {/* Header Section */}
      <Typography variant="h2" className="text-center text-green-600 font-bold mb-4">
        OUR KEY PROGRAMS
      </Typography>
      <Typography
        variant="body1"
        className="text-center text-gray-600 mb-8 max-w-3xl mx-auto"
      >
        We are committed to transforming the lives of marginalized communities in northern
        Kenya through a comprehensive approach centered on six strategic programs.
      </Typography>

      {/* Programs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 animate-grow"
          >
            <Typography
              variant="h6"
              className="text-orange-600 font-bold mb-4"
            >
              {program.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-700 mb-6 leading-relaxed"
            >
              {program.description}
            </Typography>
            <a
              href={program.link}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
