import './style.css'

import {test} from './test.js'

document.querySelector('#app').innerHTML = `
<div class="history">
  <button id="history">History</button>
</div>

<div id="hidenHistory" style="display: none;">
  <ul id="historyList"></ul>
</div>

<input id="msg" name="msg" >
<button id="send">Send</button>
<ul id="msglist"></ul>



`

test(document.querySelector('#app'))
