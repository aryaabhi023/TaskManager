import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(json({ limit: "100kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

export default app;
