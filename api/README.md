# API Folder

Please note: This folder is completely Vercel specific.
Vercel needs the server entrypoint to live in this special [/api](./) folder.
All other cloud providers allow to have a custom buildstep.
This means that all entrypoints are located [here](../src) and moved to their specific destination after compilation.
This does not work with Vercel (yet?).
Let's see it Vercel might support this in the future as well (without having to align with their build output api) in order to align Vercel support with the general way this project is structured.
