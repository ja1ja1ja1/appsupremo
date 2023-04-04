import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Paris from './paris';
import Riojaneiro from './riojaneiro';
import Novayork from './novayork';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Paris" component={Paris} />
        <Stack.Screen name="Riojaneiro" component={Riojaneiro} />
        <Stack.Screen name="Novayork" component={Novayork} />
    </Stack.Navigator>
  </NavigationContainer>
  )

}