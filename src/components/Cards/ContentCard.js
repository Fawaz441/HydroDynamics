import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ICONS from '../../assets/icons';
import IMAGES from '../../assets/images';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import Icon from '../Icon';

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 20,
        shadowOffset: {
            height: 4,
            width: 3,
        },
        borderRadius: 25,
        backgroundColor: COLORS.offwhite,
        width: '99%',
    },
    labelWrapper: {
        ...STYLES.centersXY,
        marginVertical: 18,
    },
    imageWrapper: {
        height: 210,
        borderRadius: 25,
        backgroundColor: COLORS.lightblue,
        marginHorizontal: 14,
    },
    image: {
        width: 131,
        height: '100%',
        alignSelf: 'flex-end',
        marginRight: 39,
    },
    subLabelWrapper: {
        marginTop: 18,
        marginBottom: 15,
        maxWidth: 265,
        alignSelf: 'center',
    },
});

const ContentCard = ({label, image, subLabel, style = {}, isVideo}) => {
    return (
        <View style={[styles.wrapper, style]}>
            {label ? (
                <View style={styles.labelWrapper}>
                    <Text
                        style={[
                            TEXTS.primary,
                            {fontSize: 14},
                            STYLES.centerText,
                        ]}>
                        {label}
                    </Text>
                </View>
            ) : (
                <View style={{height: 13}} />
            )}
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={IMAGES.girl}
                    resizeMode="cover"
                />
                {isVideo && (
                    <View style={[STYLES.centersXY, StyleSheet.absoluteFill]}>
                        <Icon icon={ICONS.play_button} height={78} width={74} />
                    </View>
                )}
            </View>
            {subLabel ? (
                <View style={styles.subLabelWrapper}>
                    <Text
                        style={[
                            TEXTS.primary,
                            {fontSize: 16, color: '#676767'},
                        ]}
                        numberOfLines={2}>
                        {subLabel}
                    </Text>
                </View>
            ) : (
                <View style={{height: 16}} />
            )}
        </View>
    );
};

export default ContentCard;
