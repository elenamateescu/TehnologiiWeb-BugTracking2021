import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUserData } from "../redux/reducer";
class RegisterPage extends Component {
  state = {
    AdresaEmail: "",
    UserName: "",
    Password: "",
    TipUser: "",
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitDetails = (e) => {
    e.preventDefault();

    const { AdresaEmail, Password, UserName, TipUser } = this.state;

    const newUser = {
      AdresaEmail,
      //Password,
      UserName,
      TipUser,
    };

    axios
      .post("http://localhost:8080/api/utilizator", newUser)
      .then((res) => {
        this.props.getCurrentUserData(res.data.id);
        this.props.history.push("/adaugaproiect");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section className="row vh-100">
        <section className="col-12 col-md-6 img-order px-0">
          <img src="./images/register_page_vector.jpg" />
        </section>
        <div className="col-12 col-md-6 mx-auto flex-column form-order">
          <div className="container-450">
            <p className="form-title">Create an account</p>
            <form className="flex-column" onSubmit={this.submitDetails}>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.handleChange("UserName")}
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                onChange={this.handleChange("AdresaEmail")}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange("Password")}
              />
              <input
                name="userType"
                placeholder="User Type"
                type="text"
                onChange={this.handleChange("TipUser")}
              />
              <input className="button-blue" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default withRouter(
  connect(mapStateToProps, { getCurrentUserData })(RegisterPage)
);
