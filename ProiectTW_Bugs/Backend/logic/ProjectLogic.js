import Project from "../entities/Project";

async function createBug(project) {
  return await Project.create(project);
}
