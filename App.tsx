import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Login } from './components/Login/login';
import { LoginPageProps } from './core/Models/props/loginPageProps';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import InitialScreen from './components/login/InitialScreen';
import LoginScreen from './components/login/loginScreen';
import ForgotPassScreen from './components/login/forgotPassScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const loginProps = {
    isUserLoggedIn: true
  } as LoginPageProps;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <InitialScreen /> */}
        {/* <LoginScreen /> */}
        <ForgotPassScreen />
        {/* <Navigation colorScheme={colsorScheme} /> */}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
