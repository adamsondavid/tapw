<script setup lang="ts">
import { useServer } from "./composables/server";

const server = useServer();

async function click() {
  const name = prompt("Whats your name?");
  if (!name) return;
  const { body: greeting } = await server.greet({ params: { name } });
  alert(greeting);
}
</script>

<template>
  <h1>Welcome to my ts-rest fullstak demo w/ vite</h1>
  <button @click="click">Click to fetch data</button>
</template>
