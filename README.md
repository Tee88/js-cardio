# js-cardio (Test 4)

Write a function ***f4*** that accepts a callback function, ***cb***, as parameter and that calls this callback function only if ***f4*** itself has not been called again during 300 milliseconds.

Example:

 - f4(cb), 100 milliseconds elapsed, f4(cb), 200 milliseconds elapsed, f4(cb): ***cb*** is called only once
	 - The second call happens before 300 milliseconds are elapsed, so ***cb*** is not called and ***f4*** will wait for another 300 milliseconds
	 - The third call happens before 300 milliseconds are elapsed, so ***cb*** is not called and ***f4*** will wait for another 300 milliseconds
	 - ***f4*** is not called for more than 300 milliseconds after the third call, so ***cb*** is called