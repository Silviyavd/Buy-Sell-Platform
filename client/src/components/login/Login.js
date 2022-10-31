import './Login.css';
import * as authService from "../../services/authService";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const {
            username,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(username, password)
        .then(authData => {
            userLogin(authData);
            navigate('/');
        })
        .catch(() => {
            navigate('/404');
        });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="John Doe"/>                    
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:   </label>
                    <input type="text" name="password"/>              
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
};