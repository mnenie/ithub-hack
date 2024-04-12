<script setup lang="ts">
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
  <DropdownMenu dir="ltr">
    <DropdownMenuTrigger as-child>
      <UiButton variant="ghost" class="flex h-9 w-[236px] items-center justify-between">
        <div class="mr-4 flex items-center">
            <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
         
        </div>
        
      </UiButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[236px]" :align="'center'">
      <DropdownMenuLabel
        class="flex w-full items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap"
      >
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem >
          <span>Go to Welcome</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>