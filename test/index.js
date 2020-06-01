const path = require('path');


process.chdir(path.join(__dirname,'smoke/template'));

describe('builder-webpack test case', ()=> {
    console.log('test22');
    require('./unit/webpack-base-test');
});
