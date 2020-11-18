import {
    Component
} from 'react'

import wrappedComponent from './wrappedComponent'

import withLog from './log'


const withBaz = (comp) => {

}


const EnhancedComponent = withBaz(wrappedComponent)

const LogEnhancedComponent = withLog(withBaz(wrappedComponent))

export default { EnhancedComponent, LogEnhancedComponent }