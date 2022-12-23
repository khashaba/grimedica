describe("Booking Form", () => {
  const baseUrl = "https://gorest.co.in/public/v2";
  const token =
    "a4fa0e531d916bad1dc7cda836ce7eea617dfb1d293576c75bc0a521e50f2bd3";
  const user = {
    name: `Ahmed Hassan"${Date.now()}`,
    gender: "male",
    email: `ahmed.hassan${Date.now()}@15ce.com`,
    status: "active",
  };
  let userId;
  it("Get All users", () => {
    cy.request("GET", `${baseUrl}/users`).then((response) => {
      expect(response.status).to.eq(200);
      // but for consistancy we should seed the database first
      expect(response.body.length).to.eq(10);
    });
  });

  it("Post a user", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: { Accept: "application/json", authorization: `Bearer ` + token },
      body: user,
    }).then((response) => {
      userId = response.body.id;
      expect(response.status).to.eq(201);
      expect(response.body.name).to.equal(user.name);
    });
  });

  it("Get the newly created user", () => {
    cy.request({
      method: "get",
      url: `${baseUrl}/users/${userId}`,
      headers: { Accept: "application/json", authorization: `Bearer ` + token },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.equal(userId);
      expect(response.body.name).to.equal(user.name);
    });
  });

  it("Delete the newly created user", () => {
    cy.request({
      method: "delete",
      url: `${baseUrl}/users/${userId}`,
      headers: { Accept: "application/json", authorization: `Bearer ` + token },
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.equal("");
    });
    // should fail to get that user
    cy.request({
      method: "get",
      url: `${baseUrl}/users/${userId}`,
      headers: { Accept: "application/json", authorization: `Bearer ` + token },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
