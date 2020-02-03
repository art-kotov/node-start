const user = {
    id: 1,
    name: "User",
    email: "user@gmail.com"
};

(function () {
console.log("IIFE")
})();

module.exports = {
    user,
    hello() {console.log("hello")}
};
