import './LoginPage.scss'

import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export function LoginPage() {
    const [login, setLogin] = useState(true)

    return (
        <div className='login-page'>
            <LoginForm login={login} />
            <button className='login-page__toggle' onClick={() => setLogin(!login)}>
                {login ? (
                    "Create an account"
                ) : (
                    "Already registered? Login instead"
                )}
            </button>
        </div>
    )
}