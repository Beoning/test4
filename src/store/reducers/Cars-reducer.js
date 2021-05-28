import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [
      {
        brand: "Ferrari",
        imageUrl:
          "https://i.gaw.to/vehicles/photos/09/28/092875_2019_ferrari_812.jpg?640x400",
        model: "812 Superfast",
        year: 2017,
        fuel: "petrol",
        bodyType: "Coupe",
        price: 21000000,
        id: nanoid(),
      },
      {
        brand: "Ferrari",
        imageUrl: "https://images.drive.ru/i/0/577683a3ec05c4fc63000492.jpg",
        model: "488 GTB",
        year: 2018,
        fuel: "petrol",
        bodyType: "Coupe",
        price: 18500000,
        id: nanoid(),
      },
      {
        brand: "Toyota",
        imageUrl:
          "https://cdn.motor1.com/images/mgl/9qE3b/s1/2021-toyota-prius-front-quarter-tight.jpg",
        model: "Prius",
        year: 2021,
        fuel: "diesel",
        bodyType: "Sedan",
        price: 2322000,
        id: nanoid(),
      },
      {
        brand: "Toyota",
        imageUrl:
          "https://qrentauto.ru/wp-content/uploads/2018/11/toyota-camry.jpg",
        model: "Camry VIII",
        year: 2021,
        fuel: "petrol",
        bodyType: "Sedan",
        price: 2099000,
        id: nanoid(),
      },
      {
        brand: "Tesla",
        imageUrl:
          "https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png",
        model: "Model 3",
        year: 2017,
        fuel: "electric",
        bodyType: "Liftback",
        price: 6000000,
        id: nanoid(),
      },
      {
        brand: "Kia",
        imageUrl: "https://www.avtoavenu.ru/wp-content/uploads/Kia-Rio-3.jpg",
        model: "Rio",
        year: 2013,
        fuel: "hybrid",
        bodyType: "Hatchback",
        price: 670000,
        id: nanoid(),
      },
      {
        brand: "Hyundai",
        imageUrl:
          "https://auto.ironhorse.ru/wp-content/uploads/2012/02/H1-old.jpg",
        model: "Grand Starex I",
        year: 2019,
        fuel: "diesel",
        bodyType: "MPV",
        price: 2978450,
        id: nanoid(),
      },
      {
        brand: "Ford",
        imageUrl:
          "https://www.zr.ru/d/story/6e/913006/autowp.ru_ford_focus_sedan_82-kopiya.jpg",
        model: "Focus III",
        year: 2012,
        fuel: "petrol",
        bodyType: "Estate",
        price: 535000,
        id: nanoid(),
      },
      {
        brand: "BMW",
        imageUrl:
          "https://cena-auto.ru/blocks/big_photo/src/images/cache/6118-705-0.jpg",
        model: "X6 M II (F86)",
        year: 2016,
        fuel: "petrol",
        bodyType: "SUV",
        price: 3333333,
        id: nanoid(),
      },
      {
        brand: "Volkswagen",
        imageUrl:
          "https://car-images.bauersecure.com/pagefiles/29191/vw-amarok_01.jpg",
        model: "Amarok Double Cab I",
        year: 2012,
        fuel: "diesel",
        bodyType: "Pickup",
        price: 1399000,
        id: nanoid(),
      },
      {
        brand: "Porsche",
        imageUrl:
          "https://img-c.drive.ru/models.photos/0000/000/000/000/b5a/48d3d51538bc9b68-large.jpg",
        model: "Boxster IV 718",
        year: 2019,
        fuel: "petrol",
        bodyType: "Cabrio",
        price: 7791369,
        id: nanoid(),
      },
      {
        brand: "Lamborghini",
        imageUrl:
          "https://www.bentleygoldcoast.com/galleria_images/7533/7533_p20_l.jpg",
        model: "Aventador",
        year: 2013,
        fuel: "petrol",
        bodyType: "Coupe",
        price: 18500000,
        id: nanoid(),
      },
      {
        brand: "Mercedes",
        imageUrl:
          "https://s.auto.drom.ru/i24227/c/photos/fullsize/mercedes-benz/amg_gt/mercedes-benz_amg_gt_862947.jpg",
        model: "Benz AMG GT I",
        year: 2019,
        fuel: "petrol",
        bodyType: "Liftback",
        price: 7250000,
        id: nanoid(),
      },
    ],
    filteredCars: [],
  },
  reducers: {
    filterByBrand: (state, action) => {
      if (action.payload === "Все") {
        state.filteredCars = state.cars;
      } else {
        state.filteredCars = state.cars.filter(
          (car) => car.brand === action.payload
        );
      }
    },
    filterByYear: (state, action) => {
      if (action.payload === "") {
        return state;
      } else {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.year === Number(action.payload)
        );
      }
    },
    filterByFuel: (state, action) => {
      if (action.payload === "") {
        return state;
      } else {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.fuel === action.payload
        );
      }
    },
    filterByBodyType: (state, action) => {
      if (action.payload === "Все") {
        return state;
      } else {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.bodyType === action.payload
        );
      }
    },
    filterByModel: (state, action) => {
      if (action.payload.model === "Сначала выберите бренд") {
        return state;
      } else if (action.payload.model === "Все") {
        state.filteredCars = state.cars.filter(
          (car) => car.brand === action.payload.brand
        );
      } else if (
        action.payload.brand === "Все" &&
        action.payload.model !== "Все" &&
        action.payload.model !== "Сначала выберите бренд"
      ) {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.brand === action.payload.brand
        );
      }

      if (action.payload.brand !== "Все" && action.payload.model !== "Все") {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.model === action.payload.model
        );
      }
    },
    filterByPrice: (state, action) => {
      if (action.payload === "Любая") {
        return state;
      }
      if (Number(action.payload) === 1) {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.price < 1000000
        );
      }
      if (Number(action.payload) === 2) {
        state.filteredCars = state.filteredCars.filter(
          (car) => 1000000 <= car.price && car.price < 5000000
        );
      }
      if (Number(action.payload) === 3) {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.price >= 5000000 && car.price < 10000000
        );
      }
      if (Number(action.payload) === 4) {
        state.filteredCars = state.filteredCars.filter(
          (car) => car.price > 10000000
        );
      }
    },
    priceToLow: (state) => {
      if (state.filteredCars.length === 0) {
        state.filteredCars = state.cars;
      }
      state.filteredCars.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    },
    priceToHigh: (state) => {
      if (state.filteredCars.length === 0) {
        state.filteredCars = state.cars;
      }
      state.filteredCars.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    },
    search: (state, action) => {
      if (state.filteredCars.length === 0) {
        state.filteredCars = state.cars;
      }
      state.filteredCars = state.filteredCars.filter(
        (car) => car.model === action.payload
      );
    },
  },
});

export const {
  filterByYear,
  filterByBrand,
  filterByFuel,
  filterByBodyType,
  filterByModel,
  filterByPrice,
  priceToLow,
  priceToHigh,
  search,
} = carsSlice.actions;

export const selectCars = (state) => state.cars.cars;
export const selectFilteredCars = (state) => state.cars.filteredCars;

export default carsSlice.reducer;
