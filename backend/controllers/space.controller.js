import {modelSpace} from "../models/space.model.js";

export const createSpace = async (req, res) => {
    try {
        const { number, floor, size} = req.body;

        if (number == null || floor == null || size == null){
            return res.status(400).json({error: "Data must be complete."});
        }

        const space = {
            number: carModel,
            floor: maker,
            size: year
        };

        await modelCar.create(space);
        return res.status(201).json({ message: "Space created successfully." });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error when creating space: ", details: e.message });
    }
}

export const getSpace = async (req, res) => {
    try {
        const space = await modelSpace.find();
        return res.status(200).json(space)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Error when fetching space", details: e.message });
    }
}

export const spaceAssign = async(req, res) => {
    
}