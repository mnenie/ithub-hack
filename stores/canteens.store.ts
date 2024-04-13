import CanteenService from '~/services/CanteenService';

export const useCanteensStore = defineStore('canteens', () => {
  const canteens = ref<Canteen[]>([]);

  const getCanteens = async () => {
    try {
      const response = await CanteenService.getAllCanteens();
      canteens.value = response.data;
      return canteens.value;
    } catch (err) {
      console.log(err);
    }
  };

  onMounted(async () => {
    await getCanteens();
  });
  return {
    canteens,
    getCanteens
  };
});
