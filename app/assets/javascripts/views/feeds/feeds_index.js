NewReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },
  
  template: JST["feeds/index"],
  
  render: function (){
    var renderedContent = this.template({
      feeds: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});