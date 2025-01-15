import { Typography, Card, CardHeader, CardContent, Box } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MyThemeProvider from "@components/lib/MyThemeProvider";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

export default function OurWork() {
    return (
        <MyThemeProvider>
            <Box sx={{ minWidth: 500, bgcolor: 'primary.main', p: 2 }} className="flex gap-5">
                <Card sx={{maxWidth:250, borderRadius:"16px"}}>
                    <CardHeader
                        avatar={<SchoolIcon />}
                        title="Education"
                        subheader="Helping Education"
                    />
                    <CardContent>
                        <Typography variant="h3">50+</Typography>
                        <Typography>Learning Materials Given In Schools to enhance edutaion in Semi arid areas</Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth:250, borderRadius:"16px"}}>
                    <CardHeader
                        avatar={<SchoolIcon />}
                        title="Environment"
                        subheader="Environmental Restoration"
                    />
                    <CardContent>
                        <Typography variant="h3">150+</Typography>
                        <Typography>Trees Plannted in Schools, Hospitals and Public Places to attract rain</Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth:250, borderRadius:"16px"}}>
                    <CardHeader
                        avatar={<SportsKabaddiIcon />}
                        title="Conflicts"
                        subheader="Conflict Resolution"
                    />
                    <CardContent>
                        <Typography variant="h3">30+</Typography>
                        <Typography>Conflict Resolution amoung the communities by Training and Capacity Building among the communities</Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth:250, borderRadius:"16px"}}>
                    <CardHeader
                        avatar={<DinnerDiningIcon />}
                        title="Relief "
                        subheader="Food Distribution"
                    />
                    <CardContent>
                        <Typography variant="h3">100+</Typography>
                        <Typography>Food Distribution to those unable to get it during very dry seosons when getting it is a lot of Work</Typography>
                    </CardContent>
                </Card>
            </Box>
        </MyThemeProvider>
    );
}
