import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './lib/hooks/useCachedResources';
import useColorScheme from './lib/hooks/useColorScheme';
import Navigation from './lib/navigation';

import React from 'react'

import { Provider } from 'react-redux'
import { store } from './lib/redux/store'
import theme from './components/theme'
import { ThemeProvider } from '@rneui/themed';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Navigation />
            <StatusBar />
          </ThemeProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
