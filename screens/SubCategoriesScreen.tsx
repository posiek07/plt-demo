import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SubCategoriesScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { subCategories } = route.params;
  return (
    <View style={styles.container}>
      {subCategories.map((subCategory: { name: string; categories: string[] }, index: number) => (
        <View key={index * Math.random()}>
          <Text style={styles.subCategorieTitleText}>{subCategory.name}</Text>
          {subCategory.categories.map((text, index) => (
            <TouchableOpacity
              key={index * Math.random()}
              style={styles.subCategoryBlockContainer}
              onPress={() =>
                navigation.navigate('ProductsScreen', {
                  subCategory: text,
                })
              }>
              <View style={styles.categoryTextWrapper}>
                <Text style={styles.categoryText}>{text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default SubCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  subCategoryBlockContainer: {
    justifyContent: 'flex-start',
  },
  subCategorieTitleText: {
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 20,
  },
  categoryTextWrapper: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#ccc',
  },
  categoryText: {
    fontStyle: 'italic',
  },
});
