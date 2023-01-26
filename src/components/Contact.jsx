import React from 'react'

const Contact = () => {
  return (
    <div className="contact">

        <main>
            <h3>Contact Us</h3>
            <form >
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='Abc' />
                </div>
                <div>
                    <label >E-mail</label>
                    <input type="email" required placeholder='Abc@xyz.com' />
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='Tell us about your Query...' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact