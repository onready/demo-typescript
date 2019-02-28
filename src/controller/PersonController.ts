import { Request, Response } from "express";
import PersonService from "../service/PersonService";

export default class PersonController {

  private personService: PersonService;

  constructor(personService: PersonService) {
    this.personService = personService;
  }

  public findAll(request: Request, response: Response): void {
    response.json(this.personService.findAll());
  }

}