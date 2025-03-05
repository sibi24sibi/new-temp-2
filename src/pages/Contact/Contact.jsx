import React from 'react'

export const Contact = () => {
    return (
        <div className=' flex justify-center items-center flex-col gap-4 p-4 my-28'>
            <h2 className=' uppercase font-bold text-4xl'>Contact</h2>
            <p>For more information, please contact us at:</p>
            <ul>
                <li>Email: info@example.com</li>
                <li>Phone: +1 123-456-7890</li>
            </ul>
        </div>
    )
}

export default Contact;
