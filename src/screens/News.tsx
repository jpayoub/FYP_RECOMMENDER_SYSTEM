import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/slices/userSlice'; 
import CustomItem from '../components/atoms/CustomItem';
import { useNavigation } from '@react-navigation/native';

const News = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.user.posts);
  const loadingPosts = useSelector((state) => state.user.loadingPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);


  const handleLoadMore = () => {
    if (hasMorePosts && !loadingPosts && currentPage <= 11) {
      setCurrentPage(currentPage + 1);
      dispatch(fetchPosts({ page: currentPage + 1 }));
      console.log("loadmore is running")
    }
  };
  const handleItemPress = (item) => {
      if(item){
        console.log(item)
        navigation.navigate('PostDetails', { postData: item }); // Navigate with data
      } else {
        console.error('////////////////////////////////////////');
      }

  };

  const renderItem = ({ item }) => (
    <CustomItem item={item} onPress={()=>handleItemPress(item)} />
  );

  const renderEmptyList = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loadingPosts ? (
        <Text>Loading posts...</Text>
      ) : (
        <Text>No posts found.</Text>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id} 
        ListEmptyComponent={renderEmptyList} 
        onEndReached={handleLoadMore} 
        onEndReachedThreshold={0.1} 
        ListFooterComponent={() => loadingPosts && <Text>Loading more posts...</Text>} 
      />
    </View>
  );
};

export default News;
