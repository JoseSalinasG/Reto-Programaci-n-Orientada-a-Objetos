// Clase base 
class Vehiculo {
	constructor(tipo_de_vehiculo, numero_de_ejes, motor, hp, nm, capacidad_de_carga, ocupantes, año_de_faricacion, precio) {
		this.tipo_de_vehiculo = tipo_de_vehiculo;
		this.numero_de_ejes = numero_de_ejes;
		this.motor = motor;
		this.hp = hp;
		this.nm = nm;
		this.capacidad_de_carga = capacidad_de_carga;
		this.ocupantes = ocupantes;
		this.año_de_faricacion = año_de_faricacion;
		this.precio = precio;
	}

	fichaTecnica() {
		console.log(`Esta es una ${this.tipo_de_vehiculo} tiene ${this.numero_de_ejes} ruedas.Motor ${this.motor} con ${this.hp} HP y ${this.nm} Nm.Capacidad de carga de ${this.capacidad_de_carga},numero de ocupantes ${this.ocupantes}, año de fabricacion ${this.año_de_faricacion}.Costo Aproximado $${this.precio} en Ecuador.`);
	}
}
// Sub-Clase 1
class Vehiculos_de_2_ruedas extends Vehiculo {
	constructor(tipo_de_vehiculo, numero_de_ejes, motor, hp, nm, ocupantes, año_de_faricacion, precio) {
		super(tipo_de_vehiculo, numero_de_ejes, motor, hp, nm, null, ocupantes, año_de_faricacion, precio);
	}

	fichaTecnica_2r() {
		console.log(`Moto tipo ${this.tipo_de_vehiculo} tiene ${this.numero_de_ejes} ruedas.Cuenta con un motor de ${this.motor} con ${this.hp} HP y ${this.nm} Nm. de ${this.ocupantes} ocupantes, año de fabricacion es ${this.año_de_faricacion}.Costo aproximado $${this.precio}.`);
	}
}
// Sub-Clase 2
class Vehiculos_de_2_ruedas_sin_motor extends Vehiculo {
	constructor(tipo_de_vehiculo, numero_de_ejes, ocupantes, precio) {
		super(tipo_de_vehiculo, numero_de_ejes, null, null, null, null, ocupantes, null, precio);
	}

	fichaTecnica_2r_s_m() {
		console.log(`Esta ${this.tipo_de_vehiculo}, tiene ${this.numero_de_ejes} Ruedas,es para solo ${this.ocupantes} persona,su costo aproximado es de $${this.precio}.`);
	}
}
class Ejemplo_reto extends Vehiculo {
	constructor(numero_de_ejes, ocupantes) {
		super(null, numero_de_ejes, null, null, null, null, ocupantes, null, null);
	}
	ficha_Ejemplo() {
		console.log(`Este vehiculo tiene ${this.numero_de_ejes} ruedas.Puede transportar a ${this.ocupantes} Pasajeros.`)
	}

}
class Ejemplo_reto2 extends Vehiculo {
	constructor(numero_de_ejes, tipo_de_vehiculo) {
		super(tipo_de_vehiculo, numero_de_ejes, null, null, null, null, null, null);
	}
	ficha_ejemplo2() {
		console.log(`Este vehiculo tiene ${this.numero_de_ejes} ruedas.Es una ${this.tipo_de_vehiculo}`)
	}
}




// Constantes 
const vehiculo_de_4_ruedas = new Vehiculo('Camioneta', 4, 'Gasolina', 205, 417, '1000 kg', 5, 2023, "25,000");
const vehiculo_de_2_ruedas = new Vehiculos_de_2_ruedas('Trail', 2, 'Boxer 1.300 cm3', 145, 149, 2, 2023, '30.000');
const vehiculos_de_2_ruedas_sin_motor = new Vehiculos_de_2_ruedas_sin_motor('Bicicleta de montaña', 2, 1, 2023, '4.000');

const ejemplo1 = new Ejemplo_reto(4, 5);
const ejemplo2 = new Ejemplo_reto2(2,'bicicleta de tipo montaña.');

// imprimir reultado.
vehiculo_de_4_ruedas.fichaTecnica();
vehiculo_de_2_ruedas.fichaTecnica_2r();
vehiculos_de_2_ruedas_sin_motor.fichaTecnica_2r_s_m();
ejemplo1.ficha_Ejemplo();
ejemplo2.ficha_ejemplo2();

