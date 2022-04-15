const db = require("../models");

exports.createProject = async function (req, res, next) {
  try {
    if (!req.isAuthenticated()) {
      throw new Error({ message: "You must be signed in" });
    }

    console.log("Creating project...");

    let project = await db.Project.create({
      projectName: req.body.projectName,
      shortDescription: req.body.shortDescription,
    });

    let foundProject = await db.Project.findById(project._id);

    return res.status(200).json(foundProject);
  } catch (err) {
    return next(err);
  }
};

// exports.updateProject = async function (req, res, next) {
//   try {
//     const id = req.params.project_id;
//     let updatedProject = {
//       projectName: req.body.projectName,
//       shortDescription: req.body.shortDescription,
//     };
//     const project = await db.Project.where({ _id: id }).update(updatedProject);
//     return res.status(200).json(project);
//   } catch (err) {
//     return next(err);
//   }
// };

// exports.getProject = async function (req, res, next) {
//   try {
//     const project = await db.Project.findById(req.params.project_id);
//     return res.status(200).json(project);
//   } catch (err) {
//     return next(err);
//   }
// };

exports.deleteProject = async function (req, res, next) {
  try {
    let foundProject = await db.Project.findById(req.params.project_id);
    await db.Project.deleteOne({ _id: req.params.project_id });
    return res.status(200).json(foundProject);
  } catch (err) {
    return next(err);
  }
};

exports.getProjects = async function (req, res, next) {
  try {
    let projects = await db.Project.find({});
    return res.status(200).json(projects);
  } catch (err) {
    return next(err);
  }
};
