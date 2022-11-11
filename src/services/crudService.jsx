const data = "_DATA";

const SaveService = () => {
  return {
    save: (userData) => {
      let localStorageData = localStorage.getItem(data);

      !localStorageData
        ? (localStorageData = [])
        : (localStorageData = JSON.parse(localStorageData));

      localStorageData.push(userData);

      localStorage.setItem(data, JSON.stringify(localStorageData));
    },

    //Next method: () => {}
  };
};

export default SaveService;
