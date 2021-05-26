import { Knex } from "knex";
import { queryBuilder } from "../Utils";
import Base from "./Base";

class Order extends Base {

    constructor() {
        super("orders")
    }
}

export default Order