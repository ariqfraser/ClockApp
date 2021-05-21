import styled from 'styled-components'

export const ClockBody = styled.div`
    margin: 30px 40px;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    box-shadow:  15px 15px 18px rgba(0,0,0, 0.1),
             -5px -5px 18px rgba(255,255,255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

`

export const InnerPiece = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow:  5px 5px 18px rgba(0,0,0, 0.1),
             -5px -5px 18px rgba(255,255,255, 0.6);
`

export const HourHand = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 3px;
    border-radius: 1px;
    z-index: 4;

    & .spacer1 {
        height: 5px;
    }

    & .hand {
        height: 70px;
        background-color: #8a8b8c;
    }

    & .spacer2 {
        height: 40px;
    }

    animation: rotate 720s linear infinite;

    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

`

export const MinuteHand = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 3px;
    border-radius: 1px;
    z-index: 2;
    

    & .spacer1 {
        height: 0px;
    }

    & .hand {
        height: 95px;
        background-color: #eb677d;
    }

    & .spacer2 {
        height: 60px;
    }

    animation: rotate 60s linear infinite;
    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`

export const Digit = styled.div`
    position: absolute;
    border-radius: 1px;
    background-color: #cec8c8;

    &.one {
        width: 3px;
        height: 15px;
        top: -2px;
        left: 50%;
        transform: translateX(-50%);
    }

    &.two {
        width: 15px;
        height: 3px;
        transform: translateY(-50%);
        top: 50%;
        right: -2px;
        
    }

    &.three {
        width: 3px;
        height: 15px;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
    }

    &.four {
        width: 15px;
        height: 3px;
        transform: translateY(-50%);
        top: 50%;
        left: -2px;
        
    }
`