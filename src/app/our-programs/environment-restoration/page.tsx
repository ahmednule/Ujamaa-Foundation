"use client"

import ReusableCarosel from "@components/components/ui/ReusableCarosel"
import ReusableCard from "@components/components/ui/ReusableCard"

export default function environmentRestoration(){
    return(
        <div>
          <ReusableCarosel
          image="image15.jpg"
          heading="For a Better Tomorrow"
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
        </div>
    )
}