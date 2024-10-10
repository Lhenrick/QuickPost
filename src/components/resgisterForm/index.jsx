/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import User from "../../Pages/Register/newUser";
import { compareData, registerUser } from "../../Services/registerServices";
import { useState } from "react";
import { IoMdFemale, IoMdMale, IoMdTransgender } from "react-icons/io";
import CountriesDropDown from "../ContriesDropDown";
import RegisterInput from "../ResgisterInput";
import GenderRadio from "../genderRadio";



export default function RegisterForm({ btText }) {

    const navigate = useNavigate();

    //stores the information of each input
    // Armazena as informações de cada input 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');

    //Deals with input errors
    //Lida com os erros dos inputs
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [birthDateError, setBirthDateError] = useState('');
    const [formError, setFormError] = useState('');


    //Deals with the information of wach input on the change moment
    //Lida com as informações de cada input no momento da mudança
    const handleUsername = async (e) => {

        const usernameValue = e.target.value;
        setUsername(usernameValue);

        if(/\s/.test(usernameValue)){
            setUsernameError('Username cannot contain spaces');
            return;
        } 
        
        const userExist = await compareData({ info: usernameValue.toUpperCase(), infoToCompare: 'username' });
        
        if (userExist) {
            setUsernameError('This username is already being used');
        } else {
            setUsernameError('');
        }

    };


    const handleEmail = async (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        const emailExist = await compareData({ info: emailValue.toUpperCase(), infoToCompare: 'email' });

        if (emailExist) {
            setEmailError('This email is already being used');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {

        const passwordValue = e.target.value;
        setPassword(passwordValue);

        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(passwordValue);
        const hasLowerCase = /[a-z]/.test(passwordValue);
        const hasNumber = /\d/.test(passwordValue);

        if(passwordValue.length < minLength || !hasUpperCase || !hasLowerCase || !hasNumber){
            setPasswordError('Password must be at least 8 characters long and include uppercase, lowercase, and a number');
        } else {
            setPasswordError('')
        }
    
    }

    const handleConfirmPasswordChange = (e) => {

        const confirmedPassword = e.target.value;
        setConfirmPassword(confirmPassword);

        if (confirmedPassword != password) {
            setConfirmPasswordError('Passwords do not match')
        } else {
            setConfirmPasswordError('')
        }
    };

    const handleBirthDate = (e) => {
        const birthDateValue = e.target.value;
        setBirthDate(birthDateValue);
        const birthYear = new Date(birthDateValue).getFullYear();
        if(birthYear < 1900){
            setBirthDateError("Come on, you're not that old :/");
        } else {
            setBirthDateError('');
        }
    
    };

    const handleGender = (e) => setGender(e.target.value);
    

    async function getInfo(event) {
        event.preventDefault();

        //validate if there are any errors on the inputs
        //Valida se há algum erro no formulário
        if(usernameError || emailError || passwordError || confirmPasswordError) {
            setFormError('Please fix the errors in the form before submitting');
            return;
        }

        if(passwordError && password != confirmPassword){
            setConfirmPassword('Passwords do not match');
            return;
        }

        const userExist = await compareData({info: username.toUpperCase(), infoToCompare: 'username'});

        if(userExist) {
            setUsernameError('Username already being used');
            return;
        }

        if( birthDateError || !birthDate){
            setBirthDateError('Valid birth date is required');
            return;
        }

        setFormError('');

        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const creationDate = `${month}-${day}-${year}`;
        const newUser = new User(username, email, password, country, creationDate, birthDate, gender);

        try {
            const created = await registerUser(newUser);
            if (created) {

                alert("Account successfully created!");
                navigate("/login");

            } else {
                alert("Error trying to create an account");
                return;
            }
        } catch (error) {
            alert(`We have an error: ${error}`)
            return;
        }
    }

    return (
        <form onSubmit={getInfo} className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
            <RegisterInput inputTitle={"Your Username"} inputType={"text"} functionOnChange={handleUsername} placeholder={"Username"} errorConst={usernameError} />
            <RegisterInput inputTitle={"Your Email"} inputType={"email"} functionOnChange={handleEmail} placeholder={"Email@example.com"} errorConst={emailError} />
            <RegisterInput inputTitle={"Your Password"} inputType={"password"} functionOnChange={handlePasswordChange} placeholder={"Password"} errorConst={passwordError} />
            <RegisterInput inputTitle={"Confirm your password"} inputType={"password"} functionOnChange={handleConfirmPasswordChange} placeholder={"Confirm Password"} errorConst={confirmPasswordError} />
            <RegisterInput inputTitle={"Your date of birth"} inputType={"date"} functionOnChange={handleBirthDate} errorConst={birthDateError}/>
            <CountriesDropDown setCountry={setCountry} country={country} />

            <fieldset required onChange={handleGender} className="flex text-white space-x-6">
                <GenderRadio name={"gender"} id={"male"} value={"male"} color={"blue"}><IoMdMale className="size-8 text-blue-600" /></GenderRadio>
                <GenderRadio name={"gender"} id={"female"} value={"female"} color={"pink"}><IoMdFemale className="size-8 text-pink-600" /></GenderRadio>
                <GenderRadio name={"gender"} id={"others"} value={"others"} color={"indigo"}><IoMdTransgender className="size-8 text-indigo-600" /></GenderRadio>
            </fieldset>
            {formError && <p className="text-red-500">{formError}</p>}
            <button type="submit" className="bg-yellow-400 rounded-xl p-2 w-full hover:animate-pulse hover:bg-yellow-200">{btText}</button>

        </form>
    )
}