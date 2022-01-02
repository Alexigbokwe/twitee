import supertest from "supertest";
let Route = supertest("http://127.0.0.1:5100/api");

it("Test login endpoint", async () => {
  await Route.post("/login")
    .set("Content-type", "application/json")
    .send({ email: "alex@gmail.com", password: "password" })
    .expect(200)
    .expect((response) => {
      expect(response.body["payload"]["data"]["token"]).toBeTruthy();
      expect(response.body["payload"]["data"]["id"]).toBe(3);
      expect(response.body["payload"]["data"]["username"]).toBe("alex");
      expect(response.body["payload"]["data"]["email"]).toBe("alex@gmail.com");
    });
});
