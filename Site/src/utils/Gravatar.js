import md5 from "md5";

export const getProfileImage = (email) => {
  return `https://www.gravatar.com/avatar/${email ? md5(email) : ""}`
}