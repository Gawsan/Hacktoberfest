//Sign Up Page Normal design

//formik
import {Formik, Form} from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

import logo from "./../assets/git.png";

//icons
import {FiMail,FiLock,FiUser,FiCalendar} from "react-icons/fi";



const signup = () => {
  
    return (
       <div>
        <Avatar image={logo}/>
        <StyledFormArea>
            <StyledTitle color={colors.primary} size={50}> 
            Member Signup
            </StyledTitle>
            <Formik
                 initialValues={{
                    email:"",
                    password:"",
                    repeatPassword:"",
                    dateofbirth:"",
                    name:""

                 }}
                 validationSchema = {
                    Yup.object({
                        email : Yup.string().email("invalid email Address")
                        .required("Required"),
                        password: Yup.string()
                        .min(8,"password is too short")
                        .max(30,"password is too long")
                        .required("Required"),
                        name : Yup.string().required("Required"),
                        dateofbirth : Yup.date().required("Required"),
                        repeatPassword : Yup.string().required("Required").oneOf([Yup.ref("password")], "passwords must much ")

                    })
                 }
                 onSubmit={(values,{setSubmitting}) =>{
                    console.log(values);
                 }}
            >
 
                {({isSubmitting})=>(
                    <Form>
                        <TextInput
                            name="name"
                            type="text"
                            label="Full Name"
                            placeholder="Kaanu Sivarsa"
                            icons={<FiUser/>}
                            style={{textTransform:"capitaliz"}} 
                            
                        />

                        <TextInput
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="kaanu@gmail.com"
                            icons={<FiMail/>}
                        />

                        <TextInput
                            name="dateofbirth"
                            type="date"
                            label="Date Of Birth"
                            icons={<FiCalendar/>}
                        />

                        <TextInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="*******"
                            icons={<FiLock/>}
                        />

                        <TextInput
                            name="repeatpassword"
                            type="password"
                            label="Repeat password"
                            placeholder="*******"
                            icons={<FiLock/>}
                        />

                        <ButtonGroup>
                            <StyledFormButton type="submit">
                                Signup 
                            </StyledFormButton>

                            
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>

            <ExtraText>
                Already have an account? <TextLink to="/Login">Login</TextLink>
            </ExtraText>

        </StyledFormArea>
       </div>
    );
};

export default signup;

