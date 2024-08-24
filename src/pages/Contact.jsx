import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <Navbar />
            <div className="text-center ">
                <h2 className="text-3xl bold ">Contact Us</h2>
                <p className="text-center my-5">
                    Want to contact us? Choose an option below and well be happy to show you how we
                    can transform companys web experience.
                </p>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4 mx-10 ">
                <div className="text-center">
                    <h2 className="text-2xl my-5">Contact with us If you have any Queries</h2>
                    <p className="">
                        Have something to say? We are here to help. Fill up the form or send email
                        or call phone.
                    </p>
                </div>
                <div className="text-center mb-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 my-2"></div>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="Enter Your Name"
                        />
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 "></div>
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="Enter Your Email"
                        />
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                        <input
                            {...register('phone', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="Enter Phone Number"
                        />
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                        <input
                            {...register('message', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="Enter Your Query "
                        />

                        <button
                            class="w-full py-4 font-semibold text-white transition-colors bg-indigo-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
                            type="submit"
                        >
                            {' '}
                            Send Your Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
