# Tap Water 💧

A Fast, Fullstack Vue.js Template for Serverless and Docker Environments. 🌐

Build modern fullstack Vue apps with **end-to-end typesafety** and a focus on **developer experience**. Deploy effortlessly to the cloud in seconds with first-class support for popular providers. 🚀

## Overview

`tapwater` is an opinionated fullstack template designed to jumpstart your development with minimal setup. It provides a robust stack that prioritizes performance, scalability, and an optimal developer workflow. Whether you're deploying to serverless environments like Vercel, Netlify, or Cloudflare, or spinning up a Docker container in the cloud, `tapwater` has you covered.

Fork, modify, and make it your own! ⚙️

## ✨ Key Features

- **Vue 3** powered frontend with Vite for fast builds and HMR.
- **Tailwind CSS** and **Shadcn** for rapid and flexible UI development.
- A fully **integrated backend**, powered by webstandards.
- **End-to-end typesafety** with TypeScript across both the frontend and backend.
- **Cypress** for robust e2e testing.
- Focus on **DX**: fast local development and seamless deployments.
- Optimized for **serverless platforms** like Cloudflare, Vercel, Deno Deploy and Netlify. Easy **Docker** deployment for environments that support containers.

## ⚠️ Limitations

No Server-Side Rendering: This template only supports Vue.js in an old-fashioned way as Single Page Application. SSR is not supported.
Please do not use this template in production if you care about features like SEO!

## 🛠️ Supported Deployment Providers

This project is based on [Nitro](https://v3.nitro.build/deploy), which is an amazing project allowing to turn every Vite-based application into fullstack.
Nitro's strength lies in the ability to transform any Vite-based application into a "Build Output API" conform format of a [**lot**](https://v3.nitro.build/deploy) of cloud providers.
The following list includes just a few of them, we've already checked out to be working pretty well:

- **Cloudflare Workers**
- **Vercel**
- **Deno Deploy**
- **Netlify**
- **Heroku-like Platforms**: Works with platforms that follow Heroku's conventions (e.g. `npm run ci && npm run build`, followed by `npm run start`).
- **Docker**: Package and deploy anywhere Docker runs using one of our Node, Bun or Deno backed Dockerfiles.

> [!IMPORTANT]
> For hobby projects: We recommend Cloudflare due to its excellent free tier, which includes unlimited bandwidth, 100,000 function invocations per day, allowance for commercial use, and no unexpected charges when exceeding limits.

## 🎬 Live Demos

Check out `tapwater` in action across various providers:

- [Cloudflare Workers](https://tapw.adamsondavid.workers.dev)
- [Vercel](https://tapw.vercel.app)
- [Netlify](https://tapw.netlify.app)
- [Deno Deploy](https://tapw.deno.dev) TODO update!

## 🚀 Get Started

1. **Click "Use this template"**: create your own repo based on this template
2. **Clone the repo**: `git clone git@github.com:your-username/your-repo.git && cd your-repo`
3. **Install dependencies**: `npm install`
4. **Develop locally**: `npm run dev`
5. **Deploy**: Login to Cloudflare, Vercel, Deno Deploy, Netlify or Heroku(-like) and import the project. The platforms should recognize most config parameters automatically (check [Nitro Docs](https://v3.nitro.build/deploy) for details). If you want to deploy the application as container, checkout our Node, Bun and Deno based Dockerfiles.

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to fork, modify, and share your creations!
Please make sure to include this repository's license in your distribution.
