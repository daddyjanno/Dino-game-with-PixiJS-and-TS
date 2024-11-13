import { Person } from './types/Person'

class GreaterService {
    great(person: Person) {
        console.log(`Hi ${person.firstname} ${person.lastname}`)
    }
}

const person: Person = {
    firstname: 'J-N',
    lastname: 'Drugmand',
}
new GreaterService().great(person)
