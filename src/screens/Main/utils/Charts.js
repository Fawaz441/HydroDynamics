import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressChart, PieChart, LineChart} from 'react-native-chart-kit';
import {COLORS, STYLES, TEXTS} from '../../../assets/styles';
import {width} from '../../../utils/constants';
import ActivityRings from 'react-native-activity-rings';

const styles = StyleSheet.create({
    chartContainer: {
        // height: 345,
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
    firstChart: {
        marginRight: width < 375 ? 0 : 15,
    },
    waterUsageTextWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...STYLES.centersXY,
    },
    progressChart: {
        transform: [{rotate: '180deg'}],
        zIndex: 2,
    },
    progressChartOuterWrapper: {
        flex: 1,
        ...STYLES.centersXY,
    },
    progressChartStat: {
        height: '100%',
        width: '100%',
        ...STYLES.absolute,
        top: 0,
        ...STYLES.centersXY,
    },
    progressStatCircle: {
        ...STYLES.absolute,
        top: '50%',
        left: '50%',
        marginLeft: -55,
        marginTop: -55,
        height: 110,
        width: 110,
        borderRadius: 55,
        backgroundColor: 'rgba(228, 228, 235, 0.27)',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        shadowOffset: {
            height: 4,
            width: 2,
        },
        zIndex: 1,
        elevation: 1,
    },
});

const data = {
    labels: ['Swim'], // optional
    data: [0.6],
};

const data2 = [
    {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#26CBFF',
        legendFontSize: 15,
    },
    {
        name: 'Toronto',
        population: 2800000,
        color: '#109CF1',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Beijing',
        population: 527612,
        color: '#26CBFF',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
];

const colors = {
    0.2: 'rgba(6, 11, 16, 1)',
    0.4: 'rgba(157, 0, 231, 1)',
    0.6: 'rgba(233, 41, 41, 1)',
    0.8: 'rgba(245, 116, 76, 1)',
    1: 'rgba(255, 199, 0, 1)',
};

const usageChartData = {
    labels: ['8AM', '9AM', '10AM', '11AM', '12PM'],
    datasets: [
        {
            data: [100, 200, 300, 400, 500],
            color: opacity => {
                const choices = Object.values(colors);
                const color =
                    choices[Math.floor(Math.random(choices) * choices.length)];
                return color;
            },
            strokeWidth: 4, // optional
        },
    ],
};

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(47, 128, 237, ${opacity})`,
    useShadowColorFromDataset: false, // optional,
    fillShadowGradientFromOpacity: 0,
    fillShadowGradientToOpacity: 0,
    propsForDots: {
        r: '0',
        strokeWidth: '0',
        stroke: '#ffa726',
    },
};

const activityData = [
    {value: 0.6, backgroundColor: '#ffffff', color: COLORS.primary2},
];

const activityConfig = {
    width: 150,
    height: 150,
    radius: 50,
    ringSize: 10,
};

export const WaterUsageProgressChart = () => (
    <View style={[styles.chartContainer, styles.firstChart]}>
        <Text style={styles.largeChartLabel}>Usage today</Text>
        <View style={styles.progressChartOuterWrapper}>
            <View style={styles.progressChartStat}>
                <View style={styles.progressStatCircle} />
                <Text>Hello</Text>
            </View>
            <View style={styles.progressChart}>
                <ActivityRings data={activityData} config={activityConfig} />
            </View>
        </View>
        {/* <View>
            <ProgressChart
                data={data}
                width={width < 375 ? '100%' : (width - 45) / 2}
                height={135}
                strokeWidth={10}
                radius={55}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            <View style={styles.waterUsageTextWrapper}>
                <View
                    style={[STYLES.centersXY, {width: '100%', marginLeft: 20}]}>
                    <Text
                        style={[
                            TEXTS.primary,
                            STYLES.centerText,
                            {fontSize: 24, color: '#161616'},
                        ]}>
                        300
                    </Text>
                    <Text
                        style={[
                            TEXTS.primary,
                            {fontSize: 18, color: '#79797F'},
                        ]}>
                        Liters
                    </Text>
                </View>
            </View>
        </View> */}
    </View>
);

export const WaterQuantityPieChart = () => (
    <View style={styles.chartContainer}>
        <View style={[STYLES.centersXY]}>
            <PieChart
                data={data2}
                width={width < 375 ? '100%' : (width - 100) / 2}
                height={135}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'30'}
                // center={[10, 50]}
                absolute
                hasLegend={false}
            />
        </View>
    </View>
);

export const UsageChart = () => {
    return (
        <LineChart
            width={width - 30}
            height={260}
            verticalLabelRotation={30}
            chartConfig={{
                ...chartConfig,
                strokeWidth: 4,
                color: () => 'rgba(7, 4, 23, .4)',
                fillShadowGradientOpacity: 0,
                useShadowColorFromDataset: true,
                decimalPlaces: 0,
            }}
            data={usageChartData}
            bezier
            withOuterLines={false}
            withVerticalLines={false}
            yAxisSuffix="l"
        />
    );
};
