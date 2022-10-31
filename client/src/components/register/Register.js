export const Register = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');
        const confirmPassword = formData.get('re-password');

        if (password !== confirmPassword) {
            return;
        }
    }

    return (
        <div>
        <h1>Register Page</h1>
        <form onSubmit={onSubmit}>
            <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="John Doe"/>                    
            </div>
            <div className="input-group">
                <label htmlFor="password">Password:   </label>
                <input type="text" name="password"/>              
            </div>
            <div className="input-group">
                <label htmlFor="re-password">Repeat password:   </label>
                <input type="text" name="re-password"/>              
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
    )
};