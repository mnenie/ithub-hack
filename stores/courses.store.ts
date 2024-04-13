import CourseService from '~/services/CourseService';

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref<Course[]>([]);
  const course = ref({} as Course);

  const getCourses = async () => {
    try {
      const response = await CourseService.getAllCourses();
      courses.value = response.data;
      return courses.value;
    } catch (err) {
      console.log(err);
    }
  };

  const getCourseById = async (id: string) => {
    const response = await CourseService.getCourseById(id);
    course.value = response.data;
  };

  onMounted(async () => {
    await getCourses();
  });

  return {
    courses,
    course,
    getCourses,
    getCourseById
  };
});
