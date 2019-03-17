import React from 'react'

const PatternContext = React.createContext()

const PatternProvider = PatternContext.Provider
const PatternConsumer = PatternContext.Consumer

export { PatternProvider, PatternConsumer }