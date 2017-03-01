/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  Image,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{width: 320, height: 240}}
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/German_garden_gnome.jpg/320px-German_garden_gnome.jpg'}}
        />
        <Text style={styles.welcome}>
          Welcome to Garden Gnome!
        </Text>
        <Button
          onPress={onButtonPress}
          title="Setup garden information"
          color="#4CAF50"
          accessibilityLabel="Enter location of garden and what plants you plan to grow"
        />
        <Text style={styles.instructions}>
          Change crop information or zip code

        </Text>
        <Button
          onPress={onButtonPress}
          title="Gardening 101"
          color="#81C784"
          accessibilityLabel="See an basic information on gardening"
        />
        <Text style={styles.instructions}>
          See tutorials on the basics of gardening
          
        </Text>
        <Button
          onPress={onButtonPress}
          title="Gardening 201"
          color="#4CAF50"
          accessibilityLabel="See an information about growing specific plants"
        />
        <Text style={styles.instructions}>
          See tutorials on the growing specific plants and advanced gardening techniques
          
        </Text>
        <Button
          onPress={onButtonPress}
          title="Plant Doctor"
          color="#388E3C"
          accessibilityLabel="See an information about growing specific plants"
        />
        <Text style={styles.instructions}>
          Help diagnosing plant "illness"
          
        </Text>
        <Button
          onPress={onButtonPress}
          title="Advanced Settings"
          color="#1B5E20"
          accessibilityLabel="Modify internal databases"
        />
        <Text style={styles.instructions}>
          Modify internal databases (e.g. add new plant type, or different variety of vegetable)
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
