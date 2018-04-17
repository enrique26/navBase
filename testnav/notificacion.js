import React, { Component } from 'react';
import { Platform, AppRegistry, StyleSheet, Text, View, Button, Image,TouchableHighlight } from 'react-native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';


class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: ()=>(<Text>Notificaciones m</Text>),
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./CkhdaZmWgAAfWcd.jpg')}
        style={[stylesMenu.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{backgroundColor:'black',flex:1}}>
          <TouchableHighlight
           style={styles.containerB}
           onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.bigblue}> Go back </Text>
          </TouchableHighlight>
      </View>

    );
  }
}

const stylesMenu = StyleSheet.create({
  icon: {
    width: 44,
    height: 44,
  },
});

const styles = StyleSheet.create({
  bigblue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  containerB:{
    height:40,
    width:120,
    top:20,
    backgroundColor:'red'
  }
});


export default MyNotificationsScreen
