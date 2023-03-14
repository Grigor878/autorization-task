import React from 'react'
import user from '../../assets/imgs/user.png'
import './Form.scss'
import Swal from "sweetalert2"
import "sweetalert2/src/sweetalert2.scss"

const Form = () => {
    const postClintInfo = (e) => {
        const firstname = e.target.firstname.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        e.preventDefault();

        const data = {
            'first_name': firstname,
            'last_name': lastname,
            'email': email,
            'password': password,
        }
        
        console.log(data);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your data has been saved.',
            showConfirmButton: false,
            timer: 1500
        })

        e.target.firstname.value = null
        e.target.lastname.value = null
        e.target.email.value = null
        e.target.password.value = null
    }

    return (
        <form onSubmit={postClintInfo} className="form">
            <div className='form__user'>
                <img src={user} alt="user-img" className='form__user-img' />
            </div>

            <h2 className='form__title'>Authorization</h2>

            <input
                type="text"
                name="firstname"
                placeholder="First Name"
                required={true}
            />
            <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                required={true}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required={true}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required={true}
            />
            <button
                type="submit"
                value="Send"
                className='form__btn'
            >
                Continue
            </button>
        </form>
    )
}

export default Form