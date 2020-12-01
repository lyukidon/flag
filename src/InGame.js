import React, { Component } from 'react';

class InGame extends Component {
    render() {
        return (
            <div>
                <flag>
                    {this.props.flag}
                </flag>
                <answer>
                    <input type='text' placeholder='여기에 입력하세요'></input>
                </answer>
            </div>
        );
    }
}

export default InGame;