import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

//class component as we have to use what the user stores

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange = event =>{
        const{value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit} action="POST">
                    <FormInput name='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
                    <FormInput name='email' handleChange={this.handleChange} value={this.state.password} label='password' required />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In with Google{' '}</CustomButton>   
                    </div>                 
                </form>
            </div>
        )
    }
}
export default SignIn;