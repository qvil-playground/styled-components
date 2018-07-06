import React from "react";
import styled from "styled-components";
import { Consumer } from "store";

const StyledButton = styled.button`
  background-color: papayawhip;
`;

class Button extends React.Component {
  render() {
    return (
      <Consumer>
        {value => (
          <StyledButton
            onClick={() =>
              value.setColor(
                value.theme.color === "papayawhip" ? "pink" : "papayawhip"
              )
            }
          >
            Change Theme
          </StyledButton>
          // <StyledButton onClick={handleClick(value)}>Change Theme</StyledButton>
        )}
      </Consumer>
    );
  }
}

export default Button;
