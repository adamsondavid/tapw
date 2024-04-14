# Tap Water 💧

Build fullstack Vue apps with e2e typesafety and DX in mind.
Deploy to the cloud within seconds 🚀

Currently supported are cloud providers like Vercel, Netlify, Cyclic, Koyeb and Render.
However, you can run `tapwater` anywhere Docker is supported.

Until now, Vercel and Netlify receive first-class support.
These two providers provide a great DX and make optimized deploys pretty easy, e.g. distribute static files via CDN and running server code on the edge out of the box.
Unfortunately, there is no provider-agnostic way to produce optimized build, so we focus our first-class support onto a limited set of providers.
The alternative cloud providers, including running on Docker, do not separate frontend and backend code (the frontend bundle is served from the api server).
This lowers performance and might increase server cost.
But it also simplifies the deployment setup, since most providers are happy to just `npm install` and `npm run start` your app.

Here is a list of deploys where our app currently runs:

- Vercel: https://tapw.vercel.app
- Netlify: https://tapw.netlify.app
- Cyclic: https://tapwater.cyclic.app
- Koyeb: https://tapw-adamson-david.koyeb.app
- Render: https://tapw.onrender.com
- Docker: build the [Dockerfile](Dockerfile) and deploy it into any cloud environment that runs containers. e.g. https://tapw-docker.onrender.com
