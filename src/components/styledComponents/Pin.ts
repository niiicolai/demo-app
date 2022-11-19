import styled from '@emotion/styled';

interface Props {
    width: number;
    height: number;
    parentWidth: number;
    completionPercent: number;
    backgroundColor: string;
    color: string;
}

const Pin = styled.div<Props>`
    left: ${props => (props.parentWidth * props.completionPercent) - props.width/2}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border-radius: 4px;
    transform: rotate(45deg);
    position: absolute;
    text-align: center;
    padding-top: 10px;
`

export default Pin;