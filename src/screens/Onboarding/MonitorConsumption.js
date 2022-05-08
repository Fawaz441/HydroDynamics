/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {STYLES, TEXTS, COLORS} from '../../assets/styles';
import StepButton from './utils/StepButton';

const MonitorConsumption = ({next}) => {
    const {width, height} = useWindowDimensions();
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <Image
                    source={require('../../assets/images/blob3.png')}
                    style={{height: (373.16/812) * height, width}}
                    resizeMode="cover"
                />
                <View style={[STYLES.centersXY, STYLES.mt_8]}>
                <Image
                    source={require('../../assets/images/charts.png')}
                    style={{height: (248/812) * height, width: (271/375) * width}}
                    resizeMode="cover"
                />
                <Text style={[STYLES.mt_24, TEXTS.header]}>Monitor your water</Text>
                <Text style={[TEXTS.header]}>consumption</Text>
                <View style={STYLES.mt_24}>
                    <Text style={[TEXTS.latoMedium, STYLES.centerText]}>You can easily monitor your water</Text>
                    <Text style={[TEXTS.latoMedium, STYLES.centerText]}>consumption based on your</Text>
                    <Text style={[TEXTS.latoMedium, STYLES.centerText]}>preference</Text>
                </View>
                </View>
            </ScrollView>
            <StepButton step={3} onPress={()=>next(3)}/>
        </View>
    );
};

export default MonitorConsumption;
