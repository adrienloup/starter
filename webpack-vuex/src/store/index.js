import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = _ => {
  return new Vuex.Store({
    state: {
      msg: '',
      cartTotal: 0,
      cart: {},
      sale: false,
      products: [
        {
          name: 'Braided vest in thick wool and warm',
          price: 42.99,
          category: 'women',
          sale: false,
          article: 'pull',
          img: 'pull-4.jpeg'
        },
        {
          name: 'Fitted stretch wedding shirt with black tie white',
          price: 29.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt-5.jpeg'
        },
        {
          name: 'Slim-fit jeans with exposed button fastening',
          price: 320.99,
          category: 'women',
          sale: true,
          article: 'pants',
          img: 'pants-1.jpeg'
        },
        {
          name: 'Pointed high-heeled shoes with snake print',
          price: 80.99,
          category: 'women',
          sale: false,
          article: 'shoes',
          img: 'shoes-3.jpeg'
        },
        {
          name: 'Nudie jeans co lean dean skinny jeans in dark wash with pronounced effect',
          price: 99.99,
          category: 'men',
          sale: false,
          article: 'pants',
          img: 'pants-3.jpeg'
        }
      ]
    },
    getters: {
      msg: state => state.msg,
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      change (state, msg) {
        state.msg = msg
      }
    }
  })
}

export default createStore

const filter = (array, key, value) => array.filter(item => item[key] === value)
