module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: './public'
          }
        },
      ],
    });
    console.log(config.module);
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    // Important: return the modified config
    return config
  },
}
