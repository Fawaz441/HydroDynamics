import styles from './styles';
import React from 'react';
import {View, Text} from 'react-native';
import {STYLES} from '../../../assets/styles';

const OrText = () => {
    return (
        <View style={[STYLES.row, STYLES.centersY, {marginTop: 20}]}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
        </View>
    );
};

export default OrText;
