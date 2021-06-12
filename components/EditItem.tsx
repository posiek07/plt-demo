import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProductDataType } from '../types';

const EditItem = ({
    numberOfItems,
    product,
    addToBasket,
    deleteFromBasket,
}: {
    numberOfItems: number;
    product: ProductDataType;
    addToBasket: (product: ProductDataType) => void;
    deleteFromBasket: (productId: number) => void;
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigFont} onPress={() => addToBasket(product)}>
              +
            </Text>
            <Text style={styles.bigFont}>{numberOfItems}</Text>
            <Text style={styles.bigFont} onPress={() => deleteFromBasket(product.id)}>
                -
            </Text>
        </View>
    );
};

export default EditItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center'
    },
    bigFont: {
        fontSize: 30,
    },
});
