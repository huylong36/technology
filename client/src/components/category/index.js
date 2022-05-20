import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React, { useState } from 'react'
import categoryAPI from '../../apis/api/category'
import StarBorder from '@mui/icons-material/StarBorder';
import './style.scss'
const CategoryBlog = () => {
    const [category, setcategory] = useState()
    categoryAPI.getCategory({})
        .then((res) => (
            setcategory(res.data)
        ))
        .catch()
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='category-blog'>
            <h3> Danh mục bài viết</h3>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default CategoryBlog
