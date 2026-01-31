<script setup lang="ts">
import { ref, watch } from "vue";
import { useServer } from "../composables/server";
import { Button } from "../components/ui/button";
import { BookDashed, Loader } from "lucide-vue-next";

const server = useServer();

const names = ["Tap Water", "Vue", "Cloudflare", "Tailwind", "Vercel", "Cypress", "Docker", "e2e Typesafety", "shadcn"];
const name = ref(-1);

const greeting = ref("");
const loading = ref(false);

watch(name, async (name) => {
  loading.value = true;
  const res = await server.greeting.get({ query: { name: names[name % names.length] } });
  if (res.data) {
    greeting.value = res.data.message;
  } else {
    greeting.value = "some unexpected error occurred 😰";
  }
  loading.value = false;
});
</script>

<template>
  <div class="flex min-h-full justify-center items-center">
    <div class="flex flex-col gap-6 w-10/12 sm:w-8/12 2xl:w-6/12 py-6">
      <div class="text-3xl lg:text-6xl font-bold">
        <h1 class="inline-block bg-linear-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">Tap Water.</h1>
        <p>Build fullstack Vue apps with e2e typesafety and DX in mind. Deploy to the cloud within seconds 🚀</p>
      </div>
      <div class="flex gap-2 flex-col sm:flex-row">
        <Button :disabled="loading" data-cy="submit" @click="name++">
          <span v-if="loading" class="flex justify-center">
            <Loader class="animate-spin" />
          </span>
          <span v-else-if="greeting" class="font-mono" data-cy="greeting">{{ greeting }}</span>
          <span v-else>Demonstrate Typesafe Backendcall</span>
        </Button>
        <Button variant="secondary" as="a" href="https://github.com/adamsondavid/tapw" target="_blank">
          <BookDashed /> Use this Template on <span class="font-bold">GitHub</span>
        </Button>
      </div>
    </div>
  </div>
</template>
