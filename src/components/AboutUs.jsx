"use client";

import { Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <div className="p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
       <div className="relative h-40 ">
       <Typography
          variant="h5"
          className="text-green-500 font-bold mb-1 absolute left-0 top-0 h-25 w-30"
        >
          Ujamaa Foundation, Sowing The Future 
        </Typography>
       </div>
        <Typography
          variant="h4"
          className="text-[#ADD8E6] font-bold mb-7"
        >
          ABOUT US
        </Typography>
        <Typography variant="body1" className="leading-relaxed text-balance mt-5">
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
