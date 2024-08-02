class stdController {
  static getAllData = (res, resp) => {
    resp.render("index");
  };
  static insertRecord = (req, resp) => {
    resp.redirect("/student")
  };
}

export default stdController;
