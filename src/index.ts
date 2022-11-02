import app from "./app";
import newsRouter from "./router/router";

app.use("/news", newsRouter);
