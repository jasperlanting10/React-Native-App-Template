export default class DatabaseProvider {
  static myInstance = null;

  getInstance = () => {
    if (this.myInstance == null) {
      DatabaseProvider.myInstance = new DatabaseProvider();
    }
    return this.myInstance;
  };

  // Add your database calls here
}
