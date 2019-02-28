import Person from "../../domain/Person";
import PersonRepository from "../PersonRepository";

export default class PersonRepositoryImpl implements PersonRepository {

  private PERSONS : Array<Person> = [new Person(1, 'jorge'), new Person(2, 'beatriz')];

  findAll(): Array<Person> {
    return this.PERSONS;
  }

}