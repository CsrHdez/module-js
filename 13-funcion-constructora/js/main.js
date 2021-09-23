// funcion constructora
function Persona (name, lastName, birthDate) {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}`;
    this.saludar = function () {
        console.log(`Hola soy, ${this.name} ${this.lastName}`);
    };
}

Persona.prototype.mayusculas = function () {
  return this.name.toUpperCase();
}

const persona1 = new Persona('Cesar', 'Hernandez', '1992/07/3');

console.log(persona1.mayusculas());