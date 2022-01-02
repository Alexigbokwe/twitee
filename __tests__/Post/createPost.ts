import supertest from "supertest";

let Route = supertest("http://127.0.0.1:5100/api/post");
let token: string = "";

it("Create new post", async () => {
  await Route.post("/save")
    .set("Content-type", "application/json")
    .set("Authorization", token)
    .send({
      post_author: "1",
      post: "Welcome to 2022, happy new year",
    })
    .expect(200)
    .then((response) => {
      expect(response.body).toBeTruthy();
      expect(response.body["payload"]).toBeTruthy();
    });
});
