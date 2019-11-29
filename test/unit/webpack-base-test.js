const assert = require('assert');
describe('webpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base');
    // console.log(baseConfig);
    it('entry', ()=> {
        assert(baseConfig.entry.index.indexOf('index/index.js'),true);
        assert(baseConfig.entry.search.indexOf('index.js'),true);
    })
})