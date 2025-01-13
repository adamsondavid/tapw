<script setup lang="ts">
import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority";
import type { Component as ComponentType, HTMLAttributes } from "vue";

type Props = {
  variant?: NonNullable<Parameters<typeof variants>[0]>["variant"];
  size?: NonNullable<Parameters<typeof variants>[0]>["size"];
  as?: string | ComponentType;
  class?: HTMLAttributes["class"];
};

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  as: "button",
  class: "",
});

const variants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
  },
);
</script>

<template>
  <component :is="as" :class="cn(variants({ variant, size }), props.class)">
    <slot />
  </component>
</template>
