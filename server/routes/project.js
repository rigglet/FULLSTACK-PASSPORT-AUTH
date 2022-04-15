const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  updateProject,
  getProjects,
  createProject,
  getProject,
  deleteProject,
} = require("../handlers/project");

// prefix - /api/projects
router.route("/").post(createProject).get(getProjects);

// prefix - /api/projects/:id
router
  .route("/:project_id")
  //.get(getProject)
  .delete(deleteProject);
//.put(updateProject);

module.exports = router;
