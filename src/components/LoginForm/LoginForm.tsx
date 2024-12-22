import axios from 'axios'
import { useState } from "react"

export function LoginForm() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const baseUrl = import.meta.env.VITE_API_URL

    interface User {
        email: string;
        password: string;
    }

    const postLogin = async (user: User) => {
        await axios.post(`${baseUrl}/login`, user)
    }

    const postRegister = async (user: User) => {
        await axios.post(`${baseUrl}/register`, user)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()
        const user = {
            email: email,
            password: password
        }
        setEmail('')
        setPassword('')
        postLogin(user)
    }

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault()
        const user = {
            email: email,
            password: password
        }
        setEmail('')
        setPassword('')
        postRegister(user)
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                <button type='submit'>Login</button>
            </form>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}