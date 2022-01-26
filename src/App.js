import React, { createContext } from "react";
import "./App.css";

let lang = ["javascript", "python"];
const myContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: lang[0],
    };
    this.change = this.change.bind(this);
  }
  change() {
    this.setState((state) => ({
      lang: state.lang === lang[0] ? lang[1] : lang[0],
    }));
  }

  render() {
    const contextValue = {
      lang: this.state.lang,
      change: this.change,
    };
    return (
      <myContext.Provider value={contextValue}>
        <Toggle />
      </myContext.Provider>
    );
  }
}

class Toggle extends React.Component {
  render() {
    return (
      <myContext.Consumer>
        {({ lang, change }) => {
          return (
            <div className="app">
              <div>{lang}</div>
              <button onClick={change}>Toggle</button>
            </div>
          );
        }}
      </myContext.Consumer>
    );
  }
}

export default App;
