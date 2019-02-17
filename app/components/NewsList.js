/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';

import NewsListItem from './NewsListItem';
import { topHeadlines } from '../helpers/urlProvider';

export default class NewsList extends Component {
    state = {
        articles: [{
            url: '1'
        }]
    };

    static navigationOptions = {
        title: 'News'
    };

    componentDidMount = async () => {
        const url = topHeadlines();
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            articles: data.articles
        });
    }
    
    render() {
        const { articles } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={articles}
                    renderItem={({item}) => (
                        <NewsListItem article={item} navigate={navigate} />
                    )}
                    keyExtractor={(item) => item.url}
                />
            </View>
        );
    }
}
