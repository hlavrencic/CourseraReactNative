import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Platform, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import History from './AboutComponent';

import { DISHES } from '../shared/dishes';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContentComponent({...props}){
  return (
    <DrawerContentScrollView {...props} >
      
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
      
    </DrawerContentScrollView>
  );
  
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }

  HomeNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={
          ({ navigation }) => ({
            headerLeft: () => (<Icon name="menu" size={24}
              color= 'white'
              onPress={ () => navigation.toggleDrawer() } />),
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff"
          })
        } />
      </Stack.Navigator>
    );
  }

  MenuNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={
        ({ navigation }) => ({
          headerLeft: () => (<Icon name="menu" size={24}
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />),
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff"            
        })
      }/>
        <Stack.Screen name="Dishdetail" component={Dishdetail} />
      </Stack.Navigator>
    );
  }

  ContactUsNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name=" " component={ContactUs} options={({ navigation }) => ({
            headerLeft: () => (<Icon name="menu" size={24}
              color= 'white'
              onPress={ () => navigation.toggleDrawer() } />),
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        })}  />
      </Stack.Navigator>
    );
  }

  AboutUsNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="About Us" component={History} options={
          ({ navigation }) => ({
            headerLeft: () => (<Icon name="menu" size={24}
              color= 'white'
              onPress={ () => navigation.toggleDrawer() } />),
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        })}  />
      </Stack.Navigator>
    );
  }

  render() {
    
    return (
      
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={{
          backgroundColor: '#D1C4E9',
        }} drawerContent = { props => <CustomDrawerContentComponent {...props} /> } >
          <Drawer.Screen name="Home" component={this.HomeNavigation} />
          <Drawer.Screen name="Menu" component={this.MenuNavigation} />
          <Drawer.Screen name="Contact Us" component={this.ContactUsNavigation} />
          <Drawer.Screen name="About Us" component={this.AboutUsNavigation} />
        </Drawer.Navigator>
         
      </NavigationContainer>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});
  
export default Main;