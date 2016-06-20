import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating' ;

import './body.html'

Template.body.helpers ( {
<<<<<<< Updated upstream
    tasks: [
      { text: 'This is task 1' },
      { text: 'This is task 2' },
      { text: 'This is task 3' },
    ],
=======
    tasks() {
      const instance = Template.instance();
      if (instance.state.get('hideCompleted')) {
        return Tasks.find({checked: { $ne: true }}, {sort:{createdAt: -1}});
      }
      return Tasks.find({}, {sort: { createdAt: -1}});
    },
    incompleteCount() {
      return Tasks.find({checked: {$ne: true}}).count();
    }
});

Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Meteor.call('tasks.insert', text);

    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted',event.target.checked)
  }
>>>>>>> Stashed changes
});
