"use client";

import { Typography, Box } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{ padding: "2rem", display: "flex", alignItems: "center", gap: "2rem" }}>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{ color: "green", fontWeight: "bold", marginBottom: "1rem" }}
        >
          Ujamaa Foundation, Sowing The Future.
        </Typography>
        <Typography variant="h3" sx={{ color: "#ADD8E6", fontWeight: "bold", marginBottom: "1rem" }}>
          ABOUT US
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Ujamaa Foundation is a non-profit, community-based, and youth-led organization
          registered in 2022 under the Department of Social Protection in Wajir County,
          Kenya. The organization is committed to empowering communities, particularly in
          North Eastern Kenya, through sustainable development initiatives.
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img
          src="/image6.jpeg" 
          alt="Community Support"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
}
