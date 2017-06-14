/**
 * Created by panda.guo on 2017/6/14.
 */
import React, {Component} from 'react';
import {Image} from 'react-native';

export default class ImageProp extends Component {

    constructor() {
        super();
    }

    render() {
        let img = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }

        return (<Image source={img} style={{window: 200, height: 110}}/>)
    }

}