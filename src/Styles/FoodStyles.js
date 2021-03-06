import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const FoodDisplayStyle = StyleSheet.create({
    categoryView:{
      marginHorizontal: 10,
      marginVertical: 10,
      borderWidth: 1.5,
      borderColor: colors.BgColor,
      borderRadius: 35,
      paddingHorizontal: 15,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 160
    },
    categoryContainer:{
      marginVertical: 10
    },
    categoryTitle:{
        paddingLeft: 15,
        marginVertical: 10,
        color: colors.BgColor,
        fontWeight: 'bold'
    },
    categoryImg:{
      width: 30,
      height: 30,
      borderRadius: 50
    }
  });

export const FoodItemStyle = StyleSheet.create({
  FoodContainer: {
    marginHorizontal: 50,
    paddingBottom: 50
  },
  foodImg:{
    width: 250,
    height: 250,
    borderRadius: 50
  },
  foodItem:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  foodName:{
    marginVertical: 15,
    fontWeight: 'bold',
    color: colors.BgColor
  },
  buttons:{
    borderRadius: 15
  }
});

export const FoodDetailsStyle = StyleSheet.create({
  foodImg: {
    width: 350,
    height: 350,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20
  },
  NameView:{
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  FoodName:{
    color: colors.BgColor,
    fontWeight: 'bold'
  },
  buttons:{
    width: 90,
    borderRadius: 10
  },
  buttons2:{
    fontSize: 17
  },
  InfoView:{
    paddingHorizontal: 30
  },
  infoText:{
    color: 'gray',
    paddingTop: 15,
    paddingBottom: 10
  },
  infoTitle:{
    fontWeight: 'bold',
    color: colors.HeadLineColor
  }
});

export const LoadingStyles = StyleSheet.create({
  LodingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.HeadLineColor
  }
});

export const ModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
    width: 350,
    justifyContent: 'center'
  },
  buttons: {
    borderRadius: 10,
    elevation: 2,
    marginVertical: 20
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
