const { useBabelRc, override, addWebpackPlugin } = require('customize-cra')
const CircularDependencyPlugin = require('circular-dependency-plugin')
let errorCount = 0
module.exports = override(
  useBabelRc(),
  addWebpackPlugin(
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
      onDetected({ paths, compilation }) {
        errorCount++
        compilation.warnings.push(
          new Error(
            'Circular dependency detected:\r\n'.concat(paths.join(' -> '))
          )
        )
      },
      onEnd() {
        console.log(errorCount)
      },
    })
  )
)
