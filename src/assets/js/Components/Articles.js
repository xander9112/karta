import Component from 'Component';
import Masonry from 'masonry-layout';

export default class Articles extends Component {
	constructor (root, options) {
		super(root, options);
	}

	get _defaultOptions () {
		"use strict";

		return {}
	}

	initialize () {
		"use strict";

		super.initialize();
	}

	_cacheNodes () {
		"use strict";

		this.nodes = {};
	}

	_bindEvents () {
		"use strict";
	}

	_ready () {
		"use strict";

		/*this.root.masonry({
		 // options
		 itemSelector: '.b-article',
		 columnWidth:  350,
		 gutter:       47
		 });*/

		var msnry = new Masonry(this.options.rootClassName, {
			columnWidth:  350,
			gutter:       47,
			itemSelector: '.b-article'
		});

		// msnry.layout();

	}
}
