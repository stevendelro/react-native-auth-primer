import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(error => {
            this.setState({
              error: error.message,
              loading: false
            });
            console.log('Auth Error:', error);
          });
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={email => this.setState({ email })}
            value={this.state.text}
            label="Email"
            placeholder="user@email.com"
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 12,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
