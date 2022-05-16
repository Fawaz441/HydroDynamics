import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ContentCard} from '../../../components/Cards';

const styles = StyleSheet.create({
    card: {
        marginBottom: 19,
    },
});

const FreeWaterVideos = () => {
    return (
        <View>
            <ContentCard
                label={'Watch Video and earn free water'}
                style={styles.card}
                isVideo
            />
            <ContentCard style={styles.card} isVideo />
            <ContentCard isVideo />
        </View>
    );
};

export default FreeWaterVideos;
