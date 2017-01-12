const disallowed = [{
  node: 'Object',
  // TODO: Check for ES version for Object.values()
  methods: {
    core: [
      'each', 'merge', 'clone', 'append', 'subset', 'map', 'filter', 'every', 'some',
      'getLength', 'contains', 'keyOf', 'toQueryString',
      // TODO: Deprecated methods
    ],
    more: [
      'getFromPath', 'cleanValues', 'erase', 'run',
    ]
  },
}, {
  node: 'Number',
  methods: {
    core: [
      'convert', 'random', 'limit', 'round', 'times', 'toFloat', 'toInt',
      // TODO: Disallow on number type too
      'abs', 'acos', 'asin', 'atan2', 'ceil', 'cos', 'exp', 'floor', 'log', 'max', 'min',
      'pow', 'sin', 'sqrt', 'tan'
    ]
  }
}]

module.exports.rules = {
    'no-builtin-extensions': (context) => ({
        MemberExpression: (node) => {
            disallowed.forEach((d) => {
              if (node.object.name === d.node) {
                if (d.methods.core && d.methods.core.indexOf(node.property.name) > -1) {
                  context.report(node.property, `Do not use MooTools Core ${d.node} method ${node.property.name}`);
                }
                if (d.methods.more && d.methods.more.indexOf(node.property.name) > -1) {
                  context.report(node.property, `Do not use MooTools More ${d.node} method ${node.property.name}`);
                }
              }
            });
        }
    })
};
