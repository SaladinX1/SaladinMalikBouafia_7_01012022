import axios from 'axios'



const registery = (email, pseudo, password) => {


    axios.post('http/localhost:3000/signup').then(results => {



        console.log(results, email, pseudo, password);

    })

    return Promise.resolve('Opération en cours');



}

export default {
    registery
}