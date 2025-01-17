"use client"
import { Typography } from "@mui/material"
export default function OurVision(){
    return( 
            <div
            className="max-w-96 m-6 bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-125 animate-grow"
          >
             <Typography
              variant="h6"
              className="text-orange-600 font-bold mb-4 text-center"
            >
             OUR VISION
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-700 leading-relaxed mb-6 text-center text-balance"
            >
              To Promote SDG awareness and provide a platform for youth and women to actively participate in 
              addressing economic challenges affecting thie communities inclusively and sustnainably.
            </Typography>
            </div>
    )
}