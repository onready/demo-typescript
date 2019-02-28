import { Request, Response } from "express";
import PersonService from "../service/PersonService";
import Person from "../domain/Person";

export default class PersonController {

  private personService: PersonService;

  constructor(personService: PersonService) {
    this.personService = personService;
  }

  findAll(request: Request, response: Response): void {
    const persons : Array<Person> = this.personService.findAll();
    response.json(persons);
  }

}