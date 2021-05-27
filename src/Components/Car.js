import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

const Car = ({ info }) => {
  return (
    <Grid item xs={6}>
      <Card elevation={3}>
        <CardHeader title={info.brand} subheader={info.model} />
        <CardContent>
          <Typography>Год выпуска: {info.year}</Typography>
          <Typography>Тип двигателя: {info.fuel}</Typography>
          <Typography>Кузов: {info.bodyType}</Typography>
          <Typography>Стоимость: {info.price} руб.</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Car;
