import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const index = ({ item, onPress }) => {
  


    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {item.image_url? (
          <Image source={{uri: item.image_url }} style={styles.image} />
        ) : (
          <View style={styles.image}/>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 70,
    marginRight: 10,
    borderRadius: 8, 
  },
  textContainer: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  description: {
    fontSize: 14,
  },
});

export default index;
