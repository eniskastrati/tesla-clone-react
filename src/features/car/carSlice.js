import {createSlcie } from '@reduxjs/toolkit';

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlcie = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlcie.reducer