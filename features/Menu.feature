Feature: Menu validation
	As a QA I would like to test the menu behaviours

	#Req-UI-03 / Req-UI-04
	Scenario: Home menu button validation 
		Given I am at Docler site
    When I click the Home button
		Then I should get navigated to the Home page
    And it should turn Home to active status

	#Req-UI-05 / Req-UI-06
	Scenario: Form menu button validation 
		Given I am at Docler form
    When I click the Form button
		Then I should get navigated to the Form page
    And it should turn Form to active status


	# Req-UI-08 
	Scenario: UI Testing menu button validation 
		Given I am at Docler site
    When I click the UI Testing button
		Then I should get navigated to the Home page

