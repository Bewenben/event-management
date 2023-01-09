import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Images/logo-white-no-background.png'
import { useState } from 'react';
import axios from 'axios';

export default function SignIn() {

    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost/eventmanagement/signin.php/`, inputs).then(function(response) {
            console.log(response.status)
            if (response.status !== 200){
                alert("Invalid")
            } else {
                window.localStorage.setItem("email", inputs.Email);
                navigate("/home")
            }
        });
    }

    return (
        <section className="grid grid-cols-2">
            <div className='flex flex-col justify-center items-center cardsign'>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-8">
                        <span className="text-8xl text-center font-bold">Sign In</span>
                        <div className="form__group field">
                            <input required="" placeholder="Email" className="form__field" type="Email" onChange={handleChange} name="Email"></input>
                            <label className="form__label" htmlFor="Email">Email</label>
                        </div>
                        <div className="form__group field">
                            <input required="" placeholder="Password" className="form__field" type="Password" onChange={handleChange} name="Password"></input>
                            <label className="form__label" htmlFor="Password">Password</label>
                        </div>
                        <button className="buttonsign text-center">
                        Sign in
                        </button>
                        <span className="text-lg">Don't have an account?
                            <Link to="/signup" className='text-[#3d6aff] font-bold'> Create an account.</Link>
                        </span>
                    </form>
                </div>
            </div>
            <div className='bheader flex justify-center items-center'>
                <img className="w-[30vw]" src={Logo} alt="Logo"></img>
            </div>
        </section>
    );
}