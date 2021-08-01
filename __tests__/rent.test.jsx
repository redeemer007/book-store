const rent = require("../routes/rent");
const express = require("express");
const app = express();
const request = require("supertest");
app.use("/", rent);

//Suite describe block
describe("First Suite", () => {
    //runs before every test block or test case
    beforeAll(() => { })
    //runs after every test block or test case
    afterAll(() => { })

    //test block or test case

    test("post rent data", () => {
        request(app).post("/rent").send({
            type: "regular",
            rentalCharge: "1.5"
        }).expect(200, "rental details added!!");
    })
})