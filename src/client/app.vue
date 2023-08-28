<script setup lang="ts">
import { ref } from "vue";
import { useServer } from "./composables/server";

const server = useServer();

const name = ref("");
const greeting = ref("");

const submit = async () => {
  if (!name.value) return;
  const { status, body } = await server.greet({ params: { name: name.value } });
  if (status === 200) greeting.value = body;
};
</script>

<template>
  <h1>Welcome to my ts-rest fullstak demo w/ vite</h1>
  <form @submit.prevent="submit">
    <input placeholder="The name..." v-model="name" data-cy="input" />
    <button data-cy="submit">Submit</button>
  </form>
  <div data-cy="greeting">{{ greeting }}</div>
</template>
