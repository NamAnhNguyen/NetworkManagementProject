import pg from "pg"
import Agent from "../Models/Agent";
import BaseController from "./BaseController";

class AgentController extends BaseController {
    constructor() {
        super(new Agent());
    }
}

export default AgentController