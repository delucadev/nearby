import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;

  .bg-top {
    background-color: #fefefe;
  }

  .bg-down {
    background-color: #793cf2;
  }

  .row1 {
    display: flex;
    flex-direction: column;
    height: 55vh;
    width: 100%;
    align-items: center;
  }
  .row1 img {
    margin-top: 1.4rem;
  }

  .row2 {
    display: flex;
    flex-direction: column;
    height: 45vh;
    width: 100%;
    align-items: center;
  }

  .subtitle {
    color: #1b1b1bcc;
    margin-bottom: 1.8rem;
  }
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
