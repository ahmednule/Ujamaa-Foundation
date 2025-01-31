"use client"
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function ResponsiveCards({title, description}) {
    return (
        <div className="bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <Typography
                variant="h5"
                className="text-blue-500 font-semibold mb-4 text-center"
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                className="text-gray-600 text-center"
            >
                {description}
            </Typography>
        </div>
    );
}

ResponsiveCards.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}