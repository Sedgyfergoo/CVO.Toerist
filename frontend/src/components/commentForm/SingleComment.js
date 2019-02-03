import React, { Component } from 'react'

export default class SingleComment extends Component {
    render() {
        const { comments } = this.state
        return (
            <div>
                <table>
                    {comments.map((row) => {
                        return (
                            <tr>
                                <td>{row.comment}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
