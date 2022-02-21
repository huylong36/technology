import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FCDialog } from '../../Dialog/DialogComponent';
import createProduct from './createProduct';
const LayoutAdmin = () => {
      const [open, setOpen] = useState(false)
            const showDialog = () =>{
                setOpen(true)
            }
            const hideDialog = () =>{
                setOpen(false)
            }

        return (
            <>
            <Button onClick={() => showDialog()} color="success" variant="contained"> Tạo sản phẩm</Button>
            <FCDialog 
                open={open} 
                handleClose={hideDialog}
                title="Tạo sản phẩm"
                content={createProduct()}
            />
            
            </>
        )
}   

export default LayoutAdmin
