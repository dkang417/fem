import React from 'react';
import { render } from 'react-dom';
import  Pet from './pet';



class App extends React.Component {

    render() {
        return React.createElement("div", {}, [
            React.createElement('h1', {}, 'Adopt me!'),
            React.createElement(Pet, {
                name: 'luna', animal: 'dog', breed: 'havanese'
            }),
            React.createElement(Pet, {
                name: 'jack', animal: 'bird', breed: 'parrot'
            }),
            React.createElement(Pet, {
                name: 'david', animal: 'cat', breed: 'mixed'
            }),
        ])
    }
}    

render(React.createElement(App), document.getElementById('root'))   