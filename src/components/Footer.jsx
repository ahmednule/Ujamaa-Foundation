import { Typography, Card, CardHeader, CardContent,Box, List, ListItem, ListItemButton, Divider } from "@mui/material"
export default function Footer(){
    return (
        <>
        <Box sx={{backgroundColor:"lightblue"}}>

        <Card className="max-w-96 max-h-50 " sx={{marginLeft:"40px",marginTop:"20px"}} >
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
        <Card className="max-w-96 max-h-50 " sx={{marginLeft:"40px",marginTop:"20px"}} >
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
        </Box>
        </>
    )
}