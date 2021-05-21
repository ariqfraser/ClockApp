import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`

export const SettingsBtn = styled.button`
    border: none;
    width: 3rem;
    background-color: var(--main);
    height: 3rem;
    border-radius: 50%;
    box-shadow:  5px 5px 12px rgba(0,0,0, 0.1),
             -5px -5px 12px rgba(255,255,255, 0.8);
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`