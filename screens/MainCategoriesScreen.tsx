import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { useFetch } from '../hooks/useFetch';
import MainCategory from '../components/MainCategory';
import Loading from '../components/Loading';
import { FetchedCategoryData } from '../types';

export default function MainCategoriesScreen() {
  const {
    response,
    isLoading,
  }: { response: FetchedCategoryData | []; error: Object | undefined; isLoading: boolean } =
    useFetch('https://my-json-server.typicode.com/benirvingplt/products/menu', {});

  if (isLoading) return <Loading />

  return (
    <View style={styles.container}>
      {response &&
        response.map((category) => (
          <MainCategory
            key={category.name}
            title={category.name}
            image={category.img}
            categories={category.children}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
  },
});
