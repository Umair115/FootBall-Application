import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
// screens
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import * as eva from '@eva-design/eva';
import customTheme from './theme';
const Stack = createNativeStackNavigator();

function App() {

  return (

  <ApplicationProvider {...eva} theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: '',
            headerTitle: '',
            headerTintColor: '#000',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'white',
            }
          }}
        >
          <Stack.Screen 
            name="Splash" 
            component={Splash} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
    
  );
}
export default App;