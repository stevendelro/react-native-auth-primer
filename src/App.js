import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
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
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Authentication App</Text>
      </View>
    );
  }
}

export default App;
