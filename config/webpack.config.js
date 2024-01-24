module.exports = {
    mode: 'production',
    target: 'node20',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        clean: true,
    },
    optimization: {
        minimize: false
    }
};
