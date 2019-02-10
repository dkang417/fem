const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "luna"),
        React.createElement("h2", {}, "dog"),
        React.createElement("h2", {}, "cat")
    ]);
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, 'Adopt me!'),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    ])
}     

ReactDOM.render(React.createElement(App), document.getElementById('root'))   