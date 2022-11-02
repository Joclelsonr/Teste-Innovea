import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`🚀 Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
export default app;
