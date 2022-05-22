import {Dimensions} from 'react-native';
import ICONS from '../assets/icons';
import IMAGES from '../assets/images';

export const {width, height} = Dimensions.get('window');
export const BOTTOM_TAB_HEIGHT = 80;

export const paymentOptions = [
    {type: 'Credit / Debit Card', icon: ICONS.card},
    {type: 'Bank Transfer', icon: ICONS.house},
    {type: 'Amazon Pay', icon: IMAGES.amazon_pay},
    {type: 'Google wallet', icon: IMAGES.google_wallet},
    {type: 'Paypal', icon: IMAGES.paypal},
    {type: 'Bitcoin', icon: IMAGES.bitcoin},
];
