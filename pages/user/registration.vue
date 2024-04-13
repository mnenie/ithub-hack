<script setup lang="ts">
definePageMeta({
  layout: 'auth'
});

useSeoMeta({
  title: 'Registration | IThub'
});
</script>

<template>
  <div class="container relative h-full">
    <div class="mx-auto flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-[460px] flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Get started</h1>
        <p class="pb-4 text-sm text-[#72717a]">Enter your info below to create your account</p>
        <AuthForm />
        <AuthPolicy />
      </div>
    </div>
  </div>
</template>
