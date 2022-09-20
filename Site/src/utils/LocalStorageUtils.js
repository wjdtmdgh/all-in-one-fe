export function hasToken() {
  return localStorage.getItem("token") !== null
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token")
}

export function setUserId(id) {
  localStorage.setItem("id", id);
}

export function getUserId() {
  return localStorage.getItem("id")
}


export function setUsername(username) {
  localStorage.setItem("username", username);
}

export function getUsername() {
  return localStorage.getItem("username")
}

export function setEmail(email) {
  localStorage.setItem("email", email);
}

export function getEmail() {
  return localStorage.getItem("email")
}
