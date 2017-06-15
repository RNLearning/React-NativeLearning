import React, {Component}from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

/**
 * Created by panda.guo on 2017/6/15.
 * FlatList
 * 属性:
 * |--
 *    data  数据源
 *    renderItem   item的渲染视图
 */
export default class FlatListDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
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