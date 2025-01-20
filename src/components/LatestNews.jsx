"use client"
import { Typography, Card, CardContent, CardMedia, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import {cardData} from "@components/lib/cardData"

export default function LatestNews() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography variant="h3" color="green" className="text-center text-2xl mt-4">LATEST NEWS</Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
      <Card key={index} sx={{ maxWidth: 500, borderRadius: "16px", marginLeft: "30px"}} className="hover:scale-105">
             <CardMedia
             component="img"
             alt={card.title}
             height="200"
             image={card.image}
           /> 
            <CardContent>
          <Typography variant="h5" color="green">{card.title}</Typography>
          <Typography variant="body1">
            {card.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.expandedDescription}
            </Typography>
          </Collapse>
          <IconButton
            onClick={() => handleExpandClick(index)}
            aria-expanded={expanded === index}
            aria-label="show more"
            sx={{ marginLeft: "auto", display: "block" }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardContent>
      </Card>
        ))}
       </div>
    </>
  );
}
