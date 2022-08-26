import React, {Dispatch, SetStateAction} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {mainStyles as MS} from '../../assets/styles/mainStyles';
import {CustomModal as CM} from './CustomModalStyles';

import CustomButton from '../CustomButton/CustomButton';
import ModalInput from './ModalInput';

interface iTask {
  checked: boolean;
  id: string;
  title: string;
}

interface CMProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<iTask[]>>;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  activeOpacity?: number;
}

const CustomModal: React.FC<CMProps> = ({
  modalVisible,
  setModalVisible,
  setTodos,
  newTodo,
  setNewTodo,
}) => {
  const addNewTask = () => {
    if (newTodo !== '') {
      setTodos(prev => [
        ...prev,
        {title: newTodo, id: uuidv4(), checked: false},
      ]);
      setNewTodo(() => '');
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={CM.wrapper}>
            <TouchableWithoutFeedback>
              <View style={CM.contentWrapper}>
                <Text style={[MS.heading, MS.heading_Modal]}>Add new task</Text>
                <ModalInput
                  value={newTodo}
                  placeholder="Add your task here"
                  onChangeText={setNewTodo}
                />
                <CustomButton
                  text={'Submit'}
                  f={() => {
                    addNewTask();
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CustomModal;
