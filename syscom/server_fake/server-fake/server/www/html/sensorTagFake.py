#!/usr/bin/env python
# Michael Saunby. April 2013
#
# Notes.
# pexpect uses regular expression so characters that have special meaning
# in regular expressions, e.g. [ and ] must be escaped with a backslash.
#
#   Copyright 2013 Michael Saunby
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

import sys
import time
import json
from random import uniform


i = 0
while i < 1000 :
    data = {}
    data['addr'] = "78:A5:04:8C:17:3D"
    data['tempA'] = uniform(10,30)
    data['humd'] = uniform(0,100)
    data['tempIR'] = uniform(15,25)
    data['pression'] = uniform(100,1000)
    data['date'] = time.strftime("%Y-%m-%d")
    data['time'] = time.strftime("%H:%M:%S")
    with open("data.json","w") as file:
        file.write(json.dumps(data))
    file.close()
    time.sleep(1)
    i = i+1
    print i
    pass





