"use client";
import ReusableCarosel from "@components/components/ui/ReusableCarosel";
import ReusableCard from "@components/components/ui/ReusableCard";
import ResponsiveCards from "@components/components/ui/ResponsiveCards";
import { peaceBuildingData } from "@components/lib/peaceBuildingData"
import { peaceBuildingApproachData } from "@components/lib/peaceBuildingApproachData"

export default function peaceBuilding() {
    return (
        <div>
            <ReusableCarosel
                image="image8.jpg"
                heading="Together We Rise, Together We Thrive"
                 button=''
                 content=''
            />
            <ReusableCard
                heading="Peace Building among Communities"
                content="Ujamaa is fostering peace within communities by empowering youth to become leaders and agents of positive change.
                         The foundation focuses on initiatives such as roundtable discussions, training sessions, and capacity-building efforts.
                         It actively engages with the community, particularly youth and women, through education and empowerment programs.
                          A key achievement includes providing financial literacy training, resulting in 40 graduates, both locals and non-locals, under Ujamaa's guidance."
                image="/image8.jpg"
            />
            <h2 className="text-center text-green-500 text-3xl font-bold my-8">HOW WE DO</h2>
            <div className="px-8 m-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {peaceBuildingData.map((data, index) => (
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
                {peaceBuildingApproachData.map((data, index) => (
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
    );
}