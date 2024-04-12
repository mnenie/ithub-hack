export default function useEmbedding(courses: Course[], text: Ref<string>) {
  const usePostEmbedding = async () => {
    try {
      const { data } = await useFetch('/api/embedding', {
        method: 'POST',
        body: {
          courses: courses,
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
