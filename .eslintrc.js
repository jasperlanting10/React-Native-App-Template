//NOTE: when adding a directory in ./src, add it here as well
module.exports = {
  root: true,
  extends: '@react-native-community',

  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _scenes: './src/scenes',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
          _content: './src/content',
          _models: './src/models',
          _languages: './src/languages',
        },
      },
    },
  },
};
