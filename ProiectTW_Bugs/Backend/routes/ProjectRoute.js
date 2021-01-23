import express from "express";
const router = express.Router();

router.route("/project").post(async (req, res) => {
  try {
    let project = await createProject(req.body);

    if (project.hasErrors) res.status(400).json(project);
    else res.status(200).json(project);
  } catch (e) {
    res.status(500).json({ hasErrors: true, message: e.message });
  }
});



export default router;
