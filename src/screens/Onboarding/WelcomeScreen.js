/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import PrimaryButton from '@app/components/Buttons/PrimaryButton';
import {STYLES, TEXTS, COLORS} from '@app/assets/styles';

const styles = StyleSheet.create({
    startCover:{
        bottom:0,
        height:100
    }
})

const WelcomeScreen = () => {
    const {width, height} = useWindowDimensions();
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <Image
                    source={require('../../assets/images/blob.png')}
                    style={{maxHeight: 0.5 * height, width}}
                    resizeMode="cover"
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
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
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 87,
                    }}>
                    <PrimaryButton
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
            </ScrollView>
            <View style={[STYLES.absolute,]}>

            </View>
        </View>
    );
};

export default WelcomeScreen;
