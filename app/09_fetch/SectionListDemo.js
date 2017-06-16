import React, {Component}from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';

/**
 * Created by panda.guo on 2017/6/16.
 */
export default class SectionListDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={
                        [
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]
                    }

                    renderItem={({item}) => <Text style={styles.sectionContent}>{item}</Text>}

                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
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
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    },
    sectionContent: {
        padding: 10,
        fontSize: 18,
        height: 44
    }

})