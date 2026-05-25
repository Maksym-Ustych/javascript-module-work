function createApiClient(baseUrl) {
  let requestCount = 0;

  return {
    async get(path) {
      requestCount++;

      try {
        const response = await fetch(baseUrl + path);

        if (!response.ok) {
          throw new Error("Помилка запиту");
        }

        const data = await response.json();
        return data;
      } catch (error) {
        return {
          error: "Запит не вдався"
        };
      }
    },

    getRequestCount() {
      return requestCount;
    }
  };
}

const api = createApiClient("https://jsonplaceholder.typicode.com");

async function testApiClient() {
  const user = await api.get("/users/1");
  console.log(user);

  const posts = await api.get("/posts");
  console.log(posts);

  console.log("Кількість запитів:", api.getRequestCount());
}

testApiClient();