## Context

Hello!
For this project, I created an app thinking it could be something like an internal Personio product for managing applications. I had a lot of fun developing it!
First of all, I installed some dependencies to help me with the setup step of the project, abstracting some tooling work. I chose React Create App with Next.js and Typescript.

Next.js helps with the routing system, since it has a very robust solution to handle parameter change, which was crucial for me. It also provides a solution to build an API, which turned this project into a monorepository. I created a simple Backend For Frontend, and this is where the requests for Personio's API are made. It became really useful, specially because I was able to delegate some responsibilities to this internal API, which would not have been handled so well on the client-side, like the search and sort functions.

I created five components in total, thinking about scalability and not having them assigned to just one role. The idea is to make they reusable, if this app began to gain other functionalities.

For unitary tests, I used Jest and React Testing Library. Hopefully, I was able to cover at least the most basic ones.

## Getting Started

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

Please, reach out to me if you have any questions. Thank you!
Patrícia.
