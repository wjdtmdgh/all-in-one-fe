export function hasToken() {
  return localStorage.getItem("token") !== null
}

export function getToken() {
  return localStorage.getItem("token")
}