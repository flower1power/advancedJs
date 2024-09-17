'use strict';

export class User {
  constructor(Task) {
    this.Task = Task;
  }

  do(){
    return this.Task.run()
  }
}