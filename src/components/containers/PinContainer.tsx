import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip } from '@fortawesome/free-solid-svg-icons'

import Container from '../styledComponents/Container';
import Pin from '../styledComponents/Pin';

interface Props {
    pinWidth: number;
    pinHeight: number;
    pinContainerWidth: number;
    pinContainerHeight: number;
    pinBackgroundColor: string;
    pinColor: string;
    completionPercent: number;
}

const UnitContainer: React.FC<Props> = (props: Props) => {
    return (
        <Container
            display='block'
            position='relative'
            width={props.pinContainerWidth}
            height={props.pinContainerHeight}
            padding={0}
        >

            <Pin
                completionPercent={props.completionPercent}
                parentWidth={props.pinContainerWidth}
                width={props.pinWidth}
                height={props.pinHeight}
                backgroundColor={props.pinBackgroundColor}
                color={props.pinColor}
            >
                <FontAwesomeIcon icon={faShip} />
            </Pin>

        </Container>
    );
}

export default UnitContainer;
