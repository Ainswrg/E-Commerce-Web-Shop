import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
   const { control } = useFormContext();
   const isError = false;
   return (
      <Grid item xs={12} sm={6}>
         <Controller
            render={({ field }) => <TextField {...field} label={label} fullWidth required />}
            // as={TextField}
            control={control}
            // fullWidth
            defaultValue=""
            name={name}
            // label={label}
            // required={required}
            error={isError}
         />
      </Grid>
   );
}

export default FormInput;
