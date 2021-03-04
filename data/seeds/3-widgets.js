exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("widgets")
      .truncate()
      .then(function () {
        // Inserts seed entries
        return knex("widgets").insert([
          {
            widget_name: "Fire Widget",
            widget_size: "Large",
            widget_color: "Red",
            widget_description: "A fire widget, resists nature widgets, weak to water widgets.",
          },
          {
            widget_name: "Water Widget",
            widget_size: "Medium",
            widget_color: "Blue",
            widget_description: "A water widget, resists fire widgets, weak to nature widgets.",
          },
          {
            widget_name: "Nature Widget",
            widget_size: "Small",
            widget_color: "Green",
            widget_description: "A nature widget, resists water widgets, weak to fire widgets.",
          },
        ]);
      });
  };