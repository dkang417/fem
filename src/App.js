import React from 'react';
import ReactDOM from 'react-dom';
import pf from 'petfinder-client';
import Results from './Results';
import Details from './Details';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';


const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

class App extends React.Component {

    constructor(props) {
        super(props);


        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleAnimalChange = this.handleAnimalChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);

        this.state = {
            location: "New York City, NY",
            animal: "",
            breed: "",
            breeds: [],
            handleAnimalChange: this.handleAnimalChange,
            handleBreedChange: this.handleBreedChange,
            handleLocationChange: this.handleLocationChange,
            getBreeds: this.getBreeds
        };
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    };
    handleAnimalChange(event) {
        this.setState({
            animal: event.target.value,
            breed: ""
        },
        this.getBreeds
        );
    };
    handleBreedChange(event) {
        this.setState({
            breed: event.target.value
        });
    }



    getBreeds() {
        if (this.state.animal) {
            petfinder.breed.list({ animal: this.state.animal })
                .then(data => {
                    if (
                        data.petfinder &&
                        data.petfinder.breeds &&
                        Array.isArray(data.petfinder.breeds.breed)
                    ) {
                        this.setState({
                            breeds: data.petfinder.breeds.breed
                        })
                    } else {
                        this.setState({ breeds: [] });
                    }
                })
        } else {
            this.setState({ breeds: [] })
        }
    };

    render() {

        return (
            <div>
                <header> 
                    <Link to="/">  Adopt me </Link>
                    <Link to="/search-params">
                        <span aria-label="search" role="img">
                        🔍
                        </span>
                    </Link>
                </header>  
                <Router>
                    <Results path="/"/>
                    <Details path="/details/:id" />
                    <SearchParams path="/search-params" />
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
