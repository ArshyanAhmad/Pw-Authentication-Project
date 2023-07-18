import mongoose from "mongoose";

const connectToDatabase = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
            .then((con) => {
                console.log(`Database connected successfully: ${con.connection.host}`);
            })
            .catch((err) => {
                console.log(`Error detected while connecting to database: ${err}`);
            })
    } catch (error) {
        console.log(`Internal error connection to database ${error.message}`);
    }
}

export default connectToDatabase;