import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static contextType = LanguageContext;

  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
