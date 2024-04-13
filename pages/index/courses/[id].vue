<template>
  <div class="course-page">
    <div class="course-banner">
      <img src="../../public/images/gaming.jpg" class="gaiming" />
    </div>

    <div class="course-details">
      <div class="description">
        <h2>Описание курса</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus commodi eveniet, officiis
          corrupti sint iure rerum modi fugit, earum blanditiis explicabo quae aliquid labore voluptatibus at
          dolores tenetur eius, nobis esse numquam sit molestias amet. Magni similique dolor rerum voluptas
          dicta eos cum odit, laborum, qui enim tempora? Maxime, quisquam.
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
</template>

<style scoped>
.course-page {
  display: flex;
}

.course-banner {
}

.gaiming {
  height: 600px;
  width: 1000px;
}

.course-details {
  padding: 20px;
  width: 65%;
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

/* Дополнительные стили для оформления */
</style>
