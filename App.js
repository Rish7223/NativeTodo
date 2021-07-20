import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState('');

  const taskInputHandler = (text) => {
    setTaskText(text);
  };

  const handelAddTask = () => {
    if (taskText !== '') {
      setTaskList([taskText, ...taskList]);
      setError('Task added successfully.');
      Keyboard.dismiss();
      setTaskText('');
    } else {
      setError('Empty task string error!!!');
    }
  };

  const handleDeleteTask = (text) => {
    const newList = taskList.filter((data) => data !== text);
    setTaskList(newList);
    setError('Task Deleted successfully.');
  };

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <TextInput
          placeholder="Enter Task ..."
          style={styles.inputComponent}
          onChangeText={taskInputHandler}
          value={taskText}
        />
        <Pressable style={styles.button} onPress={handelAddTask}>
          {/* <Text style={styles.text}>Add</Text> */}
          <MaterialIcons name="add" size={20} color="white" />
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        {taskList.length !== 0 ? (
          taskList.map((textValue) => (
            <Pressable
              key={textValue}
              style={styles.list}
              onPress={() => handleDeleteTask(textValue)}
            >
              <Text>{textValue}</Text>
            </Pressable>
          ))
        ) : (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('./assets/Images/page.png')}
              style={{ height: 250, width: 180, opacity: 0.7 }}
            />
            <Text style={{ marginTop: 10, fontSize: 16 }}>
              You have not created any task yet
            </Text>
          </View>
        )}
      </View>

      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    paddingBottom: 10,
    height: '100%',
  },

  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  inputComponent: {
    borderBottomWidth: 1,
    borderColor: '#353535',
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 1,
    height: '100%',
    width: '70%',
  },

  listContainer: {
    marginTop: 50,
    flexDirection: 'column',
  },

  list: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#35353577',
    marginBottom: 10,
  },

  error: {
    position: 'absolute',
    bottom: 10,
    right: 5,
    backgroundColor: '#eeeeee',
    color: 'black',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
