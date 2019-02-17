import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NewsList from './NewsList.js';
import NewsDetails from './NewsDetails';

const MainNavigator = createStackNavigator({
    Home: { screen: NewsList },
    Details: { screen: NewsDetails }
});

const AppContainer = createAppContainer(MainNavigator);

// export default AppContainer;


export default class Main extends Component {
    render() {
        return (
            <ThemeProvider>
                <AppContainer />
            </ThemeProvider>                
        );
    }
}

