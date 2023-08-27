import ViteExpress from "vite-express";
import app from "./api/main";

ViteExpress.config({ mode: "production" });
ViteExpress.listen(app, 8080);
