import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe ('messages-component', () => {
    it('render without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('render the UI as expected', ()=>{
        const tree = renderer
        .create(<Card title='First card' content='lorem ipsum'/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('render the UI as expected', ()=>{
        const tree = renderer
        .create(<Card title='Second card' content='lorem ipsum'/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
