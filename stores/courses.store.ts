export const useCoursesStore = defineStore('courses', () => {
  const courses = ref<Course[]>([
    {
      id: '1',
      photoURL: '/images/moon.png',
      title: 'Как попасть на луну',
      content: 'Статья о том как попасть на луну'
    },
    {
      id: '2',
      photoURL: '/images/gaming.jpg',
      title: 'Геймификация в онлайн-образовании',
      content: 'Статья о геймификация в онлайн-образовании'
    },
    {
      id: '3',
      photoURL: '/images/Python.png',
      title: 'Язык программирования Python',
      content: 'Статья об языке программирования Python'
    },
    { id: '4', photoURL: '/images/startap.jpg', title: 'Сам себе стартапер', content: 'Статья о стартапах' },
    {
      id: '5',
      photoURL: '/images/paris.jpg',
      title: 'Хочу в Париж',
      content: 'Статья о том как попасть в Париж'
    },
    {
      id: '6',
      photoURL: '/images/society.jpg',
      title: 'Теория и практика связей с общественностью',
      content: 'Статья о теории и практики связей с общественностью'
    }
  ]);

  return {
    courses
  };
});
