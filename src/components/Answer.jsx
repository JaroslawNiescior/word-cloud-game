import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { incrementResults, decrementResults } from '../actions';

export class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.toggleSelected = this.toggleSelected.bind(this);
    this.whetherShowAnswers = this.whetherShowAnswers.bind(this);
  }

  toggleSelected() {
    this.setState({ selected: !this.state.selected });
  }

  whetherShowAnswers() {
    this.sendPoints();
    if (this.props.isShowAnswers && this.state.selected) return true;

    return false;
  }

  sendPoints() {
    const {
      incrementResults: incrementResultsAction,
      decrementResults: decrementResultsAction,
      isGood,
      isShowAnswers,
    } = this.props;
    const { selected } = this.state;

    if (isShowAnswers) {
      console.log('SEND');
      if (selected && isGood) {
        incrementResultsAction();
      } else if (selected && !isGood) {
        decrementResultsAction();
      } else if (!selected && isGood) {
        decrementResultsAction();
      }
    }
  }

  render() {
    const { text, style, isGood, isShowAnswers } = this.props;
    const { selected } = this.state;
    const boolWhetherShowAnswers = this.whetherShowAnswers();
    return (
      <Button
        style={style}
        className={`toggle-container 
          ${selected ? 'selected' : ''} 
          ${isShowAnswers ? 'disabled' : ''}  
          ${boolWhetherShowAnswers ? [isGood ? 'good' : 'bad'] : ''}
        `}
        onClick={isShowAnswers ? null : this.toggleSelected}
      >
        {boolWhetherShowAnswers ? (
          <div className="hint">{isGood ? 'Good' : 'Bad'}</div>
        ) : null}

        {text}
      </Button>
    );
  }
}

const Button = styled.div`
  position: absolute;
  font-size: 1.2em;
  text-align: center;
  &:not(.disabled):hover {
    cursor: pointer;
    font-weight: 700;
    color: blue;
  }

  &.selected {
    cursor: pointer;
    font-weight: 700;
    color: blue;
  }

  &.selected .hint {
    font-size: 0.8em;
  }

  &.good {
    color: green;
  }

  &.bad {
    color: red;
  }
`;
const mapStateToProps = (state) => ({
  isShowAnswers: state.showAnswers,
});

export default connect(mapStateToProps, { incrementResults, decrementResults })(
  Answer,
);
