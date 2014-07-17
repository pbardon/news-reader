NewReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync remove', this.render)
  },
    
  template: JST["feeds/index"],
  
  render: function (){
    var renderedContent = this.template({
      feeds: this.collection
    });
    this.$el.html(renderedContent);
    var $ul = this.$el.find('.feeds')
    
    this.collection.each(function(feed) {
      var subview = new NewReader.Views.FeedItem({
        model: feed
      })
      $ul.append(subview.render().$el)
    })
    
    return this;
  }
});