import './StartUpPage.css'
// import LogIn from './LogIn';
// import SignUp from './SignUp'
// import { Link } from 'react-router-dom';
{/* <script src="http://192.168.137.1:8097"></script>  */ }
function StartUpPage() {
    return (

        <>
            <div className="title-text">
                <h1>Convo Fusion</h1>
            </div>
            <div className='account-btn'>
                <div >
                    <div>
                        {/* <button type="submit"><Link to="/LogIn">Log In</Link></button> */}
                        {/* <button className="login-btn" type="submit"> LogIn
</button> */}
                        <a href="/LogIn.tsx">Login</a>

                    </div>
                </div>

                <div >
                    <div>
                        {/* <a href="">Signup</a> */}
                        {/* <button type="submit"><Link to="/SignUp">Sign Up</Link></button> */}
                        <button type="submit" className="signup-btn" >Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StartUpPage;
