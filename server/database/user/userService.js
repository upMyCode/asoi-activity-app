const USER = require('../models/USER');

const register = async (userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword) => {
    return USER.create({userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword});
}

const isUserExist = async (userEmail, userMobilePhone) => {
    const currentUSER = await USER.findOne({where:{userEmail, userMobilePhone}});

    return {
        data: currentUSER,
        statusExists: !!currentUSER
    };
}

const isUserExistWithLoginData = async (userMobilePhone, userFIO, userPassword) => {
    const currentUSER = await USER.findOne({where:{userMobilePhone, userFIO, userPassword}});

    return {
        data: currentUSER,
        statusExists: !!currentUSER
    };
}
module.exports = {register,isUserExist, isUserExistWithLoginData};