import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import * as vectorIcons from '@expo/vector-icons';

const InputModal = ({
  handelAddTask,
  taskText,
  taskInputHandler,
  isVisible,
  setIsVisible,
  error,
}) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.actionContainer}>
        <Pressable
          style={styles.close}
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <vectorIcons.MaterialIcons name="close" color="black" size={30} />
        </Pressable>
        <Text style={styles.heading}>Add Task</Text>
        <TextInput
          placeholder="Enter Task ..."
          style={styles.inputComponent}
          onChangeText={taskInputHandler}
          value={taskText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handelAddTask();
          }}
        >
          <vectorIcons.MaterialIcons name="add" size={20} color="white" />
        </TouchableOpacity>

        <Text style={styles.error}>{error}</Text>
      </View>
    </Modal>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
  },

  close: {
    position: 'absolute',
    top: 20,
    right: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'black',
    width: '100%',
    marginTop: 20,
  },
  inputComponent: {
    borderWidth: 1,
    borderColor: '#353535',
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 1,
    height: 60,
    width: '100%',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  error: {
    fontSize: 14,
    color: '#555555',
    fontStyle: 'italic',
    textAlign: 'right',
    marginTop: 5,
  },
});
