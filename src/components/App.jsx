import React from 'react';
import Login from './Login';
import Game from './Game';
import Result from './Result';
import { connect } from 'react-redux';

const App = ({ isSignedIn, isGameFinish }) => {
  return (
    <div>
      {isSignedIn ? (
        [isGameFinish ? <Result key="result" /> : <Game key="game" />]
      ) : (
        <Login />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  isGameFinish: state.user.isGameFinish,
});

export default connect(mapStateToProps)(App);
