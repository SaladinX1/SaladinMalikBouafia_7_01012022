import axios from 'axios'



const registery = (email, pseudo, password) => {


    axios.post('http/localhost:3000/signup', {

        email: email,
        pseudo: pseudo,
        password: password,

    }).then(res => {

        return res.json()

    }).catch((err) => {
        alert(" une erreur est survenue :( : " + err);
    });

    return Promise.resolve('Opération en cours');

}

export default {
    registery
}