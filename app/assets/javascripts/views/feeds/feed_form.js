NewReader.Views.FeedForm = Backbone.View.extend({
  template: JST["feeds/form"],
  
  events: {
    "submit feed-form": "addFeed"
  },
  
  render: function() {
    var renderContent = this.template({
      feed: this.model
    });
    
    this.$el.html(renderContent);
    
    return this;
  },
  
  addFeed: function(event) {
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    var newFeed = new NewReader.Models.Feed(params["feed"]);
    
    newFeed.save({},{
      success: function() { NewReader.feeds.add(newFeed)}
    });
  }
});