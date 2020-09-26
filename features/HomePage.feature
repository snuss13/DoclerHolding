Feature: Home Page
	This feature includes test cases for the home Page

	Background: 
		Given I am at Home page

	#Req-UI-09
	Scenario: Title shown 
		Then the title "Welcome to the Docler Holding QA Department" is visible
	
	#Req-UI-10
	Scenario: Subtitle paragrph shown 
		Then the paragraph message "This site is dedicated to perform some exercises and demonstrate automated web testing." is visible
