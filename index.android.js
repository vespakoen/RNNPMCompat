/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import uhm from './uhm'
window.process = require('process')
import PouchDB from 'pouchdb'
var db = new PouchDB('dbname');

db.get('dave@gmail.com').then((res) => {
  console.log('GOT', res)
})
// db.put({
//   _id: 'dave@gmail.com',
//   name: 'David',
//   age: 69
// });

db.changes().on('change', function(e) {
  console.log('Ch-Ch-Changes', e);
});

// db.replicate.to('http://example.com/mydb');
class RNNPMCompat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNNPMCompat', () => RNNPMCompat);
