import Person from "../domain/Person";

export default interface PersonRepository {

  findAll(): Array<Person>;

}