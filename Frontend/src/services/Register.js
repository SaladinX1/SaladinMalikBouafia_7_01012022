import axios from 'axios'



const http = axios.create({
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
});

const registery = (user) =>

    http.post('http://localhost:3000/auth/signup', {

        email: user.email,
        pseudo: user.pseudo,
        password: user.password

    })


export default {
    registery
}