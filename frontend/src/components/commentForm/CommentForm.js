import React, { Component } from 'react';

//How to properly get value of an input field in react 
//https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    //array aanmaken in state om comments er in te kunnen pushen

    //elke keer er iets wordt getypt wordt dit gefired.
    updateInputValue = (e) => {
        this.setState({
            comments: e.target.value

        });

    }

    //als er geklikt wordt kijken naar wat er in input zit
    handleClick = (e) => {

        this.setState({
            comments: e.target.value,

        });
        //hier zit ik vast, ik heb de data, nu nog renderen er onder.
        console.log(this.state.comments);

    }



    render() {

        return (
            <form>
                <h2>{"Comments"}</h2>
                <label for="comment">{"Please leave a message"} </label> <br />
                <input id="comment" type="text" value={this.state.inputValue} onChange={this.updateInputValue} />
                <button
                    type="button"
                    onClick={this.handleClick}>
                    Add
                </button>

            </form>
        )
    }
}
