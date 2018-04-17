import React, { Component } from 'react';
import { Platform, AppRegistry, StyleSheet, Text, View, Button, Image,AsyncStorage } from 'react-native';
import { SwitchNavigator, StackNavigator,DrawerNavigator } from 'react-navigation';

import DetailsScreen from './App2.js';
import ModalScreen from './ModalView.js';
import MyNotificationsScreen from './notificacion.js';
import SideMenu from './sideCustom';

class HomeScreen extends React.Component {
  //ventana modal boton info
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerBackTitle:'Regresa',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight:(
        <Button
          title="Go to Login"
          onPress={()=>(navigation.navigate('Auth'))}
        />
      ),

      headerLeft: (
        <Button
          onPress={() => navigation.navigate('DrawerToggle')}
          title="Menú"
          color="#fff"
        />
      ),
      /* the rest of this config is unchanged */
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./CkhdaZmWgAAfWcd.jpg')}
          style={[stylesMenu.icon, {tintColor: tintColor}]}
        />
      ),
    };
  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
        <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'extra param',
            })}}
          />
          
          <Button
                onPress={() => this.props.navigation.navigate('MyModal')}
                title="Info"/>
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />


      </View>
    );
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

}

// export default HomeScreen;

const MainStack = StackNavigator(
  {
    Home:HomeScreen,
    Details:DetailsScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions : {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#0F0',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

//stack interno del drawer
const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

///side menu usando drawerContent
const MenuAndContainer = DrawerNavigator({
  Home: {
    screen: RootStack,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
},
//remover este elemento para mostrar el menu generado por drawernavigator
{//sobreescribe el menu por defecto genrado por las vistas agregadas al drawer
  contentComponent: SideMenu,
});
//styles menu
const stylesMenu = StyleSheet.create({
  icon: {
    width: 44,
    height: 44,
  },
});
export default MenuAndContainer
