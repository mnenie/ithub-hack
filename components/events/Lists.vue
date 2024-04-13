<script setup lang="ts">
import { useEventsStore } from '~/stores/events.store';
const { events } = storeToRefs(useEventsStore());
</script>

<template>
  <div class="mt-[40px] flex flex-col gap-6">
    <UiCard v-for="i in events" :key="i._id" class="card flex h-52 w-full cursor-pointer items-start gap-2">
      <div class="relative h-full w-72 rounded-l-lg">
        <img :src="i.img" class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-l-lg" />
      </div>
      <div class="flex flex-col justify-between h-full">
        <UiCardHeader>
          <UiCardTitle>{{ i.title }}</UiCardTitle>
          <UiCardDescription>{{ i.description }}</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <span class="text-xs text-zinc-500">Опубликовано: 13.02.2024</span>
        </UiCardContent>
      </div>
    </UiCard>
  </div>
</template>

<style scoped>
.card {
  transition: 0.15s ease-in;
}

.card:hover {
  transform: scale(1.01);
}
</style>
