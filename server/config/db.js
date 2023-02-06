import mongoose from "mongoose";

const connect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Malumotlar omboriga ulangan: ${connect.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(`Xatolik haqida hisobot: ${err.message}`.red.underline.bold)
    }
}

export default connect;