import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import NewsList from './NewsList.js';

export default class Main extends Component {
    render() {
        return (
            <ThemeProvider>
                <NewsList />
            </ThemeProvider>                
        );
    }
}
