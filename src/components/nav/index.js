import React, {useState} from 'react'
import {Container, Button} from './nav.elements'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AlarmIcon from '@material-ui/icons/Alarm';
import TimerIcon from '@material-ui/icons/Timer';

const Nav = () => {

    const [state, setState] = useState({clock: 'active', alarm: '', timer: ''});
    const clock = state.clock;
    const alarm = state.alarm;
    const timer = state.timer;

    function switchState(x) {
        if (x == 1) {
            return {clock: 'active'}
        } else if (x == 2) {
            return {alarm: 'active'}
        } else {
            return {timer: 'active'}
        }
        
    }

    function active(x) {
        setState(() => switchState(x))

    }
    return (
        <>
            <Container>
                <Button className={clock} onClick={() => active(1)}>
                    <div className={clock}></div>
                    <AccessTimeIcon style={{color: 'var(--grey)', position: 'absolute', fontSize: '2.5rem'}} />
                </Button>
                <Button className={alarm} onClick={() => active(2)}>
                    <div className={alarm}></div>
                    <AlarmIcon style={{color: 'var(--grey)', position: 'absolute', fontSize: '2.5rem'}} />

                </Button>
                <Button className={timer} onClick={() => active(3)}>
                    <div className={timer}></div>
                    <TimerIcon style={{color: 'var(--grey)', position: 'absolute', fontSize: '2.5rem'}} />

                </Button>
            </Container>
        </>
    )
}

export default Nav
