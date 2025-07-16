// api/index.js
import serverless from "serverless-http";
import dotenv from "dotenv";
dotenv.config();

import { app } from "../app.js"; // adjust path if needed

export default serverless(app);
