NewReader.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "index",
    "feeds/new": "newFeed",
    "feeds/:id": "feedShow"
  },
  
  index: function () {
    NewReader.feeds.fetch();
    var indexView = new NewReader.Views.FeedsIndex({
      collection: NewReader.feeds
    });
   
   this._swapView(indexView);
  },
  
  feedShow: function (id) {
    var feed = NewReader.feeds.getOrFetch(id);
    feed.fetch();
    var showView = new NewReader.Views.FeedShow({  
      model: feed
    });
    this._swapView(showView); 
  },
  
  newFeed: function() {
    var newView = new NewReader.Views.FeedForm();
    this._swapView(newView);
  },
  
  _swapView: function (view) {
   this._currentView && this._currentView.remove();
   this._currentView = view;
   this.$rootEl.html(view.render().$el);
  }
});