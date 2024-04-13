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
  _id: string;
  photoURL: string;
  title: string;
  content: string;
  description: string;
  roadmapphotoURL?: string;
}

interface Canteen extends DateParams {
  _id: string;
  name: string;
  content: string;
  location: string;
}

interface EventList extends DateParams {
  _id: string;
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
