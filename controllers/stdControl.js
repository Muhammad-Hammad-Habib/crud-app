import studentModel from "../model/mdlStudent.js";
class stdController {
  static getAllData = async (req, resp) => {
    try {
      const result = await studentModel.find();
      resp.render("index", { data: result });
      // console.log(result);
    } catch (error) {
      console.log(`Issue in getAllData in stdControl => ${error}`);
    }
  };
  static insertRecord = async (req, resp) => {
    try {
      const data = new studentModel(req.body);
      const result = await data.save();
      if (result) {
        console.log("Record has inserted");
        console.log(result);
        resp.redirect("/student");
      } else {
        console.log(`Record has inserted ${result}`);
      }
    } catch (error) {
      console.log(`Issue in insertRecord in stdControl => ${error}`);
    }
  };
  static getRecordForUpdate = async (req, resp) => {
    console.log(req.params)
    resp.render("edit");
  };
}

export default stdController;
