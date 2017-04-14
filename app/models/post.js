import DS from 'ember-data';

export default DS.Model.extend({
  postText: DS.attr('string'),
  postTitle: DS.attr('string'),
});
