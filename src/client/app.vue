<script setup lang="ts">
import { ref } from "vue";
import { useServer } from "./composables/server";

const server = useServer();

const names = ["Tap Water", "Vue", "Express", "ts-rest", "Tailwind", "Cypress", "e2e Typesafety"];
const greeting = ref("");
const callServer = async () => {
  const name = names.shift()!;
  names.push(name);
  const { status, body } = await server.greet({ params: { name } });
  if (status === 200) greeting.value = body;
  else greeting.value = "some unexpected error occurred 😰";
};

const openGitHub = () => window.open("https://github.com/adamsondavid/tapw");
</script>

<template>
  <div class="flex min-h-screen content-center items-center px-16 lg:px-32 xl:px-64 dark:bg-zinc-900 dark:text-white">
    <div>
      <div class="text-2xl md:text-3xl lg:text-6xl font-bold">
        <h1 class="inline-block bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
          Tap Water.
        </h1>
        <p>Build fullstack Vue & Express apps with e2e typesafety in mind. Deploy to Vercel within seconds.</p>
      </div>
      <div class="flex gap-2 py-6">
        <button
          class="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-700"
          @click="callServer"
          data-cy="submit"
        >
          <span v-if="greeting" class="font-mono" data-cy="greeting">{{ greeting }}</span>
          <span v-else>Demonstrate Typesafe Backendcall</span>
        </button>
        <button
          class="rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700 dark:hover:bg-gray-300 dark:bg-white dark:text-gray-800"
          @click="openGitHub"
        >
          Use this Template on <span class="font-bold">GitHub</span>
        </button>
      </div>
    </div>
  </div>
</template>
