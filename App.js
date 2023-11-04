import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import 'react-native-gesture-handler';

// screens
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import * as eva from '@eva-design/eva';
import customTheme from './theme';
import SignupOptions from './src/screens/SignupOptions';
import SigninOptions from './src/screens/SigninOptions';
import OtpVerification from './src/screens/OtpVerification';
import VerificationSuccessful from './src/screens/VerificationSuccessful';
import RecoverPassword from './src/screens/RecoverPassword';
import SetupNewPassword from './src/screens/SetupNewPassword'
import ResetPassword from './src/screens/ResetPassword';
import DrawerNavigator from './src/components/CoachDrawerNavigator';
import Profile from './src/screens/Profile';
import HomeTeam from './src/screens/HomeTeam'


const Stack = createNativeStackNavigator();

function App() {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
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
            {/* <Stack.Screen 
            name="Splash" 
            component={Splash} 
            options={{
              headerShown: false
            }}
          /> */}
            <Stack.Screen name='SignupOption' component={SignupOptions} />
            <Stack.Screen name='SigninOption' component={SigninOptions} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="OTP" component={OtpVerification} options={{ headerShown: false }} />
            <Stack.Screen name="OTPConfirmation" component={VerificationSuccessful} options={{ headerShown: false }} />
            <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
            <Stack.Screen name="SetupNewPassword" component={SetupNewPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="CoachDrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen name="Hometeam" component={HomeTeam} options={{ headerShown: false }}/>

          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
export default App;