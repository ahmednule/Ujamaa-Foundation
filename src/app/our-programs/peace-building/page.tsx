"use client"
import ReusableCarosel from "@components/components/ui/ReusableCarosel"
import ReusableCard from "@components/components/ui/ReusableCard"
export default function peaceBuilding(){
    return(
        <div>
            <ReusableCarosel
            image="image8.jpg"
            heading="Together We Rise, Together we Thrive"
            />
            <ReusableCard
            heading="Peace Building among Communities"
            content="Ujamaa is fostering peace within communities by empowering youth to become leaders and agents of positive change.
             The foundation focuses on initiatives such as roundtable discussions, training sessions, and capacity-building efforts.
              It actively engages with the community, particularly youth and women, through education and empowerment programs. 
            A key achievement includes providing financial literacy training, resulting in 40 graduates, both locals and non-locals, under Ujamaa’s guidance."
            image="/image8.jpg"
            />
        </div>
    )
}