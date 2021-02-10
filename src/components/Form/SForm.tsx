import { styled } from 'shared'

export const SForm = styled.div`
  > form {
    pointer-events: all;
    width: 100vw;
    > * {
      display: block;
    }

    > input {
      background-color: transparent;
      width: 80%;
      margin: 0 auto;
      font-size: 4rem;
      border-bottom: 3px solid #fff;
      color: #fff;
      padding-bottom: 1rem;
    }

    > div {
      height: 4rem;
      justify-content: space-around;
      margin-bottom: 2rem;
      &,
      > * {
        display: flex;
        align-items: center;
      }
      > * {
        justify-content: center;
        flex: 1;
      }

      > p {
        font-size: 2rem;
      }

      > input[type='radio'] {
        height: 3rem;
      }
    }

    > button {
      font-size: 2.2rem;
      text-transform: uppercase;
      margin: 0 auto;
      margin-top: 4rem;
    }
  }
`
