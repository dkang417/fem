import React from 'react';
import { render } from 'react-dom';
import  Pet from './pet';
import pf from 'petfinder-client';


const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        };
    }

    componentDidMount() {
        petfinder.pet.find({ output: 'full', location: 'new york city, NY' })
            .then(data => {
                let pets;
                if (data.petfinder.pets && data.petfinder.pets.pet) {
                    if (Array.isArray(data.petfinder.pets.pet)) {
                        pets = data.petfinder.pets.pet
                    } else {
                        pets = [data.petfinder.pets.pet];
                    }
                } else {
                    pets = []
                }

                this.setState({
                    pets: pets
                });
                
            }); 
    }

    render() {
        return (
            <div>
                <h1>Adopt me!</h1>
                <div>
                    {this.state.pets.map(pet => {
                        let breed;

                        if (Array.isArray(pet.breeds.breed)) {
                            breed = pet.breeds.breed.join(', ');
                        } else {
                            breed = pet.breeds.breed;
                        }
                        return <Pet key={pet.id} animal={pet.animal} name={pet.name} breed={breed} />;
                    })}
                </div>
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
