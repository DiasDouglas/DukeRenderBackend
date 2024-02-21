import express from "express";
import { loadObject } from "./services/LoadObject";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  return res.status(200).send("Hello there!");
});

app.get("/api/objects", (req, res) => {
  if (!req.query || !req.query.name) {
    res.status(400).send("Name is required");
    return;
  }

  const loadedObject = loadObject(req.query?.name?.toString()!);

  if (loadedObject) {
    return res.status(200).send(loadedObject);
  } else {
    return res.status(404).send("Object not found");
  }
});

export default app;
