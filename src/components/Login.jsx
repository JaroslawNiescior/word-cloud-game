import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', isErr: true };
    this.updateInput = this.updateInput.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.onLoginChange(false);
  }

  updateInput(event) {
    this.checkUserName(event.target.value);
    this.setState({ userName: event.target.value });
  }

  checkUserName(userName) {
    if (regexUserName.test(userName)) {
      this.setState({ isErr: false });
    } else {
      this.setState({ isErr: true });
    }
  }

  onLoginChange(isSignedIn) {
    const { signIn: signInAction } = this.props;
    if (isSignedIn) signInAction(this.state.userName);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.onLoginChange(!this.state.isErr);
  }

  renderLoginForm() {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return null;
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Worldcloud game</h1>
        <Input
          className={this.state.isErr ? 'err' : null}
          type="text"
          onChange={this.updateInput}
          value={this.state.userName}
          placeholder="Enter your nickname here..."
        ></Input>
        <Button type="submit">play</Button>
      </Form>
    );
  }

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}

const regexUserName = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-family: Lato, sans-serif;
`;

const Input = styled.input`
  margin: 1em;
  padding: 1em;
  border-color: gray;
  outline: none;
  &.err {
    border-color: red;
  }
`;
const Button = styled.button`
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

const mapStateToProps = (state) => ({ isSignedIn: state.user.isSignedIn });

export default connect(mapStateToProps, { signIn })(Login);
