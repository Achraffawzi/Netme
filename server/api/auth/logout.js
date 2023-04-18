export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    try {
      const { access_token } = parseCookies(event);
      if (!access_token) {
        reject("Logout rejected!");
        return;
      }
      deleteCookie(event, "access_token");
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
});
