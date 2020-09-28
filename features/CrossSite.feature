Feature: Cross Site
	This feature includes test cases that are repeated in all the pages

	Background: 
		Given I am at Docler site

	#Req-UI-01
	Scenario Outline: Site title 
    When I am in "<page>"
		Then The title should be "UI Testing Site" on every site
  Examples: 
			| page	  |
			| index	  |
			| hello   |
			| form    |

	#Req-UI-02
	Scenario Outline: Site Logo 
    When I am in "<page>"
		Then The company logo should be visible
  Examples: 
			| page	  |
			| index	  |
			| hello   |
			| form    |

