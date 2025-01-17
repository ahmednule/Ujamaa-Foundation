"use client"
import { Typography } from "@mui/material"
export default function OurMission(){
    return(
        <div
        className="max-w-96 m-6 bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-125 animate-grow"
      >
         <Typography
          variant="h6"
          className="text-orange-600 font-bold mb-4 text-center"
        >
         OUR MISSION
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-700 leading-relaxed mb-6 text-center text-balance"
        >
         To equip youth and women with the necessary skills, knowledge and tools to lead sustainable developmeent initiatives in there communities.
        </Typography>
        </div>
    )
}