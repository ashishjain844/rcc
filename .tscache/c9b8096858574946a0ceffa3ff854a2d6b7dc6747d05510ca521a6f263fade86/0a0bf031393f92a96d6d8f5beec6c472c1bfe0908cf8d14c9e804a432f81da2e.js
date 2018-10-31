"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const SALT_WORK_FACTOR = 10;
function hashPassword(password) {
    return new Promise(function (resolve, reject) {
        bcrypt_1.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
            if (saltError)
                return reject(saltError);
            bcrypt_1.hash(password, salt, function (hashError, hash) {
                if (hashError)
                    return reject(hashError);
                resolve(hash);
            });
        });
    });
}
exports.hashPassword = hashPassword;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS91dGlscy9oYXNoLXBhc3N3b3JkLnRzIiwic291cmNlcyI6WyIvaG9tZS9hcHBpbnZlbnRpdnJoLTA1OC9Bc2hpc2gtd29yay9yY2MvYXBpL3V0aWxzL2hhc2gtcGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBdUM7QUFDdkMsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFFNUIsc0JBQTZCLFFBQWdCO0lBQ3pDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUN2QyxnQkFBTyxDQUFDLGdCQUFnQixFQUFFLFVBQVMsU0FBUyxFQUFFLElBQUk7WUFDOUMsSUFBSSxTQUFTO2dCQUFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhDLGFBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVMsU0FBUyxFQUFFLElBQUk7Z0JBQ3pDLElBQUcsU0FBUztvQkFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFaRCxvQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlblNhbHQsIGhhc2ggfSBmcm9tICdiY3J5cHQnO1xuY29uc3QgU0FMVF9XT1JLX0ZBQ1RPUiA9IDEwO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZ2VuU2FsdChTQUxUX1dPUktfRkFDVE9SLCBmdW5jdGlvbihzYWx0RXJyb3IsIHNhbHQpIHtcbiAgICAgICAgICAgIGlmIChzYWx0RXJyb3IpIHJldHVybiByZWplY3Qoc2FsdEVycm9yKTtcbiAgICAgICAgXG4gICAgICAgICAgICBoYXNoKHBhc3N3b3JkLCBzYWx0LCBmdW5jdGlvbihoYXNoRXJyb3IsIGhhc2gpIHtcbiAgICAgICAgICAgICAgICBpZihoYXNoRXJyb3IpIHJldHVybiByZWplY3QoaGFzaEVycm9yKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShoYXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iXX0=