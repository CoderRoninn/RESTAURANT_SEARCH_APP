import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import ROUTES from '../constants/navigation/routes';
import OPTIONS from '../constants/navigation/screenOptions';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.Search}
        screenOptions={{
          headerTitle: OPTIONS.HeaderTitle
        }}
      >
        <Stack.Screen name={ ROUTES.Search } component={ SearchScreen }/> 
 
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigator;