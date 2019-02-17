import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class NewsListItem extends Component {
    static propTypes = {
        article: PropTypes.object
    }
    render() {
        const { article } = this.props;
        return (
            <View>
                <ListItem 
                    leftAvatar={{ source: { uri: article.urlToImage } }}
                    title={article.title}
                    onPress={() => alert(article.url)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});