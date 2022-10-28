import './Login.css';

export const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.password.value);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div class="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="John Doe"/>                    
                </div>
                <div class="input-group">
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