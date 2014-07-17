NewReader.Views.EntryShow = Backbone.View.extend({
  template: JST["feeds/entries"],
  render: function () {
    var content = this.template({
      entry: this.model
    });
    this.$el.html(content);
    return this;
  }
});