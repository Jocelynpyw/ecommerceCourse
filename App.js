import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Landing from './src/screens/Landing';

export default function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}
