# Tap Water 💧

A fast, fullstack Vue.js template for serverless and Docker environments.

Build modern fullstack Vue apps with **end-to-end type safety** and a focus on **developer experience**. Deploy effortlessly to the cloud in seconds with first-class support for popular providers 🚀

## Overview

`tapwater` is an opinionated fullstack template designed to jumpstart your development with minimal setup. It provides a robust stack that prioritizes performance, scalability, and an optimal developer workflow. Whether you're deploying to serverless environments like Vercel, Netlify, or Cloudflare, or spinning up a Docker container in the cloud, `tapwater` has you covered.

Fork, modify, and make it your own!

## ✨ Key Features

- **Vue 3** powered frontend with Vite for fast builds and HMR.
- **Tailwind CSS** and **Shadcn** for rapid and flexible UI development.
- A fully **integrated backend**, powered by web standards.
- **End-to-end type safety** with TypeScript across both the frontend and backend.
- **Cypress** for robust e2e testing.
- Focus on **DX**: fast local development and seamless deployments.
- Optimized for **serverless platforms** like Cloudflare, Vercel, Deno Deploy, and Netlify. Easy **Docker** deployment for environments that support containers.

## ⚠️ Limitations

**No Server-Side Rendering:** This template only supports Vue.js as a traditional Single Page Application. SSR is out of scope. Please do not use this template in production if you care about features like SEO.

## 🛠️ Supported Deployment Providers

This project is based on [Nitro](https://v3.nitro.build/deploy), which allows you to turn any Vite-based application into a fullstack app.
Nitro's strength lies in the ability to transform any Vite-based application into a Build Output API-compliant format for [many](https://v3.nitro.build/deploy) cloud providers.
The following list includes just a few of them that we've verified work well:

- **Cloudflare Workers**
- **Vercel**
- **Deno Deploy**
- **Netlify**
- **Heroku-like Platforms**: Works with platforms that follow Heroku's conventions (e.g., `npm ci && npm run build`, followed by `npm run start`).
- **Docker**: Package and deploy anywhere Docker runs using one of our Node, Bun, or Deno-backed Dockerfiles.

> [!IMPORTANT]
> For hobby projects: We recommend Cloudflare due to its excellent free tier, which includes unlimited bandwidth, 100,000 function invocations per day, allowance for commercial use, and no unexpected charges when exceeding limits.

## 🎬 Live Demos

Check out `tapwater` in action across various providers:

- [Cloudflare Workers](https://tapw.adamsondavid.workers.dev)
- [Vercel](https://tapw.vercel.app)
- [Netlify](https://tapw.netlify.app)
- [Deno Deploy](https://tapw.adamsondavid.deno.net)

## 🚀 Get Started

1. **Click "Use this template"**: create your own repo based on this template
2. **Clone the repo**: `git clone git@github.com:your-username/your-repo.git && cd your-repo`
3. **Install dependencies**: `npm install`
4. **Develop locally**: `npm run dev`
5. **Deploy**: Log in to Cloudflare, Vercel, Deno Deploy, Netlify, or Heroku(-like) and import the project. The platforms should recognize most config parameters automatically (check [Nitro Docs](https://v3.nitro.build/deploy) for details). If you want to deploy the application as a container, check out our Node, Bun, and Deno based Dockerfiles.

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to fork, modify, and share your creations!
Please make sure to include this repository's license in your distribution.
