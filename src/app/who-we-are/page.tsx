"use client"
import AboutUs from "@components/components/AboutUs"
import AboutusCarosel from "@components/components/ui/AboutusCarosel"
import OurVision from "@components/components/ui/OurVision"
export default function whoWeare(){
    return(
        <>
        <AboutusCarosel/>
        <AboutUs/>
        <div>
            <OurVision/>
        </div>
        </>
    )
}