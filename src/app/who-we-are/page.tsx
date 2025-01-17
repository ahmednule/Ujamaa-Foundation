"use client"
import AboutUs from "@components/components/AboutUs"
import AboutusCarosel from "@components/components/ui/AboutusCarosel"
import OurVision from "@components/components/ui/OurVision"
import OurMission from "@components/components/ui/OurMission"
import FutureGoals from "@components/components/ui/FutureGoals"
import TargetBeneficiaries from "@components/components/ui/TargetBeneficiaries"
export default function whoWeare(){
    return(
        <>
        <AboutusCarosel/>
        <AboutUs/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <OurVision/>
            <OurMission/>
            <FutureGoals/>
        </div>
        <TargetBeneficiaries/>
        </>
    )
}