class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //object with latitude/longitude
    this.id = new Date().toString() + Math.random().toString();
  }
}
