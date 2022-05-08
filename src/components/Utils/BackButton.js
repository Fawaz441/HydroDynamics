import React from 'react'
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native'
import ICONS from '../../assets/icons'
import { STYLES } from '../../assets/styles'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:'#EDF1FA',
        borderRadius:8,
        shadowColor:'#000',
        shadowRadius:40,
        shadowOffset:{
            height:10,
            width:0
        },
        width:42.27,
        height:38.49,
        ...STYLES.centersXY
    },
    transparentWrapper:{
        width:42.27,
        height:38.49,
        borderRadius:8,
    },
    icon: {
        height:9.02,
        width: 13.41
    }
})

const BackButton = ({onPress,transparent}) => {
    if(transparent){
        return (
            <View style={styles.transparentWrapper}/>
        )
    }
    return(
        <TouchableOpacity {...{onPress}}>
            <View style={styles.wrapper}>
                <Image source={ICONS.back_arrow} style={styles.icon}
                resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    )
}

export default BackButton