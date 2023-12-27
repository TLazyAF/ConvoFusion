import "./LogIn.css";
function LogIn() {
    return (
        <div className="container">
            <h1>test</h1>
            <div className="text">Convo Fusion</div>
            <form>
                <div className="form-row">
                    <div className="input-data">
                        <input type="email" required />
                        <div className="underline"></div>
                        <label>Email Address</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="password" required />
                        <div className="underline"></div>
                        <label>Password</label>
                    </div>
                </div>
                <div className="forgot-pass">
                    <button type="submit" className="inner-pass">Forgot Password??</button>
                </div>

                <div className="form-row submit-btn">
                    <div className="input-data">
                        <div className="inner"></div>
                        <input type="submit" value="LogIn" />
                    </div>
                </div>
            </form>
            <div>
                <div className="login-text">
                    <span className="smaller-tag">&#60; &#60; &#60; &#60; &#60;</span>  Or Login With <span className="greater-tag">&#62; &#62; &#62; &#62; &#62;</span>
                </div>
            </div>
            <div className="login-google">
                <button type="submit" className="google-btn">
                    {" "}
                    <div className="logo-google">
                        {" "}
                        <img src="public/googlelogo.jpg" alt="" />
                    </div>
                    <div className="login-text-ctg"> Contiune With GOOGLE</div>
                </button>
            </div>
            <div>
                <div className="new-acc-text">
                    Don’t Have An Account? <span className="new-acc">Create One</span>
                </div>
            </div>
        </div>
    );
}
export default LogIn;