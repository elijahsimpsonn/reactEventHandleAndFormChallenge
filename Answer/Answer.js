import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    profiles: [
      {
        firstName: "Elijah",
        lastName: "Simpson",
        role: "Student",
      },
    ],
  };

  addProfile(event) {
    event.preventDefault();
    const newProfile = {
      firstName: event.currentTarget["first-name"].value,
      lastName: event.currentTarget["last-name"].value,
      role: event.currentTarget["role"].value,
    };
    this.setState({ profiles: [...this.state.profiles, newProfile] });
  }

  render() {
    return (
      <section>
        <ul>
          {this.state.profiles.map((profile, index) => (
            <li key={index}>
              {profile.firstName} {profile.lastName} - {profile.role}
            </li>
          ))}
        </ul>
        <form onSubmit={(event) => this.addProfile(event)}>
          <input id="first-name" placeholder="First Name"></input>
          <input id="last-name" placeholder="Last Name"></input>
          <input id="role" placeholder="Role"></input>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default App;
