import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
export const FormInputText = ({name,register,label}) => {
  return (
    // <Controller
    //   name={name}
    //   control={control}
    //   rules={{ required: true, minLength: 3 }}
    //   render={({
    //     field,
    //     fieldState,
    //   }) => {
    //     console.log("===",field,fieldState)
    //     return (<TextField
    //     {...field}
    //     //   helperText={error ? error[name] : null}
    //       size="small"
    //     //   error={!!error}
    //     //   onChange={onChange}
    //     //   value={value}
    //       fullWidth
    //       label={label}
    //       variant="outlined"
    //     />)
    //   }}
    // />
    <TextField
        name={name}
        inputRef={register('name',{ required: true, minLength:3})}
        label={label}
        error={!!errors.email}
        helperText={errors.email ? "Email is required" : ""}
/>
  );
};