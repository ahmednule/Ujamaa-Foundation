import PropTypes from "prop-types"
import { Typography } from "@mui/material"
import Image from "next/image"

export default function ReusableCarosel({ image, heading }) {
    return (
        <div className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={`/${image}`}
                    alt={heading}
                    fill
                    className="object-cover brightness-50"
                    priority
                    sizes="100vw"  
                    quality={85}   
                />
            </div>
            <div className="relative z-10">
                <Typography variant="h2">{heading}</Typography>
            </div>
        </div>
    )
}

ReusableCarosel.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}