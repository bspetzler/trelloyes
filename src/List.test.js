import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe ('messages-component', () => {
    it('render without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('render the UI as expected', ()=>{
        const tree = renderer
        .create(<List header='Third list' cards=
            [{ id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' },
            { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
            { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
            { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
            { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
            { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
            { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
            { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
            { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
            { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
            { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }]
          />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

})
