"use client"
import ReusableCarosel from "@components/components/ui/ReusableCarosel"
import ReusableCard from "@components/components/ui/ReusableCard"
import ResponsiveCards from "@components/components/ui/ResponsiveCards"
import {educationEmpowermentApproachData} from "@components/lib/educationEmpowerementApproachData"
import {educationEmpowermentData} from "@components/lib/educationEmpowerementData"
export default function educationEmpowerement(){
    return(
        <div>
        <ReusableCarosel
        image="image7.jpg"
        heading="Sowing The Future"
        button=''
        content=''
        />
        <ReusableCard
        heading="Education Sector Support"
        content="Access to quality and affordable education is a fundamental right for every child in Kenya,
        but for pastoralist children, this right is often difficult to achieve. Families face tough decisions
        between sending their children to school and focusing on survival, with boys frequently tasked with herding 
        livestock and girls responsible for fetching water and managing household chores. These challenges contribute to low literacy levels and 
        high school dropout rates, which worsen during natural disasters like droughts.The Ujamaa Foundation has been making significant efforts
        to address these barriers by ensuring that children remain in school, even during challenging times. Through the support of its members, 
        the foundation has invested heavily in education and donated essential learning materials to schools like Biyaad Primary. 
        This commitment aims to improve access to education and create opportunities for pastoralist children to break the cycle of poverty 
        and achieve their potential."
        image="/image9.png"
                />
         <h2 className="text-center text-green-500 text-3xl font-bold my-8">HOW WE DO</h2>
        <div className="px-8 m-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationEmpowermentData.map((data, index) => (
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
            {educationEmpowermentApproachData.map((data, index) => (
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