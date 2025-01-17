"use client" 
import ContactusCarosel from "@components/components/ui/ContactusCarosel"
import HowtoSupport from "@components/components/ui/HowtoSupport"
import ContactusForm from "@components/components/ui/ContactusForm"
export default function contactUs(){
    return(
        <div>
            <ContactusCarosel/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <HowtoSupport/>
        <ContactusForm/>
        </div>
        </div>
    )
}