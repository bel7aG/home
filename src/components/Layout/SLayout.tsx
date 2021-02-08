import { styled } from 'shared'

export const SLayout = styled.div<{ pathname: string }>`
  position: sticky;
  height: 100vh;

  min-width: 28rem;

  > div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    pointer-events: none;
  }
`
