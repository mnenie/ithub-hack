import useCourses from "~/composables/useCourses";

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref<Course[]>([])

  const {getCourses, getCourseById} = useCourses()

  const getCoursesStore = async () => {
    try{
      const creds = await getCourses()
      courses.value = creds
      return courses.value
    }
    catch(err) {
      console.log(err)
    }
  }

  onBeforeMount(async () => {
    await getCoursesStore()
  })

  return {
    courses, getCoursesStore
  };
});
