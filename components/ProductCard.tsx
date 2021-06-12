import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ProductDataType } from '../types';

const ProductCard: React.FC<ProductDataType> = ({ id, colour, price, img, name }) => {
  const navigation = useNavigation();
  return (
    // @ts-ignore
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductScreen', {
          id: id,
        })
      }>
      <View style={styles.cardImageWrapper}>
        <Image source={{ uri: img }} style={styles.cardImage} />
      </View>
      <Text>{name}</Text>
      <Text>{colour}</Text>
      <Text>
        {price} {'\u00A3'}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#cccccc',
    justifyContent: 'center',
  },
  cardImageWrapper: {
    height: 200,
  },
  cardImage: {
    flex: 1,
    backgroundColor: '#cccccc',
    width: '100%',
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});
