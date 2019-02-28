import Person from "../domain/Person";

export default interface PersonService {

  findAll(): Array<Person>;

}