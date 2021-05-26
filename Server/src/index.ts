import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import RawQueryController from "./Controllers/RawQueryController";
import AgentController from "./Controllers/AgentsController";
import CustomerController from "./Controllers/CustomersController";
import OrderController from "./Controllers/OrdersController";

const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());

app.use([
    bodyParser.json(),
    bodyParser.urlencoded({
        extended: true,
    })
]);

app.get("/", (req, res) => res.send("Hello from server!"));

app.use("/api/rawQuery", async (req, res, next) => {
    console.log(req.query)
    let { queryString } = req.query
    console.log(queryString)
    if (!queryString) res.send({
        status: 404,
        data: "WrongParam"
    })
    queryString = queryString ? queryString.toString() : '';
    let ctrl = new RawQueryController()
    try {
        let result = await ctrl.rawQuery(queryString);
        res.send({
            status: 200,
            data: result
        })
    } catch (error) {
        res.send({
            status: 500,
            data: error
        })
    }
})

app.use("/api/agents", async (req, res, next) => {
    let ctrl = new AgentController()
    try {
        let result = await ctrl.queryExecute(req.body);
        res.send({
            status: 200,
            data: result
        })
    } catch (error) {
        res.send({
            status: 500,
            data: error
        })
    }

})

app.use("/api/customers", async (req, res, next) => {
    let ctrl = new CustomerController()
    try {
        let result = await ctrl.queryExecute(req.body);
        res.send({
            status: 200,
            data: result
        })
    } catch (error) {
        res.send({
            status: 500,
            data: error
        })
    }

})

app.use("/api/orders", async (req, res, next) => {
    let ctrl = new OrderController()
    try {
        let result = await ctrl.queryExecute(req.body);
        res.send({
            status: 200,
            data: result
        })
    } catch (error) {
        res.send({
            status: 500,
            data: error
        })
    }

})



app.listen(PORT, () => console.log(`Server is running here https://localhost:${PORT}`));