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
        padding:10,
    }
})

const Input = ({placeholder, icon}) => {
    return(
        <View style={[STYLES.row, STYLES.centersY, styles.wrapper]}>
            {icon ? icon : null}
            <TextInput
            placeholder={placeholder}
            style={styles.textinput}
            placeholderTextColor={COLORS.grey3}
            />
        </View>
    )
}

export default Input