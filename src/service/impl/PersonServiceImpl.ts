import Person from "../../domain/Person";
import PersonRepository from "../../repository/PersonRepository";
import PersonService from "../PersonService";

export default class PersonServiceImpl implements PersonService {

  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository
  }

  findAll(): Array<Person> {
    return this.personRepository.findAll();
  }


}