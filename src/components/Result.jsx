import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Result extends React.Component {
  render() {
    const { userName, points } = this.props;
    return (
      <Container>
        <h2>{`Congratulations, ${userName}`}</h2>
        <h3>Your score:</h3>
        <StyledPoints>{`${points} points`}</StyledPoints>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-family: Lato, sans-serif;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledPoints = styled.h3`
  color: deepskyblue;
`;

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  points: state.result.points,
});

export default connect(mapStateToProps)(Result);
