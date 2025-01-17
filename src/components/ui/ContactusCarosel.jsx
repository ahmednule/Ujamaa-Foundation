"use client"
import { Typography } from "@mui/material"
export default function ContactusCarosel(){
    return(
        <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
            backgroundImage: "url('/image14.jpg')",
            filter:"brightness(.5)"
        }}
    >
         <b> <Typography variant="h2">Contact Us</Typography></b>
        </div>
    )
}