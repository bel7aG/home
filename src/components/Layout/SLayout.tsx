import { styled } from 'shared'

export const SLayout = styled.div`
  position: sticky;

  min-width: 28rem;

  &,
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
`
