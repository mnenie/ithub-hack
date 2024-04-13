import EventService from '~/services/EventService';

export const useEventsStore = defineStore('events', () => {
  const events = ref<EventList[]>([]);

  const getEvents = async () => {
    try {
      const response = await EventService.getAllEvents();
      events.value = response.data;
      return events.value;
    } catch (err) {
      console.log(err);
    }
  };

  onMounted(async () => {
    await getEvents();
  });
  return {
    events,
    getEvents
  };
});
