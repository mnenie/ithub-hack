<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UiButton variant="ghost" class="flex h-9 w-[200px] items-center justify-between border border-zinc-300">
        <div class="mr-4 flex items-center">
          <Avatar class="mr-2 h-5 w-5">
            <AvatarFallback>1a</AvatarFallback>
          </Avatar>
          <span class="w-28 overflow-hidden text-ellipsis whitespace-nowrap"> 1alexpeshkov@gmail.com</span>
        </div>
        <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
      </UiButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[200px]">
      <DropdownMenuLabel class="flex w-full items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap">
        1alexpeshkov@gmail.com
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
