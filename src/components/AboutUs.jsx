"use client";

import { Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <div className="p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <Typography
          variant="h5"
          className="text-green-500 font-bold mb-4"
        >
          Ujamaa Foundation, Sowing The Future.aas
        </Typography>
        <Typography
          variant="h3"
          className="text-[#ADD8E6] font-bold mb-4"
        >
          ABOUT US
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          Ujamaa Foundation is a non-profit, community-based, and youth-led organization
          registered in 2022 under the Department of Social Protection in Wajir County,
          Kenya. The organization is committed to empowering communities, particularly in
          North Eastern Kenya, through sustainable development initiatives.
        </Typography>
      </div>

      <div className="flex-1">
        <img
          src="/image6.jpeg"
          alt="Community Support"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
