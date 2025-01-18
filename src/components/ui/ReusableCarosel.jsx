import PropTypes from "prop-types"
import { Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function ReusableCarosel({ image, heading, content, button }) {
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
                <Typography variant="h2" className="text-center">{heading}</Typography>
                <div>
                    <Typography variant="body1" className="text-balance text-center max-w-100">{content}</Typography>
                    <div className="text-center m-3">
                    {button && (
                        <Link href="/contact-us">
                        <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                            {button}
                        </button>
                        </Link>
                         )}
                    </div>
                </div>
            </div>
        </div>
    )
}

ReusableCarosel.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string,
    button: PropTypes.string
}