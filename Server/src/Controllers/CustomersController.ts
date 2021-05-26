import pg from "pg"
import Customer from "../Models/Customer";
import BaseController from "./BaseController";

class CustomerController extends BaseController {
    constructor() {
        super(new Customer());
    }
}

export default CustomerController