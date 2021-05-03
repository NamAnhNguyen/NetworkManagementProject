import { Knex } from "knex";
import { queryBuilder } from "../Utils";

class Base {
    query: Knex.QueryBuilder;
    constructor(tableName: string) {
        this.query = queryBuilder(tableName);
    }
    async select() {
        return await this.query.select();
    }
}

export default Base