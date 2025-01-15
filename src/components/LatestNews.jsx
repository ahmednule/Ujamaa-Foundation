import { Typography, Card, CardContent, CardMedia, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";

export default function LatestNews() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography variant="h3" color="green" className="text-center text-2xl mt-3">LATEST NEWS</Typography>
      <Card sx={{ maxWidth: 500, borderRadius: "16px", marginLeft: "30px"}} className="hover:scale-105">
        <CardMedia
          component="img"
          alt="Ujamaa Foundation Initiatives"
          height="200"
          image="image2.jpeg"
        />
        <CardContent>
          <Typography variant="h5" color="green">Tree Planting Day</Typography>
          <Typography variant="body1">
            Ujamaa Foundation has over the years been involved in activities aimed at promoting natural resources management to improve the situation of drought. 
          </Typography>
        </CardContent>
        <CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            To this end, Ujamaa Foundation has established tree planting. These trees are planted in degraded areas among the communities as well as public institutions such as schools, hospitals, and administrative areas to improve tree cover. Most of the trees raised are those of local tree species that are capable of surviving in these dry areas.
            </Typography>
          </Collapse>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ marginLeft: "auto", display: "block" }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
}
