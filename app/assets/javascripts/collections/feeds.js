NewReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewReader.Models.Feed,
  url: "/api/feeds",
  
  getOrFetch: function (id) {
    var feed = this.get(id);
    var feeds = this;
    if (!feed) {
      feed = new NewReader.Models.Feed({ id: id });
      feed.collection = this;
      feed.fetch({
        success: function() {
          feeds.add(feed);
        }
      });
    }
    return feed;
  }
});
