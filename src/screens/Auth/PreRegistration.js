import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, STYLES, TEXTS } from '../../assets/styles'
import {View, Text, Image, useWindowDimensions} from 'react-native'
import Input from '../../components/Inputs/Input'
import ICONS from '../../assets/icons'
import FilledButton from '../../components/Buttons/FilledButton'
import styles from './utils/styles'
import { getNavigateFunction } from '../../utils/functions'
import { SCREENS } from '../../navigation/AppWrapper'
import InputIcon from '../../components/Inputs/InputIcon'

const PreRegistration = ({navigation}) => {
    const {height} = useWindowDimensions()
    const goToRegistration = getNavigateFunction(navigation, SCREENS.registration)
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
            <View style={{marginTop:80}}>
                <Text style={[TEXTS.poppinsRegular, STYLES.centerText, {color: COLORS.primary}]}>
                    Hey there,
                </Text>
                <Text style={[TEXTS.header2, STYLES.centerText, {marginTop:5.13}]}>
                    Create an Account
                </Text>
                <View style={{marginTop:14.52, ...STYLES.centersXY}}>
                    <Image style={{width:100, height:100}}
                    resizeMode="cover"
                    source={require('../../assets/images/logo.png')}
                    />
                </View>
                <View style={{marginTop:87, marginHorizontal: 30}}>
                    <Input
                    icon={
                    <InputIcon
                        icon={ICONS.profile}
                        height={18}
                        width={18}
                    />}
                    placeholder="Meter ID"
                    />
                </View>
                <View style={{marginHorizontal:30, marginTop:((238/812) * height)}}>
                <FilledButton text={"Register"} fullWidth action={goToRegistration} />
                <View style={[STYLES.row,STYLES.centersY, {marginHorizontal:30, marginTop:20 }]}>
                    <View style={styles.line}/>
                    <Text style={styles.orText}>Or</Text>
                    <View style={styles.line}/>
                </View>
                <View style={[STYLES.mt_24, STYLES.row, STYLES.centersX]}>
                    <Text style={styles.belowText}>Already have an account?</Text>
                    <Text style={[styles.belowText, {color:COLORS.primary}]}> Login</Text>
                </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PreRegistration