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

interface Canteens extends DateParams {
  id: string;
  name: string;
  content: string;
  location: string;
}

interface EventsList extends DateParams {
  id: string;
  title: string;
  description: string;
  img: string;
}

type Docs = {
  courses: Array<Course>;
};
