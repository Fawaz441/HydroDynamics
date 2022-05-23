import BuyWater from './BuyWater';
import WelcomeScreen from './WelcomeScreen';
import {ScrollView} from 'react-native';
import React from 'react';
import MonitorConsumption from './MonitorConsumption';
import OtherFeatures from './OtherFeatures';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {getNavigateFunction, goToTablessScreen} from '../../utils/functions';
import {SCREENS} from '../../navigation/screens';

const Onboarding = ({navigation}) => {
    const scrollRef = React.useRef();
    const {width} = useWindowDimensions();
    const scrollTo = page =>
        scrollRef?.current?.scrollTo({x: width * page, y: 0});
    const goToPreRegistration = getNavigateFunction(
        navigation,
        SCREENS.preregistration,
    );
    const reportLeakage = getNavigateFunction(
        navigation,
        SCREENS.unauthenticatedreportleakage,
    );
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={16}
            ref={scrollRef}>
            <WelcomeScreen next={scrollTo} reportLeakage={reportLeakage} />
            <BuyWater next={scrollTo} />
            <MonitorConsumption next={scrollTo} />
            <OtherFeatures next={goToPreRegistration} />
        </ScrollView>
    );
};

export default Onboarding;
