"use client"
import LatestactivitiesCarosel from "@components/components/ui/LatestactivitiesCarosel"
import LatestNews from "@components/components/LatestNews"
import TargetBeneficiaries from "@components/components/ui/TargetBeneficiaries"

export default function latestActivities(){
    return (
      <div>
        <LatestactivitiesCarosel/>
       <div className="mt-5">
       <LatestNews/>
       </div>
       <TargetBeneficiaries/>
      </div>
    )
}