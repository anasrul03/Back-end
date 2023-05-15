// import fetch from "node-fetch";

async function fetchData() {
  // const baseUrl = "https://jsonplaceholder.typicode.com/todos/1";
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);

  return json;
}

describe("fetchData", () => {
  it("fetches data from an API", async () => {
    const data = await fetchData();
    expect(data).toHaveProperty("title");
  });
});
