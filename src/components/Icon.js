import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

const Icon = ({icon, width, height, onPress, resizeMode, style = {}}) => {
    if (onPress) {
        return (
            <TouchableWithoutFeedback {...{onPress}}>
                <Image
                    source={icon}
                    style={{width, height, ...style}}
                    resizeMode="cover"
                />
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
