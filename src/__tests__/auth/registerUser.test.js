import { users } from './users.js'

const registerUser = (username, password) => {
    const existingUser = users.find((user) => user.username === username)
    if (existingUser) {
        return "The username is not available."
    } else {
        const newUser = {
          id: users.lenght +1,
          username: username,
          password: password,
        }
        users.push(newUser)
        return "Register Successful!"
    }
}

export { registerUser }