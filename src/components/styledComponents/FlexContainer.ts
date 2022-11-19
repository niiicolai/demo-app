import styled from '@emotion/styled';

interface Props {
    justifyContent: string;
    alignItems: string;
}

const Container = styled.div<Props>`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
`

export default Container;