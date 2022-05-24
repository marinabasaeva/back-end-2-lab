const express = require("express")
const cors = require("cors")
const app = express()
const controllerFile = require("./controller");
app.use(cors())
app.use(express.json())

app.get("/api/houses", controllerFile.getAllHouses);
app.delete("/api/houses/:id", controllerFile.deleteHouse);
app.post("/api/houses", controllerFile.createHouse);
app.put("/api/houses/:id", controllerFile.updateHouse);

app.listen(4004, () => console.log("Server running on 4004"))