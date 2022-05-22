import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ICONS from '../../assets/icons';
import IMAGES from '../../assets/images';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import Icon from '../Icon';

const styles = StyleSheet.create({
    tickWrapper: {
        height: 72,
        width: 72,
        borderRadius: 36,
        shadowColor: '#40BFFF',
        shadowRadius: 40,
        shadowOffset: {
            height: 10,
            width: 0,
        },
        ...STYLES.centersXY,
        backgroundColor: COLORS.primary2,
    },
});

const Success = ({text, hideSuccessText}) => {
    return (
        <View style={STYLES.centersXY}>
            <View style={styles.tickWrapper}>
                <Icon
                    icon={ICONS.tick}
                    width={23}
                    height={15}
                    resizeMode="contain"
                />
            </View>
            {!hideSuccessText && (
                <Text style={[TEXTS.header, STYLES.mt_16]}>Success</Text>
            )}
            <Text
                style={[
                    STYLES.mt_8,
                    STYLES.centerText,
                    TEXTS.poppinsRegular,
                    {
                        fontSize: 12,
                        color: 'rgba(34, 50, 99, 0.5)',
                        maxWidth: '90%',
                    },
                ]}>
                {text}
            </Text>
        </View>
    );
};

export default Success;
