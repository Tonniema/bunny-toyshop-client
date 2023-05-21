//eslint-disable-next-line
import React from 'react';
import Title from '../../../Hooks/Title';

const Blog = () => {
    Title('Blog')
    return (
        <div>

            <div>


                <div>
                    <div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
                        <div className=" lg:mt-8 py-8 mx-auto lg:mb-0">
                            <h2 className="mx-auto font-sans font-bold tracking-normal text-red-600 text-3xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
                                Blog
                            </h2>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"></h2>
                        </div>
                    </div>
                    <div className="max-w-screen-xl w-[90%] mx-auto my-24">
                        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                            <div className="space-y-8">
                                <div className="bg-red-200 p-8">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                    </h3>
                                    <p className="text-gray-700">
                                        In authentication and authorization processes both access token and refresh token are used.
                                        <br />
                                        An access token is a security credential granted to a user or application, typically after successful authentication, that grants permission to access protected resources or perform certain actions. It is often used in web and mobile applications to authorize API requests.<br />

                                        A refresh token is a longer-lived credential that is used to obtain a new access token when the original token expires. It is commonly used in token-based authentication systems to
                                        provide seamless and secure access without requiring the user to re-enter their credentials.<br />

                                        Together, access and refresh tokens form a token-based authentication system that enhances security and user experience by providing temporary and revocable access permissions. Access tokens allow immediate access to resources, while refresh tokens enable the renewal of access tokens without requiring repeated authentication.<br/>
                                        Access tokens and refresh tokens are typically stored on the client-side in secure storage mechanisms such as browser cookies or local storage. When a user logs in, an access token is issued and stored, granting temporary access to protected resources. When the access token expires, the refresh token is used to obtain a new access token without requiring the user to re-authenticate. Proper security measures must be implemented to protect tokens from unauthorized access, such as using HTTPS and secure storage practices.
                                    </p>
                                </div>
                                <div className="bg-red-200 p-8">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        2. How does Access token and Refresh token, work and where should we store them on the client-side?
                                    </h3>
                                    <p className="text-gray-700">
                                        Access tokens and refresh tokens are typically stored on the client-side in secure storage mechanisms such as browser cookies or local storage. When a user logs in, an access token is issued and stored, granting temporary access to protected resources. When the access token expires, the refresh token is used to obtain a new access token without requiring the user to re-authenticate. Proper security measures must be implemented to protect tokens from unauthorized access, such as using HTTPS and secure storage practices.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-red-200 p-8">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        3. Compare SQL and NoSQL databases?
                                    </h3>
                                    <p className="text-gray-700">
                                        SQL databases, or relational databases, store structured data in tables with predefined schemas and enforce relationships. They excel at complex queries and ensuring data integrity. NoSQL databases, or non-relational databases, store unstructured or semi-structured data in flexible formats like key-value pairs, documents, or graphs. They offer scalability, high performance, and handle rapidly changing data efficiently. The choice between SQL and NoSQL depends on the application needs for data
                                        efficiently. The choice between SQL and NoSQL depends on the application needs for data structure, scalability, and query complexity.
                                    </p>
                                </div>
                                <div className="bg-red-200 p-8">
                                    <h3 className="mb-4 text-2xl font-bold">
                                        4. What is Express JS and Next JS?
                                    </h3>
                                    <p className="text-gray-700">
                                        Express.js is a minimalist web application framework for Node.js, enabling developers to build robust and efficient web applications and APIs with simplicity and ease. It provides a lightweight and flexible structure for handling routes, requests, and middleware, making it a popular choice for Node.js development.<br/>
                                        Next.js is a React framework that enhances the development of web applications with server-side rendering, automatic code splitting, and simplified routing. It allows developers to build optimized and performant React applications with ease, offering features that improve SEO, performance, and development efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;