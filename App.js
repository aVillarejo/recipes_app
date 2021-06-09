/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './navigation/tabs'
import { Login, Recipe } from './screens'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Login'
      >
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Home'
          component={Tabs}
        />
        <Stack.Screen
          name='Recipe'
          component={Recipe}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
