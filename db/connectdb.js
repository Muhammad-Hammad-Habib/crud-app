import mongoosedb from "mongoose";

const connectdb = async () => {
  try {
    await mongoosedb.connect("mongodb://localhost:27017/",{"dbName":"CURD"});
    // const modelSchema = new mongoosedb.Schema({
    //   name: String,
    // });
    // const model = new mongoosedb.model("demo_data",modelSchema);
    console.log("Connected successfully")
  } catch (err) {
    console.log(`connect  Catch error  = ${err}`);
  }
};


export default connectdb;
 