export class File {
  fileId: number;
  url: string;
  realName: string;
  name: string;
  type: string;
  size: number;
  insertedOn: Date;
  ownerId: number;

  constructor(
    fileId: number,
    url: string,
    realName: string,
    name: string,
    type: string,
    size: number,
    insertedOn: Date,
    ownerId: number,
  ) {
    this.fileId = fileId;
    this.url = url;
    this.realName = realName;
    this.name = name;
    this.type = type;
    this.size = size;
    this.insertedOn = insertedOn;
    this.ownerId = ownerId;
  }
}
