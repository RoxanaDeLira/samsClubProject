import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USERNAME,
        LASTNAME:  process.env.LASTNAME,
        EMAIL: process.env.EMAIL,
        CONFIRMEMAIL: process.env.CONFIRMEMAIL,
        PASSWORD: process.env.PASSWORD,
        PHONENUMBER: process.env.PHONENUMBER
    }

}