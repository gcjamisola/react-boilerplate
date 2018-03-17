import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Raleway');

body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
}
`

export * from './components/Wrapper'
