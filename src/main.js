// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuex from 'vuex'
import '~/assets/scss/main.scss'

import DefaultLayout from '~/layouts/Default.vue'
import TwoColsLayout from '~/layouts/TwoCols.vue'

import Button from '~/components/Button.vue'
import Icon from '~/components/Icon.vue'
import Link from '~/components/Link.vue'
import Checkbox from '~/components/Checkbox.vue'
import Radio from '~/components/Radio.vue'
import Input from '~/components/Input.vue'
import Textarea from '~/components/Textarea.vue'
import Modal from '~/components/Modal.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Layouts
  Vue.component('Layout', DefaultLayout)
  Vue.component('TwoCols', TwoColsLayout)

  // Components
  Vue.component('Button', Button)
  Vue.component('Icon', Icon)
  Vue.component('Link', Link)
  Vue.component('Checkbox', Checkbox)
  Vue.component('Radio', Radio)
  Vue.component('Input', Input)
  Vue.component('Textarea', Textarea)
  Vue.component('Modal', Modal)

  // Vuex store
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state:{
      isSmallWindow: false,
    },
    mutations: {
      detectSmallWindow (state, bool) {
        state.isSmallWindow = bool;
      }
    }
  });
}
