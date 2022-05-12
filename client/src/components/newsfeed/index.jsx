import { Button, Container , Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import {FCDialog} from '../Dialog/DialogComponent'
import { useForm } from 'react-hook-form';
const Newsfeed = () => {
    const [open, setOpen] = useState(false)
    const handleCreate = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

    return (
        <>
         <Container>
                <Grid container>
                    <Grid item xs={8}>
                        <Button variant='contained' color='primary' onClick={handleCreate} >Tạo blog</Button>
                    </Grid>
                    <Grid item xs={4}>2</Grid>
                </Grid>
         </Container>   
         <FCDialog open={open} handleClose={handleClose} title="Tạo Blog" content={renderCreateBlog()}/>
        </>
    )
}

const renderCreateBlog = () =>{
    return(
        <>
            <TextField id="outlined-basic" label="Tên Blog" variant="outlined" />
            <TextField id="outlined-basic" label="Tên Blog" variant="outlined" />
            
        </>
    )
}
export default Newsfeed
