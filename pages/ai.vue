<script setup lang="ts">
import { marked } from 'marked';

useSeoMeta({
  title: 'Build-in AI для сервиса IThub'
});

const model = ref('');
const userMessage: { role: "user"; text: string; } = { role: "user", text: "" };

const messages = ref<ChatCompletionRequestMessage[]>([]);

const { courses } = storeToRefs(useCoursesStore());
const { canteens } = storeToRefs(useCanteensStore());
const { events } = storeToRefs(useEventsStore());

const { usePostConversations } = useConversations(courses.value, canteens.value, events.value, model);

const handleSubmit = async () => {
  userMessage.text = model.value;
  messages.value.push(userMessage); 
  const response = await usePostConversations();
  messages.value.push(response);
  model.value = ''
};
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0">
    <div class="relative flex h-full w-full flex-col justify-end self-end px-96">
      <div class="flex w-full flex-col items-start justify-center">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="mb-8 flex items-center gap-4"
        >
          <UiAvatar>
            <UiAvatarFallback>{{ message && message.role === 'user' ? '1a' : 'ai' }}</UiAvatarFallback>
          </UiAvatar>
          <div v-html="message && message.text"></div>
        </div>
        <AiMessage @on-submit="handleSubmit" v-model="model" />
      </div>
    </div>
  </div>
</template>
