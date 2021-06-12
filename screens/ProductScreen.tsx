import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Loading from '../components/Loading';
import { useFetch } from '../hooks/useFetch';
import { addToBasket } from '../store/store';
import { ProductDataType } from '../types';

const ProductScreen = ({ route }) => {
  const { id } = route.params;

  const {
    response,
    error,
    isLoading,
  }: { response: ProductDataType; error: { message: string } | undefined; isLoading: boolean } = useFetch(
    `https://my-json-server.typicode.com/benirvingplt/products/products/${id}`,
    {},
  );

  const product = response;

  if (isLoading) return <Loading />

  if (error) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{error.message}</Text></View>

  return (
    !!product && (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: product.img }} style={styles.image} />
        </View>
        <Text>{product.name}</Text>
        <Text>{product.colour}</Text>
        <Text>
          {product.price} {'\u00A3'}
        </Text>
        {/* @ts-ignore */}
        <Button onPress={() => addToBasket(product)} title="Add to Basket" />
      </View>
    )
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  imageWrapper: {
    height: 400,
  },
  image: {
    flex: 1,
    backgroundColor: '#cccccc',
    width: '100%',
    resizeMode: 'contain',
  },
});
