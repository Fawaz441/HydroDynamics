/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, Text, useWindowDimensions} from 'react-native';
import PrimaryButton from '@app/components/Buttons/PrimaryButton';
import {STYLES, TEXTS, COLORS} from '../../assets/styles';
import StepButton from './utils/StepButton';
import SpaceFiller from '../../components/Utils/SpaceFiller';

const WelcomeScreen = ({next, reportLeakage}) => {
    console.log(reportLeakage);
    const {width, height} = useWindowDimensions();
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <Image
                    source={require('../../assets/images/blob.png')}
                    style={{height: 0.5 * height, width}}
                    resizeMode="cover"
                />
                <View
                    style={{
                        ...STYLES.centersXY,
                        marginTop: 35,
                    }}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        resizeMode="cover"
                        style={{width: 100, height: 101}}
                    />
                </View>
                <View
                    style={{
                        ...STYLES.row,
                        ...STYLES.centersXY,
                        marginTop: 87,
                    }}>
                    <PrimaryButton
                        action={reportLeakage}
                        text="Report leakage"
                        icon={
                            <Image
                                source={require('@app/assets/icons/clock-error.png')}
                                style={{height: 21, width: 21}}
                                resizeMode="cover"
                            />
                        }
                    />
                </View>
                <SpaceFiller space={200} />
            </ScrollView>
            <StepButton step={1} onPress={() => next(1)} />
        </View>
    );
};

export default WelcomeScreen;
