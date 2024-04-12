<script setup lang="ts">
useSeoMeta({
  title: 'Build-in AI для сервиса IThub'
});

const model = ref('');

const messages = ref<ChatCompletionRequestMessage[]>([]);

const { courses } = storeToRefs(useCoursesStore());

const { usePostConversations } = useConversations(courses.value, model);

const handleSubmit = async () => {
  const response = await usePostConversations();
  messages.value = response;
};
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0">
    <div class="relative flex h-full w-full flex-col justify-end self-end px-96">
      <div class="flex w-full flex-col items-center justify-center">
        {{ messages }}
        <AiMessage @on-submit="handleSubmit" v-model="model" />
      </div>
    </div>
  </div>
</template>
