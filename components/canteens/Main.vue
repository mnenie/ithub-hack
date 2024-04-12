<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Circle } from 'lucide-vue-next';

const { canteens } = storeToRefs(useCanteensStore())
</script>


<template>
  <div class="box">
    <div class="courses-container">
      <Card class="w-[300px]" v-for="canteen in canteens" :key="canteen.id">
        <CardHeader>
          <CardTitle>{{ canteen.name }}</CardTitle>
          <CardDescription>{{ canteen.content }}</CardDescription>
        </CardHeader>
        <CardContent class="p-4 pt-1">
          <div class="flex items-center justify-center">
            <span class="text-xs text-zinc-500">{{ canteen.location }}</span>
          </div>
        </CardContent>
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
  display: flex;
  justify-content: flex-start;
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
</style>