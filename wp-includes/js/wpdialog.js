(function($){$.widget('wp.wpdialog',$.ui.dialog,{open:function(){if(this.isOpen()||false===this._trigger('beforeOpen')){return;}
this._super();this.element.focus();this._trigger('refresh');}});$.wp.wpdialog.prototype.options.closeOnEscape=false;})(jQuery);