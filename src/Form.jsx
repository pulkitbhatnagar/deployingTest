import { useContext, useState } from "react"
import { MyContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./TextFieldComponent";
 function Form(){


    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
      } = useForm()

    const { user, setUser } = useContext(MyContext);
    let navigation = useNavigate();
 
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        phoneNumber:''
    })

    const [errorHandler,setErrorHandler]=useState({
        name:'',
        email:'',
        phoneNumber:''
    })

    function handleError(key,value){
        if(value.length<3){
            setErrorHandler({...errorHandler,[key]:'please enter atleaset 3 character'})
        }
        else{
            setErrorHandler({...errorHandler,[key]:''})
        }

        if(key==='phoneNumber' && value.length!==10){
            setErrorHandler({...errorHandler,[key]:'phoneNumber shoule be atleast 10 character long'})
        }

        if(key==='phoneNumber' && value.length===10){
            setErrorHandler({...errorHandler,[key]:''})
        }

    }

    function handleSubmitForm(data){
       

        setUser([...user,{...data}])
        navigation("/user/list");

      

    }

    function handleDisabledButton(){
        if(!formData.name||!formData.email||!formData.phoneNumber){
            return true
        }

        if(errorHandler.email||errorHandler.name||errorHandler.phoneNumber){
            return true
        }

        return false

    }

    return (
        <Box sx={{width:'50%'}}>
            <Stack spacing={2}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>

                {/* <FormInputText name="name" register={register} label="Name" error={errors}/>
                <FormInputText name="email" control={control} label="email"/>
                <FormInputText name="phoneNumber" control={control} label="phoneNumber"/> */}
                <TextField
                    name="email"
                    inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email ? "Email is required" : ""}
/>

                    {/* <TextField id="outlined-basic"  error={errorHandler.name} helperText={errorHandler.name} label="Name" variant="outlined" onChange={(e)=>{setFormData({...formData,"name":e.target.value})}} onBlur={(e)=>handleError("name",e.target.value)}/>
      
                   
                    <TextField id="outlined-basic"  error={errorHandler.email} helperText={errorHandler.email} label="Email" variant="outlined" onChange={(e)=>{setFormData({...formData,"email":e.target.value})}} onBlur={(e)=>handleError("email",e.target.value)}/>
 
                    <TextField id="outlined-basic"  error={errorHandler.phoneNumber} helperText={errorHandler.phoneNumber} label="PhoneNumber" variant="outlined" onChange={(e)=>{setFormData({...formData,"phoneNumber":e.target.value})}} onBlur={(e)=>handleError("phoneNumber",e.target.value)}/> */}

                <Button variant="outlined" type='submit'>Submit</Button>
                </form>
            </Stack>
        </Box>
    );
}

export default Form

 