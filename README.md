# js-cardio (Test 1)

Write a function ***f1*** that accepts two strings, ***a*** and ***b***, as parameters and returns the number of character deletions required to make ***a*** and ***b*** contain the same exact letters in the same exact frequency.

Examples:

 - f1('bacdc', 'dcbac') returns 0
	- the strings have the same exact letters in the same exact frequency, no deletions needed
 - f1('bacdc', 'dcbad') returns 2
	 - we have to remove one ‘c’ from ***a*** and one ‘d’ from ***b***