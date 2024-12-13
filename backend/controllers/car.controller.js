import { modelCar } from "../models/car.model.js"

export const createCar = async (req, res) => {
    try {
        const { carModel, maker, year, type, color, licensePlate } = req.body;

        if (carModel == null || maker == null || year == null || type == null || color == null || licensePlate == null){
            return res.status(400).json({error: "Data must be complete."});
        }

        const car = {
            carModel: carModel,
            maker: maker,
            year: year,
            type: type,
            color: color,
            licensePlate: licensePlate
        };

        await modelCar.create(car);
        return res.status(201).json({ message: "Car created successfully." });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error when creating car: ", details: e.message });
    }
}

export const getCar = async (req, res) => {
    try {
        const car = await modelCar.find();
        return res.status(200).json(car)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Error when fetching car", details: e.message });
    }
}