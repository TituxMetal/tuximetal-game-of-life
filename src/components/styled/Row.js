import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  height: ${({ height }) => height + 'px'};
  & > * {
   flex: 1 100%;
  }
`

export default Row
