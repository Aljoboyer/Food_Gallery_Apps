import {TouchableOpacity,  View, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MainText from '../MainText/MainText';
import { colors } from '../../theme/colors';

const Header = ({backbtn, title = 'Food Gallery', jc}) => {
  const navigate = useNavigation()
  return (
    <View style={{marginTop: 1,padding: 5,flexDirection: 'row',alignItems:'center',justifyContent: jc,
      backgroundColor: colors.TextColor,height: 80,}}>
       {
         backbtn &&  (
          <TouchableOpacity onPress={() => navigate.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
         )
       }
        <MainText preset='h2' style={{color: 'white'}}> {title} </MainText>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    container: {

    }
})
