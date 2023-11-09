import React from 'react'
import ReactDOM from 'react-dom/client'
import { FOOTER_LOGO, TECHTITUDE_LOGO } from '../assets/images/img';

const RegForm = () => {
    return (
        <div>
            <img src={TECHTITUDE_LOGO} alt='logo' />

            <h1>Techtitude Academy</h1>
            <p>COURSE REGISTRATION</p>

            <form>
                <label for='FirstName'> Full Name
                    <input type='text' name='firstname' placeholder='e.g. Daniel' />
                </label>

                <label for='LastName'> Last Name
                    <input type='text' name='lastname' placeholder='e.g. Olabanji' />
                </label>

                <label for='Email'> Email
                    <input type='email' name='email' placeholder='e.g. daniel.olabanji@gmail.com' />
                </label>

                <label for='Phone number'> Phone Number
                    <input type='phone' name='phone number' placeholder='e.g. 09067908269' />
                </label>

                <label for='dob'> Date of Birth
                    <input type='date' name='Date of Birth' placeholder='mm/dd/yyyy' />
                </label>

                <label for='Courses'> Courses Interested in
                    <div className='courses'>
                        <input type='radio' name='Business Analysis' value="Business Analysis" /> Business Analysis
                        <input type='radio' name='Data Analytics' value="Data Analytics" /> Data Analytics
                        <input type='radio' name='Scrum Master' value="Scrum Master" /> Scrum Master
                        <input type='radio' name='Cyber Security' value="Cyber Security" /> Cyber Security
                        <input type='radio' name='UI/UX Design' value="UI/UX Design" /> UI/UX Design
                    </div>
                </label>

                <label for="text">
                    Any Special Requirements or requests
                    <input type='text' name='request' placeholder='Your answer' />
                </label>

                <label for='question'> How did you hear about this Course?
                    <div className='Question'>
                        <input type='radio' name='Friends' value="Friends" /> Friends
                        <input type='radio' name='Website' value="Website" /> Website
                        <input type='radio' name='Social-Media' value="Social-Media" /> Social-Media
                        <input type='radio' name='others' value="others" /> Others
                    </div>
                </label>

                <button className='submitBtn'>Submit</button>

            </form>
        </div>
    )
}

export default RegForm;
