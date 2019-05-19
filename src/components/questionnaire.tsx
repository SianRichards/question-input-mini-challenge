import * as React from "react";
import styles from "./questionnaire.module.scss";
import { string } from "prop-types";

export interface IProps {}

export interface IState {
  correct: boolean;
  feedback: string;
}

class Questionnaire extends React.Component<IProps, IState> {
  public state = { correct: false, feedback: "" };

  public handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const finalInput = parseInt(input, 10);
    if (finalInput === 7) {
      this.setState({ correct: true, feedback: "Yeah, you got it!" });
    } else if (finalInput > 7) {
      this.setState({
        correct: false,
        feedback: finalInput + " hours?! I wish..."
      });
    } else if (finalInput < 7 && finalInput !== 1) {
      this.setState({
        correct: false,
        feedback: "try a little higher than " + finalInput + " hours..."
      });
    } else if (finalInput === 1) {
      this.setState({
        correct: false,
        feedback: "try a little higher than " + finalInput + " hour..."
      });
    } else {
      this.setState({
        feedback: ""
      });
    }
  };

  render() {
    return (
      <div className={styles.questionnaire}>
        <h1>How many hours of sleep did I get last night?</h1>
        <input
          onChange={this.handleInput}
          placeholder="e.g. 5"
          className={this.state.correct ? styles.correct : styles.incorrect}
        />
        <h2>{this.state.feedback}</h2>
      </div>
    );
  }
}

export default Questionnaire;
