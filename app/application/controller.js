import Ember from 'ember';

export default Ember.Controller.extend({

    actions:{
        savePost(){
            this.store.createRecord('post', {
                postTitle: this.get('newPostTitle'),
                postText: this.get('newPostText'),
                author: this.get('newAuthor')
            }).save();
            this.set('newPostTitle', '');
            this.set('newPostText', '');
            this.set('newAuthor', '');
        },
        deletePost(post){
          post.destroyRecord();
        },
    }
});
