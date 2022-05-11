import React from 'react';
import {STYLES} from '@app/assets/styles';
import styles from './styles';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

const StepButton = ({step, onPress}) => {
    const image =
        step === 1
            ? require('@app/assets/images/Button1.png')
            : step === 2
            ? require('@app/assets/images/Button2.png')
            : step === 3
            ? require('@app/assets/images/Button3.png')
            : step === 4
            ? require('@app/assets/images/Button4.png')
            : '';
    return (
        <View style={[STYLES.absolute, styles.bottomButtonContainer]}>
            <TouchableWithoutFeedback {...{onPress}}>
                <View style={[STYLES.row, styles.bottomButtonWrapper]}>
                    {step === 1 && (
                        <Text style={styles.bottomButtonText}>Start</Text>
                    )}
                    <Image
                        source={image}
                        style={styles.button}
                        resizeMode="cover"
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default StepButton;
