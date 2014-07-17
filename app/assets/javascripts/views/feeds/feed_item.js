NewReader.Views.FeedItem = Backbone.View.extend({
 template: JST['feeds/feed_item'],
 
 tagName: 'li',
 
 events: {
   'click .delete': 'deleteFeed'
 },
 
 render: function() {
   var renderedContent = this.template({
     feed: this.model
   });
   this.$el.html(renderedContent);
   return this;
 },
 
 deleteFeed: function(event) {
   this.model.destroy()
 }
})