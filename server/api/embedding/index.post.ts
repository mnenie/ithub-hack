import { cosineDistance, getRefreshToken } from '~/server/utils';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { text, courses, canteens, events } = await readBody(event);

  const token = await getRefreshToken(config);

  const doc_uri = `emb://${config.YANDEX_FOLDER_ID}/text-search-doc/latest`;
  const query_uri = `emb://${config.YANDEX_FOLDER_ID}/text-search-query/latest`;

  let doc_texts: string[] = [];
  
  doc_texts = [
    ...(courses as Course[]).map((course) => course.content),
    ...(canteens as Canteen[]).map((canteen) => canteen.content),
    ...(events as EventList[]).map((event) => event.description)
  ];

  const docs_embedding = [];
  for (const doc_text of doc_texts) {
    const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/textEmbedding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'x-folder-id': config.YANDEX_FOLDER_ID
      },
      body: JSON.stringify({
        modelUri: doc_uri,
        text: doc_text
      })
    });

    const responseData = await response.json();
    const embedding = responseData.embedding;
    docs_embedding.push(embedding);
  }

  const query_response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/textEmbedding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-folder-id': config.YANDEX_FOLDER_ID
    },
    body: JSON.stringify({
      modelUri: query_uri,
      text: text
    })
  });

  const query_responseData = await query_response.json();
  const query_embedding = query_responseData.embedding;

  const dists = docs_embedding.map((doc_embedding) => cosineDistance(query_embedding, doc_embedding));

  const most_similar_index = dists.indexOf(Math.min(...dists));
  let most_similar_doc;

  if (most_similar_index < courses.length) {
    most_similar_doc = courses[most_similar_index];
  } else if (most_similar_index < courses.length + canteens.length) {
    most_similar_doc = canteens[most_similar_index - courses.length];
  } else {
    most_similar_doc = events[most_similar_index - courses.length - canteens.length];
  }

  return {
    dists: dists,
    index: most_similar_index,
    doc: most_similar_doc
  };
});