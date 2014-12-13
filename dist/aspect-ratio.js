/**
 * aspect-ratio - Get the screen aspect ratio of a device
 * @version v0.12.12
 * @link    https://github.com/Kikobeats/aspect-ratio
 * @license MIT
 */require=function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n?n:r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({"aspect-ratio":[function(r,e){"use strict";e.exports=function(r,e,n){var t,o,u;return n=n||":",o=function(r,e){return 0===e?r:o(e,r%e)},r===e?"1"+n+"1":(e>r&&(u=r,r=e,e=u),t=o(r,e),"undefined"==typeof u?r/t+n+e/t:e/t+n+r/t)}},{}]},{},[]);