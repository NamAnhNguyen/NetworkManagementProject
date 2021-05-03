import NutrientName from "../Models/NutrientName";
import pg from "pg"
import connection from "../Utils/connection";

class NutrientNameController {
    model = new NutrientName()
    client = new pg.Client(
        connection
    )
    async index() {
        return this.model.select();
    }

    async rawQuery(query: string) {
        console.log(query)
        await this.client.connect()
        console.log(query)

        try {
            const result = await this.client.query(query);
            return result.rows
        } catch (error) {
            console.log(error)
            throw error
        }

    }
}

export default NutrientNameController