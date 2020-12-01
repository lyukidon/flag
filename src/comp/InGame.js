import React, { Component } from 'react';

class InGame extends Component {
    render() {
        return (
            <div>
                <div>
                    < img src={this.props.flag} />
                </div>
                <div>
                    {this.props.country}
                </div>
                <input type='text' placeholder='여기에 입력하세요'/>
            </div>
        );
    }
}

export default InGame;