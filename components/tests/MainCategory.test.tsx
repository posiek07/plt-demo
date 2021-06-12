import React from 'react';
import renderer from 'react-test-renderer';
import MainCategory from '../MainCategory';
jest.mock('@react-navigation/native');

const navigation = [
    {
        name: 'NEW IN',
        img: 'https://cdn-media.prettylittlething.com/studio/mega-menu/desktop/12.11.20/newin.jpg',
        children: [
            {
                name: 'NEW IN',
                categories: ['View all', 'New in today', 'New in this week'],
            },
            {
                name: 'PLT RANGES',
                categories: ['New in plus', 'New in petite', 'New in tall'],
            },
        ],
    },
];
test('renders correctly', () => {
    const tree = renderer
        .create(
            <MainCategory
                title={navigation[0].name}
                image={navigation[0].img}
                categories={navigation[0].children}
            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
