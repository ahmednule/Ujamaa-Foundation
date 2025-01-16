"use client"
import { Typography, Card, CardContent,Box, List, ListItem, Divider, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
// import { PhoneEnabledIcon, EmailIcon, LocationOnIcon,FacebookIcon,XIcon,InstagramIcon} from "@mui/icons-material"
import CopyRight from "@components/components/ui/CopyRight"
export default function Footer(){
    return (
        <>
        <div className="bg-[#ADD8E6] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2" >

        <Card className="max-w-96 max-h-50 " sx={{marginLeft:"40px",  borderRadius:"16px"}} >
            <CardContent className="mt-3">
            <Typography variant="h4" color="black">
                    ABOUT US
                </Typography>
                <Typography variant="body1" className="text-balance">
                Ujamaa Foundation is a not for profit, Community based, non governmental Youth led
organization registered in the department of social development, Wajir County in 2022.
Ujamaa Foundation works with established youth groups and women groups in the six sub
counties in empowering the community on development issues, Quality Education, Health,
environmental protection and climate change mitigation and Peace justice and strong institutions.
                </Typography>
                </CardContent>
        </Card>
        <Card className="max-w-96 max-h-50 " sx={{marginLeft:"40px",marginTop:"20px", borderRadius:"16px"}} >
            <CardContent className="mt-3">
            <Typography variant="h4" color="black">
                    OUR KEY PROGRAMS
                </Typography>
                <List>
                    <ListItem sx={{cursor:"pointer"}}>
                        Peace Building and Community Cohesion
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{cursor:"pointer"}}>
                       Education Sector Empowerement
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{cursor:"pointer"}}>
                    Environmental Restoration and Natural Resourse Management
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{cursor:"pointer"}} component="a" href="#">
                    Training and Capacity Building
                    </ListItem>
                </List>
                </CardContent>
        </Card>
        <Card className="max-w-96 max-h-50 " sx={{marginLeft:"40px",marginTop:"20px", borderRadius:"16px"}} >
            <CardContent className="mt-3">
            <Typography variant="h4" color="black">
                   CONTACT INFOMATION
                </Typography>
                <List>
                    <ListItem sx={{cursor:"pointer"}}>
                    CEO Ujamaa Foundation: +254 722527325
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{cursor:"pointer"}}>
                    Email: iabdirahman030@gmail.com 
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{cursor:"pointer"}}>
                    Finance Manager: +254 722413082
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{cursor:"pointer"}}>
                    Email: abdullahialim2@gmail.com
                    </ListItem>
                </List>
                </CardContent>
        </Card>
        </div>
        <CopyRight/>
        </>
    )
}