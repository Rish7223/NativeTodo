import React from 'react';
import { FlatList, Text, StyleSheet, Pressable } from 'react-native';

const ListView = ({ taskList, handleDeleteTask }) => {
  return (
    <FlatList
      data={taskList}
      renderItem={(itemData) => (
        <Pressable
          style={styles.list}
          onPress={() => handleDeleteTask(itemData.item.value)}
        >
          <Text style={styles.text}>{itemData.item.value}</Text>
        </Pressable>
      )}
      style={styles.listContainer}
    />
  );
};

export default ListView;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 50,
    flexDirection: 'column',
  },

  list: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
    marginBottom: 20,
    elevation: 1,
  },

  text: {
    color: '#353535',
    fontSize: 16,
    fontWeight: '600',
  },
});
