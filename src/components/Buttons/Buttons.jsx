import React from 'react';
import { View, StyleSheet , TouchableOpacity} from 'react-native';
import { colors } from '../../theme/colors';
import MainText from '../MainText/MainText';

const Buttons = ({title, onPress, customStyles, customStyles2 }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
        <MainText preset='h5' style={[styles.title, customStyles2]}>{title}</MainText>
    </TouchableOpacity>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  button: {
    width: 165,
    height: 45,
    backgroundColor: colors.BgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.TextColor,
    fontWeight: 'bold'
  }
});