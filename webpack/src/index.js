// javaScript
import {hello} from './hello'
const w = 'World'
console.log('%c' + hello(w), 'color:red;')
// JSON
import config from './config'
console.log('%c' + hello(config.hello), 'color:red;')
// StyleSheet
import './style.css'
