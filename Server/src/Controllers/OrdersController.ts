import pg from "pg"
import Order from "../Models/Order";
import BaseController from "./BaseController";

class OrderController extends BaseController {
    constructor() {
        super(new Order());
    }
}

export default OrderController