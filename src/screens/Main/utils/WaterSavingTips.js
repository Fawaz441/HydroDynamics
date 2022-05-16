import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS, STYLES} from '../../../assets/styles';
import {ContentCard} from '../../../components/Cards';

const styles = StyleSheet.create({
    dots: {
        marginTop: 19,
        marginBottom: 28,
        ...STYLES.centersXY,
        ...STYLES.row,
    },
    dot: {
        height: 9,
        width: 9,
        borderRadius: 4.5,
        backgroundColor: '#c4c4c4',
    },
    middleDot: {
        marginHorizontal: 16,
    },
});

const WaterSavingTips = () => {
    return (
        <View>
            <ContentCard
                label={'Water saving tips'}
                subLabel={
                    'It looks like you are on track. Please continue to follow your daily plan'
                }
            />
            <View style={styles.dots}>
                <View
                    style={[styles.dot, {backgroundColor: COLORS.primary2}]}
                />
                <View style={[styles.dot, styles.middleDot]} />
                <View style={styles.dot} />
            </View>
        </View>
    );
};

export default WaterSavingTips;
