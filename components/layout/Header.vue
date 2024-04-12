<template>
<header
    class="sticky top-0 z-50 w-full border-b border-[#e4e4e766]/40 bg-[#fff9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60">
    <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div class="left-section">
            <h1 class="header-name">Название</h1>
            <div class="links">
                <a href="#" class="header-text">О проекте</a>
                <a href="#" class="header-text">Поддержка</a>
            </div>
        </div>
      <div class="right-section">
        <LayoutUserAvatar></LayoutUserAvatar>
      </div>

    </div>
</header>

  </template>
  
  <script setup lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
  </script>
  
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
  