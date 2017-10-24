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
        message: "Bye!",
        end: true
      }
    ];
    return (
      <div className="App">
        <ChatBot steps={steps} />
      </div>
    );
  }
}

export default App;
