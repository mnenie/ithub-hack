<script setup lang="ts">
useSeoMeta({
  title: 'Build-in AI для сервиса IThub'
});

const model = ref('');

const messages = ref<ChatCompletionRequestMessage[]>([]);

const { courses } = storeToRefs(useCoursesStore());
const { canteens } = storeToRefs(useCanteensStore());
const { events } = storeToRefs(useEventsStore());

const { usePostConversations } = useConversations(courses.value, canteens.value, events.value, model);

const handleSubmit = async () => {
  const response = await usePostConversations();
  model.value = ''
  messages.value.push(response);
};
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0">
    <div class="relative flex h-full w-full flex-col justify-end self-end px-96">
      <div class="flex w-full flex-col items-start justify-center">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex items-center gap-4 mb-8"
          :class="[message.role === 'user' ? 'justify-start' : 'justify-end']"
        >
          <UiAvatar>
            <UiAvatarFallback>{{ message.role === 'user' ? '1a' : 'ai' }}</UiAvatarFallback>
          </UiAvatar>
          <div>
            {{ message.text }}
          </div>
        </div>
        <AiMessage @on-submit="handleSubmit" v-model="model" />
      </div>
    </div>
  </div>
</template>
