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
- Focus on **DX**: fast local development and seamless deployments.
- Optimized for **serverless platforms** like Vercel Edge, Netlify, Cloudflare Pages, and Deno Deploy. Easy **Docker** deployment for environments that support containers.

## ⚠️ Limitations
No Server-Side Rendering: This template only supports Vue.js in an old fashioned way as Single Page Application. SSR is not supported at this time.
Please do not use this template in production if you care about features like SEO!

## 🛠️ Supported Deployments

### First-Class Support:

- **Vercel Edge**
- **Netlify**
- **Cloudflare Pages**

### Other Supported Environments:

- **Deno Deploy**: Ready for serverless functions with Deno.
- **Heroku-like Platforms**: Works with platforms that follow Heroku’s conventions (e.g. `npm run ci && npm run build`, followed by `npm run start`).
- **Docker**: Package and deploy anywhere Docker runs.

> **Note:** Providers like AWS Lambda, GCP CloudFunctions, and Azure Serverless Functions are not supported and require additional configuration to target their specific environments. For most use cases, Vercel, Netlify, and Cloudflare offer the best DX out of the box.

## 🎬 Live Demos

Check out `tapwater` in action across various providers:

- [Vercel Edge](https://tapw.vercel.app)
- [Netlify](https://tapw.netlify.app)
- [Cloudflare Pages](https://tapw.pages.dev)
- [Deno Deploy](https://tapw.deno.dev)
- [Render (Heroku-like)](https://tapw.onrender.com)
- **Docker**: Build the [Dockerfile](Dockerfile) and deploy it on any cloud provider that supports containers (e.g., [Docker on Render](https://tapw-docker.onrender.com)).

## 🚀 Get Started

1. **Click "Use this template"**: create your own repo based on this template
1. **Clone the repo**: `git clone https://github.com/your-user/your-repo && cd your-repo`
2. **Install dependencies**: `npm install`
3. **Develop locally**: `npm run dev`
4. **Deploy**: Login to Vercel, Netlify or Cloudflare Pages and import the project. The platforms should recognize all config parameters automatically.

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to fork, modify, and share your creations!
Please make sure to include this repository's license in your distribution.

