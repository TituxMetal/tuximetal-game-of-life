import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  border: 1px solid pink;
  height: ${({ height }) => height || '100vh'};
  width: ${({ width }) => width || '100%'};

  & > * {
    flex: 1 100%;
  }
`

export default Wrapper
