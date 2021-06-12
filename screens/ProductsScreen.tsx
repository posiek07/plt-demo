import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';
import { useFetch } from '../hooks/useFetch';
import { ProductDataType, ProductsDataType } from '../types';

const ProductsScreen = ({ navigation, route }) => {
  const { subCategory } = route.params;

  // Here I could pass a param above for fetching the right products from API
  const {
    response,
    error,
    isLoading,
  }: { response: ProductsDataType; error: Object | undefined; isLoading: boolean } = useFetch(
    'https://my-json-server.typicode.com/benirvingplt/products/products',
    {},
  );

  const productList = response;

  const renderItem = ({ item }: { item: ProductDataType }) => (
    <ProductCard
      id={item.id}
      colour={item.colour}
      img={item.img}
      name={item.name}
      price={item.price}
    />
  );

  if (isLoading) return <Loading />


  return (
    <SafeAreaView style={styles.container}>
      {!!response && (
        <FlatList
          data={productList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductsScreen;
