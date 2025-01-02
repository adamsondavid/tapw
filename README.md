# Tap Water 💧

A Fast, Fullstack Vue.js Template for Serverless and Docker Environments. 🌐

Build modern fullstack Vue apps with **end-to-end typesafety** and a focus on **developer experience**. Deploy effortlessly to the cloud in seconds with first-class support for popular providers. 🚀

## Overview

`tapwater` is an opinionated fullstack template designed to jumpstart your development with minimal setup. It provides a robust stack that prioritizes performance, scalability, and an optimal developer workflow. Whether you're deploying to serverless environments like Vercel, Netlify, or Cloudflare Pages, or spinning up a Docker container in the cloud, `tapwater` has you covered.

Fork, modify, and make it your own! ⚙️

## ✨ Key Features

- **Vue 3** powered frontend with Vite for fast builds and HMR.
- **Tailwind CSS** and **Shadcn** for rapid and flexible UI development.
- A fully **integrated backend**, powered by serverless standards, compatible libraries like Hono.
- **End-to-end typesafety** with TypeScript and **ts-rest** across both the frontend and backend.
- **Cypress** for robust e2e testing.
- Focus on **DX**: fast local development and seamless deployments.
- Optimized for **serverless platforms** like Cloudflare Pages, Vercel Edge, Deno Deploy and Netlify. Easy **Docker** deployment for environments that support containers.

## ⚠️ Limitations

No Server-Side Rendering: This template only supports Vue.js in an old fashioned way as Single Page Application. SSR is not supported at this time.
Please do not use this template in production if you care about features like SEO!

## 🛠️ Supported Deployments

### First-Class Support:

- **Cloudflare Pages**
- **Vercel Edge**

### Other Supported Environments:

- **Deno Deploy**
- **Netlify**
- **Heroku-like Platforms**: Works with platforms that follow Heroku’s conventions (e.g. `npm run ci && npm run build`, followed by `npm run start`).
- **Docker**: Package and deploy anywhere Docker runs.

> [!NOTE]
> Providers like AWS Lambda, GCP CloudFunctions, and Azure Serverless Functions are not supported out of the box since they require additional configuration to target their specific environments. For most use cases, Cloudflare, Vercel, Deno Deploy and Netlify offer the best DX out of the box.

> [!IMPORTANT]
> For hobby projects: We recommend Cloudflare Pages due to its excellent free tier, which includes unlimited bandwidth, 100,000 function invocations per day, allowance for commercial use, and no unexpected charges when you exceed the limits.
> Vercel and Deno Deploy are another great options, though their free tier is more restrictive, offering 100 GB of bandwidth and 1 million function invocations per month. They similarly avoid overage charges. Vercel's free tier disallows commercial usage.
> Be cautious with Netlify, as exceeding its free tier will automatically upgrade you to a paid plan, regardless of whether you have registered a credit card.

## 🎬 Live Demos

Check out `tapwater` in action across various providers:

- [Cloudflare Pages](https://tapw.pages.dev)
- [Vercel Edge](https://tapw.vercel.app)
- [Deno Deploy](https://tapw.deno.dev)

## 🚀 Get Started

1. **Click "Use this template"**: create your own repo based on this template
2. **Clone the repo**: `git clone git@github.com:your-username/your-repo.git && cd your-repo`
3. **Install dependencies**: `npm install`
4. **Develop locally**: `npm run dev`
5. **Deploy**: Login to Cloudflare Pages, Vercel, Deno Deploy, Netlify or Heroku(-like) and import the project. The platforms should recognize all config parameters automatically. If you want to deploy the application as container, checkout our [Dockerfile](Dockerfile).

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to fork, modify, and share your creations!
Please make sure to include this repository's license in your distribution.
