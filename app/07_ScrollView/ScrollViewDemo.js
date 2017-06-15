import React, {Component}from 'react';
import {ScrollView, Text, Image} from 'react-native';

/**
 * Created by panda.guo on 2017/6/15.
 */
export default class ScrollViewDemo extends Component {

    render() {
        return (
            <ScrollView horizontal decelerationRate={'normal'}>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')} style={{width: 300, height: 300}}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>

                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>

                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>

                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
            </ScrollView>
        )
    }

}