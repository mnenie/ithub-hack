<script setup lang="ts">
import { marked } from 'marked';
const route = useRoute();

const courseStore = useCoursesStore();
const { course } = storeToRefs(courseStore);

onMounted(() => {
  courseStore.getCourseById(route.params.id as string);
});

const markdownToHtml = computed(() => {
  if(course.value.content && course.value){
    return marked.parse(course.value.content);
  }
});
</script>
<template>
  <div class="course-page">
    <div class="top-part mt-10">
      <div :style="{ backgroundImage: `url(${course.photoURL})` }" class="banner"></div>
      <div class="course-details flex items-start space-x-6 justify-between">
        <div class="description">
          <h2 class="text-xl font-bold">{{ course.title }}</h2>
          <div v-html="markdownToHtml"></div>
        </div>
        <div class="w-2/3">
           <img :src="course.roadmapphotoURL" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-part {
  display: flex;
  flex-direction: column;
}

.banner {
  min-height: 300px;
  overflow: hidden;
  border-radius: 10px;
  background-size: cover;
  position: relative;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: top -250px right 0;
}
.banner::after {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.001);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.course-details {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.description {
  flex: 1;
}

.info {
  flex: 1;
}

h2 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

.courses-section {
  text-align: center;
  margin-top: 50px;
}

.courses-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.course {
  width: 350px;
  height: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.course img {
  max-width: 100%;
}
</style>
