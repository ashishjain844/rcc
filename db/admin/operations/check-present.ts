import { Admin } from "../model";

export function checkPresent(query: {[key: string]: any}): Promise<boolean> {
    return Admin.countDocuments(query).then(count => count > 0);
}