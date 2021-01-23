import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

class MainPage extends Component {
  state = {
    repositoryLink: "",
    repositoryMembers: "",
  };
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  submitDetails = (e) => {
    e.preventDefault();

    const { repositoryLink, repositoryMembers } = this.state;

    const newProject = {
      repositoryLink,
      repositoryMembers,
    };

    axios
      .post("http://localhost:8080/api/project", newProject)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-450 mx-auto">
          <p className="form-title">Adaugă un proiect nou</p>
          <form className="flex-column" onSubmit={this.submitDetails}>
            <input
              name="repo-link"
              type="text"
              placeholder="Repository Link"
              onChange={this.handleChange("repoLink")}
            />
            <input
              name="repo-members"
              placeholder="Repository Members"
              type="text"
              onChange={this.handleChange("repoMembers")}
            />
            <input
              className="button-blue"
              type="submit"
              value="Adaugă proiect"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MainPage;
