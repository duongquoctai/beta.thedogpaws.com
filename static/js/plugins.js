"use strict";(function($){$.fn.addWidthClass=function(options){var settings=$.extend({breakpoints:[200,400,600,1000,1200]},options);var availableClassesString='';for(var i=settings.breakpoints.length-1;i>=0;i--){availableClassesString+=" "+"width-lt-"+settings.breakpoints[i]+" "+"width-gt-"+settings.breakpoints[i]};return this.each(function(){var $this=jQuery(this);var newClassesString='';for(var i=settings.breakpoints.length-1;i>=0;i--){if($this.width()<=settings.breakpoints[i]){newClassesString+=' width-lt-'+settings.breakpoints[i]}else{newClassesString+=' width-gt-'+settings.breakpoints[i]}};$this.addClass(newClassesString);jQuery(window).on('resize',function(){newClassesString='';$this.removeClass(availableClassesString);for(var i=settings.breakpoints.length-1;i>=0;i--){if($this.width()<=settings.breakpoints[i]){newClassesString+=' width-lt-'+settings.breakpoints[i]}else{newClassesString+=' width-gt-'+settings.breakpoints[i]}};$this.addClass(newClassesString)})})}}(jQuery))