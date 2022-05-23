import React from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';
import Container from '../../components/Utils/Container';
import TopBar from '../../components/Utils/TopBar';
import {BackButton, NotificationButton} from '../../components/Buttons';
import {getGoBackFunction} from '../../utils/functions';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import IMAGES from '../../assets/images';
import Icon from '../../components/Icon';

const styles = StyleSheet.create({
    imageContainer: {
        ...STYLES.centersXY,
        zIndex: 2,
    },
    image: {
        width: 254,
        height: 254,
        borderRadius: 127,
        borderWidth: 3,
        borderColor: 'rgba(178, 178, 178, 0.3)',
        backgroundColor: '#C4C4C4',
    },
    userDetails: {
        width: 295,
        borderRadius: 32,
        alignSelf: 'center',
        backgroundColor: COLORS.offwhite,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        transform: [{translateY: -74}],
        ...STYLES.centersXY,
        paddingTop: 87,
        paddingBottom: 27,
    },
    faint: {
        color: '#223263',
        opacity: 0.5,
        ...TEXTS.poppinsRegular,
        fontSize: 12,
    },
});
const url =
    'https://api.honest.properties/dev/api/v1/user/profileImage?file_name=file.jpeg';

const Profile = ({navigation}) => {
    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>Profile</Text>
                <NotificationButton />
            </TopBar>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: url}}
                        onLoad={e => console.log(e)}
                    />
                </View>
                <View style={styles.userDetails}>
                    <Icon icon={IMAGES.picture} width={40} height={40} />
                    <Text style={[TEXTS.header, STYLES.mt_8]}>
                        Abubakar umar
                    </Text>
                    <Text style={[styles.faint, STYLES.mt_8]}>09031754067</Text>
                    <Text style={[styles.faint, STYLES.mt_14]}>
                        Shereefadamu001@gmail.com
                    </Text>
                    <Text style={[styles.faint, STYLES.mt_14]}>
                        meter Number
                    </Text>
                    <Text style={[styles.faint, STYLES.mt_14]}>
                        home address
                    </Text>
                    <Text style={[styles.faint, STYLES.mt_14]}>
                        home address
                    </Text>
                </View>
            </ScrollView>
        </Container>
    );
};

export default Profile;
