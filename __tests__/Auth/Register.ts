import supertest from "supertest";

let Route = supertest("http://127.0.0.1:5100/api");

it("Register new user", async () => {
  await Route.post("/register")
    .set("Content-type", "application/json")
    .send({
      email: "chukemeka@gmail.com",
      password: "password",
    })
    .expect(200)
    .expect((response) => {
      expect(response.body["payload"]["data"]["token"]).toBeTruthy();
      expect(response.body["payload"]["data"]["id"]).toBe(4);
      expect(response.body["payload"]["data"]["username"]).toBe("chukemeka");
      expect(response.body["payload"]["data"]["email"]).toBe("chukemeka@gmail.com");
    });
});
