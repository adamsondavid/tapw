# Tap Water 🚰

Build fullstack Vue apps with e2e typesafety and DX in mind.
Deploy to the cloud within seconds 🚀

`tapwater` is a template you can use to create your own application.
It provides a preconfigured software stack that should ensure first-class DX to kickstart with speed.
Please notice that this stack is opinionated.
Feel free to use this template or create a fork and adjust it to your needs.

Currently supported are cloud providers like Vercel, Netlify, Cloudflare Pages and Heroku-like (platforms that comply with Herokus conventions e.g. Koyeb, Render).
Of course, you can also run `tapwater` anywhere Docker is supported.
If you would like to target AWS Lambda / Lambda@Edge / Amplify, GCP CloudFunctions or Azure Serverless Functions, you would need to provide some extra configuration by yourself.

Until now, Vercel, Netlify and Cloudflare Pages receive first-class support.
These three providers provide a great DX and make optimized deploys pretty easy, e.g. distribute static files via CDN and running server code on the edge out of the box.
Unfortunately, there is no provider-agnostic way to produce optimized builds, so we focus our first-class support onto a limited set of providers.
The alternative cloud providers, including running on Docker, do not separate frontend and backend code (the frontend bundle is served from the api server).
This lowers performance and might increase server cost.
But it also simplifies the deployment setup, since most providers are happy to just `npm install` and `npm run start` your app.

Here is a list of deploys where our app currently runs:

- Vercel: https://tapw.vercel.app
- Netlify: https://tapw.netlify.app
- Cloudflare: https://tapw.pages.dev
- Koyeb: https://tapw-adamson-david.koyeb.app
- Render: https://tapw.onrender.com
- Docker: build the [Dockerfile](Dockerfile) and deploy it into any cloud environment that runs containers. e.g. https://tapw-docker.onrender.com
