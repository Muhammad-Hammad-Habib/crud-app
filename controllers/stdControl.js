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
  static insertRecord = (req, resp) => {
    try {
      console.log("insertRecord");
      console.log(req.body);
      resp.redirect("/student");
    } catch (error) {
      console.log(`Issue in insertRecord in stdControl => ${error}`);
    }
  };
}

export default stdController;
