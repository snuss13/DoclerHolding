Feature: Menu validation
	As a QA I would like to test the menu behaviours

	Background: 
		Given I am at Docler site

	#Req-UI-03 / Req-UI-04
	Scenario: Home button action validation 
    When I click the Home button
		Then I should get navigated to the Home page
    And it should turn to active status




# Req-UI-05 | When I click on the Form button, I should get navigated to the form page						| High
# Req-UI-06 | When I click on the Form button, it should turn to active status							| Low
# Req-UI-08 | When I click on the UI Testing button, I should get navigated to the Home page					| High
