import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona = new Persona()
  @Output() deletePersona: EventEmitter<Persona> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  festejo(persona: Persona){
    persona.cumplirAnos()
  }

  resta(persona: Persona) {
    persona.resta()
  }

  borrarPersona(personaParaBorrar: Persona) {
    this.deletePersona.emit(personaParaBorrar)
  }

}
