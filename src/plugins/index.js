// import msg from './msg/msg.vue'
// const plugin = {}
// plugin.install = function (Vue) {
//   Vue.prototype.$msg = '全局属性'
//   Vue.prototype.$myMethods = function () {
//     console.log('全局自定义指令')
//   }
//   Vue.directive('focus', {
//     bind: function () {

//     },
//     inserted: function (el) {
//       el.focus()
//     }
//   })

//   Vue.component(msg.name, msg)
// }
// export default plugin
const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) {
    return install.installed
  }
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName)
    const componentName = config.default.name

    Vue.component(componentName, config.default || config)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
