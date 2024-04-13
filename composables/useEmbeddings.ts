export default function useEmbedding(courses: Course[], canteens: Canteen[], events: EventList[], text: Ref<string>) {
  const usePostEmbedding = async () => {
    try {
      const { data } = await useFetch('/api/embedding', {
        method: 'POST',
        body: {
          courses: courses,
          canteens: canteens,
          events: events,
          text: text.value
        }
      });
      return data.value;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    usePostEmbedding
  };
}
