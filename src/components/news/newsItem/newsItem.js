import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, CardActionArea, CardActions, Grid, Box } from "@mui/material";

const NewsItem = ({ title, description, author, published, image, url }) => (
  <Card sx={{ maxWidth: 345, height: 400 }}>
    <CardActionArea sx={{ height: 340 }}>
      <Link href={url} target="_blank" underline="none">
        {image ? (
          <Box className="img-hover-zoom">
            <CardMedia component="img" height="140" image={image} />
          </Box>
        ) : null}
        <CardContent sx={image ? { height: 150 } : { height: 300 }}>
          <Typography
            gutterBottom
            variant="h5"
            textAlign="left"
            component="span"
            display="block"
            color="text.primary"
          >
            {image ? title.substr(0, 50) + "..." : title.substr(0, 100) + "..."}
          </Typography>

          <Typography textAlign="left" variant="body2" color="text.secondary">
            <span
              dangerouslySetInnerHTML={
                image
                  ? {
                      __html: description.substr(0, 100) + "...",
                    }
                  : {
                      __html: description.substr(0, 330) + "...",
                    }
              }
            />
          </Typography>
        </CardContent>
      </Link>
    </CardActionArea>
    <CardActions display="flex">
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        p="0 12px 12px 12px"
      >
        <Grid item textAlign="left">
          <Typography size="small" variant="body2" sx={{ fontSize: "15px" }}>
            {author ? author.substr(0, 20) + "..." : null}
          </Typography>
          <Typography size="xs" variant="body4" sx={{ fontSize: "12px" }}>
            {new Date(published).toLocaleDateString("en-US")}
          </Typography>
        </Grid>
        <Grid>
          <Link
            href={url}
            size="small"
            underline="none"
            target="_blank"
            color="text.disabled"
          >
            Read more...
          </Link>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
);

export default NewsItem;
