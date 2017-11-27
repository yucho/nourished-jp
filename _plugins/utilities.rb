require('nokogiri')

module Jekyll 
	module AssetFilter
		def utility_filters(markdown)
			ingredients_quantify(markdown)
		end
		# For ul.ingredients
		def ingredients_quantify(markdown)
			html_doc = Nokogiri::HTML::DocumentFragment.parse(markdown)
			html_doc.css(".ingredients > li").each do |li|
				li.inner_html = li.inner_html.gsub '((', '<span class="ingredient-quantity">'
				li.inner_html = li.inner_html.gsub '))', '</span>'
			end
			html_doc.css(".ingredients li").add_class('clearfix')
			html_doc.css(".ingredients li:has(ul), .ingredients li:has(ol)").add_class('has-sublist')
			html_doc.to_s
		end
	end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
