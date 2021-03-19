Monkeypuzzle version 1.5

----------------------
Monkeypuzzle was created as an argument analysis tool, whereby a user may pick out pieces of text from a document and show how the text can be made into arguments which support a conclusion.
This project contains the monkeypuzzle web application with the extended functionality of PDF analysis.
In this version, a user may run the application by opening the index.html file in a browser of their choice.
This version works in Chrome, Firefox, Safari, and Microsoft Edge.
----------------------

CHANGELOG V1.5
- Changed sizing and positioning of UI buttons to be consistent with text resource type.
- This caused the issue of needing two way communication between iframe and monkeypuzzle.
- Set up communication with post messages and event listeners, this allows the pages to communicate efficiently and for monkeypuzzle to recieve any highlighted text if there is any.
- Therefore, monkeypuzzle button now has the final desired functionality, of creating an atom with text selected from inside of the pdf, whilst the button is located outside of the iframe html page.
- Fixed an issue where the page would refresh and the iframe would disappear, being replaced with a text resource tab instead.
- Finished improvements to the UI and toolbar of the PDF viewer, users now have only the tools needed such as open file, with useless tools such as download file being removed from the immediate UI. User can still access by selecting more tools option.

Future work / Improvements:
- Having multiple PDF tabs open means that the user can only create an atom with the text from the PDF which was opened first. Otherwise it does nothing.
- Furthermore, if multiple PDF tabs are open and atoms are being created, sometimes they will duplicate.
- Whenever page is refreshed, if a pdf was loaded it reverts to a text resource panel instead of being persistent.
- Rarely, white space between words is not accounted for leading to the atom being created 'likethis' for a small amount of the words selected.