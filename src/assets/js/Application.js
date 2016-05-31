import $ from 'jquery'
import Articles from './Components/Articles';

export default class Application {
	constructor () {
		"use strict";

		this._initFunction();
	}

	_initFunction () {
		"use strict";

		new Articles($('.js-masonry'), {
			rootClassName: '.js-masonry'
		});
	}
}
