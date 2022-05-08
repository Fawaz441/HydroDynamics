import BuyWater from './BuyWater';
import WelcomeScreen from './WelcomeScreen';
import {ScrollView} from 'react-native'
import React from 'react'
import MonitorConsumption from './MonitorConsumption';
import OtherFeatures from './OtherFeatures';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Onboarding = ({navigation}) => {
    const scrollRef = React.useRef()
    const {width} = useWindowDimensions()
    const scrollTo = (page) => scrollRef?.current?.scrollTo({x:width*page,y:0}) 
    const goToPreRegistration = () => navigation.navigate("PreRegistration")
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        ref={scrollRef}
        >
            <WelcomeScreen next={scrollTo}/>
            <BuyWater next={scrollTo}/>
            <MonitorConsumption next={scrollTo}/>
            <OtherFeatures next={goToPreRegistration}/>
        </ScrollView>
    )
}

export default Onboarding
