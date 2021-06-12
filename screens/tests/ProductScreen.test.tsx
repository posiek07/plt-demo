import React from 'react';
import renderer from 'react-test-renderer';
import ProductScreen from '../ProductScreen';
import * as hooks from '../../hooks/useFetch'

const route = {
    params: {
        id: "1",
    },
};

test('renders correctly', () => {
    jest.spyOn(hooks, 'useFetch').mockImplementation(() => ({
        response: {
            id: 1,
            colour: 'Black',
            name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
            price: 10,
            img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
        },
        error: {},
        isLoading: false,
    }))
    const tree = renderer.create(<ProductScreen route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
});
