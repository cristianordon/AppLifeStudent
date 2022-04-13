import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_500Medium_Italic,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  RobotoMono_400Regular_Italic
} from '@expo-google-fonts/roboto-mono'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    RobotoMono_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  )
}; 