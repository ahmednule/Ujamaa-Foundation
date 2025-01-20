"use client"
import { Typography } from "@mui/material"

export default function FutureGoals(){
    return(
        <div
        className="max-w-96 m-6 bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-125 animate-grow"
      >
         <Typography
          variant="h6"
          className="text-blue-600 font-bold mb-4 text-center"
        >
         FUTURE GOALS
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-700 leading-relaxed mb-6 text-center text-balance"
        >
          To Promote SDG awareness and provide a platform for youth and women to actively participate in 
          addressing economic challenges affecting their communities inclusively and sustnainably not only in Wajir country but Nation wide too. Make Education accessible to all the children without barries like fees, books or
          school fees.
        </Typography>
        </div>
    )
}