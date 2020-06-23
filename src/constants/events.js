import moment from 'moment';

const events = [
  {
    title: 'Hackerrank Challenge Winners Announced!',
    start: moment('Jun 20 2020 03:00pm', 'MMM DD YYYY hh:mma'),
    description: 'Winners will be announced for the 2020 BYU ACM Hackerrank challenge!',
    location: 'Online',
    photo: "./static/events/hacker_rank_photo.png"
  },
  {
    title: 'Summer of Code',
    start: moment('Jun 22 2020', 'MMM DD YYYY'),
    description: 'The Summer of Code is an opportunity to find a group and complete projects that could help fill out your portfolio or resume.  We are hosting this as a competition, and we will send out quarterly checkup emails.  We are also setting up a pool of mentors on the BYU CS Slack channel so that beginning or experienced programmers can ask questions and get some help with their projects.',
    location: 'Online/Potentially Meet With Your Mentor In Person'
  }
];

export default events;

/*
All of the possible fields for events:
title
start
end
description
location can be anything
signup (link to qualtrics or something)
photo (place event image in "./static/events/your_event_image.jpg")
*/
