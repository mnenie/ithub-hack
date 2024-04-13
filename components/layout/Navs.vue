<script setup lang="ts">
const tabs = ref([
  { id: 0, active: true, name: 'Курсы', route: HOME_ROUTE },
  { id: 1, active: false, name: 'Столовые', route: CANTEENS_ROUTE },
  { id: 2, active: false, name: 'Вузовский чат', route: CHAT_ROUTE },
  { id: 3, active: false, name: 'Мероприятия', route: EVENTS_ROUTE },
  { id: 4, active: false, name: 'IThub Ai', route: AI_ROUTE }
]);

const changeActiveTab = (id: number) => {
  tabs.value.map((btn, i) => {
    btn.active = i === id;
    if (btn.active) {
      navigateTo(btn.route);
    }
  });
};
</script>

<template>
  <div class="px-10">
    <h1 class="dashboard-title">Навигационная панель</h1>
    <div class="box">
      <div class="buttons-container">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="{ active_tab: tab.active }"
          @click="changeActiveTab(tab.id)"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-title {
  font-weight: bold;
  font-size: 24px;
  color: black;
  margin-top: 40px;
}

.box {
  background-color: #f0f0f0;
  border: none;
  margin-top: 15px;
  text-align: center;
  max-width: fit-content;
  border-radius: 10px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.box button {
  padding: 5px;
  background-color: transparent;
  color: #858585;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  transition: all 0.3s ease;
}

.box .active_tab {
  background-color: white;
  color: black;
}
</style>
