"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const db_1 = require("../../db");
const response_1 = require("../../data/response");
const schema = joi.object().keys({
    username: joi.string().required().email()
});
function forgot(req, res, next) {
    joi.validate(req.body, schema).then((data) => {
        db_1.admin.forgot(data.username).then((result) => {
            res.status(result.status).json({ message: result.message });
        }).catch(() => {
            res.status(500).send({ message: response_1.response.INTERNAL_ERROR });
        });
    }).catch(({ details }) => {
        res.status(400).json({ message: details[0].message.split('"').join('') });
    });
}
exports.forgot = forgot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9jb250cm9sbGVycy9hZG1pbi9mb3Jnb3QudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FwcGludmVudGl2cmgtMDU4L0FzaGlzaC13b3JrL3JjYy9hcGkvY29udHJvbGxlcnMvYWRtaW4vZm9yZ290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxrREFBK0M7QUFFL0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztJQUM3QixRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRTtDQUM1QyxDQUFDLENBQUM7QUFFSCxnQkFBdUIsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUNsRSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDekMsVUFBSyxDQUFDLE1BQU0sQ0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxtQkFBUSxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUU7UUFDbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCx3QkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgam9pIGZyb20gJ2pvaSc7XG5pbXBvcnQgeyBhZG1pbiB9IGZyb20gJy4uLy4uL2RiJztcbmltcG9ydCB7IHJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vZGF0YS9yZXNwb25zZSc7XG5cbmNvbnN0IHNjaGVtYSA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICB1c2VybmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCkuZW1haWwoKVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3Jnb3QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICBqb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBhZG1pbi5mb3Jnb3TigIvigIsoZGF0YS51c2VybmFtZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKHJlc3VsdC5zdGF0dXMpLmpzb24oe21lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlfSk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiByZXNwb25zZS5JTlRFUk5BTF9FUlJPUn0pO1xuICAgICAgICB9KTtcbiAgICB9KS5jYXRjaCgoe2RldGFpbHN9KSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOiBkZXRhaWxzWzBdLm1lc3NhZ2Uuc3BsaXQoJ1wiJykuam9pbignJyl9KTtcbiAgICB9KTtcbn0iXX0=