import React from 'react';
import { Component } from 'react';
import "./Form.css"


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    changeHandlerStance = (event) => {
        this.setState({ stance: event.target.value})
    }
    changeHandlerName = (event) => {
        this.setState({ name: event.target.value })
    }
    changeHandlerObstacle = (event) => {
        this.setState({ obstacle: event.target.value })
    }
    changeHandlerTutorial = (event) => {
        this.setState({ tutorial: event.target.value })
    }

    render() {
        return (
          <div>
            <form>
             <label for="stance">Choose your stance:</label>
             <select name="stances" id="stances" value={this.state.stance} onChange={event => this.changeHandlerStance(event)}>
                <option value="regular">Regular</option>
                <option value="switch">Switch</option>
             </select>
                    Name of Trick: <input type="text" value={this.state.name} onChange={event => this.changeHandlerName(event)} />
             <label for="obstacle">Choose your Obstacle:</label>
                    <select name="obstacle" id="obstacle" value={this.state.obstacle} onChange={event => this.changeHandlerObstacle(event)}>
                <option value="flatground">flatground</option>
                <option value="ledge">ledge</option>
                <option value="rail">rail</option>
                <option value="stairs">stairs</option>
                <option value="pool">pool</option>
            </select>
                    Link to Tutorial: <input type="text" value={this.state.tutorial} onChange={event => this.changeHandlerTutorial(event)} />
            <button onClick={event => {
                event.preventDefault()
                this.props.addTrick(this.state)
            }}>Submit</button>
            </form>
          </div>
        )
    }
}


export default Form;



// <form>
//     <label for="stance">Choose your stance:</label>
//     <select name="stances" id="stances">
//         <option value="volvo">Volvo</option>
//         <option value="saab">Saab</option>
//         <option value="opel">Opel</option>
//         <option value="audi">Audi</option>
//     </select>
// </form>