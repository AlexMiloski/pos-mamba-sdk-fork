const { fromCwd, getPkg } = require('quickenv');
const shell = require('../../../lib/shell.js');

const PKG = getPkg();

module.exports = {
  command: 'deploy',
  desc: 'Deploy the current app',
  builder: {
    force: {
      description: 'Force to upload even unchanged ones files',
      alias: ['f'],
      default: false,
    },
    legacy: {
      default: false,
    },
  },
  handler({ legacy, force }) {
    const { id } = PKG.mamba;
    const appSlug = `${id}-${PKG.name}`;

    const REMOTE_APP_DIR = `POS:/data/app/MAINAPP/apps/${appSlug}`;
    const DIST_DIR = fromCwd(legacy ? 'ui/dist' : 'dist/bundle.pos');

    console.log(`Deploying "${appSlug}" to "${REMOTE_APP_DIR}"`);

    let rsyncOptions = '-zzaP';
    let deployCommand = `${
      !force ? '--checksum' : ''
    } --delete ${DIST_DIR}/ ${REMOTE_APP_DIR}`;

    if (process.platform === 'darwin') {
      rsyncOptions = '-arvc';
    }

    if (legacy) {
      console.log(
        `Moving "manifest.xml" and "icon.bmp" to "${REMOTE_APP_DIR}/"`,
      );

      const includes = ['manifest.xml', 'icon.bmp']
        .map(path => `--include="${path}"`)
        .join(' ');

      rsyncOptions = '-zzaPR';
      deployCommand = `${!force ? '--size-only' : ''}
        --delete ${includes} --exclude '**/*' . ${REMOTE_APP_DIR}/`;
    }

    shell(`rsync ${rsyncOptions} ${deployCommand}`);
    console.log('App deployed');
  },
};
