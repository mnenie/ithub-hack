import { getIamToken } from '~/server/utils/auth-gpt';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { text, dists, most_similar_index, most_similar_course } = await readBody(event);

  const token = await getIamToken(config);

  const similarityThreshold = 0.65;
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
              text: `Ты друг студента, его помощник и общайся как друг в сервисе для вуза. Ты помогаешь выбрать студенту подходящий курс из доступных, основываясь на его вопросе. Выводи всегда типо: У нас есть для вас такой курс с названием: ${most_similar_course.title}, он включает:  ${most_similar_course.content}, и не надо тут придумывать того чего нет в курсе. Есть ли у вас еще вопросы?, ну и предоставь пользователю возможно как бы ему справиться со своей проблемой, общайся как друг`
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
    return { role: 'assistant', text: 'Подходящей заметки не найдено, запишите свои идеи в Notium!' };
  }
});