/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        // Register keyboard listeners
        var openKeyboardListener = function(result) {
          console.log('open');
          console.log(result);
        };
        var closeKeyboardListener = function(result) {
          console.log('close');
          console.log(result);
        };
        CustomKeyboard.setOpenCloseListener(openKeyboardListener, closeKeyboardListener);

        // Unregister keyboard listeners (and free our callbacks)
        setTimeout(function() {
                   console.log("unset");
                   CustomKeyboard.unsetOpenCloseListener();
                   }, 60000);

    }
};

app.initialize();

var toggle = document.getElementById('toggle');
var output = document.getElementById('output');

toggle.addEventListener('click', function() {
  var elt = this;
  if (elt.className == 'show')  {
    CustomKeyboard.open(123456, 9, function(val) {console.log(val);});

    elt.className = 'hide';
    elt.innerHTML = 'Hide keyboard';
  } else {
    CustomKeyboard.close()
    elt.className = 'show';
    elt.innerHTML = 'Show keyboard.';
  }

});

