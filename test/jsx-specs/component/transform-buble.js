
import Snabbdom from '../../../src/index'

export default () => {

  var Component = (name) =>
    Snabbdom.createElement( 'div', null, "Hello ", name )

  return Snabbdom.createElement( Component, { name: "world" })

}
