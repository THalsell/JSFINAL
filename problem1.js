function ageToAbilites(age) {
    if (age < 16) {
        return "You can't drive."
    } else if (age >= 16 && age <= 17) {
        return "You can drive but not vote."
    } else if (age >= 18 && age <= 24) {
        return "You can drive but not rent a car."
    } else {
        return "You can do pretty much anything."
    }
}

console.log(ageToAbilites(18))