import React, { Component } from 'react';
import {  View, ActivityIndicator, ScrollView } from 'react-native';
import { Card, Header, Text, Image } from 'react-native-elements';

export default class NewsDetails extends Component {
    static navigationOptions = {
        title: '...'
    }
    render() {
        // eslint-disable-next-line react/prop-types
        const { navigation } = this.props;
        const article = navigation.getParam('article', 'NO-ID');
        return (
            <ScrollView>
                <Text h3>{article.title}</Text>
                <Image 
                    source={{ uri: article.urlToImage }}
                    style={{ width: '100%', height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text>{article.description}</Text>
            </ScrollView>
        );
    }
}
