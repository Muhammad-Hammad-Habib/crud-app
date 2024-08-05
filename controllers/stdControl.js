import studentModel from "../model/mdlStudent.js";
class stdController {
  //Get all data from database
  static getAllData = async (req, resp) => {
    try {
      const result = await studentModel.find();
      resp.render("index", { data: result });
    } catch (error) {
      console.log(`Issue in getAllData in stdControl => ${error}`);
    }
  };
  //Insert record
  static insertRecord = async (req, resp) => {
    try {
      const data = new studentModel(req.body);
      const result = await data.save();
      if (result) {
        resp.redirect("/student");
      } else {
        console.log(`Record not inserted ${result}`);
      }
    } catch (error) {
      console.log(`Issue in insertRecord in stdControl => ${error}`);
    }
  };
  //this function get record for edit form to be update
  static getRecordForUpdate = async (req, resp) => {
    try {
      const result = await studentModel.findById(req.params);
      resp.render("edit", { data: result });
    } catch (error) {
      console.log(`Issue in getRecordForUpdate in stdControl => ${error}`);
    }
  };
  //this function update record in database
  static updateRecord = async (req, resp) => {
    try {
      const result = await studentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      resp.redirect("/student");
    } catch (error) {
      console.log(`Issue in updateRecord in stdControl => ${error}`);
    }
  };
  //this function delete record in database
  static deleteRecord = async (req, resp) => {
    try {
      const result = await studentModel.findByIdAndDelete(req.params.id, {
        new: true,
      });
      resp.redirect("/student");
    } catch (error) {
      console.log(`Issue in deleteRecord in stdControl => ${error}`);
    }
  };
}

export default stdController;
