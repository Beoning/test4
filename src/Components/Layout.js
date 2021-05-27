import {
  AppBar,
  Button,
  Container,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../store/reducers/Cars-reducer";
import Car from "./Car";

const headerHeight = 65;
const drawerWidth = 500;

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    height: headerHeight,
  },
  container: {
    display: "flex",
    marginTop: headerHeight,
  },
  drawer: {
    width: drawerWidth,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  self: {
    alignSelf: "flex-start",
  },
  drawerPaper: {
    marginTop: headerHeight,
    width: drawerWidth,
  },
  girdContainer: {
    marginTop: 20,
  },
});

const Layout = () => {
  const classes = useStyles();
  const cars = useSelector(selectCars);
  const [model, setModel] = useState("Ferrari");
  return (
    <Container>
      <AppBar elevation={0}>
        <Toolbar className={classes.header}>
          <Typography variant="h2">Автомобили</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <form className={classes.form}>
            <FormControl className={classes.self}>
              <FormLabel>Модель</FormLabel>
              <RadioGroup
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <FormControlLabel
                  value="Lamborghini"
                  control={<Radio />}
                  label="Lamborghini"
                />
                <FormControlLabel
                  value="Ferrari"
                  control={<Radio />}
                  label="ferrari"
                />
                <FormControlLabel
                  value="Mercedes"
                  control={<Radio />}
                  label="Mercedes"
                />
                <FormControlLabel
                  value="Toyota"
                  control={<Radio />}
                  label="Toyota"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" type="submit" color="secondary">
              Применить фильтр
            </Button>
          </form>
        </Drawer>
        <Grid className={classes.girdContainer} container spacing={3}>
          {cars.map((car) => (
            <Car info={car} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Layout;
