import express from "express";
import { schedular } from "./api/autopost.js";
const app = express();
app.use(express.json());
app.use("/api/autopost", schedular);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("We are home page");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map