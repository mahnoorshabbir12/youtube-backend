// require('dotenv').config({path: './.env'}); // require syntax
import { app } from "./app.js";
import {connectDB} from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    const server = app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
    server.on("error", (error) => {
        console.error("Error in Express app:", error);
    });
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
})


// Single file code for connection (less better approach, but works)

// const app = express();
// ( async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Error in Express app:", error);
//     });
//     console.log("Connected to MongoDB");
//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })()