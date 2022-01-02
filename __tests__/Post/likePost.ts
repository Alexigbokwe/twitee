import supertest from "supertest";

let Route = supertest("http://127.0.0.1:5100/api/post");
let token: string = "";

it("Like a post", async () => {
  await Route.patch("/like")
    .set("Content-type", "application/json")
    .set("Authorization", token)
    .send({
      post_id: 1,
      author: 2,
    })
    .expect(200)
    .then((response) => {
      expect(response.body).toBeTruthy();
      expect(response.body["payload"]).toBeTruthy();
    });
});
