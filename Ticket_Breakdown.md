# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket no 1.

Title: Update UI to input custom agent ID

Description: 

Add a new section to the agent input form in the front-end interface to allow facilities to input and save custom agent IDs for each agent. This will include updating the UI/UX design and implementing the necessary code changes.

Acceptance Criteria:

A new section for custom agent ID is added to the agent input form in the front-end interface
Facilities can input and save custom agent IDs for each agent in the system
Custom agent IDs are properly stored in the database

Time/Effort Estimate: 2 hours


Ticket no 2.

Title: Add custom Agent id field to the Agents table

Acceptance Criteria:

A new field named 'custom_id' should be added to the Agents table.
The 'custom_id' field should be able to store a string of up to 256 characters.
The 'custom_id' field should be able to store null values.

Time/Effort Estimate: 2 hours

Implementation Details:

Add the 'custom_id' field to the Agents table using a migration.
Update the database schema to reflect the new field.
Test the new field to ensure that it is working correctly.





Ticket no 3.

Title: Add custom Agent id field to the Agent model

Acceptance Criteria:

The Agent model should have a new field named 'custom_id'
The 'custom_id' field should be able to store a string of up to 256 characters.

Time/Effort Estimate: 1 hour

Implementation Details:

Add the 'custom_id' field to the Agent model.
Update the Agent model's validation rules to include the new field.
Test the new field to ensure that it is working correctly.

Ticket no 4.

Title: Modify the getShiftsByFacility function to include the custom Agent id

Acceptance Criteria:

The getShiftsByFacility function should return the custom Agent id in addition to the internal database id.

Time/Effort Estimate: 1 hour

Implementation Details:

Modify the getShiftsByFacility function to include the custom Agent id in the returned data.
Test the function to ensure that it is working correctly.



Ticket no 5.

Title: Modify the generateReport function to use the custom Agent id

Acceptance Criteria:

The generateReport function should use the custom Agent id when generating reports for Facilities.

Time/Effort Estimate: 1 hour

Implementation Details:

Modify the generateReport function to use the custom Agent id when generating reports for Facilities.
Test the function to ensure that it is working correctly.