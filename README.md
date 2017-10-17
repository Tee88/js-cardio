# js-cardio (Test 3)

A hostname is composed of one or more parts separated by a dot, where every part contains one or more of the following characters: characters from ‘A’ to ‘Z’ (case insensitive), numbers, dashes (‘-’) and underlines (‘_’). Write a function ***f3*** that accepts a string, ***a***, as parameter and returns 0 if ***a*** is not a valid hostname and the number of parts it contains otherwise.

Examples:

 - f3(‘’) returns 0
	 - Does not contain any parts
 - f3(‘xtech.guru’) returns 2
	 - Is valid and has 2 parts: ‘xtech’ and ‘guru’
 - f3(‘@xtech.guru’) returns 0
	 - Has invalid characters, so it’s invalid

**Note:** the hostname format given is not correct and is only used to make the test easier.