# Tap Water 💧

Build fullstack Vue apps with e2e typesafety in mind.
Deploy to Vercel, Cyclic, Koyeb, Render or any cloud provider running Docker within seconds 🚀

Current Deployments:

- Vercel: https://tapw.vercel.app
- Cyclic: https://tapwater.cyclic.app
- Koyeb: https://tapw-adamson-david.koyeb.app
- Render: https://tapw.onrender.com
- Docker: build the [Dockerfile](Dockerfile) and deploy it into any cloud environment that runs containers. e.g. https://tapw-docker.onrender.com/

Until now, Vercel is the most optimized deployment target.
It recognizes that static files (the frontend) should be globally served via CDN.
Backend code will be executed in Vercel edge-functions.
The alternative cloud providers, including running on Docker, do not separate frontend and backend code, which lowers performance and might increase server cost.
Unfortunately, there is no provider-agnostic way to separate frontend and backend code.
Since Vercel is the easiest to use platform, we optimize this template for Vercel.
