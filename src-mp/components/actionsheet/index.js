import ActionSheet from './actionsheet.vue'
import addActionSheet from './api'
ActionSheet.install = function(Vue) {
    Vue.component(ActionSheet.name, ActionSheet)
    addActionSheet(Vue, ActionSheet)
}

export default ActionSheet
