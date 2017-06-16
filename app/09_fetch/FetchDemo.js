import React, {Component}from 'react';
import {View, StyleSheet, Text,ToastAndroid} from 'react-native';

/**
 * Created by panda.guo on 2017/6/16.
 */
export default class FetchDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null
        };
    }


    getMoviesFromApiAsync() {
        const url = 'https://facebook.github.io/react-native/movies.json';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                ToastAndroid.show(responseJson.movies.toString(), ToastAndroid.SHORT)
                this.setState({
                    movies:responseJson.movies
                })
            })
            .catch((error) => {
                console.error(error)
                ToastAndroid.show(error, ToastAndroid.SHORT)
            })
    }

    async getMovieFromApi() {
        try {
            const url = 'https://facebook.github.io/react-native/movies.json';
            let response = await fetch(url);
            return response.json();
        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    render() {
        let items = this.state.movies;
        if (items) {
            return this.renderItem(items);
        }
        return (
            <Text style={{textAlign: "center", fontSize: 16, padding: 20}}>加载中...</Text>
        )
    }

    renderItem(items) {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 16, padding: 20}}>加载完毕...{items.toString()}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})