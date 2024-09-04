'use strict';

export class Task{
  constructor(massage) {
    this.massage = massage;
  }

  run(){
    return this.massage
  }
}