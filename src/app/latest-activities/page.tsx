"use client"
import LatestactivitiesCarosel from "@components/components/ui/LatestactivitiesCarosel"
import LatestNews from "@components/components/LatestNews"

export default function latestActivities(){
    return (
      <div>
        <LatestactivitiesCarosel/>
       <div className="mt-5">
       <LatestNews/>
       </div>
      </div>
    )
}