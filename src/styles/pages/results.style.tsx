import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SResults = styled.div`
  > h1 {
    height: 50%;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 4rem;
    color: #fff;

    @media screen and (max-width: ${SCREEN.MOBILE}px) {
      font-size: 1.9rem;
    }
    @media screen and (min-width: ${SCREEN.MOBILE}px) {
      font-size: 4rem;
    }
  }
`

export const BackHome = styled.button`
  color: #ff556b;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
`
