import React, { Component } from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";

class App extends Component {
  render() {
    const steps = [
      {
        id: "0",
        message: "Welcome to react chatbot",
        trigger: "1"
      },
      {
        id: "1",
        message:
          "My name is Roger and I am the greatest tennis player of all time",
        trigger: "2"
      },
      {
        id: "2",
        message: "Bye!",
        end: true
      }
    ];
    return (
      <div className="App">
        <ChatBot placeholder={"Hey there"} botDelay={2500} steps={steps} />
      </div>
    );
  }
}

export default App;
