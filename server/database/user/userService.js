const USER = require('../models/USER');

const register = async (userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword) => {
    return USER.create({userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword});
}

const isUserExist = async (userEmail, userMobilePhone) => {
    const currentUSER = await USER.findOne({where:{userEmail: userEmail, userMobilePhone: userMobilePhone}});

    return {
        data: currentUSER,
        statusExists: !!currentUSER
    };
}

module.exports = {register,isUserExist};