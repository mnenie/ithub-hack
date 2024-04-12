<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const tabs = ref([
    {id: "1", photoURL:"/images/moon.png", title: "Как попасть на луну", content: "Статья о том как попасть на луну"},
    {id: "2", photoURL:"/images/gaming.jpg", title: "Геймификация в онлайн-образовани", content: "Статья о геймификация в онлайн-образовании"},
    {id: "3", photoURL:"/images/Python.png", title: "Язык программирования Python", content: "Статья об языке программирования Python"},
    {id: "4", photoURL:"/images/startap.jpg", title: "Сам себе стартапер", content: "Статья о стартапах"},
    {id: "5", photoURL:"/images/paris.jpg", title: "Хочу в Париж", content: "Статья о том как попасть в Париж"},
    {id: "6", photoURL:"/images/society.jpg", title: "Теория и практика связей с общественностью", content: "Статья о теории и практики связей с общественностью"},
]);
</script>


<template>
        <div class="box">
            <h5 class="courses-title">190+ бесплатных онлайн-курсов. От школьной математики и зоологии до латыни и экономики</h5>
            <div class="courses-container">
                <Card class="w-full card" v-for="tab in tabs" :key="tab.id">
                    <div class="photo">
                        <img class="photo-img" :src="tab.photoURL" alt="">
                    </div>
                    <CardHeader>
                        <CardTitle>{{ tab.title }}</CardTitle>
                        <CardDescription>{{ tab.content }}</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
</template>

<style scoped>

.box {
  background-color: #fff;
  border: 1px solid rgba(196, 196, 196, 0.5);
  margin-top: 30px;
  text-align: center;
  max-width: fit-content;
  border-radius: 10px;
  padding: 20px;
}

.courses-title {
  text-align: left; 
  margin-bottom: 20px;
}

.courses-container {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
    width: 100%; 
    margin-bottom: 20px;
}

.photo{
    width: 100%;
    height: 250px;
    position: relative;
    border-radius: 10px 10px 0 0;
}

.photo-img{
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    border-radius: 10px 10px 0 0;
}

.card{
    cursor: pointer;
    transition: 0.15s ease-in;
}

.card:hover{
    transform: scale(1.02);
}

</style>