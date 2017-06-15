import React, {Component}from 'react';
import {TextInput, Text, View} from 'react-native';

/**
 * Created by panda.guo on 2017/6/15.
 *
 * TextInput类比于Android中的EditText,用于用户输入的交互
 * 主要属性:
 *       onChangeText，接受一个文字改变时候的监听函数
 *       onSubmitEditing,用于用户软键盘提交建的监听处理
 *
 */
export default class TextInputDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        console.log('132456@'&&'@')
    }
    // 下面这段代码不是特别理解
    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40, backgroundColor: "powderblue"}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(" ").map((word) => word && '@').join("")}
                </Text>
            </View>

        );
    }

}