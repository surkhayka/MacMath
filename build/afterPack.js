const { execFileSync } = require('child_process');

exports.default = async function (context) {
  const appPath = context.appOutDir;
  // Remove resource forks and extended attributes that break codesign
  execFileSync('/usr/bin/xattr', ['-cr', appPath], { stdio: 'inherit' });
  execFileSync('/usr/sbin/dot_clean', [appPath], { stdio: 'inherit' });
};
