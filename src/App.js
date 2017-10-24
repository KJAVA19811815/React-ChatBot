import React, { Component } from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";

class App extends Component {
  render() {
    const steps = [
      {
        id: "0",
        message: "Who is the king of tennis?",
        trigger: "1"
      },
      {
        id: "1",
        options: [
          { value: 1, label: "Is it Nadal", trigger: "nadal" },
          { value: 2, label: "Is it Djokovic", trigger: "djokovic" },
          { value: 3, label: "Is it Federer", trigger: "federer" }
        ]
      },
      {
        id: "nadal",
        message: "Wrong....Try again",
        trigger: 1
      },
      {
        id: "djokovic",
        message: "Wrong.....Try again",
        trigger: 1
      },
      {
        id: "federer",
        message: "You are right I am the King of Tennis",
        trigger: 2
      },
      {
        id: "2",
        message: "Bye!",
        end: true
      }
    ];
    return (
      <div className="App">
        <ChatBot
          headerTitle={"King of Tennis"}
          placeholder={"Hey there"}
          botDelay={2500}
          steps={steps}
        />
      </div>
    );
  }
}

export default App;
