"use client"
import { Typography } from "@mui/material"
export default function LatestactivitiesCarosel (){
    return (
        <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
            backgroundImage: "url('/image13.jpg')",
            filter:"brightness(.5)"
        }}
    >
            <Typography variant="h2" className="text-left">Latest Activivities</Typography>
        </div>
    )
}