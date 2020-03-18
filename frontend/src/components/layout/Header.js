import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='ui inverted menu'>
                <a className='header item'>TodoCrud</a>
                <a className='item'>Home</a>
            </div>
        );
    }
}

export default Header;