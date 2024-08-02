import studentModel from "../model/mdlStudent.js";
class stdController {
  static getAllData = async (res, resp) => {
    try {
      const result = await studentModel.find();
      resp.render("index", { data: result });
      console.log(result);
    } catch (error) {
      console.log(`Issue in getAllData in stdControl => ${error}`);
    }
  };
  static insertRecord = (req, resp) => {
    resp.redirect("/student");
  };
}

export default stdController;
