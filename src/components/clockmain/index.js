import React from 'react'
import {ClockBody, InnerPiece, HourHand, MinuteHand, Digit} from './clockmain.elements'

const ClockMain = () => {
    return (
        <>
            <ClockBody>
                <InnerPiece>
                    <HourHand>
                        <div className="spacer1"></div>
                        <div className="hand"></div>
                        <div className="spacer2"></div>
                    </HourHand>
                    <MinuteHand>
                        <div className="spacer1"></div>
                        <div className="hand"></div>
                        <div className="spacer2"></div>
                    </MinuteHand>
                </InnerPiece>
                <Digit className="one" />
                <Digit className="two" />
                <Digit className="three" />
                <Digit className="four" />
            </ClockBody>
        </>
    )
}

export default ClockMain
