"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const http_1 = require("http");
const Debug = require("debug");
const debug = Debug('typ-app:server');
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
console.log("Listening on Port : " + port);
/**
 * Create HTTP server.
 */
const server = new http_1.Server(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
// function serverHandler(req: IncomingMessage, res: ServerResponse){
// 	res.end("Hello from server");
// }
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9iaW4vc2VydmVyLnRzIiwic291cmNlcyI6WyIvaG9tZS9hcHBpbnZlbnRpdnJoLTA1OC9Bc2hpc2gtd29yay9yY2MvYXBpL2Jpbi9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBeUI7QUFDekIsK0JBQThCO0FBQzlCLCtCQUErQjtBQUMvQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV0Qzs7R0FFRztBQUVILE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQztBQUN2RCxhQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBRSxDQUFDO0FBRTVDOztHQUVHO0FBRUgsTUFBTSxNQUFNLEdBQVcsSUFBSSxhQUFNLENBQUMsYUFBRyxDQUFDLENBQUM7QUFFdkM7O0dBRUc7QUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBR3BDLHFFQUFxRTtBQUNyRSxpQ0FBaUM7QUFDakMsSUFBSTtBQUtKOztHQUVHO0FBRUgsdUJBQXVCLEdBQVE7SUFDN0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU3QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNmLGFBQWE7UUFDYixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2IsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRDs7R0FFRztBQUVILGlCQUFpQixLQUFVO0lBQzFCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDL0IsTUFBTSxLQUFLLENBQUM7S0FDWjtJQUVELElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUV0RSx1REFBdUQ7SUFDdkQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssUUFBUTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLCtCQUErQixDQUFDLENBQUM7WUFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNO1FBQ1AsS0FBSyxZQUFZO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNO1FBQ1A7WUFDRSxNQUFNLEtBQUssQ0FBQztLQUNiO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBRUg7SUFDQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzRSxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4uL2FwcCc7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIERlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGRlYnVnID0gRGVidWcoJ3R5cC1hcHA6c2VydmVyJyk7XG5cbi8qKlxuICogR2V0IHBvcnQgZnJvbSBlbnZpcm9ubWVudCBhbmQgc3RvcmUgaW4gRXhwcmVzcy5cbiAqL1xuXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJyk7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5jb25zb2xlLmxvZyhcIkxpc3RlbmluZyBvbiBQb3J0IDogXCIgKyBwb3J0ICk7XG5cbi8qKlxuICogQ3JlYXRlIEhUVFAgc2VydmVyLlxuICovXG5cbmNvbnN0IHNlcnZlcjogU2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xuXG4vKipcbiAqIExpc3RlbiBvbiBwcm92aWRlZCBwb3J0LCBvbiBhbGwgbmV0d29yayBpbnRlcmZhY2VzLlxuICovXG5cbnNlcnZlci5saXN0ZW4ocG9ydCk7XG5zZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKTtcblxuXG4vLyBmdW5jdGlvbiBzZXJ2ZXJIYW5kbGVyKHJlcTogSW5jb21pbmdNZXNzYWdlLCByZXM6IFNlcnZlclJlc3BvbnNlKXtcbi8vIFx0cmVzLmVuZChcIkhlbGxvIGZyb20gc2VydmVyXCIpO1xuLy8gfVxuXG5cblxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHBvcnQgaW50byBhIG51bWJlciwgc3RyaW5nLCBvciBmYWxzZS5cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogYW55KSB7XG4gIHZhciBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMCk7XG5cbiAgaWYgKGlzTmFOKHBvcnQpKSB7XG4gICAgLy8gbmFtZWQgcGlwZVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBpZiAocG9ydCA+PSAwKSB7XG4gICAgLy8gcG9ydCBudW1iZXJcbiAgICByZXR1cm4gcG9ydDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJlcnJvclwiIGV2ZW50LlxuICovXG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IGFueSkge1xuXHRpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxuXG5cdHZhciBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnID8gJ1BpcGUgJyArIHBvcnQgOiAnUG9ydCAnICsgcG9ydDtcblxuXHQvLyBoYW5kbGUgc3BlY2lmaWMgbGlzdGVuIGVycm9ycyB3aXRoIGZyaWVuZGx5IG1lc3NhZ2VzXG5cdHN3aXRjaCAoZXJyb3IuY29kZSkge1xuXHRjYXNlICdFQUNDRVMnOlxuXHRcdGNvbnNvbGUuZXJyb3IoYmluZCArICcgcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlcycpO1xuXHRcdHByb2Nlc3MuZXhpdCgxKTtcblx0XHRicmVhaztcblx0Y2FzZSAnRUFERFJJTlVTRSc6XG5cdFx0Y29uc29sZS5lcnJvcihiaW5kICsgJyBpcyBhbHJlYWR5IGluIHVzZScpO1xuXHRcdHByb2Nlc3MuZXhpdCgxKTtcblx0XHRicmVhaztcblx0ZGVmYXVsdDpcblx0IFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJsaXN0ZW5pbmdcIiBldmVudC5cbiAqL1xuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpIHtcblx0dmFyIGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuXHR2YXIgYmluZCA9IHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJyA/ICdwaXBlICcgKyBhZGRyIDogJ3BvcnQgJyArIGFkZHIucG9ydDtcblx0ZGVidWcoJ0xpc3RlbmluZyBvbiAnICsgYmluZCk7XG59XG4iXX0=