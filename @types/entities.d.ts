type ChatCompletionRequestMessage = {
  role: 'user' | 'assistant';
  text: string;
};

interface DateParams {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface Course extends DateParams {
  id: string;
  photoURL: string;
  title: string;
  content: string;
  roadmapphotoURL?: string;
}

interface Canteen extends DateParams {
  id: string;
  name: string;
  content: string;
  location: string;
}

interface EventList extends DateParams {
  id: string;
  title: string;
  description: string;
  img: string;
}

type Docs = {
  courses: Array<Course>;
  canteens: Array<Canteen>;
  events: Array<EventList>;
};

type MostSimilarDoc = Course | Canteen | EventList;
