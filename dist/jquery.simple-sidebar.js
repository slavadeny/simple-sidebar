/*! simple-sidebar v3.0.0 (https://github.com/dcdeiv/simple-sidebar)
** Copyright (c) 2014 - 2016 Davide Di Criscito
** Dual licensed under MIT and GPL-2.0
*/
;( function( $, window, document, undefined ) {

	"use strict";

		var pluginName = "simpleSidebar",
				defaults = {
				propertyName: "value"
		};

		function Plugin( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		$.extend(Plugin.prototype, {
				init: function() {
					var cfg = this.settings;

					this.echo( cfg );
				},
				echo: function( e ) {
					console.log( e );
				}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
				return this.each( function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" +
									pluginName, new Plugin( this, options ) );
						}
				});
		};

} )( jQuery, window, document );
