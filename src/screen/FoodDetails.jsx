import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '../components/Buttons/Buttons';
import Header from '../components/Header/Header';
import MainText from '../components/MainText/MainText';
import { FoodDetailsStyle } from '../Styles/FoodStyles';

const FoodDetails = ({route}) => {
  const {foodId} = route.params;
  const [details, setDetails] = useState({});
  console.log('datas', details)
  console.log('idas', foodId)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`).then(res => res.json()).then(data => setDetails(data?.meals[0]));
  },[foodId]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header title='Food Details' backbtn={true} jc='flex-start'/>
        {
          details.strMeal && <><Image style={FoodDetailsStyle.foodImg} source={{uri: details.strMealThumb}} />
          <View style={FoodDetailsStyle.NameView}>
              <MainText preset='h4' style={FoodDetailsStyle.FoodName}>{details.strMeal}</MainText>
              <Buttons title="Buy Now" customStyles={FoodDetailsStyle.buttons} />
          </View>
          <View style={FoodDetailsStyle.InfoView}>
            <MainText preset='h4' style={FoodDetailsStyle.infoTitle}>Instructions</MainText>
            <MainText preset='p' style={FoodDetailsStyle.infoText}>{details.strInstructions}</MainText>
          </View></>
        }
      </ScrollView> 
    </SafeAreaView>
  );
}

export default FoodDetails;
