import Sequelize from "sequelize";
import sequelize from "../dbConfig.js";

const Project = sequelize.define(
  "Project",
  {
    ProjectId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    repositoryLink: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    repositoryMembers: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Project;
