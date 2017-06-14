/**
 * Created by panda.guo on 2017/6/14.
 */
import React, {Component}from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LotsOfStyle extends Component {

    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigBlue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigBlue,then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red,then bigblue</Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red'
    }
})