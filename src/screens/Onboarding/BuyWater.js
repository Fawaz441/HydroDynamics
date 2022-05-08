/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {STYLES, TEXTS, COLORS} from '../../assets/styles';
import StepButton from './utils/StepButton';

const BuyWater = ({next}) => {
    const {width, height} = useWindowDimensions();
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <Image
                    source={require('../../assets/images/blob2.png')}
                    style={{height: (302/812) * height, width}}
                    resizeMode="cover"
                />
                <View style={[STYLES.centersXY, STYLES.mt_8]}>
                <Image
                    source={require('../../assets/images/money-water-drop.png')}
                    style={{height: (300/812) * height, width: (271/375) * width}}
                    resizeMode="cover"
                />
                <Text style={[STYLES.mt_24, TEXTS.header]}>Buy Water</Text>
                <View style={STYLES.mt_24}>
                    <Text style={[TEXTS.latoMedium, STYLES.centerText]}>Buy water anytime anywhere with</Text>
                    <Text style={[TEXTS.latoMedium, STYLES.centerText]}>ease, from your bank or USSD.</Text>
                </View>
                </View>
            </ScrollView>
            <StepButton step={2} onPress={()=>next(2)}/>
        </View>
    );
};

export default BuyWater;
