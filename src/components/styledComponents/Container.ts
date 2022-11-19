import styled from '@emotion/styled';

interface Props {
    display: string;
    position: string;
    width: number;
    height: number;
    padding: number;
}

const Container = styled.div<Props>`
    display: ${props => props.display};
    position: ${props => props.position};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding: ${props => props.padding}px;
    margin: auto;
`

export default Container;