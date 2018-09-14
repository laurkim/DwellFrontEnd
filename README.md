# Dwell

Dwell is an application built upon a React/Redux with a Ruby on Rails API that allows users to book an hour-long workspace to maximize productivity at any WiFi cafe in Manhattan.

**To see the live application, please visit _[this](https://dwell-here.herokuapp.com/)_ page.** To see an example of how this application works, please visit [this](https://github.com/laurkim/dwell-demo) repository for a demo. The Ruby on Rails API can be found at [this](https://github.com/laurkim/DwellBackEnd) repository.

After user authentication and authorization, the user is redirected to the home page that renders all of the cafes in Manhattan, New York equipped with WiFi. A user can add the workspace to their favorites to compile a growing list of all of their favorite cafes to work at, which will change dynamically and send calls to the Rails API to update the user's favorite workspaces based on user interaction.

A user can also schedule to book an hour-long time at the cafe of their choice on any day or time. However, if the chosen time-slot has already been book by another user, the booking will not finalize and the user will be notified that the time slot has already been taken. If the user is unsure of whether the cafe is a good fit for their needs, the user can click the link to open the Yelp page for that specific cafe which will provide real patron reviews. 

A user can interact with the dynamic routing of the application to see different displays, such as one route to render all of the workspaces and a completely different route to render all of the user's past and upcoming bookings.
