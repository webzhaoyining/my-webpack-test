'use strict';

// import React from 'react';
// import './search.less';
// import LargeNumber from 'large-number-mine';
// import logo from './images/jike.png';

const React = require('react');
const LargeNumber = require('large-number-mine');
const logo = require('./images/jike.png');
require('./search.less');


class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }
    lazyLoad() {
        import('./text.js').then((Text)=>{
            
            this.setState({
                Text: Text.default
            })
        })
    }
    render() {
        const {Text} = this.state;

            console.log(LargeNumber('111','555'));
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
        <img src={logo} onClick = { this.lazyLoad.bind(this)}/>
        <p>xxx</p>
        {/* {Text} */}
        </div>
    }
}

module.exports = <Search/>;