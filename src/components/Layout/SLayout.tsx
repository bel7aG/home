import { styled } from 'shared'

export const SLayout = styled.div<{ pathname: string }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* min-width: 28rem; */

  > div:first-child {
    overflow: hidden;
  }

  > div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }

  > div:last-child {
    pointer-events: ${({ pathname }) => (pathname === '/results' ? 'auto' : 'none')};
  }
`
