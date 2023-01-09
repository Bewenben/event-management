import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Images/logo-white-no-background.png'
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/eventmanagement/signup.php', inputs).then(function(response){
            console.log(response.status);
            navigate("/home");
        });
        // console.log(inputs);
    }

    return (
        <section className="grid grid-cols-2">
            <div className='bheader flex justify-center items-center'>
                <img className="w-[30vw]" src={Logo} alt="Logo"></img>
            </div>
            <div className='flex flex-col justify-center items-center cardsign'>
                <div>
                    <form className="flex flex-col justify-center space-y-8 px-36 py-8" onSubmit={handleSubmit}>
                        <span className="text-8xl text-center font-bold">Register</span>
                        <div className="form__group field">
                            <input required="" placeholder="Name" className="form__field" type="name" onChange={handleChange} name="Name"></input>
                            <label className="form__label" htmlFor="Name">Name</label>
                        </div>
                        <div className="form__group field">
                            <input required="" placeholder="Phone" className="form__field" type="phone" onChange={handleChange} name="Phone"></input>
                            <label className="form__label" htmlFor="Phone">Phone</label>
                        </div>
                        <div className="form__group field">
                            <input required="" placeholder="Email" className="form__field" type="Email" onChange={handleChange} name="Email"></input>
                            <label className="form__label" htmlFor="Email">Email</label>
                        </div>
                        <div className="form__group field">
                            <input required="" placeholder="Date of Birth" className="form__field" type="date" onChange={handleChange} name="DOB"></input>
                            <label className="form__label" htmlFor="date">Date of Birth</label>
                        </div>
                        <div className="form__group field">
                            <input required="" placeholder="Address" className="form__field" type="address" onChange={handleChange} name="Address"></input>
                            <label className="form__label" htmlFor="address">Address</label>
                        </div>
                        <div className="form__group field">
                            <input required="" placeholder="Password" className="form__field" type="Password" onChange={handleChange} name="Password"></input>
                            <label className="form__label" htmlFor="Password">Password</label>
                        </div>
                        <button className="buttonsign text-center">
                            CREATE AN ACCOUNT
                        </button>
                        <span className="text-lg text-center">Already have an account?
                            <Link to="/signin" className='text-[#3d6aff] font-bold'> Log in.</Link>
                        </span>
                    </form>
                </div>
            </div>
        </section>
    );
}