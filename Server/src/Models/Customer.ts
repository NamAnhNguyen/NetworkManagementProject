import { Knex } from "knex";
import { queryBuilder } from "../Utils";
import Base from "./Base";

class Customer extends Base {

    constructor() {
        super("customers")
    }
}

export default Customer