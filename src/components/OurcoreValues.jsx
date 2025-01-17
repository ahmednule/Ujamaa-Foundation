import { Typography } from "@mui/material";
import { OurcoreValuesData } from "@components/lib/OurcoreValuesData";

export default function OurcoreValues() {
    return (
        <div className="p-8">
            <Typography variant="h4" className="text-center m-11">
                OUR CORE VALUES
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6">
                {OurcoreValuesData.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white border border-green-300 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <Typography 
                            variant="h5" 
                            className="text-green-500 font-semibold mb-4 text-center"
                        >
                            {item.value}
                        </Typography>
                        <Typography 
                            variant="body1" 
                            className="text-gray-600 text-center"
                        >
                            {item.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
}
