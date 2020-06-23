const preprocess = require('svelte-preprocess');

module.exports = {
  dev: process.env.NODE_ENV === 'development',
  legacy: true,
  preprocess: preprocess({
    transformers: {
      postcss: true,
    },
  }),
  //   onwarn(warning, handler) {
  //     /** Prevent warning on autofocus attributes */
  //     if (warning.code === 'a11y-autofocus') {
  //       return
  //     }
  //     handler(warning)
  //   },
};
