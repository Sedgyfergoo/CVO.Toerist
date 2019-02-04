import React, { Component } from 'react';
import "./commentForm.css"



//How to properly get value of an input field in react 
//https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs


export default class CommentForm extends Component {
    //constructor(props) daarna super(props) 
    //Je gebruikt de constructor om de methode te binden.
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //elke keer als er iets getypt wordt, wordt dit gefired.
    handleChange(e) {
        this.setState({ value: e.target.value });

    }

    //als er geklikt wordt kijken naar wat er in input zit
    handleClick = (e) => {
        let comment = this.state.comments.concat(this.state.value)

        this.setState({
            comments: comment,
            value: ''
        });

    }

    render() {

        return (
            <form>
                <h2>{"Comments"}</h2>
                <label for="comment">{"Please leave a message"} </label> <br />
                <input id="comment" type="text" value={this.state.value} onChange={this.handleChange} />
                <button
                    type="button"
                    onClick={this.handleClick}>
                    Add
                </button>
                <table className="addedComment">
                    <tr>
                        <th>Id</th>
                        <th>Comment</th>
                    </tr>
                    {this.state.comments.map((row, i) => {
                        return (
                            <tr>
                                <td>{i}</td>
                                <td>{row}</td>
                            </tr>
                        );
                    })}
                </table>
            </form>
        )
    }
}
