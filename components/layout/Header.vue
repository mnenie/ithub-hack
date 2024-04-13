<script setup lang="ts">
import { cn } from '@/lib/utils';
import {redirect} from '~/helpers/helperRedirect'

const links = reactive([
  { id: 0, name: 'О проекте', url: 'https://github.com/mnenie/gagarinhack' },
  { id: 1, name: 'Поддержка', url: 'https://t.me/youngjuicycashrussia' }
]);
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#e4e4e766]/40 bg-[#fff9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
  >
    <div class="flex h-14 max-w-full items-center justify-between px-10">
      <div class="left-section">
        <FeaturesUserAvatar />
        <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
          <span
            v-for="link in links"
            :key="link.id"
            @click="redirect(link.url)"
            class="cursor-pointer text-sm font-medium text-zinc-950/80 transition-colors hover:text-zinc-950/90"
          >
            {{ link.name }}
          </span>
        </nav>
      </div>
      <div class="right-section">
        <UiButton @click="redirect('https://ithub.ru/')"> Перейти к ithub.ru </UiButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.right-section {
  display: flex;
  align-items: center;
}

.header-text {
  padding-right: 25px;
}

.header-name {
  margin-right: 50px;
  font-weight: 650;
  font-size: 25px;
  line-height: 0px;
}

.links {
  height: 100%;
  align-items: center;
  justify-content: center;
}

.avatar {
  margin-left: 10px;
}
</style>
