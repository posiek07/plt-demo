import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainCategoryProps } from '../types';

const MainCategory: React.FC<MainCategoryProps> = ({ title, image, categories }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SubCategoriesScreen', {
          subCategories: categories,
        });
      }}
      style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardImageWrapper}>
        <Image style={styles.cardImage} source={{ uri: image }} />
      </View>
    </TouchableOpacity>
  );
};

export default MainCategory;

const styles = StyleSheet.create({
  card: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    justifyContent: 'space-between',
  },
  cardImageWrapper: {
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: '#cccccc',
  },
  cardImage: {
    flex: 1,
    backgroundColor: '#cccccc',
    height: 70,
    width: 100,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});
