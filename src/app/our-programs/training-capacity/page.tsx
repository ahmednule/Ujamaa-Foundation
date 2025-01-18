"use client"

import ReusableCarosel from "@components/components/ui/ReusableCarosel"
import ReusableCard from "@components/components/ui/ReusableCard"
import ResponsiveCards from "@components/components/ui/ResponsiveCards"
import {trainingCapacityData} from "@components/lib/trainingCapacityData"
import {trainingCapacityApproachData} from "@components/lib/trainingCapacityApproachData"

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
    <h2 className="text-center text-green-500 text-3xl font-bold my-8">HOW WE DO</h2>
            <div className="px-8 m-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trainingCapacityData.map((data, index) => (
                        <ResponsiveCards
                            key={index}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
            <h2 className="text-center text-green-500 text-3xl font-bold my-8">OUR APPROACH</h2>
            <div className="px-8 m-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingCapacityApproachData.map((data, index) => (
                    <ResponsiveCards
                        key={index}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </div>
        </div>
        <ReusableCarosel
            image="image18.jpg"
            heading="Our Future Goals"
            content="Ujamaa Foundation envisions a future where youth and women are empowered to lead sustainable development initiatives, 
            every child has access to quality education, and communities thrive through peace, environmental restoration, and resource 
            management."
            button="Support Our Cause"
            />
        </div>
    )
}