import { getIamToken } from '~/server/utils/auth-gpt';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { text, dists, most_similar_index, most_similar_doc } = await readBody(event);

  const token = await getIamToken(config);

  const similarityThreshold = 0.6;
  if (dists[most_similar_index] < similarityThreshold) {
    const response_completion = await fetch(
      'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-folder-id': config.YANDEX_FOLDER_ID
        },
        body: JSON.stringify({
          modelUri: `gpt://${config.YANDEX_FOLDER_ID}/yandexgpt`,
          completionOptions: {
            stream: false,
            temperature: 0.2,
            maxTokens: '8000'
          },
          messages: [
            {
              role: 'system',
              text: `Ты друг студента для приложения вузовского сайта. Ты помогаешь студентам найти ответы на вузовские вопросы. Также ты обладаешь информацией о существующих курсах, столовых и вопросах. Выводи всегда типо: У нас есть такой курс/столовая/вопрос в зависимости от, того что в запросе, с названием: ${most_similar_doc.title}, и он содержит, ${most_similar_doc.content}.Есть ли у вас еще вопросы?, ну и представь пользователю возможно какие то твои советы`
            },
            {
              role: 'user',
              text
            }
          ]
        })
      }
    );

    const response_completionData = await response_completion.json();
    return response_completionData.result.alternatives[0].message;
  } else {
    return { role: 'assistant', text: 'Подходящего ответа я вам дать не могу, потому что такой информацией я не располагаю :/' };
  }
});