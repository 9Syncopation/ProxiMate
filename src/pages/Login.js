import React from 'react'

export default function Login() {
    console.log('login')
    return (
        <div className="flex justify-center ">
            Login
            <h1>Log in</h1>
            <form>
              <label>
                Email
                <input name="email" type="email" placeholder="Email" />
              </label>
              <label>
                Password
                <input name="password" type="password" placeholder="Password" />
              </label>
              <button type="submit">Log in</button>
            </form>
        </div>
    )
}
