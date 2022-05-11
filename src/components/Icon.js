import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

const Icon = ({icon, width, height, onPress}) => {
    return (
        <TouchableWithoutFeedback {...{onPress}} hitSlop={[100, 100, 100, 100]}>
            <Image source={icon} style={{width, height}} resizeMode="cover" />
        </TouchableWithoutFeedback>
    );
};

export default Icon;
