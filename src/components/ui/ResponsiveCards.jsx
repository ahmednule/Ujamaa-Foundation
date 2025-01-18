import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function ResponsiveCards({heading, title, description}) {
    return (
        <div className="p-8">
            <Typography variant="h4" className="text-center m-11">
              <span className="text-green-600">{heading} </span>  
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6">
                    <div 
                        className="bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <Typography 
                            variant="h5" 
                            className="text-green-500 font-semibold mb-4 text-center"
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
            </div>
        </div>
    );
}

ResponsiveCards.propTypes={
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}