import React from 'react';
import {Image, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Buttons from '../Buttons/Buttons';
import MainText from '../MainText/MainText';
import { MaterialCommunityIcons ,MaterialIcons } from '@expo/vector-icons'; 
import { FoodItemStyle } from '../../Styles/FoodStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const FoodItem = ({foods, navigation}) => {

const FoodItemRender = ({ item }) => (
    <View style={FoodItemStyle.foodItem}>
        <Image style={FoodItemStyle.foodImg} source={{uri: item.strMealThumb}} />

        <MainText preset='h5' style={FoodItemStyle.foodName}>{item.strMeal}</MainText>

        <Buttons onPress={() => navigation.navigate('FoodDetails', {foodId: item.idMeal})} title="View details" customStyles={FoodItemStyle.buttons}/>
    </View>
    );
      
  return (
       <View style={FoodItemStyle.FoodContainer}>
          {
            foods.length > 0 && <FlatList
            data={foods}
            renderItem={FoodItemRender}
            keyExtractor={item => item.index}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          /> 
          }
        </View>
  );
}

export default FoodItem;
// :  <SafeAreaView style={LoadingStyles.LodingContainer}>
//                  <ActivityIndicator color="blue" size="large" />
//                 </SafeAreaView>