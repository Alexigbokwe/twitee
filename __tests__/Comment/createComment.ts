import supertest from "supertest";

let Route = supertest("http://127.0.0.1:5100/api/comment");

let token: string =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGV4IiwiZW1haWwiOiJhbGV4QHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDJJS0ROS3JyOVdGRWl1aVNtSUpnOXU0UWowdHJaZ1ZtZEY5aS9FNENKbnB1NFJsLkFMQzl1IiwiY3JlYXRlZF9hdCI6IjIwMjItMDEtMDFUMTk6MTY6MjUuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIyLTAxLTAxVDE5OjE2OjI1LjAwMFoiLCJpYXQiOjE2NDExMzU2NTQsImV4cCI6MTY0MTIyMjA1NH0.q0Pl9JdzO9OltdY93tbzrrsCF-dJivDKe_I_5MOwOkw";

it("Create new comment", async () => {
  await Route.post("/save")
    .set("Content-type", "application/json")
    .set("Authorization", token)
    .send({
      post_id: 1,
      comment_author: 1,
      comment: "see you at the top",
    })
    .expect(200)
    .then((response) => {
      expect(response.body).toBeTruthy();
      expect(response.body["payload"]).toBeTruthy();
    });
});
