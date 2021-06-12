import React from 'react';
import renderer from 'react-test-renderer';
import BasketScreen from '../BasketScreen';
import { MyBasket } from '../../store/store';



jest.mock("../../store/store.ts")

const mockState = {
    basket: [
        {
            id: 1,
            colour: 'Black',
            name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
            price: 10,
            img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
        },
        {
            id: 1,
            colour: 'Black',
            name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
            price: 10,
            img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
        },
        {
            colour: "Stone",
            id: 2,
            img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
            name: "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
            price: 4,
        }
    ],
    sum: 20
}

MyBasket.useState = () => mockState

test('renders correctly', () => {
    const tree = renderer.create(<BasketScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
