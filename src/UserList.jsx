import { useContext } from "react";
import { MyContext } from "./Context";
import { Box, Button, Grid, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";

export default function UserList(){
    const { user } = useContext(MyContext);
    console.log(user)
    return (
         <List>
                    {
                    user.map((userValue,index)=>{
                        return (
                            <ListItem disablePadding key={index}>
                                    <Grid sx={{border:'1px solid black',width:'100%'}} >
                                        <ListItemText primary={`Name:${userValue?.name}`}/> 
                                        <ListItemText primary={`Email:${userValue?.email}`}/> 
                                        <ListItemText primary={`phoneNumber:${userValue?.phoneNumber}`}/> 
                                    </Grid>
                            </ListItem> 
                            
                        )
                    })
                
                } 
        </List>
    )
}