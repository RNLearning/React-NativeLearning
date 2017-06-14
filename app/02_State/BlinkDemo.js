/**
 * Created by panda.guo on 2017/6/14.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Blink extends Comnponent {

    constructor() {
        super();
        this.state = (showText: true);

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);

    }


    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkDemo extends Comnponent {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>

        );
    }
}

