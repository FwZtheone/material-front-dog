import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core";
import {Container, Button, TextField} from "@material-ui/core";



const useStyle = makeStyles({
    container : {
        display: 'flex',
        flexDirection : 'column',
        padding: '0 4em 0 4em'
    },
    title: {
        textAlign: 'center'
    }
})


export const Login = () => {

    const classes = useStyle();

  return (
    <form className={classes.container}>

        <Container className={classes.title}>
        <h1>connexion</h1>
        </Container>

      <FormControl >
        <InputLabel htmlFor="my-input">Adresse émail</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
       
        <FormHelperText id="my-helper-text">
          Ne partagez jamais votre adresse émail.
        </FormHelperText>
      </FormControl>


      <FormControl hiddenLabel>
          
                </FormControl>


      <FormControl>
        <InputLabel htmlFor="my-input">mot de passe </InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
        Ne partagez jamais votre mot de passe.
        </FormHelperText>
      </FormControl>
    
    <Button color="primary" variant="contained">connexion</Button>


    </form>
  );
};
