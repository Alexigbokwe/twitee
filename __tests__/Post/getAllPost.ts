import supertest from "supertest";

let Route = supertest("http://127.0.0.1:5100/api/post");
let token: string = "";

it("Get all posts", async () => {
  await Route.get("/all")
    .set("Content-type", "application/json")
    .set("Authorization", token)
    .expect(200)
    .then((response) => {
      expect(response.body).toBeTruthy();
      expect(response.body["payload"]).toBeTruthy();
    });
});
