import app from "../api";
import ViteExpress from "vite-express";

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
