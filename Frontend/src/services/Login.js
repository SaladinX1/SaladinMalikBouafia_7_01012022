import axios from 'axios'



const login = (email, password) => {


    axios.post('http/localhost:3000/signin', {

        email: email,
        password: password,

    }).then(res => {

        return res.json()

    }).catch((err) => {
        alert(" une erreur est survenue :( : " + err);
    });

    return Promise.resolve('Opération en cours');

}

export default {
    login
}