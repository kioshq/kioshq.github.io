import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Navbar(){
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={0}>
            <Toolbar>
                <Typography variant="h6" style={{ marginLeft: '10vw' }}>Kios Software</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar 