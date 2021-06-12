import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EditItem from '../components/EditItem';
import { addToBasket, deleteFromBasket, MyBasket } from '../store/store';


export default function BasketScreen() {
  const store = MyBasket.useState(s => s);
  const sum = store.sum
  const basketItems = store.basket
  const basketItemsSetArray = store.basketItems

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        {!!basketItemsSetArray &&
          basketItemsSetArray.map((product, index) => {
            const numberOfItems = basketItems.filter((obj) => obj.id === product.id).length;
            return (
              <View key={index} style={styles.productContainer}>
                <Text style={styles.title}>{product.name}</Text>
                <EditItem product={product} numberOfItems={numberOfItems} addToBasket={addToBasket}
                  deleteFromBasket={deleteFromBasket}
                />
              </View>
            );
          })}
      </View>
      <Text style={styles.sum}>
        SUM: {sum.toFixed(2)}
        {'\u00A3'}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    width: '80%',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  sum: {
    fontSize: 50,
    fontFamily: 'space-mono',
  },
});
