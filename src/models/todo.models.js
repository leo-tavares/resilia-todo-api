class TodoModel {
  constructor({ description, id }) {
    this._description = description;
    this._id = id;
  }

  getTodo() {
    return {
      id: this._id,
      description: this._description,
    };
  }
}

module.exports = TodoModel;
