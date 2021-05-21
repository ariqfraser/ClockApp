import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    bottom: 0;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 3rem;
`

export const Button = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 25%;
    border: none;
    box-shadow:  5px 5px 12px rgba(0,0,0, 0.1),
             -4px -4px 12px rgba(255,255,255, 0.6);
    cursor: pointer;
    background-color: var(--main);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: all 0.2s ease-in-out;

    div {
        box-shadow: inset 4px 4px 10px rgba(0,0,0, 0),
            inset -4px -4px 5px rgba(255,255,255, 0);
        transition: all 0.3s ease-in-out;
        border-radius: 25%;
        margin:0;
        padding: 0;
        width: 3.4rem;
        height: 3.4rem;
        border: none;
    }

    div & .active {
        box-shadow: inset 4px 4px 5px rgba(0,0,0, 0.1),
            inset -4px -4px 5px rgba(255,255,255, 0.6);
    }

    &.active {
        box-shadow:  2px 2px 4px rgba(0,0,0, 0.1),
             -2px -2px 4px rgba(255,255,255, 0.6);
    }
`