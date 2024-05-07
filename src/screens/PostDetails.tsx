import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PostDetails = ({ route }) => {
  const { postData } = route.params || {}; // Extract postData from navigation params

  if (!postData) {
    return ( // Render a message if no data is available
      <View style={styles.container}>
        <Text>No post data found.</Text>
      </View>
    );
  }

  const { imageUrl, title, description, videoUrl, linkUrl } = postData;
  console.log(postData, "hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={() => console.log('Video clicked')}>
        <Text style={styles.videoLink}>Watch Video</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Link clicked')}>
        <Text style={styles.link}>{linkUrl}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  videoLink: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'blue',
  },
  link: {
    fontSize: 18,
    marginVertical: 10,
    color: 'blue',
  },
});

export default PostDetails;
