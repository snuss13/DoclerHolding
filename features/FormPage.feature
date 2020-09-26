Feature: Form Page
	This feature includes test cases for the form Page

	Background: 
		Given I am at Docler site
    

	#Req-UI-11
	Scenario: Title shown 
		When I click the Form button
		Then a form should be visible with one input box and one submit button
	
  
	#Req-UI-12
	Scenario Outline: Form submit validation 
		When I click the Form button
		And if you type "<value>" in the input field and submit the form
		Then you should get redirected to the Hello page, and the follwoing text should appear: "<result>"
		Examples: 
			| value	  | result	   		|
			| John	  | Hello John!   |
			| Sophia  | Hello Sophia! |
			| Charlie | Hello Charlie!|
			| Emily	  | Hello Emily!  |

	#	Then the paragraph message "This site is dedicated to perform some exercises and demonstrate automated web testing." is visible
