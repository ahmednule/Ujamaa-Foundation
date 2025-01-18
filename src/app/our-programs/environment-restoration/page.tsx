"use client"

import ReusableCarosel from "@components/components/ui/ReusableCarosel"
import ReusableCard from "@components/components/ui/ReusableCard"
import ResponsiveCards from "@components/components/ui/ResponsiveCards"
import {environmentRestorationData} from "@components/lib/environmentRestorationData" 
import {environmentRestorationApproachData} from "@components/lib/environmentRestorationApproachData"


export default function environmentRestoration(){
    return(
        <div>
          <ReusableCarosel
          image="image15.jpg"
          heading="For a Better Tomorrow"
        button=''
        content=''
          />
          <ReusableCard
          heading="Environmental restoration and natural resource management"
          content="Restoring degraded areas and promoting sustainable management of shared resources is a key focus for Ujamaa Foundation. 
          To achieve this, the foundation has implemented various activities, including tree planting initiatives aimed at improving natural resource management. 
          Over the years, Ujamaa has been actively involved in planting trees in degraded areas within communities, as well as in public institutions like schools, 
          hospitals, and administrative offices to enhance tree cover. 
          The trees planted are mostly local species chosen for their resilience to dry conditions, ensuring that they thrive in these challenging environments."
          image="/image13.jpg"
          />
           <h2 className="text-center text-green-500 text-3xl font-bold my-8">HOW WE DO</h2>
        <div className="px-8 m-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {environmentRestorationData.map((data, index) => (
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
            {environmentRestorationApproachData.map((data, index) => (
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