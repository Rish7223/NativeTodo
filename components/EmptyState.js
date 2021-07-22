import React from 'react';
import { Text, View, Image } from 'react-native';

const EmptyState = () => {
  return (
    <View
      style={{ alignItems: 'center', justifyContent: 'center', height: '75%' }}
    >
      <Image
        source={require('../assets/Images/page.png')}
        style={{ height: 250, width: 180, opacity: 0.7 }}
      />
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        You have not created any task yet
      </Text>
    </View>
  );
};

export default EmptyState;
