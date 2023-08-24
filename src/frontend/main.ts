import { initClient } from "@ts-rest/core";
import { contract } from "../common/contract";

const client = initClient(contract, {
  baseUrl: "",
  baseHeaders: {},
  throwOnUnknownStatus: true,
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Welcome to my ts-rest fullstak demo w/ vite</h1>
  <button id="btn">Click to fetch data</button>
`;

document.querySelector("#btn")?.addEventListener("click", async () => {
  const name = prompt("Whats your name?");
  if (!name) return;
  const { body: greeting } = await client.greet({ params: { name } });
  alert(greeting);
});
