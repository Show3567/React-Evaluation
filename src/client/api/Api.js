import axios from 'axios';

export const Api = (() => {
    const baseUrl = 'http://localhost:3000';
    const usersUrl = 'users';
    const hobbiesUrl = 'hobbies';

    const getUsers = () =>
        axios.get([baseUrl, usersUrl].join('/'))
            .then(responseObj => responseObj.data);

    const getHobbies = () =>
        axios.get([baseUrl, hobbiesUrl].join('/'))
            .then(responseObj => responseObj.data);

    const ageCounter = hobby =>
        axios.get(`${baseUrl}/users/age?hobby=${hobby}`)
            .then(responseObj => responseObj.data);

    return {
        getUsers,
        getHobbies,
        ageCounter
    }
})();

