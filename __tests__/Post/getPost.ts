import supertest from "supertest";

let Route = supertest("http://127.0.0.1:5100/api/post");
let token: string = "";

it("Get a post", async () => {
  await Route.get("/get/1")
    .set("Content-type", "application/json")
    .set("Authorization", token)
    .expect(200)
    .then((response) => {
      expect(response.body).toBeTruthy();
      expect(response.body["payload"]).toBeTruthy();
    });
});
