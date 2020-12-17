/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import addWord from './src/pages/AddWord';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => addWord);
