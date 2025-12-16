import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import

app.use("/app/v1/contact", contactRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running.....",
  });
});

export { app };
