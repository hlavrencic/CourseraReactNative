import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import History from './AboutComponent';

import { DISHES } from '../shared/dishes';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff"  
        }} />
      </Stack.Navigator>
    );
  }

  MenuNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }} />
        <Stack.Screen name="Dishdetail" component={Dishdetail} />
      </Stack.Navigator>
    );
  }

  ContactUsNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name=" " component={ContactUs} options={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }}  />
      </Stack.Navigator>
    );
  }

  AboutUsNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="About Us" component={History} options={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }}  />
      </Stack.Navigator>
    );
  }

  render() {
    
    return (
      
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={{
          backgroundColor: '#D1C4E9',
        }} >
          <Drawer.Screen name="Home" component={this.HomeNavigation} />
          <Drawer.Screen name="Menu" component={this.MenuNavigation} />
          <Drawer.Screen name="Contact Us" component={this.ContactUsNavigation} />
          <Drawer.Screen name="About Us" component={this.AboutUsNavigation} />
        </Drawer.Navigator>
         
      </NavigationContainer>
      
    );
  }
}
  
export default Main;