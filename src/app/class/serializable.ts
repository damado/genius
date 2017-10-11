import { ISerializable } from '../interfaces/iserializable';

export class Serializable implements ISerializable {
  fromJSON(json) {
    for (const propName in json) {
      if (json.hasOwnProperty(propName)) {
        this[propName] = json[propName];
      }
    }
    return this;
  }
}
