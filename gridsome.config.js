// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Flatnesia &bull; Free Indonesian Flat Vector by Rifat Najmi',
  siteDescription: 'Indonesian Flat Vector. Free for Everyone. Free for Everything.',
  siteUrl: 'https://flatnesia.com',
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 48, 72, 96, 144, 168, 192, 256, 512]
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }
    },
    {
      use: '~/plugin/pwa',
      options: {
        shortName: 'Flatnesia',
        manifestPath: 'manifest.json',
        runtimeCaching: [
          {
            urlPattern: 'https://flatnesia-dev.netlify.com',
            handler: 'staleWhileRevalidate'
          },
          {
            urlPattern: 'https://pro.fontawesome.com/(.*)',
            options: {
              cacheName: 'fontawesome',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60
              }
            },
            handler: 'cacheFirst'   
          },
          {
            urlPattern: 'https://use.typekit.net/(.*)',
            options: {
              cacheName: 'typekit',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60
              }
            },
            handler: 'cacheFirst'   
          },
          {
            // You can use a RegExp as the pattern:
            urlPattern: /data\:image\/svg\+xml/,
            handler: 'CacheFirst'
          },
          {
            // You can use a RegExp as the pattern:
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'CacheFirst'
          },
          {
            // You can use a RegExp as the pattern:
            urlPattern: /\.(js|css)$/,
            handler: 'staleWhileRevalidate'
          },
          {
            urlPattern: '/index.html',
            handler: 'staleWhileRevalidate'   
          }
        ]
      }
    }
  ]
}
