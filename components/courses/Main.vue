<script setup lang="ts">
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const courseStore = useCoursesStore()
const { courses } = storeToRefs(courseStore);
</script>

<template>
  <div class="box">
    <div class="courses-container">
      <Card class="card w-full" v-for="course in courses" :key="course._id" @click="navigateTo(`/courses/${course._id}`)">
        <div class="photo">
          <img class="photo-img" :src="course.photoURL" alt="" />
        </div>
        <CardHeader>
          <CardTitle>{{ course.title }}</CardTitle>
          <CardDescription class="text-ellipsis">{{ course.description }}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: #fff;
  /* border: 1px solid rgba(196, 196, 196, 0.5); */
  margin-top: 30px;
  text-align: center;
  max-width: fit-content;
  border-radius: 10px;
  /* padding: 20px; */
}

.courses-title {
  text-align: left;
  margin-bottom: 20px;
}

.courses-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
  margin-bottom: 20px;
}

.photo {
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 10px 10px 0 0;
}

.photo-img {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  border-radius: 10px 10px 0 0;
}

.card {
  cursor: pointer;
  transition: 0.15s ease-in;
}

.card:hover {
  transform: scale(1.02);
}

@media screen and (max-width: 1665px) {
  .courses-container {
    grid-template-columns: repeat(4, 1fr);
  }

  .photo {
    height: 180px;
  }
}
</style>
