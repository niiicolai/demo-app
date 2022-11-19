import styled from '@emotion/styled';

interface Props {
    radius: number;
    backgroundColor: string;
}

const Circle = styled.div<Props>`
  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  background-color: ${props => props.backgroundColor};
  border-radius: 100%;
`

export default Circle;