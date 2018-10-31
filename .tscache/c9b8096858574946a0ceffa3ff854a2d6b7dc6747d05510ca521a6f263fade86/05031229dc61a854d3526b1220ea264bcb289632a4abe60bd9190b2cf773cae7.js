"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_1 = require("../model");
const data_1 = require("../../../data");
function remove(ids) {
    return new Promise(function (resolve, reject) {
        const query = {
            _id: {
                $in: ids.map(_id => (new mongoose_1.Types.ObjectId(_id)))
            }
        };
        model_1.User.remove(query).then(function () {
            resolve({ status: 200, message: data_1.response.ACCOUNT_DELETED });
        }).catch(reject);
    });
}
exports.remove = remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9kYi91c2VyL29wZXJhdGlvbnMvcmVtb3ZlLnRzIiwic291cmNlcyI6WyIvaG9tZS9hcHBpbnZlbnRpdnJoLTA1OC9Bc2hpc2gtd29yay9yY2MvYXBpL2RiL3VzZXIvb3BlcmF0aW9ucy9yZW1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBaUM7QUFDakMsb0NBQWdDO0FBRWhDLHdDQUF3QztBQUd4QyxnQkFBdUIsR0FBYTtJQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07UUFDdkMsTUFBTSxLQUFLLEdBQUc7WUFDVixHQUFHLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRDtTQUNKLENBQUM7UUFDRixZQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwQixPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxlQUFRLENBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBWEQsd0JBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxcIjtcbmltcG9ydCB7IE9wZXJhdGlvblJlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi90eXBpbmdzXCI7XG5pbXBvcnQgeyByZXNwb25zZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGlkczogc3RyaW5nW10pOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgICBfaWQ6IHtcbiAgICAgICAgICAgICAgICAkaW46IGlkcy5tYXAoX2lkID0+IChuZXcgVHlwZXMuT2JqZWN0SWQoX2lkKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFVzZXIucmVtb3ZlKHF1ZXJ5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogMjAwLCBtZXNzYWdlOiByZXNwb25zZS5BQ0NPVU5UX0RFTEVURUR9KTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbn0iXX0=