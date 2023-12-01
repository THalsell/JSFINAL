function addToObj(person, key, value) {
    if (typeof key !== "string") {
        return "Function must be called with a valid key."
    }

    person[key] = value;
}



let personObject = {
    name: "tiffany",
    birthday: "October 22",
    age: 30
}

personObject = addToObj(personObject, "homestate", "tennessee")


