/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import MainCategoriesScreen from '../screens/MainCategoriesScreen';
import BasketScreen from '../screens/BasketScreen';
import { BottomTabParamList, ProductsParamList, BasketParamList } from '../types';
import SubCategoriesScreen from '../screens/SubCategoriesScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductsScreen from '../screens/ProductsScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Products">
      <BottomTab.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-menu" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Basket"
        component={BasketNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-basket" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ProductsStack = createStackNavigator<ProductsParamList>();

function ProductsNavigator() {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="MainCategoriesScreen"
        component={MainCategoriesScreen}
        options={{ headerTitle: 'Categories Menu' }}
      />
      <ProductsStack.Screen
        name="SubCategoriesScreen"
        component={SubCategoriesScreen}
        options={{ headerTitle: 'Sub Categories Menu' }}
      />
      <ProductsStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerTitle: 'Product Screen' }}
      />
      <ProductsStack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ headerTitle: 'Products Screen' }}
      />
    </ProductsStack.Navigator>
  );
}

const BasketStack = createStackNavigator<BasketParamList>();

function BasketNavigator() {
  return (
    <BasketStack.Navigator>
      <BasketStack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{ headerTitle: 'Check-out' }}
      />
    </BasketStack.Navigator>
  );
}
