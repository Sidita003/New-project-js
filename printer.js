function printPatient(patient) {
    console.log(`Hello ${patient.getName()} ${patient.getSurname()}! Your age is ${patient.getAge()}`)
}

module.exports = {
    printPatient
}