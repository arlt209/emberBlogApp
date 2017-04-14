import Ember from 'ember';

export default Ember.Controller.extend({


    actions:{
        savePost(){
            this.store.createRecord('post', {
                postTitle: this.get('newPostTitle'),
                postText: this.get('newPostText')
            }).save();
            this.set('newPostTitle', '');
            this.set('newPostText', '');
        },
        deletePost(post){
          post.destroyRecord();
        }
    }
});
