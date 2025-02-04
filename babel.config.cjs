module.export = {
    presets: [
        ['@bable/preset-env', { targets: 'node 20'}]

    ],
    plugins : [
        '@babel/plugin-transform-modules-commonjs'
    ]
}