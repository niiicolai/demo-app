import React from 'react';
import FlexContainer from '../styledComponents/FlexContainer';

interface Props {
    startText: string;
    endText: string;
}

const LabelContainer: React.FC<Props> = (props: Props) => {
    return (
        <FlexContainer
            justifyContent='space-between'
            alignItems='center'
        >
            <p>{props.startText}</p>
            <p>{props.endText}</p>
        </FlexContainer>
    );
}

export default LabelContainer;
