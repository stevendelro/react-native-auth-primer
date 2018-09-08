import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  /**
   * On mount, Firebase will initialize. The following
   * config object was obtained from the Firebase dashboard:
   *    Develop > Authentication > Web Setup
   **/
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAIN1d6K-Bi-yYffuST9zsO6VHOBhHvLyc',
      authDomain: 'react-native-auth-primer.firebaseapp.com',
      databaseURL: 'https://react-native-auth-primer.firebaseio.com',
      projectId: 'react-native-auth-primer',
      storageBucket: 'react-native-auth-primer.appspot.com',
      messagingSenderId: '606799162184'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ padding: 5, flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 250
            }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
