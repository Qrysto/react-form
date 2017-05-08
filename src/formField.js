import PropTypes from 'prop-types'
//
import _ from './utils'

export default function FormField ({field, children, renderChildren, ...rest}, context) {
  const bind = (cb, ...args) => (...args2) => cb(...args, ...args2)
  const formAPI = field ? _.mapValues(context.formAPI, d => bind(d, field)) : context.formAPI
  return _.resolveChildren(children, renderChildren, { ...formAPI, ...rest })
}
FormField.contextTypes = {
  formAPI: PropTypes.object
}
