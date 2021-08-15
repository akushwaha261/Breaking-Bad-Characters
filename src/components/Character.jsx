import React from 'react'
import { Card ,makeStyles, Tooltip, Typography } from '@material-ui/core'

const useStyle = makeStyles({
    img:{
        height: 300,
        width: '100%',
        objectFit: 'cover'
    }
})

const Character = ({item}) => {
    console.log(item);
    const classes = useStyle();
    return (
       <Tooltip title={
           <>
                <Typography>Name: {item.name}</Typography>  
                <Typography>Birthday: {item.birthday}</Typography>
                <Typography>Occupation: {item.occupation}</Typography>
                <Typography>Status: {item.status}</Typography>
                <Typography>Nickname: {item.nickname}</Typography>  
                <Typography>Real Name: {item.portrayed}</Typography>
                <Typography>Appers in Season: {item.appearance}</Typography>
           </>
       }arrow placement="top">
           <Card>
           <img src={item.img} className={classes.img} alt="character" />
       </Card>
       </Tooltip>
    )
}

export default Character
