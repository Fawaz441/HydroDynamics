import React from 'react'
import {Image} from 'react-native'

const InputIcon = ({icon, width, height}) => {
    return(
        <Image source={icon}
        style={{width, height}}
        resizeMode="cover"
        />
    )
}

export default InputIcon