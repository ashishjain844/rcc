"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const development = require("./environment.dev");
const production = require("./environment.prod");
exports.config = (function () {
    let _config = null;
    switch (process.env.NODE_ENV) {
        case 'production': {
            _config = production;
            break;
        }
        case 'development':
        default: {
            _config = development;
            break;
        }
    }
    return _config;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9lbnZpcm9ubWVudHMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FwcGludmVudGl2cmgtMDU4L0FzaGlzaC13b3JrL3JjYy9hcGkvZW52aXJvbm1lbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUVwQyxRQUFBLE1BQU0sR0FBRyxDQUFDO0lBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQixRQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1FBQ3pCLEtBQUssWUFBWSxDQUFDLENBQUE7WUFDZCxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQ3JCLE1BQU07U0FDVDtRQUNELEtBQUssYUFBYSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO1lBQ0wsT0FBTyxHQUFHLFdBQVcsQ0FBQztZQUN0QixNQUFNO1NBQ1Q7S0FDSjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkZXZlbG9wbWVudCBmcm9tICcuL2Vudmlyb25tZW50LmRldic7XG5pbXBvcnQgKiBhcyBwcm9kdWN0aW9uIGZyb20gJy4vZW52aXJvbm1lbnQucHJvZCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSAoZnVuY3Rpb24oKTogYW55IHtcbiAgICBsZXQgX2NvbmZpZyA9IG51bGw7XG4gICAgc3dpdGNoKHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIGNhc2UgJ3Byb2R1Y3Rpb24nOntcbiAgICAgICAgICAgIF9jb25maWcgPSBwcm9kdWN0aW9uO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnZGV2ZWxvcG1lbnQnOlxuICAgICAgICBkZWZhdWx0OiB7IFxuICAgICAgICAgICAgX2NvbmZpZyA9IGRldmVsb3BtZW50O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9jb25maWc7XG59KSgpOyJdfQ==