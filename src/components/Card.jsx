import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({name, description, image_url, tagline}) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "white",
        boxShadow: "0px 0px 4px 1px #720e9e",
      }}
    >
      <CardActionArea sx={{ display: "flex", padding: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={image_url}
          alt="green iguana"
          sx={{
            display: "flex",
            paddingX: 3,
            objectFit: "contain",
            width: "50px",
          }}
        />
        <CardContent
          sx={{ paddingY: 1, paddingX: 2, height: 250, overflow: "hidden" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720e9e",
              fontWeight: "900",
              backgroundColor: "white",
              padding: 0.5,
              borderRadius: "10px",
            }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: 16,
              color: "#FF00BF",
            }}
          >
            {tagline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
