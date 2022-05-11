import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, View} from 'react-native';
import {COLORS, TEXTS} from '../../assets/styles';

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: COLORS.white,
        borderColor: 'transparent',
    },
    dropDownContainerStyle: {
        borderColor: 'transparent',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        zIndex: 1000,
        elevation: 3,
    },
    selectedItemContainerStyle: {
        backgroundColor: COLORS.lightblue,
    },
    listItemContainerStyle: {
        height: 29,
    },
    labelStyle: {
        color: COLORS.grey3,
        ...TEXTS.poppinsRegular,
        fontSize: 12,
    },
});

const Dropdown = ({
    options,
    value,
    setValue,
    isDefaultOpen,
    style = {},
    ...rest
}) => {
    const [open, setOpen] = useState(false);
    return (
        <DropDownPicker
            placeholder=""
            style={[styles.containerStyle, style]}
            open={open || isDefaultOpen}
            value={value}
            items={options}
            setOpen={setOpen}
            setValue={setValue}
            dropDownContainerStyle={[styles.dropDownContainerStyle]}
            selectedItemContainerStyle={styles.selectedItemContainerStyle}
            listItemContainerStyle={styles.listItemContainerStyle}
            listItemLabelStyle={styles.labelStyle}
            labelStyle={styles.labelStyle}
            showTickIcon={false}
            showArrowIcon={false}
            {...rest}
        />
    );
};

export default Dropdown;
