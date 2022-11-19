import React from 'react';

import FlexContainer from '../styledComponents/FlexContainer';
import Circle from '../styledComponents/Circle';

interface Props {
    circles: number;
    circleRadius: number;
    circleEndsRadius: number;
    completionPercent: number;
    activeBackgroundColor: string;
    inactiveBackgroundColor: string;
}

const isCircleActive = (index: number, noOfCircles: number, completionPercent: number) => {
    const maxCircles = noOfCircles + 2; // + start && end
    const circlePercent = index / (maxCircles - 1);
    return circlePercent <= completionPercent;
}

const getColor = (index: number, noOfCircles: number, completionPercent: number, activeColor: string, inactiveColor: string) => {
    return isCircleActive(index, noOfCircles, completionPercent) ? activeColor : inactiveColor;
}

const UnitContainer: React.FC<Props> = (props: Props) => {
    return (
        <FlexContainer 
            justifyContent='space-between' 
            alignItems='center'>

            <Circle 
                radius={props.circleEndsRadius} 
                backgroundColor={getColor(0, props.circles, props.completionPercent, props.activeBackgroundColor, props.inactiveBackgroundColor)}/>
                
            {Array.from(Array(props.circles), (e, i) => {
               return <Circle 
                    key={i} 
                    radius={props.circleRadius} 
                    backgroundColor={getColor(i + 1, props.circles, props.completionPercent, props.activeBackgroundColor, props.inactiveBackgroundColor)}/>
            })}

            <Circle 
                radius={props.circleEndsRadius} 
                backgroundColor={getColor(props.circles + 1, props.circles, props.completionPercent, props.activeBackgroundColor, props.inactiveBackgroundColor)}/>
        </FlexContainer>
    );
}

export default UnitContainer;
