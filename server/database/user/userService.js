const USER = require('../models/USER');
const {Op} = require("sequelize");

const register = async (userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword) => {
    return USER.create({userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword});
}

const isUserExist = async (userEmail, userMobilePhone) => {
    const currentUSER = await USER.findOne({
        where:{
            [Op.or]: [{userEmail: userEmail}, {userMobilePhone: userMobilePhone}],
        }
    });

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

const isUserExistById = async (id) => {
    const currentUser = await USER.findOne({where:{id}});

    return !!currentUser;
}

const deleteUserById = async (id) => {
    return await USER.destroy({where:{id}})
}

module.exports = {
    register,
    isUserExist,
    isUserExistWithLoginData,
    isUserExistById,
    deleteUserById
};