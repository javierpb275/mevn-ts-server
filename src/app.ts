import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRoutes from "./routes";

const app: Application = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api", tasksRoutes);

export default app;
