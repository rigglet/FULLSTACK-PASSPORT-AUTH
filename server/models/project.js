const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  //_id added by mongoose
  projectName: { type: String, default: "Project Name" },
  shortDescription: { type: String, default: "Short description" },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
