import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  img: {
    height: 140,
  },
});

const Car = ({ info }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Card elevation={3}>
        <CardHeader title={info.brand} subheader={info.model} />
        <CardMedia
          image={info.imageUrl}
          className={classes.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography>Год выпуска: {info.year}</Typography>
          <Typography>Топливо: {info.fuel}</Typography>
          <Typography>Кузов: {info.bodyType}</Typography>
          <Typography>Стоимость: {info.price} руб.</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Car;
