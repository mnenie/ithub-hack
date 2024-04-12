type ChatCompletionRequestMessage = {
  role: 'user' | 'assistant';
  text: string;
};

type Course = {
  id: string;
  photoURL: string;
  title: string;
  content: string;
  roadmapphotoURL?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

type Canteens = {
  id: string;
  name: string;
  content: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

type Docs = {
  courses: Array<Course>;
};
