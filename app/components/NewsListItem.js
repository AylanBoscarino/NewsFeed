import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

import NewsDetails from './NewsDetails';

export default class NewsListItem extends Component {
    static propTypes = {
        article: PropTypes.object
    }

    handleTouch = (article) => {
        // console.log({article});
        this.props.navigate(
            'Details',
            { article, title: article.title }
        );
    };

    render() {
        const { article } = this.props;
        return (
            <View>
                <ListItem 
                    leftAvatar={{ source: { uri: article.urlToImage } }}
                    title={article.title}
                    onPress={() => this.handleTouch(article)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});