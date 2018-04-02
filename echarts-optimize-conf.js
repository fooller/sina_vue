exports.modules = {
  main: {
    name: 'echarts/echarts'
  },
  parts: [
    {
      name: 'echarts/chart/pie',
      weight: 90
    }
  ]
}
exports.amd = {
    baseUrl: process.cwd(),
    packages: [
        {
            name: 'echarts',
            location: './node_modules/echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: './node_modules/zrender/src',
            main: 'zrender'
        }
    ]
};
