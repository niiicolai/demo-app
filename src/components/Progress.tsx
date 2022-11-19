import React from 'react';

import Container from './styledComponents/Container';
import LabelContainer from './containers/LabelContainer';
import UnitContainer from './containers/UnitContainer';
import PinContainer from './containers/PinContainer';

interface Props {
    portOfLoading: string;
    portOfDischarge: string;
    departureTime: Date;
    arrivalTime: Date;
    configuration: {
        width: number,
        height: number,
        padding: number,
        pin: {
            width: number,
            height: number,
            color: string,
            backgroundColor: string,
            containerHeight: number
        },
        circles: {
            max: number,
            radius: number,
            endRadius: number,
            inactiveColor: string,
            activeColor: string
        }
    };
}

const differenceBetweenDates = (from: Date, to: Date) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
    // "The getTime() method returns the number of milliseconds since the ECMAScript epoch."
    return to.getTime() - from.getTime();
}

const completionPercent = (from: Date, to: Date) => {
    const totalDifference = differenceBetweenDates(from, to);
    const currentDifference = differenceBetweenDates(new Date(), to);
    const differencePercent =  1 - (currentDifference / totalDifference);
    return currentDifference <= 0 ? 1 : differencePercent;
}

const Progress: React.FC<Props> = (props: Props) => {
    return (
        <Container 
            display='block' 
            position='relative' 
            width={props.configuration.width} 
            height={props.configuration.height} 
            padding={props.configuration.padding}
        >

            <PinContainer 
                pinWidth={props.configuration.pin.width}
                pinHeight={props.configuration.pin.height}
                pinContainerWidth={props.configuration.width - props.configuration.pin.height}
                pinContainerHeight={props.configuration.pin.containerHeight}
                pinBackgroundColor={props.configuration.pin.backgroundColor}
                pinColor={props.configuration.pin.color}
                completionPercent={completionPercent(props.departureTime, props.arrivalTime)}
            />

            <UnitContainer 
                circles={props.configuration.circles.max}
                circleRadius={props.configuration.circles.radius}
                circleEndsRadius={props.configuration.circles.endRadius}
                completionPercent={completionPercent(props.departureTime, props.arrivalTime)}
                activeBackgroundColor={props.configuration.circles.activeColor}
                inactiveBackgroundColor={props.configuration.circles.inactiveColor}
            />

            <LabelContainer 
                startText={props.portOfLoading}
                endText={props.portOfDischarge}
            />

        </Container>
    );
}

export default Progress;
