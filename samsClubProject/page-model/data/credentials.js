import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },

    INVALID_USER: {
        INVALIDUSERNAME: process.env.INVALIDUSERNAME,
        INVALIDPASSWORD: process.env.INVALIDPASSWORD
    },

    CHECKOUTORDER: {
        FIRSTNAME: process.env.FIRSTNAME,
        LASTNAME: process.env.LASTNAME,
        ZIPCODE: process.env.ZIPCODE

    }


}