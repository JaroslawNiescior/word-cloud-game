import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class GameButton extends React.Component {
  render() {
    return (
      <StyledGameButton onClick={this.props.onClick}>
        {this.props.isShowAnswers ? 'finish game' : 'check answers'}
      </StyledGameButton>
    );
  }
}

const StyledGameButton = styled.button`
  padding: 0.5em 2em;
  color: #5498e1;
  background: white;
  border-radius: 0.5em;
  border-color: #5498e1;
  &:hover {
    color: #007bff;
    border-color: #007bff;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => ({
  isShowAnswers: state.showAnswers,
});

export default connect(mapStateToProps)(GameButton);
