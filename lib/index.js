const postcss = require("postcss");

module.exports = postcss.plugin("@considonet/postcss-config", config => (_root, result) => {

  const cfg = Object.assign({}, {
    normalize: true
  }, config);

  if(cfg.normalize) {
    result.processor.use(require("postcss-normalize")({ forceImport: true }))
  } else {
    result.processor.use(require("postcss-normalize"))
  }

  result.processor
    .use(require("postcss-easings"))
    .use(require("postcss-preset-env")({
      stage: 0
    }))
    .use(require("postcss-flexbugs-fixes"));
  
  if(process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
    result.processor.use(require("cssnano")({preset: "default"}));
  }
    
});
