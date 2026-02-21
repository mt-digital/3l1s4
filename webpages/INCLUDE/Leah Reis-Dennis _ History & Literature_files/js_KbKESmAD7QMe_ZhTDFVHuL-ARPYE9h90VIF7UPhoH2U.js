/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,Drupal,document,MathJax){'use strict';Drupal.behaviors.mathjax={attach:function(context,settings){$(document).ajaxComplete(function(){MathJax.Hub.Queue(['Typeset',MathJax.Hub]);});}};}(jQuery,Drupal,document,MathJax));;
