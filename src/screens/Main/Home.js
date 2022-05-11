/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ICONS from '../../assets/icons';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {DrawerButton, NotificationButton} from '../../components/Buttons';
import Icon from '../../components/Icon';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    space: {marginHorizontal: 15},
    reportText: {
        fontFamily: 'Ambit-Light',
        fontSize: 13,
        color: '#79797F',
        ...STYLES.centerText,
    },
    firstChart: {
        marginRight: width < 375 ? 0 : 15,
    },
    chartsContainer: {
        ...STYLES.row,
        flexWrap: 'wrap',
        marginVertical: 26,
    },
    chartContainer: {
        height: 345,
        width: width < 375 ? '100%' : (width - 45) / 2,
        backgroundColor: 'rgba(228, 228, 235, 0.4)',
        borderRadius: 20,
        padding: 10,
    },
    largeChartLabel: {
        ...TEXTS.primary,
        fontSize: 18,
        color: '#161626',
    },
    homeButton: {
        borderRadius: 10,
        backgroundColor: '#F8F8FA',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(178, 178, 178, 0.2)',
        ...STYLES.row,
        ...STYLES.centersY,
    },
    homeButtonText: {
        ...TEXTS.primary,
        fontSize: 13,
        color: '#161626',
        marginLeft: 10,
    },
});

const Home = ({navigation}) => {
    return (
        <SafeAreaView edges={['left', 'right']}>
            <View
                style={[
                    {
                        marginTop: 50 - StatusBar.currentHeight,
                        paddingBottom: 10,
                    },
                    STYLES.row,
                    STYLES.spaced,
                    styles.space,
                ]}>
                <DrawerButton />
                <View style={STYLES.centersXY}>
                    <Icon icon={ICONS.bold_error} width={28} height={28} />
                    <Text style={[STYLES.mt_8, styles.reportText]}>
                        Report leakage
                    </Text>
                </View>
                <NotificationButton />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.space}>
                <View style={[STYLES.mt_16, STYLES.centersXY]}>
                    <Text
                        style={[
                            TEXTS.primary,
                            {fontSize: 16, color: COLORS.primary},
                        ]}>
                        Hey Usman,
                    </Text>
                    <Text style={[TEXTS.header2, STYLES.mt_8]}>
                        Welcome Back
                    </Text>
                </View>
                <View style={styles.chartsContainer}>
                    <View style={[styles.chartContainer, styles.firstChart]}>
                        <Text style={styles.largeChartLabel}>Usage today</Text>
                    </View>
                    <View style={styles.chartContainer} />
                </View>
                <View style={[STYLES.centersXY, STYLES.row]}>
                    <View style={styles.homeButton}>
                        <Icon icon={ICONS.water_drop} width={24} height={24} />
                        <Text style={styles.homeButtonText}>
                            Buy Water Credit
                        </Text>
                    </View>
                    <View style={[styles.homeButton, STYLES.ml_10]}>
                        <Icon icon={ICONS.play} width={24} height={24} />
                        <Text style={styles.homeButtonText}>
                            Buy Water Credit
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
