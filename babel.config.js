const presets = [
  [
    "@babel/preset-env",
    {
      targets: "defaults, not dead",
      useBuiltIns: "entry",
      corejs: "^3",
    },
  ],
];

const plugins = ["@babel/plugin-transform-modules-commonjs"];

module.exports = { presets, plugins };