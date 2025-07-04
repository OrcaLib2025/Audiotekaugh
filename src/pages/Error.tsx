import React from 'react';
// @ts-ignore
import {Helmet} from "react-helmet";

const Error = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content="Error - Page Not Found"/>
                <meta property="og:description" content="Sorry, the page you are looking for does not exist."/>
                <meta property="og:image" content="link-to-error-image"/>
                <meta property="og:url" content="nothing"/>
                <meta property="og:type" content="website"/>

                <meta name="telegram:card" content="summary"/>
                <meta name="telegram:title" content="Error - Page Not Found"/>
                <meta name="telegram:description" content="It looks like this page is missing or has been removed."/>
                <meta name="telegram:image" content="link-to-error-image"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Error - Page Not Found"/>
                <meta name="twitter:description" content="We couldn't find the page you were looking for."/>
                <meta name="twitter:image" content="link-to-error-image"/>
            </Helmet>
            <h1 title='Error' className='text-[64px] font-bold text-center text-white'>
                Error - this url uncorrect
            </h1>
        </React.Fragment>
    );
};

export default Error;
