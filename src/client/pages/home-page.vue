<script setup lang="ts">
import { ref, watch } from "vue";
import { useServer } from "../composables/server";
import { Icon } from "@iconify/vue";
import githubIcon from "@iconify-icons/uil/github";
import spinnerIcon from "@iconify-icons/uil/spinner-alt";
import { Button } from "../components/ui/button";

const server = useServer();

const names = [
  "Tap Water",
  "Vue",
  "Cloudflare",
  "ts-rest",
  "Tailwind",
  "Vercel",
  "Cypress",
  "Docker",
  "e2e Typesafety",
  "Netlify",
  "Heroku",
];
const name = ref(-1);

const greeting = ref("");
const loading = ref(false);

watch(name, async (name) => {
  try {
    loading.value = true;
    const { body } = await server.greet({ query: { name: names[name % names.length] } });
    greeting.value = body;
  } catch (e) {
    console.error(e);
    greeting.value = "some unexpected error occurred 😰";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="flex min-h-full justify-center items-center">
    <div class="flex flex-col gap-6 w-10/12 sm:w-8/12 2xl:w-6/12 py-6">
      <div class="text-3xl lg:text-6xl font-bold">
        <h1 class="inline-block bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
          Tap Water.
        </h1>
        <p>Build fullstack Vue apps with e2e typesafety and DX in mind. Deploy to the cloud within seconds 🚀</p>
      </div>
      <div class="flex gap-2 flex-col sm:flex-row">
        <Button :disabled="loading" data-cy="submit" @click="name++">
          <span v-if="loading" class="flex justify-center">
            <Icon :icon="spinnerIcon" width="20" class="animate-spin" />
          </span>
          <span v-else-if="greeting" class="font-mono" data-cy="greeting">{{ greeting }}</span>
          <span v-else>Demonstrate Typesafe Backendcall</span>
        </Button>
        <Button variant="secondary" as="a" href="https://github.com/adamsondavid/tapw" target="_blank">
          Use this Template on
          <Icon :icon="githubIcon" width="20" class="inline align-text-bottom" />
          <span class="font-bold">GitHub</span>
        </Button>
      </div>
    </div>
  </div>
</template>
