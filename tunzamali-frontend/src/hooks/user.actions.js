import axios from "axios";
import { useNavigate } from "react-router-dom";

function useUserActions() {
    const navigate = useNavigate();
    const baseURL = "https://ed-5220077483065344.educative.run/api";

    return {
        login,
        register,
        logout,
      };
}


function register(data){
    return axios.post(`${baseURL}/auth/register/`, data).then((res) => {
        // Registering the account and tokens in the store
        setUserData(res.data);
        navigate("/");
      });
}


// Get the user
function getUser() {
    const auth = JSON.parse(localStorage.getItem("auth")) || null;
    if (auth) {
      return auth.user;
    } else {
      return null;
    }
}

// Get the access token
function getAccessToken() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth.access;
  }
  
  // Get the refresh token
  function getRefreshToken() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth.refresh;
  }
  
  // Set the access, token, and user property
  function setUserData(data) {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        access: data.access,
        refresh: data.refresh,
        user: data.user,
      })
    );
  }
  
  export { useUserActions, getUser, getAccessToken, getRefreshToken };