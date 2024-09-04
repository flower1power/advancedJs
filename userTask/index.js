'use strict';

import {User} from './user.js';
import {Task} from './task.js';

const task = new Task('HELLO');
const user = new User(task);
const text = user.do()

const el = document.createElement('a')
el.textContent = String(text)
document.body.append(el)



