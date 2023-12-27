import "./Login.css";
function SignUp() {
  return (
    <div className="container" >
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
        <div className="form-row">
          <div className="input-data">
            <input type="password" required />
            <div className="underline"></div>
            <label>Confirm Password</label>
          </div>
        </div>

        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="SignUp" />
          </div>
        </div>
      </form>
      <div>
        <div className="login-text">
         <span className="smaller-tag">&#60; &#60; &#60; &#60; &#60;</span>  Or SignUp With <span className="greater-tag">&#62; &#62; &#62; &#62; &#62;</span> 
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
          Already Have Account!!<span className="new-acc">LogIn</span>
        </div>
      </div>
    </div>
  );
}
export default SignUp; 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div className="container">
//         <div className="text">Convo Fusion</div>
//         <form>
//             <div className="form-row">
//                 <div className="input-data">
//                     <input type="email" required />
//                     <div className="underline"></div>
//                     <label>Email Address</label>
//                 </div>
    
//             </div>
//             <div className="form-row">
//                 <div className="input-data">
//                     <input type="password" required />
//                     <div className="underline"></div>
//                     <label>Password</label>
//                 </div>
//             </div>
//             <div className="form-row">
//                 <div className="input-data">
//                     <input type="password" required />
//                     <div className="underline"></div>
//                     <label>Confirm Password</label>
//                 </div>
//             </div>
    
//             <div className="form-row submit-btn">
//                 <div className="input-data">
//                     <div className="inner"></div>
//                     <input type="submit" value="SignUp" />
//                 </div>
//             </div>
//         </form>
//         <div>
//             <div className="login-text">
//                 <span className="smaller-tag">&#60; &#60; &#60; &#60; &#60;</span> Or SignUp With <span
//                     className="greater-tag">&#62; &#62; &#62; &#62; &#62;</span>
//             </div>
//         </div>
//         <div className="login-google">
//             <button type="submit" className="google-btn">
//                 {" "}
//                 <div className="logo-google">
//                     {" "}
//                     <img src="public/googlelogo.jpg" alt="" />
//                 </div>
//                 <div className="login-text-ctg"> Contiune With GOOGLE</div>
//             </button>
//         </div>
//         <div>
//             <div className="new-acc-text">
//                 Already Have Account!!<span className="new-acc">LogIn</span>
//             </div>
//         </div>
//     </div>
// </body>
// </html>

