import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, STYLES, TEXTS } from '../../assets/styles'
import {View, Text, Image, useWindowDimensions} from 'react-native'
import Input from '../../components/Inputs/Input'
import ICONS from '../../assets/icons'
import FilledButton from '../../components/Buttons/FilledButton'
import styles from './utils/styles'
import BackButton from '../../components/Utils/BackButton'
import { getGoBackFunction } from '../../utils/functions'
import InputIcon from '../../components/Inputs/InputIcon'

const Registration = ({navigation}) => {
    const {height} = useWindowDimensions()
    const goBack = getGoBackFunction(navigation)
    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
            <View style={[{marginTop:47, marginHorizontal:24,}, STYLES.row,STYLES.spaced]}>
                <BackButton onPress={goBack}/>
                <View style={[STYLES.centersXY, {marginTop:20}]}>
                    <Text style={[TEXTS.header, {fontSize:18}]}>Create an account</Text>
                    <Text style={[TEXTS.poppinsRegular, {color:COLORS.primary}]}>Hey there,</Text>
                </View>
                <BackButton transparent/>
            </View>
            <View style={{marginTop:13.39, marginHorizontal:30}}>
                <Input placeholder={"Name"}
                icon={<InputIcon icon={ICONS.profile} width={18} height={18}/>}
                />
                <Input placeholder={"Email"}
                style={STYLES.mt_16}
                icon={<InputIcon icon={ICONS.email} width={15} height={13.5}/>}
                />
                <Input placeholder={"Phone"}
                style={STYLES.mt_16}
                icon={<InputIcon icon={ICONS.phone} width={18} height={18}/>}
                />
                <Input placeholder={"Home Address"}
                style={STYLES.mt_16}
                icon={<InputIcon icon={ICONS.edit} width={18} height={18}/>}
                />
                <Input placeholder={"Home Type"}
                style={STYLES.mt_16}
                icon={<InputIcon icon={ICONS.edit} width={18} height={18}/>}
                />
                <Input placeholder={"Family Size"}
                style={STYLES.mt_16}
                icon={<InputIcon icon={ICONS.edit} width={18} height={18}/>}
                />
                <View style={[STYLES.row, STYLES.mt_16]}>
                    <Input style={{marginRight:17.5, flex:1}}
                    placeholder="Males"
                    type="numeric"
                    />
                    <Input style={{marginLeft:17.5, flex:1}}
                    placeholder="Females"
                    type="numeric"
                    />
                </View>
            </View>
            {/* <View style={{marginTop:80}}>
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
                    icon={<Image source={ICONS.profile}
                    style={{height:18, width:18}}
                    resizeMode="cover"
                    />
                }
                    placeholder="Meter ID"
                    />
                </View>
                <View style={{marginHorizontal:30, marginTop:((238/812) * height)}}>
                <FilledButton text={"Register"} fullWidth />
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
            </View> */}
        </SafeAreaView>
    )
}

export default Registration