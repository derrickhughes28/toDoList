class App extends React.Component {
    state =  {
        name: "Derrick",
        age: 24
    }
    onChange = (e) => {
        this.setState({ 
            name: e.target.value
        })
    }
    onSubmit =(e) =>{
        e.preventDefault();
        console.log('form submitted', this.state.name);
    }

    render() {
        return (
            <div className="properClassName">
                 <h1>My name is: {this.state.name}</h1>
                 <form onSubmit={this.onSubmit}>
                     <input type="text" onChange={this.onChange}/>
                     <button>Submit</button>
                 </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))