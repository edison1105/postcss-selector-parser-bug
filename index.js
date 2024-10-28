const parser = require('postcss-selector-parser');
const postcss = require('postcss')

let count = 0
const transform = selectors => {
    selectors.each(selector => {
        selector.each(n => {
            count++
            if (n.nodes) {
                selectors.insertAfter(selector, n.nodes[0])
                selectors.removeChild(selector)
            }
        })
    })
}

function processRule(rule) {
    rule.selector = parser(transform).processSync(rule.selector);
}

const plugin = {
    postcssPlugin: 'postcss-plugin',
    Rule(rule) {
        processRule(rule)
    },
}

postcss([plugin]).process(':global(.foo) { color: red; }').then(result => {
    console.log('count:', count)
});
