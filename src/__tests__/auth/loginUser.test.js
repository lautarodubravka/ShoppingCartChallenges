import { users } from './users.js'

const loginUser = (username, password) => {
    const existingUser = users.find(
        (user) => user.username === username && user.password == password
    )
    if (existingUser) {
        return "Login Successful"
    } else {
      return "Access Denied. Wrong username or password."
    }
}

export { loginUser }