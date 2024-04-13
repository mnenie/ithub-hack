export default function useConversation(courses: Course[], canteens: Canteen[], events: EventList[], text: Ref<string>) {
  const { usePostEmbedding } = useEmbeddings(courses, canteens, events, text);
  const usePostConversations = async () => {
    const embeddings = await usePostEmbedding();
    try {
      const { data } = await useFetch('/api/conversation', {
        method: 'POST',
        body: {
          text: text.value,
          dists: embeddings?.dists,
          most_similar_index: embeddings?.index,
          //@ts-ignore
          most_similar_doc: embeddings?.doc
        }
      });
      return data.value;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    usePostConversations
  };
}
