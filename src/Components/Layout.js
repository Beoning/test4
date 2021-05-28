import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByBrand,
  selectCars,
  selectFilteredCars,
  filterByYear,
  filterByFuel,
  filterByBodyType,
  filterByModel,
  filterByPrice,
  priceToLow,
  priceToHigh,
  search,
  initialize,
} from "../store/reducers/Cars-reducer";
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
    marginBottom: 100,
  },
  self: {
    alignSelf: "flex-start",
    marginTop: 20,
    "&:first-of-type": {
      marginTop: 0,
    },
  },
  drawerPaper: {
    marginTop: headerHeight,
    width: drawerWidth,
  },
  girdContainer: {
    marginTop: 20,
  },
  groupContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  last: {
    display: "flex",
    flexDirection: "column",
  },
  select: {
    width: 200,
    marginRight: 20,
  },
  btn: {
    marginTop: 20,
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
  search: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  align: {
    display: "flex",
    justifyContent: "center",
  },
});

const Layout = () => {
  const classes = useStyles();
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  const [brand, setBrand] = useState("Все");
  const [model, setModel] = useState("Сначала выберите бренд");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [bodyType, setBodyType] = useState("Все");
  const [price, setPrice] = useState("Любая");

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterByBrand(brand));
    dispatch(filterByModel({ brand, model }));
    dispatch(filterByYear(year));
    dispatch(filterByFuel(fuel));
    dispatch(filterByBodyType(bodyType));
    dispatch(filterByPrice(price));
  };
  useEffect(() => dispatch(initialize()), [dispatch]);
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
          <Typography className={classes.btn} variant="h6" align="center">
            Фильтрация по параметрам
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            {/* Фильтр по бренду */}

            <div className={classes.self}>
              <div className={classes.wrapper}>
                <div>
                  <InputLabel id="brand">Бренд</InputLabel>
                  <Select
                    labelId="brand"
                    id="select"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="Все">Все</MenuItem>
                    <MenuItem value="Ferrari">Ferrari</MenuItem>
                    <MenuItem value="Toyota">Toyota</MenuItem>
                    <MenuItem value="Tesla">Tesla</MenuItem>
                    <MenuItem value="Kia">Kia</MenuItem>
                    <MenuItem value="Hyundai">Hyundai</MenuItem>
                    <MenuItem value="Ford">Ford</MenuItem>
                    <MenuItem value="BMW">BMW</MenuItem>
                    <MenuItem value="Volkswagen">Volkswagen</MenuItem>
                    <MenuItem value="Porsche">Porsche</MenuItem>
                    <MenuItem value="Lamborghini">Lamborghini</MenuItem>
                    <MenuItem value="Mercedes">Mercedes</MenuItem>
                  </Select>
                </div>

                {/* Фильтр по модели */}

                <div>
                  <InputLabel id="">Модель</InputLabel>
                  <Select
                    labelId="model"
                    id="select"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className={classes.select}
                  >
                    {brand !== "Все" ? (
                      <MenuItem value="Все">Все</MenuItem>
                    ) : model !== "Сначала выберите бренд" &&
                      model !== "Все" ? (
                      <MenuItem value="Все">Все</MenuItem>
                    ) : model && brand === "Все" ? null : (
                      <MenuItem value="Все">Все</MenuItem>
                    )}
                    {brand === "Все" ? (
                      <MenuItem value={model}>{model}</MenuItem>
                    ) : (
                      cars
                        .filter((car) => car.brand === brand)
                        .map((elem) => (
                          <MenuItem value={elem.model} key={elem.value}>
                            {elem.model}
                          </MenuItem>
                        ))
                    )}
                  </Select>
                </div>
              </div>
            </div>

            {/* Фильтр по году выпуска */}

            <FormControl className={classes.self}>
              <FormLabel>Год выпуска</FormLabel>
              <RadioGroup
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <div className={classes.groupContainer}>
                  <FormControlLabel value="" control={<Radio />} label="Все" />
                  <FormControlLabel
                    value="2021"
                    control={<Radio />}
                    label="2021"
                  />
                  <FormControlLabel
                    value="2019"
                    control={<Radio />}
                    label="2019"
                  />
                  <FormControlLabel
                    value="2018"
                    control={<Radio />}
                    label="2018"
                  />
                  <FormControlLabel
                    value="2017"
                    control={<Radio />}
                    label="2017"
                  />
                  <FormControlLabel
                    value="2016"
                    control={<Radio />}
                    label="2016"
                  />
                  <FormControlLabel
                    value="2013"
                    control={<Radio />}
                    label="2013"
                  />

                  <FormControlLabel
                    value="2012"
                    control={<Radio />}
                    label="2012"
                  />
                </div>
              </RadioGroup>
            </FormControl>

            {/* Фильтр по топливу*/}

            <FormControl className={classes.self}>
              <FormLabel>Топливо</FormLabel>
              <RadioGroup
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              >
                <div className={classes.groupContainer}>
                  <FormControlLabel value="" control={<Radio />} label="Все" />
                  <FormControlLabel
                    value="petrol"
                    control={<Radio />}
                    label="Бензин"
                  />
                  <FormControlLabel
                    value="diesel"
                    control={<Radio />}
                    label="Дизель"
                  />
                  <FormControlLabel
                    value="electric"
                    control={<Radio />}
                    label="Электричество"
                  />
                  <FormControlLabel
                    value="hybrid"
                    control={<Radio />}
                    label="Гибрид"
                  />
                </div>
              </RadioGroup>
            </FormControl>

            {/* Фильтр по кузову */}

            <div className={classes.self}>
              <InputLabel id="bodyType">Кузов</InputLabel>
              <Select
                labelId="bodyType"
                id="select"
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                className={classes.select}
              >
                <MenuItem value="Все">Все</MenuItem>
                <MenuItem value="Coupe">Coupe</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Liftback">Liftback</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
                <MenuItem value="MPV">MPV</MenuItem>
                <MenuItem value="Estate">Estate</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Pickup">Pickup</MenuItem>
                <MenuItem value="Cabrio">Cabrio</MenuItem>
              </Select>
            </div>

            {/* Фильтр по стоимости */}

            <FormControl className={classes.self}>
              <FormLabel>Цена</FormLabel>
              <RadioGroup
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <div className={classes.last}>
                  <FormControlLabel
                    value="Любая"
                    control={<Radio />}
                    label="Любая"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="До 1.000.000"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="От 1.000.000 до 5.000.000"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="От 5.000.000 до 10.000.000"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="От 10.000.000"
                  />
                </div>
              </RadioGroup>
            </FormControl>

            <Button
              className={classes.btn}
              variant="contained"
              type="submit"
              color="secondary"
            >
              Применить фильтр
            </Button>
          </form>
        </Drawer>

        {/* Главный контент */}

        <div>
          <div className={classes.search} style={{ width: 800 }}>
            <Autocomplete
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                dispatch(search(newInputValue));
              }}
              options={cars.map((car) => car.model)}
              renderInput={(params) => (
                <TextField
                  style={{ width: 300 }}
                  {...params}
                  label="Поиск по модели"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
            <ButtonGroup
              color="secondary"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => dispatch(priceToLow())}>
                По возрастанию
                <ArrowDropUpIcon />
              </Button>
              <Button onClick={() => dispatch(priceToHigh())}>
                По убыванию
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
          </div>

          {/* Тачки */}

          <Grid className={classes.girdContainer} container spacing={3}>
            {filteredCars.length === 0 ? (
              <Grid className={classes.align} item xs={12}>
                <Typography variant="h6">
                  Нет моделей по заданным фильтрам
                </Typography>
              </Grid>
            ) : (
              filteredCars.map((filteredCar) => (
                <Car info={filteredCar} key={filteredCar.id} />
              ))
            )}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Layout;
