"use server"

import axios from  "axios";

export const sendStkPush = async(body) => {
    const mpesaEnv = process.env.MPESA_ENVIRONMENT;
    const MPESA_BASE_URL = process.env.MPESA_BASE_URL;

    console.log("The url: ", MPESA_BASE_URL);

    const { mpesa_number: phoneNumber, name, amount } = body;

    try {
        // generate authorization token
       /* This code snippet is generating an authorization token by encoding the concatenation of the
       values of `MPESA_CONSUMER_KEY` and `MPESA_CONSUMER_SECRET` environment variables to base64
       format. The `Buffer.from()` method is used to create a new Buffer object from the string
       `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`, and then the
       `toString("base64")` method is called on this Buffer object to convert it to a base64 encoded
       string. This token is commonly used for authentication purposes when making requests to APIs
       that require authorization. */
        const auth = Buffer.from(
            `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
        ).toString("base64");

        const response = await axios.get(
            `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                }
            }
        );

        const token = response.data.access_token;
        console.log("The Data", response.data);

        /* The line `const cleanedNumber = phoneNumber.replace(/\D/g, '');` is removing all non-digit
        characters from the `phoneNumber` string. */
        console.log(phoneNumber)
        const cleanedNumber = phoneNumber.replace(/\D/g, '');

        /* The line `const formattedPhone = `254${cleanedNumber.slice(-9)}`;` is creating a formatted
        phone number for use in the context of a Kenyan phone number. Here's a breakdown of what it
        does: */
    
        const formattedPhone = `254${cleanedNumber.slice(-9)}`;

        const date = new Date();
        
        // const timestamp =
        //     date.getFullYear() +
        //     ("0" + (date.getMonth() + 1)).slice(-2) +
        //     ("0" + date.getDate()).slice(-2) +
        //     ("0" + date.getHours()).slice(-2) +
        //     ("0" + date.getMinutes()).slice(-2) +
        //     ("0" + date.getSeconds()).slice(-2);
        const timestamp =
            date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2);

        const password = Buffer.from(
            process.env.MPESA_SHORTCODE + process.env.MPESA_PASSKEY + timestamp 
        ).toString("base64");

        const res = await axios.post(
            `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
            {
                BusinessShortCode: process.env.MPESA_SHORTCODE,
                Password:  password,
                Timestamp: timestamp,
                PartyA: formattedPhone,
                PartyB: process.env.MPESA_SHORTCODE,
                TransactionType: "CustomerPayBillOnline",
                Amount: amount,
                CallBackURL: process.env.MPESA_CALLBACK_URL,
                AccountReference: phoneNumber,
                TransactionDesc: "Kandy Shop Payment",
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        res.status(200).json(res.data);
        return { data: res.data };

    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return { error: error.message }
        }

        return { error: "Something wrong happened" }
    }
};

export const stkPushQuery = async (reqId) => {
    const mpesaEnv = process.env.MPESA_ENVIRONMENT;
    const MPESA_BASE_URL = process.env.MPESA_BASE_URL;

    try {
        // generate token
        const auth = Buffer.from(
            `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
        ).toString("base64");

        const response = await axios.get(
            `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                }
            }
        );

        const token = response.data.access_token;

        const date = new Date();

        const timestamp =
            date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2);

            const password = Buffer.from(
                process.env.MPESA_SHORTCODE + process.env.MPESA_PASSKEY + timestamp
            ).toString("base64");

            const res = await axios.post(
                `${MPESA_BASE_URL}/mpesa/stkpushquery/v1/query`,
                {
                    BusinessShortCode: process.env.MPESA_SHORTCODE,
                    Password:  password,
                    Timestamp: timestamp,
                    CheckoutRequestID: reqId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            res.status(200).json(res.data);

            return { data: response.data };
    } catch (error) {
        if (error instanceof Error) {
            return { error: error }
        }

        const unknownError = error;
        unknownError.message = "Something wrong happenedqw";
        return { error: unknownError };
    }

}