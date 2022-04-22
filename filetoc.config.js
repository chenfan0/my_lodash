module.exports = {
  remoteUrl: 'https://github.com/chenfan0/my_lodash', // your repo address
  mainBranch: 'main', // your default branch. default 'main'
  dirPath: './lib', //  the dir where you want to gengerate the toc. default '.'
  mdPath: ['./README.md'], // the markdown files path, when there is only one path, it also can be a string.  default ['README.md']
  excludes: ['test'] // the excludes file name or dir name
}
