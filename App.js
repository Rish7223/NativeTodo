import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Keyboard, Pressable } from 'react-native';

import EmptyState from './components/EmptyState';
import InputModal from './components/InputModal';
import ListView from './components/ListView';
import * as vectorIcons from '@expo/vector-icons';

const isPresent = (value, list) => {
  const newList = list.filter(
    (data) => data.value.toLowerCase() === value.toLowerCase()
  );
  if (newList.length > 0) {
    return true;
  } else {
    return false;
  }
};

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const taskInputHandler = (text) => {
    setTaskText(text);
  };

  const handelAddTask = () => {
    if (taskText !== '' && !isPresent(taskText, taskList)) {
      setTaskList([{ key: taskText, value: taskText }, ...taskList]);
      setError('Task added successfully.');
      Keyboard.dismiss();
      setTaskText('');
      setIsVisible(false);
    } else {
      setError('Empty or similar task string error!!!');
    }
  };

  const handleDeleteTask = (text) => {
    const newList = taskList.filter((data) => data.value !== text);
    setTaskList(newList);
  };

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>NativeTodo</Text>
      <Text style={styles.para}>A task management app</Text>
      <InputModal
        handelAddTask={handelAddTask}
        taskInputHandler={taskInputHandler}
        taskText={taskText}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        error={error}
      />
      {taskList.length !== 0 ? (
        <ListView taskList={taskList} handleDeleteTask={handleDeleteTask} />
      ) : (
        <EmptyState />
      )}

      <View style={{ position: 'absolute', bottom: 10, left: '50%' }}>
        <Pressable style={styles.add} onPress={() => setIsVisible(true)}>
          <vectorIcons.MaterialIcons name="add" size={30} color="white" />
        </Pressable>
      </View>

      {/* {error !== '' && <Text style={styles.error}>{error}</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 80,
    paddingBottom: 10,
    height: '100%',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  para: {
    color: '#353535aa',
    fontSize: 16,
  },

  add: {
    height: 60,
    width: 60,
    backgroundColor: '#353535',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 10,
    elevation: 5,
  },

  error: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: '#eeeeee77',
    color: 'black',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
