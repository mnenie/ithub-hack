<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const { courses } = storeToRefs(useCoursesStore());

</script>
<template>
  <div class="course-page">
    <div class="top-part">
      <div class="course-banner">
        <img src="/images/gaming.jpg" class="gaiming" />
      </div>

      <div class="course-details">
        <div class="description">
          <h2>Описание курса</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus commodi eveniet, officiis
            corrupti sint iure rerum modi fugit, earum blanditiis explicabo quae aliquid labore voluptatibus
            at dolores tenetur eius, nobis esse numquam sit molestias amet. Magni similique dolor rerum
            voluptas dicta eos cum odit, laborum, qui enim tempora? Maxime, quisquam.
          </p>
        </div>

        <div class="info">
          <h2>Информация о курсе</h2>
          <ul>
            <li><strong>Стоимость:</strong> $99</li>
            <li><strong>Количество довольных клиентов:</strong> 1000+</li>
            <li><strong>Продолжительность:</strong> 10 часов</li>
            <li><strong>Ключевые темы:</strong> Тема 1, Тема 2, Тема 3, ...</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="courses-section">
      <h2>Наши другие курсы</h2>
      <div class="box">
        <div class="courses-container">
          <Card class="card w-full" v-for="course in courses" :key="course.id">
            <div class="photo">
              <img class="photo-img" :src="course.photoURL" alt="" />
            </div>
            <CardHeader>
              <CardTitle>{{ course.title }}</CardTitle>
              <CardDescription>{{ course.content }}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-page {
}

.course-banner {
}

.top-part {
  display: flex;
}

.gaiming {
  height: 600px;
  width: 1000px;
}

.course-details {
  padding: 20px;
  width: 80%;
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

.box {
  background-color: #fff;

  margin-top: 30px;
  text-align: center;
  max-width: fit-content;
  border-radius: 10px;
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
    height: 200px;
  }
}
</style>
