export const useCanteensStore = defineStore('canteens', () => {
  const canteens = ref([
    {
      id: '1',
      name: 'Столовая № 1',
      content: 'Вкусная выпечка и бутерброды',
      location: 'Столовая на первом этаже корпуса А'
    },
    {
      id: '2',
      name: 'Столовая № 2',
      content: 'Азиатская кухня',
      location: 'Столовая на втором этаже корпуса В'
    },
    {
      id: '3',
      name: 'Столовая № 3',
      content: 'Фастфуд, мороженное',
      location: 'Столовая на первом этаже корпуса Д'
    }
  ]);

  return {
    canteens
  };
});
