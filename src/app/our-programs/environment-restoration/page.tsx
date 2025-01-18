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
          image="/image15.jpg"
          />
        </div>
    )
}