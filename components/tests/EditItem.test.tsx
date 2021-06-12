import React from 'react';
import renderer from 'react-test-renderer';
import EditItem from '../EditItem';
import { addToBasket, deleteFromBasket } from '../../store/store';


const numberOfItems = 5;

test('renders correctly', () => {
    const tree = renderer
        .create(
            <EditItem
                numberOfItems={numberOfItems}
                product={{ id: 3, colour: 'Blue', img: 'link', name: 'blue dress', price: 3 }}
                addToBasket={addToBasket}
                deleteFromBasket={deleteFromBasket}

            />,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
