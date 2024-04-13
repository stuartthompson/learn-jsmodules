import path from 'path';

export default {
    mode: 'development', // Change to 'production' when ready to deploy
    entry: './src/main.ts', // Point to your entry file
    target: 'node', // Optimize output for Node.js
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve('dist'), // Output directory
        clean: true, // Clean the output directory before emit
    },
    experiments: {
        topLevelAwait: true, // Enable top-level await (if your Node.js version supports it)
    },
};
