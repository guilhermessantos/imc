(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['items-stored'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n	<td><i class=\"icon-"
    + alias4(((helper = (helper = helpers.smiling || (depth0 != null ? depth0.smiling : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"smiling","hash":{},"data":data}) : helper)))
    + "\"></i></td>\n	<td>\n		<div class=\"table-results-imc\">"
    + alias4(((helper = (helper = helpers.imc || (depth0 != null ? depth0.imc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imc","hash":{},"data":data}) : helper)))
    + "</div>\n	</td>\n	<td>\n		<div class=\"table-results-info\">\n			<div class=\"table-results-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n			<div class=\"table-results-data\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n		</div>\n	</td>\n</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();