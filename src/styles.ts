import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  White: '#eee',
  Black: '#111',
  Gray: '#333',
  Green: '#10ACB4'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.Black};
    color: ${Cores.White};
    padding: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
