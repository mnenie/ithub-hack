export const useEventsStore = defineStore('events', () => {
  const events = ref<EventList[]>([
    {
      id: '1',
      title: 'Познакомимся ?',
      description: 'Мероприятие от нашего вуза которое позволит тебе найти новый знакомства и группы',
      img: 'https://pstu.ru/files/2/image/2022/oso/to1.jpg'
    },
    {
      id: '2',
      title: 'Выбираем главу студсоюза ИПТИП',
      description: 'Мероприятие наточено на разумный выбор нового главы студсоюза',
      img: 'https://mguu.ru/wp-content/uploads/2024/03/SHkoly-studencheskogo-nauchnogo-obshhestva-20.02.2024-23.webp'
    }
  ]);

  return {
    events
  };
});
