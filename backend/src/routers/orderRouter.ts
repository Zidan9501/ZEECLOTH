import express, { Request, Response } from "express";
import { OrderModel } from "../models/orderModel";
import { isAuth } from "../utils";
import expressAsyncHandler from "express-async-handler";
import { Product } from "../models/productModel";

export const orderRouter = express.Router();
// Route för att hämta användarens beställningar
orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req: Request, res: Response) => {
    const orders = await OrderModel.find({ user: req.user._id })
    res.send(orders)
  })
)
// Route för att hämta en specifik beställning baserat på ID
orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req: Request, res: Response) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);
// Route för att skapa en ny beställning
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req: Request, res: Response) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const createdOrder = await OrderModel.create({
        orderItems: req.body.orderItems.map((x: Product) => ({
          ...x,
          product: x._id,
        })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      res.status(201).send({ message: "Order Not Found", order: createdOrder });
    }
  })
);
