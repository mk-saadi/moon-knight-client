import useTitle from "../title/useWebTitle";

const Blog = () => {
    useTitle("blog");
    return (
        <div className="min-h-screen mx-2 sm:mx-16 my-20 grid grid-cols-1 gap-y-8">
            <div
                className="text-xs px-2 sm:mx-3 bg-gray-700 rounded-md sm:px-4 py-6 text-slate-300 shadow-md grid grid-cols-1 gap-y-2"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="300"
            >
                <h2 className="text-lg sm:text-xl font-bold text-sky-300 mb-4">
                    Q. What is an access token and refresh token? How do they work and where should
                    we store them on the client-side?
                </h2>
                <p className="mx-3 sm:mx-7">
                    A. Access token and refresh token are commonly used in authentication systems to
                    authorize and authenticate the users.
                </p>
                <p className="sm:mx-10 mx-5">
                    Access Token: An access token is a credential that is used to access protected
                    resources or perform certain actions on behalf of a user. It is typically
                    short-lived and contains information about the user and their permissions.
                    Access tokens are used to authorize requests to protected APIs or resources.{" "}
                    <br />
                    Refresh Token: A refresh token is a credential that is used to obtain a new
                    access token when the current access token expires. Unlike access tokens,
                    refresh tokens are typically long-lived and can be used to obtain new access
                    tokens without requiring the user to reauthenticate. Refresh tokens are securely
                    stored and used to maintain an ongoing session for the user.
                </p>
                <p className="mx-3 sm:mx-7">
                    Access tokens should be stored securely and should not be accessible to
                    unauthorized parties. Common approaches for storing tokens on the client-side
                    include:
                </p>
                <p className="sm:mx-10 mx-5">
                    Local Storage: You can store tokens in the browser's local storage. However, be
                    aware of the risks associated with storing sensitive information in local
                    storage, such as potential XSS attacks. <br /> Cookies: Tokens can be stored as
                    secure HTTP-only cookies. This approach provides better protection against XSS
                    attacks since the cookie is not directly accessible by JavaScript. However, it
                    is still vulnerable to CSRF attacks. <br /> Secure Cookies + CSRF Tokens: To
                    enhance security, you can use secure HTTP-only cookies for storing a CSRF token.
                    The actual access token is stored in memory (e.g., a JavaScript variable) and
                    sent in the Authorization header with each request. The CSRF token can be used
                    to protect against CSRF attacks.
                </p>
            </div>
            <hr />
            <div
                className="text-xs px-2 sm:mx-3 bg-gray-700 rounded-md sm:px-4 py-6 text-slate-300 shadow-md grid grid-cols-1 gap-y-2"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="300"
            >
                <h2 className="text-lg sm:text-xl font-bold text-sky-300 mb-4">
                    Q. Compare SQL and NoSQL databases?
                </h2>
                <p className="mx-3 sm:mx-7">
                    A. SQL (Structured Query Language) and NoSQL (Not Only SQL) databases differ in
                    their data models, query languages, and scalability. SQL databases follow a
                    structured, table-based data model with predefined schemas, while NoSQL
                    databases offer a more flexible schema-less approach, accommodating various data
                    models like key-value, document, columnar, or graph.
                </p>
                <p className="mx-3 sm:mx-7">
                    SQL databases excel in handling complex relationships and structured data,
                    ensuring data integrity and supporting ACID transactions. They use SQL as a
                    standardized query language, allowing powerful and expressive querying
                    capabilities. NoSQL databases prioritize scalability, high availability, and
                    performance. They are designed for handling large volumes of unstructured or
                    semi-structured data and offer flexible schema designs.
                </p>
                <p className="mx-3 sm:mx-7">
                    Choosing between SQL and NoSQL depends on factors like data structure
                    complexity, scalability needs, transactional requirements, and the flexibility
                    of data models. Hybrid approaches can also be used to combine the strengths of
                    both types for specific use cases.
                </p>
            </div>
            <hr />
            <div
                className="text-xs px-2 sm:mx-3 bg-gray-700 rounded-md sm:px-4 py-6 text-slate-300 shadow-md grid grid-cols-1 gap-y-2"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="300"
            >
                <h2 className="text-lg sm:text-xl font-bold text-sky-300 mb-4">
                    Q. What is express js? What is Nest JS?
                </h2>
                <p className="mx-3 sm:mx-7">
                    A. Express.js is a lightweight and flexible web application framework for
                    Node.js. It provides a simple yet powerful set of features for building web
                    applications and APIs. With Express.js, developers can handle HTTP requests,
                    define routes, manage middleware, and implement various functionalities required
                    for web development. It follows a minimalist approach, allowing developers to
                    structure their applications as per their needs.
                </p>
                <p className="mx-3 sm:mx-7">
                    NestJS, on the other hand, is a progressive Node.js framework built on top of
                    Express.js. It combines the power of TypeScript and a modular architecture
                    inspired by Angular to provide a structured and scalable approach to application
                    development. NestJS encourages the use of decorators, dependency injection, and
                    modules to create reusable and testable code. It offers features such as
                    middleware, services, controllers, and modules, making it suitable for building
                    complex and enterprise-grade applications.
                </p>
                <p className="mx-3 sm:mx-7">
                    In summary, Express.js is a lightweight and flexible framework for building web
                    applications in Node.js, while NestJS builds upon Express.js by providing a more
                    structured and opinionated approach with TypeScript and modular architecture.
                </p>
            </div>
            <hr />
            <div
                className="text-xs px-2 sm:mx-3 bg-gray-700 rounded-md sm:px-4 py-6 text-slate-300 shadow-md grid grid-cols-1 gap-y-2"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="300"
            >
                <h2 className="text-lg sm:text-xl font-bold text-sky-300 mb-4">
                    Q. What is MongoDB aggregate and how does it work?
                </h2>
                <p className="mx-3 sm:mx-7">
                    A. MongoDB's aggregate is a powerful framework used for data aggregation and
                    analysis in MongoDB. It allows you to process and transform data using a series
                    of stages defined in a pipeline. Each stage performs a specific operation on the
                    input documents and passes the results to the next stage. The stages can include
                    operations like filtering, grouping, sorting, projecting, and calculating
                    aggregate values. The pipeline enables you to combine multiple stages to perform
                    complex data transformations and calculations. The output of the aggregate
                    pipeline is a stream of documents that represent the processed data. This
                    flexible framework allows you to perform advanced data manipulation and analysis
                    tasks on MongoDB collections, making it a valuable tool for extracting insights
                    and generating meaningful reports from your data.
                </p>
            </div>
        </div>
    );
};

export default Blog;
