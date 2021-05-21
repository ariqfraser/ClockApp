import React from 'react'   
import {Container, SettingsBtn} from './topbar.elements'
import SettingsIcon from '@material-ui/icons/Settings';

const TopBar = () => {
    return (
        <Container>
            <h1>Clock</h1>
            <SettingsBtn><SettingsIcon style={{color: "var(--grey)"}}/></SettingsBtn>    
        </Container>
    )
}

export default TopBar
