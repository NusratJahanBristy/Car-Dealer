import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.gif'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto  space-y-8 text-center sm:max-w-md">
                <img src={error} alt='' />
                <p className="text-3xl">Sorry,We couldn't find this page.</p>
                <Link to='/' rel="noopener noreferrer" className="px-8  font-semibold rounded dark:bg-violet-400 text-orange-600">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;