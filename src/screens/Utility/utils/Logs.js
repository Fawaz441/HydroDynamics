import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import ICONS from '../../../assets/icons';
import {COLORS, STYLES, TEXTS} from '../../../assets/styles';

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 7,
        backgroundColor: COLORS.offwhite,
        borderRadius: 25,
        flex: 1,
        maxHeight: 344,
        overflow: 'hidden',
    },
    iconWrapper: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#9DCEFF',
        ...STYLES.centersXY,
        marginRight: 10,
    },
    icon: {
        height: 16,
        width: 14,
    },
    description: {
        ...TEXTS.poppinsRegular,
        fontSize: 10,
        color: '#1D1617',
        marginBottom: 5,
    },
    date: {
        ...TEXTS.poppinsRegular,
        fontSize: 8,
        color: '#7B6F72',
    },
    ellipsis: {
        width: 14,
        height: 14,
    },
    purchase: {
        paddingVertical: 16,
        marginHorizontal: 19,
    },
    bordered: {
        borderBottomWidth: 1,
        borderBottomColor: '#DDDADA',
    },
});

const Log = ({item, isBordered}) => {
    return (
        <View
            style={[
                STYLES.spaced,
                STYLES.row,
                STYLES.centersXY,
                styles.purchase,
                isBordered ? styles.bordered : '',
            ]}>
            <View style={[STYLES.row, STYLES.centersY]}>
                <View style={styles.iconWrapper}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={ICONS.house}
                    />
                </View>
                <View>
                    <Text style={styles.description} numberOfLines={1}>
                        300m3 of water has been purchased successfully
                    </Text>
                    <Text style={styles.date}>27th December 2021</Text>
                </View>
            </View>
            <View style={{flexShrink: 0, marginLeft: 25}}>
                <Image
                    source={ICONS.ellipsis}
                    resizeMode="contain"
                    style={styles.ellipsis}
                />
            </View>
        </View>
    );
};

const Logs = ({style}) => {
    const data = [1, 2, 3, 4, 5, 6];

    return (
        <View style={style ? style : styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item, index) => (
                    <Log key={item} isBordered={index !== data.length - 1} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Logs;
