const { resolve, dirname } = require('path')
const { PKG } = require('../consts.js')

const workspaceRoot = process.cwd()
const projectRoot = resolve(__dirname, '..', '..')

const resolveFromWorkspace = (...args) => resolve(workspaceRoot, ...args)

/** Project's dist path */
const distPath = dirname(resolveFromWorkspace(PKG.main ? PKG.main : 'dist/x'))

/** Project's src path */
const srcPath = dirname(resolveFromWorkspace(PKG.source ? PKG.source : 'src/x'))

/** The @mamba project path */
exports.fromProject = (...args) => resolve(projectRoot, ...args)

/** Current project working directory */
exports.fromWorkspace = resolveFromWorkspace

/** Modules path */
exports.fromModulesRoot = (...args) =>
  resolveFromWorkspace('node_modules', ...args)

/** Current project 'dist' directory */
exports.fromDist = (...args) => resolveFromWorkspace(distPath, ...args)

/** Current project 'src' directory */
exports.fromSrc = (...args) => resolveFromWorkspace(srcPath, ...args)