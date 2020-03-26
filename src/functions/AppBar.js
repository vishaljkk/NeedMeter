import React from 'react'
import {  Typography , Toolbar } from '@material-ui/core'
import Appbar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles( theme=>({
    appBar: {
        display: 'block',
        zIndex: theme.zIndex.Appbar,
    },

    title : {
        marginRight: 124,
    },

}))
function AppBar() {

    const classes = useStyles()

    return (
        <React.Fragment>
            <Appbar position="fixed"
                className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} noWrap={true} variant="h6" color="secondary" align='center'> <span style={{ color: '#8884d8' }}>DATA</span> VS <span style={{ color: '#fc5e03'  }}>CRISIS</span></Typography>                  
                </Toolbar>
            </Appbar>
        </React.Fragment>
    )
}

export default AppBar