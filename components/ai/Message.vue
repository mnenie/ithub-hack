<script setup lang="ts">
import { ArrowBigUpDash } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'onSubmit'): void;
}>();

const model = defineModel<string>();
</script>

<template>
  <div class="relative flex w-full flex-col items-center">
    <form @submit.prevent="emit('onSubmit')" class="relative w-full">
      <UiTextarea
        v-model="model"
        placeholder="Напишити AI помощнику ваш вопрос"
        class="h-[40px] resize-none"
      />
      <UiButton type="submit" variant="ghost" class="absolute right-[3px] top-1/2 -translate-y-1/2 px-2">
        <ArrowBigUpDash color="rgb(82 82 91 / 0.9)" />
      </UiButton>
    </form>
    <span class="py-1 text-sm text-zinc-400">
      Встроенный ИИ от IThub поможет вам в ваших вопросах и предпочтениях
    </span>
  </div>
</template>
