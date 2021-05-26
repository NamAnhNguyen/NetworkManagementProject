import { Knex } from "knex";
import { queryBuilder } from "../Utils";
import Base from "./Base";

class Agent extends Base {

    constructor() {
        super("agents")
    }
}

export default Agent