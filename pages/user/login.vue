<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';

definePageMeta({
  layout: 'auth'
});

useSeoMeta({
  title: 'Войти на сервис'
});
</script>

<template>
  <div class="container relative h-full">
    <div
      @click="navigateTo(HOME_ROUTE)"
      class="absolute ml-52 mt-20 flex cursor-pointer items-center gap-1 rounded-md"
    >
      <ChevronLeft :size="20" />
      <span class="text-sm font-medium">Back</span>
    </div>
    <div class="mx-auto flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-[460px] flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p class="pb-4 text-sm text-[#72717a]">Enter your info below to sign in your account</p>
        <AuthForm />
        <AuthPolicy />
      </div>
    </div>
  </div>
</template>
