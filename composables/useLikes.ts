export const useLikes = () => {
  const getTotalLikesByPostId = (id: string): Promise<number> => {
    const { $axiosPublic } = useNuxtApp();

    return new Promise(async (resolve, reject) => {
      try {
        const totalLikes: Awaited<ReturnType<typeof getTotalLikesByPostId>> =
          await $axiosPublic.post(`/likes/${id}`);
        resolve(totalLikes);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getTotalLikesByPostId,
  };
};
