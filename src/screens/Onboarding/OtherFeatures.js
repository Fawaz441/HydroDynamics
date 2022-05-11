/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {STYLES, TEXTS, COLORS} from '../../assets/styles';
import StepButton from './utils/StepButton';

const OtherFeatures = ({next}) => {
    const {width, height} = useWindowDimensions();
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <Image
                    source={require('../../assets/images/blob4.png')}
                    style={{height: (466 / 812) * height, width}}
                    resizeMode="cover"
                />
                <View style={[STYLES.centersXY, STYLES.mt_8]}>
                    <Image
                        source={require('../../assets/images/drop.png')}
                        style={{height: 100, width: 71}}
                        resizeMode="cover"
                    />
                    <Text style={[TEXTS.header, {marginTop: 65.12}]}>
                        Other Features
                    </Text>
                </View>
            </ScrollView>
            <StepButton step={4} onPress={next} />
        </View>
    );
};

export default OtherFeatures;
