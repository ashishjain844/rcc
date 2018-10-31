"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const db_1 = require("../../db");
const response_1 = require("../../data/response");
const registerDataSchema = joi.object().keys({
    name: joi.string().required(),
    username: joi.string().email().required(),
    password: joi.string().required(),
    dob: joi.date().required()
});
function register(req, res, next) {
    const result = joi.validate(req.body, registerDataSchema);
    if (result.error) {
        return res.status(400).send({ message: result.error.details[0].message.split('"').join('') });
    }
    db_1.user.register(result.value).then(function (result) {
        res.status(result.status).send({ message: result.message });
    }).catch(function (error) {
        res.status(500).send({ message: response_1.response.INTERNAL_ERROR });
    });
}
exports.register = register;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9jb250cm9sbGVycy91c2VyL3JlZ2lzdGVyLnRzIiwic291cmNlcyI6WyIvaG9tZS9hcHBpbnZlbnRpdnJoLTA1OC9Bc2hpc2gtd29yay9yY2MvYXBpL2NvbnRyb2xsZXJzL3VzZXIvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQkFBMkI7QUFDM0IsaUNBQStCO0FBQy9CLGtEQUErQztBQUUvQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDekMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDekMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDakMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDN0IsQ0FBQyxDQUFDO0FBR0gsa0JBQXlCLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDcEUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7S0FDL0Y7SUFDRCxTQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNO1FBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBUyxLQUFLO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLG1CQUFRLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCw0QkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgam9pIGZyb20gJ2pvaSc7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi4vLi4vZGInXG5pbXBvcnQgeyByZXNwb25zZSB9IGZyb20gJy4uLy4uL2RhdGEvcmVzcG9uc2UnO1xuXG5jb25zdCByZWdpc3RlckRhdGFTY2hlbWEgPSBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgdXNlcm5hbWU6IGpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgIGRvYjogam9pLmRhdGUoKS5yZXF1aXJlZCgpXG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICBjb25zdCByZXN1bHQgPSBqb2kudmFsaWRhdGUocmVxLmJvZHksIHJlZ2lzdGVyRGF0YVNjaGVtYSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoe21lc3NhZ2U6IHJlc3VsdC5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2Uuc3BsaXQoJ1wiJykuam9pbignJyl9KTtcbiAgICB9XG4gICAgdXNlci5yZWdpc3RlcihyZXN1bHQudmFsdWUpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJlcy5zdGF0dXMocmVzdWx0LnN0YXR1cykuc2VuZCh7bWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2V9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogcmVzcG9uc2UuSU5URVJOQUxfRVJST1J9KTtcbiAgICB9KTtcbn0iXX0=