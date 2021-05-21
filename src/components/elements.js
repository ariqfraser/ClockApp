import styled from 'styled-components'

export const AppContainer = styled.div`
    overflow: hidden;
    background: #f7e3e3;
    position: relative;
    display: flex;

    &.desktop {
        flex-direction: column;
        border-radius: 32px;
        width: 360px;
        height: 780px;
        box-shadow:  11px 11px 55px #d7c5c5,
             -11px -11px 55px rgba(255,255,255, 0.5);
    }

    &.mobile {

    }
`
