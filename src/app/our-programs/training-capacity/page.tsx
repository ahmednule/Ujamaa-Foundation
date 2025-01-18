"use client"

import ReusableCarosel from "@components/components/ui/ReusableCarosel"
import ReusableCard from "@components/components/ui/ReusableCard"

export default function trainingCapacity(){
    return(
        <div>
            <ReusableCarosel
            image="image16.jpg"
            heading="Upskilling the Young Generation"
            />
            <ReusableCard
            heading="Trainings and capacity-building"
            content="Giving back to the community is a core mission of Ujamaa Foundation, which focuses on training and capacity-building.
             The foundation has played a leading role in educating and engaging the community, particularly empowering youth and women across the county.
              Through its initiatives, Ujamaa has facilitated financial literacy programs, offering both locals and non-locals the opportunity to become
              the first 40 graduates under its guidance. These efforts aim to strengthen community knowledge and financial skills, contributing to long-term empowerment."
            image="/image17.jpg"
            />
        </div>
    )
}