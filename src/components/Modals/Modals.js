import React from "react";
import { Modal, View } from "react-native";
import { ModalStyle } from "../../Styles/FoodStyles";
import Buttons from "../Buttons/Buttons";
import MainText from "../MainText/MainText";

const Modals = ({modalVisible, setModalVisible, price}) => {
   
  return (
    <View style={ModalStyle.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalStyle.centeredView}>
          <View style={ModalStyle.modalView}>
            <MainText preset="h4" style={ModalStyle.modalText}>Quantity:   1Meal</MainText>
            <MainText preset="h4" style={ModalStyle.modalText}>Price:   ${price}</MainText>
            <Buttons customStyles={ModalStyle.buttons} title='Confirm' onPress={() => setModalVisible(!modalVisible)}/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;

