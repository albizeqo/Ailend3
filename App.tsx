/* eslint-disable prettier/prettier */
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {store} from './app/store';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from './styles/colors';
import Menu from './shared/components/Menu';
import Market from './pages/MarketPage';
import MyLoans from './pages/MyLoans';
import BuyWithAilend from './pages/BuyWithAilendPage';
import Account from './pages/Account';
import BlogPage from './pages/BlogPage';

export default function App() {
  console.log('😁...RENDERING App Component...😁');

  return (
    <Provider store={store}>
      <AppChild />
    </Provider>
  );
}

const Tab = createBottomTabNavigator();

function AppChild() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.blackBackground,
      }}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props: any) => (
            <Menu {...props} initialRouteName="Market" />
          )}>
          <Tab.Screen
            name="Market"
            component={Market}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.grayBackground,
              },
            }}
          />
          <Tab.Screen
            name="MyLoans"
            component={MyLoans}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.grayBackground,
              },
            }}
          />
          <Tab.Screen
            name="BuyWithAilend"
            component={BuyWithAilend}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.grayBackground,
              },
            }}
          />
          <Tab.Screen
            name="Blog"
            component={BlogPage}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.grayBackground,
              },
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
