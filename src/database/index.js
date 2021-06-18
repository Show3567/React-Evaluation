'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
const getHobbies = () => {
  const dataAccessMethod = () => {
    const totalList = Object.values(db.hobbiesOfUserByUsername).reduce((acc, cur) => [...acc, ...cur], []);
    return [...new Set(totalList)];
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    const usersWhoHasTheHobby = [];
    const targetObj = db.hobbiesOfUserByUsername;
    for (let key in targetObj) {
      targetObj[key].includes(hobby) && usersWhoHasTheHobby.push(key);
    }

    const agesArr = [];
    Object.values(db.usersById).forEach(obj => {
      if (usersWhoHasTheHobby.includes(obj.username)) {
        agesArr.push(obj.age);
      }
    });

    const countHowManySameAge = {};
    agesArr.forEach(age => {
      countHowManySameAge[age] = countHowManySameAge[age] 
        ? countHowManySameAge[age] + 1 : 1;
    });

    const res = [];
    for (let key in countHowManySameAge) {
      res.push({age: key, count: countHowManySameAge[key]});
    }

    return res;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
