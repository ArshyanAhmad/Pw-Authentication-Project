import app from "./app.js";

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server listining on port at ${PORT}`);
})