import { useState } from "react"

export function LoginForm() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        const user = {
            email: email,
            password: password
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={handleEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            <button type='submit'>Login</button>
        </form>
    )
}