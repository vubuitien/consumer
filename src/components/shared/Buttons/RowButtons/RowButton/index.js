import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import styles from './styles';

const RowButton = ({ onPress, bgColor, children }) => {
    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor={'transparent'} onPress={onPress}>
            <View style={[styles.buttonContainer, { backgroundColor: bgColor }]}>
                {children}
            </View>
        </TouchableHighlight>
    );
};

export default RowButton;
