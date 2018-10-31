"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("./register");
const login_1 = require("./login");
const fetch_1 = require("./fetch");
const update_1 = require("./update");
const remove_1 = require("./remove");
exports.user = {
    register: register_1.register,
    login: login_1.login,
    fetch: fetch_1.fetch,
    update: update_1.update,
    remove: remove_1.remove
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9kYi91c2VyL29wZXJhdGlvbnMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FwcGludmVudGl2cmgtMDU4L0FzaGlzaC13b3JrL3JjYy9hcGkvZGIvdXNlci9vcGVyYXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLG1DQUFnQztBQUNoQyxtQ0FBZ0M7QUFDaEMscUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVyQixRQUFBLElBQUksR0FBRztJQUNoQixRQUFRLEVBQVIsbUJBQVE7SUFDUixLQUFLLEVBQUwsYUFBSztJQUNMLEtBQUssRUFBTCxhQUFLO0lBQ0wsTUFBTSxFQUFOLGVBQU07SUFDTixNQUFNLEVBQU4sZUFBTTtDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXInO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuL2xvZ2luJztcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAnLi9mZXRjaCc7XG5pbXBvcnQgeyB1cGRhdGUgfSBmcm9tICcuL3VwZGF0ZSc7XG5pbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuL3JlbW92ZSc7XG5cbmV4cG9ydCBjb25zdCB1c2VyID0ge1xuICAgIHJlZ2lzdGVyLFxuICAgIGxvZ2luLFxuICAgIGZldGNoLFxuICAgIHVwZGF0ZSxcbiAgICByZW1vdmVcbn07Il19