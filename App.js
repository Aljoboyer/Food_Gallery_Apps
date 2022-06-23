import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodDisplay from './src/screen/FoodDisplay';
import FoodDetails from './src/screen/FoodDetails';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoadingStyles } from './src/Styles/FoodStyles';

const Stack = createNativeStackNavigator();

export default function App() {
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
      <Stack.Navigator initialRouteName='FoodDisplay' >
        <Stack.Screen  options={{headerShown: false}}  name='FoodDisplay' component={FoodDisplay}/>
          <Stack.Screen  options={{headerShown: false}}  name='FoodDetails' component={FoodDetails}/>
      </Stack.Navigator> 
  </NavigationContainer>
  );
}

