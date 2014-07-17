NewReader.Views.FeedShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "click button.refresh": "refresh"
  },
    
  template: JST["feeds/show"],
  
  render: function () {
    var view = this;
    var renderedContent = this.template({
      feed: this.model
    });
    
    this.$el.html(renderedContent);
    var $entryUl = $('<ul>')
    this.model.entries().each(function (entry) {
      var itemView = new NewReader.Views.EntryShow({ model: entry });
      $entryUl.append(itemView.render().$el)  
    });
    this.$el.append($entryUl);
    return this;
  },
  
  refresh: function () {
    this.model.fetch();
  }
});