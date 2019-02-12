import React from 'react';
import { render } from 'react-dom';
import  Pet from './pet';
import pf from 'petfinder-client';


const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

class App extends React.Component {

    componentDidMount() {
        const promise = petfinder.breed.list({ animal: "dog" });
        promise.then(console.log, console.error); 
    }

    render() {
        return (
            <div>
                <h1>Adopt me!</h1>
                <Pet name="luna" animal="dog" breed="havanese" />
                <Pet name="jack" animal="bird" breed="parrot" />
                <Pet name="david" animal="cat" breed="mixed" />
            </div>
        );
    
        // return React.createElement("div", {}, [
        //     React.createElement('h1', {}, 'Adopt me!'),
        //     React.createElement(Pet, {
        //         name: 'luna', animal: 'dog', breed: 'havanese'
        //     }),
        //     React.createElement(Pet, {
        //         name: 'jack', animal: 'bird', breed: 'parrot'
        //     }),
        //     React.createElement(Pet, {
        //         name: 'david', animal: 'cat', breed: 'mixed'
        //     }),
        // ])
    }
}    

render(<App />, document.getElementById('root'));
 