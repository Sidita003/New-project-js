const Patient = require('../model/Patient')

class PatientService {
    getPatient(name, surname, age) {
        const patient = new Patient(name, surname, age)
        return patient
    }
}

module.exports = new PatientService()