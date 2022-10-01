import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function SignOut() {
  localStorage.clear()
  const navigate = useNavigate();
  useEffect(() => {
    // navigate("/sign-in");
    window.location.replace("/sign-in")
  }, [])

}