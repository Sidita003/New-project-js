const PatientService = require('./services/PatientService')
// firt way
const printer = require('../src/utils/printer')
// second way
const { printPatient } = require('../src/utils/printer')


function main() {
    const patient = PatientService.getPatient('Sidita', 'Teli', 19)
    const patient2 = PatientService.getPatient('Erisa', 'Shala', 23)
    const patient3 = PatientService.getPatient('Emi', 'Spahiu', 23)
    // first way
    printer.printPatient(patient)
    // second way
    printPatient(patient2)
    printPatient(patient3)
}

main()