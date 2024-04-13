<script setup lang="ts">
const eventsRef = reactive<EventsList[]>([
  {
    id: '1',
    title: 'Познакомимся ?',
    description: 'Мероприятие от нашего вуза которое позволит тебе найти новый знакомства и группы',
    img: 'https://pstu.ru/files/2/image/2022/oso/to1.jpg'
  },
  {
    id: '2',
    title: 'Выбираем главу студсоюза ИПТИП',
    description: 'Мероприятие наточено на разумный выбор нового главы студсоюза',
    img: 'https://mguu.ru/wp-content/uploads/2024/03/SHkoly-studencheskogo-nauchnogo-obshhestva-20.02.2024-23.webp'
  }
]);
</script>

<template>
  <div class="mt-[40px] flex flex-col gap-6">
    <UiCard v-for="i in eventsRef" :key="i.id" class="card flex h-52 w-full cursor-pointer items-start gap-4">
      <div class="relative h-full w-72 rounded-l-lg">
        <img :src="i.img" class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-l-lg" />
      </div>
      <div class="flex flex-col">
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
