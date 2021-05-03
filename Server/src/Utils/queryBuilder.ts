import knex from "knex"
import connection from "./connection";
const builder = knex({
    client: 'pg',
    connection: connection,
    pool: { min: 0, max: 7 }
});

export default builder