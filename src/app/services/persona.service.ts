import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona [] = []

  constructor() { }

  getAllPersonas(): Persona[] {

    let persona1 = new Persona("luis", "alvarez", 27)
    this.personas.push(persona1)
    this.personas.push(new Persona("enmanuel", "montilla", 25))
    this.personas.push(new Persona("josue", "alvarez", 19))

    return this.personas
  }

  removePersonsa(ListaDePersonas: Persona[], personaToDelete: Persona): Persona[] {
    return ListaDePersonas.filter(p => p.nombre !== personaToDelete.nombre)

  }
}
