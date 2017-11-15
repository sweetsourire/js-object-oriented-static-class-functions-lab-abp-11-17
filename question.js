class Question {
  constructor(content) {
    this.content = content;
    this.save()
  }

  static All() {
    return this._All;
  }

  static Find(id) {
    return this.All()[id-1]
  }

  save(){
    this.constructor._All.push(this);
  }
}

Question._All = [];
