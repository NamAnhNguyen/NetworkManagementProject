import { Knex } from "knex";
import { queryBuilder } from "../Utils";
import Base from "./Base";

class NutrientName extends Base {

    constructor() {
        super("NUTRIENT_NAME")
    }
    async select() {
        return await this.query.select();
    }
}

export default NutrientName