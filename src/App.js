import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "./store";
// Custom
import Button from "components/Button";

class App extends Component {
  state = {
    theme: {
      color: "pink"
    },
    setColor: color => {
      this.setState({
        theme: {
          ...this.state.theme,
          color
        }
      });
    }
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Provider value={this.state}>
          <div style={{ backgroundColor: theme.color }}>
            <Button />
          </div>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
