import { users } from './users.js'

const logoutUser = (username) => {
    const existingUser = users.find((user) => user.username === username)
    if (existingUser) {
        return "Logout Succesful!"
    } else {
        return "ERROR. The username doesn't exist."
    }
}

export { logoutUser }