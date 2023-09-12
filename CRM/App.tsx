/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// @ts-ignore
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './src/store';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider, useTheme } from 'styled-components';
import { navigationTheme } from './src/theme/theme';
import Routes from './src/navigation/Routes';
import { LogBox } from 'react-native';
import ModalManager from './src/store/global_modal/manager';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const persistor = persistStore(store);
const queryClient = new QueryClient();

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={navigationTheme.light}>
              <Routes scheme={navigationTheme.light} />
              <ModalManager />
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>

  );
}
