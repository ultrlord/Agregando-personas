import { PersonaService } from './../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  //atributos
  personas: Persona[] = []


  //constucto
  constructor(private personaService: PersonaService) { }


    //comportamiento


  ngOnInit(): void {

    this.getAllPersonas()
  }

  getAllPersonas(): void {
    this.personas = this.personaService.getAllPersonas()
  }

  borrarPersonaDeLista(personaParaBorrar: Persona) {
		// con este truco borramos a la persona pero en realidad deberíamos
		// llamar al service
    this.personas = this.personas.filter(p => p.nombre !== personaParaBorrar.nombre)
  }

}
