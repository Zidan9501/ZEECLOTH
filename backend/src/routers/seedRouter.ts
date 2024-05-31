import asyncHandler from "express-async-handler";
import express, { Request, Response } from "express";
import { ProductModel } from "../models/productModel";
import { sampleProducts, sampleUsers } from "../data";
import { UserModel } from "../models/userModel";

export const seedRouter = express.Router();

seedRouter.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({});
       // Lägg till de fördefinierade exempelprodukterna i databasen
    const createdProducts = await ProductModel.insertMany(sampleProducts);
    // / Lägg till de fördefinierade exempelanvändarna i databasen
    await UserModel.deleteMany({});
    const createdUsers = await UserModel.insertMany(sampleUsers);
    res.send({ createdProducts,createdUsers });
  })
);
