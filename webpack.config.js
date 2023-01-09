module.exports = {
    resolve :{
        fallback: { buffer: require.resolve("buffer/") },
        fallback: { os: require.resolve("os-browserify/browser") },
        fallback: { path: require.resolve("path-browserify") }
    }
}

