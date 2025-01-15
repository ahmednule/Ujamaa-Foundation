import { Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MyThemeProvider from "@components/lib/MyThemeProvider";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

export default function OurWork() {
    return (
        <MyThemeProvider>
            <div className="p-8 bg-gray-50">
                <Typography
                    variant="h2"
                    className="text-center text-green-600 font-bold mb-6"
                >
                    Our Work
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <SchoolIcon className="text-green-600 mr-2" />
                            <Typography variant="h6" className="text-green-600 font-bold">
                                Education
                            </Typography>
                        </div>
                        <Typography variant="h3" className="text-gray-800 mb-2">
                            50+
                        </Typography>
                        <Typography className="text-gray-700">
                            Learning Materials Given In Schools to enhance education in semi-arid areas.
                        </Typography>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <SchoolIcon className="text-blue-600 mr-2" />
                            <Typography variant="h6" className="text-blue-600 font-bold">
                                Environment
                            </Typography>
                        </div>
                        <Typography variant="h3" className="text-gray-800 mb-2">
                            150+
                        </Typography>
                        <Typography className="text-gray-700">
                            Trees planted in schools, hospitals, and public places to attract rain.
                        </Typography>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <SportsKabaddiIcon className="text-orange-600 mr-2" />
                            <Typography variant="h6" className="text-orange-600 font-bold">
                                Conflicts
                            </Typography>
                        </div>
                        <Typography variant="h3" className="text-gray-800 mb-2">
                            30+
                        </Typography>
                        <Typography className="text-gray-700">
                            Conflict resolution among communities through training and capacity building.
                        </Typography>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <DinnerDiningIcon className="text-red-600 mr-2" />
                            <Typography variant="h6" className="text-red-600 font-bold">
                                Relief
                            </Typography>
                        </div>
                        <Typography variant="h3" className="text-gray-800 mb-2">
                            100+
                        </Typography>
                        <Typography className="text-gray-700">
                            Food distribution during very dry seasons to those unable to get it.
                        </Typography>
                    </div>
                </div>
            </div>
        </MyThemeProvider>
    );
}
