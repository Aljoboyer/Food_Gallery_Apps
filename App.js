import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodDisplay from './src/screen/FoodDisplay';
import FoodDetails from './src/screen/FoodDetails';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoadingStyles } from './src/Styles/FoodStyles';
import { useEffect, useState } from 'react';
import MainText from './src/components/MainText/MainText';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  const [loaded] = useFonts({
    'RobotoSlab-Regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'RobotoSlab-Bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
  });

  if(!loaded){
    return  (
      <SafeAreaView style={LoadingStyles.LodingContainer}>
        <ActivityIndicator color="blue" size="large" />
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      {
        loading ? <View style={LoadingStyles.loadingView}><MainText preset='h2' style={{color: 'orange'}}>Welcome To</MainText>
        <MainText preset='h2' style={{color: 'orange'}}>FOOD GALLERY</MainText>
        </View> :     <Stack.Navigator initialRouteName='FoodDisplay' >
        <Stack.Screen  options={{headerShown: false}}  name='FoodDisplay' component={FoodDisplay}/>
        <Stack.Screen  options={{headerShown: false}}  name='FoodDetails' component={FoodDetails}/>
      </Stack.Navigator> 
      }
  </NavigationContainer>
  );
}

