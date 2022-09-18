# Context

Hello!
For this project, I created an app thinking it could be like an internal Personio product for managing applications. I had a lot of fun developing it.

## Setup/Tooling

First of all, I installed some dependencies to help me with the setup step of the project, abstracting some tooling work. I chose React Create App with Next.js and Typescript.

Next.js helps with the routing system, since it has a very robust solution for handling parameter change, which was crucial for me. It also provides a way to build an API, which turned this project into a monolith. From this, I created a simple Backend For Frontend, where the requests for Personio's API are made. It became really useful, specially because I was able to delegate some responsibilities to this internal API. Functionalities like the search and the sorting would not have been handled so well on the client-side.

Next.js is also really good for SEO performance, but in this case it wasn't necessary. I figured this app would only be used in an authenticated way, with a login page. That was also the reason behind how the code was written, not taking the semantic tags so much in consideration.

## Components

I created five components in total, thinking about scalability and not having them assigned to just one role. The idea is to make them reusable, in the case this app starts to gain other implementations. Also, specific states were created to let the user know when the API is down or when nothing is found after searching for a term.

It was also important for me to think of a way to handle the list length. Even though it may be a small list now, we don't really know how much it can grow. For me, the ideal scenario would be to have it coming paginated from the backend. However, since Personio's API didn't have this implementation, another solution could be to virtualize the list, and so I did it. Because we have a search bar to look for the candidates, it shouldn't be a problem for the user to not really know about the list's length.

## Quality assurance

For unitary tests, I used Jest and React Testing Library. I know there's still plenty of scenarios to cover, but hopefully the basics are there.

## Conclusion

Even though this may seem like a simple task, there's a lot to take in consideration, which leads to different possibilities. I got really excited with the fact that this kind of challenge brings up a lot of daily problems that we have to face, so I could use my knowledge as well as learn a lot during the process too. I really tried to think from a user's perspective to try and develop a good user experience. Please, let me know about the feedbacks! I would love to hear them.

# Getting Started

In order to run this app, you first need to clone this repository. Then, once it's cloned, run the command:

```bash
npm install
```

Next, you can just run:

```bash
npm run dev
```

To run the tests, the command is:

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
API route can be accessed on [http://localhost:3000/api/candidates](http://localhost:3000/api/candidates).

Please, reach out to me if you have any questions.

Thank you! Patrícia.
