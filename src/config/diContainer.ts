import PersonController from "../controller/PersonController";
import PersonService from "../service/PersonService";
import PersonServiceImpl from "../service/impl/PersonServiceImpl";
import PersonRepository from "../repository/PersonRepository";
import PersonRepositoryImpl from "../repository/impl/PersonRepositoryImpl";

const personRepository: PersonRepository = new PersonRepositoryImpl();
const personService: PersonService = new PersonServiceImpl(personRepository);
const personController: PersonController = new PersonController(personService);

export default {
  personRepository,
  personService,
  personController
}