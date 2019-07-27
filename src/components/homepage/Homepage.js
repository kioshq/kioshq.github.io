import React from 'react'
import './Homepage.css'
import { withStyles } from '@material-ui/core'

const styles = {
    imgcss: {
        borderRadius: '50%',
        height: '30%',
        width: '30%'
    },
    root: {
        align: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
}

export default withStyles(styles)(function Homepage(props){
    const { classes } = props
    return (
        <div
            align="center"
            className={classes.root}>
            <img src={require('../../assets/sadkitty.jpeg')} alt="sadcat" className={classes.imgcss}/>
            <h1>Not found...</h1>
            Sorry - we're not quite ready yet!
        </div>
    )
})