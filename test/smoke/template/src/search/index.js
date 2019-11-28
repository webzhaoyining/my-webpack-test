'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
// import '../../common';
import LargeNumber from 'large-number-mine';
import logo from './images/jike.png';
import { a } from './tree-shaking'
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

            console.log(LargeNumber('111','2222'));
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
        <img src={logo} onClick = { this.lazyLoad.bind(this)}/>
        <p>aaaa</p>
        {/* {Text} */}
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')

)