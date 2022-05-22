import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';

const Icon = ({icon, width, height, onPress, resizeMode, style = {}}) => {
    if (onPress) {
        return (
            <TouchableWithoutFeedback {...{onPress}}>
                <View style={{height: 20, width: 20}}>
                    <Image
                        source={icon}
                        style={{width, height, ...style}}
                        resizeMode="cover"
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <Image
            source={icon}
            style={{width, height, ...style, flexShrink: 0}}
            resizeMode={resizeMode ?? 'cover'}
        />
    );
};

export default Icon;
