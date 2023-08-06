/**
 * 定义 cli 支持的命令
 */

const myAction: Function = require('./action')
const packageName: string = require(process.cwd().replace(/\\/g, '/') + "/package.json").name
const dependencies: object = require(process.cwd().replace(/\\/g, '/') + "/package.json").dependencies
const devDependencies: object = require(process.cwd().replace(/\\/g, '/') + "/package.json").devDependencies

/**
 * @params {object} program：命令行工具
 * @params {string} version：版本号
 */
module.exports = function (program: programType, version: string) {
  program
    .command('analyze [depth] [jsonFile]') // 自定义 analyze 命令，接收可选参数 depth 和 jsonFile
    .description('analyze dependency packages') // 命令描述
    .action(myAction(packageName, version, dependencies, devDependencies)) // 命令执行函数
}