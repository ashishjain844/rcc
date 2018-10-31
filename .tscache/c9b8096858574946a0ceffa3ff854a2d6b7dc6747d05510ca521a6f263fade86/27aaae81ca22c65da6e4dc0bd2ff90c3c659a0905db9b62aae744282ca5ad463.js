"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
    res.render("index");
});
const user_1 = require("./user");
router.use("/user", user_1.default);
const admin_1 = require("./admin");
router.use("/admin", admin_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9yb3V0ZXMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FwcGludmVudGl2cmgtMDU4L0FzaGlzaC13b3JrL3JjYy9hcGkvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBR25DLE1BQU0sTUFBTSxHQUFXLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUV4QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILGlDQUEwQjtBQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFJLENBQUMsQ0FBQztBQUUxQixtQ0FBNEI7QUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZUFBSyxDQUFDLENBQUM7QUFFNUIsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCByb3V0ZXI6IFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoXCIvXCIsIGZ1bmN0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKXtcblx0cmVzLnJlbmRlcihcImluZGV4XCIpO1xufSk7XG5cbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5yb3V0ZXIudXNlKFwiL3VzZXJcIiwgdXNlcik7XG5cbmltcG9ydCBhZG1pbiBmcm9tICcuL2FkbWluJztcbnJvdXRlci51c2UoXCIvYWRtaW5cIiwgYWRtaW4pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19