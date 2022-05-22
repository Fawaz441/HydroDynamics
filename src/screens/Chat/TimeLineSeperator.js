import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {STYLES, TEXTS} from '../../assets/styles';

const styles = StyleSheet.create({
    wrapper: {
        ...STYLES.row,
        ...STYLES.centersY,
        marginBottom: 27.26,
    },
    line: {
        height: 0.97,
        backgroundColor: '#E8E6EA',
        flex: 1,
    },
    text: {
        ...TEXTS.abeezee,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 10,
    },
});

const TimeLineSeperator = ({date}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.line} />
            <Text style={styles.text}>{date}</Text>
            <View style={styles.line} />
        </View>
    );
};

export default TimeLineSeperator;
