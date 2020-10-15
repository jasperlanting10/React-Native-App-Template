export default class Model {
  static myInstance = null;

  getInstance = () => {
    if (this.myInstance == null) {
      Model.myInstance = new Model();
    }
    return this.myInstance;
  };

  // Add your model functions here
}
