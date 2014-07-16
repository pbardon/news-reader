NewReader.Views.FeedShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render)
  },
  
  template: JST["feeds/show"],
  
  render: function () {
    var renderedContent = this.template({
      feed: this.model
    })
    
    this.$el.html(renderedContent);
    return this;
  }
});