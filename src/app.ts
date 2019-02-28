import * as express from "express";
import diContainer from "./config/diContainer";

const app: express.Application = express();

app.get("/api/persons", function (request: express.Request, response: express.Response) {
  diContainer.personController.findAll(request, response)
});

export default app;
