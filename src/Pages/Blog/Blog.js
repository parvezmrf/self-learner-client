import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <>
            <h3>Welcome to Blog</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why we are use Firebase?</Accordion.Header>
                    <Accordion.Body>
                        The Firebase is a Backend-as-a-Service (BaaS) that offers the developers a wide spectrum of tools and services to develop high-quality apps at a much faster pace.
                        Now, if we were to define the BaaS, it is a cloud computing service model using which the web app and mobile app developers can connect their applications with backend cloud storage and APIs rendered by the backend applications.
                        Initially, James Tamplin and Andrew Lee had founded the Company in 2011 as Envolve, but after Google acquired it in 2014, Firebase had an emphatic growth to become a unified platform for developers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does private route work?</Accordion.Header>
                    <Accordion.Body>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is node? What does work?</Accordion.Header>
                    <Accordion.Body>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        Node.js basically works on two concept.<br />

                        Asynchronous<br />
                        Non-blocking I/O <br />
                        Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    );
};

export default Blog;