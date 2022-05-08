import React from 'react'
import {View, StyleSheet, TextInput, Image} from 'react-native'
import {COLORS, STYLES} from '../../assets/styles'

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        backgroundColor: COLORS.grey2,
        borderRadius: 14,
        // flex: 1,
        paddingHorizontal: 18
    },
    textinput: {
        color: '#ADA4A5',
        fontFamily: 'Ambit-Regular',
        fontSize: 12,
        paddingHorizontal:10,
        paddingVertical:0,
        flex:1
    }
})

const Input = ({placeholder, icon, type, style={}}) => {
    return(
        <View style={[STYLES.row, STYLES.centersY, styles.wrapper, style]}>
            {icon ? icon : null}
            <TextInput
            placeholder={placeholder}
            style={styles.textinput}
            placeholderTextColor={COLORS.grey3}
            keyboardType={type ?? 'default'}
            />
        </View>
    )
}

export default Input