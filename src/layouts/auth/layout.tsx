import React from "react";

declare const firebase: any; // 👈 tell TypeScript that firebase exists globally

const Login: React.FC = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);

      const user = result.user;
      if (user) {
        // store in localStorage
        localStorage.setItem("user", JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));

        alert(`Welcome ${user.displayName}`);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-page">
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;