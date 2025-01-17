"use client"
import { Typography } from "@mui/material"
export default function AboutusCarosel(){
    return (
        <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
            backgroundImage: "url('/image6.jpeg')",
            filter:"brightness(.5)"
        }}
    >
            <Typography variant="h2">About Us</Typography>
        </div>
    )
}