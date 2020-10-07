import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'


const style = theme => ({
    header:{
        border:"1px solid blue ",
        borderRadius:'2px',
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        height:'10rem'
    }


})

const Modal = ({open, classes}) => {

    return <div className={classes.header}>
        <button>Continue without signup</button>
        <button>signUp and get 5% discount</button>

    </div>

}

export default withStyles(style)(Modal)
