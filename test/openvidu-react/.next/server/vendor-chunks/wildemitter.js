/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wildemitter";
exports.ids = ["vendor-chunks/wildemitter"];
exports.modules = {

/***/ "(ssr)/./node_modules/wildemitter/wildemitter.js":
/*!*************************************************!*\
  !*** ./node_modules/wildemitter/wildemitter.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/*\nWildEmitter.js is a slim little event emitter by @henrikjoreteg largely based\non @visionmedia's Emitter from UI Kit.\n\nWhy? I wanted it standalone.\n\nI also wanted support for wildcard emitters like this:\n\nemitter.on('*', function (eventName, other, event, payloads) {\n\n});\n\nemitter.on('somenamespace*', function (eventName, payloads) {\n\n});\n\nPlease note that callbacks triggered by wildcard registered events also get\nthe event name as the first argument.\n*/\n\nmodule.exports = WildEmitter;\n\nfunction WildEmitter() { }\n\nWildEmitter.mixin = function (constructor) {\n    var prototype = constructor.prototype || constructor;\n\n    prototype.isWildEmitter= true;\n\n    // Listen on the given `event` with `fn`. Store a group name if present.\n    prototype.on = function (event, groupName, fn) {\n        this.callbacks = this.callbacks || {};\n        var hasGroup = (arguments.length === 3),\n            group = hasGroup ? arguments[1] : undefined,\n            func = hasGroup ? arguments[2] : arguments[1];\n        func._groupName = group;\n        (this.callbacks[event] = this.callbacks[event] || []).push(func);\n        return this;\n    };\n\n    // Adds an `event` listener that will be invoked a single\n    // time then automatically removed.\n    prototype.once = function (event, groupName, fn) {\n        var self = this,\n            hasGroup = (arguments.length === 3),\n            group = hasGroup ? arguments[1] : undefined,\n            func = hasGroup ? arguments[2] : arguments[1];\n        function on() {\n            self.off(event, on);\n            func.apply(this, arguments);\n        }\n        this.on(event, group, on);\n        return this;\n    };\n\n    // Unbinds an entire group\n    prototype.releaseGroup = function (groupName) {\n        this.callbacks = this.callbacks || {};\n        var item, i, len, handlers;\n        for (item in this.callbacks) {\n            handlers = this.callbacks[item];\n            for (i = 0, len = handlers.length; i < len; i++) {\n                if (handlers[i]._groupName === groupName) {\n                    //console.log('removing');\n                    // remove it and shorten the array we're looping through\n                    handlers.splice(i, 1);\n                    i--;\n                    len--;\n                }\n            }\n        }\n        return this;\n    };\n\n    // Remove the given callback for `event` or all\n    // registered callbacks.\n    prototype.off = function (event, fn) {\n        this.callbacks = this.callbacks || {};\n        var callbacks = this.callbacks[event],\n            i;\n\n        if (!callbacks) return this;\n\n        // remove all handlers\n        if (arguments.length === 1) {\n            delete this.callbacks[event];\n            return this;\n        }\n\n        // remove specific handler\n        i = callbacks.indexOf(fn);\n        if (i !== -1) {\n            callbacks.splice(i, 1);\n            if (callbacks.length === 0) {\n                delete this.callbacks[event];\n            }\n        }\n        return this;\n    };\n\n    /// Emit `event` with the given args.\n    // also calls any `*` handlers\n    prototype.emit = function (event) {\n        this.callbacks = this.callbacks || {};\n        var args = [].slice.call(arguments, 1),\n            callbacks = this.callbacks[event],\n            specialCallbacks = this.getWildcardCallbacks(event),\n            i,\n            len,\n            item,\n            listeners;\n\n        if (callbacks) {\n            listeners = callbacks.slice();\n            for (i = 0, len = listeners.length; i < len; ++i) {\n                if (!listeners[i]) {\n                    break;\n                }\n                listeners[i].apply(this, args);\n            }\n        }\n\n        if (specialCallbacks) {\n            len = specialCallbacks.length;\n            listeners = specialCallbacks.slice();\n            for (i = 0, len = listeners.length; i < len; ++i) {\n                if (!listeners[i]) {\n                    break;\n                }\n                listeners[i].apply(this, [event].concat(args));\n            }\n        }\n\n        return this;\n    };\n\n    // Helper for for finding special wildcard event handlers that match the event\n    prototype.getWildcardCallbacks = function (eventName) {\n        this.callbacks = this.callbacks || {};\n        var item,\n            split,\n            result = [];\n\n        for (item in this.callbacks) {\n            split = item.split('*');\n            if (item === '*' || (split.length === 2 && eventName.slice(0, split[0].length) === split[0])) {\n                result = result.concat(this.callbacks[item]);\n            }\n        }\n        return result;\n    };\n\n};\n\nWildEmitter.mixin(WildEmitter);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2lsZGVtaXR0ZXIvd2lsZGVtaXR0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbnZpZHUtcmVhY3QvLi9ub2RlX21vZHVsZXMvd2lsZGVtaXR0ZXIvd2lsZGVtaXR0ZXIuanM/NmU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuV2lsZEVtaXR0ZXIuanMgaXMgYSBzbGltIGxpdHRsZSBldmVudCBlbWl0dGVyIGJ5IEBoZW5yaWtqb3JldGVnIGxhcmdlbHkgYmFzZWRcbm9uIEB2aXNpb25tZWRpYSdzIEVtaXR0ZXIgZnJvbSBVSSBLaXQuXG5cbldoeT8gSSB3YW50ZWQgaXQgc3RhbmRhbG9uZS5cblxuSSBhbHNvIHdhbnRlZCBzdXBwb3J0IGZvciB3aWxkY2FyZCBlbWl0dGVycyBsaWtlIHRoaXM6XG5cbmVtaXR0ZXIub24oJyonLCBmdW5jdGlvbiAoZXZlbnROYW1lLCBvdGhlciwgZXZlbnQsIHBheWxvYWRzKSB7XG5cbn0pO1xuXG5lbWl0dGVyLm9uKCdzb21lbmFtZXNwYWNlKicsIGZ1bmN0aW9uIChldmVudE5hbWUsIHBheWxvYWRzKSB7XG5cbn0pO1xuXG5QbGVhc2Ugbm90ZSB0aGF0IGNhbGxiYWNrcyB0cmlnZ2VyZWQgYnkgd2lsZGNhcmQgcmVnaXN0ZXJlZCBldmVudHMgYWxzbyBnZXRcbnRoZSBldmVudCBuYW1lIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZEVtaXR0ZXI7XG5cbmZ1bmN0aW9uIFdpbGRFbWl0dGVyKCkgeyB9XG5cbldpbGRFbWl0dGVyLm1peGluID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZSB8fCBjb25zdHJ1Y3RvcjtcblxuICAgIHByb3RvdHlwZS5pc1dpbGRFbWl0dGVyPSB0cnVlO1xuXG4gICAgLy8gTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC4gU3RvcmUgYSBncm91cCBuYW1lIGlmIHByZXNlbnQuXG4gICAgcHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBncm91cE5hbWUsIGZuKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MgfHwge307XG4gICAgICAgIHZhciBoYXNHcm91cCA9IChhcmd1bWVudHMubGVuZ3RoID09PSAzKSxcbiAgICAgICAgICAgIGdyb3VwID0gaGFzR3JvdXAgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmdW5jID0gaGFzR3JvdXAgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMV07XG4gICAgICAgIGZ1bmMuX2dyb3VwTmFtZSA9IGdyb3VwO1xuICAgICAgICAodGhpcy5jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5jYWxsYmFja3NbZXZlbnRdIHx8IFtdKS5wdXNoKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8gQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gICAgLy8gdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAgICBwcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChldmVudCwgZ3JvdXBOYW1lLCBmbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBoYXNHcm91cCA9IChhcmd1bWVudHMubGVuZ3RoID09PSAzKSxcbiAgICAgICAgICAgIGdyb3VwID0gaGFzR3JvdXAgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmdW5jID0gaGFzR3JvdXAgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMV07XG4gICAgICAgIGZ1bmN0aW9uIG9uKCkge1xuICAgICAgICAgICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKGV2ZW50LCBncm91cCwgb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8gVW5iaW5kcyBhbiBlbnRpcmUgZ3JvdXBcbiAgICBwcm90b3R5cGUucmVsZWFzZUdyb3VwID0gZnVuY3Rpb24gKGdyb3VwTmFtZSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICB2YXIgaXRlbSwgaSwgbGVuLCBoYW5kbGVycztcbiAgICAgICAgZm9yIChpdGVtIGluIHRoaXMuY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IHRoaXMuY2FsbGJhY2tzW2l0ZW1dO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uX2dyb3VwTmFtZSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3JlbW92aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdCBhbmQgc2hvcnRlbiB0aGUgYXJyYXkgd2UncmUgbG9vcGluZyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gICAgLy8gcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gICAgcHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcyB8fCB7fTtcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gICAgICAgIGkgPSBjYWxsYmFja3MuaW5kZXhPZihmbik7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8vIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICAgIC8vIGFsc28gY2FsbHMgYW55IGAqYCBoYW5kbGVyc1xuICAgIHByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MgfHwge307XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NbZXZlbnRdLFxuICAgICAgICAgICAgc3BlY2lhbENhbGxiYWNrcyA9IHRoaXMuZ2V0V2lsZGNhcmRDYWxsYmFja3MoZXZlbnQpLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbixcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gY2FsbGJhY2tzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwZWNpYWxDYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGxlbiA9IHNwZWNpYWxDYWxsYmFja3MubGVuZ3RoO1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gc3BlY2lhbENhbGxiYWNrcy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8gSGVscGVyIGZvciBmb3IgZmluZGluZyBzcGVjaWFsIHdpbGRjYXJkIGV2ZW50IGhhbmRsZXJzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50XG4gICAgcHJvdG90eXBlLmdldFdpbGRjYXJkQ2FsbGJhY2tzID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICB2YXIgaXRlbSxcbiAgICAgICAgICAgIHNwbGl0LFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChpdGVtIGluIHRoaXMuY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzcGxpdCA9IGl0ZW0uc3BsaXQoJyonKTtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSAnKicgfHwgKHNwbGl0Lmxlbmd0aCA9PT0gMiAmJiBldmVudE5hbWUuc2xpY2UoMCwgc3BsaXRbMF0ubGVuZ3RoKSA9PT0gc3BsaXRbMF0pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmNhbGxiYWNrc1tpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG59O1xuXG5XaWxkRW1pdHRlci5taXhpbihXaWxkRW1pdHRlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wildemitter/wildemitter.js\n");

/***/ })

};
;