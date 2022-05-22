/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    Switch,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ICONS from '../../assets/icons';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {DrawerButton, NotificationButton} from '../../components/Buttons';
import Icon from '../../components/Icon';
import Dropdown from '../../components/Inputs/Dropdown';
import Container from '../../components/Utils/Container';
import SpaceFiller from '../../components/Utils/SpaceFiller';
import TopBar from '../../components/Utils/TopBar';
import {SCREENS} from '../../navigation/screens';
import {getNavigateFunction, goToTablessScreen} from '../../utils/functions';
import {
    HomeButton,
    WaterQuantityPieChart,
    WaterSavingTips,
    WaterUsageProgressChart,
    UsageChart,
} from './utils';
import FreeWaterVideos from './utils/FreeWaterVideos';

const styles = StyleSheet.create({
    scrollview: {marginHorizontal: 15},
    reportText: {
        fontFamily: 'Ambit-Light',
        fontSize: 13,
        color: '#79797F',
        ...STYLES.centerText,
    },
    chartsContainer: {
        ...STYLES.row,
        flexWrap: 'wrap',
        marginVertical: 26,
    },
    largeChartLabel: {
        ...TEXTS.primary,
        fontSize: 18,
        color: '#161626',
    },
    usageStatisticChart: {
        height: 310,
        backgroundColor: 'rgba(228, 228, 235, 0.4)',
        borderRadius: 20,
        marginTop: 10,
    },
    blueText: {
        color: COLORS.primary2,
        ...TEXTS.primary,
    },
    limitBox: {
        borderRadius: 25,
        marginTop: 19,
        marginBottom: 13,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 2,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        ...STYLES.row,
        ...STYLES.spaced,
        ...STYLES.centersY,
        backgroundColor: '#F8F8FA',
        height: 54,
        paddingHorizontal: 20,
    },
});

const Home = ({navigation}) => {
    const [showLimit, setShowLimit] = useState(false);
    const [statisticType, setStatisticType] = useState('daily');
    const reportLeakage = goToTablessScreen(navigation, SCREENS.reportleakage);
    const buyWater = goToTablessScreen(navigation, SCREENS.buywater);

    return (
        <Container>
            <TopBar>
                <DrawerButton onPress={() => navigation.openDrawer()} />
                <TouchableWithoutFeedback onPress={reportLeakage}>
                    <View style={STYLES.centersXY}>
                        <Icon icon={ICONS.bold_error} width={28} height={28} />
                        <Text style={[STYLES.mt_8, styles.reportText]}>
                            Report leakage
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <NotificationButton />
            </TopBar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollview}>
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
                    <WaterUsageProgressChart />
                    <WaterQuantityPieChart />
                </View>
                <View style={[STYLES.centersXY, STYLES.row]}>
                    <View style={styles.homeButton}>
                        <HomeButton
                            action={buyWater}
                            icon={
                                <Icon
                                    icon={ICONS.water_drop}
                                    width={24}
                                    height={24}
                                    style={{tintColor: COLORS.white}}
                                />
                            }
                            text="Buy Water Credit"
                        />
                    </View>
                    <View style={STYLES.ml_10}>
                        <HomeButton
                            icon={
                                <Icon
                                    icon={ICONS.play}
                                    width={24}
                                    height={24}
                                    style={{tintColor: COLORS.white}}
                                />
                            }
                            text="Earn free water"
                        />
                    </View>
                </View>
                {/* usage statistic */}
                <View style={STYLES.mt_32}>
                    <View
                        style={[
                            STYLES.row,
                            STYLES.centersY,
                            STYLES.spaced,
                            {zIndex: 19},
                        ]}>
                        <Text style={styles.largeChartLabel}>
                            Usage Statistic
                        </Text>
                        <View style={{width: 100}}>
                            <Dropdown
                                style={{
                                    backgroundColor: '#f8f8fa',
                                    maxWidth: 100,
                                }}
                                listMode="SCROLLVIEW"
                                options={[
                                    {label: 'Daily', value: 'daily'},
                                    {label: 'Monthly', value: 'monthly'},
                                ]}
                                showArrowIcon={true}
                                ArrowDownIconComponent={() => (
                                    <Icon
                                        icon={ICONS.blue_arrow_down}
                                        height={16}
                                        width={16}
                                    />
                                )}
                                value={statisticType}
                                setValue={setStatisticType}
                                ArrowUpIconComponent={() => (
                                    <Icon
                                        icon={ICONS.blue_arrow_up}
                                        height={16}
                                        width={16}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.usageStatisticChart}>
                        <UsageChart />
                    </View>
                </View>
                {/* summary */}
                <View style={STYLES.mt_16}>
                    <Text style={styles.largeChartLabel}>Summary</Text>
                    <View style={[STYLES.centersXY, STYLES.mt_8]}>
                        <Text style={[styles.largeChartLabel, {fontSize: 14}]}>
                            you use more water on{' '}
                        </Text>
                        <Text
                            style={[
                                styles.blueText,
                                STYLES.mt_8,
                                {fontSize: 18},
                            ]}>
                            MONDAY
                        </Text>
                        <Text
                            style={[
                                styles.largeChartLabel,
                                STYLES.mt_16,
                                {fontSize: 13},
                            ]}>
                            you use more water
                        </Text>
                        <Text
                            style={[
                                styles.blueText,
                                STYLES.mt_8,
                                {fontSize: 24},
                            ]}>
                            Between 12am-6am
                        </Text>
                    </View>
                    <View style={styles.limitBox}>
                        <Text
                            style={[
                                TEXTS.primary,
                                {fontSize: 14, color: '#888888'},
                            ]}>
                            Set Daily Limit
                        </Text>
                        <View style={[STYLES.row, STYLES.centersY]}>
                            <Text
                                style={[
                                    styles.blueText,
                                    {fontSize: 14, marginRight: 20},
                                ]}>
                                100L Daily
                            </Text>
                            <Switch
                                trackColor={{false: '#D7D7D7', true: '#D7D7D7'}}
                                style={{margin: 0}}
                                value={showLimit}
                                onValueChange={val => setShowLimit(val)}
                                thumbColor={
                                    showLimit ? COLORS.primary2 : '#D7D7D7'
                                }
                                ios_backgroundColor={'#D7D7D7'}
                            />
                        </View>
                    </View>
                </View>
                {/* water saving tips */}
                <View style={STYLES.mt_14}>
                    <WaterSavingTips />
                </View>
                <FreeWaterVideos />
                <SpaceFiller space={80} />
            </ScrollView>
        </Container>
    );
};

export default Home;
