const orders = require("../routes/orders");
const express = require("express");
const app = express();
const request = require("supertest");
app.use("/", orders);

//Suite describe block
describe("First Suite", () => {
    //runs before every test block or test case
    beforeAll(() => { })
    //runs after every test block or test case
    afterAll(() => { })

    //test block or test case
    test("send get response", () => {
        request(app).get("/bill").expect(200, "done");
    })

    test("post order data", () => {
        request(app).post("/orders").send({
            customerId: "CustomerID_1000",
            books: [
                "BookID_1", "BookID_2", "BookID_3"
            ]
        }).expect(200, "order placed!!");
    })

    test("update order data", () => {
        request(app).put("/orders").send({
            customerId: "CustomerID_1000",
            books: [
                "BookID_1", "BookID_2"
            ]
        }).expect(200, "order updated!!");
    })
})