function Algo() {}
const o = new Algo();
Object.defineProperty(o, 'nombre', {value: 'Pepe'} );
console.log(o);
console.log(o.nombre);

function cursoTS(target) {
    Object.defineProperty(
        target.prototype,
        'curso',
        {value: 'TypeScript'},
    );
}

@cursoTS
class Estudiante {
    constructor(public nombre: string) {}
}

const es = new Estudiante('Pepe');
console.log(es['curso'])


function Student(config) { 
    return (target) => {
        Object.defineProperty(
            target.prototype,
            'course',
            {value: () => config.course}
        )
    }
}

@Student({
    course: 'Angular 8',
})
class Estudiante2 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let oEstudiante2 = new Estudiante2('Pepe', 'Pérez');
console.log(oEstudiante2['course']()); // Angular 2