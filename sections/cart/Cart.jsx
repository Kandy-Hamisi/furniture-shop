'use client'

import {sendStkPush, stkPushQuery} from '@/lib/actions'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {

    const [ loading, setLoading ] =  useState(false);
    const [ stkQueryLoading, setStkQueryLoading ] = useState(false); //
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ formData, setFormData ] = useState({
        mpesa_phone: "0795924576",
        name: "Kandy Hamisi",
        amount: 1
    });

    var reqcount = 0;

    const stkPushQueryWithIntervals = (checkoutRequestId) => {
        const timer = setInterval(async () => {
            reqcount += 1;

            if (reqcount === 15) {
                // handle long payment
                clearInterval(timer);
                setStkQueryLoading(false);
                setLoading(false);
                setErrorMessage("You took too long to pay")
            }

            const { data, error } = await stkPushQuery(checkoutRequestId);

            if (error) {
                if (error.response.data.errorCode !== "500.001.1001") {
                    setStkQueryLoading(false);
                    setLoading(false);
                    setErrorMessage(error?.response?.data?.errorMessage)
                }
            }

            if (data) {
                if (data.ResultCode === "0") {
                    clearInterval(timer);
                    setStkQueryLoading(false);
                    setLoading(false);
                    setErrorMessage("");
                    alert("Payment successful");
                } else {
                    clearInterval(timer);
                    setStkQueryLoading(false);
                    setLoading(false);
                    setErrorMessage(data?.ResultDesc);
                }
            }

        }, 2000);
        
    }

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formSubmissionData = {
            mpesa_number: formData.mpesa_phone.trim(),
            name: formData.name.trim(),
            amount: formData.amount,
        }

        // Kenya phone number validation
        const kenyanPhoneNumberRegex = /^(07\d{8}|01\d{8}|2547\d{8}|2541\d{8}|\+2547\d{8}|\+2541\d{8})$/;

        if (!kenyanPhoneNumberRegex.test(formSubmissionData.mpesa_number)) {
            alert("Invalid Kenyan phone number");
            setLoading(false);
            return alert("Invalid M-Pesa number")
        }

        console.log()

        const { data: stkData, error: stkError } = await sendStkPush(formSubmissionData);

        if (stkError) {
            setLoading(false);
            return alert(stkError);
        }

        const checkoutRequestId = stkData.checkoutRequestId;

        console.log(checkoutRequestId);
        alert("Stk push sent successfully");
    }

  return (
    <section className='max-container flex flex-col lg:flex-row gap-12'>
      <div className='w-full lg:w-[70%] inline-block'>
        {/* cart table */}
        <table className='min-w-full text-center text-sm font-light text-surface'>
            <thead className='bg-safari-brown text-white'>
                <tr>
                    <th scope='col' className='px-6 py-4'>Product</th>
                    <th scope='col' className='px-6 py-4'>Price</th>
                    <th scope='col' className='px-6 py-4'>Quantity</th>
                    <th scope='col' className='px-6 py-4'>Subtotal</th>
                    <th scope='col' className='px-6 py-4'>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                <tr className='border-b'>
                    <td className='px-6 py-4'>
                        <div className='flex justify-center'>
                            <div className='relative h-[75px] w-[75px]'>
                                <Image src="/kitchen.jpg" fill className='object-cover rounded-md shadow-lg' />
                            </div>
                        </div>
                    </td>
                    <td className='px-6 py-4'>
                        <h3 className='font-semibold'>KES 100</h3>
                    </td>
                    <td className='px-6 py-4'>
                        <h3 className='font-semibold'>1</h3>
                    </td>
                    <td className='px-6 py-4'>
                        <h3 className='font-semibold'>KES 100</h3>
                    </td>
                    <td className='px-6 py-4'>
                        <FaTrash className='cursor-pointer text-red-500 hover:text-red-700 transition' />
                    </td>
                </tr>
                <tr className='border-b'>
                    <td className='px-6 py-4'>
                        <div className='flex justify-center'>
                            <div className='relative h-[75px] w-[75px]'>
                                <Image src="/kitchen.jpg" fill className='object-cover rounded-md shadow-lg' />
                            </div>
                        </div>
                    </td>
                    <td className='px-6 py-4'>
                        <h3 className='font-semibold'>KES 100</h3>
                    </td>
                    <td className='px-6 py-4'>
                        <h3 className='font-semibold'>1</h3>
                    </td>
                    <td className='px-6 py-4'>
                        <h3 className='font-semibold'>KES 100</h3>
                    </td>
                    <td className='px-6 py-4'>
                        <FaTrash className='cursor-pointer text-red-500 hover:text-red-700 transition' />
                    </td>
                </tr>
            </tbody>
        </table>

      </div>
      <div className='flex-1'>
        {/* cart totals */}
        <div className='bg-safari-brown p-4'>
            <div className='flex justify-center'>
                <h4 className='font-bold'>Cart Totals</h4>
            </div>
            <div className='flex flex-col space-y-4'>
                <div className='flex gap-4'>
                    <h3 className='font-semibold'>Subtotal:</h3>
                    <h3 className='font-semibold'>KES 200</h3>
                </div>
                <div className='flex gap-4'>
                    <h3 className='font-semibold'>Shipping:</h3>
                    <h3 className='font-semibold'>KES 50</h3>
                </div>
                <div className='flex gap-4'>
                    <h3 className='font-semibold'>Total:</h3>
                    <h3 className='font-semibold'>KES 250</h3>
                </div>
                <button className='w-full py-2 text-white bg-safari-deep-brown hover:bg-safari-gray transition' disabled={loading} onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
