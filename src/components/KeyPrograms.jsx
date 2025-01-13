"use client";

import { Typography } from "@mui/material";
import {programs} from "@components/lib/CardLinks"

export default function KeyPrograms() {


  return (
    <div className="p-8">
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
