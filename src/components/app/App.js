import React from 'react'
import Navbar from '../navbar/Navbar'
import { withStyles } from '@material-ui/styles';
import Homepage from '../homepage/Homepage';

const styles = {

}

function App(props){
    return (
        <div>
            <Navbar/>
            <Homepage/>
        </div>
    )
}

export default withStyles(styles)(App)