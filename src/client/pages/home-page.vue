<script setup lang="ts">
import { ref } from "vue";
import { useServer } from "../composables/server";
import { Icon } from "@iconify/vue";
import githubIcon from "@iconify-icons/uil/github";
import spinnerIcon from "@iconify-icons/uil/spinner-alt";

const server = useServer();

const names = ["Tap Water", "Vue", "Express", "ts-rest", "Tailwind", "Cypress", "e2e Typesafety"];
const getName = () => {
  const name = names.shift()!;
  names.push(name);
  return name;
};

const greeting = ref("");
const loading = ref(false);
const callServer = async () => {
  loading.value = true;
  const { status, body } = await server.greet({ params: { name: getName() } });
  if (status === 200) greeting.value = body;
  else greeting.value = "some unexpected error occurred 😰";
  loading.value = false;
};

const openGitHub = () => window.open("https://github.com/adamsondavid/tapw");
</script>

<template>
  <div class="flex min-h-full justify-center items-center dark:bg-zinc-900 dark:text-white">
    <div class="flex flex-col gap-6 w-10/12 sm:w-8/12 2xl:w-6/12 py-6">
      <div class="text-3xl lg:text-6xl font-bold">
        <h1 class="inline-block bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
          Tap Water.
        </h1>
        <p>Build fullstack Vue & Express apps with e2e typesafety in mind. Deploy to Vercel within seconds.</p>
      </div>
      <div class="flex gap-2 flex-col sm:flex-row">
        <button
          class="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-700"
          @click="callServer"
          :disabled="loading"
          data-cy="submit"
        >
          <span v-if="loading" class="flex justify-center">
            <Icon :icon="spinnerIcon" width="20" class="animate-spin" />
          </span>
          <span v-else-if="greeting" class="font-mono" data-cy="greeting">{{ greeting }}</span>
          <span v-else>Demonstrate Typesafe Backendcall</span>
        </button>
        <button
          class="rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700 dark:hover:bg-gray-300 dark:bg-white dark:text-gray-800"
          @click="openGitHub"
        >
          Use this Template on
          <Icon :icon="githubIcon" width="20" class="inline align-text-bottom" />
          <span class="font-bold">GitHub</span>
        </button>
      </div>
    </div>
  </div>
</template>
