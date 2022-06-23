import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image , FlatList, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import MainText from '../components/MainText/MainText';
import { FoodDisplayStyle, LoadingStyles } from '../Styles/FoodStyles';
import {AntDesign} from '@expo/vector-icons';
import { colors } from '../theme/colors';
import FoodItem from '../components/FoodItem/FoodItem';

const FoodDisplay = ({navigation}) => {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(res => res.json()).then(data => setCategories(data?.categories));
  },[]);

  const CateGoryHandler = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(res => res.json()).then(data => setFoods(data?.meals));
  }

  const CateGoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => CateGoryHandler(item.strCategory) } style={FoodDisplayStyle.categoryView}>
      <MainText preset='h5'>{item.strCategory}</MainText>
      <Image style={FoodDisplayStyle.categoryImg} source={{uri: item.strCategoryThumb}} />
    </TouchableOpacity>
    );

  return (
    <SafeAreaView>
      <Header title='Food Gallery' jc='center'/>
      <View style={FoodDisplayStyle.categoryContainer}>
        <MainText preset='h4' style={FoodDisplayStyle.categoryTitle}>Find food by category</MainText>
          {
            categories.length > 0 ? <FlatList
            data={categories}
            renderItem={CateGoryItem}
            keyExtractor={item => item.idCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> :  <SafeAreaView style={LoadingStyles.LodingContainer}>
          <ActivityIndicator color="blue" size="large" />
         </SafeAreaView>
          }
      </View>
        <FoodItem foods={foods} navigation={navigation} />
      
    </SafeAreaView>
  ); 
}

export default FoodDisplay;

