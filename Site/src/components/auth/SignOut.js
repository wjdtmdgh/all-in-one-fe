import {useEffect} from "react";

export default function SignOut() {
  localStorage.clear()
  useEffect(() => {
    window.location.replace("/sign-in")
  }, [])

}