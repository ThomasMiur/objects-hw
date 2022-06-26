/**
 * @param {Object[]} users
 * @param {number} users.id
 * @param {string} users.firstName
 * @param {string} users.lastName
 */
const logNames = users => {
    console.log((users.map(function (user) {
        return `${user.firstName} ${user.lastName}`
    })).join(" and "));

    return users.map(function (user) {
        return `${user.firstName} ${user.lastName}`
    }).join(" and ")
}

// Sample usage - do not modify
const sampleUsers = [{
    id: 1,
    firstName: "Sam",
    lastName: "Green"
}, {
    id: 2,
    firstName: "Alex",
    lastName: "Blue"
}];

logNames(sampleUsers); // logs: "Sam Green" and "Alex Blue"