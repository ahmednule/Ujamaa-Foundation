"use client"
import { Typography } from "@mui/material";
import {Card, CardHeader, CardContent, Button} from "@mui/material";
import { CardTitle } from "./card";

export default function TargetBeneficiaries() {
    return (
        <div
            className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white mt-11"
            style={{
                backgroundImage: "url('/image12.jpg')",
            }}
        >
            <Card className="ml-3">
                <CardTitle>
                <Typography
                variant="h3"
                className="text-left font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-lg ml-3"
            >
                <span className="text-green-400 ml-4">OUR TARGET </span>   <span className="text-green-900">  BENEFICIARIES</span>
            </Typography>
                </CardTitle>
                <CardContent>
                    <Typography variant="body1" className="text-balance" style={{maxWidth:"700px"}}> 
                        Ujamaa Foundation works with established youth groups and women groups in the six sub
                        counties in empowering the community on development issues, Quality Education, Health,
                        environmental protection and climate change mitigation and Peace justice and strong institutions.
                    </Typography>
                    <div className="flex flex-row-reverse mb-7 relative">
                    <Button variant="contained" size="large">SUPPORT US</Button>
                    </div>
                   
                </CardContent>
                </Card>
        </div>
    );
}
