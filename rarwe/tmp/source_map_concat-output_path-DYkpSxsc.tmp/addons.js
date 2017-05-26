define('ember-ajax/ajax-request', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  var EmberObject = _ember['default'].Object;
  exports['default'] = EmberObject.extend(_emberAjaxMixinsAjaxRequest['default']);
});
define('ember-ajax/errors', ['exports', 'ember'], function (exports, _ember) {
  exports.AjaxError = AjaxError;
  exports.InvalidError = InvalidError;
  exports.UnauthorizedError = UnauthorizedError;
  exports.ForbiddenError = ForbiddenError;
  exports.BadRequestError = BadRequestError;
  exports.NotFoundError = NotFoundError;
  exports.TimeoutError = TimeoutError;
  exports.AbortError = AbortError;
  exports.ConflictError = ConflictError;
  exports.ServerError = ServerError;
  exports.isAjaxError = isAjaxError;
  exports.isUnauthorizedError = isUnauthorizedError;
  exports.isForbiddenError = isForbiddenError;
  exports.isInvalidError = isInvalidError;
  exports.isBadRequestError = isBadRequestError;
  exports.isNotFoundError = isNotFoundError;
  exports.isTimeoutError = isTimeoutError;
  exports.isAbortError = isAbortError;
  exports.isConflictError = isConflictError;
  exports.isServerError = isServerError;
  exports.isSuccess = isSuccess;
  var EmberError = _ember['default'].Error;

  /**
   * @class AjaxError
   * @private
   */

  function AjaxError(errors) {
    var message = arguments.length <= 1 || arguments[1] === undefined ? 'Ajax operation failed' : arguments[1];

    EmberError.call(this, message);

    this.errors = errors || [{
      title: 'Ajax Error',
      detail: message
    }];
  }

  AjaxError.prototype = Object.create(EmberError.prototype);

  /**
   * @class InvalidError
   * @public
   * @extends AjaxError
   */

  function InvalidError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because it was invalid');
  }

  InvalidError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class UnauthorizedError
   * @public
   * @extends AjaxError
   */

  function UnauthorizedError(errors) {
    AjaxError.call(this, errors, 'Ajax authorization failed');
  }

  UnauthorizedError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ForbiddenError
   * @public
   * @extends AjaxError
   */

  function ForbiddenError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because user is not permitted to perform this operation.');
  }

  ForbiddenError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class BadRequestError
   * @public
   * @extends AjaxError
   */

  function BadRequestError(errors) {
    AjaxError.call(this, errors, 'Request was formatted incorrectly.');
  }

  BadRequestError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class NotFoundError
   * @public
   * @extends AjaxError
   */

  function NotFoundError(errors) {
    AjaxError.call(this, errors, 'Resource was not found.');
  }

  NotFoundError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class TimeoutError
   * @public
   * @extends AjaxError
   */

  function TimeoutError() {
    AjaxError.call(this, null, 'The ajax operation timed out');
  }

  TimeoutError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class AbortError
   * @public
   * @extends AjaxError
   */

  function AbortError() {
    AjaxError.call(this, null, 'The ajax operation was aborted');
  }

  AbortError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ConflictError
   * @public
   * @extends AjaxError
   */

  function ConflictError(errors) {
    AjaxError.call(this, errors, 'The ajax operation failed due to a conflict');
  }

  ConflictError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ServerError
   * @public
   * @extends AjaxError
   */

  function ServerError(errors) {
    AjaxError.call(this, errors, 'Request was rejected due to server error');
  }

  ServerError.prototype = Object.create(AjaxError.prototype);

  /**
   * Checks if the given error is or inherits from AjaxError
   *
   * @method isAjaxError
   * @public
   * @param  {Error} error
   * @return {Boolean}
   */

  function isAjaxError(error) {
    return error instanceof AjaxError;
  }

  /**
   * Checks if the given status code or AjaxError object represents an
   * unauthorized request error
   *
   * @method isUnauthorizedError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isUnauthorizedError(error) {
    if (isAjaxError(error)) {
      return error instanceof UnauthorizedError;
    } else {
      return error === 401;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a forbidden
   * request error
   *
   * @method isForbiddenError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isForbiddenError(error) {
    if (isAjaxError(error)) {
      return error instanceof ForbiddenError;
    } else {
      return error === 403;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents an invalid
   * request error
   *
   * @method isInvalidError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isInvalidError(error) {
    if (isAjaxError(error)) {
      return error instanceof InvalidError;
    } else {
      return error === 422;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a bad request
   * error
   *
   * @method isBadRequestError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isBadRequestError(error) {
    if (isAjaxError(error)) {
      return error instanceof BadRequestError;
    } else {
      return error === 400;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * "not found" error
   *
   * @method isNotFoundError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isNotFoundError(error) {
    if (isAjaxError(error)) {
      return error instanceof NotFoundError;
    } else {
      return error === 404;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * "timeout" error
   *
   * @method isTimeoutError
   * @public
   * @param  {AjaxError} error
   * @return {Boolean}
   */

  function isTimeoutError(error) {
    return error instanceof TimeoutError;
  }

  /**
   * Checks if the given status code or AjaxError object represents an
   * "abort" error
   *
   * @method isAbortError
   * @public
   * @param  {AjaxError} error
   * @return {Boolean}
   */

  function isAbortError(error) {
    if (isAjaxError(error)) {
      return error instanceof AbortError;
    } else {
      return error === 0;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * conflict error
   *
   * @method isConflictError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isConflictError(error) {
    if (isAjaxError(error)) {
      return error instanceof ConflictError;
    } else {
      return error === 409;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a server error
   *
   * @method isServerError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isServerError(error) {
    if (isAjaxError(error)) {
      return error instanceof ServerError;
    } else {
      return error >= 500 && error < 600;
    }
  }

  /**
   * Checks if the given status code represents a successful request
   *
   * @method isSuccess
   * @public
   * @param  {Number} status
   * @return {Boolean}
   */

  function isSuccess(status) {
    var s = parseInt(status, 10);
    return s >= 200 && s < 300 || s === 304;
  }
});
define('ember-ajax/index', ['exports', 'ember-ajax/request'], function (exports, _emberAjaxRequest) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxRequest['default'];
    }
  });
});
define('ember-ajax/mixins/ajax-request', ['exports', 'ember', 'ember-ajax/errors', 'ember-ajax/utils/parse-response-headers', 'ember-ajax/utils/get-header', 'ember-ajax/utils/url-helpers', 'ember-ajax/utils/ajax'], function (exports, _ember, _emberAjaxErrors, _emberAjaxUtilsParseResponseHeaders, _emberAjaxUtilsGetHeader, _emberAjaxUtilsUrlHelpers, _emberAjaxUtilsAjax) {
  var $ = _ember['default'].$;
  var A = _ember['default'].A;
  var EmberError = _ember['default'].Error;
  var Logger = _ember['default'].Logger;
  var Mixin = _ember['default'].Mixin;
  var Promise = _ember['default'].RSVP.Promise;
  var Test = _ember['default'].Test;
  var get = _ember['default'].get;
  var isArray = _ember['default'].isArray;
  var isEmpty = _ember['default'].isEmpty;
  var isNone = _ember['default'].isNone;
  var merge = _ember['default'].merge;
  var run = _ember['default'].run;
  var runInDebug = _ember['default'].runInDebug;
  var testing = _ember['default'].testing;
  var warn = _ember['default'].warn;

  var JSONAPIContentType = /^application\/vnd\.api\+json/i;

  function isJSONAPIContentType(header) {
    if (isNone(header)) {
      return false;
    }
    return !!header.match(JSONAPIContentType);
  }

  function startsWithSlash(string) {
    return string.charAt(0) === '/';
  }

  function endsWithSlash(string) {
    return string.charAt(string.length - 1) === '/';
  }

  function stripSlashes(path) {
    // make sure path starts with `/`
    if (startsWithSlash(path)) {
      path = path.substring(1);
    }

    // remove end `/`
    if (endsWithSlash(path)) {
      path = path.slice(0, -1);
    }
    return path;
  }

  function isObject(object) {
    return typeof object === 'object';
  }

  function isString(object) {
    return typeof object === 'string';
  }

  var pendingRequestCount = 0;
  if (testing) {
    Test.registerWaiter(function () {
      return pendingRequestCount === 0;
    });
  }

  /**
   * AjaxRequest Mixin
   *
   * @public
   * @mixin
   */
  exports['default'] = Mixin.create({

    /**
     * The default value for the request `contentType`
     *
     * For now, defaults to the same value that jQuery would assign.  In the
     * future, the default value will be for JSON requests.
     * @property {string} contentType
     * @public
     * @default
     */
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    /**
     * Headers to include on the request
     *
     * Some APIs require HTTP headers, e.g. to provide an API key. Arbitrary
     * headers can be set as key/value pairs on the `RESTAdapter`'s `headers`
     * object and Ember Data will send them along with each ajax request.
     *
     * ```javascript
     * // app/services/ajax.js
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * export default AjaxService.extend({
     *   headers: {
     *     'API_KEY': 'secret key',
     *     'ANOTHER_HEADER': 'Some header value'
     *   }
     * });
     * ```
     *
     * `headers` can also be used as a computed property to support dynamic
     * headers.
     *
     * ```javascript
     * // app/services/ajax.js
     * import Ember from 'ember';
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * const {
     *   computed,
     *   get,
     *   inject: { service }
     * } = Ember;
     *
     * export default AjaxService.extend({
     *   session: service(),
     *   headers: computed('session.authToken', function() {
     *     return {
     *       'API_KEY': get(this, 'session.authToken'),
     *       'ANOTHER_HEADER': 'Some header value'
     *     };
     *   })
     * });
     * ```
     *
     * In some cases, your dynamic headers may require data from some object
     * outside of Ember's observer system (for example `document.cookie`). You
     * can use the `volatile` function to set the property into a non-cached mode
     * causing the headers to be recomputed with every request.
     *
     * ```javascript
     * // app/services/ajax.js
     * import Ember from 'ember';
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * const {
     *   computed,
     *   get,
     *   inject: { service }
     * } = Ember;
     *
     * export default AjaxService.extend({
     *   session: service(),
     *   headers: computed('session.authToken', function() {
     *     return {
     *       'API_KEY': get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
     *       'ANOTHER_HEADER': 'Some header value'
     *     };
     *   }).volatile()
     * });
     * ```
     *
     * @property {Object} headers
     * @public
     * @default
     */
    headers: {},

    /**
     * Make an AJAX request, ignoring the raw XHR object and dealing only with
     * the response
     *
     * @method request
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    request: function request(url, options) {
      var _this = this;

      var hash = this.options(url, options);
      return new Promise(function (resolve, reject) {
        _this._makeRequest(hash).then(function (_ref) {
          var response = _ref.response;

          resolve(response);
        })['catch'](function (_ref2) {
          var response = _ref2.response;

          reject(response);
        });
      }, 'ember-ajax: ' + hash.type + ' ' + hash.url + ' response');
    },

    /**
     * Make an AJAX request, returning the raw XHR object along with the response
     *
     * @method raw
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    raw: function raw(url, options) {
      var hash = this.options(url, options);
      return this._makeRequest(hash);
    },

    /**
     * Shared method to actually make an AJAX request
     *
     * @method _makeRequest
     * @private
     * @param {Object} hash The options for the request
     * @param {string} hash.url The URL to make the request to
     * @return {Promise} The result of the request
     */
    _makeRequest: function _makeRequest(hash) {
      var _this2 = this;

      var method = hash.method || hash.type || 'GET';
      var requestData = { method: method, type: method, url: hash.url };

      if (isJSONAPIContentType((0, _emberAjaxUtilsGetHeader['default'])(hash.headers, 'Content-Type')) && requestData.type !== 'GET') {
        if (typeof hash.data === 'object') {
          hash.data = JSON.stringify(hash.data);
        }
      }

      return new Promise(function (resolve, reject) {
        hash.success = function (payload, textStatus, jqXHR) {
          var response = _this2.handleResponse(jqXHR.status, (0, _emberAjaxUtilsParseResponseHeaders['default'])(jqXHR.getAllResponseHeaders()), payload, requestData);

          pendingRequestCount = pendingRequestCount - 1;

          if ((0, _emberAjaxErrors.isAjaxError)(response)) {
            run.join(null, reject, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, response: response });
          } else {
            run.join(null, resolve, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, response: response });
          }
        };

        hash.error = function (jqXHR, textStatus, errorThrown) {
          runInDebug(function () {
            var message = 'The server returned an empty string for ' + requestData.type + ' ' + requestData.url + ', which cannot be parsed into a valid JSON. Return either null or {}.';
            var validJSONString = !(textStatus === 'parsererror' && jqXHR.responseText === '');
            warn(message, validJSONString, {
              id: 'ds.adapter.returned-empty-string-as-JSON'
            });
          });

          var payload = _this2.parseErrorResponse(jqXHR.responseText) || errorThrown;
          var response = undefined;

          if (errorThrown instanceof Error) {
            response = errorThrown;
          } else if (textStatus === 'timeout') {
            response = new _emberAjaxErrors.TimeoutError();
          } else if (textStatus === 'abort') {
            response = new _emberAjaxErrors.AbortError();
          } else {
            response = _this2.handleResponse(jqXHR.status, (0, _emberAjaxUtilsParseResponseHeaders['default'])(jqXHR.getAllResponseHeaders()), payload, requestData);
          }

          pendingRequestCount = pendingRequestCount - 1;

          run.join(null, reject, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, errorThrown: errorThrown, response: response });
        };

        pendingRequestCount = pendingRequestCount + 1;

        (0, _emberAjaxUtilsAjax['default'])(hash);
      }, 'ember-ajax: ' + hash.type + ' ' + hash.url);
    },

    /**
     * calls `request()` but forces `options.type` to `POST`
     *
     * @method post
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    post: function post(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'POST'));
    },

    /**
     * calls `request()` but forces `options.type` to `PUT`
     *
     * @method put
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    put: function put(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'PUT'));
    },

    /**
     * calls `request()` but forces `options.type` to `PATCH`
     *
     * @method patch
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    patch: function patch(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'PATCH'));
    },

    /**
     * calls `request()` but forces `options.type` to `DELETE`
     *
     * @method del
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    del: function del(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'DELETE'));
    },

    /**
     * calls `request()` but forces `options.type` to `DELETE`
     *
     * Alias for `del()`
     *
     * @method delete
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    'delete': function _delete() {
      return this.del.apply(this, arguments);
    },

    /**
     * Wrap the `.get` method so that we issue a warning if
     *
     * Since `.get` is both an AJAX pattern _and_ an Ember pattern, we want to try
     * to warn users when they try using `.get` to make a request
     *
     * @method get
     * @public
     */
    get: function get(url) {
      if (arguments.length > 1 || url.charAt(0) === '/') {
        throw new EmberError('It seems you tried to use `.get` to make a request! Use the `.request` method instead.');
      }
      return this._super.apply(this, arguments);
    },

    /**
     * Manipulates the options hash to include the HTTP method on the type key
     *
     * @method _addTypeToOptionsFor
     * @private
     * @param {Object} options The original request options
     * @param {string} method The method to enforce
     * @return {Object} The new options, with the method set
     */
    _addTypeToOptionsFor: function _addTypeToOptionsFor(options, method) {
      options = options || {};
      options.type = method;
      return options;
    },

    /**
     * Get the full "headers" hash, combining the service-defined headers with
     * the ones provided for the request
     *
     * @method _getFullHeadersHash
     * @private
     * @param {Object} headers
     * @return {Object}
     */
    _getFullHeadersHash: function _getFullHeadersHash(headers) {
      var classHeaders = get(this, 'headers');
      var _headers = merge({}, classHeaders);
      return merge(_headers, headers);
    },

    /**
     * @method options
     * @private
     * @param {string} url
     * @param {Object} options
     * @return {Object}
     */
    options: function options(url) {
      var _options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _options = merge({}, _options);
      _options.url = this._buildURL(url, _options);
      _options.type = _options.type || 'GET';
      _options.dataType = _options.dataType || 'json';
      _options.contentType = isEmpty(_options.contentType) ? get(this, 'contentType') : _options.contentType;

      if (this._shouldSendHeaders(_options)) {
        _options.headers = this._getFullHeadersHash(_options.headers);
      } else {
        _options.headers = _options.headers || {};
      }

      return _options;
    },

    /**
     * Build a URL for a request
     *
     * If the provided `url` is deemed to be a complete URL, it will be returned
     * directly.  If it is not complete, then the segment provided will be combined
     * with the `host` and `namespace` options of the request class to create the
     * full URL.
     *
     * @private
     * @param {string} url the url, or url segment, to request
     * @param {Object} [options={}] the options for the request being made
     * @param {string} [options.host] the host to use for this request
     * @returns {string} the URL to make a request to
     */
    _buildURL: function _buildURL(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var urlObject = new _emberAjaxUtilsUrlHelpers.RequestURL(url);

      // If the URL passed is not relative, return the whole URL
      if (urlObject.isComplete) {
        return urlObject.href;
      }

      var host = options.host || get(this, 'host');
      var namespace = options.namespace || get(this, 'namespace');
      if (namespace) {
        namespace = stripSlashes(namespace);
      }

      // If the URL has already been constructed (presumably, by Ember Data), then we should just leave it alone
      var hasNamespaceRegex = new RegExp('^(/)?' + namespace);
      if (hasNamespaceRegex.test(url)) {
        return url;
      }

      var fullUrl = '';
      // Add the host, if it exists
      if (host) {
        fullUrl += host;
      }
      // Add the namespace, if it exists
      if (namespace) {
        if (!endsWithSlash(fullUrl)) {
          fullUrl += '/';
        }
        fullUrl += namespace;
      }
      // Add the URL segment, if it exists
      if (url) {
        if (!startsWithSlash(url)) {
          fullUrl += '/';
        }
        fullUrl += url;
      }

      return fullUrl;
    },

    /**
     * Takes an ajax response, and returns the json payload or an error.
     *
     * By default this hook just returns the json payload passed to it.
     * You might want to override it in two cases:
     *
     * 1. Your API might return useful results in the response headers.
     *    Response headers are passed in as the second argument.
     *
     * 2. Your API might return errors as successful responses with status code
     *    200 and an Errors text or object.
     *
     * @method handleResponse
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @param  {Object} requestData the original request information
     * @return {Object | AjaxError} response
     */
    handleResponse: function handleResponse(status, headers, payload, requestData) {
      payload = payload === null || payload === undefined ? {} : payload;
      var errors = this.normalizeErrorResponse(status, headers, payload);

      if (this.isSuccess(status, headers, payload)) {
        return payload;
      } else if (this.isUnauthorizedError(status, headers, payload)) {
        return new _emberAjaxErrors.UnauthorizedError(errors);
      } else if (this.isForbiddenError(status, headers, payload)) {
        return new _emberAjaxErrors.ForbiddenError(errors);
      } else if (this.isInvalidError(status, headers, payload)) {
        return new _emberAjaxErrors.InvalidError(errors);
      } else if (this.isBadRequestError(status, headers, payload)) {
        return new _emberAjaxErrors.BadRequestError(errors);
      } else if (this.isNotFoundError(status, headers, payload)) {
        return new _emberAjaxErrors.NotFoundError(errors);
      } else if (this.isAbortError(status, headers, payload)) {
        return new _emberAjaxErrors.AbortError(errors);
      } else if (this.isConflictError(status, headers, payload)) {
        return new _emberAjaxErrors.ConflictError(errors);
      } else if (this.isServerError(status, headers, payload)) {
        return new _emberAjaxErrors.ServerError(errors);
      }

      var detailedMessage = this.generateDetailedMessage(status, headers, payload, requestData);
      return new _emberAjaxErrors.AjaxError(errors, detailedMessage);
    },

    /**
     * Match the host to a provided array of strings or regexes that can match to a host
     *
     * @method matchHosts
     * @private
     * @param {string} host the host you are sending too
     * @param {RegExp | string} matcher a string or regex that you can match the host to.
     * @returns {Boolean} if the host passed the matcher
     */
    _matchHosts: function _matchHosts(host, matcher) {
      if (matcher.constructor === RegExp) {
        return matcher.test(host);
      } else if (typeof matcher === 'string') {
        return matcher === host;
      } else {
        Logger.warn('trustedHosts only handles strings or regexes.', matcher, 'is neither.');
        return false;
      }
    },

    /**
     * Determine whether the headers should be added for this request
     *
     * This hook is used to help prevent sending headers to every host, regardless
     * of the destination, since this could be a security issue if authentication
     * tokens are accidentally leaked to third parties.
     *
     * To avoid that problem, subclasses should utilize the `headers` computed
     * property to prevent authentication from being sent to third parties, or
     * implement this hook for more fine-grain control over when headers are sent.
     *
     * By default, the headers are sent if the host of the request matches the
     * `host` property designated on the class.
     *
     * @method _shouldSendHeaders
     * @private
     * @property {Object} hash request options hash
     * @returns {Boolean} whether or not headers should be sent
     */
    _shouldSendHeaders: function _shouldSendHeaders(_ref3) {
      var _this3 = this;

      var url = _ref3.url;
      var host = _ref3.host;

      url = url || '';
      host = host || get(this, 'host') || '';

      var urlObject = new _emberAjaxUtilsUrlHelpers.RequestURL(url);
      var trustedHosts = get(this, 'trustedHosts') || A();

      // Add headers on relative URLs
      if (!urlObject.isComplete) {
        return true;
      } else if (trustedHosts.find(function (matcher) {
        return _this3._matchHosts(urlObject.hostname, matcher);
      })) {
        return true;
      }

      // Add headers on matching host
      var hostObject = new _emberAjaxUtilsUrlHelpers.RequestURL(host);
      return urlObject.sameHost(hostObject);
    },

    /**
     * Generates a detailed ("friendly") error message, with plenty
     * of information for debugging (good luck!)
     *
     * @method generateDetailedMessage
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @param  {Object} requestData the original request information
     * @return {Object} request information
     */
    generateDetailedMessage: function generateDetailedMessage(status, headers, payload, requestData) {
      var shortenedPayload = undefined;
      var payloadContentType = (0, _emberAjaxUtilsGetHeader['default'])(headers, 'Content-Type') || 'Empty Content-Type';

      if (payloadContentType.toLowerCase() === 'text/html' && payload.length > 250) {
        shortenedPayload = '[Omitted Lengthy HTML]';
      } else {
        shortenedPayload = JSON.stringify(payload);
      }

      var requestDescription = requestData.type + ' ' + requestData.url;
      var payloadDescription = 'Payload (' + payloadContentType + ')';

      return ['Ember AJAX Request ' + requestDescription + ' returned a ' + status, payloadDescription, shortenedPayload].join('\n');
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a an authorized error.
     *
     * @method isUnauthorizedError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isUnauthorizedError: function isUnauthorizedError(status) {
      return (0, _emberAjaxErrors.isUnauthorizedError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a forbidden error.
     *
     * @method isForbiddenError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isForbiddenError: function isForbiddenError(status) {
      return (0, _emberAjaxErrors.isForbiddenError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a an invalid error.
     *
     * @method isInvalidError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isInvalidError: function isInvalidError(status) {
      return (0, _emberAjaxErrors.isInvalidError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a bad request error.
     *
     * @method isBadRequestError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isBadRequestError: function isBadRequestError(status) {
      return (0, _emberAjaxErrors.isBadRequestError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a "not found" error.
     *
     * @method isNotFoundError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isNotFoundError: function isNotFoundError(status) {
      return (0, _emberAjaxErrors.isNotFoundError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is an "abort" error.
     *
     * @method isAbortError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isAbortError: function isAbortError(status) {
      return (0, _emberAjaxErrors.isAbortError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a "conflict" error.
     *
     * @method isConflictError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isConflictError: function isConflictError(status) {
      return (0, _emberAjaxErrors.isConflictError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a server error.
     *
     * @method isServerError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isServerError: function isServerError(status) {
      return (0, _emberAjaxErrors.isServerError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a success.
     *
     * @method isSuccess
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isSuccess: function isSuccess(status) {
      return (0, _emberAjaxErrors.isSuccess)(status);
    },

    /**
     * @method parseErrorResponse
     * @private
     * @param {string} responseText
     * @return {Object}
     */
    parseErrorResponse: function parseErrorResponse(responseText) {
      try {
        return JSON.parse(responseText);
      } catch (e) {
        return responseText;
      }
    },

    /**
     * Normalize the error from the server into the same format
     *
     * The format we normalize to is based on the JSON API specification.  The
     * return value should be an array of objects that match the format they
     * describe. More details about the object format can be found
     * [here](http://jsonapi.org/format/#error-objects)
     *
     * The basics of the format are as follows:
     *
     * ```javascript
     * [
     *   {
     *     status: 'The status code for the error',
     *     title: 'The human-readable title of the error'
     *     detail: 'The human-readable details of the error'
     *   }
     * ]
     * ```
     *
     * In cases where the server returns an array, then there should be one item
     * in the array for each of the payload.  If your server returns a JSON API
     * formatted payload already, it will just be returned directly.
     *
     * If your server returns something other than a JSON API format, it's
     * suggested that you override this method to convert your own errors into the
     * one described above.
     *
     * @method normalizeErrorResponse
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @return {Array} An array of JSON API-formatted error objects
     */
    normalizeErrorResponse: function normalizeErrorResponse(status, headers, payload) {
      if (isArray(payload.errors)) {
        return payload.errors.map(function (error) {
          if (isObject(error)) {
            var ret = merge({}, error);
            ret.status = '' + error.status;
            return ret;
          } else {
            return {
              status: '' + status,
              title: error
            };
          }
        });
      } else if (isArray(payload)) {
        return payload.map(function (error) {
          if (isObject(error)) {
            return {
              status: '' + status,
              title: error.title || 'The backend responded with an error',
              detail: error
            };
          } else {
            return {
              status: '' + status,
              title: '' + error
            };
          }
        });
      } else {
        if (isString(payload)) {
          return [{
            status: '' + status,
            title: payload
          }];
        } else {
          return [{
            status: '' + status,
            title: payload.title || 'The backend responded with an error',
            detail: payload
          }];
        }
      }
    }
  });
});
define('ember-ajax/mixins/ajax-support', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var service = _ember['default'].inject.service;
  var alias = _ember['default'].computed.alias;
  exports['default'] = Mixin.create({

    /**
     * The AJAX service to send requests through
     *
     * @property {AjaxService} ajaxService
     * @public
     */
    ajaxService: service('ajax'),

    /**
     * @property {string} host
     * @public
     */
    host: alias('ajaxService.host'),

    /**
     * @property {string} namespace
     * @public
     */
    namespace: alias('ajaxService.namespace'),

    /**
     * @property {object} headers
     * @public
     */
    headers: alias('ajaxService.headers'),

    ajax: function ajax(url, type) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var augmentedOptions = this.ajaxOptions.apply(this, arguments);

      return this.get('ajaxService').request(url, augmentedOptions);
    }
  });
});
define('ember-ajax/raw', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  exports['default'] = raw;

  /**
   * Same as `request` except it resolves an object with
   *
   *   {response, textStatus, jqXHR}
   *
   * Useful if you need access to the jqXHR object for headers, etc.
   *
   * @public
   */

  function raw() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.raw.apply(ajax, arguments);
  }
});
define('ember-ajax/request', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  exports['default'] = request;

  /**
   * Helper function that allows you to use the default `ember-ajax` to make
   * requests without using the service.
   *
   * Note: Unlike `ic-ajax`'s `request` helper function, this will *not* return a
   * jqXHR object in the error handler.  If you need jqXHR, you can use the `raw`
   * function instead.
   *
   * @public
   */

  function request() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.request.apply(ajax, arguments);
  }
});
define('ember-ajax/services/ajax', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  var Service = _ember['default'].Service;
  exports['default'] = Service.extend(_emberAjaxMixinsAjaxRequest['default']);
});
define('ember-ajax/utils/ajax', ['exports', 'ember', 'ember-ajax/utils/is-fastboot'], function (exports, _ember, _emberAjaxUtilsIsFastboot) {
  var $ = _ember['default'].$;
  exports['default'] = _emberAjaxUtilsIsFastboot['default'] ? najax : $.ajax;
});
/* global najax */
define('ember-ajax/utils/get-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = getHeader;
  var A = _ember['default'].A;
  var isNone = _ember['default'].isNone;

  /**
   * Do a case-insensitive lookup of an HTTP header
   *
   * @function getHeader
   * @private
   * @param {Object} headers
   * @param {string} name
   * @return {string}
   */

  function getHeader(headers, name) {
    if (isNone(headers) || isNone(name)) {
      return; // ask for nothing, get nothing.
    }

    var matchedKey = A(Object.keys(headers)).find(function (key) {
      return key.toLowerCase() === name.toLowerCase();
    });

    return headers[matchedKey];
  }
});
define('ember-ajax/utils/is-fastboot', ['exports'], function (exports) {
  /* global FastBoot */
  var isFastBoot = typeof FastBoot !== 'undefined';
  exports['default'] = isFastBoot;
});
define('ember-ajax/utils/parse-response-headers', ['exports'], function (exports) {
  exports['default'] = parseResponseHeaders;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  var CLRF = '\r\n';

  function parseResponseHeaders(headersString) {
    var headers = {};

    if (!headersString) {
      return headers;
    }

    var headerPairs = headersString.split(CLRF);

    headerPairs.forEach(function (header) {
      var _header$split = header.split(':');

      var _header$split2 = _toArray(_header$split);

      var field = _header$split2[0];

      var value = _header$split2.slice(1);

      field = field.trim();
      value = value.join(':').trim();

      if (value) {
        headers[field] = value;
      }
    });

    return headers;
  }
});
define('ember-ajax/utils/url-helpers', ['exports', 'ember-ajax/utils/is-fastboot'], function (exports, _emberAjaxUtilsIsFastboot) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var completeUrlRegex = /^(http|https)/;

  /*
   * Isomorphic URL parsing
   * Borrowed from
   * http://www.sitepoint.com/url-parsing-isomorphic-javascript/
   */
  var isNode = typeof module === 'object' && module.exports;
  var url = getUrlModule();

  /**
   * Get the node url module or an anchor element
   *
   * @function getUrlModule
   * @private
   * @return {Object|HTMLAnchorElement} Object to parse urls
   */
  function getUrlModule() {
    if (_emberAjaxUtilsIsFastboot['default']) {
      // ember-fastboot-server provides the node url module as URL global
      return URL;
    }

    if (isNode) {
      return require('url');
    }

    return document.createElement('a');
  }

  /**
   * Parse a URL string into an object that defines its structure
   *
   * The returned object will have the following properties:
   *
   *   href: the full URL
   *   protocol: the request protocol
   *   hostname: the target for the request
   *   port: the port for the request
   *   pathname: any URL after the host
   *   search: query parameters
   *   hash: the URL hash
   *
   * @function parseUrl
   * @private
   * @param {string} str The string to parse
   * @return {Object} URL structure
   */
  function parseUrl(str) {
    var fullObject = undefined;
    if (isNode || _emberAjaxUtilsIsFastboot['default']) {
      fullObject = url.parse(str);
    } else {
      url.href = str;
      fullObject = url;
    }
    var desiredProps = {};
    desiredProps.href = fullObject.href;
    desiredProps.protocol = fullObject.protocol;
    desiredProps.hostname = fullObject.hostname;
    desiredProps.port = fullObject.port;
    desiredProps.pathname = fullObject.pathname;
    desiredProps.search = fullObject.search;
    desiredProps.hash = fullObject.hash;
    return desiredProps;
  }

  /**
   * RequestURL
   *
   * Converts a URL string into an object for easy comparison to other URLs
   *
   * @public
   */

  var RequestURL = (function () {
    function RequestURL(url) {
      _classCallCheck(this, RequestURL);

      this.url = url;
    }

    _createClass(RequestURL, [{
      key: 'sameHost',
      value: function sameHost(other) {
        var _this = this;

        return ['protocol', 'hostname', 'port'].reduce(function (previous, prop) {
          return previous && _this[prop] === other[prop];
        }, true);
      }
    }, {
      key: 'url',
      get: function get() {
        return this._url;
      },
      set: function set(value) {
        this._url = value;

        var explodedUrl = parseUrl(value);
        for (var prop in explodedUrl) {
          if (({}).hasOwnProperty.call(explodedUrl, prop)) {
            this[prop] = explodedUrl[prop];
          }
        }

        return this._url;
      }
    }, {
      key: 'isComplete',
      get: function get() {
        return this.url.match(completeUrlRegex);
      }
    }]);

    return RequestURL;
  })();

  exports.RequestURL = RequestURL;
});
/* global require, module, URL */
define('ember-bootstrap/components/base/bs-accordion', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _ember, _bsAccordion, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _bsAccordion.default,
    ariaRole: 'tablist',

    /**
     * The value of the currently selected accordion item. Set this to change selection programmatically.
     *
     * When the selection is changed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onChange` action
     *
     * @property selected
     * @public
     */
    selected: null,

    /**
     * The value of the currently selected accordion item
     *
     * @property isSelected
     * @private
     */
    isSelected: (0, _listenToCp.default)('selected'),

    /**
     * Action when the selected accordion item is about to be changed.
     *
     * You can return false to prevent changing the active item, and do that in your action by
     * setting the `selected` accordingly.
     *
     * @event onChange
     * @param newValue
     * @param oldValue
     * @public
     */
    onChange: function onChange(newValue, oldValue) {},
    // eslint-disable-line no-unused-vars

    actions: {
      change: function change(newValue) {
        var oldValue = this.get('isSelected');
        if (oldValue === newValue) {
          newValue = null;
        }
        if (this.get('onChange')(newValue, oldValue) !== false) {
          this.set('isSelected', newValue);
        }
      }
    }

  });
});
define('ember-bootstrap/components/base/bs-accordion/item', ['exports', 'ember', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/mixins/component-child', 'ember-bootstrap/templates/components/bs-accordion/item'], function (exports, _ember, _typeClass, _componentChild, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend(_componentChild.default, _typeClass.default, {
    layout: _item.default,

    /**
     * The title of the accordion item, displayed as a .panel-title element
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * The value of the accordion item, which is used as the value of the `selected` property of the parent [Components.Accordion](Components.Accordion.html) component
     *
     * @property value
     * @public
     */
    value: computed.oneWay('elementId'),

    /**
     * @property selected
     * @private
     */
    selected: null,

    /**
     * @property collapsed
     * @type boolean
     * @readonly
     * @private
     */
    collapsed: computed('value', 'selected', function () {
      return this.get('value') !== this.get('selected');
    }).readOnly(),

    /**
     * @property active
     * @type boolean
     * @readonly
     * @private
     */
    active: computed.not('collapsed'),

    /**
     * Reference to the parent `Components.Accordion` class.
     *
     * @property accordion
     * @private
     */
    accordion: null,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {}
  });
});
define('ember-bootstrap/components/base/bs-accordion/item/body', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion/body'], function (exports, _ember, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _body.default,
    tagName: '',

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null

  });
});
define('ember-bootstrap/components/base/bs-accordion/item/title', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion/title'], function (exports, _ember, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _title.default,
    ariaRole: 'tab',
    classNameBindings: ['collapsed:collapsed:expanded'],

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-alert', ['exports', 'ember', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/templates/components/bs-alert', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _ember, _transitionSupport, _bsAlert, _typeClass, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      observer = _ember.default.observer,
      later = _ember.default.run.later;
  exports.default = _ember.default.Component.extend(_typeClass.default, _transitionSupport.default, {
    layout: _bsAlert.default,
    classNameBindings: ['alert', 'fade', 'dismissible:alert-dismissible'],

    /**
     * A dismissible alert will have a close button in the upper right corner, that the user can click to dismiss
     * the alert.
     *
     * @property dismissible
     * @type boolean
     * @default true
     * @public
     */
    dismissible: true,

    /**
     * If true the alert is completely hidden. Will be set when the fade animation has finished.
     *
     * @property hidden
     * @type boolean
     * @default false
     * @readonly
     * @private
     */
    hidden: false,

    /**
     * This property controls if the alert should be visible. If false it might still be in the DOM until the fade animation
     * has completed.
     *
     * When the alert is dismissed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onHide` action
     *
     * @property visible
     * @type boolean
     * @default true
     * @public
     */
    visible: true,

    /**
     * @property _visible
     * @private
     */
    _visible: (0, _listenToCp.default)('visible'),

    /**
     * @property notVisible
     * @private
     */
    notVisible: computed.not('_visible'),

    /**
     * Set to false to disable the fade out animation when hiding the alert.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Computed property to set the alert class to the component div. Will be false when dismissed to have the component
     * div (which cannot be removed form DOM by the component itself) without any markup.
     *
     * @property alert
     * @type boolean
     * @private
     */
    alert: computed.not('hidden'),
    showAlert: computed.and('_visible', 'fade'),

    /**
     * @property classTypePrefix
     * @type String
     * @default 'alert'
     * @private
     */
    classTypePrefix: 'alert',

    /**
     * The duration of the fade out animation
     *
     * @property fadeDuration
     * @type number
     * @default 150
     * @public
     */
    fadeDuration: 150,

    /**
     * The action to be sent after the alert has been dismissed (including the CSS transition).
     *
     * @property onDismissed
     * @type function
     * @public
     */
    onDismissed: function onDismissed() {},


    /**
     * The action is called when the close button is clicked.
     *
     * You can return false to prevent closing the alert automatically, and do that in your action by
     * setting `visible` to false.
     *
     * @property onDismiss
     * @type function
     * @public
     */
    onDismiss: function onDismiss() {},


    actions: {
      dismiss: function dismiss() {
        if (this.get('onDismiss')() !== false) {
          this.set('_visible', false);
        }
      }
    },

    /**
     * Call to make the alert visible again after it has been hidden
     *
     * @method show
     * @private
     */
    show: function show() {
      this.set('hidden', false);
    },


    /**
     * Call to hide the alert. If the `fade` property is true, this will fade out the alert before being finally
     * dismissed.
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (this.get('usesTransition')) {
        later(this, function () {
          if (!this.get('isDestroyed')) {
            this.set('hidden', true);
            this.get('onDismissed')();
          }
        }, this.get('fadeDuration'));
      } else {
        this.set('hidden', true);
        this.get('onDismissed')();
      }
    },
    init: function init() {
      this._super.apply(this, arguments);
      this.set('hidden', !this.get('_visible'));
    },


    _observeIsVisible: observer('_visible', function () {
      if (this.get('_visible')) {
        this.show();
      } else {
        this.hide();
      }
    })
  });
});
define('ember-bootstrap/components/base/bs-button-group', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-button-group', 'ember-bootstrap/mixins/size-class'], function (exports, _ember, _bsButtonGroup, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var A = _ember.default.A,
      copy = _ember.default.copy,
      computed = _ember.default.computed,
      isArray = _ember.default.isArray;
  exports.default = _ember.default.Component.extend(_sizeClass.default, {
    layout: _bsButtonGroup.default,
    ariaRole: 'group',
    classNameBindings: ['vertical:btn-group-vertical:btn-group', 'justified:btn-group-justified'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'btn-group'
     * @protected
     */
    classTypePrefix: 'btn-group',

    /**
     * Set to true for a vertically stacked button group, see http://getbootstrap.com/components/#btn-groups-vertical
     *
     * @property vertical
     * @type boolean
     * @default false
     * @public
     */
    vertical: false,

    /**
     * Set to true for the buttons to stretch at equal sizes to span the entire width of its parent.
     *
     * *Important*: You have to wrap every button component in a `div class="btn-group">`:
     *
     * ```handlebars
     * <div class="btn-group" role="group">
     * {{#bs-button}}My Button{{/bs-button}}
     * </div>
     * ```
     *
     * See http://getbootstrap.com/components/#btn-groups-justified
     *
     * @property justified
     * @type boolean
     * @default false
     * @public
     */
    justified: false,

    /**
     * The type of the button group specifies how child buttons behave and how the `value` property will be computed:
     *
     * ### null
     * If `type` is not set (null), the button group will add no functionality besides Bootstrap styling
     *
     * ### radio
     * if `type` is set to "radio", the buttons will behave like radio buttons:
     * * the `value` property of the button group will reflect the `value` property of the active button
     * * thus only one button may be active
     *
     * ### checkbox
     * if `type` is set to "checkbox", the buttons will behave like checkboxes:
     * * any number of buttons may be active
     * * the `value` property of the button group will be an array containing the `value` properties of all active buttons
     *
     * @property type
     * @type string
     * @default null
     * @public
     */
    type: null,

    /**
     * The value of the button group, computed by its child buttons.
     * See the `type` property for how the value property is constructed.
     *
     * When you set the value, the corresponding buttons will be activated:
     * * use a single value for a radio button group to activate the button with the same value
     * * use an array of values for a checkbox button group to activate all the buttons with values contained in the array
     *
     * @property value
     * @type array
     * @public
     */
    value: undefined,

    /**
     * @property isRadio
     * @type boolean
     * @private
     */
    isRadio: computed.equal('type', 'radio').readOnly(),

    /**
     * This action is called whenever the button group's value should be changed because the user clicked a button.
     * You will receive the new value of the button group (based on the `type` property), which you should use to update the
     * `value` property.
     *
     * @event onChange
     * @param {*} value
     * @public
     */
    onChange: function onChange() {},


    actions: {
      buttonPressed: function buttonPressed(pressedValue) {
        var newValue = copy(this.get('value'));

        if (this.get('isRadio')) {
          if (newValue !== pressedValue) {
            newValue = pressedValue;
          }
        } else {
          if (!isArray(newValue)) {
            newValue = A([pressedValue]);
          } else {
            newValue = A(newValue);
            if (newValue.includes(pressedValue)) {
              newValue.removeObject(pressedValue);
            } else {
              newValue.pushObject(pressedValue);
            }
          }
        }

        this.get('onChange')(newValue);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-button-group/button', ['exports', 'ember', 'ember-bootstrap/components/bs-button'], function (exports, _ember, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      isArray = _ember.default.isArray;
  exports.default = _bsButton.default.extend({

    /**
     * @property groupValue
     * @private
     */
    groupValue: null,

    /**
     * @property buttonGroupType
     * @type string
     * @private
     */
    buttonGroupType: false,

    /**
     * @property active
     * @type boolean
     * @readonly
     * @private
     */
    active: computed('buttonGroupType', 'groupValue.[]', 'value', function () {
      var _getProperties = this.getProperties('value', 'groupValue'),
          value = _getProperties.value,
          groupValue = _getProperties.groupValue;

      if (this.get('buttonGroupType') === 'radio') {
        return value === groupValue;
      } else {
        if (isArray(groupValue)) {
          return groupValue.indexOf(value) !== -1;
        }
      }
      return false;
    }).readOnly()

  });
});
define('ember-bootstrap/components/base/bs-button', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-button', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/mixins/size-class'], function (exports, _ember, _bsButton, _typeClass, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      observer = _ember.default.observer;
  exports.default = _ember.default.Component.extend(_typeClass.default, _sizeClass.default, {
    layout: _bsButton.default,
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['active', 'block:btn-block'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'btn'
     * @private
     */
    classTypePrefix: 'btn',

    attributeBindings: ['disabled', 'buttonType:type', 'title'],

    /**
     * Default label of the button. Not need if used as a block component
     *
     * @property defaultText
     * @type string
     * @public
     */
    defaultText: null,

    /**
     * Property to disable the button
     *
     * @property disabled
     * @type boolean
     * @default false
     * @public
     */
    disabled: false,

    /**
     * Set the type of the button, either 'button' or 'submit'
     *
     * @property buttonType
     * @type String
     * @default 'button'
     * @public
     */
    buttonType: 'button',

    /**
     * Set the 'active' class to apply active/pressed CSS styling
     *
     * @property active
     * @type boolean
     * @default false
     * @public
     */
    active: false,

    /**
     * Property for block level buttons
     *
     * See the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     * @property block
     * @type boolean
     * @default false
     * @public
     */
    block: false,

    /**
     * If button is active and this is set, the icon property will match this property
     *
     * @property iconActive
     * @type String
     * @public
     */
    iconActive: null,

    /**
     * If button is inactive and this is set, the icon property will match this property
     *
     * @property iconInactive
     * @type String
     * @public
     */
    iconInactive: null,

    /**
     * Class(es) (e.g. glyphicons or font awesome) to use as a button icon
     * This will render a <i class="{{icon}}"></i> element in front of the button's label
     *
     * @property icon
     * @type String
     * @readonly
     * @protected
     */
    icon: computed('active', function () {
      if (this.get('active')) {
        return this.get('iconActive');
      } else {
        return this.get('iconInactive');
      }
    }),

    /**
     * Supply a value that will be associated with this button. This will be send
     * as a parameter of the default action triggered when clicking the button
     *
     * @property value
     * @type any
     * @public
     */
    value: null,

    /**
     * State of the button. The button's label (if not used as a block component) will be set to the
     * `<state>Text` property.
     * This property will automatically be set when using a click action that supplies the callback with an promise
     *
     * @property textState
     * @type String
     * @default 'default'
     * @protected
     */
    textState: 'default',

    /**
     * Set this to true to reset the state. A typical use case is to bind this attribute with ember-data isDirty flag.
     *
     * @property reset
     * @type boolean
     * @public
     */
    reset: null,

    /**
     * The HTML title attribute
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * When clicking the button this action is called with the value of the button (that is the value of the "value" property).
     * Return a promise object, and the buttons state will automatically set to "pending", "resolved" and/or "rejected".
     *
     * @event onClick
     * @param {*} value
     * @public
     */
    onClick: function onClick(value) {},
    // eslint-disable-line no-unused-vars

    /**
     * This will reset the state property to 'default', and with that the button's label to defaultText
     *
     * @method resetState
     * @protected
     */
    resetState: function resetState() {
      this.set('textState', 'default');
    },


    resetObserver: observer('reset', function () {
      if (this.get('reset')) {
        _ember.default.run.scheduleOnce('actions', this, function () {
          this.set('textState', 'default');
        });
      }
    }),

    text: computed('textState', 'defaultText', 'pendingText', 'resolvedText', 'rejectedText', function () {
      return this.getWithDefault(this.get('textState') + 'Text', this.get('defaultText'));
    }),

    /**
     * @method click
     * @private
     */
    click: function click() {
      var _this = this;

      var promise = this.get('onClick')(this.get('value'));
      if (promise && typeof promise.then === 'function') {
        this.set('textState', 'pending');
        promise.then(function () {
          if (!_this.get('isDestroyed')) {
            _this.set('textState', 'resolved');
          }
        }, function () {
          if (!_this.get('isDestroyed')) {
            _this.set('textState', 'rejected');
          }
        });
      }
    },
    init: function init() {
      this._super.apply(this, arguments);
      this.get('reset');
    }
  });
});
define('ember-bootstrap/components/base/bs-collapse', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      observer = _ember.default.observer,
      _Ember$run = _ember.default.run,
      bind = _Ember$run.bind,
      next = _Ember$run.next,
      htmlSafe = _ember.default.String.htmlSafe;
  exports.default = _ember.default.Component.extend({

    classNameBindings: ['collapse', 'collapsing'],
    attributeBindings: ['style'],

    /**
     * Collapsed/expanded state
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @public
     */
    collapsed: true,

    /**
     * True if this item is expanded
     *
     * @property active
     * @private
     */
    active: false,

    collapse: computed.not('transitioning'),
    collapsing: computed.alias('transitioning'),
    showContent: computed.and('collapse', 'active'),

    /**
     * true if the component is currently transitioning
     *
     * @property transitioning
     * @type boolean
     * @private
     */
    transitioning: false,

    /**
     * @property collapseSize
     * @type number
     * @private
     */
    collapseSize: null,

    /**
     * The size of the element when collapsed. Defaults to 0.
     *
     * @property collapsedSize
     * @type number
     * @default 0
     * @public
     */
    collapsedSize: 0,

    /**
     * The size of the element when expanded. When null the value is calculated automatically to fit the containing elements.
     *
     * @property expandedSize
     * @type number
     * @default null
     * @public
     */
    expandedSize: null,

    /**
     * Usually the size (height) of the element is only set while transitioning, and reseted afterwards. Set to true to always set a size.
     *
     * @property resetSizeWhenNotCollapsing
     * @type boolean
     * @default true
     * @private
     */
    resetSizeWhenNotCollapsing: true,

    /**
     * The direction (height/width) of the collapse animation.
     * When setting this to 'width' you should also define custom CSS transitions for the width property, as the Bootstrap
     * CSS does only support collapsible elements for the height direction.
     *
     * @property collapseDimension
     * @type string
     * @default 'height'
     * @public
     */
    collapseDimension: 'height',

    style: computed('collapseSize', function () {
      var size = this.get('collapseSize');
      var dimension = this.get('collapseDimension');
      if (_ember.default.isEmpty(size)) {
        return htmlSafe('');
      }
      return htmlSafe(dimension + ': ' + size + 'px');
    }),

    /**
     * The action to be sent when the element is about to be hidden.
     *
     * @property onHide
     * @type function
     * @public
     */
    onHide: function onHide() {},


    /**
     * The action to be sent after the element has been completely hidden (including the CSS transition).
     *
     * @property onHidden
     * @type function
     * @default null
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * The action to be sent when the element is about to be shown.
     *
     * @property onShow
     * @type function
     * @default null
     * @public
     */
    onShow: function onShow() {},


    /**
     * The action to be sent after the element has been completely shown (including the CSS transition).
     *
     * @property onShown
     * @type function
     * @public
     */
    onShown: function onShown() {},


    /**
     * Triggers the show transition
     *
     * @method show
     * @protected
     */
    show: function show() {
      var complete = function complete() {
        if (this.get('isDestroyed')) {
          return;
        }
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.get('onShown')();
      };

      this.get('onShow')();

      this.setProperties({
        transitioning: true,
        collapseSize: this.get('collapsedSize'),
        active: true
      });

      if (!_ember.default.$.support.transition) {
        return complete.call(this);
      }

      this.$().one('bsTransitionEnd', bind(this, complete))
      // @todo: make duration configurable
      .emulateTransitionEnd(350);

      next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.getExpandedSize('show'));
        }
      });
    },


    /**
     * Get the size of the element when expanded
     *
     * @method getExpandedSize
     * @param $action
     * @return {Number}
     * @private
     */
    getExpandedSize: function getExpandedSize($action) {
      var expandedSize = this.get('expandedSize');
      if (_ember.default.isPresent(expandedSize)) {
        return expandedSize;
      }

      var collapseElement = this.$();
      var prefix = $action === 'show' ? 'scroll' : 'offset';
      var measureProperty = _ember.default.String.camelize(prefix + '-' + this.get('collapseDimension'));
      return collapseElement[0][measureProperty];
    },


    /**
     * Triggers the hide transition
     *
     * @method hide
     * @protected
     */
    hide: function hide() {

      var complete = function complete() {
        if (this.get('isDestroyed')) {
          return;
        }
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.get('onHidden')();
      };

      this.get('onHide')();

      this.setProperties({
        transitioning: true,
        collapseSize: this.getExpandedSize('hide'),
        active: false
      });

      if (!_ember.default.$.support.transition) {
        return complete.call(this);
      }

      this.$().one('bsTransitionEnd', bind(this, complete))
      // @todo: make duration configurable
      .emulateTransitionEnd(350);

      next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.get('collapsedSize'));
        }
      });
    },


    _onCollapsedChange: observer('collapsed', function () {
      var collapsed = this.get('collapsed');
      var active = this.get('active');
      if (collapsed !== active) {
        return;
      }
      if (collapsed === false) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);
      this.set('active', !this.get('collapsed'));
    },


    _updateCollapsedSize: observer('collapsedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('collapsedSize'));
      }
    }),

    _updateExpandedSize: observer('expandedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && !this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('expandedSize'));
      }
    })
  });
});
define('ember-bootstrap/components/base/bs-contextual-help', ['exports', 'ember', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/get-position', 'ember-bootstrap/utils/get-calculated-offset', 'ember-bootstrap/utils/get-parent'], function (exports, _ember, _transitionSupport, _getPosition, _getCalculatedOffset, _getParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var assert = _ember.default.assert,
      Component = _ember.default.Component,
      computed = _ember.default.computed,
      guidFor = _ember.default.guidFor,
      isArray = _ember.default.isArray,
      isBlank = _ember.default.isBlank,
      observer = _ember.default.observer,
      run = _ember.default.run,
      $ = _ember.default.$,
      _Ember$run = _ember.default.run,
      later = _Ember$run.later,
      cancel = _Ember$run.cancel,
      bind = _Ember$run.bind,
      schedule = _Ember$run.schedule,
      next = _Ember$run.next;

  var eventNamespace = 'bs-contextual-help';

  var InState = _ember.default.Object.extend({
    hover: false,
    focus: false,
    click: false,
    showHelp: computed.or('hover', 'focus', 'click')
  });

  /**
  
   @class Components.ContextualHelp
   @namespace Components
   @extends Ember.Component
   @uses Mixins.TransitionSupport
   @private
   */
  exports.default = Component.extend(_transitionSupport.default, {
    tagName: '',

    /**
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * How to position the tooltip/popover - top | bottom | left | right
     *
     * @property title
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    _placement: computed.reads('placement'),

    /**
     * When `true` it will dynamically reorient the tooltip/popover. For example, if `placement` is "left", the
     * tooltip/popover will display to the left when possible, otherwise it will display right.
     *
     * @property autoPlacement
     * @type boolean
     * @default false
     * @public
     */
    autoPlacement: false,

    /**
     * You can programmatically show the tooltip/popover by setting this to `true`
     *
     * @property visible
     * @type boolean
     * @default false
     * @public
     */
    visible: false,

    /**
     * @property inDom
     * @type boolean
     * @private
     */
    inDom: computed.reads('visible'),

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's visibility class
     *
     * @property showHelp
     * @type boolean
     * @default false
     * @private
     */
    showHelp: computed.reads('visible'),

    /**
     * Delay showing and hiding the tooltip/popover (ms). Individual delays for showing and hiding can be specified by using the
     * `delayShow` and `delayHide` properties.
     *
     * @property delay
     * @type number
     * @default 0
     * @public
     */
    delay: 0,

    /**
     * Delay showing the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayShow
     * @type number
     * @default 0
     * @public
     */
    delayShow: computed.reads('delay'),

    /**
     * Delay hiding the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayHide
     * @type number
     * @default 0
     * @public
     */
    delayHide: computed.reads('delay'),

    hasDelayShow: computed.gt('delayShow', 0),
    hasDelayHide: computed.gt('delayHide', 0),

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 150
     * @public
     */
    transitionDuration: 150,

    /**
     * Keeps the tooltip/popover within the bounds of this element when `autoPlacement` is true. Can be any valid jQuery selector.
     *
     * @property viewportSelector
     * @type string
     * @default 'body'
     * @see viewportPadding
     * @see autoPlacement
     * @public
     */
    viewportSelector: 'body',

    /**
     * Take a padding into account for keeping the tooltip/popover within the bounds of the element given by `viewportSelector`.
     *
     * @property viewportPadding
     * @type number
     * @default 0
     * @see viewportSelector
     * @see autoPlacement
     * @public
     */
    viewportPadding: 0,

    /**
     * The id of the overlay element.
     *
     * @property overlayId
     * @type string
     * @readonly
     * @private
     */
    overlayId: computed(function () {
      return 'overlay-' + guidFor(this);
    }),

    /**
     * The jQuery object of the overlay element.
     *
     * @property overlayElement
     * @type object
     * @readonly
     * @private
     */
    overlayElement: computed('overlayId', function () {
      return _ember.default.$('#' + this.get('overlayId'));
    }).volatile(),

    /**
     * The jQuery object of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: null,

    /**
     * The jQuery object of the viewport element.
     *
     * @property viewportElement
     * @type object
     * @readonly
     * @private
     */
    viewportElement: computed('viewportSelector', function () {
      return $(this.get('viewportSelector'));
    }),

    /**
     * The DOM element that triggers the tooltip/popover. By default it is the parent element of this component.
     * You can set this to any jQuery selector to have any other element trigger the tooltip/popover.
     * With the special value of "parentView" you can attach the tooltip/popover to the parent component's element.
     *
     * @property triggerElement
     * @type string
     * @public
     */
    triggerElement: null,

    /**
     * @property triggerTargetElement
     * @type {jQuery}
     * @private
     */
    triggerTargetElement: computed('triggerElement', function () {
      var triggerElement = this.get('triggerElement');
      var $el = void 0;

      if (isBlank(triggerElement)) {
        $el = (0, _getParent.default)(this);
      } else if (triggerElement === 'parentView') {
        $el = $(this.get('parentView.element'));
      } else {
        $el = $(triggerElement);
      }
      assert('Trigger element for tooltip/popover must be present', $el.length === 1);
      return $el;
    }),

    /**
     * The event(s) that should trigger the tooltip/popover - click | hover | focus.
     * You can set this to a single event or multiple events, given as an array or a string separated by spaces.
     *
     * @property triggerEvents
     * @type array|string
     * @default 'hover focus'
     * @public
     */
    triggerEvents: 'hover focus',

    _triggerEvents: computed('triggerEvents', function () {
      var events = this.get('triggerEvents');
      if (!isArray(events)) {
        events = events.split(' ');
      }

      return events.map(function (event) {
        switch (event) {
          case 'hover':
            return ['mouseenter', 'mouseleave'];
          case 'focus':
            return ['focusin', 'focusout'];
          default:
            return event;
        }
      });
    }),

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    renderInPlace: false,

    /**
     * @property _renderInPlace
     * @type boolean
     * @private
     */
    _renderInPlace: computed('renderInPlace', function () {
      return this.get('renderInPlace') || typeof _ember.default.$ !== 'function' || _ember.default.$('#ember-bootstrap-wormhole').length === 0;
    }),

    /**
     * Current hover state, 'in', 'out' or null
     *
     * @property hoverState
     * @type string
     * @private
     */
    hoverState: null,

    /**
     * Current state for events
     *
     * @property inState
     * @type {InState}
     * @private
     */
    inState: computed(function () {
      return InState.create();
    }),

    /**
     * Ember.run timer
     *
     * @property timer
     * @private
     */
    timer: null,

    /**
     * This action is called immediately when the tooltip/popover is about to be shown.
     *
     * @event onShow
     * @public
     */
    onShow: function onShow() {},


    /**
     * This action will be called when the tooltip/popover has been made visible to the user (will wait for CSS transitions to complete).
     *
     * @event onShown
     * @public
     */
    onShown: function onShown() {},


    /**
     * This action is called immediately when the tooltip/popover is about to be hidden.
     *
     * @event onHide
     * @public
     */
    onHide: function onHide() {},


    /**
     * This action is called when the tooltip/popover has finished being hidden from the user (will wait for CSS transitions to complete).
     *
     * @event onHidden
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * Called when a show event has been received
     *
     * @method enter
     * @param e
     * @private
     */
    enter: function enter(e) {
      if (e) {
        var eventType = e.type === 'focusin' ? 'focus' : 'hover';
        this.get('inState').set(eventType, true);
      }

      if (this.get('showHelp') || this.get('hoverState') === 'in') {
        this.set('hoverState', 'in');
        return;
      }

      cancel(this.timer);

      this.set('hoverState', 'in');

      if (!this.get('hasDelayShow')) {
        return this.show();
      }

      this.timer = later(this, function () {
        if (this.get('hoverState') === 'in') {
          this.show();
        }
      }, this.get('delayShow'));
    },


    /**
     * Called when a hide event has been received
     *
     * @method leave
     * @param e
     * @private
     */
    leave: function leave(e) {
      if (e) {
        var eventType = e.type === 'focusout' ? 'focus' : 'hover';
        this.get('inState').set(eventType, false);
      }

      if (this.get('inState.showHelp')) {
        return;
      }

      cancel(this.timer);

      this.set('hoverState', 'out');

      if (!this.get('hasDelayHide')) {
        return this.hide();
      }

      this.timer = later(this, function () {
        if (this.get('hoverState') === 'out') {
          this.hide();
        }
      }, this.get('delayHide'));
    },


    /**
     * Called for a click event
     *
     * @method toggle
     * @param e
     * @private
     */
    toggle: function toggle(e) {
      if (e) {
        this.get('inState').toggleProperty('click');
        if (this.get('inState.showHelp')) {
          this.enter();
        } else {
          this.leave();
        }
      } else {
        if (this.get('showHelp')) {
          this.leave();
        } else {
          this.enter();
        }
      }
    },


    /**
     * Show the tooltip/popover
     *
     * @method show
     * @private
     */
    show: function show() {
      if (this.get('isDestroyed')) {
        return;
      }

      if (false === this.get('onShow')(this)) {
        return;
      }

      // this waits for the tooltip/popover element to be created. when animating a wormholed tooltip/popover we need to wait until
      // ember-wormhole has moved things in the DOM for the animation to be correct, so use Ember.run.next in this case
      var delayFn = !this.get('_renderInPlace') && this.get('fade') ? next : function (target, fn) {
        schedule('afterRender', target, fn);
      };

      this.set('inDom', true);
      delayFn(this, this._show);
    },
    _show: function _show() {
      var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var $element = this.get('triggerTargetElement');
      var placement = this.get('placement');

      // this.$element.attr('aria-describedby', tipId) @todo ?

      var $tip = this.get('overlayElement');
      $tip.css({ top: 0, left: 0, display: 'block' });

      var pos = (0, _getPosition.default)($element);
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (this.get('autoPlacement')) {
        var viewportDim = (0, _getPosition.default)(this.get('viewportElement'));

        placement = placement === 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement === 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement === 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement === 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;
      }

      this.set('_placement', placement);

      var calculatedOffset = (0, _getCalculatedOffset.default)(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);

      function tooltipShowComplete() {
        if (this.get('isDestroyed')) {
          return;
        }
        var prevHoverState = this.get('hoverState');

        this.get('onShown')(this);
        this.set('hoverState', null);

        if (prevHoverState === 'out') {
          this.leave();
        }
      }

      if (skipTransition === false && this.get('usesTransition')) {
        this.get('overlayElement').one('bsTransitionEnd', bind(this, tooltipShowComplete)).emulateTransitionEnd(this.get('transitionDuration'));
      } else {
        tooltipShowComplete.call(this);
      }
    },


    /**
     * Position the tooltip/popover
     *
     * @method applyPlacement
     * @param offset
     * @param placement
     * @private
     */
    applyPlacement: function applyPlacement(offset, placement) {
      var $tip = this.get('overlayElement');
      var width = $tip[0].offsetWidth;
      var height = $tip[0].offsetHeight;

      // manually read margins because getBoundingClientRect includes difference
      var marginTop = parseInt($tip.css('margin-top'), 10);
      var marginLeft = parseInt($tip.css('margin-left'), 10);

      // we must check for NaN for ie 8/9
      if (isNaN(marginTop)) {
        marginTop = 0;
      }
      if (isNaN(marginLeft)) {
        marginLeft = 0;
      }

      offset.top += marginTop;
      offset.left += marginLeft;

      // $.fn.offset doesn't round pixel values
      // so we use setOffset directly with our own function B-0
      $.offset.setOffset($tip[0], $.extend({
        using: function using(props) {
          $tip.css({
            top: Math.round(props.top),
            left: Math.round(props.left)
          });
        }
      }, offset), 0);

      this.set('showHelp', true);

      // check to see if placing tip in new offset caused the tip to resize itself
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (placement === 'top' && actualHeight !== height) {
        offset.top = offset.top + height - actualHeight;
      }

      var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

      if (delta.left) {
        offset.left += delta.left;
      } else {
        offset.top += delta.top;
      }

      var isVertical = /top|bottom/.test(placement);
      var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
      var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

      $tip.offset(offset);
      this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    },


    /**
     * @method getViewportAdjustedDelta
     * @param placement
     * @param pos
     * @param actualWidth
     * @param actualHeight
     * @return {{top: number, left: number}}
     * @private
     */
    getViewportAdjustedDelta: function getViewportAdjustedDelta(placement, pos, actualWidth, actualHeight) {
      var delta = { top: 0, left: 0 };
      var $viewport = this.get('viewportElement');
      if (!$viewport) {
        return delta;
      }

      var viewportPadding = this.get('viewportPadding');
      var viewportDimensions = (0, _getPosition.default)($viewport);

      if (/right|left/.test(placement)) {
        var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
        var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
        if (topEdgeOffset < viewportDimensions.top) {
          // top overflow
          delta.top = viewportDimensions.top - topEdgeOffset;
        } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
          // bottom overflow
          delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
        }
      } else {
        var leftEdgeOffset = pos.left - viewportPadding;
        var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
        if (leftEdgeOffset < viewportDimensions.left) {
          // left overflow
          delta.left = viewportDimensions.left - leftEdgeOffset;
        } else if (rightEdgeOffset > viewportDimensions.right) {
          // right overflow
          delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
        }
      }

      return delta;
    },


    /**
     * Position the tooltip/popover's arrow
     *
     * @method replaceArrow
     * @param delta
     * @param dimension
     * @param isVertical
     * @private
     */
    replaceArrow: function replaceArrow(delta, dimension, isVertical) {
      this.get('arrowElement').css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
    },


    /**
     * Hide the tooltip/popover
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (this.get('isDestroyed')) {
        return;
      }

      if (false === this.get('onHide')(this)) {
        return;
      }

      function tooltipHideComplete() {
        if (this.get('isDestroyed')) {
          return;
        }
        if (this.get('hoverState') !== 'in') {
          this.set('inDom', false);
        }
        this.get('onHidden')(this);
      }

      this.set('showHelp', false);

      if (this.get('usesTransition')) {
        this.get('overlayElement').one('bsTransitionEnd', bind(this, tooltipHideComplete)).emulateTransitionEnd(this.get('transitionDuration'));
      } else {
        tooltipHideComplete.call(this);
      }

      this.set('hoverState', null);
    },


    /**
     * @method addListeners
     * @private
     */
    addListeners: function addListeners() {
      var _this = this;

      var $target = this.get('triggerTargetElement');

      this.get('_triggerEvents').forEach(function (event) {
        if (isArray(event)) {
          var _event = _slicedToArray(event, 2),
              inEvent = _event[0],
              outEvent = _event[1];

          $target.on(inEvent + '.' + eventNamespace, run.bind(_this, _this.enter));
          $target.on(outEvent + '.' + eventNamespace, run.bind(_this, _this.leave));
        } else {
          $target.on(event + '.' + eventNamespace, run.bind(_this, _this.toggle));
        }
      });
    },


    /**
     * @method removeListeners
     * @private
     */
    removeListeners: function removeListeners() {
      this.get('triggerTargetElement').off('.' + eventNamespace);
    },
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.addListeners();
      if (this.get('visible')) {
        next(this, this._show, true);
      }
    },
    willRemoveElement: function willRemoveElement() {
      this._super.apply(this, arguments);
      this.removeListeners();
    },


    _watchVisible: observer('visible', function () {
      if (this.get('visible')) {
        this.show();
      } else {
        this.hide();
      }
    })

  });
});
define('ember-bootstrap/components/base/bs-dropdown', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-dropdown'], function (exports, _ember, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      $ = _ember.default.$,
      bind = _ember.default.run.bind;
  exports.default = _ember.default.Component.extend({
    layout: _bsDropdown.default,
    classNameBindings: ['containerClass'],

    /**
     * This property reflects the state of the dropdown, whether it is open or closed.
     *
     * @property isOpen
     * @default false
     * @type boolean
     * @private
     */
    isOpen: false,

    /**
     * By default clicking on an open dropdown menu will close it. Set this property to false for the menu to stay open.
     *
     * @property closeOnMenuClick
     * @default true
     * @type boolean
     * @public
     */
    closeOnMenuClick: true,

    /**
     * jQuery click event name, namespaced to this component's instance to prevent interference between multiple dropdowns.
     *
     * @property clickEventName
     * @type string
     * @private
     */
    clickEventName: undefined,

    /**
     * By default the dropdown menu will expand downwards. Set to 'up' to expand upwards.
     *
     * @property direction
     * @type string
     * @default 'down'
     * @public
     */
    direction: 'down',

    /**
     * Indicates the dropdown is being used as a navigation item dropdown.
     *
     * @property inNav
     * @type boolean
     * @default false
     * @private
     */
    inNav: false,

    /**
     * A computed property to generate the suiting class for the dropdown container, either "dropdown", "dropup" or "btn-group".
     *
     * @property containerClass
     * @type string
     * @readonly
     * @private
     */
    containerClass: computed('toggle.tagName', 'direction', function () {
      if (this.get('toggle.tagName') === 'button' && !this.get('toggle.block')) {
        return this.get('direction') === 'up' ? 'btn-group dropup' : 'btn-group';
      } else {
        return this.get('direction') === 'up' ? 'dropup' : 'dropdown';
      }
    }),

    /**
     * Reference to the child toggle (Toggle or Button)
     *
     * @property toggle
     * @private
     */
    toggle: null,

    /**
     * Action is called when dropdown is about to be shown
     *
     * @event onShow
     * @param {*} value
     * @public
     */
    onShow: function onShow(value) {},
    // eslint-disable-line no-unused-vars

    /**
     * Action is called when dropdown is about to be hidden
     *
     * @event onHide
     * @param {*} value
     * @public
     */
    onHide: function onHide(value) {},
    // eslint-disable-line no-unused-vars

    actions: {
      toggleDropdown: function toggleDropdown() {
        if (this.get('isOpen')) {
          this.send('closeDropdown');
        } else {
          this.send('openDropdown');
        }
      },
      openDropdown: function openDropdown() {
        this.set('isOpen', true);
        $(document).on(this.clickEventName, bind(this, this.closeOnClickHandler));
        this.get('onShow')();
      },
      closeDropdown: function closeDropdown() {
        this.set('isOpen', false);
        $(document).off(this.clickEventName);
        this.get('onHide')();
      }
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      $(document).off(this.clickEventName);
    },
    init: function init() {
      this._super.apply(this, arguments);
      // click event name that is namespaced to our component instance, so multiple dropdowns do not interfere
      // with each other
      this.clickEventName = 'click.' + this.get('elementId');
    },


    /**
     * Handler for click events to close the dropdown
     *
     * @method closeOnClickHandler
     * @param e
     * @protected
     */
    closeOnClickHandler: function closeOnClickHandler(e) {
      var $target = $(e.target);
      if (!this.get('isDestroyed') && $target.closest(this.$().find('.dropdown-toggle')).length === 0 && ($target.closest(this.$().find('.dropdown-menu')).length === 0 || this.get('closeOnMenuClick'))) {
        this.send('closeDropdown');
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _bsButton, _dropdownToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButton.default.extend(_dropdownToggle.default);
});
define('ember-bootstrap/components/base/bs-dropdown/menu', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-dropdown/menu'], function (exports, _ember, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend({
    layout: _menu.default,

    /**
     * Defaults to a `<ul>` tag. Change for other types of dropdown menus.
     *
     * @property tagName
     * @type string
     * @default ul
     * @public
     */
    tagName: 'ul',
    classNames: ['dropdown-menu'],
    classNameBindings: ['alignClass'],

    /**
     * @property ariaRole
     * @default menu
     * @type string
     * @protected
     */
    ariaRole: 'menu',

    /**
     * Alignment of the menu, either "left" or "right"
     *
     * @property align
     * @type string
     * @default left
     * @public
     */
    align: 'left',

    alignClass: computed('align', function () {
      if (this.get('align') !== 'left') {
        return 'dropdown-menu-' + this.get('align');
      }
    })
  });
});
define('ember-bootstrap/components/base/bs-dropdown/menu/divider', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define('ember-bootstrap/components/base/bs-dropdown/menu/item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: 'li'
  });
});
define('ember-bootstrap/components/base/bs-dropdown/toggle', ['exports', 'ember', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _ember, _dropdownToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend(_dropdownToggle.default, {
    /**
     * Defaults to a `<a>` tag. Change for other types of dropdown toggles.
     *
     * @property tagName
     * @type string
     * @default a
     * @public
     */
    tagName: 'a',

    attributeBindings: ['href'],

    /**
     * Computed property to generate a `href="#"` attribute when `tagName` is "a".
     *
     * @property href
     * @type string
     * @readonly
     * @private
     */
    href: computed('tagName', function () {
      if (this.get('tagName').toUpperCase() === 'A') {
        return '#';
      }
    }),

    /**
     * When clicking the toggle this action is called.
     *
     * @event onClick
     * @param {*} value
     * @public
     */
    onClick: function onClick() {},
    click: function click(e) {
      e.preventDefault();
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-form', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form'], function (exports, _ember, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      RSVP = _ember.default.RSVP,
      set = _ember.default.set,
      assert = _ember.default.assert,
      isPresent = _ember.default.isPresent;
  exports.default = _ember.default.Component.extend({
    layout: _bsForm.default,
    tagName: 'form',
    classNameBindings: ['layoutClass'],
    attributeBindings: ['_novalidate:novalidate'],
    ariaRole: 'form',

    /**
     * Bootstrap form class name (computed)
     *
     * @property layoutClass
     * @type string
     * @readonly
     * @protected
     *
     */

    /**
     * Set a model that this form should represent. This serves several purposes:
     *
     * * child `Components.FormElement`s can access and bind to this model by their `property`
     * * when the model supports validation by using the [ember-validations](https://github.com/dockyard/ember-validations) mixin,
     * child `Components.FormElement`s will look at the validation information of their `property` and render their form group accordingly.
     * Moreover the form's `submit` event handler will validate the model and deny submitting if the model is not validated successfully.
     *
     * @property model
     * @type Ember.Object
     * @public
     */
    model: null,

    /**
     * Set the layout of the form to either "vertical", "horizontal" or "inline". See http://getbootstrap.com/css/#forms-inline and http://getbootstrap.com/css/#forms-horizontal
     *
     * @property formLayout
     * @type string
     * @public
     */
    formLayout: 'vertical',

    /**
     * Check if validating the model is supported. This needs to be implemented by another addon.
     *
     * @property hasValidator
     * @type boolean
     * @readonly
     * @protected
     */
    hasValidator: false,

    /**
     * The Bootstrap grid class for form labels. This is used by the `Components.FormElement` class as a default for the
     * whole form.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @default 'col-md-4'
     * @public
     */
    horizontalLabelGridClass: 'col-md-4',

    /**
     * If set to true pressing enter will submit the form, even if no submit button is present
     *
     * @property submitOnEnter
     * @type boolean
     * @default false
     * @public
     */
    submitOnEnter: false,

    /**
     * If set to true novalidate attribute is present on form element
     *
     * @property novalidate
     * @type boolean
     * @default null
     * @public
     */
    novalidate: false,

    _novalidate: computed('novalidate', function () {
      return this.get('novalidate') === true ? '' : undefined;
    }),

    /**
     * Validate hook which will return a promise that will either resolve if the model is valid
     * or reject if it's not. This should be overridden to add validation support.
     *
     * @method validate
     * @param {Object} model
     * @return {Promise}
     * @public
     */
    validate: function validate(model) {},
    // eslint-disable-line no-unused-vars

    /**
     * @property showAllValidations
     * @type boolean
     * @default false
     * @private
     */
    showAllValidations: false,

    /**
     * Action is called before the form is validated (if possible) and submitted.
     *
     * @event onBefore
     * @param { Object } model  The form's `model`
     * @public
     */
    onBefore: function onBefore(model) {},
    // eslint-disable-line no-unused-vars

    /**
     * Action is called when submit has been triggered and the model has passed all validations (if present).
     *
     * @event onSubmit
     * @param { Object } model  The form's `model`
     * @param { Object } result The returned result from the validate method, if validation is available
     * @public
     */
    onSubmit: function onSubmit(model, result) {},
    // eslint-disable-line no-unused-vars

    /**
     * Action is called when validation of the model has failed.
     *
     * @event onInvalid
     * @param { Object } error
     * @public
     */
    onInvalid: function onInvalid(error) {},
    // eslint-disable-line no-unused-vars

    /**
     * Submit handler that will send the default action ("action") to the controller when submitting the form.
     *
     * If there is a supplied `model` that supports validation (`hasValidator`) the model will be validated before, and
     * only if validation is successful the default action will be sent. Otherwise an "invalid" action will be sent, and
     * all the `showValidation` property of all child `Components.FormElement`s will be set to true, so error state and
     * messages will be shown automatically.
     *
     * @method submit
     * @private
     */
    submit: function submit(e) {
      var _this = this;

      if (e) {
        e.preventDefault();
      }
      var model = this.get('model');

      this.get('onBefore')(model);

      if (!this.get('hasValidator')) {
        return this.get('onSubmit')(model);
      } else {
        var validationPromise = this.validate(this.get('model'));
        if (validationPromise && validationPromise instanceof RSVP.Promise) {
          validationPromise.then(function (r) {
            return _this.get('onSubmit')(model, r);
          }).catch(function (err) {
            _this.set('showAllValidations', true);
            return _this.get('onInvalid')(model, err);
          });
        }
      }
    },
    keyPress: function keyPress(e) {
      var code = e.keyCode || e.which;
      if (code === 13 && this.get('submitOnEnter')) {
        this.$().submit();
      }
    },


    actions: {
      change: function change(value, model, property) {
        assert('You cannot use the form element\'s default onChange action for form elements if not using a model or setting the value directly on a form element. You must add your own onChange action to the form element in this case!', isPresent(model) && isPresent(property));
        set(model, property, value);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element', 'ember-bootstrap/components/bs-form/group'], function (exports, _ember, _element, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      defineProperty = _ember.default.defineProperty,
      isArray = _ember.default.isArray,
      isBlank = _ember.default.isBlank,
      observer = _ember.default.observer,
      on = _ember.default.on,
      scheduleOnce = _ember.default.run.scheduleOnce,
      assert = _ember.default.assert,
      typeOf = _ember.default.typeOf,
      A = _ember.default.A,
      getOwner = _ember.default.getOwner;


  var nonDefaultLayouts = A(['checkbox']);

  /**
   Sub class of `Components.FormGroup` that adds automatic form layout markup and form validation features.
  
   ### Form layout
  
   The appropriate Bootstrap markup for the given `formLayout` and `controlType` is automatically generated to easily
   create forms without coding the default Bootstrap form markup by hand:
  
   ```hbs
   {{#bs-form formLayout="horizontal" action="submit" as |form|}}
   {{form.element controlType="email" label="Email" placeholder="Email" value=email}}
   {{form.element controlType="password" label="Password" placeholder="Password" value=password}}
   {{form.element controlType="checkbox" label="Remember me" value=rememberMe}}
   {{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
   {{/bs-form}}
   ```
  
   ### Form validation
  
   In the following example the control elements of the three form elements value will be bound to the properties
   (given by `property`) of the form's `model`, which in this case is its controller (see `model=this`):
  
   ```hbs
   {{#bs-form formLayout="horizontal" model=this action="submit" as |form|}}
   {{form.element controlType="email" label="Email" placeholder="Email" property="email"}}
   {{form.element controlType="password" label="Password" placeholder="Password" property="password"}}
   {{form.element controlType="checkbox" label="Remember me" property="rememberMe"}}
   {{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
   {{/bs-form}}
   ```
  
   By using this indirection in comparison to directly binding the `value` property, you get the benefit of automatic
   form validation, given that your `model` has a supported means of validating itself.
   See [Components.Form](Components.Form.html) for details on how to enable form validation.
  
   In the example above the `model` was our controller itself, so the control elements were bound to the appropriate
   properties of our controller. A controller implementing validations on those properties could look like this:
  
   ```js
   import Ember from 'ember';
   import EmberValidations from 'ember-validations';
  
   export default Ember.Controller.extend(EmberValidations,{
     email: null,
     password: null,
     rememberMe: false,
     validations: {
       email: {
         presence: true,
         format: {
           with: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
         }
       },
       password: {
         presence: true,
         length: { minimum: 6, maximum: 10}
       },
       comments: {
         length: { minimum: 5, maximum: 20}
       }
     }
   });
   ```
  
   If the `showValidation` property is `true` (which is automatically the case if a `focusOut` event is captured from the
   control element or the containing `Components.Form` was submitted with its `model` failing validation) and there are
   validation errors for the `model`'s `property`, the appropriate Bootstrap validation markup (see
   http://getbootstrap.com/css/#forms-control-validation) is applied:
  
   * `validation` is set to 'error', which will set the `has-error` CSS class
   * the `errorIcon` feedback icon is displayed if `controlType` is a text field
   * the validation messages are displayed as Bootstrap `help-block`s in BS3 and `form-control-feedback` in BS4
  
   The same applies for warning messages, if the used validation library supports this. (Currently only
   [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations))
  
   As soon as the validation is successful again...
  
   * `validation` is set to 'success', which will set the `has-success` CSS class
   * the `successIcon` feedback icon is displayed if `controlType` is a text field
   * the validation messages are removed
  
   In case you want to display some error message that is independent of the model's validation, for example to display
   a failure message on a login form after a failed authentication attempt (so not coming from the validation library),
   you can use the `customError` property to do so.
  
   ### Custom controls
  
   Apart from the standard built-in browser controls (see the `controlType` property), you can use any custom control simply
   by invoking the component with a block template. Use whatever control you might want, for example a select-2 component
   (from the [ember-select-2 addon](https://istefo.github.io/ember-select-2)):
  
   ```hbs
   {{#bs-form model=this onSubmit=(action "submit") as |form|}}
     {{#form.element label="Select-2" property="gender" useIcons=false as |el|}}
       {{select-2 id=el.id content=genderChoices optionLabelPath="label" value=el.value searchEnabled=false}}
     {{/form.element}}
   {{/bs-form}}
   ```
  
   The component yields a hash with the following properties:
   * `control`: the component that would be used for rendering the form control based on the given `controlType`
   * `id`: id to be used for the form control, so it matches the labels `for` attribute
   * `value`: the value of the form element
   * `validation`: the validation state of the element, `null` if no validation is to be shown, otherwise 'success', 'error' or 'warning'
  
   If your custom control does not render an input element, you should set `useIcons` to `false` since bootstrap only supports
   feedback icons with textual `<input class="form-control">` elements.
  
   If you just want to customize the existing control component, you can use the aforementioned yielded `control` component
   to customize that existing component:
  
   ```hbs
   {{#bs-form model=this onSubmit=(action "submit") as |form|}}
     {{#form.element label="Email" placeholder="Email" property="email" as |el|}}
       {{el.control class="input-lg"}}
     {{/form.element}}
   {{/bs-form}}
   ```
  
   ### HTML attributes
  
   To set HTML attributes on the control element provided by this component, set them as properties of this component:
  
   ```hbs
   {{#bs-form formLayout="horizontal" model=this action="submit" as |form|}}
   {{form.element controlType="email" label="Email" property="email"
     placeholder="Email"
     required=true
     multiple=true
     tabIndex=5
   }}
   ...
   {{/bs-form}}
   ```
  
   The following attributes are supported depending on the `controlType`:
  
   <table class="table table-striped">
   <thead>
   <tr>
   <th></th>
   <th>textarea</th>
   <th>checkbox</th>
   <th>all others</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>accept</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>autocomplete</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>autofocus</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>autosave</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>cols</td>
   <td>✔︎</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td>disabled</td>
   <td></td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>form</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>inputmode</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>max</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>maxlength</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>min</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>minlength</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>multiple</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>name</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>pattern</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>placeholder</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>readonly</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>required</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>rows</td>
   <td>✔︎</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td>size</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>spellcheck</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>step</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>tabindex</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>title</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>wrap</td>
   <td>✔︎</td>
   <td></td>
   <td></td>
   </tr>
   </tbody>
   </table>
  
   @class FormElement
   @namespace Components
   @extends Components.FormGroup
   @public
   */
  exports.default = _group.default.extend({
    layout: _element.default,
    classNameBindings: ['disabled:is-disabled', 'required:is-required', 'isValidating'],

    /**
     * Text to display within a `<label>` tag.
     *
     * You should include a label for every form input cause otherwise screen readers
     * will have trouble with your forms. Use `invisibleLabel` property if you want
     * to hide them.
     *
     * @property label
     * @type string
     * @public
     */
    label: null,

    /**
     * Controls label visibility by adding 'sr-only' class.
     *
     * @property invisibleLabel
     * @type boolean
     * @default false
     * @public
     */
    invisibleLabel: false,

    /**
     * @property hasLabel
     * @type boolean
     * @readonly
     * @private
     */
    hasLabel: computed.notEmpty('label'),

    /**
     * The type of the control widget.
     * Supported types:
     *
     * * 'text'
     * * 'checkbox'
     * * 'textarea'
     * * any other type will use an input tag with the `controlType` value as the type attribute (for e.g. HTML5 input
     * types like 'email'), and the same layout as the 'text' type
     *
     * @property controlType
     * @type string
     * @default 'text'
     * @public
     */
    controlType: 'text',

    /**
     * The value of the control element is bound to this property. You can bind it to some controller property to
     * get/set the control element's value:
     *
     * ```hbs
     * {{form.element controlType="email" label="Email" placeholder="Email" value=email}}
     * ```
     *
     * Note: you loose the ability to validate this form element by directly binding to its value. It is recommended
     * to use the `property` feature instead.
     *
     *
     * @property value
     * @public
     */
    value: null,

    /**
     The property name of the form element's `model` (by default the `model` of its parent `Components.Form`) that this
     form element should represent. The control element's value will automatically be bound to the model property's
     value.
      Using this property enables form validation on this element.
      @property property
     @type string
     @public
     */
    property: null,

    /**
     * The model used for validation. Defaults to the parent `Components.Form`'s `model`
     *
     * @property model
     * @public
     */
    model: null,

    /**
     * Show a help text next to the control
     *
     * @property helpText
     * @type {string}
     * @public
     */
    helpText: null,

    /**
     * @property hasHelpText
     * @type boolean
     * @readonly
     * @private
     */
    hasHelpText: computed.notEmpty('helpText').readOnly(),

    /**
     * The array of error messages from the `model`'s validation.
     *
     * @property errors
     * @type array
     * @protected
     */
    errors: null,

    /**
     * @property hasErrors
     * @type boolean
     * @readonly
     * @private
     */
    hasErrors: computed.gt('errors.length', 0),

    /**
     * The array of warning messages from the `model`'s validation.
     *
     * @property errors
     * @type array
     * @protected
     */
    warnings: null,

    /**
     * @property hasWarnings
     * @type boolean
     * @readonly
     * @private
     */
    hasWarnings: computed.gt('warnings.length', 0),

    /**
     * Show a custom error message that does not come from the model's validation. Will be immediately shown, regardless
     * of any user interaction (i.e. no `focusOut` event required)
     *
     * @property customError
     * @type string
     * @public
     */
    customError: null,

    /**
     * @property hasCustomError
     * @type boolean
     * @readonly
     * @private
     */
    hasCustomError: computed.notEmpty('customError'),

    /**
     * The array of validation messages (either errors or warnings) from the `model`'s validation.
     *
     * @property validationMessages
     * @type array
     * @private
     */
    validationMessages: computed('hasCustomError', 'customError', 'hasErrors', 'hasWarnings', 'errors.[]', 'warnings.[]', function () {
      if (this.get('hasCustomError')) {
        return A([this.get('customError')]);
      }
      if (this.get('hasErrors')) {
        return A(this.get('errors'));
      }
      if (this.get('hasWarnings')) {
        return A(this.get('warnings'));
      }
      return null;
    }),

    /**
     * @property hasValidationMessages
     * @type boolean
     * @readonly
     * @private
     */
    hasValidationMessages: computed.gt('validationMessages.length', 0),

    /**
     * @property hasValidator
     * @type boolean
     * @default false
     * @protected
     */
    hasValidator: false,

    /**
     * Set a validating state for async validations
     *
     * @property isValidating
     * @type boolean
     * @default false
     * @protected
     */
    isValidating: false,

    /**
     * If `true` form validation markup is rendered (requires a validatable `model`).
     *
     * @property showValidation
     * @type boolean
     * @default false
     * @private
     */
    showValidation: computed.or('showOwnValidation', 'showAllValidations', 'hasCustomError'),

    /**
     * @property showOwnValidation
     * @type boolean
     * @default false
     * @private
     */
    showOwnValidation: false,

    /**
     * @property showAllValidations
     * @type boolean
     * @default false
     * @private
     */
    showAllValidations: false,

    /**
     * @property showValidationMessages
     * @type boolean
     * @readonly
     * @private
     */
    showValidationMessages: computed.and('showValidation', 'hasValidationMessages'),

    /**
     * Event or list of events which enable form validation markup rendering.
     * Supported events: ['focusOut', 'change', 'input']
     *
     * @property showValidationOn
     * @type string|array
     * @default ['focusOut']
     * @public
     */
    showValidationOn: ['focusOut'],

    /**
     * @property _showValidationOn
     * @type array
     * @readonly
     * @private
     */
    _showValidationOn: computed('showValidationOn', function () {
      var showValidationOn = this.get('showValidationOn');

      assert('showValidationOn must be a String or an Array', isArray(showValidationOn) || typeOf(showValidationOn) === 'string');
      if (isArray(showValidationOn)) {
        return showValidationOn;
      }

      if (typeof showValidationOn.toString === 'function') {
        return [showValidationOn];
      }
      return [];
    }),

    /**
     * @method showValidationOnHandler
     * @private
     */
    showValidationOnHandler: function showValidationOnHandler(event) {
      if (this.get('_showValidationOn').indexOf(event) !== -1) {
        this.set('showOwnValidation', true);
      }
    },


    /**
     * The validation ("error" (BS3)/"danger" (BS4), "warning", or "success") or null if no validation is to be shown. Automatically computed from the
     * models validation state.
     *
     * @property validation
     * @readonly
     * @type string
     * @private
     */
    validation: computed('hasCustomError', 'hasErrors', 'hasWarnings', 'hasValidator', 'showValidation', 'isValidating', 'disabled', function () {
      if (!this.get('showValidation') || !this.get('hasValidator') || this.get('isValidating') || this.get('disabled')) {
        return null;
      }
      return this.get('hasErrors') || this.get('hasCustomError') ? 'error' : this.get('hasWarnings') ? 'warning' : 'success';
    }),

    /**
     * True for text field `controlType`s
     *
     * @property useIcons
     * @type boolean
     * @readonly
     * @public
     */
    useIcons: computed.equal('controlComponent', 'bs-form/element/control/input'),

    /**
     * The form layout used for the markup generation (see http://getbootstrap.com/css/#forms):
     *
     * * 'horizontal'
     * * 'vertical'
     * * 'inline'
     *
     * Defaults to the parent `form`'s `formLayout` property.
     *
     * @property formLayout
     * @type string
     * @default 'vertical'
     * @public
     */
    formLayout: 'vertical',

    /**
     * The Bootstrap grid class for form labels within a horizontal layout form. Defaults to the value of the same
     * property of the parent form. The corresponding grid class for form controls is automatically computed.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @public
     */
    horizontalLabelGridClass: null,

    /**
     * ID for input field and the corresponding label's "for" attribute
     *
     * @property formElementId
     * @type string
     * @private
     */
    formElementId: computed('elementId', function () {
      return this.get('elementId') + '-field';
    }),

    /**
     * ID of the helpText, used for aria-describedby attribute of the control element
     *
     * @property ariaDescribedBy
     * @type string
     * @private
     */
    ariaDescribedBy: computed('elementId', function () {
      return this.get('elementId') + '-help';
    }),

    /**
     * @property layoutComponent
     * @type {String}
     * @private
     */
    layoutComponent: computed('formLayout', 'controlType', function () {
      var formLayout = this.get('formLayout');
      var controlType = this.get('controlType');

      if (nonDefaultLayouts.includes(controlType)) {
        return 'bs-form/element/layout/' + formLayout + '/' + controlType;
      } else {
        return 'bs-form/element/layout/' + formLayout;
      }
    }),

    /**
     * @property controlComponent
     * @type {String}
     * @private
     */
    controlComponent: computed('controlType', function () {
      var controlType = this.get('controlType');
      var componentName = 'bs-form/element/control/' + controlType;

      if (getOwner(this).hasRegistration('component:' + componentName)) {
        return componentName;
      }

      return 'bs-form/element/control/input';
    }),

    /**
     * @property errorsComponent
     * @type {String}
     * @private
     */
    errorsComponent: 'bs-form/element/errors',

    /**
     * @property feedbackIconComponent
     * @type {String}
     * @private
     */
    feedbackIconComponent: 'bs-form/element/feedback-icon',

    /**
     * @property labelComponent
     * @type {String}
     * @private
     */
    labelComponent: 'bs-form/element/label',

    /**
     * @property helpTextComponent
     * @type {String}
     * @private
     */
    helpTextComponent: 'bs-form/element/help-text',

    /**
     * Setup validation properties. This method acts as a hook for external validation
     * libraries to overwrite. In case of failed validations the `errors` property should contain an array of error messages.
     *
     * @method setupValidations
     * @private
     */
    setupValidations: function setupValidations() {},


    /**
     * Listen for focusOut events from the control element to automatically set `showOwnValidation` to true to enable
     * form validation markup rendering if `showValidationsOn` contains `focusOut`.
     *
     * @event focusOut
     * @private
     */
    focusOut: function focusOut() {
      this.showValidationOnHandler('focusOut');
    },


    /**
     * Listen for change events from the control element to automatically set `showOwnValidation` to true to enable
     * form validation markup rendering if `showValidationsOn` contains `change`.
     *
     * @event change
     * @private
     */
    change: function change() {
      this.showValidationOnHandler('change');
    },


    /**
     * Listen for input events from the control element to automatically set `showOwnValidation` to true to enable
     * form validation markup rendering if `showValidationsOn` contains `input`.
     *
     * @event input
     * @private
     */
    input: function input() {
      this.showValidationOnHandler('input');
    },


    /**
     * The action is called whenever the input value is changed, e.g. by typing text
     *
     * @event onChange
     * @param {String} value The new value of the form control
     * @param {Object} model The form element's model
     * @param {String} property The value of `property`
     * @public
     */
    onChange: function onChange() {},
    init: function init() {
      this._super.apply(this, arguments);
      if (!isBlank(this.get('property'))) {
        defineProperty(this, 'value', computed.alias('model.' + this.get('property')));
        this.setupValidations();
      }
    },


    /*
     * adjust feedback icon position
     *
     * Bootstrap documentation:
     *  Manual positioning of feedback icons is required for [...] input groups
     *  with an add-on on the right. [...] For input groups, adjust the right
     *  value to an appropriate pixel value depending on the width of your addon.
     */
    adjustFeedbackIcons: on('didInsertElement', observer('hasFeedback', 'formLayout', function () {
      var _this = this;

      scheduleOnce('afterRender', function () {
        // validation state icons are only shown if form element has feedback
        if (_this.get('hasFeedback') && !_this.get('isDestroying')) {
          // form group element has
          _this.$()
          // an input-group
          .has('.input-group')
          // an addon or button on right si de
          .has('.input-group input + .input-group-addon, .input-group input + .input-group-btn')
          // an icon showing validation state
          .has('.form-control-feedback').each(function (i, formGroups) {
            // clear existing adjustment
            _this.$('.form-control-feedback').css('right', '');
            var feedbackIcon = _this.$('.form-control-feedback', formGroups);
            var defaultPositionString = feedbackIcon.css('right');
            assert(defaultPositionString.substr(-2) === 'px', '.form-control-feedback css right units other than px are not supported');
            var defaultPosition = parseInt(defaultPositionString.substr(0, defaultPositionString.length - 2));
            // Bootstrap documentation:
            //  We do not support multiple add-ons (.input-group-addon or .input-group-btn) on a single side.
            // therefore we could rely on having only one input-group-addon or input-group-btn
            var inputGroupWidth = _this.$('input + .input-group-addon, input + .input-group-btn', formGroups).outerWidth();
            var adjustedPosition = defaultPosition + inputGroupWidth;

            feedbackIcon.css('right', adjustedPosition);
          });
        }
      });
    })),

    actions: {
      change: function change(value) {
        var _getProperties = this.getProperties('onChange', 'model', 'property'),
            onChange = _getProperties.onChange,
            model = _getProperties.model,
            property = _getProperties.property;

        onChange(value, model, property);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/control', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    /**
     * @property value
     * @public
     */
    value: null,

    /**
     * @property ariaDescribedBy
     * @type {string}
     * @public
     */
    ariaDescribedBy: null,

    /**
     * This action is called whenever the `value` changes
     *
     * @event onChange
     * @param {*} value
     * @public
     */
    onChange: function onChange() {}
  });
});
define('ember-bootstrap/components/base/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _control, _controlAttributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _control.default.extend(_controlAttributes.default, {
    attributeBindings: ['value:checked', 'type'],

    /**
     * @property type
     * @type {String}
     * @readonly
     * @private
     */
    type: 'checkbox',

    click: function click(event) {
      this.get('onChange')(event.target.checked);
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _control, _controlAttributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _control.default.extend(_controlAttributes.default, {
    attributeBindings: ['value', 'type', 'placeholder', 'size', 'minlength', 'maxlength', 'min', 'max', 'pattern', 'accept', 'autocomplete', 'autosave', 'inputmode', 'multiple', 'step', 'spellcheck'],
    classNames: ['form-control'],

    /**
     * @property type
     * @type {String}
     * @public
     */
    type: 'text',

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },
    input: function input(event) {
      this.get('onChange')(event.target.value);
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _control, _controlAttributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _control.default.extend(_controlAttributes.default, {
    attributeBindings: ['value', 'placeholder', 'minlength', 'maxlength', 'autocomplete', 'spellcheck', 'rows', 'cols', 'wrap'],
    tagName: 'textarea',
    classNames: ['form-control'],

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },
    input: function input(event) {
      this.get('onChange')(event.target.value);
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/errors', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/errors'], function (exports, _ember, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _errors.default,
    tagName: '',

    /**
     * @property show
     * @type {Boolean}
     * @public
     */
    show: false,

    /**
     * @property messages
     * @type {Ember.Array}
     * @public
     */
    messages: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/feedback-icon', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/feedback-icon'], function (exports, _ember, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _feedbackIcon.default,
    tagName: '',

    /**
     * @property show
     * @type {Boolean}
     * @public
     */
    show: false,

    /**
     * @property iconName
     * @type {String}
     * @public
     */
    iconName: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/help-text', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/help-text'], function (exports, _ember, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _helpText.default,

    /**
     * @property text
     * @type {string}
     * @public
     */
    text: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/label', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/label'], function (exports, _ember, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _label.default,
    tagName: '',

    /**
     * @property label
     * @type string
     * @public
     */
    label: null,

    /**
     * @property invisibleLabel
     * @type boolean
     * @public
     */
    invisibleLabel: false,

    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    formElementId: null,

    /**
     * @property labelClass
     * @type {String}
     * @public
     */
    labelClass: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: '',

    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    formElementId: null,

    /**
     * @property hasLabel
     * @type boolean
     * @public
     */
    hasLabel: true,

    /**
     * @property errorsComponent
     * @type {Ember.Component}
     * @public
     */
    errorsComponent: null,

    /**
     * @property feedbackIconComponent
     * @type {Ember.Component}
     * @public
     */
    feedbackIconComponent: null,

    /**
     * @property labelComponent
     * @type {Ember.Component}
     * @public
     */
    labelComponent: null,

    /**
     * @property helpTextComponent
     * @type {Ember.Component}
     * @public
     */
    helpTextComponent: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/horizontal', ['exports', 'ember', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/horizontal'], function (exports, _ember, _layout, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var assert = _ember.default.assert,
      computed = _ember.default.computed,
      isBlank = _ember.default.isBlank;
  exports.default = _layout.default.extend({
    layout: _horizontal.default,

    /**
     * The Bootstrap grid class for form labels within a horizontal layout form.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @public
     */
    horizontalLabelGridClass: null,

    /**
     * Computed property that specifies the Bootstrap grid class for form controls within a horizontal layout form.
     *
     * @property horizontalInputGridClass
     * @type string
     * @readonly
     * @private
     */
    horizontalInputGridClass: computed('horizontalLabelGridClass', function () {
      if (isBlank(this.get('horizontalLabelGridClass'))) {
        return;
      }
      var parts = this.get('horizontalLabelGridClass').split('-');
      assert('horizontalInputGridClass must match format bootstrap grid column class', parts.length === 3);
      parts[2] = 12 - parts[2];
      return parts.join('-');
    }).readOnly(),

    /**
     * Computed property that specifies the Bootstrap offset grid class for form controls within a horizontal layout
     * form, that have no label.
     *
     * @property horizontalInputOffsetGridClass
     * @type string
     * @readonly
     * @private
     */
    horizontalInputOffsetGridClass: computed('horizontalLabelGridClass', function () {
      if (isBlank(this.get('horizontalLabelGridClass'))) {
        return;
      }
      var parts = this.get('horizontalLabelGridClass').split('-');
      parts.splice(2, 0, 'offset');
      return parts.join('-');
    })

  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/horizontal', 'ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _horizontal, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _horizontal.default.extend({
    layout: _checkbox.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical'], function (exports, _layout, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    layout: _vertical.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox'], function (exports, _inline, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _inline.default.extend({
    layout: _checkbox.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical'], function (exports, _layout, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    layout: _vertical.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/vertical', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox'], function (exports, _vertical, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _vertical.default.extend({
    layout: _checkbox.default
  });
});
define('ember-bootstrap/components/base/bs-form/group', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/group', 'ember-bootstrap/config', 'ember-bootstrap/mixins/size-class'], function (exports, _ember, _group, _config, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend(_sizeClass.default, {
    layout: _group.default,

    classNames: ['form-group'],
    classNameBindings: ['validationClass'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'form-group' (BS3) or 'form-control' (BS4)
     * @private
     */

    /**
     * Whether to show validation state icons.
     * See http://getbootstrap.com/css/#forms-control-validation
     *
     * @property useIcons
     * @type boolean
     * @default true
     * @public
     */
    useIcons: true,

    /**
     * Computed property which is true if the form group is in a validation state
     *
     * @property hasValidation
     * @type boolean
     * @private
     * @readonly
     */
    hasValidation: computed.notEmpty('validation').readOnly(),

    /**
     * Computed property which is true if the form group is showing a validation icon
     *
     * @property hasFeedback
     * @type boolean
     * @private
     * @readonly
     */
    hasFeedback: computed.and('hasValidation', 'useIcons', 'hasIconForValidationState').readOnly(),

    /**
     * The icon classes to be used for a feedback icon in a "success" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationSuccessIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationSuccessIcon: 'fa fa-check'
       * }
     * ```
     *
     * @property successIcon
     * @type string
     * @default 'glyphicon glyphicon-ok'
     * @public
     */
    successIcon: _config.default.formValidationSuccessIcon,

    /**
     * The icon classes to be used for a feedback icon in a "error" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationErrorIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationErrorIcon: 'fa fa-times'
       * }
     * ```
     *
     * @property errorIcon
     * @type string
     * @public
     */
    errorIcon: _config.default.formValidationErrorIcon,

    /**
     * The icon classes to be used for a feedback icon in a "warning" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationWarningIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationWarningIcon: 'fa fa-warning'
       * }
     * ```
     *
     * @property warningIcon
     * @type string
     * @public
     */
    warningIcon: _config.default.formValidationWarningIcon,

    /**
     * The icon classes to be used for a feedback icon in a "info" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationInfoIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationInfoIcon: 'fa fa-info-circle
       * }
     * ```
     *
     * The "info" validation state is not supported in Bootstrap CSS, but can be easily added
     * using the following LESS style:
     * ```less
     * .has-info {
       *   .form-control-validation(@state-info-text; @state-info-text; @state-info-bg);
       * }
     * ```
     *
     * @property infoIcon
     * @type string
     * @public
     */
    infoIcon: _config.default.formValidationInfoIcon,

    /**
     * @property iconName
     * @type string
     * @readonly
     * @private
     */
    iconName: computed('validation', function () {
      var validation = this.get('validation') || 'success';
      return this.get(validation + 'Icon');
    }).readOnly(),

    /**
     * @property hasIconForValidationState
     * @type boolean
     * @readonly
     * @private
     */
    hasIconForValidationState: computed.notEmpty('iconName').readOnly(),

    /**
     * Set to a validation state to render the form-group with a validation style.
     * See http://getbootstrap.com/css/#forms-control-validation
     *
     * The default states of "success", "warning" and "error" are supported by Bootstrap out-of-the-box.
     * But you can use custom states as well. This will set a has-<state> class, and (if `useIcons`is true)
     * a feedback whose class is taken from the <state>Icon property
     *
     * Note that BS4 uses the `has-danger` class for the `error` validation state and does not automatically
     * import glyphicons.
     *
     * @property validation
     * @type string
     * @public
     */
    validation: null,

    /**
     * @property validationClass
     * @type string
     * @readonly
     * @private
     */
    validationClass: computed('_validationType', function () {
      var validation = this.get('_validationType');
      if (!_ember.default.isBlank(validation)) {
        return 'has-' + this.get('_validationType');
      }
    }).readOnly()
  });
});
define('ember-bootstrap/components/base/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal', 'ember-bootstrap/templates/components/bs-modal-simple'], function (exports, _bsModal, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsModal.default.extend({
    layout: _bsModalSimple.default,

    /**
     * The title of the modal, visible in the modal header. Is ignored if `header` is false.
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * Display a close button (x icon) in the corner of the modal header.
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title of the default close button.
     *
     * @property closeTitle
     * @type string
     * @default 'Ok'
     * @public
     */
    closeTitle: 'Ok',

    /**
     * The title of the submit button (primary button). Will be ignored (i.e. no button) if set to null.
     *
     * @property submitTitle
     * @type string
     * @default null
     * @public
     */
    submitTitle: null

  });
});
define('ember-bootstrap/components/base/bs-modal', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _ember, _bsModal, _transitionSupport, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      get = _ember.default.get,
      getOwner = _ember.default.getOwner,
      observer = _ember.default.observer;
  exports.default = _ember.default.Component.extend(_transitionSupport.default, {
    layout: _bsModal.default,

    /**
     * Visibility of the modal. Toggle to to show/hide with CSS transitions.
     *
     * When the modal is closed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onHide` action
     *
     * @property open
     * @type boolean
     * @default true
     * @public
     */
    open: true,

    /**
     * @property isOpen
     * @private
     */
    isOpen: (0, _listenToCp.default)('open'),

    /**
     * @property _isOpen
     * @private
     */
    _isOpen: false,

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: computed.not('isFastBoot'),

    /**
     * @property notFade
     * @type boolean
     * @private
     */
    notFade: computed.not('fade'),

    /**
     * Used to apply Bootstrap's visibility classes.
     *
     * @property showModal
     * @type boolean
     * @default false
     * @private
     */
    showModal: false,

    /**
     * Use a semi-transparent modal background to hide the rest of the page.
     *
     * @property backdrop
     * @type boolean
     * @default true
     * @public
     */
    backdrop: true,

    /**
     * @property showBackdrop
     * @type boolean
     * @default false
     * @private
     */
    showBackdrop: false,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * The id of the `.modal` element.
     *
     * @property modalId
     * @type string
     * @readonly
     * @private
     */
    modalId: computed('elementId', function () {
      return this.get('elementId') + '-modal';
    }),

    /**
     * The jQuery object of the `.modal` element.
     *
     * @property modalElement
     * @type object
     * @readonly
     * @private
     */
    modalElement: computed('modalId', function () {
      return _ember.default.$('#' + this.get('modalId'));
    }).volatile(),

    /**
     * The id of the backdrop element.
     *
     * @property backdropId
     * @type string
     * @readonly
     * @private
     */
    backdropId: computed('elementId', function () {
      return this.get('elementId') + '-backdrop';
    }),

    /**
     * The jQuery object of the backdrop element.
     *
     * @property backdropElement
     * @type object
     * @readonly
     * @private
     */
    backdropElement: computed('backdropId', function () {
      return _ember.default.$('#' + this.get('backdropId'));
    }).volatile(),

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    renderInPlace: false,

    /**
     * @property _renderInPlace
     * @type boolean
     * @private
     */
    _renderInPlace: computed('renderInPlace', 'isFastBoot', function () {
      return this.get('renderInPlace') || !this.get('isFastBoot') && _ember.default.$('#ember-bootstrap-wormhole').length === 0;
    }),

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 300
     * @public
     */
    transitionDuration: 300,

    /**
     * The duration of the backdrop fade transition
     *
     * @property backdropTransitionDuration
     * @type number
     * @default 150
     * @public
     */
    backdropTransitionDuration: 150,

    /**
     * @property isFastBoot
     * @type {Boolean}
     * @private
     */
    isFastBoot: computed(function () {
      if (!getOwner) {
        // Ember.getOwner is available as of Ember 2.3, while FastBoot requires 2.4. So just return false...
        return false;
      }

      var owner = getOwner(this);
      if (!owner) {
        return false;
      }

      var fastboot = owner.lookup('service:fastboot');
      if (!fastboot) {
        return false;
      }

      return get(fastboot, 'isFastBoot');
    }),

    /**
     * The action to be sent when the modal footer's submit button (if present) is pressed.
     * Note that if your modal body contains a form (e.g. [Components.Form](Components.Form.html){{/crossLink}}) this action will
     * not be triggered. Instead a submit event will be triggered on the form itself. See the class description for an
     * example.
     *
     * @property onSubmit
     * @type function
     * @public
     */
    onSubmit: function onSubmit() {},


    /**
     * The action to be sent when the modal is closing.
     * This will be triggered by pressing the modal header's close button (x button) or the modal footer's close button.
     * Note that this will happen before the modal is hidden from the DOM, as the fade transitions will still need some
     * time to finish. Use the `onHidden` if you need the modal to be hidden when the action triggers.
     *
     * You can return false to prevent closing the modal automatically, and do that in your action by
     * setting `open` to false.
     *
     * @property onHide
     * @type function
     * @public
     */
    onHide: function onHide() {},


    /**
     * The action to be sent after the modal has been completely hidden (including the CSS transition).
     *
     * @property onHidden
     * @type function
     * @default null
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * The action to be sent when the modal is opening.
     * This will be triggered immediately after the modal is shown (so it's safe to access the DOM for
     * size calculations and the like). This means that if fade=true, it will be shown in between the
     * backdrop animation and the fade animation.
     *
     * @property onShow
     * @type function
     * @default null
     * @public
     */
    onShow: function onShow() {},


    /**
     * The action to be sent after the modal has been completely shown (including the CSS transition).
     *
     * @property onShown
     * @type function
     * @public
     */
    onShown: function onShown() {},


    actions: {
      close: function close() {
        if (this.get('onHide')() !== false) {
          this.set('isOpen', false);
        }
      },
      submit: function submit() {
        var form = this.get('modalElement').find('.modal-body form');
        if (form.length > 0) {
          // trigger submit event on body form
          form.trigger('submit');
        } else {
          // if we have no form, we send a submit action
          this.get('onSubmit')();
        }
      }
    },

    /**
     * Give the modal (or its autofocus element) focus
     *
     * @method takeFocus
     * @private
     */
    takeFocus: function takeFocus() {
      var focusElement = this.get('modalElement').find('[autofocus]').first();
      if (focusElement.length === 0) {
        focusElement = this.get('modalElement');
      }
      if (focusElement.length > 0) {
        focusElement.focus();
      }
    },


    /**
     * Show the modal
     *
     * @method show
     * @private
     */
    show: function show() {
      if (this._isOpen) {
        return;
      }
      this._isOpen = true;

      this.checkScrollbar();
      this.setScrollbar();

      _ember.default.$('body').addClass('modal-open');

      this.resize();

      var callback = function callback() {
        if (this.get('isDestroyed')) {
          return;
        }

        this.get('modalElement').show().scrollTop(0);

        this.handleUpdate();
        this.set('showModal', true);
        this.get('onShow')();

        if (this.get('usesTransition')) {
          this.get('modalElement').one('bsTransitionEnd', _ember.default.run.bind(this, function () {
            this.takeFocus();
            this.get('onShown')();
          })).emulateTransitionEnd(this.get('transitionDuration'));
        } else {
          this.takeFocus();
          this.get('onShown')();
        }
      };
      this.handleBackdrop(callback);
    },


    /**
     * Hide the modal
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (!this._isOpen) {
        return;
      }
      this._isOpen = false;

      this.resize();
      this.set('showModal', false);

      if (this.get('usesTransition')) {
        this.get('modalElement').one('bsTransitionEnd', _ember.default.run.bind(this, this.hideModal)).emulateTransitionEnd(this.get('transitionDuration'));
      } else {
        this.hideModal();
      }
    },


    /**
     * Clean up after modal is hidden and call onHidden
     *
     * @method hideModal
     * @private
     */
    hideModal: function hideModal() {
      var _this = this;

      if (this.get('isDestroyed')) {
        return;
      }

      this.get('modalElement').hide();
      this.handleBackdrop(function () {
        _ember.default.$('body').removeClass('modal-open');
        _this.resetAdjustments();
        _this.resetScrollbar();
        _this.get('onHidden')();
      });
    },


    /**
     * SHow/hide the backdrop
     *
     * @method handleBackdrop
     * @param callback
     * @private
     */
    handleBackdrop: function handleBackdrop(callback) {
      var doAnimate = this.get('usesTransition');

      if (this.get('isOpen') && this.get('backdrop')) {
        this.set('showBackdrop', true);

        if (!callback) {
          return;
        }

        if (doAnimate) {
          _ember.default.run.schedule('afterRender', this, function () {
            var $backdrop = this.get('backdropElement');
            _ember.default.assert('Backdrop element should be in DOM', $backdrop && $backdrop.length > 0);
            $backdrop.one('bsTransitionEnd', _ember.default.run.bind(this, callback)).emulateTransitionEnd(this.get('backdropTransitionDuration'));
          });
        } else {
          callback.call(this);
        }
      } else if (!this.get('isOpen') && this.get('backdrop')) {
        var $backdrop = this.get('backdropElement');
        _ember.default.assert('Backdrop element should be in DOM', $backdrop && $backdrop.length > 0);

        var callbackRemove = function callbackRemove() {
          this.set('showBackdrop', false);
          if (callback) {
            callback.call(this);
          }
        };
        if (doAnimate) {
          $backdrop.one('bsTransitionEnd', _ember.default.run.bind(this, callbackRemove)).emulateTransitionEnd(this.get('backdropTransitionDuration'));
        } else {
          callbackRemove.call(this);
        }
      } else if (callback) {
        _ember.default.run.next(this, callback);
      }
    },


    /**
     * Attach/Detach resize event listeners
     *
     * @method resize
     * @private
     */
    resize: function resize() {
      if (this.get('isOpen')) {
        _ember.default.$(window).on('resize.bs.modal', _ember.default.run.bind(this, this.handleUpdate));
      } else {
        _ember.default.$(window).off('resize.bs.modal');
      }
    },


    /**
     * @method handleUpdate
     * @private
     */
    handleUpdate: function handleUpdate() {
      this.adjustDialog();
    },


    /**
     * @method adjustDialog
     * @private
     */
    adjustDialog: function adjustDialog() {
      var modalIsOverflowing = this.get('modalElement')[0].scrollHeight > document.documentElement.clientHeight;
      this.get('modalElement').css({
        paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.get('scrollbarWidth') : '',
        paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.get('scrollbarWidth') : ''
      });
    },


    /**
     * @method resetAdjustments
     * @private
     */
    resetAdjustments: function resetAdjustments() {
      this.get('modalElement').css({
        paddingLeft: '',
        paddingRight: ''
      });
    },


    /**
     * @method checkScrollbar
     * @private
     */
    checkScrollbar: function checkScrollbar() {
      var fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }

      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    },


    /**
     * @method setScrollbar
     * @private
     */
    setScrollbar: function setScrollbar() {
      var bodyPad = parseInt(_ember.default.$('body').css('padding-right') || 0, 10);
      this.originalBodyPad = document.body.style.paddingRight || '';
      if (this.bodyIsOverflowing) {
        _ember.default.$('body').css('padding-right', bodyPad + this.get('scrollbarWidth'));
      }
    },


    /**
     * @method resetScrollbar
     * @private
     */
    resetScrollbar: function resetScrollbar() {
      _ember.default.$('body').css('padding-right', this.originalBodyPad);
    },


    /**
     * @property scrollbarWidth
     * @type number
     * @readonly
     * @private
     */
    scrollbarWidth: computed(function () {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      this.get('modalElement').after(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      _ember.default.$(scrollDiv).remove();
      return scrollbarWidth;
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      if (this.get('isOpen')) {
        this.show();
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      _ember.default.$(window).off('resize.bs.modal');
      _ember.default.$('body').removeClass('modal-open');
      this.resetScrollbar();
    },


    _observeOpen: observer('isOpen', function () {
      if (this.get('isOpen')) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);

      var _getProperties = this.getProperties('isOpen', 'backdrop', 'fade'),
          isOpen = _getProperties.isOpen,
          backdrop = _getProperties.backdrop,
          fade = _getProperties.fade;

      this.set('showModal', isOpen && !fade);
      this.set('showBackdrop', isOpen && backdrop);
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/body', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/body'], function (exports, _ember, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _body.default,
    classNames: ['modal-body']
  });
});
define('ember-bootstrap/components/base/bs-modal/dialog', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/dialog'], function (exports, _ember, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend({
    layout: _dialog.default,
    classNames: ['modal'],
    classNameBindings: ['fade'],
    attributeBindings: ['tabindex'],
    ariaRole: 'dialog',
    tabindex: '-1',

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's visibility classes
     *
     * @property showModal
     * @type boolean
     * @default false
     * @private
     */
    showModal: false,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {},


    /**
     * Name of the size class
     *
     * @property sizeClass
     * @type string
     * @readOnly
     * @private
     */
    sizeClass: computed('size', function () {
      var size = this.get('size');
      return _ember.default.isBlank(size) ? null : 'modal-' + size;
    }).readOnly(),

    keyDown: function keyDown(e) {
      var code = e.keyCode || e.which;
      if (code === 27 && this.get('keyboard')) {
        this.get('onClose')();
      }
    },
    click: function click(e) {
      if (e.target !== e.currentTarget || !this.get('backdropClose')) {
        return;
      }
      this.get('onClose')();
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/footer', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/footer'], function (exports, _ember, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend({
    layout: _footer.default,
    tagName: 'form',
    classNames: ['modal-footer'],

    /**
     * The title of the default close button. Will be ignored (i.e. no close button) if you provide your own block
     * template.
     *
     * @property closeTitle
     * @type string
     * @default 'Ok'
     * @public
     */
    closeTitle: 'Ok',

    /**
     * The title of the submit button (primary button). Will be ignored (i.e. no button) if set to null or if you provide
     * your own block template.
     *
     * @property submitTitle
     * @type string
     * @default null
     * @public
     */
    submitTitle: null,

    hasSubmitButton: computed.notEmpty('submitTitle'),

    /**
     * Set to true to disable the submit button. If you bind this to some property that indicates if submitting is allowed
     * (form validation for example) this can be used to prevent the user from pressing the submit button.
     *
     * @property submitDisabled
     * @type boolean
     * @default false
     * @public
     */
    submitDisabled: false,

    /**
     * The action to send to the parent modal component when the modal footer's form is submitted
     *
     * @event onSubmit
     * @public
     */
    onSubmit: function onSubmit() {},


    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {},
    submit: function submit(e) {
      e.preventDefault();
      // send to parent bs-modal component
      this.get('onSubmit')();
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/header', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/header'], function (exports, _ember, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _header.default,
    classNames: ['modal-header'],

    /**
     * Show a close button (x icon)
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title to display in the modal header
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null,

    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {}
  });
});
define('ember-bootstrap/components/base/bs-modal/header/close', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/header/close'], function (exports, _ember, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _close.default,
    tagName: 'button',
    classNames: ['close'],
    attributeBindings: ['type', 'aria-label'],
    'aria-label': 'Close',
    type: 'button',

    /**
     * @event onClick
     * @public
     */
    onChange: function onChange() {},
    click: function click() {
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/header/title', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/header/title'], function (exports, _ember, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _title.default,
    tagName: 'h4',
    classNames: ['modal-title']
  });
});
define('ember-bootstrap/components/base/bs-nav', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-nav'], function (exports, _ember, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var isPresent = _ember.default.isPresent;
  exports.default = _ember.default.Component.extend({
    layout: _bsNav.default,

    tagName: 'ul',
    classNames: ['nav'],

    classNameBindings: ['typeClass', 'justified:nav-justified'],

    typeClass: _ember.default.computed('type', function () {
      var type = this.get('type');
      if (isPresent(type)) {
        return 'nav-' + type;
      }
    }),

    /**
     * Special type of nav, either "pills" or "tabs"
     *
     * @property type
     * @type String
     * @default null
     * @public
     */
    type: null,

    /**
     * Make the nav justified, see [bootstrap docs](http://getbootstrap.com/components/#nav-justified)
     *
     * @property justified
     * @type boolean
     * @default false
     * @public
     */
    justified: false,

    /**
     * Make the nav pills stacked, see [bootstrap docs](http://getbootstrap.com/components/#nav-pills)
     *
     * @property stacked
     * @type boolean
     * @default false
     * @public
     */
    stacked: false
  });
});
define('ember-bootstrap/components/base/bs-nav/item', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-nav/item', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _item, _componentParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      LinkComponent = _ember.default.LinkComponent;
  exports.default = _ember.default.Component.extend(_componentParent.default, {
    layout: _item.default,
    classNameBindings: ['disabled', 'active'],
    tagName: 'li',
    ariaRole: 'presentation',

    /**
     * Render the nav item as disabled (see [Bootstrap docs](http://getbootstrap.com/components/#nav-disabled-links)).
     * By default it will look at any nested `link-to` components and make itself disabled if there is a disabled link.
     * See the [link-to API](http://emberjs.com/api/classes/Ember.Templates.helpers.html#toc_disabling-the-code-link-to-code-component)
     *
     * @property disabled
     * @type boolean
     * @public
     */
    disabled: computed.gt('disabledChildLinks.length', 0),

    /**
     * Render the nav item as active.
     * By default it will look at any nested `link-to` components and make itself active if there is an active link
     * (i.e. the link points to the current route).
     * See the [link-to API](http://emberjs.com/api/classes/Ember.Templates.helpers.html#toc_handling-current-route)
     *
     * @property active
     * @type boolean
     * @public
     */
    active: computed.gt('activeChildLinks.length', 0),

    /**
     * Collection of all `Ember.LinkComponent`s that are children
     *
     * @property childLinks
     * @private
     */
    childLinks: computed.filter('children', function (view) {
      return view instanceof LinkComponent;
    }),

    activeChildLinks: computed.filterBy('childLinks', 'active'),
    disabledChildLinks: computed.filterBy('childLinks', 'disabled'),

    /**
     * Called when clicking the nav item
     *
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-nav/link-to', ['exports', 'ember', 'ember-bootstrap/mixins/component-child'], function (exports, _ember, _componentChild) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.LinkComponent.extend(_componentChild.default, {});
});
define('ember-bootstrap/components/base/bs-navbar', ['exports', 'ember', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/templates/components/bs-navbar'], function (exports, _ember, _typeClass, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend(_typeClass.default, {
    layout: _bsNavbar.default,

    tagName: 'nav',
    classNames: ['navbar'],
    classNameBindings: ['positionClass'],

    classTypePrefix: 'navbar',

    /**
     * Manages the state for the responsive menu between the toggle and the content.
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @protected
     */
    collapsed: true,

    /**
     * Controls whether the wrapping div is a fluid container or not.
     *
     * @property fluid
     * @type boolean
     * @default true
     * @public
     */
    fluid: true,

    /**
     * Specifies the position classes for the navbar, currently supporting none, "fixed-top", "fixed-bottom", and
     * either "static-top" (BS3) or "sticky-top" (BS4).
     * See the [bootstrap docs](http://getbootstrap.com/components/#navbar-fixed-top) for details.
     *
     * @property position
     * @type String
     * @default null
     * @public
     */
    position: null,

    positionClass: _ember.default.computed('position', function () {
      var position = this.get('position');
      var validPositions = this.get('_validPositions');
      var positionPrefix = this.get('_positionPrefix');

      if (validPositions.indexOf(position) === -1) {
        return null;
      }

      return '' + positionPrefix + position;
    }),

    actions: {
      toggleNavbar: function toggleNavbar() {
        this.toggleProperty('collapsed');
      }
    }

    /**
     * Bootstrap 4 Only: Defines the responsive toggle breakpoint size. Options are the standard
     * two character Bootstrap size abbreviations. Used to set the `navbar-toggleable-*`
     * class.
     *
     * @property toggleBreakpoint
     * @type String
     * @default 'md'
     * @public
     */

    /**
     * Bootstrap 4 Only: Sets the background color for the navbar. Can be any color
     * in the set that composes the `bg-*` classes and can be extended by creating your
     * own `bg-*` classes.
     *
     * @property backgroundColor
     * @type String
     * @default 'faded'
     * @public
     */
  });
});
define('ember-bootstrap/components/base/bs-navbar/content', ['exports', 'ember-bootstrap/templates/components/bs-navbar/content', 'ember-bootstrap/components/bs-collapse'], function (exports, _content, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsCollapse.default.extend({
    layout: _content.default,

    classNames: ['navbar-collapse']
  });
});
define('ember-bootstrap/components/base/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNav.default.extend({
    classNames: ['navbar-nav'],

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.set('justified', false);
    }
  });
});
define('ember-bootstrap/components/base/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/templates/components/bs-navbar/toggle'], function (exports, _bsButton, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButton.default.extend({
    layout: _toggle.default,

    classNameBindings: ['collapsed'],
    collapsed: true

    /**
     * Bootstrap 4 Only: Defines the alignment of the toggler. Valid values are 'left' and 'right'
     * to set the `navbar-toggler-*` class.
     *
     * @property align
     * @type String
     * @default null
     * @public
     */

  });
});
define('ember-bootstrap/components/base/bs-popover', ['exports', 'ember', 'ember-bootstrap/components/base/bs-contextual-help', 'ember-bootstrap/templates/components/bs-popover'], function (exports, _ember, _bsContextualHelp, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _bsContextualHelp.default.extend({
    layout: _bsPopover.default,

    /**
     * @property placement
     * @type string
     * @default 'right'
     * @public
     */
    placement: 'right',

    /**
     * @property triggerEvents
     * @type array|string
     * @default 'click'
     * @public
     */
    triggerEvents: 'click',

    /**
     * The jQuery object of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: computed('overlayElement', function () {
      return this.get('overlayElement').find('.arrow');
    })
  });
});
define('ember-bootstrap/components/base/bs-popover/element', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-popover/element'], function (exports, _ember, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Component.extend({
    layout: _element.default,

    classNames: ['popover'],
    classNameBindings: ['fade'],
    ariaRole: 'tooltip',

    /**
     * @property placement
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    /**
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * @property showHelp
     * @type boolean
     * @default false
     * @public
     */
    showHelp: false,

    /**
     * @property title
     * @type string
     * @public
     */
    title: undefined,

    /**
     * @property hasTitle
     * @type boolean
     * @private
     */
    hasTitle: computed.notEmpty('title')
  });
});
define('ember-bootstrap/components/base/bs-progress', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-progress'], function (exports, _ember, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _bsProgress.default,
    classNames: ['progress']
  });
});
define('ember-bootstrap/components/base/bs-progress/bar', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-progress/bar', 'ember-bootstrap/mixins/type-class'], function (exports, _ember, _bar, _typeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      htmlSafe = _ember.default.String.htmlSafe;
  exports.default = _ember.default.Component.extend(_typeClass.default, {
    layout: _bar.default,
    classNames: ['progress-bar'],
    classNameBindings: ['progressBarStriped'],

    attributeBindings: ['style', 'ariaValuenow', 'ariaValuemin', 'ariaValuemax'],

    /**
     * The lower limit of the value range
     *
     * @property minValue
     * @type number
     * @default 0
     * @public
     */
    minValue: 0,

    /**
     * The upper limit of the value range
     *
     * @property maxValue
     * @type number
     * @default 100
     * @public
     */
    maxValue: 100,

    /**
     * The value the progress bar should represent
     *
     * @property value
     * @type number
     * @default 0
     * @public
     */
    value: 0,

    /**
     If true a label will be shown inside the progress bar.
      By default it will be the percentage corresponding to the `value` property, rounded to `roundDigits` digits.
     You can customize it by using the component with a block template, which the component yields the percentage
     value to:
      ```hbs
     {{#bs-progress}}
       {{#bs-progress-bar value=progressValue as |percent|}}{{progressValue}} ({{percent}}%){{/bs-progress-bar}}
     {{/bs-progress}}
     ```
      @property showLabel
     @type boolean
     @default false
     @public
     */
    showLabel: false,

    /**
     * Create a striped effect, see http://getbootstrap.com/components/#progress-striped
     *
     * @property striped
     * @type boolean
     * @default false
     * @public
     */
    striped: false,

    /**
     * Animate the stripes, see http://getbootstrap.com/components/#progress-animated
     *
     * @property animate
     * @type boolean
     * @default false
     * @public
     */
    animate: false,

    /**
     * Specify to how many digits the progress bar label should be rounded.
     *
     * @property roundDigits
     * @type number
     * @default 0
     * @public
     */
    roundDigits: 0,

    progressBarStriped: computed.readOnly('striped'),
    progressBarAnimate: computed.readOnly('animate'),

    ariaValuenow: computed.readOnly('value'),
    ariaValuemin: computed.readOnly('minValue'),
    ariaValuemax: computed.readOnly('maxValue'),

    /**
     * The percentage of `value`
     *
     * @property percent
     * @type number
     * @protected
     * @readonly
     */
    percent: computed('value', 'minValue', 'maxValue', function () {
      var value = parseFloat(this.get('value'));
      var minValue = parseFloat(this.get('minValue'));
      var maxValue = parseFloat(this.get('maxValue'));

      return Math.min(Math.max((value - minValue) / (maxValue - minValue), 0), 1) * 100;
    }).readOnly(),

    /**
     * The percentage of `value`, rounded to `roundDigits` digits
     *
     * @property percentRounded
     * @type number
     * @protected
     * @readonly
     */
    percentRounded: computed('percent', 'roundDigits', function () {
      var roundFactor = Math.pow(10, this.get('roundDigits'));
      return Math.round(this.get('percent') * roundFactor) / roundFactor;
    }).readOnly(),

    /**
     * @property style
     * @type string
     * @private
     * @readonly
     */
    style: computed('percent', function () {
      var percent = this.get('percent');
      return htmlSafe('width: ' + percent + '%');
    })

  });
});
define('ember-bootstrap/components/base/bs-tab', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-tab', 'ember-bootstrap/mixins/component-parent', 'ember-bootstrap/components/bs-tab/pane', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _ember, _bsTab, _componentParent, _pane, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      isPresent = _ember.default.isPresent,
      A = _ember.default.A;
  exports.default = _ember.default.Component.extend(_componentParent.default, {
    layout: _bsTab.default,

    /**
     * Type of nav, either "pills" or "tabs"
     *
     * @property type
     * @type String
     * @default 'tabs'
     * @public
     */
    type: 'tabs',

    /**
     * By default the tabs will be automatically generated using the available [TabPane](Components.TabPane.html)
     * components. If set to true, you can deactivate this and setup the tabs manually. See the example above.
     *
     * @property customTabs
     * @type boolean
     * @default false
     * @public
     */
    customTabs: false,

    /**
     * The id (`elementId`) of the active [TabPane](Components.TabPane.html).
     * By default the first tab will be active, but this can be changed by setting this property
     *
     * ```hbs
     * {{#bs-tab activeId="pane2"}}
     *   {{#tab.pane id="pane1" title="Tab 1"}}
     *      ...
     *   {{/tab.pane}}
     *   {{#tab.pane id="pane1" title="Tab 1"}}
     *     ...
     *   {{/tab.pane}}
     * {{/bs-tab}}
     * ```
     *
     * When the selection is changed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onChange` action
     *
     * @property activeId
     * @type string
     * @public
     */
    activeId: computed.oneWay('childPanes.firstObject.elementId'),

    /**
     * @property isActiveId
     * @private
     */
    isActiveId: (0, _listenToCp.default)('activeId'),

    /**
     * Set to false to disable the fade animation when switching tabs.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * The duration of the fade animation
     *
     * @property fadeDuration
     * @type integer
     * @default 150
     * @public
     */
    fadeDuration: 150,

    /**
     * This action is called when switching the active tab, with the new and previous pane id
     *
     * You can return false to prevent changing the active tab automatically, and do that in your action by
     * setting `activeId`.
     *
     * @event onChange
     * @public
     */
    onChange: function onChange() {},


    /**
     * All `TabPane` child components
     *
     * @property childPanes
     * @type array
     * @readonly
     * @private
     */
    childPanes: computed.filter('children', function (view) {
      return view instanceof _pane.default;
    }),

    /**
     * Array of objects that define the tab structure
     *
     * @property navItems
     * @type array
     * @readonly
     * @private
     */
    navItems: computed('childPanes.@each.{elementId,title,group}', function () {
      var items = A();
      this.get('childPanes').forEach(function (pane) {
        var groupTitle = pane.get('groupTitle');
        var item = pane.getProperties('elementId', 'title');
        if (isPresent(groupTitle)) {
          var group = items.findBy('groupTitle', groupTitle);
          if (group) {
            group.children.push(item);
            group.childIds.push(item.elementId);
          } else {
            items.push({
              isGroup: true,
              groupTitle: groupTitle,
              children: A([item]),
              childIds: A([item.elementId])
            });
          }
        } else {
          items.push(item);
        }
      });
      return items;
    }),

    actions: {
      select: function select(id) {
        var previous = this.get('isActiveId');
        if (this.get('onChange')(id, previous) !== false) {
          // change active tab when `onChange` does not return false
          this.set('isActiveId', id);
        }
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-tab/pane', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-tab/pane', 'ember-bootstrap/mixins/component-child', 'ember-bootstrap/mixins/transition-support'], function (exports, _ember, _pane, _componentChild, _transitionSupport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      observer = _ember.default.observer,
      scheduleOnce = _ember.default.run.scheduleOnce;
  exports.default = _ember.default.Component.extend(_componentChild.default, _transitionSupport.default, {
    layout: _pane.default,
    classNameBindings: ['active', 'usesTransition:fade'],
    classNames: ['tab-pane'],
    ariaRole: 'tabpanel',

    /**
     * @property activeId
     * @private
     */
    activeId: null,

    /**
     * True if this pane is active (visible)
     *
     * @property isActive
     * @type boolean
     * @readonly
     * @private
     */
    isActive: computed('activeId', 'elementId', function () {
      return this.get('activeId') === this.get('elementId');
    }).readOnly(),

    /**
     * Used to apply Bootstrap's "active" class
     *
     * @property active
     * @type boolean
     * @default false
     * @private
     */
    active: false,

    /**
     * Used to trigger the Bootstrap visibility classes.
     *
     * @property showContent
     * @type boolean
     * @default false
     * @private
     */
    showContent: false,

    /**
     * The title for this tab pane. This is used by the `bs-tab` component to automatically generate
     * the tab navigation.
     * See the [Components.Tab](Components.Tab.html) for examples.
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null,

    /**
     * An optional group title used by the `bs-tab` component to group all panes with the same group title
     * under a common drop down in the tab navigation.
     * See the [Components.Tab](Components.Tab.html) for examples.
     *
     * @property groupTitle
     * @type string
     * @default null
     * @public
     */
    groupTitle: null,

    /**
     * Use fade animation when switching tabs.
     *
     * @property fade
     * @type boolean
     * @private
     */
    fade: true,

    /**
     * The duration of the fade out animation
     *
     * @property fadeDuration
     * @type integer
     * @default 150
     * @private
     */
    fadeDuration: 150,

    /**
     * Show the pane
     *
     * @method show
     * @protected
     */
    show: function show() {
      if (this.get('usesTransition')) {
        this.$().one('bsTransitionEnd', _ember.default.run.bind(this, function () {
          if (!this.get('isDestroyed')) {
            this.setProperties({
              active: true,
              showContent: true
            });
          }
        })).emulateTransitionEnd(this.get('fadeDuration'));
      } else {
        this.set('active', true);
      }
    },


    /**
     * Hide the pane
     *
     * @method hide
     * @protected
     */
    hide: function hide() {
      if (this.get('usesTransition')) {
        this.$().one('bsTransitionEnd', _ember.default.run.bind(this, function () {
          if (!this.get('isDestroyed')) {
            this.set('active', false);
          }
        })).emulateTransitionEnd(this.get('fadeDuration'));
        this.set('showContent', false);
      } else {
        this.set('active', false);
      }
    },


    _showHide: observer('isActive', function () {
      if (this.get('isActive')) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);
      scheduleOnce('afterRender', this, function () {
        // isActive comes from parent component, so only available after render...
        this.set('active', this.get('isActive'));
        this.set('showContent', this.get('isActive') && this.get('fade'));
      });
    }
  });
});
define('ember-bootstrap/components/base/bs-tooltip', ['exports', 'ember', 'ember-bootstrap/components/base/bs-contextual-help', 'ember-bootstrap/templates/components/bs-tooltip'], function (exports, _ember, _bsContextualHelp, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _bsContextualHelp.default.extend({
    layout: _bsTooltip.default,

    /**
     * The jQuery object of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: computed('overlayElement', function () {
      return this.get('overlayElement').find('.tooltip-arrow');
    })
  });
});
define('ember-bootstrap/components/base/bs-tooltip/element', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-tooltip/element'], function (exports, _ember, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _element.default,

    classNames: ['tooltip'],
    classNameBindings: ['fade'],
    ariaRole: 'tooltip',

    /**
     * @property placement
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    /**
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * @property showHelp
     * @type boolean
     * @default false
     * @public
     */
    showHelp: false
  });
});
define('ember-bootstrap/components/bs-accordion', ['exports', 'ember-bootstrap/components/base/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsAccordion.default.extend({
    classNames: ['panel-group']
  });
});
define('ember-bootstrap/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/base/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    classNames: ['panel'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'panel'
     * @protected
     */
    classTypePrefix: 'panel'
  });
});
define('ember-bootstrap/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/base/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-bootstrap/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/base/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _title.default.extend({
    classNames: ['panel-heading']
  });
});
define('ember-bootstrap/components/bs-alert', ['exports', 'ember-bootstrap/components/base/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsAlert.default.extend({
    classNameBindings: ['showAlert:in']
  });
});
define('ember-bootstrap/components/bs-button-group', ['exports', 'ember-bootstrap/components/base/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('ember-bootstrap/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/base/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-bootstrap/components/bs-button', ['exports', 'ember-bootstrap/components/base/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('ember-bootstrap/components/bs-collapse', ['exports', 'ember-bootstrap/components/base/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsCollapse.default.extend({
    classNameBindings: ['showContent:in']
  });
});
define('ember-bootstrap/components/bs-dropdown', ['exports', 'ember-bootstrap/components/base/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsDropdown.default.extend({
    classNameBindings: ['isOpen:open']
  });
});
define('ember-bootstrap/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/base/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-bootstrap/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('ember-bootstrap/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _divider.default.extend({
    classNames: ['divider']
  });
});
define('ember-bootstrap/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-bootstrap/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/base/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-bootstrap/components/bs-form', ['exports', 'ember', 'ember-bootstrap/components/base/bs-form'], function (exports, _ember, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _bsForm.default.extend({
    layoutClass: computed('formLayout', function () {
      var layout = this.get('formLayout');
      return layout === 'vertical' ? 'form' : 'form-' + layout;
    }).readOnly()
  });
});
define('ember-bootstrap/components/bs-form/element', ['exports', 'ember-bootstrap/components/base/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/base/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/base/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _errors.default.extend({
    feedbackClass: 'help-block'
  });
});
define('ember-bootstrap/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/base/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/base/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _helpText.default.extend({
    classNames: ['help-block']
  });
});
define('ember-bootstrap/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/base/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _label.default.extend({
    tagName: ''
  });
});
define('ember-bootstrap/components/bs-form/element/layout', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout'], function (exports, _layout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _layout.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/group', ['exports', 'ember', 'ember-bootstrap/components/base/bs-form/group'], function (exports, _ember, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _group.default.extend({
    classNameBindings: ['hasFeedback'],

    classTypePrefix: 'form-group',

    _validationType: computed.readOnly('validation')
  });
});
define('ember-bootstrap/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/base/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal', ['exports', 'ember-bootstrap/components/base/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsModal.default.extend({
    showClass: 'in'
  });
});
define('ember-bootstrap/components/bs-modal/body', ['exports', 'ember-bootstrap/components/base/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/base/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _dialog.default.extend({
    classNameBindings: ['showModal:in']
  });
});
define('ember-bootstrap/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/base/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/header', ['exports', 'ember-bootstrap/components/base/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/base/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/base/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-bootstrap/components/bs-nav', ['exports', 'ember-bootstrap/components/base/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNav.default.extend({
    classNameBindings: ['stacked:nav-stacked']
  });
});
define('ember-bootstrap/components/bs-nav/item', ['exports', 'ember-bootstrap/components/base/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-bootstrap/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/base/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar', ['exports', 'ember-bootstrap/components/base/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNavbar.default.extend({
    _validPositions: ['fixed-top', 'fixed-bottom', 'static-top'],

    _positionPrefix: 'navbar-'
  });
});
define('ember-bootstrap/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/base/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/base/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/base/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _toggle.default.extend({
    classNames: ['navbar-toggle']
  });
});
define('ember-bootstrap/components/bs-popover', ['exports', 'ember-bootstrap/components/base/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('ember-bootstrap/components/bs-popover/element', ['exports', 'ember-bootstrap/components/base/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    classNameBindings: ['placement', 'showHelp:in']
  });
});
define('ember-bootstrap/components/bs-progress', ['exports', 'ember-bootstrap/components/base/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('ember-bootstrap/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/base/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bar.default.extend({
    classNameBindings: ['progressBarAnimate:active'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'progress-bar'
     * @protected
     */
    classTypePrefix: 'progress-bar'
  });
});
define('ember-bootstrap/components/bs-tab', ['exports', 'ember-bootstrap/components/base/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('ember-bootstrap/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/base/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pane.default.extend({
    classNameBindings: ['showContent:in']
  });
});
define('ember-bootstrap/components/bs-tooltip', ['exports', 'ember-bootstrap/components/base/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('ember-bootstrap/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/base/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    classNameBindings: ['placement', 'showHelp:in']
  });
});
define('ember-bootstrap/config', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Config = _ember.default.Object.extend();

  Config.reopenClass({
    formValidationSuccessIcon: 'glyphicon glyphicon-ok',
    formValidationErrorIcon: 'glyphicon glyphicon-remove',
    formValidationWarningIcon: 'glyphicon glyphicon-warning-sign',
    formValidationInfoIcon: 'glyphicon glyphicon-info-sign',
    insertEmberWormholeElementToDom: true,

    load: function load() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      for (var property in config) {
        if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
          this[property] = config[property];
        }
      }
    }
  });

  exports.default = Config;
});
define('ember-bootstrap/helpers/bs-contains', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bsContains = bsContains;
  var isArray = _ember.default.isArray,
      A = _ember.default.A;
  function bsContains(params /* , hash*/) {
    return isArray(params[0]) ? A(params[0]).includes(params[1]) : false;
  }

  exports.default = _ember.default.Helper.helper(bsContains);
});
define('ember-bootstrap/helpers/bs-eq', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eq = eq;
  function eq(params) {
    return params[0] === params[1];
  }

  exports.default = _ember.default.Helper.helper(eq);
});
define('ember-bootstrap/mixins/component-child', ['exports', 'ember', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _componentParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Mixin.create({

    /**
     * The parent component
     *
     * @property _parent
     * @private
     */
    _parent: computed(function () {
      return this.nearestOfType(_componentParent.default);
    }),

    /**
     * flag to check if component has already been registered
     * @property _didRegister
     * @type boolean
     * @private
     */
    _didRegister: false,

    /**
     * Register ourself as a child at the parent component
     * We use the `willRender` event here to also support the fastboot environment, where there is no `didInsertElement`
     *
     * @method _registerWithParent
     * @private
     */
    _registerWithParent: function _registerWithParent() {
      if (!this._didRegister) {
        var parent = this.get('_parent');
        if (parent) {
          parent.registerChild(this);
          this._didRegister = true;
        }
      }
    },


    /**
     * Unregister from the parent component
     *
     * @method _unregisterFromParent
     * @private
     */
    _unregisterFromParent: function _unregisterFromParent() {
      var parent = this.get('_parent');
      if (this._didRegister && parent) {
        parent.removeChild(this);
        this._didRegister = false;
      }
    },
    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this._registerWithParent();
    },
    willRender: function willRender() {
      this._super.apply(this, arguments);
      this._registerWithParent();
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this._registerWithParent();
    }
  });
});
define('ember-bootstrap/mixins/component-parent', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({

    /**
     * Array of registered child components
     *
     * @property children
     * @type array
     * @protected
     */
    children: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('children', _ember.default.A());
    },


    /**
     * Register a component as a child of this parent
     *
     * @method registerChild
     * @param child
     * @public
     */
    registerChild: function registerChild(child) {
      _ember.default.run.schedule('sync', this, function () {
        this.get('children').addObject(child);
      });
    },


    /**
     * Remove the child component from this parent component
     *
     * @method removeChild
     * @param child
     * @public
     */
    removeChild: function removeChild(child) {
      this.get('children').removeObject(child);
    }
  });
});
define('ember-bootstrap/mixins/control-attributes', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({
    attributeBindings: ['name', 'autofocus', 'disabled', 'readonly', 'required', 'tabindex', 'form', 'title', 'ariaDescribedBy:aria-describedby'],
    tagName: 'input'
  });
});
define('ember-bootstrap/mixins/dropdown-toggle', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var next = _ember.default.run.next;
  exports.default = _ember.default.Mixin.create({
    classNames: ['dropdown-toggle'],

    /**
     * @property ariaRole
     * @default button
     * @type string
     * @protected
     */
    ariaRole: 'button',

    /**
     * Reference to the parent dropdown component
     *
     * @property dropdown
     * @type {Components.Dropdown}
     * @private
     */
    dropdown: null,

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      var dropdown = this.get('dropdown');
      if (dropdown) {
        next(this, function () {
          if (!this.get('isDestroyed')) {
            dropdown.set('toggle', this);
          }
        });
      }
    }
  });
});
define('ember-bootstrap/mixins/size-class', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({
    /**
     * Prefix for the size class, e.g. "btn" for button size classes ("btn-lg", "btn-sm" etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,

    classNameBindings: ['sizeClass'],

    sizeClass: _ember.default.computed('size', function () {
      var prefix = this.get('classTypePrefix');
      var size = this.get('size');
      return _ember.default.isBlank(size) ? null : prefix + '-' + size;
    }),

    /**
     * Property for size styling, set to 'lg', 'sm' or 'xs'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null
  });
});
define('ember-bootstrap/mixins/sub-component', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({
    targetObject: _ember.default.computed.alias('parentView')
  });
});
define('ember-bootstrap/mixins/transition-support', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed;
  exports.default = _ember.default.Mixin.create({

    /**
     * @property transitionsEnabled
     * @type boolean
     * @private
     */
    transitionsEnabled: computed.reads('fade'),

    /**
     * Access to the fastboot service if available
     *
     * @property fastboot
     * @type {Ember.Service}
     * @private
     */
    fastboot: _ember.default.computed(function () {
      var owner = _ember.default.getOwner(this);
      return owner.lookup('service:fastboot');
    }),

    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    usesTransition: computed('fade', 'fastboot.isFastBoot', function () {
      return !this.get('fastboot.isFastBoot') && _ember.default.$.support.transition && this.get('transitionsEnabled');
    })
  });
});
define('ember-bootstrap/mixins/type-class', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({
    /**
     * Prefix for the type class, e.g. "btn" for button type classes ("btn-primary2 etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,

    classNameBindings: ['typeClass'],

    typeClass: _ember.default.computed('type', function () {
      var prefix = this.get('classTypePrefix');
      var type = this.get('type') || 'default';
      return prefix + '-' + type;
    }),

    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-options) (use without "btn-" prefix)
     *
     * @property type
     * @type String
     * @default 'default'
     * @public
     */
    type: 'default'
  });
});
define("ember-bootstrap/templates/components/bs-accordion", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "/yY73kNU", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"item\",\"change\"],[[\"helper\",[\"component\"],[\"bs-accordion/item\"],[[\"selected\",\"onClick\"],[[\"get\",[\"isSelected\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],null]]]],[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],null]]]]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion.hbs" } });
});
define("ember-bootstrap/templates/components/bs-accordion/body", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "0FZ3EYdk", "block": "{\"statements\":[[\"block\",[\"bs-collapse\"],null,[[\"collapsed\",\"class\"],[[\"get\",[\"collapsed\"]],\"panel-collapse\"]],0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion/body.hbs" } });
});
define("ember-bootstrap/templates/components/bs-accordion/item", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "MZkdWNwr", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block-params\",\"default\"]],null,3,2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"bs-accordion/item/title\"],null,[[\"collapsed\",\"onClick\"],[[\"get\",[\"collapsed\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"onClick\"]],[\"get\",[\"value\"]]],null]]],1],[\"block\",[\"bs-accordion/item/body\"],null,[[\"collapsed\"],[[\"get\",[\"collapsed\"]]]],0]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"title\",\"body\"],[[\"helper\",[\"component\"],[\"bs-accordion/item/title\"],[[\"collapsed\",\"onClick\"],[[\"get\",[\"collapsed\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"onClick\"]],[\"get\",[\"value\"]]],null]]]],[\"helper\",[\"component\"],[\"bs-accordion/item/body\"],[[\"collapsed\"],[[\"get\",[\"collapsed\"]]]]]]]]]],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion/item.hbs" } });
});
define("ember-bootstrap/templates/components/bs-accordion/title", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "HD0iHkFy", "block": "{\"statements\":[[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion/title.hbs" } });
});
define("ember-bootstrap/templates/components/bs-alert", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "Dj7G7H09", "block": "{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hidden\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"close\"],[\"static-attr\",\"aria-label\",\"Close\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"dismiss\"]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"dismissible\"]]],null,0],[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-alert.hbs" } });
});
define("ember-bootstrap/templates/components/bs-button-group", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "NPexA8ND", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"button\"],[[\"helper\",[\"component\"],[\"bs-button-group/button\"],[[\"buttonGroupType\",\"groupValue\",\"onClick\"],[[\"get\",[\"type\"]],[\"get\",[\"value\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"buttonPressed\"],null]]]]]]]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-button-group.hbs" } });
});
define("ember-bootstrap/templates/components/bs-button", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "f0+QrrU/", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"icon\"]]],null,0],[\"append\",[\"unknown\",[\"text\"]],false],[\"yield\",\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"open-element\",\"i\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"icon\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-button.hbs" } });
});
define("ember-bootstrap/templates/components/bs-dropdown", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "IyUML+kQ", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"button\",\"toggle\",\"menu\",\"isOpen\"],[[\"helper\",[\"component\"],[\"bs-dropdown/button\"],[[\"dropdown\",\"onClick\"],[[\"get\",[null]],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleDropdown\"],null]]]],[\"helper\",[\"component\"],[\"bs-dropdown/toggle\"],[[\"dropdown\",\"inNav\",\"onClick\"],[[\"get\",[null]],[\"get\",[\"inNav\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleDropdown\"],null]]]],[\"helper\",[\"component\"],[\"bs-dropdown/menu\"],null],[\"get\",[\"isOpen\"]]]]]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-dropdown.hbs" } });
});
define("ember-bootstrap/templates/components/bs-dropdown/menu", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "y0bnuKi3", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"item\",\"divider\"],[[\"helper\",[\"component\"],[\"bs-dropdown/menu/item\"],null],[\"helper\",[\"component\"],[\"bs-dropdown/menu/divider\"],null]]]]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-dropdown/menu.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "8ln4rbqU", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"element\",\"group\"],[[\"helper\",[\"component\"],[\"bs-form/element\"],[[\"model\",\"formLayout\",\"horizontalLabelGridClass\",\"showAllValidations\",\"onChange\"],[[\"get\",[\"model\"]],[\"get\",[\"formLayout\"]],[\"get\",[\"horizontalLabelGridClass\"]],[\"get\",[\"showAllValidations\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],null]]]],[\"helper\",[\"component\"],[\"bs-form/group\"],[[\"formLayout\"],[[\"get\",[\"formLayout\"]]]]]]]]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "DcYL8y05", "block": "{\"statements\":[[\"block\",[\"component\"],[[\"get\",[\"layoutComponent\"]]],[[\"hasLabel\",\"formElementId\",\"horizontalLabelGridClass\",\"errorsComponent\",\"feedbackIconComponent\",\"labelComponent\",\"helpTextComponent\"],[[\"get\",[\"hasLabel\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"horizontalLabelGridClass\"]],[\"helper\",[\"component\"],[[\"get\",[\"errorsComponent\"]]],[[\"messages\",\"show\"],[[\"get\",[\"validationMessages\"]],[\"get\",[\"showValidationMessages\"]]]]],[\"helper\",[\"component\"],[[\"get\",[\"feedbackIconComponent\"]]],[[\"iconName\",\"show\"],[[\"get\",[\"iconName\"]],[\"get\",[\"hasFeedback\"]]]]],[\"helper\",[\"component\"],[[\"get\",[\"labelComponent\"]]],[[\"label\",\"invisibleLabel\",\"formElementId\"],[[\"get\",[\"label\"]],[\"get\",[\"invisibleLabel\"]],[\"get\",[\"formElementId\"]]]]],[\"helper\",[\"if\"],[[\"get\",[\"hasHelpText\"]],[\"helper\",[\"component\"],[[\"get\",[\"helpTextComponent\"]]],[[\"text\",\"id\"],[[\"get\",[\"helpText\"]],[\"get\",[\"ariaDescribedBy\"]]]]]],null]]],3]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"control\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"value\",\"id\",\"validation\",\"control\"],[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]],[\"get\",[\"control\"]]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[\"control\"]},{\"statements\":[[\"block\",[\"with\"],[[\"helper\",[\"component\"],[[\"get\",[\"controlComponent\"]]],[[\"value\",\"id\",\"name\",\"type\",\"label\",\"placeholder\",\"autofocus\",\"disabled\",\"readonly\",\"required\",\"size\",\"tabindex\",\"minlength\",\"maxlength\",\"min\",\"max\",\"pattern\",\"accept\",\"autocomplete\",\"autosave\",\"inputmode\",\"multiple\",\"step\",\"form\",\"spellcheck\",\"cols\",\"rows\",\"wrap\",\"title\",\"options\",\"optionLabelPath\",\"ariaDescribedBy\",\"onChange\",\"validationType\"],[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"controlType\"]],[\"get\",[\"label\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"disabled\"]],[\"get\",[\"readonly\"]],[\"get\",[\"required\"]],[\"get\",[\"size\"]],[\"get\",[\"tabindex\"]],[\"get\",[\"minlength\"]],[\"get\",[\"maxlength\"]],[\"get\",[\"min\"]],[\"get\",[\"max\"]],[\"get\",[\"pattern\"]],[\"get\",[\"accept\"]],[\"get\",[\"autocomplete\"]],[\"get\",[\"autosave\"]],[\"get\",[\"inputmode\"]],[\"get\",[\"multiple\"]],[\"get\",[\"step\"]],[\"get\",[\"form\"]],[\"get\",[\"spellcheck\"]],[\"get\",[\"cols\"]],[\"get\",[\"rows\"]],[\"get\",[\"wrap\"]],[\"get\",[\"title\"]],[\"get\",[\"options\"]],[\"get\",[\"optionLabelPath\"]],[\"helper\",[\"if\"],[[\"get\",[\"hasHelpText\"]],[\"get\",[\"ariaDescribedBy\"]]],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"change\"],null],[\"get\",[\"_validationType\"]]]]]],null,2]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/errors", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "veArgMpm", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"show\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"unknown\",[\"feedbackClass\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"messages\",\"firstObject\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/errors.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/feedback-icon", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "yIK5DCeZ", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"show\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-control-feedback \",[\"unknown\",[\"iconName\"]]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/feedback-icon.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/help-text", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "M/nNYYs7", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"text\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/help-text.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/label", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "NtIHxrhu", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null],\" \",[\"unknown\",[\"labelClass\"]]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/label.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/horizontal", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "DNm+tWxc", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"feedbackIconComponent\"]]],null],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"errorsComponent\"]]],null],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"helpTextComponent\"]]],null],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"labelComponent\"]]],[[\"labelClass\"],[[\"get\",[\"horizontalLabelGridClass\"]]]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"feedbackIconComponent\"]]],null],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"errorsComponent\"]]],null],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"helpTextComponent\"]]],null],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/horizontal.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "KNpRGiYH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"component\"],[[\"get\",[\"labelComponent\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"errorsComponent\"]]],null],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"helpTextComponent\"]]],null],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/vertical", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "iboju/3X", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"feedbackIconComponent\"]]],null],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"errorsComponent\"]]],null],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"helpTextComponent\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"labelComponent\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/vertical.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "Smx6tC4T", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"component\"],[[\"get\",[\"labelComponent\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"errorsComponent\"]]],null],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"helpTextComponent\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/group", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "45W5xObV", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasFeedback\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-control-feedback \",[\"unknown\",[\"iconName\"]]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/group.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal-simple", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "tSmRzb0T", "block": "{\"statements\":[[\"block\",[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-wormhole\",[\"get\",[\"_renderInPlace\"]]]],3]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"modal-backdrop \",[\"helper\",[\"if\"],[[\"get\",[\"fade\"]],\"fade\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"showModal\"]],[\"get\",[\"showClass\"]]],null]]]],[\"dynamic-attr\",\"id\",[\"concat\",[[\"unknown\",[\"backdropId\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"close\",\"submit\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"submit\"],null]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"bs-modal/header\"],null,[[\"title\",\"closeButton\",\"onClose\"],[[\"get\",[\"title\"]],[\"get\",[\"closeButton\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null]]]],false],[\"text\",\"\\n\"],[\"block\",[\"bs-modal/body\"],null,null,1],[\"text\",\"    \"],[\"append\",[\"helper\",[\"bs-modal/footer\"],null,[[\"closeTitle\",\"submitTitle\",\"onClose\",\"onSubmit\"],[[\"get\",[\"closeTitle\"]],[\"get\",[\"submitTitle\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"submit\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"bs-modal/dialog\"],null,[[\"onClose\",\"fade\",\"showModal\",\"id\",\"keyboard\",\"size\",\"backdropClose\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"get\",[\"fade\"]],[\"get\",[\"showModal\"]],[\"get\",[\"modalId\"]],[\"get\",[\"keyboard\"]],[\"get\",[\"size\"]],[\"get\",[\"backdropClose\"]],[\"get\",[\"class\"]]]],2],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showBackdrop\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal-simple.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "Lcwf1B/5", "block": "{\"statements\":[[\"block\",[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-wormhole\",[\"get\",[\"_renderInPlace\"]]]],2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"modal-backdrop \",[\"helper\",[\"if\"],[[\"get\",[\"fade\"]],\"fade\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"showModal\"]],[\"get\",[\"showClass\"]]],null]]]],[\"dynamic-attr\",\"id\",[\"concat\",[[\"unknown\",[\"backdropId\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"header\",\"body\",\"footer\",\"close\",\"submit\"],[[\"helper\",[\"component\"],[\"bs-modal/header\"],[[\"title\",\"onClose\"],[[\"get\",[\"title\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null]]]],[\"helper\",[\"component\"],[\"bs-modal/body\"],null],[\"helper\",[\"component\"],[\"bs-modal/footer\"],[[\"onClose\",\"onSubmit\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"submit\"],null]]]],[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"submit\"],null]]]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"bs-modal/dialog\"],null,[[\"onClose\",\"fade\",\"showModal\",\"id\",\"keyboard\",\"size\",\"backdropClose\",\"class\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"get\",[\"fade\"]],[\"get\",[\"showModal\"]],[\"get\",[\"modalId\"]],[\"get\",[\"keyboard\"]],[\"get\",[\"size\"]],[\"get\",[\"backdropClose\"]],[\"get\",[\"class\"]]]],1],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showBackdrop\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/body", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "KQpl1ob4", "block": "{\"statements\":[[\"yield\",\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/body.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/dialog", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "3rYcQtqh", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"modal-dialog \",[\"unknown\",[\"sizeClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/dialog.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/footer", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "YIOuGIbD", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,6,5]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"closeTitle\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"block\",[\"bs-button\"],null,[[\"type\",\"onClick\"],[\"primary\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"onClose\"]]],null]]],0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"unknown\",[\"submitTitle\"]],false]],\"locals\":[]},{\"statements\":[[\"append\",[\"unknown\",[\"closeTitle\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"block\",[\"bs-button\"],null,[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"onClose\"]]],null]]],3],[\"text\",\"\\n    \"],[\"block\",[\"bs-button\"],null,[[\"type\",\"onClick\",\"disabled\"],[\"primary\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"onSubmit\"]]],null],[\"get\",[\"submitDisabled\"]]]],2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasSubmitButton\"]]],null,4,1]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/footer.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/header", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "dNjpsZkU", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"closeButton\"]]],null,3],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,2,1]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"title\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"bs-modal/header/title\"],null,null,0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"bs-modal/header/close\"],null,[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"onClose\"]]],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/header.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/header/close", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "UmGoZcDv", "block": "{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/header/close.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/header/title", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "1C1gbayA", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/header/title.hbs" } });
});
define("ember-bootstrap/templates/components/bs-nav", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "Hcn9RASm", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"item\",\"link-to\",\"dropdown\"],[[\"helper\",[\"component\"],[\"bs-nav/item\"],null],[\"helper\",[\"component\"],[\"bs-nav/link-to\"],null],[\"helper\",[\"component\"],[\"bs-dropdown\"],[[\"inNav\"],[true]]]]]]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-nav.hbs" } });
});
define("ember-bootstrap/templates/components/bs-nav/item", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "VZsfUj0q", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-nav/item.hbs" } });
});
define("ember-bootstrap/templates/components/bs-navbar", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "ARzJdoqn", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"get\",[\"fluid\"]],\"container-fluid\",\"container\"],null],null],[\"flush-element\"],[\"text\",\"\\n  \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"toggle\",\"content\",\"nav\"],[[\"helper\",[\"component\"],[\"bs-navbar/toggle\"],[[\"onClick\",\"collapsed\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleNavbar\"],null],[\"get\",[\"collapsed\"]]]]],[\"helper\",[\"component\"],[\"bs-navbar/content\"],[[\"collapsed\"],[[\"get\",[\"collapsed\"]]]]],[\"helper\",[\"component\"],[\"bs-navbar/nav\"],null]]]]]],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-navbar.hbs" } });
});
define("ember-bootstrap/templates/components/bs-navbar/content", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "Va5sYL1o", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-navbar/content.hbs" } });
});
define("ember-bootstrap/templates/components/bs-navbar/toggle", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "LcBvAcX1", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-navbar/toggle.hbs" } });
});
define("ember-bootstrap/templates/components/bs-popover", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "ZdeJEuTm", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"inDom\"]]],null,4]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"bs-popover/element\"],null,[[\"id\",\"placement\",\"fade\",\"showHelp\",\"title\",\"class\"],[[\"get\",[\"overlayId\"]],[\"get\",[\"_placement\"]],[\"get\",[\"fade\"]],[\"get\",[\"showHelp\"]],[\"get\",[\"title\"]],[\"get\",[\"class\"]]]],2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-wormhole\",[\"get\",[\"_renderInPlace\"]]]],3],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-popover.hbs" } });
});
define("ember-bootstrap/templates/components/bs-popover/element", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "+nuAA0of", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"arrow\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasTitle\"]]],null,0],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"popover-content\"],[\"flush-element\"],[\"yield\",\"default\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"popover-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-popover/element.hbs" } });
});
define("ember-bootstrap/templates/components/bs-progress", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "Aic919YI", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"bar\"],[[\"helper\",[\"component\"],[\"bs-progress/bar\"],null]]]]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-progress.hbs" } });
});
define("ember-bootstrap/templates/components/bs-progress/bar", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "HmLKbK1X", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"showLabel\"]]],null,5,2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"percentRounded\"]],false],[\"text\",\"%\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"yield\",\"default\",[[\"get\",[\"percentRounded\"]]]],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"percentRounded\"]],false],[\"text\",\"%\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\",[[\"get\",[\"percentRounded\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,4,3]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-progress/bar.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tab", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "hiETX+7t", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"customTabs\"]]],null,11,10]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"#\",[\"unknown\",[\"item\",\"elementId\"]]]]],[\"static-attr\",\"role\",\"tab\"],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"isActiveId\"]],[\"get\",[\"item\",\"elementId\"]]],null],\"nav-link active\",\"nav-link\"],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"select\",[\"get\",[\"item\",\"elementId\"]]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"item\",\"title\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"item\"],null,[[\"active\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"item\",\"elementId\"]],[\"get\",[\"isActiveId\"]]],null]]],0]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"#\",[\"unknown\",[\"subItem\",\"elementId\"]]]]],[\"static-attr\",\"role\",\"tab\"],[\"dynamic-attr\",\"class\",[\"helper\",[\"if\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"isActiveId\"]],[\"get\",[\"subItem\",\"elementId\"]]],null],\"nav-link active\",\"nav-link\"],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"select\",[\"get\",[\"subItem\",\"elementId\"]]]],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"append\",[\"unknown\",[\"subItem\",\"title\"]],false],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"menu\",\"item\"],null,[[\"class\"],[[\"helper\",[\"if\"],[[\"helper\",[\"bs-eq\"],[[\"get\",[\"isActiveId\"]],[\"get\",[\"subItem\",\"elementId\"]]],null],\"active\"],null]]],2]],\"locals\":[\"subItem\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"item\",\"children\"]]],null,3]],\"locals\":[\"menu\"]},{\"statements\":[[\"append\",[\"unknown\",[\"item\",\"groupTitle\"]],false],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"block\",[\"dd\",\"toggle\"],null,null,5],[\"text\",\"\\n\"],[\"block\",[\"dd\",\"menu\"],null,null,4]],\"locals\":[\"dd\"]},{\"statements\":[[\"block\",[\"nav\",\"dropdown\"],null,[[\"tagName\",\"class\"],[\"li\",[\"helper\",[\"if\"],[[\"helper\",[\"bs-contains\"],[[\"get\",[\"item\",\"childIds\"]],[\"get\",[\"isActiveId\"]]],null],\"active\"],null]]],6]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"item\",\"isGroup\"]]],null,7,1]],\"locals\":[\"item\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"navItems\"]]],null,8]],\"locals\":[\"nav\"]},{\"statements\":[[\"block\",[\"bs-nav\"],null,[[\"type\"],[[\"get\",[\"type\"]]]],9],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tab-content\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"pane\",\"activeId\",\"select\"],[[\"helper\",[\"component\"],[\"bs-tab/pane\"],[[\"parent\",\"activeId\",\"fade\",\"fadeTransition\"],[[\"get\",[null]],[\"get\",[\"isActiveId\"]],[\"get\",[\"fade\"]],[\"get\",[\"fadeTransition\"]]]]],[\"get\",[\"isActiveId\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"select\"],null]]]]]],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"helper\",[\"hash\"],null,[[\"pane\",\"activeId\",\"select\"],[[\"helper\",[\"component\"],[\"bs-tab/pane\"],[[\"parent\",\"activeId\",\"fade\",\"fadeTransition\"],[[\"get\",[null]],[\"get\",[\"isActiveId\"]],[\"get\",[\"fade\"]],[\"get\",[\"fadeTransition\"]]]]],[\"get\",[\"isActiveId\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"select\"],null]]]]]],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tab.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tab/pane", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "t3OmLcQz", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tab/pane.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tooltip", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "L8Uyd2qL", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"inDom\"]]],null,4]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"bs-tooltip/element\"],null,[[\"id\",\"placement\",\"fade\",\"showHelp\",\"class\"],[[\"get\",[\"overlayId\"]],[\"get\",[\"_placement\"]],[\"get\",[\"fade\"]],[\"get\",[\"showHelp\"]],[\"get\",[\"class\"]]]],2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-wormhole\",[\"get\",[\"_renderInPlace\"]]]],3],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tooltip.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tooltip/element", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "NNzn50QZ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tooltip-arrow\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tooltip-inner\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tooltip/element.hbs" } });
});
define('ember-bootstrap/utils/get-calculated-offset', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getCalculatedOffset;
  var assert = _ember.default.assert;
  function getCalculatedOffset(placement, pos, actualWidth, actualHeight) {
    switch (placement) {
      case 'bottom':
        return { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 };
      case 'top':
        return { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 };
      case 'left':
        return { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth };
      case 'right':
        return { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
      default:
        assert('position must be one of bottom|top|left|right', false);
    }
  }
});
define('ember-bootstrap/utils/get-parent', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getParent;
  var get = _ember.default.get,
      $ = _ember.default.$;
  function getParent(view) {
    if (get(view, 'tagName') === '') {
      // Beware: use of private API! :(
      if (_ember.default.ViewUtils && _ember.default.ViewUtils.getViewBounds) {
        return $(_ember.default.ViewUtils.getViewBounds(view).parentElement);
      } else {
        return $(view._renderNode.contextualElement);
      }
    } else {
      return view.$().parent();
    }
  }
});
define('ember-bootstrap/utils/get-position', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getPosition;
  var $ = _ember.default.$;
  function getPosition($element) {
    var el = $element.get(0);
    var isBody = el.tagName === 'BODY';

    var elRect = el.getBoundingClientRect();

    // not needed as we won't support IE8
    //
    // if (elRect.width == null) {
    //   // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
    //   elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    // }

    var isSvg = window.SVGElement && el instanceof window.SVGElement;
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

    return $.extend({}, elRect, scroll, outerDims, elOffset);
  }
});
define('ember-bootstrap/utils/listen-to-cp', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (dependentKey) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return computed(dependentKey, {
      get: function get() {
        return getWithDefault(this, dependentKey, defaultValue);
      },
      set: function set(key, value) {
        // eslint-disable-line no-unused-vars
        return value;
      }
    });
  };

  var computed = _ember.default.computed,
      getWithDefault = _ember.default.getWithDefault;
});
define('ember-cli-app-version/initializer-factory', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = initializerFactory;
  var classify = _ember['default'].String.classify;
  var libraries = _ember['default'].libraries;

  function initializerFactory(name, version) {
    var registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        libraries.register(appName, version);
        registered = true;
      }
    };
  }
});
define("ember-cli-app-version/utils/regexp", ["exports"], function (exports) {
  var versionRegExp = /\d[.]\d[.]\d/;
  exports.versionRegExp = versionRegExp;
  var shaRegExp = /[a-z\d]{8}/;
  exports.shaRegExp = shaRegExp;
});
define("ember-data/-private/adapters", ["exports", "ember-data/adapters/json-api", "ember-data/adapters/rest"], function (exports, _jsonApi, _rest) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RESTAdapter = exports.JSONAPIAdapter = undefined;
  exports.JSONAPIAdapter = _jsonApi.default;
  exports.RESTAdapter = _rest.default;
});
define('ember-data/-private/adapters/build-url-mixin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var get = _ember.default.get;

  /**
  
    WARNING: This interface is likely to change in order to accomodate https://github.com/emberjs/rfcs/pull/4
  
    ## Using BuildURLMixin
  
    To use url building, include the mixin when extending an adapter, and call `buildURL` where needed.
    The default behaviour is designed for RESTAdapter.
  
    ### Example
  
    ```javascript
    export default DS.Adapter.extend(BuildURLMixin, {
      findRecord: function(store, type, id, snapshot) {
        var url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
        return this.ajax(url, 'GET');
      }
    });
    ```
  
    ### Attributes
  
    The `host` and `namespace` attributes will be used if defined, and are optional.
  
    @class BuildURLMixin
    @namespace DS
  */
  exports.default = _ember.default.Mixin.create({
    /**
      Builds a URL for a given type and optional ID.
       By default, it pluralizes the type's name (for example, 'post'
      becomes 'posts' and 'person' becomes 'people'). To override the
      pluralization see [pathForType](#method_pathForType).
       If an ID is specified, it adds the ID to the path generated
      for the type, separated by a `/`.
       When called by RESTAdapter.findMany() the `id` and `snapshot` parameters
      will be arrays of ids and snapshots.
       @method buildURL
      @param {String} modelName
      @param {(String|Array|Object)} id single id or array of ids or query
      @param {(DS.Snapshot|Array)} snapshot single snapshot or array of snapshots
      @param {String} requestType
      @param {Object} query object of query parameters to send for query requests.
      @return {String} url
    */
    buildURL: function buildURL(modelName, id, snapshot, requestType, query) {
      switch (requestType) {
        case 'findRecord':
          return this.urlForFindRecord(id, modelName, snapshot);
        case 'findAll':
          return this.urlForFindAll(modelName, snapshot);
        case 'query':
          return this.urlForQuery(query, modelName);
        case 'queryRecord':
          return this.urlForQueryRecord(query, modelName);
        case 'findMany':
          return this.urlForFindMany(id, modelName, snapshot);
        case 'findHasMany':
          return this.urlForFindHasMany(id, modelName, snapshot);
        case 'findBelongsTo':
          return this.urlForFindBelongsTo(id, modelName, snapshot);
        case 'createRecord':
          return this.urlForCreateRecord(modelName, snapshot);
        case 'updateRecord':
          return this.urlForUpdateRecord(id, modelName, snapshot);
        case 'deleteRecord':
          return this.urlForDeleteRecord(id, modelName, snapshot);
        default:
          return this._buildURL(modelName, id);
      }
    },


    /**
      @method _buildURL
      @private
      @param {String} modelName
      @param {String} id
      @return {String} url
    */
    _buildURL: function _buildURL(modelName, id) {
      var path = void 0;
      var url = [];
      var host = get(this, 'host');
      var prefix = this.urlPrefix();

      if (modelName) {
        path = this.pathForType(modelName);
        if (path) {
          url.push(path);
        }
      }

      if (id) {
        url.push(encodeURIComponent(id));
      }
      if (prefix) {
        url.unshift(prefix);
      }

      url = url.join('/');
      if (!host && url && url.charAt(0) !== '/') {
        url = '/' + url;
      }

      return url;
    },


    /**
     Builds a URL for a `store.findRecord(type, id)` call.
      Example:
      ```app/adapters/user.js
     import DS from 'ember-data';
      export default DS.JSONAPIAdapter.extend({
       urlForFindRecord(id, modelName, snapshot) {
         let baseUrl = this.buildURL();
         return `${baseUrl}/users/${snapshot.adapterOptions.user_id}/playlists/${id}`;
       }
     });
     ```
      @method urlForFindRecord
     @param {String} id
     @param {String} modelName
     @param {DS.Snapshot} snapshot
     @return {String} url
      */
    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      return this._buildURL(modelName, id);
    },


    /**
     Builds a URL for a `store.findAll(type)` call.
      Example:
      ```app/adapters/comment.js
     import DS from 'ember-data';
      export default DS.JSONAPIAdapter.extend({
       urlForFindAll(modelName, snapshot) {
         return 'data/comments.json';
       }
     });
     ```
      @method urlForFindAll
     @param {String} modelName
     @param {DS.SnapshotRecordArray} snapshot
     @return {String} url
     */
    urlForFindAll: function urlForFindAll(modelName, snapshot) {
      return this._buildURL(modelName);
    },


    /**
     Builds a URL for a `store.query(type, query)` call.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.RESTAdapter.extend({
       host: 'https://api.github.com',
       urlForQuery (query, modelName) {
         switch(modelName) {
           case 'repo':
             return `https://api.github.com/orgs/${query.orgId}/repos`;
           default:
             return this._super(...arguments);
         }
       }
     });
     ```
      @method urlForQuery
     @param {Object} query
     @param {String} modelName
     @return {String} url
     */
    urlForQuery: function urlForQuery(query, modelName) {
      return this._buildURL(modelName);
    },


    /**
     Builds a URL for a `store.queryRecord(type, query)` call.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.RESTAdapter.extend({
       urlForQueryRecord({ slug }, modelName) {
         let baseUrl = this.buildURL();
         return `${baseUrl}/${encodeURIComponent(slug)}`;
       }
     });
     ```
      @method urlForQueryRecord
     @param {Object} query
     @param {String} modelName
     @return {String} url
     */
    urlForQueryRecord: function urlForQueryRecord(query, modelName) {
      return this._buildURL(modelName);
    },


    /**
     Builds a URL for coalesceing multiple `store.findRecord(type, id)
     records into 1 request when the adapter's `coalesceFindRequests`
     property is true.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.RESTAdapter.extend({
       urlForFindMany(ids, modelName) {
         let baseUrl = this.buildURL();
         return `${baseUrl}/coalesce`;
       }
     });
     ```
      @method urlForFindMany
     @param {Array} ids
     @param {String} modelName
     @param {Array} snapshots
     @return {String} url
     */
    urlForFindMany: function urlForFindMany(ids, modelName, snapshots) {
      return this._buildURL(modelName);
    },


    /**
     Builds a URL for fetching a async hasMany relationship when a url
     is not provided by the server.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.JSONAPIAdapter.extend({
       urlForFindHasMany(id, modelName, snapshot) {
         let baseUrl = this.buildURL(id, modelName);
         return `${baseUrl}/relationships`;
       }
     });
     ```
      @method urlForFindHasMany
     @param {String} id
     @param {String} modelName
     @param {DS.Snapshot} snapshot
     @return {String} url
     */
    urlForFindHasMany: function urlForFindHasMany(id, modelName, snapshot) {
      return this._buildURL(modelName, id);
    },


    /**
     Builds a URL for fetching a async belongsTo relationship when a url
     is not provided by the server.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.JSONAPIAdapter.extend({
       urlForFindBelongsTo(id, modelName, snapshot) {
         let baseUrl = this.buildURL(id, modelName);
         return `${baseUrl}/relationships`;
       }
     });
     ```
      @method urlForFindBelongsTo
     @param {String} id
     @param {String} modelName
     @param {DS.Snapshot} snapshot
     @return {String} url
     */
    urlForFindBelongsTo: function urlForFindBelongsTo(id, modelName, snapshot) {
      return this._buildURL(modelName, id);
    },


    /**
     Builds a URL for a `record.save()` call when the record was created
     locally using `store.createRecord()`.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.RESTAdapter.extend({
       urlForCreateRecord(modelName, snapshot) {
         return this._super(...arguments) + '/new';
       }
     });
     ```
      @method urlForCreateRecord
     @param {String} modelName
     @param {DS.Snapshot} snapshot
     @return {String} url
     */
    urlForCreateRecord: function urlForCreateRecord(modelName, snapshot) {
      return this._buildURL(modelName);
    },


    /**
     Builds a URL for a `record.save()` call when the record has been update locally.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.RESTAdapter.extend({
       urlForUpdateRecord(id, modelName, snapshot) {
         return `/${id}/feed?access_token=${snapshot.adapterOptions.token}`;
       }
     });
     ```
      @method urlForUpdateRecord
     @param {String} id
     @param {String} modelName
     @param {DS.Snapshot} snapshot
     @return {String} url
     */
    urlForUpdateRecord: function urlForUpdateRecord(id, modelName, snapshot) {
      return this._buildURL(modelName, id);
    },


    /**
     Builds a URL for a `record.save()` call when the record has been deleted locally.
      Example:
      ```app/adapters/application.js
     import DS from 'ember-data';
      export default DS.RESTAdapter.extend({
       urlForDeleteRecord(id, modelName, snapshot) {
         return this._super(...arguments) + '/destroy';
       }
     });
     ```
      @method urlForDeleteRecord
     @param {String} id
     @param {String} modelName
     @param {DS.Snapshot} snapshot
     @return {String} url
     */
    urlForDeleteRecord: function urlForDeleteRecord(id, modelName, snapshot) {
      return this._buildURL(modelName, id);
    },


    /**
      @method urlPrefix
      @private
      @param {String} path
      @param {String} parentURL
      @return {String} urlPrefix
    */
    urlPrefix: function urlPrefix(path, parentURL) {
      var host = get(this, 'host');
      var namespace = get(this, 'namespace');

      if (!host || host === '/') {
        host = '';
      }

      if (path) {
        // Protocol relative url
        if (/^\/\//.test(path) || /http(s)?:\/\//.test(path)) {
          // Do nothing, the full host is already included.
          return path;

          // Absolute path
        } else if (path.charAt(0) === '/') {
          return '' + host + path;
          // Relative path
        } else {
          return parentURL + '/' + path;
        }
      }

      // No path provided
      var url = [];
      if (host) {
        url.push(host);
      }
      if (namespace) {
        url.push(namespace);
      }
      return url.join('/');
    },


    /**
      Determines the pathname for a given type.
       By default, it pluralizes the type's name (for example,
      'post' becomes 'posts' and 'person' becomes 'people').
       ### Pathname customization
       For example if you have an object LineItem with an
      endpoint of "/line_items/".
       ```app/adapters/application.js
      import DS from 'ember-data';
       export default DS.RESTAdapter.extend({
        pathForType: function(modelName) {
          var decamelized = Ember.String.decamelize(modelName);
          return Ember.String.pluralize(decamelized);
        }
      });
      ```
       @method pathForType
      @param {String} modelName
      @return {String} path
    **/
    pathForType: function pathForType(modelName) {
      var camelized = _ember.default.String.camelize(modelName);
      return _ember.default.String.pluralize(camelized);
    }
  });
});
define('ember-data/-private/core', ['exports', 'ember', 'ember-data/version'], function (exports, _ember, _version) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
    @module ember-data
  */

  /**
    All Ember Data classes, methods and functions are defined inside of this namespace.
  
    @class DS
    @static
  */

  /**
    @property VERSION
    @type String
    @static
  */
  var DS = _ember.default.Namespace.create({
    VERSION: _version.default,
    name: "DS"
  });

  if (_ember.default.libraries) {
    _ember.default.libraries.registerCoreLibrary('Ember Data', DS.VERSION);
  }

  exports.default = DS;
});
define('ember-data/-private/debug', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.assert = assert;
  exports.debug = debug;
  exports.deprecate = deprecate;
  exports.info = info;
  exports.runInDebug = runInDebug;
  exports.instrument = instrument;
  exports.warn = warn;
  exports.debugSeal = debugSeal;
  exports.assertPolymorphicType = assertPolymorphicType;
  function assert() {
    return _ember.default.assert.apply(_ember.default, arguments);
  }

  function debug() {
    return _ember.default.debug.apply(_ember.default, arguments);
  }

  function deprecate() {
    return _ember.default.deprecate.apply(_ember.default, arguments);
  }

  function info() {
    return _ember.default.info.apply(_ember.default, arguments);
  }

  function runInDebug() {
    return _ember.default.runInDebug.apply(_ember.default, arguments);
  }

  function instrument(method) {
    return method();
  }

  function warn() {
    return _ember.default.warn.apply(_ember.default, arguments);
  }

  function debugSeal() {
    return _ember.default.debugSeal.apply(_ember.default, arguments);
  }

  function checkPolymorphic(modelClass, addedModelClass) {
    if (modelClass.__isMixin) {
      //TODO Need to do this in order to support mixins, should convert to public api
      //once it exists in Ember
      return modelClass.__mixin.detect(addedModelClass.PrototypeMixin);
    }
    if (_ember.default.MODEL_FACTORY_INJECTIONS) {
      modelClass = modelClass.superclass;
    }
    return modelClass.detect(addedModelClass);
  }

  /*
    Assert that `addedRecord` has a valid type so it can be added to the
    relationship of the `record`.
  
    The assert basically checks if the `addedRecord` can be added to the
    relationship (specified via `relationshipMeta`) of the `record`.
  
    This utility should only be used internally, as both record parameters must
    be an InternalModel and the `relationshipMeta` needs to be the meta
    information about the relationship, retrieved via
    `record.relationshipFor(key)`.
  
    @method assertPolymorphicType
    @param {InternalModel} internalModel
    @param {RelationshipMeta} relationshipMeta retrieved via
           `record.relationshipFor(key)`
    @param {InternalModel} addedRecord record which
           should be added/set for the relationship
  */
  function assertPolymorphicType(parentInternalModel, relationshipMeta, addedInternalModel) {
    var addedModelName = addedInternalModel.modelName;
    var parentModelName = parentInternalModel.modelName;
    var key = relationshipMeta.key;
    var relationshipModelName = relationshipMeta.type;
    var relationshipClass = parentInternalModel.store.modelFor(relationshipModelName);
    var assertionMessage = 'You cannot add a record of modelClass \'' + addedModelName + '\' to the \'' + parentModelName + '.' + key + '\' relationship (only \'' + relationshipModelName + '\' allowed)';

    assert(assertionMessage, checkPolymorphic(relationshipClass, addedInternalModel.modelClass));
  }
});
define('ember-data/-private/ext/date', ['exports', 'ember', 'ember-data/-private/debug'], function (exports, _ember, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseDate = undefined;


  /**
     Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
  
     © 2011 Colin Snover <http://zetafleet.com>
  
     Released under MIT license.
  
     @class Date
     @namespace Ember
     @static
     @deprecated
  */
  /**
    @module ember-data
  */

  _ember.default.Date = _ember.default.Date || {};

  var origParse = Date.parse;
  var numericKeys = [1, 4, 5, 6, 7, 10, 11];

  var parseDate = exports.parseDate = function parseDate(date) {
    var timestamp = void 0,
        struct = void 0;
    var minutesOffset = 0;

    // ES5 §15.9.4.2 states that the string should attempt to be parsed as a Date Time String Format string
    // before falling back to any implementation-specific date parsing, so that’s what we do, even if native
    // implementations could be faster
    //              1 YYYY                2 MM       3 DD           4 HH    5 mm       6 ss        7 msec        8 Z 9 ±    10 tzHH    11 tzmm
    if (struct = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2}):?(?:(\d{2}))?)?)?$/.exec(date)) {
      // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
      for (var i = 0, k; k = numericKeys[i]; ++i) {
        struct[k] = +struct[k] || 0;
      }

      // allow undefined days and months
      struct[2] = (+struct[2] || 1) - 1;
      struct[3] = +struct[3] || 1;

      if (struct[8] !== 'Z' && struct[9] !== undefined) {
        minutesOffset = struct[10] * 60 + struct[11];

        if (struct[9] === '+') {
          minutesOffset = 0 - minutesOffset;
        }
      }

      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    } else {
      timestamp = origParse ? origParse(date) : NaN;
    }

    return timestamp;
  };

  _ember.default.Date.parse = function (date) {
    // throw deprecation
    (0, _debug.deprecate)('Ember.Date.parse is deprecated because Safari 5-, IE8-, and\n      Firefox 3.6- are no longer supported (see\n      https://github.com/csnover/js-iso8601 for the history of this issue).\n      Please use Date.parse instead', false, {
      id: 'ds.ember.date.parse-deprecate',
      until: '3.0.0'
    });

    return parseDate(date);
  };

  if (_ember.default.EXTEND_PROTOTYPES === true || _ember.default.EXTEND_PROTOTYPES.Date) {
    (0, _debug.deprecate)('Overriding Date.parse with Ember.Date.parse is deprecated. Please set ENV.EmberENV.EXTEND_PROTOTYPES.Date to false in config/environment.js\n\n\n// config/environment.js\nENV = {\n  EmberENV: {\n    EXTEND_PROTOTYPES: {\n      Date: false,\n    }\n  }\n}\n', false, {
      id: 'ds.date.parse-deprecate',
      until: '3.0.0'
    });
    Date.parse = parseDate;
  }
});
define('ember-data/-private/features', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEnabled;
  function isEnabled() {
    var _Ember$FEATURES;

    return (_Ember$FEATURES = _ember.default.FEATURES).isEnabled.apply(_Ember$FEATURES, arguments);
  }
});
define('ember-data/-private/global', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /* globals global, window, self */

  // originally from https://github.com/emberjs/ember.js/blob/c0bd26639f50efd6a03ee5b87035fd200e313b8e/packages/ember-environment/lib/global.js

  // from lodash to catch fake globals
  function checkGlobal(value) {
    return value && value.Object === Object ? value : undefined;
  }

  // element ids can ruin global miss checks
  function checkElementIdShadowing(value) {
    return value && value.nodeType === undefined ? value : undefined;
  }

  // export real global
  exports.default = checkGlobal(checkElementIdShadowing((typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global)) || checkGlobal((typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self) || checkGlobal((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window) || new Function('return this')();
});
define("ember-data/-private/initializers/data-adapter", ["exports", "ember-data/-private/system/debug/debug-adapter"], function (exports, _debugAdapter) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = initializeDebugAdapter;


  /*
    Configures a registry with injections on Ember applications
    for the Ember-Data store. Accepts an optional namespace argument.
  
    @method initializeDebugAdapter
    @param {Ember.Registry} registry
  */
  function initializeDebugAdapter(registry) {
    registry.register('data-adapter:main', _debugAdapter.default);
  }
});
define('ember-data/-private/initializers/store-injections', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = initializeStoreInjections;
  /*
    Configures a registry with injections on Ember applications
    for the Ember-Data store. Accepts an optional namespace argument.
  
    @method initializeStoreInjections
    @param {Ember.Registry} registry
  */
  function initializeStoreInjections(registry) {
    // registry.injection for Ember < 2.1.0
    // application.inject for Ember 2.1.0+
    var inject = registry.inject || registry.injection;
    inject.call(registry, 'controller', 'store', 'service:store');
    inject.call(registry, 'route', 'store', 'service:store');
    inject.call(registry, 'data-adapter', 'store', 'service:store');
  }
});
define("ember-data/-private/initializers/store", ["exports", "ember-data/-private/system/store", "ember-data/-private/serializers", "ember-data/-private/adapters"], function (exports, _store, _serializers, _adapters) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = initializeStore;


  function has(applicationOrRegistry, fullName) {
    if (applicationOrRegistry.has) {
      // < 2.1.0
      return applicationOrRegistry.has(fullName);
    } else {
      // 2.1.0+
      return applicationOrRegistry.hasRegistration(fullName);
    }
  }

  /*
    Configures a registry for use with an Ember-Data
    store. Accepts an optional namespace argument.
  
    @method initializeStore
    @param {Ember.Registry} registry
  */
  function initializeStore(registry) {
    // registry.optionsForType for Ember < 2.1.0
    // application.registerOptionsForType for Ember 2.1.0+
    var registerOptionsForType = registry.registerOptionsForType || registry.optionsForType;
    registerOptionsForType.call(registry, 'serializer', { singleton: false });
    registerOptionsForType.call(registry, 'adapter', { singleton: false });

    registry.register('serializer:-default', _serializers.JSONSerializer);
    registry.register('serializer:-rest', _serializers.RESTSerializer);
    registry.register('adapter:-rest', _adapters.RESTAdapter);

    registry.register('adapter:-json-api', _adapters.JSONAPIAdapter);
    registry.register('serializer:-json-api', _serializers.JSONAPISerializer);

    if (!has(registry, 'service:store')) {
      registry.register('service:store', _store.default);
    }
  }
});
define('ember-data/-private/initializers/transforms', ['exports', 'ember-data/-private/transforms'], function (exports, _transforms) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = initializeTransforms;


  /*
    Configures a registry for use with Ember-Data
    transforms.
  
    @method initializeTransforms
    @param {Ember.Registry} registry
  */
  function initializeTransforms(registry) {
    registry.register('transform:boolean', _transforms.BooleanTransform);
    registry.register('transform:date', _transforms.DateTransform);
    registry.register('transform:number', _transforms.NumberTransform);
    registry.register('transform:string', _transforms.StringTransform);
  }
});
define('ember-data/-private/instance-initializers/initialize-store-service', ['exports', 'ember-data/-private/debug'], function (exports, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = initializeStoreService;

  /*
    Configures a registry for use with an Ember-Data
    store.
  
    @method initializeStoreService
    @param {Ember.ApplicationInstance | Ember.EngineInstance} instance
  */
  function initializeStoreService(instance) {
    // instance.lookup supports Ember 2.1 and higher
    // instance.container supports Ember 1.11 - 2.0
    var container = instance.lookup ? instance : instance.container;

    // Eagerly generate the store so defaultStore is populated.
    container.lookup('service:store');

    // In Ember 2.4+ instance.base is the `Ember.Application` or `Ember.Engine` instance
    // In Ember 1.11 - 2.3 we fallback to `instance.application`
    var base = instance.base || instance.application;
    deprecateOldEmberDataInitializers(base.constructor.initializers);
  }

  var deprecatedInitializerNames = ['data-adapter', 'injectStore', 'transforms', 'store'];

  function matchesDeprecatedInititalizer(name) {
    return deprecatedInitializerNames.indexOf(name) !== -1;
  }

  function deprecateOldEmberDataInitializers(initializers) {
    // collect all of the initializers
    var initializersArray = Object.keys(initializers).map(function (key) {
      return initializers[key];
    });

    // filter out all of the Ember Data initializer. We have some
    // deprecated initializers that depend on other deprecated
    // initializers which may trigger the deprecation warning
    // unintentionally.
    var nonEmberDataInitializers = initializersArray.filter(function (initializer) {
      return !matchesDeprecatedInititalizer(initializer.name);
    });

    nonEmberDataInitializers.forEach(warnForDeprecatedInitializers);
  }

  function warnForDeprecatedInitializers(initializer) {
    var deprecatedBeforeInitializer = matchesDeprecatedInititalizer(initializer.before);
    var deprecatedAfterInitializer = matchesDeprecatedInititalizer(initializer.after);
    var deprecatedProp = deprecatedBeforeInitializer ? 'before' : 'after';

    (0, _debug.deprecate)('The initializer `' + initializer[deprecatedProp] + '` has been deprecated. Please update your `' + initializer.name + '` initializer to use use `' + deprecatedProp + ': \'ember-data\'` instead.', !(deprecatedBeforeInitializer || deprecatedAfterInitializer), {
      id: 'ds.deprecated-initializers',
      until: '3.0.0'
    });
  }
});
define("ember-data/-private/serializers", ["exports", "ember-data/serializers/json-api", "ember-data/serializers/json", "ember-data/serializers/rest"], function (exports, _jsonApi, _json, _rest) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RESTSerializer = exports.JSONSerializer = exports.JSONAPISerializer = undefined;
  exports.JSONAPISerializer = _jsonApi.default;
  exports.JSONSerializer = _json.default;
  exports.RESTSerializer = _rest.default;
});
define("ember-data/-private/system/clone-null", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneNull;
  function cloneNull(source) {
    var clone = Object.create(null);
    for (var key in source) {
      clone[key] = source[key];
    }
    return clone;
  }
});
define('ember-data/-private/system/coerce-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = coerceId;
  // Used by the store to normalize IDs entering the store.  Despite the fact
  // that developers may provide IDs as numbers (e.g., `store.findRecord('person', 1)`),
  // it is important that internally we use strings, since IDs may be serialized
  // and lose type information.  For example, Ember's router may put a record's
  // ID into the URL, and if we later try to deserialize that URL and find the
  // corresponding record, we will not know if it is a string or a number.
  function coerceId(id) {
    return id === null || id === undefined || id === '' ? null : id + '';
  }
});
define("ember-data/-private/system/debug", ["exports", "ember-data/-private/system/debug/debug-adapter"], function (exports, _debugAdapter) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugAdapter.default;
});
define('ember-data/-private/system/debug/debug-adapter', ['exports', 'ember', 'ember-data/model'], function (exports, _ember, _model) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
    @module ember-data
  */
  var capitalize = _ember.default.String.capitalize;
  var underscore = _ember.default.String.underscore;
  var assert = _ember.default.assert,
      get = _ember.default.get;
  exports.default = _ember.default.DataAdapter.extend({
    getFilters: function getFilters() {
      return [{ name: 'isNew', desc: 'New' }, { name: 'isModified', desc: 'Modified' }, { name: 'isClean', desc: 'Clean' }];
    },
    detect: function detect(typeClass) {
      return typeClass !== _model.default && _model.default.detect(typeClass);
    },
    columnsForType: function columnsForType(typeClass) {
      var columns = [{
        name: 'id',
        desc: 'Id'
      }];
      var count = 0;
      var self = this;
      get(typeClass, 'attributes').forEach(function (meta, name) {
        if (count++ > self.attributeLimit) {
          return false;
        }
        var desc = capitalize(underscore(name).replace('_', ' '));
        columns.push({ name: name, desc: desc });
      });
      return columns;
    },
    getRecords: function getRecords(modelClass, modelName) {
      if (arguments.length < 2) {
        // Legacy Ember.js < 1.13 support
        var containerKey = modelClass._debugContainerKey;
        if (containerKey) {
          var match = containerKey.match(/model:(.*)/);
          if (match) {
            modelName = match[1];
          }
        }
      }
      assert("Cannot find model name. Please upgrade to Ember.js >= 1.13 for Ember Inspector support", !!modelName);
      return this.get('store').peekAll(modelName);
    },
    getRecordColumnValues: function getRecordColumnValues(record) {
      var _this = this;

      var count = 0;
      var columnValues = { id: get(record, 'id') };

      record.eachAttribute(function (key) {
        if (count++ > _this.attributeLimit) {
          return false;
        }
        columnValues[key] = get(record, key);
      });
      return columnValues;
    },
    getRecordKeywords: function getRecordKeywords(record) {
      var keywords = [];
      var keys = _ember.default.A(['id']);
      record.eachAttribute(function (key) {
        return keys.push(key);
      });
      keys.forEach(function (key) {
        return keywords.push(get(record, key));
      });
      return keywords;
    },
    getRecordFilterValues: function getRecordFilterValues(record) {
      return {
        isNew: record.get('isNew'),
        isModified: record.get('hasDirtyAttributes') && !record.get('isNew'),
        isClean: !record.get('hasDirtyAttributes')
      };
    },
    getRecordColor: function getRecordColor(record) {
      var color = 'black';
      if (record.get('isNew')) {
        color = 'green';
      } else if (record.get('hasDirtyAttributes')) {
        color = 'blue';
      }
      return color;
    },
    observeRecord: function observeRecord(record, recordUpdated) {
      var releaseMethods = _ember.default.A();
      var keysToObserve = _ember.default.A(['id', 'isNew', 'hasDirtyAttributes']);

      record.eachAttribute(function (key) {
        return keysToObserve.push(key);
      });
      var adapter = this;

      keysToObserve.forEach(function (key) {
        var handler = function handler() {
          recordUpdated(adapter.wrapRecord(record));
        };
        _ember.default.addObserver(record, key, handler);
        releaseMethods.push(function () {
          _ember.default.removeObserver(record, key, handler);
        });
      });

      var release = function release() {
        releaseMethods.forEach(function (fn) {
          return fn();
        });
      };

      return release;
    }
  });
});
define("ember-data/-private/system/diff-array", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = diffArray;
  /**
    @namespace
    @method diff-array
    @for DS
    @param {Array} oldArray the old array
    @param {Array} newArray the new array
    @return {hash} {
        firstChangeIndex: <integer>,  // null if no change
        addedCount: <integer>,        // 0 if no change
        removedCount: <integer>       // 0 if no change
      }
  */
  function diffArray(oldArray, newArray) {
    var oldLength = oldArray.length;
    var newLength = newArray.length;

    var shortestLength = Math.min(oldLength, newLength);
    var firstChangeIndex = null; // null signifies no changes

    // find the first change
    for (var i = 0; i < shortestLength; i++) {
      // compare each item in the array
      if (oldArray[i] !== newArray[i]) {
        firstChangeIndex = i;
        break;
      }
    }

    if (firstChangeIndex === null && newLength !== oldLength) {
      // no change found in the overlapping block
      // and array lengths differ,
      // so change starts at end of overlap
      firstChangeIndex = shortestLength;
    }

    var addedCount = 0;
    var removedCount = 0;
    if (firstChangeIndex !== null) {
      // we found a change, find the end of the change
      var unchangedEndBlockLength = shortestLength - firstChangeIndex;
      // walk back from the end of both arrays until we find a change
      for (var _i = 1; _i <= shortestLength; _i++) {
        // compare each item in the array
        if (oldArray[oldLength - _i] !== newArray[newLength - _i]) {
          unchangedEndBlockLength = _i - 1;
          break;
        }
      }
      addedCount = newLength - unchangedEndBlockLength - firstChangeIndex;
      removedCount = oldLength - unchangedEndBlockLength - firstChangeIndex;
    }

    return {
      firstChangeIndex: firstChangeIndex,
      addedCount: addedCount,
      removedCount: removedCount
    };
  }
});
define("ember-data/-private/system/empty-object", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = EmptyObject;
  // This exists because `Object.create(null)` is absurdly slow compared
  // to `new EmptyObject()`. In either case, you want a null prototype
  // when you're treating the object instances as arbitrary dictionaries
  // and don't want your keys colliding with build-in methods on the
  // default object prototype.
  var proto = Object.create(null, {
    // without this, we will always still end up with (new
    // EmptyObject()).constructor === Object
    constructor: {
      value: undefined,
      enumerable: false,
      writable: true
    }
  });

  function EmptyObject() {}
  EmptyObject.prototype = proto;
});
define('ember-data/-private/system/identity-map', ['exports', 'ember-data/-private/system/internal-model-map'], function (exports, _internalModelMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var IdentityMap = function () {
    function IdentityMap() {
      _classCallCheck(this, IdentityMap);

      this._map = Object.create(null);
    }

    /**
     Retrieves the `InternalModelMap` for a given modelName,
     creating one if one did not already exist. This is
     similar to `getWithDefault` or `get` on a `MapWithDefault`
      @method retrieve
     @param modelName a previously normalized modelName
     @returns {InternalModelMap} the InternalModelMap for the given modelName
     */


    IdentityMap.prototype.retrieve = function retrieve(modelName) {
      var map = this._map[modelName];

      if (!map) {
        map = this._map[modelName] = new _internalModelMap.default(modelName);
      }

      return map;
    };

    IdentityMap.prototype.clear = function clear() {
      var map = this._map;
      var keys = Object.keys(map);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        map[key].clear();
      }
    };

    return IdentityMap;
  }();

  exports.default = IdentityMap;
});
define('ember-data/-private/system/internal-model-map', ['exports', 'ember-data/-private/debug', 'ember-data/-private/system/model/internal-model'], function (exports, _debug, _internalModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var InternalModelMap = function () {
    function InternalModelMap(modelName) {
      _classCallCheck(this, InternalModelMap);

      this.modelName = modelName;
      this._idToModel = Object.create(null);
      this._models = [];
      this._metadata = null;
    }

    /**
      A "map" of records based on their ID for this modelName
     */


    InternalModelMap.prototype.get = function get(id) {
      var r = this._idToModel[id];
      return r;
    };

    InternalModelMap.prototype.has = function has(id) {
      return !!this._idToModel[id];
    };

    InternalModelMap.prototype.set = function set(id, internalModel) {
      (0, _debug.assert)('You cannot index an internalModel by an empty id\'', id);
      (0, _debug.assert)('You cannot set an index for an internalModel to something other than an internalModel', internalModel instanceof _internalModel.default);
      (0, _debug.assert)('You cannot set an index for an internalModel that is not in the InternalModelMap', this.contains(internalModel));
      (0, _debug.assert)('You cannot update the id index of an InternalModel once set. Attempted to update ' + id + '.', !this.has(id) || this.get(id) === internalModel);

      this._idToModel[id] = internalModel;
    };

    InternalModelMap.prototype.add = function add(internalModel, id) {
      (0, _debug.assert)('You cannot re-add an already present InternalModel to the InternalModelMap.', !this.contains(internalModel));

      if (id) {
        this._idToModel[id] = internalModel;
      }

      this._models.push(internalModel);
    };

    InternalModelMap.prototype.remove = function remove(internalModel, id) {
      if (id) {
        delete this._idToModel[id];
      }

      var loc = this._models.indexOf(internalModel);

      if (loc !== -1) {
        this._models.splice(loc, 1);
      }
    };

    InternalModelMap.prototype.contains = function contains(internalModel) {
      return this._models.indexOf(internalModel) !== -1;
    };

    InternalModelMap.prototype.clear = function clear() {
      if (this._models) {
        var models = this._models;
        this._models = [];

        for (var i = 0; i < models.length; i++) {
          var model = models[i];
          model.unloadRecord();
        }
      }

      this._metadata = null;
    };

    InternalModelMap.prototype.destroy = function destroy() {
      this._store = null;
      this._modelClass = null;
    };

    _createClass(InternalModelMap, [{
      key: 'idToRecord',
      get: function get() {
        (0, _debug.deprecate)('Use of InternalModelMap.idToRecord is deprecated, use InternalModelMap.get(id) instead.', false, {
          id: 'ds.record-map.idToRecord',
          until: '2.13'
        });
        return this._idToModel;
      }
    }, {
      key: 'length',
      get: function get() {
        return this._models.length;
      }
    }, {
      key: 'models',
      get: function get() {
        return this._models;
      }
    }, {
      key: 'metadata',
      get: function get() {
        return this._metadata || (this._metadata = Object.create(null));
      }
    }, {
      key: 'type',
      get: function get() {
        throw new Error('InternalModelMap.type is no longer available');
      }
    }]);

    return InternalModelMap;
  }();

  exports.default = InternalModelMap;
});
define('ember-data/-private/system/is-array-like', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isArrayLike;


  /*
    We're using this to detect arrays and "array-like" objects.
  
    This is a copy of the `isArray` method found in `ember-runtime/utils` as we're
    currently unable to import non-exposed modules.
  
    This method was previously exposed as `Ember.isArray` but since
    https://github.com/emberjs/ember.js/pull/11463 `Ember.isArray` is an alias of
    `Array.isArray` hence removing the "array-like" part.
   */
  function isArrayLike(obj) {
    if (!obj || obj.setInterval) {
      return false;
    }
    if (Array.isArray(obj)) {
      return true;
    }
    if (_ember.default.Array.detect(obj)) {
      return true;
    }

    var type = _ember.default.typeOf(obj);
    if ('array' === type) {
      return true;
    }
    if (obj.length !== undefined && 'object' === type) {
      return true;
    }
    return false;
  }
});
define("ember-data/-private/system/many-array", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/promise-proxies", "ember-data/-private/system/store/common", "ember-data/-private/system/diff-array"], function (exports, _ember, _debug, _promiseProxies, _common, _diffArray) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = _ember.default.get,
      set = _ember.default.set;
  exports.default = _ember.default.Object.extend(_ember.default.MutableArray, _ember.default.Evented, {
    init: function init() {
      this._super.apply(this, arguments);

      /**
      The loading state of this array
       @property {Boolean} isLoaded
      */
      this.isLoaded = false;
      this.length = 0;

      /**
      Used for async `hasMany` arrays
      to keep track of when they will resolve.
       @property {Ember.RSVP.Promise} promise
      @private
      */
      this.promise = null;

      /**
      Metadata associated with the request for async hasMany relationships.
       Example
       Given that the server returns the following JSON payload when fetching a
      hasMany relationship:
       ```js
      {
        "comments": [{
          "id": 1,
          "comment": "This is the first comment",
        }, {
      // ...
        }],
         "meta": {
          "page": 1,
          "total": 5
        }
      }
      ```
       You can then access the metadata via the `meta` property:
       ```js
      post.get('comments').then(function(comments) {
        var meta = comments.get('meta');
       // meta.page => 1
      // meta.total => 5
      });
      ```
       @property {Object} meta
      @public
      */
      this.meta = this.meta || null;

      /**
      `true` if the relationship is polymorphic, `false` otherwise.
       @property {Boolean} isPolymorphic
      @private
      */
      this.isPolymorphic = this.isPolymorphic || false;

      /**
      The relationship which manages this array.
       @property {ManyRelationship} relationship
      @private
      */
      this.relationship = this.relationship || null;

      this.currentState = [];
      this.flushCanonical(false);
    },
    objectAt: function objectAt(index) {
      var object = this.currentState[index];
      //Ember observers such as 'firstObject', 'lastObject' might do out of bounds accesses
      if (object === undefined) {
        return;
      }

      return object.getRecord();
    },
    flushCanonical: function flushCanonical() {
      var isInitialized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // It’s possible the parent side of the relationship may have been unloaded by this point
      if (!(0, _common._objectIsAlive)(this)) {
        return;
      }
      var toSet = this.canonicalState;

      //a hack for not removing new records
      //TODO remove once we have proper diffing
      var newRecords = this.currentState.filter(
      // only add new records which are not yet in the canonical state of this
      // relationship (a new record can be in the canonical state if it has
      // been 'acknowleged' to be in the relationship via a store.push)
      function (internalModel) {
        return internalModel.isNew() && toSet.indexOf(internalModel) === -1;
      });
      toSet = toSet.concat(newRecords);

      // diff to find changes
      var diff = (0, _diffArray.default)(this.currentState, toSet);

      if (diff.firstChangeIndex !== null) {
        // it's null if no change found
        // we found a change
        this.arrayContentWillChange(diff.firstChangeIndex, diff.removedCount, diff.addedCount);
        this.set('length', toSet.length);
        this.currentState = toSet;
        this.arrayContentDidChange(diff.firstChangeIndex, diff.removedCount, diff.addedCount);
        if (isInitialized && diff.addedCount > 0) {
          //notify only on additions
          //TODO only notify if unloaded
          this.relationship.notifyHasManyChanged();
        }
      }
    },
    internalReplace: function internalReplace(idx, amt, objects) {
      if (!objects) {
        objects = [];
      }
      this.arrayContentWillChange(idx, amt, objects.length);
      this.currentState.splice.apply(this.currentState, [idx, amt].concat(objects));
      this.set('length', this.currentState.length);
      this.arrayContentDidChange(idx, amt, objects.length);
    },


    //TODO(Igor) optimize
    internalRemoveRecords: function internalRemoveRecords(records) {
      for (var i = 0; i < records.length; i++) {
        var index = this.currentState.indexOf(records[i]);
        this.internalReplace(index, 1);
      }
    },


    //TODO(Igor) optimize
    internalAddRecords: function internalAddRecords(records, idx) {
      if (idx === undefined) {
        idx = this.currentState.length;
      }
      this.internalReplace(idx, 0, records);
    },
    replace: function replace(idx, amt, objects) {
      var records = void 0;
      if (amt > 0) {
        records = this.currentState.slice(idx, idx + amt);
        this.get('relationship').removeRecords(records);
      }
      if (objects) {
        this.get('relationship').addRecords(objects.map(function (obj) {
          return obj._internalModel;
        }), idx);
      }
    },


    /**
      @method loadingRecordsCount
      @param {Number} count
      @private
    */
    loadingRecordsCount: function loadingRecordsCount(count) {
      this._loadingRecordsCount = count;
    },


    /**
      @method loadedRecord
      @private
    */
    loadedRecord: function loadedRecord() {
      this._loadingRecordsCount--;
      if (this._loadingRecordsCount === 0) {
        set(this, 'isLoaded', true);
        this.trigger('didLoad');
      }
    },


    /**
      Reloads all of the records in the manyArray. If the manyArray
      holds a relationship that was originally fetched using a links url
      Ember Data will revisit the original links url to repopulate the
      relationship.
       If the manyArray holds the result of a `store.query()` reload will
      re-run the original query.
       Example
       ```javascript
      var user = store.peekRecord('user', 1)
      user.login().then(function() {
        user.get('permissions').then(function(permissions) {
          return permissions.reload();
        });
      });
      ```
       @method reload
      @public
    */
    reload: function reload() {
      return this.relationship.reload();
    },


    /**
      Saves all of the records in the `ManyArray`.
       Example
       ```javascript
      store.findRecord('inbox', 1).then(function(inbox) {
        inbox.get('messages').then(function(messages) {
          messages.forEach(function(message) {
            message.set('isRead', true);
          });
          messages.save()
        });
      });
      ```
       @method save
      @return {DS.PromiseArray} promise
    */
    save: function save() {
      var manyArray = this;
      var promiseLabel = 'DS: ManyArray#save ' + get(this, 'type');
      var promise = _ember.default.RSVP.all(this.invoke("save"), promiseLabel).then(function () {
        return manyArray;
      }, null, 'DS: ManyArray#save return ManyArray');

      return _promiseProxies.PromiseArray.create({ promise: promise });
    },


    /**
      Create a child record within the owner
       @method createRecord
      @private
      @param {Object} hash
      @return {DS.Model} record
    */
    createRecord: function createRecord(hash) {
      var store = get(this, 'store');
      var type = get(this, 'type');

      (0, _debug.assert)("You cannot add '" + type.modelName + "' records to this polymorphic relationship.", !get(this, 'isPolymorphic'));
      var record = store.createRecord(type.modelName, hash);
      this.pushObject(record);

      return record;
    }
  });
});
define("ember-data/-private/system/model", ["exports", "ember-data/-private/system/model/model", "ember-data/attr", "ember-data/-private/system/model/states", "ember-data/-private/system/model/errors"], function (exports, _model, _attr, _states, _errors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Errors = exports.attr = exports.RootState = undefined;
  exports.RootState = _states.default;
  exports.attr = _attr.default;
  exports.Errors = _errors.default;
  exports.default = _model.default;
});
define('ember-data/-private/system/model/errors', ['exports', 'ember', 'ember-data/-private/debug'], function (exports, _ember, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var get = _ember.default.get;
  var set = _ember.default.set;
  var isEmpty = _ember.default.isEmpty;
  var makeArray = _ember.default.makeArray;

  var MapWithDefault = _ember.default.MapWithDefault;

  /**
  @module ember-data
  */

  /**
    Holds validation errors for a given record, organized by attribute names.
  
    Every `DS.Model` has an `errors` property that is an instance of
    `DS.Errors`. This can be used to display validation error
    messages returned from the server when a `record.save()` rejects.
  
    For Example, if you had a `User` model that looked like this:
  
    ```app/models/user.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      username: DS.attr('string'),
      email: DS.attr('string')
    });
    ```
    And you attempted to save a record that did not validate on the backend:
  
    ```javascript
    let user = store.createRecord('user', {
      username: 'tomster',
      email: 'invalidEmail'
    });
    user.save();
    ```
  
    Your backend would be expected to return an error response that described
    the problem, so that error messages can be generated on the app.
  
    API responses will be translated into instances of `DS.Errors` differently,
    depending on the specific combination of adapter and serializer used. You
    may want to check the documentation or the source code of the libraries
    that you are using, to know how they expect errors to be communicated.
  
    Errors can be displayed to the user by accessing their property name
    to get an array of all the error objects for that property. Each
    error object is a JavaScript object with two keys:
  
    - `message` A string containing the error message from the backend
    - `attribute` The name of the property associated with this error message
  
    ```handlebars
    <label>Username: {{input value=username}} </label>
    {{#each model.errors.username as |error|}}
      <div class="error">
        {{error.message}}
      </div>
    {{/each}}
  
    <label>Email: {{input value=email}} </label>
    {{#each model.errors.email as |error|}}
      <div class="error">
        {{error.message}}
      </div>
    {{/each}}
    ```
  
    You can also access the special `messages` property on the error
    object to get an array of all the error strings.
  
    ```handlebars
    {{#each model.errors.messages as |message|}}
      <div class="error">
        {{message}}
      </div>
    {{/each}}
    ```
  
    @class Errors
    @namespace DS
    @extends Ember.Object
    @uses Ember.Enumerable
    @uses Ember.Evented
   */
  exports.default = _ember.default.ArrayProxy.extend(_ember.default.Evented, {
    /**
      Register with target handler
       @method registerHandlers
      @param {Object} target
      @param {Function} becameInvalid
      @param {Function} becameValid
      @deprecated
    */
    registerHandlers: function registerHandlers(target, becameInvalid, becameValid) {
      (0, _debug.deprecate)('Record errors will no longer be evented.', false, {
        id: 'ds.errors.registerHandlers',
        until: '3.0.0'
      });

      this._registerHandlers(target, becameInvalid, becameValid);
    },


    /**
      Register with target handler
       @method _registerHandlers
      @private
    */
    _registerHandlers: function _registerHandlers(target, becameInvalid, becameValid) {
      this.on('becameInvalid', target, becameInvalid);
      this.on('becameValid', target, becameValid);
    },


    /**
      @property errorsByAttributeName
      @type {Ember.MapWithDefault}
      @private
    */
    errorsByAttributeName: _ember.default.computed(function () {
      return MapWithDefault.create({
        defaultValue: function defaultValue() {
          return _ember.default.A();
        }
      });
    }),

    /**
      Returns errors for a given attribute
       ```javascript
      let user = store.createRecord('user', {
        username: 'tomster',
        email: 'invalidEmail'
      });
      user.save().catch(function(){
        user.get('errors').errorsFor('email'); // returns:
        // [{attribute: "email", message: "Doesn't look like a valid email."}]
      });
      ```
       @method errorsFor
      @param {String} attribute
      @return {Array}
    */
    errorsFor: function errorsFor(attribute) {
      return get(this, 'errorsByAttributeName').get(attribute);
    },


    /**
      An array containing all of the error messages for this
      record. This is useful for displaying all errors to the user.
       ```handlebars
      {{#each model.errors.messages as |message|}}
        <div class="error">
          {{message}}
        </div>
      {{/each}}
      ```
       @property messages
      @type {Array}
    */
    messages: _ember.default.computed.mapBy('content', 'message'),

    /**
      @property content
      @type {Array}
      @private
    */
    content: _ember.default.computed(function () {
      return _ember.default.A();
    }),

    /**
      @method unknownProperty
      @private
    */
    unknownProperty: function unknownProperty(attribute) {
      var errors = this.errorsFor(attribute);
      if (isEmpty(errors)) {
        return null;
      }
      return errors;
    },


    /**
      Total number of errors.
       @property length
      @type {Number}
      @readOnly
    */

    /**
      @property isEmpty
      @type {Boolean}
      @readOnly
    */
    isEmpty: _ember.default.computed.not('length').readOnly(),

    /**
      Adds error messages to a given attribute and sends
      `becameInvalid` event to the record.
       Example:
       ```javascript
      if (!user.get('username') {
        user.get('errors').add('username', 'This field is required');
      }
      ```
       @method add
      @param {String} attribute
      @param {(Array|String)} messages
      @deprecated
    */
    add: function add(attribute, messages) {
      (0, _debug.warn)('Interacting with a record errors object will no longer change the record state.', false, {
        id: 'ds.errors.add'
      });

      var wasEmpty = get(this, 'isEmpty');

      this._add(attribute, messages);

      if (wasEmpty && !get(this, 'isEmpty')) {
        this.trigger('becameInvalid');
      }
    },


    /**
      Adds error messages to a given attribute without sending event.
       @method _add
      @private
    */
    _add: function _add(attribute, messages) {
      messages = this._findOrCreateMessages(attribute, messages);
      this.addObjects(messages);
      get(this, 'errorsByAttributeName').get(attribute).addObjects(messages);

      this.notifyPropertyChange(attribute);
    },


    /**
      @method _findOrCreateMessages
      @private
    */
    _findOrCreateMessages: function _findOrCreateMessages(attribute, messages) {
      var errors = this.errorsFor(attribute);
      var messagesArray = makeArray(messages);
      var _messages = new Array(messagesArray.length);

      for (var i = 0; i < messagesArray.length; i++) {
        var message = messagesArray[i];
        var err = errors.findBy('message', message);
        if (err) {
          _messages[i] = err;
        } else {
          _messages[i] = {
            attribute: attribute,
            message: message
          };
        }
      }

      return _messages;
    },


    /**
      Removes all error messages from the given attribute and sends
      `becameValid` event to the record if there no more errors left.
       Example:
       ```app/models/user.js
      import DS from 'ember-data';
       export default DS.Model.extend({
        email: DS.attr('string'),
        twoFactorAuth: DS.attr('boolean'),
        phone: DS.attr('string')
      });
      ```
       ```app/routes/user/edit.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        actions: {
          save: function(user) {
             if (!user.get('twoFactorAuth')) {
               user.get('errors').remove('phone');
             }
             user.save();
           }
        }
      });
      ```
       @method remove
      @param {String} attribute
      @deprecated
    */
    remove: function remove(attribute) {
      (0, _debug.warn)('Interacting with a record errors object will no longer change the record state.', false, {
        id: 'ds.errors.remove'
      });

      if (get(this, 'isEmpty')) {
        return;
      }

      this._remove(attribute);

      if (get(this, 'isEmpty')) {
        this.trigger('becameValid');
      }
    },


    /**
      Removes all error messages from the given attribute without sending event.
       @method _remove
      @private
    */
    _remove: function _remove(attribute) {
      if (get(this, 'isEmpty')) {
        return;
      }

      var content = this.rejectBy('attribute', attribute);
      set(this, 'content', content);
      get(this, 'errorsByAttributeName').delete(attribute);

      this.notifyPropertyChange(attribute);
    },


    /**
      Removes all error messages and sends `becameValid` event
      to the record.
       Example:
       ```app/routes/user/edit.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        actions: {
          retrySave: function(user) {
             user.get('errors').clear();
             user.save();
           }
        }
      });
      ```
       @method clear
      @deprecated
    */
    clear: function clear() {
      (0, _debug.warn)('Interacting with a record errors object will no longer change the record state.', false, {
        id: 'ds.errors.clear'
      });

      if (get(this, 'isEmpty')) {
        return;
      }

      this._clear();
      this.trigger('becameValid');
    },


    /**
      Removes all error messages.
      to the record.
       @method _clear
      @private
    */
    _clear: function _clear() {
      if (get(this, 'isEmpty')) {
        return;
      }

      var errorsByAttributeName = get(this, 'errorsByAttributeName');
      var attributes = _ember.default.A();

      errorsByAttributeName.forEach(function (_, attribute) {
        attributes.push(attribute);
      });

      errorsByAttributeName.clear();
      attributes.forEach(function (attribute) {
        this.notifyPropertyChange(attribute);
      }, this);

      _ember.default.ArrayProxy.prototype.clear.call(this);
    },


    /**
      Checks if there is error messages for the given attribute.
       ```app/routes/user/edit.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        actions: {
          save: function(user) {
             if (user.get('errors').has('email')) {
               return alert('Please update your email before attempting to save.');
             }
             user.save();
           }
        }
      });
      ```
       @method has
      @param {String} attribute
      @return {Boolean} true if there some errors on given attribute
    */
    has: function has(attribute) {
      return !isEmpty(this.errorsFor(attribute));
    }
  });
});
define("ember-data/-private/system/model/internal-model", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/model/states", "ember-data/-private/system/relationships/state/create", "ember-data/-private/system/snapshot", "ember-data/-private/features", "ember-data/-private/system/ordered-set", "ember-data/-private/utils", "ember-data/-private/system/references"], function (exports, _ember, _debug, _states, _create, _snapshot, _features, _orderedSet, _utils, _references) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = _ember.default.get,
      set = _ember.default.set,
      copy = _ember.default.copy,
      EmberError = _ember.default.Error,
      inspect = _ember.default.inspect,
      isEmpty = _ember.default.isEmpty,
      isEqual = _ember.default.isEqual,
      setOwner = _ember.default.setOwner,
      RSVP = _ember.default.RSVP,
      Promise = _ember.default.RSVP.Promise;


  var assign = _ember.default.assign || _ember.default.merge;

  /*
    The TransitionChainMap caches the `state.enters`, `state.setups`, and final state reached
    when transitioning from one state to another, so that future transitions can replay the
    transition without needing to walk the state tree, collect these hook calls and determine
     the state to transition into.
  
     A future optimization would be to build a single chained method out of the collected enters
     and setups. It may also be faster to do a two level cache (from: { to }) instead of caching based
     on a key that adds the two together.
   */
  var TransitionChainMap = Object.create(null);

  var _extractPivotNameCache = Object.create(null);
  var _splitOnDotCache = Object.create(null);

  function splitOnDot(name) {
    return _splitOnDotCache[name] || (_splitOnDotCache[name] = name.split('.'));
  }

  function extractPivotName(name) {
    return _extractPivotNameCache[name] || (_extractPivotNameCache[name] = splitOnDot(name)[0]);
  }

  function areAllModelsUnloaded(internalModels) {
    for (var i = 0; i < internalModels.length; ++i) {
      var record = internalModels[i].record;
      if (record && !(record.get('isDestroyed') || record.get('isDestroying'))) {
        return false;
      }
    }
    return true;
  }

  // this (and all heimdall instrumentation) will be stripped by a babel transform
  //  https://github.com/heimdalljs/babel5-plugin-strip-heimdall


  var InternalModelReferenceId = 1;
  var nextBfsId = 1;

  /*
    `InternalModel` is the Model class that we use internally inside Ember Data to represent models.
    Internal ED methods should only deal with `InternalModel` objects. It is a fast, plain Javascript class.
  
    We expose `DS.Model` to application code, by materializing a `DS.Model` from `InternalModel` lazily, as
    a performance optimization.
  
    `InternalModel` should never be exposed to application code. At the boundaries of the system, in places
    like `find`, `push`, etc. we convert between Models and InternalModels.
  
    We need to make sure that the properties from `InternalModel` are correctly exposed/proxied on `Model`
    if they are needed.
  
    @private
    @class InternalModel
  */

  var InternalModel = function () {
    function InternalModel(modelName, id, store, data) {
      _classCallCheck(this, InternalModel);

      this.id = id;

      // this ensure ordered set can quickly identify this as unique
      this[_ember.default.GUID_KEY] = InternalModelReferenceId++ + 'internal-model';

      this.store = store;
      this.modelName = modelName;
      this._loadingPromise = null;
      this._record = null;
      this._isDestroyed = false;
      this.isError = false;
      this._isUpdatingRecordArrays = false;

      // During dematerialization we don't want to rematerialize the record.  The
      // reason this might happen is that dematerialization removes records from
      // record arrays,  and Ember arrays will always `objectAt(0)` and
      // `objectAt(len - 1)` to test whether or not `firstObject` or `lastObject`
      // have changed.
      this._isDematerializing = false;

      this.resetRecord();

      if (data) {
        this.__data = data;
      }

      // caches for lazy getters
      this._modelClass = null;
      this.__deferredTriggers = null;
      this.__recordArrays = null;
      this._references = null;
      this._recordReference = null;
      this.__relationships = null;
      this.__implicitRelationships = null;

      // Used during the mark phase of unloading to avoid checking the same internal
      // model twice in the same scan
      this._bfsId = 0;
    }

    InternalModel.prototype.isEmpty = function isEmpty() {
      return this.currentState.isEmpty;
    };

    InternalModel.prototype.isLoading = function isLoading() {
      return this.currentState.isLoading;
    };

    InternalModel.prototype.isLoaded = function isLoaded() {
      return this.currentState.isLoaded;
    };

    InternalModel.prototype.hasDirtyAttributes = function hasDirtyAttributes() {
      return this.currentState.hasDirtyAttributes;
    };

    InternalModel.prototype.isSaving = function isSaving() {
      return this.currentState.isSaving;
    };

    InternalModel.prototype.isDeleted = function isDeleted() {
      return this.currentState.isDeleted;
    };

    InternalModel.prototype.isNew = function isNew() {
      return this.currentState.isNew;
    };

    InternalModel.prototype.isValid = function isValid() {
      return this.currentState.isValid;
    };

    InternalModel.prototype.dirtyType = function dirtyType() {
      return this.currentState.dirtyType;
    };

    InternalModel.prototype.getRecord = function getRecord() {
      if (!this._record && !this._isDematerializing) {

        // lookupFactory should really return an object that creates
        // instances with the injections applied
        var createOptions = {
          store: this.store,
          _internalModel: this,
          id: this.id,
          currentState: this.currentState,
          isError: this.isError,
          adapterError: this.error
        };

        if (setOwner) {
          // ensure that `getOwner(this)` works inside a model instance
          setOwner(createOptions, (0, _utils.getOwner)(this.store));
        } else {
          createOptions.container = this.store.container;
        }

        this._record = this.store.modelFactoryFor(this.modelName).create(createOptions);

        this._triggerDeferredTriggers();
      }

      return this._record;
    };

    InternalModel.prototype.resetRecord = function resetRecord() {
      this._record = null;
      this.dataHasInitialized = false;
      this.isReloading = false;
      this.error = null;
      this.currentState = _states.default.empty;
      this.__attributes = null;
      this.__inFlightAttributes = null;
      this._data = null;
    };

    InternalModel.prototype.dematerializeRecord = function dematerializeRecord() {
      if (this.record) {
        this._isDematerializing = true;
        this.record.destroy();
        this.destroyRelationships();
        this.updateRecordArrays();
        this.resetRecord();
      }
    };

    InternalModel.prototype.deleteRecord = function deleteRecord() {
      this.send('deleteRecord');
    };

    InternalModel.prototype.save = function save(options) {
      var promiseLabel = "DS: Model#save " + this;
      var resolver = RSVP.defer(promiseLabel);

      this.store.scheduleSave(this, resolver, options);
      return resolver.promise;
    };

    InternalModel.prototype.startedReloading = function startedReloading() {
      this.isReloading = true;
      if (this.hasRecord) {
        set(this.record, 'isReloading', true);
      }
    };

    InternalModel.prototype.finishedReloading = function finishedReloading() {
      this.isReloading = false;
      if (this.hasRecord) {
        set(this.record, 'isReloading', false);
      }
    };

    InternalModel.prototype.reload = function reload() {
      this.startedReloading();
      var internalModel = this;
      var promiseLabel = "DS: Model#reload of " + this;

      return new Promise(function (resolve) {
        internalModel.send('reloadRecord', resolve);
      }, promiseLabel).then(function () {
        internalModel.didCleanError();
        return internalModel;
      }, function (error) {
        internalModel.didError(error);
        throw error;
      }, "DS: Model#reload complete, update flags").finally(function () {
        internalModel.finishedReloading();
        internalModel.updateRecordArrays();
      });
    };

    InternalModel.prototype._directlyRelatedInternalModels = function _directlyRelatedInternalModels() {
      var _this = this;

      var array = [];
      this.type.eachRelationship(function (key, relationship) {
        if (_this._relationships.has(key)) {
          var _relationship = _this._relationships.get(key);
          var localRelationships = _relationship.members.toArray();
          var serverRelationships = _relationship.canonicalMembers.toArray();

          array = array.concat(localRelationships, serverRelationships);
        }
      });
      return array;
    };

    InternalModel.prototype._allRelatedInternalModels = function _allRelatedInternalModels() {
      var array = [];
      var queue = [];
      var bfsId = nextBfsId++;
      queue.push(this);
      this._bfsId = bfsId;
      while (queue.length > 0) {
        var node = queue.shift();
        array.push(node);
        var related = node._directlyRelatedInternalModels();
        for (var i = 0; i < related.length; ++i) {
          var internalModel = related[i];
          (0, _debug.assert)('Internal Error: seen a future bfs iteration', internalModel._bfsId <= bfsId);
          if (internalModel._bfsId < bfsId) {
            queue.push(internalModel);
            internalModel._bfsId = bfsId;
          }
        }
      }
      return array;
    };

    InternalModel.prototype.unloadRecord = function unloadRecord() {
      this.send('unloadRecord');
      this.dematerializeRecord();
      _ember.default.run.schedule('destroy', this, '_checkForOrphanedInternalModels');
    };

    InternalModel.prototype._checkForOrphanedInternalModels = function _checkForOrphanedInternalModels() {
      this._isDematerializing = false;
      if (this.isDestroyed) {
        return;
      }

      this._cleanupOrphanedInternalModels();
    };

    InternalModel.prototype._cleanupOrphanedInternalModels = function _cleanupOrphanedInternalModels() {
      var relatedInternalModels = this._allRelatedInternalModels();
      if (areAllModelsUnloaded(relatedInternalModels)) {
        for (var i = 0; i < relatedInternalModels.length; ++i) {
          var internalModel = relatedInternalModels[i];
          if (!internalModel.isDestroyed) {
            internalModel.destroy();
          }
        }
      }
    };

    InternalModel.prototype.eachRelationship = function eachRelationship(callback, binding) {
      return this.modelClass.eachRelationship(callback, binding);
    };

    InternalModel.prototype.destroy = function destroy() {
      (0, _debug.assert)("Cannot destroy an internalModel while its record is materialized", !this.record || this.record.get('isDestroyed') || this.record.get('isDestroying'));

      this.store._removeFromIdMap(this);
      this._isDestroyed = true;
    };

    InternalModel.prototype.eachAttribute = function eachAttribute(callback, binding) {
      return this.modelClass.eachAttribute(callback, binding);
    };

    InternalModel.prototype.inverseFor = function inverseFor(key) {
      return this.modelClass.inverseFor(key);
    };

    InternalModel.prototype.setupData = function setupData(data) {
      var changedKeys = void 0;

      if (this.hasRecord) {
        changedKeys = this._changedKeys(data.attributes);
      }

      assign(this._data, data.attributes);
      this.pushedData();

      if (this.hasRecord) {
        this.record._notifyProperties(changedKeys);
      }
      this.didInitializeData();
    };

    InternalModel.prototype.becameReady = function becameReady() {
      this.store.recordArrayManager.recordWasLoaded(this);
    };

    InternalModel.prototype.didInitializeData = function didInitializeData() {
      if (!this.dataHasInitialized) {
        this.becameReady();
        this.dataHasInitialized = true;
      }
    };

    InternalModel.prototype.createSnapshot = function createSnapshot(options) {
      return new _snapshot.default(this, options);
    };

    InternalModel.prototype.loadingData = function loadingData(promise) {
      this.send('loadingData', promise);
    };

    InternalModel.prototype.loadedData = function loadedData() {
      this.send('loadedData');
      this.didInitializeData();
    };

    InternalModel.prototype.notFound = function notFound() {
      this.send('notFound');
    };

    InternalModel.prototype.pushedData = function pushedData() {
      this.send('pushedData');
    };

    InternalModel.prototype.flushChangedAttributes = function flushChangedAttributes() {
      this._inFlightAttributes = this._attributes;
      this._attributes = Object.create(null);
    };

    InternalModel.prototype.hasChangedAttributes = function hasChangedAttributes() {
      return Object.keys(this._attributes).length > 0;
    };

    InternalModel.prototype.updateChangedAttributes = function updateChangedAttributes() {
      var changedAttributes = this.changedAttributes();
      var changedAttributeNames = Object.keys(changedAttributes);
      var attrs = this._attributes;

      for (var i = 0, length = changedAttributeNames.length; i < length; i++) {
        var attribute = changedAttributeNames[i];
        var data = changedAttributes[attribute];
        var oldData = data[0];
        var newData = data[1];

        if (oldData === newData) {
          delete attrs[attribute];
        }
      }
    };

    InternalModel.prototype.changedAttributes = function changedAttributes() {
      var oldData = this._data;
      var currentData = this._attributes;
      var inFlightData = this._inFlightAttributes;
      var newData = assign(copy(inFlightData), currentData);
      var diffData = Object.create(null);
      var newDataKeys = Object.keys(newData);

      for (var i = 0, length = newDataKeys.length; i < length; i++) {
        var key = newDataKeys[i];
        diffData[key] = [oldData[key], newData[key]];
      }

      return diffData;
    };

    InternalModel.prototype.adapterWillCommit = function adapterWillCommit() {
      this.send('willCommit');
    };

    InternalModel.prototype.adapterDidDirty = function adapterDidDirty() {
      this.send('becomeDirty');
      this.updateRecordArrays();
    };

    InternalModel.prototype.send = function send(name, context) {
      var currentState = this.currentState;

      if (!currentState[name]) {
        this._unhandledEvent(currentState, name, context);
      }

      return currentState[name](this, context);
    };

    InternalModel.prototype.notifyHasManyAdded = function notifyHasManyAdded(key, record, idx) {
      if (this.hasRecord) {
        this.record.notifyHasManyAdded(key, record, idx);
      }
    };

    InternalModel.prototype.notifyHasManyRemoved = function notifyHasManyRemoved(key, record, idx) {
      if (this.hasRecord) {
        this.record.notifyHasManyRemoved(key, record, idx);
      }
    };

    InternalModel.prototype.notifyBelongsToChanged = function notifyBelongsToChanged(key, record) {
      if (this.hasRecord) {
        this.record.notifyBelongsToChanged(key, record);
      }
    };

    InternalModel.prototype.notifyPropertyChange = function notifyPropertyChange(key) {
      if (this.hasRecord) {
        this.record.notifyPropertyChange(key);
      }
    };

    InternalModel.prototype.rollbackAttributes = function rollbackAttributes() {
      var dirtyKeys = Object.keys(this._attributes);

      this._attributes = Object.create(null);

      if (get(this, 'isError')) {
        this._inFlightAttributes = Object.create(null);
        this.didCleanError();
      }

      //Eventually rollback will always work for relationships
      //For now we support it only out of deleted state, because we
      //have an explicit way of knowing when the server acked the relationship change
      if (this.isDeleted()) {
        //TODO: Should probably move this to the state machine somehow
        this.becameReady();
      }

      if (this.isNew()) {
        this.clearRelationships();
      }

      if (this.isValid()) {
        this._inFlightAttributes = Object.create(null);
      }

      this.send('rolledBack');

      this.record._notifyProperties(dirtyKeys);
    };

    InternalModel.prototype.transitionTo = function transitionTo(name) {
      // POSSIBLE TODO: Remove this code and replace with
      // always having direct reference to state objects

      var pivotName = extractPivotName(name);
      var state = this.currentState;
      var transitionMapId = state.stateName + "->" + name;

      do {
        if (state.exit) {
          state.exit(this);
        }
        state = state.parentState;
      } while (!state[pivotName]);

      var setups = void 0;
      var enters = void 0;
      var i = void 0;
      var l = void 0;
      var map = TransitionChainMap[transitionMapId];

      if (map) {
        setups = map.setups;
        enters = map.enters;
        state = map.state;
      } else {
        setups = [];
        enters = [];

        var path = splitOnDot(name);

        for (i = 0, l = path.length; i < l; i++) {
          state = state[path[i]];

          if (state.enter) {
            enters.push(state);
          }
          if (state.setup) {
            setups.push(state);
          }
        }

        TransitionChainMap[transitionMapId] = { setups: setups, enters: enters, state: state };
      }

      for (i = 0, l = enters.length; i < l; i++) {
        enters[i].enter(this);
      }

      this.currentState = state;
      if (this.hasRecord) {
        set(this.record, 'currentState', state);
      }

      for (i = 0, l = setups.length; i < l; i++) {
        setups[i].setup(this);
      }

      this.updateRecordArrays();
    };

    InternalModel.prototype._unhandledEvent = function _unhandledEvent(state, name, context) {
      var errorMessage = "Attempted to handle event `" + name + "` ";
      errorMessage += "on " + String(this) + " while in state ";
      errorMessage += state.stateName + ". ";

      if (context !== undefined) {
        errorMessage += "Called with " + inspect(context) + ".";
      }

      throw new EmberError(errorMessage);
    };

    InternalModel.prototype.triggerLater = function triggerLater() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this._deferredTriggers.push(args) !== 1) {
        return;
      }

      this.store._updateInternalModel(this);
    };

    InternalModel.prototype._triggerDeferredTriggers = function _triggerDeferredTriggers() {
      //TODO: Before 1.0 we want to remove all the events that happen on the pre materialized record,
      //but for now, we queue up all the events triggered before the record was materialized, and flush
      //them once we have the record
      if (!this.hasRecord) {
        return;
      }
      for (var i = 0, l = this._deferredTriggers.length; i < l; i++) {
        this.record.trigger.apply(this.record, this._deferredTriggers[i]);
      }

      this._deferredTriggers.length = 0;
    };

    InternalModel.prototype.clearRelationships = function clearRelationships() {
      var _this2 = this;

      this.eachRelationship(function (name, relationship) {
        if (_this2._relationships.has(name)) {
          var rel = _this2._relationships.get(name);
          rel.clear();
          rel.destroy();
        }
      });
      Object.keys(this._implicitRelationships).forEach(function (key) {
        _this2._implicitRelationships[key].clear();
        _this2._implicitRelationships[key].destroy();
      });
    };

    InternalModel.prototype.destroyRelationships = function destroyRelationships() {
      var _this3 = this;

      this.eachRelationship(function (name, relationship) {
        if (_this3._relationships.has(name)) {
          var rel = _this3._relationships.get(name);
          rel.destroy();
        }
      });
      Object.keys(this._implicitRelationships).forEach(function (key) {
        _this3._implicitRelationships[key].destroy();
      });
    };

    InternalModel.prototype.preloadData = function preloadData(preload) {
      var _this4 = this;

      //TODO(Igor) consider the polymorphic case
      Object.keys(preload).forEach(function (key) {
        var preloadValue = get(preload, key);
        var relationshipMeta = _this4.modelClass.metaForProperty(key);
        if (relationshipMeta.isRelationship) {
          _this4._preloadRelationship(key, preloadValue);
        } else {
          _this4._data[key] = preloadValue;
        }
      });
    };

    InternalModel.prototype._preloadRelationship = function _preloadRelationship(key, preloadValue) {
      var relationshipMeta = this.modelClass.metaForProperty(key);
      var modelClass = relationshipMeta.type;
      if (relationshipMeta.kind === 'hasMany') {
        this._preloadHasMany(key, preloadValue, modelClass);
      } else {
        this._preloadBelongsTo(key, preloadValue, modelClass);
      }
    };

    InternalModel.prototype._preloadHasMany = function _preloadHasMany(key, preloadValue, modelClass) {
      (0, _debug.assert)("You need to pass in an array to set a hasMany property on a record", Array.isArray(preloadValue));
      var recordsToSet = new Array(preloadValue.length);

      for (var i = 0; i < preloadValue.length; i++) {
        var recordToPush = preloadValue[i];
        recordsToSet[i] = this._convertStringOrNumberIntoInternalModel(recordToPush, modelClass);
      }

      //We use the pathway of setting the hasMany as if it came from the adapter
      //because the user told us that they know this relationships exists already
      this._relationships.get(key).updateRecordsFromAdapter(recordsToSet);
    };

    InternalModel.prototype._preloadBelongsTo = function _preloadBelongsTo(key, preloadValue, modelClass) {
      var recordToSet = this._convertStringOrNumberIntoInternalModel(preloadValue, modelClass);

      //We use the pathway of setting the hasMany as if it came from the adapter
      //because the user told us that they know this relationships exists already
      this._relationships.get(key).setRecord(recordToSet);
    };

    InternalModel.prototype._convertStringOrNumberIntoInternalModel = function _convertStringOrNumberIntoInternalModel(value, modelClass) {
      if (typeof value === 'string' || typeof value === 'number') {
        return this.store._internalModelForId(modelClass, value);
      }
      if (value._internalModel) {
        return value._internalModel;
      }
      return value;
    };

    InternalModel.prototype.updateRecordArrays = function updateRecordArrays() {
      if (this._isUpdatingRecordArrays) {
        return;
      }
      this._isUpdatingRecordArrays = true;
      this.store.recordArrayManager.recordDidChange(this);
    };

    InternalModel.prototype.setId = function setId(id) {
      (0, _debug.assert)('A record\'s id cannot be changed once it is in the loaded state', this.id === null || this.id === id || this.isNew());
      this.id = id;
      if (this.record.get('id') !== id) {
        this.record.set('id', id);
      }
    };

    InternalModel.prototype.didError = function didError(error) {
      this.error = error;
      this.isError = true;

      if (this.hasRecord) {
        this.record.setProperties({
          isError: true,
          adapterError: error
        });
      }
    };

    InternalModel.prototype.didCleanError = function didCleanError() {
      this.error = null;
      this.isError = false;

      if (this.hasRecord) {
        this.record.setProperties({
          isError: false,
          adapterError: null
        });
      }
    };

    InternalModel.prototype.adapterDidCommit = function adapterDidCommit(data) {
      if (data) {
        data = data.attributes;
      }

      this.didCleanError();
      var changedKeys = this._changedKeys(data);

      assign(this._data, this._inFlightAttributes);
      if (data) {
        assign(this._data, data);
      }

      this._inFlightAttributes = Object.create(null);

      this.send('didCommit');
      this.updateRecordArrays();

      if (!data) {
        return;
      }

      this.record._notifyProperties(changedKeys);
    };

    InternalModel.prototype.addErrorMessageToAttribute = function addErrorMessageToAttribute(attribute, message) {
      get(this.getRecord(), 'errors')._add(attribute, message);
    };

    InternalModel.prototype.removeErrorMessageFromAttribute = function removeErrorMessageFromAttribute(attribute) {
      get(this.getRecord(), 'errors')._remove(attribute);
    };

    InternalModel.prototype.clearErrorMessages = function clearErrorMessages() {
      get(this.getRecord(), 'errors')._clear();
    };

    InternalModel.prototype.hasErrors = function hasErrors() {
      var errors = get(this.getRecord(), 'errors');

      return !isEmpty(errors);
    };

    InternalModel.prototype.adapterDidInvalidate = function adapterDidInvalidate(errors) {
      var attribute = void 0;

      for (attribute in errors) {
        if (errors.hasOwnProperty(attribute)) {
          this.addErrorMessageToAttribute(attribute, errors[attribute]);
        }
      }

      this.send('becameInvalid');

      this._saveWasRejected();
    };

    InternalModel.prototype.adapterDidError = function adapterDidError(error) {
      this.send('becameError');
      this.didError(error);
      this._saveWasRejected();
    };

    InternalModel.prototype._saveWasRejected = function _saveWasRejected() {
      var keys = Object.keys(this._inFlightAttributes);
      var attrs = this._attributes;
      for (var i = 0; i < keys.length; i++) {
        if (attrs[keys[i]] === undefined) {
          attrs[keys[i]] = this._inFlightAttributes[keys[i]];
        }
      }
      this._inFlightAttributes = Object.create(null);
    };

    InternalModel.prototype._changedKeys = function _changedKeys(updates) {
      var changedKeys = [];

      if (updates) {
        var original = void 0,
            i = void 0,
            value = void 0,
            key = void 0;
        var keys = Object.keys(updates);
        var length = keys.length;
        var attrs = this._attributes;

        original = assign(Object.create(null), this._data);
        original = assign(original, this._inFlightAttributes);

        for (i = 0; i < length; i++) {
          key = keys[i];
          value = updates[key];

          // A value in _attributes means the user has a local change to
          // this attributes. We never override this value when merging
          // updates from the backend so we should not sent a change
          // notification if the server value differs from the original.
          if (attrs[key] !== undefined) {
            continue;
          }

          if (!isEqual(original[key], value)) {
            changedKeys.push(key);
          }
        }
      }

      return changedKeys;
    };

    InternalModel.prototype.toString = function toString() {
      return "<" + this.modelName + ":" + this.id + ">";
    };

    InternalModel.prototype.referenceFor = function referenceFor(kind, name) {
      var _this5 = this;

      var reference = this.references[name];

      if (!reference) {
        var relationship = this._relationships.get(name);

        (0, _debug.runInDebug)(function () {
          var modelName = _this5.modelName;
          (0, _debug.assert)("There is no " + kind + " relationship named '" + name + "' on a model of modelClass '" + modelName + "'", relationship);

          var actualRelationshipKind = relationship.relationshipMeta.kind;
          (0, _debug.assert)("You tried to get the '" + name + "' relationship on a '" + modelName + "' via record." + kind + "('" + name + "'), but the relationship is of kind '" + actualRelationshipKind + "'. Use record." + actualRelationshipKind + "('" + name + "') instead.", actualRelationshipKind === kind);
        });

        if (kind === "belongsTo") {
          reference = new _references.BelongsToReference(this.store, this, relationship);
        } else if (kind === "hasMany") {
          reference = new _references.HasManyReference(this.store, this, relationship);
        }

        this.references[name] = reference;
      }

      return reference;
    };

    _createClass(InternalModel, [{
      key: "modelClass",
      get: function get() {
        return this._modelClass || (this._modelClass = this.store._modelFor(this.modelName));
      }
    }, {
      key: "type",
      get: function get() {
        return this.modelClass;
      }
    }, {
      key: "recordReference",
      get: function get() {
        if (this._recordReference === null) {
          this._recordReference = new _references.RecordReference(this.store, this);
        }
        return this._recordReference;
      }
    }, {
      key: "_recordArrays",
      get: function get() {
        if (this.__recordArrays === null) {
          this.__recordArrays = _orderedSet.default.create();
        }
        return this.__recordArrays;
      }
    }, {
      key: "references",
      get: function get() {
        if (this._references === null) {
          this._references = Object.create(null);
        }
        return this._references;
      }
    }, {
      key: "_deferredTriggers",
      get: function get() {
        if (this.__deferredTriggers === null) {
          this.__deferredTriggers = [];
        }
        return this.__deferredTriggers;
      }
    }, {
      key: "_attributes",
      get: function get() {
        if (this.__attributes === null) {
          this.__attributes = Object.create(null);
        }
        return this.__attributes;
      },
      set: function set(v) {
        this.__attributes = v;
      }
    }, {
      key: "_relationships",
      get: function get() {
        if (this.__relationships === null) {
          this.__relationships = new _create.default(this);
        }

        return this.__relationships;
      }
    }, {
      key: "_inFlightAttributes",
      get: function get() {
        if (this.__inFlightAttributes === null) {
          this.__inFlightAttributes = Object.create(null);
        }
        return this.__inFlightAttributes;
      },
      set: function set(v) {
        this.__inFlightAttributes = v;
      }
    }, {
      key: "_data",
      get: function get() {
        if (this.__data === null) {
          this.__data = Object.create(null);
        }
        return this.__data;
      },
      set: function set(v) {
        this.__data = v;
      }
    }, {
      key: "_implicitRelationships",
      get: function get() {
        if (this.__implicitRelationships === null) {
          this.__implicitRelationships = Object.create(null);
        }
        return this.__implicitRelationships;
      }
    }, {
      key: "record",
      get: function get() {
        return this._record;
      }
    }, {
      key: "isDestroyed",
      get: function get() {
        return this._isDestroyed;
      }
    }, {
      key: "hasRecord",
      get: function get() {
        return !!this._record;
      }
    }]);

    return InternalModel;
  }();

  exports.default = InternalModel;


  if ((0, _features.default)('ds-rollback-attribute')) {
    /*
       Returns the latest truth for an attribute - the canonical value, or the
       in-flight value.
        @method lastAcknowledgedValue
       @private
    */
    InternalModel.prototype.lastAcknowledgedValue = function lastAcknowledgedValue(key) {
      if (key in this._inFlightAttributes) {
        return this._inFlightAttributes[key];
      } else {
        return this._data[key];
      }
    };
  }
});
define("ember-data/-private/system/model/model", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/promise-proxies", "ember-data/-private/system/model/errors", "ember-data/-private/features", "ember-data/-private/system/model/states", "ember-data/-private/system/relationships/ext"], function (exports, _ember, _debug, _promiseProxies, _errors, _features, _states, _ext) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = _ember.default.get,
      computed = _ember.default.computed,
      Map = _ember.default.Map;


  /**
    @module ember-data
  */

  function findPossibleInverses(type, inverseType, name, relationshipsSoFar) {
    var possibleRelationships = relationshipsSoFar || [];

    var relationshipMap = get(inverseType, 'relationships');
    if (!relationshipMap) {
      return possibleRelationships;
    }

    var relationships = relationshipMap.get(type.modelName).filter(function (relationship) {
      var optionsForRelationship = inverseType.metaForProperty(relationship.name).options;

      if (!optionsForRelationship.inverse) {
        return true;
      }

      return name === optionsForRelationship.inverse;
    });

    if (relationships) {
      possibleRelationships.push.apply(possibleRelationships, relationships);
    }

    //Recurse to support polymorphism
    if (type.superclass) {
      findPossibleInverses(type.superclass, inverseType, name, possibleRelationships);
    }

    return possibleRelationships;
  }

  function intersection(array1, array2) {
    var result = [];
    array1.forEach(function (element) {
      if (array2.indexOf(element) >= 0) {
        result.push(element);
      }
    });

    return result;
  }

  var RESERVED_MODEL_PROPS = ['currentState', 'data', 'store'];

  var retrieveFromCurrentState = computed('currentState', function (key) {
    return get(this._internalModel.currentState, key);
  }).readOnly();

  /**
  
    The model class that all Ember Data records descend from.
    This is the public API of Ember Data models. If you are using Ember Data
    in your application, this is the class you should use.
    If you are working on Ember Data internals, you most likely want to be dealing
    with `InternalModel`
  
    @class Model
    @namespace DS
    @extends Ember.Object
    @uses Ember.Evented
  */
  var Model = _ember.default.Object.extend(_ember.default.Evented, {
    _internalModel: null,
    store: null,
    __defineNonEnumerable: function __defineNonEnumerable(property) {
      this[property.name] = property.descriptor.value;
    },


    /**
      If this property is `true` the record is in the `empty`
      state. Empty is the first state all records enter after they have
      been created. Most records created by the store will quickly
      transition to the `loading` state if data needs to be fetched from
      the server or the `created` state if the record is created on the
      client. A record can also enter the empty state if the adapter is
      unable to locate the record.
       @property isEmpty
      @type {Boolean}
      @readOnly
    */
    isEmpty: retrieveFromCurrentState,
    /**
      If this property is `true` the record is in the `loading` state. A
      record enters this state when the store asks the adapter for its
      data. It remains in this state until the adapter provides the
      requested data.
       @property isLoading
      @type {Boolean}
      @readOnly
    */
    isLoading: retrieveFromCurrentState,
    /**
      If this property is `true` the record is in the `loaded` state. A
      record enters this state when its data is populated. Most of a
      record's lifecycle is spent inside substates of the `loaded`
      state.
       Example
       ```javascript
      let record = store.createRecord('model');
      record.get('isLoaded'); // true
       store.findRecord('model', 1).then(function(model) {
        model.get('isLoaded'); // true
      });
      ```
       @property isLoaded
      @type {Boolean}
      @readOnly
    */
    isLoaded: retrieveFromCurrentState,
    /**
      If this property is `true` the record is in the `dirty` state. The
      record has local changes that have not yet been saved by the
      adapter. This includes records that have been created (but not yet
      saved) or deleted.
       Example
       ```javascript
      let record = store.createRecord('model');
      record.get('hasDirtyAttributes'); // true
       store.findRecord('model', 1).then(function(model) {
        model.get('hasDirtyAttributes'); // false
        model.set('foo', 'some value');
        model.get('hasDirtyAttributes'); // true
      });
      ```
       @since 1.13.0
      @property hasDirtyAttributes
      @type {Boolean}
      @readOnly
    */
    hasDirtyAttributes: computed('currentState.isDirty', function () {
      return this.get('currentState.isDirty');
    }),
    /**
      If this property is `true` the record is in the `saving` state. A
      record enters the saving state when `save` is called, but the
      adapter has not yet acknowledged that the changes have been
      persisted to the backend.
       Example
       ```javascript
      let record = store.createRecord('model');
      record.get('isSaving'); // false
      let promise = record.save();
      record.get('isSaving'); // true
      promise.then(function() {
        record.get('isSaving'); // false
      });
      ```
       @property isSaving
      @type {Boolean}
      @readOnly
    */
    isSaving: retrieveFromCurrentState,
    /**
      If this property is `true` the record is in the `deleted` state
      and has been marked for deletion. When `isDeleted` is true and
      `hasDirtyAttributes` is true, the record is deleted locally but the deletion
      was not yet persisted. When `isSaving` is true, the change is
      in-flight. When both `hasDirtyAttributes` and `isSaving` are false, the
      change has persisted.
       Example
       ```javascript
      let record = store.createRecord('model');
      record.get('isDeleted');    // false
      record.deleteRecord();
       // Locally deleted
      record.get('isDeleted');           // true
      record.get('hasDirtyAttributes');  // true
      record.get('isSaving');            // false
       // Persisting the deletion
      let promise = record.save();
      record.get('isDeleted');    // true
      record.get('isSaving');     // true
       // Deletion Persisted
      promise.then(function() {
        record.get('isDeleted');          // true
        record.get('isSaving');           // false
        record.get('hasDirtyAttributes'); // false
      });
      ```
       @property isDeleted
      @type {Boolean}
      @readOnly
    */
    isDeleted: retrieveFromCurrentState,
    /**
      If this property is `true` the record is in the `new` state. A
      record will be in the `new` state when it has been created on the
      client and the adapter has not yet report that it was successfully
      saved.
       Example
       ```javascript
      let record = store.createRecord('model');
      record.get('isNew'); // true
       record.save().then(function(model) {
        model.get('isNew'); // false
      });
      ```
       @property isNew
      @type {Boolean}
      @readOnly
    */
    isNew: retrieveFromCurrentState,
    /**
      If this property is `true` the record is in the `valid` state.
       A record will be in the `valid` state when the adapter did not report any
      server-side validation failures.
       @property isValid
      @type {Boolean}
      @readOnly
    */
    isValid: retrieveFromCurrentState,
    /**
      If the record is in the dirty state this property will report what
      kind of change has caused it to move into the dirty
      state. Possible values are:
       - `created` The record has been created by the client and not yet saved to the adapter.
      - `updated` The record has been updated by the client and not yet saved to the adapter.
      - `deleted` The record has been deleted by the client and not yet saved to the adapter.
       Example
       ```javascript
      let record = store.createRecord('model');
      record.get('dirtyType'); // 'created'
      ```
       @property dirtyType
      @type {String}
      @readOnly
    */
    dirtyType: retrieveFromCurrentState,

    /**
      If `true` the adapter reported that it was unable to save local
      changes to the backend for any reason other than a server-side
      validation error.
       Example
       ```javascript
      record.get('isError'); // false
      record.set('foo', 'valid value');
      record.save().then(null, function() {
        record.get('isError'); // true
      });
      ```
       @property isError
      @type {Boolean}
      @readOnly
    */
    isError: false,

    /**
      If `true` the store is attempting to reload the record from the adapter.
       Example
       ```javascript
      record.get('isReloading'); // false
      record.reload();
      record.get('isReloading'); // true
      ```
       @property isReloading
      @type {Boolean}
      @readOnly
    */
    isReloading: false,

    /**
      All ember models have an id property. This is an identifier
      managed by an external source. These are always coerced to be
      strings before being used internally. Note when declaring the
      attributes for a model it is an error to declare an id
      attribute.
       ```javascript
      let record = store.createRecord('model');
      record.get('id'); // null
       store.findRecord('model', 1).then(function(model) {
        model.get('id'); // '1'
      });
      ```
       @property id
      @type {String}
    */
    id: null,

    /**
      @property currentState
      @private
      @type {Object}
    */
    currentState: _states.default.empty,

    /**
      When the record is in the `invalid` state this object will contain
      any errors returned by the adapter. When present the errors hash
      contains keys corresponding to the invalid property names
      and values which are arrays of Javascript objects with two keys:
       - `message` A string containing the error message from the backend
      - `attribute` The name of the property associated with this error message
       ```javascript
      record.get('errors.length'); // 0
      record.set('foo', 'invalid value');
      record.save().catch(function() {
        record.get('errors').get('foo');
        // [{message: 'foo should be a number.', attribute: 'foo'}]
      });
      ```
       The `errors` property us useful for displaying error messages to
      the user.
       ```handlebars
      <label>Username: {{input value=username}} </label>
      {{#each model.errors.username as |error|}}
        <div class="error">
          {{error.message}}
        </div>
      {{/each}}
      <label>Email: {{input value=email}} </label>
      {{#each model.errors.email as |error|}}
        <div class="error">
          {{error.message}}
        </div>
      {{/each}}
      ```
        You can also access the special `messages` property on the error
      object to get an array of all the error strings.
       ```handlebars
      {{#each model.errors.messages as |message|}}
        <div class="error">
          {{message}}
        </div>
      {{/each}}
      ```
       @property errors
      @type {DS.Errors}
    */
    errors: computed(function () {
      var errors = _errors.default.create();

      errors._registerHandlers(this._internalModel, function () {
        this.send('becameInvalid');
      }, function () {
        this.send('becameValid');
      });
      return errors;
    }).readOnly(),

    /**
      This property holds the `DS.AdapterError` object with which
      last adapter operation was rejected.
       @property adapterError
      @type {DS.AdapterError}
    */
    adapterError: null,

    serialize: function serialize(options) {
      return this._internalModel.createSnapshot().serialize(options);
    },
    toJSON: function toJSON(options) {
      // container is for lazy transform lookups
      var serializer = this.store.serializerFor('-default');
      var snapshot = this._internalModel.createSnapshot();

      return serializer.serialize(snapshot, options);
    },
    ready: function ready() {},
    didLoad: function didLoad() {},
    didUpdate: function didUpdate() {},
    didCreate: function didCreate() {},
    didDelete: function didDelete() {},
    becameInvalid: function becameInvalid() {},
    becameError: function becameError() {},
    rolledBack: function rolledBack() {},
    send: function send(name, context) {
      return this._internalModel.send(name, context);
    },
    transitionTo: function transitionTo(name) {
      return this._internalModel.transitionTo(name);
    },
    deleteRecord: function deleteRecord() {
      this._internalModel.deleteRecord();
    },
    destroyRecord: function destroyRecord(options) {
      this.deleteRecord();
      return this.save(options);
    },
    unloadRecord: function unloadRecord() {
      if (this.isDestroyed) {
        return;
      }
      this._internalModel.unloadRecord();
    },
    _notifyProperties: function _notifyProperties(keys) {
      _ember.default.beginPropertyChanges();
      var key = void 0;
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        this.notifyPropertyChange(key);
      }
      _ember.default.endPropertyChanges();
    },
    changedAttributes: function changedAttributes() {
      return this._internalModel.changedAttributes();
    },
    rollbackAttributes: function rollbackAttributes() {
      this._internalModel.rollbackAttributes();
    },
    _createSnapshot: function _createSnapshot() {
      return this._internalModel.createSnapshot();
    },
    toStringExtension: function toStringExtension() {
      return get(this, 'id');
    },
    save: function save(options) {
      var _this = this;

      return _promiseProxies.PromiseObject.create({
        promise: this._internalModel.save(options).then(function () {
          return _this;
        })
      });
    },
    reload: function reload() {
      var _this2 = this;

      return _promiseProxies.PromiseObject.create({
        promise: this._internalModel.reload().then(function () {
          return _this2;
        })
      });
    },
    trigger: function trigger(name) {
      var length = arguments.length;
      var args = new Array(length - 1);

      for (var i = 1; i < length; i++) {
        args[i - 1] = arguments[i];
      }

      _ember.default.tryInvoke(this, name, args);
      this._super.apply(this, arguments);
    },
    willMergeMixin: function willMergeMixin(props) {
      var constructor = this.constructor;
      (0, _debug.assert)('`' + intersection(Object.keys(props), RESERVED_MODEL_PROPS)[0] + '` is a reserved property name on DS.Model objects. Please choose a different property name for ' + constructor.toString(), !intersection(Object.keys(props), RESERVED_MODEL_PROPS)[0]);
      (0, _debug.assert)("You may not set `id` as an attribute on your model. Please remove any lines that look like: `id: DS.attr('<type>')` from " + constructor.toString(), Object.keys(props).indexOf('id') === -1);
    },
    attr: function attr() {
      (0, _debug.assert)("The `attr` method is not available on DS.Model, a DS.Snapshot was probably expected. Are you passing a DS.Model instead of a DS.Snapshot to your serializer?", false);
    },
    belongsTo: function belongsTo(name) {
      return this._internalModel.referenceFor('belongsTo', name);
    },
    hasMany: function hasMany(name) {
      return this._internalModel.referenceFor('hasMany', name);
    },


    setId: _ember.default.observer('id', function () {
      this._internalModel.setId(this.get('id'));
    }),

    _debugInfo: function _debugInfo() {
      var attributes = ['id'];
      var relationships = {};
      var expensiveProperties = [];

      this.eachAttribute(function (name, meta) {
        return attributes.push(name);
      });

      var groups = [{
        name: 'Attributes',
        properties: attributes,
        expand: true
      }];

      this.eachRelationship(function (name, relationship) {
        var properties = relationships[relationship.kind];

        if (properties === undefined) {
          properties = relationships[relationship.kind] = [];
          groups.push({
            name: relationship.name,
            properties: properties,
            expand: true
          });
        }
        properties.push(name);
        expensiveProperties.push(name);
      });

      groups.push({
        name: 'Flags',
        properties: ['isLoaded', 'hasDirtyAttributes', 'isSaving', 'isDeleted', 'isError', 'isNew', 'isValid']
      });

      return {
        propertyInfo: {
          // include all other mixins / properties (not just the grouped ones)
          includeOtherProperties: true,
          groups: groups,
          // don't pre-calculate unless cached
          expensiveProperties: expensiveProperties
        }
      };
    },
    notifyBelongsToChanged: function notifyBelongsToChanged(key) {
      this.notifyPropertyChange(key);
    },
    didDefineProperty: function didDefineProperty(proto, key, value) {
      // Check if the value being set is a computed property.
      if (value instanceof _ember.default.ComputedProperty) {

        // If it is, get the metadata for the relationship. This is
        // populated by the `DS.belongsTo` helper when it is creating
        // the computed property.
        var meta = value.meta();

        meta.parentType = proto.constructor;
      }
    },
    eachRelationship: function eachRelationship(callback, binding) {
      this.constructor.eachRelationship(callback, binding);
    },
    relationshipFor: function relationshipFor(name) {
      return get(this.constructor, 'relationshipsByName').get(name);
    },
    inverseFor: function inverseFor(key) {
      return this.constructor.inverseFor(key, this.store);
    },
    notifyHasManyAdded: function notifyHasManyAdded(key) {
      //We need to notifyPropertyChange in the adding case because we need to make sure
      //we fetch the newly added record in case it is unloaded
      //TODO(Igor): Consider whether we could do this only if the record state is unloaded

      //Goes away once hasMany is double promisified
      this.notifyPropertyChange(key);
    },
    eachAttribute: function eachAttribute(callback, binding) {
      this.constructor.eachAttribute(callback, binding);
    }
  });

  /**
   @property data
   @private
   @type {Object}
   */
  Object.defineProperty(Model.prototype, 'data', {
    get: function get() {
      return this._internalModel._data;
    }
  });

  (0, _debug.runInDebug)(function () {
    Model.reopen({
      init: function init() {
        this._super.apply(this, arguments);

        if (!this._internalModel) {
          throw new _ember.default.Error('You should not call `create` on a model. Instead, call `store.createRecord` with the attributes you would like to set.');
        }
      }
    });
  });

  Model.reopenClass({
    isModel: true,

    /**
      Override the class' `create()` method to raise an error. This
      prevents end users from inadvertently calling `create()` instead
      of `createRecord()`. The store is still able to create instances
      by calling the `_create()` method. To create an instance of a
      `DS.Model` use [store.createRecord](DS.Store.html#method_createRecord).
       @method create
      @private
      @static
    */
    /**
     Represents the model's class name as a string. This can be used to look up the model's class name through
     `DS.Store`'s modelFor method.
      `modelName` is generated for you by Ember Data. It will be a lowercased, dasherized string.
     For example:
      ```javascript
     store.modelFor('post').modelName; // 'post'
     store.modelFor('blog-post').modelName; // 'blog-post'
     ```
      The most common place you'll want to access `modelName` is in your serializer's `payloadKeyFromModelName` method. For example, to change payload
     keys to underscore (instead of dasherized), you might use the following code:
      ```javascript
     export default const PostSerializer = DS.RESTSerializer.extend({
       payloadKeyFromModelName: function(modelName) {
         return Ember.String.underscore(modelName);
       }
     });
     ```
     @property modelName
     @type String
     @readonly
     @static
    */
    modelName: null,

    typeForRelationship: function typeForRelationship(name, store) {
      var relationship = get(this, 'relationshipsByName').get(name);
      return relationship && store.modelFor(relationship.type);
    },


    inverseMap: _ember.default.computed(function () {
      return Object.create(null);
    }),

    inverseFor: function inverseFor(name, store) {
      var inverseMap = get(this, 'inverseMap');
      if (inverseMap[name]) {
        return inverseMap[name];
      } else {
        var inverse = this._findInverseFor(name, store);
        inverseMap[name] = inverse;
        return inverse;
      }
    },
    _findInverseFor: function _findInverseFor(name, store) {

      var inverseType = this.typeForRelationship(name, store);
      if (!inverseType) {
        return null;
      }

      var propertyMeta = this.metaForProperty(name);
      //If inverse is manually specified to be null, like  `comments: DS.hasMany('message', { inverse: null })`
      var options = propertyMeta.options;
      if (options.inverse === null) {
        return null;
      }

      var inverseName = void 0,
          inverseKind = void 0,
          inverse = void 0;

      //If inverse is specified manually, return the inverse
      if (options.inverse) {
        inverseName = options.inverse;
        inverse = _ember.default.get(inverseType, 'relationshipsByName').get(inverseName);

        (0, _debug.assert)("We found no inverse relationships by the name of '" + inverseName + "' on the '" + inverseType.modelName + "' model. This is most likely due to a missing attribute on your model definition.", !_ember.default.isNone(inverse));

        inverseKind = inverse.kind;
      } else {
        //No inverse was specified manually, we need to use a heuristic to guess one
        if (propertyMeta.type === propertyMeta.parentType.modelName) {
          (0, _debug.warn)("Detected a reflexive relationship by the name of '" + name + "' without an inverse option. Look at http://emberjs.com/guides/models/defining-models/#toc_reflexive-relation for how to explicitly specify inverses.", false, {
            id: 'ds.model.reflexive-relationship-without-inverse'
          });
        }

        var possibleRelationships = findPossibleInverses(this, inverseType, name);

        if (possibleRelationships.length === 0) {
          return null;
        }

        var filteredRelationships = possibleRelationships.filter(function (possibleRelationship) {
          var optionsForRelationship = inverseType.metaForProperty(possibleRelationship.name).options;
          return name === optionsForRelationship.inverse;
        });

        (0, _debug.assert)("You defined the '" + name + "' relationship on " + this + ", but you defined the inverse relationships of type " + inverseType.toString() + " multiple times. Look at http://emberjs.com/guides/models/defining-models/#toc_explicit-inverses for how to explicitly specify inverses", filteredRelationships.length < 2);

        if (filteredRelationships.length === 1) {
          possibleRelationships = filteredRelationships;
        }

        (0, _debug.assert)("You defined the '" + name + "' relationship on " + this + ", but multiple possible inverse relationships of type " + this + " were found on " + inverseType + ". Look at http://emberjs.com/guides/models/defining-models/#toc_explicit-inverses for how to explicitly specify inverses", possibleRelationships.length === 1);

        inverseName = possibleRelationships[0].name;
        inverseKind = possibleRelationships[0].kind;
      }

      return {
        type: inverseType,
        name: inverseName,
        kind: inverseKind
      };
    },


    /**
     The model's relationships as a map, keyed on the type of the
     relationship. The value of each entry is an array containing a descriptor
     for each relationship with that type, describing the name of the relationship
     as well as the type.
      For example, given the following model definition:
      ```app/models/blog.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        users: DS.hasMany('user'),
        owner: DS.belongsTo('user'),
        posts: DS.hasMany('post')
      });
     ```
      This computed property would return a map describing these
     relationships, like this:
      ```javascript
     import Ember from 'ember';
     import Blog from 'app/models/blog';
     import User from 'app/models/user';
     import Post from 'app/models/post';
      let relationships = Ember.get(Blog, 'relationships');
     relationships.get(User);
     //=> [ { name: 'users', kind: 'hasMany' },
     //     { name: 'owner', kind: 'belongsTo' } ]
     relationships.get(Post);
     //=> [ { name: 'posts', kind: 'hasMany' } ]
     ```
      @property relationships
     @static
     @type Ember.Map
     @readOnly
     */

    relationships: _ext.relationshipsDescriptor,

    /**
     A hash containing lists of the model's relationships, grouped
     by the relationship kind. For example, given a model with this
     definition:
      ```app/models/blog.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        users: DS.hasMany('user'),
        owner: DS.belongsTo('user'),
         posts: DS.hasMany('post')
      });
     ```
      This property would contain the following:
      ```javascript
     import Ember from 'ember';
     import Blog from 'app/models/blog';
      let relationshipNames = Ember.get(Blog, 'relationshipNames');
     relationshipNames.hasMany;
     //=> ['users', 'posts']
     relationshipNames.belongsTo;
     //=> ['owner']
     ```
      @property relationshipNames
     @static
     @type Object
     @readOnly
     */
    relationshipNames: _ember.default.computed(function () {
      var names = {
        hasMany: [],
        belongsTo: []
      };

      this.eachComputedProperty(function (name, meta) {
        if (meta.isRelationship) {
          names[meta.kind].push(name);
        }
      });

      return names;
    }),

    /**
     An array of types directly related to a model. Each type will be
     included once, regardless of the number of relationships it has with
     the model.
      For example, given a model with this definition:
      ```app/models/blog.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        users: DS.hasMany('user'),
        owner: DS.belongsTo('user'),
         posts: DS.hasMany('post')
      });
     ```
      This property would contain the following:
      ```javascript
     import Ember from 'ember';
     import Blog from 'app/models/blog';
      let relatedTypes = Ember.get(Blog, 'relatedTypes');
     //=> [ User, Post ]
     ```
      @property relatedTypes
     @static
     @type Ember.Array
     @readOnly
     */
    relatedTypes: _ext.relatedTypesDescriptor,

    /**
     A map whose keys are the relationships of a model and whose values are
     relationship descriptors.
      For example, given a model with this
     definition:
      ```app/models/blog.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        users: DS.hasMany('user'),
        owner: DS.belongsTo('user'),
         posts: DS.hasMany('post')
      });
     ```
      This property would contain the following:
      ```javascript
     import Ember from 'ember';
     import Blog from 'app/models/blog';
      let relationshipsByName = Ember.get(Blog, 'relationshipsByName');
     relationshipsByName.get('users');
     //=> { key: 'users', kind: 'hasMany', type: 'user', options: Object, isRelationship: true }
     relationshipsByName.get('owner');
     //=> { key: 'owner', kind: 'belongsTo', type: 'user', options: Object, isRelationship: true }
     ```
      @property relationshipsByName
     @static
     @type Ember.Map
     @readOnly
     */
    relationshipsByName: _ext.relationshipsByNameDescriptor,

    /**
     A map whose keys are the fields of the model and whose values are strings
     describing the kind of the field. A model's fields are the union of all of its
     attributes and relationships.
      For example:
      ```app/models/blog.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        users: DS.hasMany('user'),
        owner: DS.belongsTo('user'),
         posts: DS.hasMany('post'),
         title: DS.attr('string')
      });
     ```
      ```js
     import Ember from 'ember';
     import Blog from 'app/models/blog';
      let fields = Ember.get(Blog, 'fields');
     fields.forEach(function(kind, field) {
        console.log(field, kind);
      });
      // prints:
     // users, hasMany
     // owner, belongsTo
     // posts, hasMany
     // title, attribute
     ```
      @property fields
     @static
     @type Ember.Map
     @readOnly
     */
    fields: _ember.default.computed(function () {
      var map = Map.create();

      this.eachComputedProperty(function (name, meta) {
        if (meta.isRelationship) {
          map.set(name, meta.kind);
        } else if (meta.isAttribute) {
          map.set(name, 'attribute');
        }
      });

      return map;
    }).readOnly(),

    eachRelationship: function eachRelationship(callback, binding) {
      get(this, 'relationshipsByName').forEach(function (relationship, name) {
        callback.call(binding, name, relationship);
      });
    },
    eachRelatedType: function eachRelatedType(callback, binding) {
      var relationshipTypes = get(this, 'relatedTypes');

      for (var i = 0; i < relationshipTypes.length; i++) {
        var type = relationshipTypes[i];
        callback.call(binding, type);
      }
    },
    determineRelationshipType: function determineRelationshipType(knownSide, store) {
      var knownKey = knownSide.key;
      var knownKind = knownSide.kind;
      var inverse = this.inverseFor(knownKey, store);
      // let key;
      var otherKind = void 0;

      if (!inverse) {
        return knownKind === 'belongsTo' ? 'oneToNone' : 'manyToNone';
      }

      // key = inverse.name;
      otherKind = inverse.kind;

      if (otherKind === 'belongsTo') {
        return knownKind === 'belongsTo' ? 'oneToOne' : 'manyToOne';
      } else {
        return knownKind === 'belongsTo' ? 'oneToMany' : 'manyToMany';
      }
    },


    /**
     A map whose keys are the attributes of the model (properties
     described by DS.attr) and whose values are the meta object for the
     property.
      Example
      ```app/models/person.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        firstName: DS.attr('string'),
        lastName: DS.attr('string'),
        birthday: DS.attr('date')
      });
     ```
      ```javascript
     import Ember from 'ember';
     import Person from 'app/models/person';
      let attributes = Ember.get(Person, 'attributes')
      attributes.forEach(function(meta, name) {
        console.log(name, meta);
      });
      // prints:
     // firstName {type: "string", isAttribute: true, options: Object, parentType: function, name: "firstName"}
     // lastName {type: "string", isAttribute: true, options: Object, parentType: function, name: "lastName"}
     // birthday {type: "date", isAttribute: true, options: Object, parentType: function, name: "birthday"}
     ```
      @property attributes
     @static
     @type {Ember.Map}
     @readOnly
     */
    attributes: _ember.default.computed(function () {
      var _this3 = this;

      var map = Map.create();

      this.eachComputedProperty(function (name, meta) {
        if (meta.isAttribute) {
          (0, _debug.assert)("You may not set `id` as an attribute on your model. Please remove any lines that look like: `id: DS.attr('<type>')` from " + _this3.toString(), name !== 'id');

          meta.name = name;
          map.set(name, meta);
        }
      });

      return map;
    }).readOnly(),

    /**
     A map whose keys are the attributes of the model (properties
     described by DS.attr) and whose values are type of transformation
     applied to each attribute. This map does not include any
     attributes that do not have an transformation type.
      Example
      ```app/models/person.js
     import DS from 'ember-data';
      export default DS.Model.extend({
        firstName: DS.attr(),
        lastName: DS.attr('string'),
        birthday: DS.attr('date')
      });
     ```
      ```javascript
     import Ember from 'ember';
     import Person from 'app/models/person';
      let transformedAttributes = Ember.get(Person, 'transformedAttributes')
      transformedAttributes.forEach(function(field, type) {
        console.log(field, type);
      });
      // prints:
     // lastName string
     // birthday date
     ```
      @property transformedAttributes
     @static
     @type {Ember.Map}
     @readOnly
     */
    transformedAttributes: _ember.default.computed(function () {
      var map = Map.create();

      this.eachAttribute(function (key, meta) {
        if (meta.type) {
          map.set(key, meta.type);
        }
      });

      return map;
    }).readOnly(),

    eachAttribute: function eachAttribute(callback, binding) {
      get(this, 'attributes').forEach(function (meta, name) {
        callback.call(binding, name, meta);
      });
    },
    eachTransformedAttribute: function eachTransformedAttribute(callback, binding) {
      get(this, 'transformedAttributes').forEach(function (type, name) {
        callback.call(binding, name, type);
      });
    }
  });

  // if `Ember.setOwner` is defined, accessing `this.container` is
  // deprecated (but functional). In "standard" Ember usage, this
  // deprecation is actually created via an `.extend` of the factory
  // inside the container itself, but that only happens on models
  // with MODEL_FACTORY_INJECTIONS enabled :(
  if (_ember.default.setOwner) {
    Object.defineProperty(Model.prototype, 'container', {
      configurable: true,
      enumerable: false,
      get: function get() {
        (0, _debug.deprecate)('Using the injected `container` is deprecated. Please use the `getOwner` helper instead to access the owner of this object.', false, { id: 'ember-application.injected-container', until: '3.0.0' });

        return this.store.container;
      }
    });
  }

  if ((0, _features.default)('ds-rollback-attribute')) {
    Model.reopen({
      rollbackAttribute: function rollbackAttribute(attributeName) {
        if (attributeName in this._internalModel._attributes) {
          this.set(attributeName, this._internalModel.lastAcknowledgedValue(attributeName));
        }
      }
    });
  }

  exports.default = Model;
});
define('ember-data/-private/system/model/states', ['exports', 'ember-data/-private/debug'], function (exports, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /*
    This file encapsulates the various states that a record can transition
    through during its lifecycle.
  */
  /**
    ### State
  
    Each record has a `currentState` property that explicitly tracks what
    state a record is in at any given time. For instance, if a record is
    newly created and has not yet been sent to the adapter to be saved,
    it would be in the `root.loaded.created.uncommitted` state.  If a
    record has had local modifications made to it that are in the
    process of being saved, the record would be in the
    `root.loaded.updated.inFlight` state. (This state paths will be
    explained in more detail below.)
  
    Events are sent by the record or its store to the record's
    `currentState` property. How the state reacts to these events is
    dependent on which state it is in. In some states, certain events
    will be invalid and will cause an exception to be raised.
  
    States are hierarchical and every state is a substate of the
    `RootState`. For example, a record can be in the
    `root.deleted.uncommitted` state, then transition into the
    `root.deleted.inFlight` state. If a child state does not implement
    an event handler, the state manager will attempt to invoke the event
    on all parent states until the root state is reached. The state
    hierarchy of a record is described in terms of a path string. You
    can determine a record's current state by getting the state's
    `stateName` property:
  
    ```javascript
    record.get('currentState.stateName');
    //=> "root.created.uncommitted"
     ```
  
    The hierarchy of valid states that ship with ember data looks like
    this:
  
    ```text
    * root
      * deleted
        * saved
        * uncommitted
        * inFlight
      * empty
      * loaded
        * created
          * uncommitted
          * inFlight
        * saved
        * updated
          * uncommitted
          * inFlight
      * loading
    ```
  
    The `DS.Model` states are themselves stateless. What that means is
    that, the hierarchical states that each of *those* points to is a
    shared data structure. For performance reasons, instead of each
    record getting its own copy of the hierarchy of states, each record
    points to this global, immutable shared instance. How does a state
    know which record it should be acting on? We pass the record
    instance into the state's event handlers as the first argument.
  
    The record passed as the first parameter is where you should stash
    state about the record if needed; you should never store data on the state
    object itself.
  
    ### Events and Flags
  
    A state may implement zero or more events and flags.
  
    #### Events
  
    Events are named functions that are invoked when sent to a record. The
    record will first look for a method with the given name on the
    current state. If no method is found, it will search the current
    state's parent, and then its grandparent, and so on until reaching
    the top of the hierarchy. If the root is reached without an event
    handler being found, an exception will be raised. This can be very
    helpful when debugging new features.
  
    Here's an example implementation of a state with a `myEvent` event handler:
  
    ```javascript
    aState: DS.State.create({
      myEvent: function(manager, param) {
        console.log("Received myEvent with", param);
      }
    })
    ```
  
    To trigger this event:
  
    ```javascript
    record.send('myEvent', 'foo');
    //=> "Received myEvent with foo"
    ```
  
    Note that an optional parameter can be sent to a record's `send()` method,
    which will be passed as the second parameter to the event handler.
  
    Events should transition to a different state if appropriate. This can be
    done by calling the record's `transitionTo()` method with a path to the
    desired state. The state manager will attempt to resolve the state path
    relative to the current state. If no state is found at that path, it will
    attempt to resolve it relative to the current state's parent, and then its
    parent, and so on until the root is reached. For example, imagine a hierarchy
    like this:
  
        * created
          * uncommitted <-- currentState
          * inFlight
        * updated
          * inFlight
  
    If we are currently in the `uncommitted` state, calling
    `transitionTo('inFlight')` would transition to the `created.inFlight` state,
    while calling `transitionTo('updated.inFlight')` would transition to
    the `updated.inFlight` state.
  
    Remember that *only events* should ever cause a state transition. You should
    never call `transitionTo()` from outside a state's event handler. If you are
    tempted to do so, create a new event and send that to the state manager.
  
    #### Flags
  
    Flags are Boolean values that can be used to introspect a record's current
    state in a more user-friendly way than examining its state path. For example,
    instead of doing this:
  
    ```javascript
    var statePath = record.get('stateManager.currentPath');
    if (statePath === 'created.inFlight') {
      doSomething();
    }
    ```
  
    You can say:
  
    ```javascript
    if (record.get('isNew') && record.get('isSaving')) {
      doSomething();
    }
    ```
  
    If your state does not set a value for a given flag, the value will
    be inherited from its parent (or the first place in the state hierarchy
    where it is defined).
  
    The current set of flags are defined below. If you want to add a new flag,
    in addition to the area below, you will also need to declare it in the
    `DS.Model` class.
  
  
     * [isEmpty](DS.Model.html#property_isEmpty)
     * [isLoading](DS.Model.html#property_isLoading)
     * [isLoaded](DS.Model.html#property_isLoaded)
     * [hasDirtyAttributes](DS.Model.html#property_hasDirtyAttributes)
     * [isSaving](DS.Model.html#property_isSaving)
     * [isDeleted](DS.Model.html#property_isDeleted)
     * [isNew](DS.Model.html#property_isNew)
     * [isValid](DS.Model.html#property_isValid)
  
    @namespace DS
    @class RootState
  */

  function _didSetProperty(internalModel, context) {
    if (context.value === context.originalValue) {
      delete internalModel._attributes[context.name];
      internalModel.send('propertyWasReset', context.name);
    } else if (context.value !== context.oldValue) {
      internalModel.send('becomeDirty');
    }

    internalModel.updateRecordArrays();
  }

  // Implementation notes:
  //
  // Each state has a boolean value for all of the following flags:
  //
  // * isLoaded: The record has a populated `data` property. When a
  //   record is loaded via `store.find`, `isLoaded` is false
  //   until the adapter sets it. When a record is created locally,
  //   its `isLoaded` property is always true.
  // * isDirty: The record has local changes that have not yet been
  //   saved by the adapter. This includes records that have been
  //   created (but not yet saved) or deleted.
  // * isSaving: The record has been committed, but
  //   the adapter has not yet acknowledged that the changes have
  //   been persisted to the backend.
  // * isDeleted: The record was marked for deletion. When `isDeleted`
  //   is true and `isDirty` is true, the record is deleted locally
  //   but the deletion was not yet persisted. When `isSaving` is
  //   true, the change is in-flight. When both `isDirty` and
  //   `isSaving` are false, the change has persisted.
  // * isNew: The record was created on the client and the adapter
  //   did not yet report that it was successfully saved.
  // * isValid: The adapter did not report any server-side validation
  //   failures.

  // The dirty state is a abstract state whose functionality is
  // shared between the `created` and `updated` states.
  //
  // The deleted state shares the `isDirty` flag with the
  // subclasses of `DirtyState`, but with a very different
  // implementation.
  //
  // Dirty states have three child states:
  //
  // `uncommitted`: the store has not yet handed off the record
  //   to be saved.
  // `inFlight`: the store has handed off the record to be saved,
  //   but the adapter has not yet acknowledged success.
  // `invalid`: the record has invalid information and cannot be
  //   sent to the adapter yet.
  var DirtyState = {
    initialState: 'uncommitted',

    // FLAGS
    isDirty: true,

    // SUBSTATES

    // When a record first becomes dirty, it is `uncommitted`.
    // This means that there are local pending changes, but they
    // have not yet begun to be saved, and are not invalid.
    uncommitted: {
      // EVENTS
      didSetProperty: _didSetProperty,

      loadingData: function loadingData() {},
      propertyWasReset: function propertyWasReset(internalModel, name) {
        if (!internalModel.hasChangedAttributes()) {
          internalModel.send('rolledBack');
        }
      },
      pushedData: function pushedData(internalModel) {
        internalModel.updateChangedAttributes();

        if (!internalModel.hasChangedAttributes()) {
          internalModel.transitionTo('loaded.saved');
        }
      },
      becomeDirty: function becomeDirty() {},
      willCommit: function willCommit(internalModel) {
        internalModel.transitionTo('inFlight');
      },
      reloadRecord: function reloadRecord(internalModel, resolve) {
        resolve(internalModel.store._reloadRecord(internalModel));
      },
      rolledBack: function rolledBack(internalModel) {
        internalModel.transitionTo('loaded.saved');
      },
      becameInvalid: function becameInvalid(internalModel) {
        internalModel.transitionTo('invalid');
      },
      rollback: function rollback(internalModel) {
        internalModel.rollbackAttributes();
        internalModel.triggerLater('ready');
      }
    },

    // Once a record has been handed off to the adapter to be
    // saved, it is in the 'in flight' state. Changes to the
    // record cannot be made during this window.
    inFlight: {
      // FLAGS
      isSaving: true,

      // EVENTS
      didSetProperty: _didSetProperty,
      becomeDirty: function becomeDirty() {},
      pushedData: function pushedData() {},


      unloadRecord: assertAgainstUnloadRecord,

      willCommit: function willCommit() {},
      didCommit: function didCommit(internalModel) {
        internalModel.transitionTo('saved');
        internalModel.send('invokeLifecycleCallbacks', this.dirtyType);
      },
      becameInvalid: function becameInvalid(internalModel) {
        internalModel.transitionTo('invalid');
        internalModel.send('invokeLifecycleCallbacks');
      },
      becameError: function becameError(internalModel) {
        internalModel.transitionTo('uncommitted');
        internalModel.triggerLater('becameError', internalModel);
      }
    },

    // A record is in the `invalid` if the adapter has indicated
    // the the record failed server-side invalidations.
    invalid: {
      // FLAGS
      isValid: false,

      deleteRecord: function deleteRecord(internalModel) {
        internalModel.transitionTo('deleted.uncommitted');
      },
      didSetProperty: function didSetProperty(internalModel, context) {
        internalModel.removeErrorMessageFromAttribute(context.name);

        _didSetProperty(internalModel, context);

        if (!internalModel.hasErrors()) {
          this.becameValid(internalModel);
        }
      },
      becameInvalid: function becameInvalid() {},
      becomeDirty: function becomeDirty() {},
      pushedData: function pushedData() {},
      willCommit: function willCommit(internalModel) {
        internalModel.clearErrorMessages();
        internalModel.transitionTo('inFlight');
      },
      rolledBack: function rolledBack(internalModel) {
        internalModel.clearErrorMessages();
        internalModel.transitionTo('loaded.saved');
        internalModel.triggerLater('ready');
      },
      becameValid: function becameValid(internalModel) {
        internalModel.transitionTo('uncommitted');
      },
      invokeLifecycleCallbacks: function invokeLifecycleCallbacks(internalModel) {
        internalModel.triggerLater('becameInvalid', internalModel);
      }
    }
  };

  // The created and updated states are created outside the state
  // chart so we can reopen their substates and add mixins as
  // necessary.

  function deepClone(object) {
    var clone = {};
    var value = void 0;

    for (var prop in object) {
      value = object[prop];
      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        clone[prop] = deepClone(value);
      } else {
        clone[prop] = value;
      }
    }

    return clone;
  }

  function mixin(original, hash) {
    for (var prop in hash) {
      original[prop] = hash[prop];
    }

    return original;
  }

  function dirtyState(options) {
    var newState = deepClone(DirtyState);
    return mixin(newState, options);
  }

  var createdState = dirtyState({
    dirtyType: 'created',
    // FLAGS
    isNew: true
  });

  createdState.invalid.rolledBack = function (internalModel) {
    internalModel.transitionTo('deleted.saved');
  };

  createdState.uncommitted.rolledBack = function (internalModel) {
    internalModel.transitionTo('deleted.saved');
  };

  var updatedState = dirtyState({
    dirtyType: 'updated'
  });

  function createdStateDeleteRecord(internalModel) {
    internalModel.transitionTo('deleted.saved');
    internalModel.send('invokeLifecycleCallbacks');
  }

  createdState.uncommitted.deleteRecord = createdStateDeleteRecord;

  createdState.invalid.deleteRecord = createdStateDeleteRecord;

  createdState.uncommitted.rollback = function (internalModel) {
    DirtyState.uncommitted.rollback.apply(this, arguments);
    internalModel.transitionTo('deleted.saved');
  };

  createdState.uncommitted.pushedData = function (internalModel) {
    internalModel.transitionTo('loaded.updated.uncommitted');
    internalModel.triggerLater('didLoad');
  };

  createdState.uncommitted.propertyWasReset = function () {};

  function assertAgainstUnloadRecord(internalModel) {
    (0, _debug.assert)("You can only unload a record which is not inFlight. `" + internalModel + "`", false);
  }

  updatedState.inFlight.unloadRecord = assertAgainstUnloadRecord;

  updatedState.uncommitted.deleteRecord = function (internalModel) {
    internalModel.transitionTo('deleted.uncommitted');
  };

  var RootState = {
    // FLAGS
    isEmpty: false,
    isLoading: false,
    isLoaded: false,
    isDirty: false,
    isSaving: false,
    isDeleted: false,
    isNew: false,
    isValid: true,

    rolledBack: function rolledBack() {},
    unloadRecord: function unloadRecord(internalModel) {},
    propertyWasReset: function propertyWasReset() {},


    // SUBSTATES

    // A record begins its lifecycle in the `empty` state.
    // If its data will come from the adapter, it will
    // transition into the `loading` state. Otherwise, if
    // the record is being created on the client, it will
    // transition into the `created` state.
    empty: {
      isEmpty: true,

      loadingData: function loadingData(internalModel, promise) {
        internalModel._loadingPromise = promise;
        internalModel.transitionTo('loading');
      },
      loadedData: function loadedData(internalModel) {
        internalModel.transitionTo('loaded.created.uncommitted');
        internalModel.triggerLater('ready');
      },
      pushedData: function pushedData(internalModel) {
        internalModel.transitionTo('loaded.saved');
        internalModel.triggerLater('didLoad');
        internalModel.triggerLater('ready');
      }
    },

    // A record enters this state when the store asks
    // the adapter for its data. It remains in this state
    // until the adapter provides the requested data.
    //
    // Usually, this process is asynchronous, using an
    // XHR to retrieve the data.
    loading: {
      // FLAGS
      isLoading: true,

      exit: function exit(internalModel) {
        internalModel._loadingPromise = null;
      },
      pushedData: function pushedData(internalModel) {
        internalModel.transitionTo('loaded.saved');
        internalModel.triggerLater('didLoad');
        internalModel.triggerLater('ready');
        //TODO this seems out of place here
        internalModel.didCleanError();
      },
      becameError: function becameError(internalModel) {
        internalModel.triggerLater('becameError', internalModel);
      },
      notFound: function notFound(internalModel) {
        internalModel.transitionTo('empty');
      }
    },

    // A record enters this state when its data is populated.
    // Most of a record's lifecycle is spent inside substates
    // of the `loaded` state.
    loaded: {
      initialState: 'saved',

      // FLAGS
      isLoaded: true,

      loadingData: function loadingData() {},


      // SUBSTATES

      // If there are no local changes to a record, it remains
      // in the `saved` state.
      saved: {
        setup: function setup(internalModel) {
          if (internalModel.hasChangedAttributes()) {
            internalModel.adapterDidDirty();
          }
        },


        // EVENTS
        didSetProperty: _didSetProperty,

        pushedData: function pushedData() {},
        becomeDirty: function becomeDirty(internalModel) {
          internalModel.transitionTo('updated.uncommitted');
        },
        willCommit: function willCommit(internalModel) {
          internalModel.transitionTo('updated.inFlight');
        },
        reloadRecord: function reloadRecord(internalModel, resolve) {
          resolve(internalModel.store._reloadRecord(internalModel));
        },
        deleteRecord: function deleteRecord(internalModel) {
          internalModel.transitionTo('deleted.uncommitted');
        },
        unloadRecord: function unloadRecord(internalModel) {},
        didCommit: function didCommit() {},
        notFound: function notFound() {}
      },

      // A record is in this state after it has been locally
      // created but before the adapter has indicated that
      // it has been saved.
      created: createdState,

      // A record is in this state if it has already been
      // saved to the server, but there are new local changes
      // that have not yet been saved.
      updated: updatedState
    },

    // A record is in this state if it was deleted from the store.
    deleted: {
      initialState: 'uncommitted',
      dirtyType: 'deleted',

      // FLAGS
      isDeleted: true,
      isLoaded: true,
      isDirty: true,

      setup: function setup(internalModel) {
        internalModel.updateRecordArrays();
      },


      // SUBSTATES

      // When a record is deleted, it enters the `start`
      // state. It will exit this state when the record
      // starts to commit.
      uncommitted: {
        willCommit: function willCommit(internalModel) {
          internalModel.transitionTo('inFlight');
        },
        rollback: function rollback(internalModel) {
          internalModel.rollbackAttributes();
          internalModel.triggerLater('ready');
        },
        pushedData: function pushedData() {},
        becomeDirty: function becomeDirty() {},
        deleteRecord: function deleteRecord() {},
        rolledBack: function rolledBack(internalModel) {
          internalModel.transitionTo('loaded.saved');
          internalModel.triggerLater('ready');
        }
      },

      // After a record starts committing, but
      // before the adapter indicates that the deletion
      // has saved to the server, a record is in the
      // `inFlight` substate of `deleted`.
      inFlight: {
        // FLAGS
        isSaving: true,

        // EVENTS

        unloadRecord: assertAgainstUnloadRecord,

        willCommit: function willCommit() {},
        didCommit: function didCommit(internalModel) {
          internalModel.transitionTo('saved');

          internalModel.send('invokeLifecycleCallbacks');
        },
        becameError: function becameError(internalModel) {
          internalModel.transitionTo('uncommitted');
          internalModel.triggerLater('becameError', internalModel);
        },
        becameInvalid: function becameInvalid(internalModel) {
          internalModel.transitionTo('invalid');
          internalModel.triggerLater('becameInvalid', internalModel);
        }
      },

      // Once the adapter indicates that the deletion has
      // been saved, the record enters the `saved` substate
      // of `deleted`.
      saved: {
        // FLAGS
        isDirty: false,

        setup: function setup(internalModel) {
          internalModel.clearRelationships();
        },
        invokeLifecycleCallbacks: function invokeLifecycleCallbacks(internalModel) {
          internalModel.triggerLater('didDelete', internalModel);
          internalModel.triggerLater('didCommit', internalModel);
        },
        willCommit: function willCommit() {},
        didCommit: function didCommit() {}
      },

      invalid: {
        isValid: false,

        didSetProperty: function didSetProperty(internalModel, context) {
          internalModel.removeErrorMessageFromAttribute(context.name);

          _didSetProperty(internalModel, context);

          if (!internalModel.hasErrors()) {
            this.becameValid(internalModel);
          }
        },
        becameInvalid: function becameInvalid() {},
        becomeDirty: function becomeDirty() {},
        deleteRecord: function deleteRecord() {},
        willCommit: function willCommit() {},
        rolledBack: function rolledBack(internalModel) {
          internalModel.clearErrorMessages();
          internalModel.transitionTo('loaded.saved');
          internalModel.triggerLater('ready');
        },
        becameValid: function becameValid(internalModel) {
          internalModel.transitionTo('uncommitted');
        }
      }
    },

    invokeLifecycleCallbacks: function invokeLifecycleCallbacks(internalModel, dirtyType) {
      if (dirtyType === 'created') {
        internalModel.triggerLater('didCreate', internalModel);
      } else {
        internalModel.triggerLater('didUpdate', internalModel);
      }

      internalModel.triggerLater('didCommit', internalModel);
    }
  };

  function wireState(object, parent, name) {
    // TODO: Use Object.create and copy instead
    object = mixin(parent ? Object.create(parent) : {}, object);
    object.parentState = parent;
    object.stateName = name;

    for (var prop in object) {
      if (!object.hasOwnProperty(prop) || prop === 'parentState' || prop === 'stateName') {
        continue;
      }
      if (_typeof(object[prop]) === 'object') {
        object[prop] = wireState(object[prop], object, name + '.' + prop);
      }
    }

    return object;
  }

  exports.default = wireState(RootState, null, 'root');
});
define('ember-data/-private/system/normalize-link', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _normalizeLink;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /*
    This method normalizes a link to an "links object". If the passed link is
    already an object it's returned without any modifications.
  
    See http://jsonapi.org/format/#document-links for more information.
  
    @method _normalizeLink
    @private
    @param {String} link
    @return {Object|null}
    @for DS
  */
  function _normalizeLink(link) {
    switch (typeof link === 'undefined' ? 'undefined' : _typeof(link)) {
      case 'object':
        return link;
      case 'string':
        return { href: link };
    }
    return null;
  }
});
define('ember-data/-private/system/normalize-model-name', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = normalizeModelName;


  // All modelNames are dasherized internally. Changing this function may
  // require changes to other normalization hooks (such as typeForRoot).

  /**
   This method normalizes a modelName into the format Ember Data uses
   internally.
  
    @method normalizeModelName
    @public
    @param {String} modelName
    @return {String} normalizedModelName
    @for DS
  */
  function normalizeModelName(modelName) {
    return _ember.default.String.dasherize(modelName);
  }
});
define('ember-data/-private/system/ordered-set', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = OrderedSet;


  var EmberOrderedSet = _ember.default.OrderedSet;
  var guidFor = _ember.default.guidFor;

  function OrderedSet() {
    this._super$constructor();
  }

  OrderedSet.create = function () {
    var Constructor = this;
    return new Constructor();
  };

  OrderedSet.prototype = Object.create(EmberOrderedSet.prototype);
  OrderedSet.prototype.constructor = OrderedSet;
  OrderedSet.prototype._super$constructor = EmberOrderedSet;

  OrderedSet.prototype.addWithIndex = function (obj, idx) {
    var guid = guidFor(obj);
    var presenceSet = this.presenceSet;
    var list = this.list;

    if (presenceSet[guid] === true) {
      return;
    }

    presenceSet[guid] = true;

    if (idx === undefined || idx === null) {
      list.push(obj);
    } else {
      list.splice(idx, 0, obj);
    }

    this.size += 1;

    return this;
  };
});
define('ember-data/-private/system/promise-proxies', ['exports', 'ember', 'ember-data/-private/debug'], function (exports, _ember, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PromiseManyArray = exports.PromiseObject = exports.PromiseArray = undefined;
  exports.promiseObject = promiseObject;
  exports.promiseArray = promiseArray;
  exports.proxyToContent = proxyToContent;
  exports.promiseManyArray = promiseManyArray;
  var get = _ember.default.get,
      Promise = _ember.default.RSVP.Promise;


  /**
    A `PromiseArray` is an object that acts like both an `Ember.Array`
    and a promise. When the promise is resolved the resulting value
    will be set to the `PromiseArray`'s `content` property. This makes
    it easy to create data bindings with the `PromiseArray` that will be
    updated when the promise resolves.
  
    For more information see the [Ember.PromiseProxyMixin
    documentation](/api/classes/Ember.PromiseProxyMixin.html).
  
    Example
  
    ```javascript
    let promiseArray = DS.PromiseArray.create({
      promise: $.getJSON('/some/remote/data.json')
    });
  
    promiseArray.get('length'); // 0
  
    promiseArray.then(function() {
      promiseArray.get('length'); // 100
    });
    ```
  
    @class PromiseArray
    @namespace DS
    @extends Ember.ArrayProxy
    @uses Ember.PromiseProxyMixin
  */
  var PromiseArray = exports.PromiseArray = _ember.default.ArrayProxy.extend(_ember.default.PromiseProxyMixin);

  /**
    A `PromiseObject` is an object that acts like both an `Ember.Object`
    and a promise. When the promise is resolved, then the resulting value
    will be set to the `PromiseObject`'s `content` property. This makes
    it easy to create data bindings with the `PromiseObject` that will
    be updated when the promise resolves.
  
    For more information see the [Ember.PromiseProxyMixin
    documentation](/api/classes/Ember.PromiseProxyMixin.html).
  
    Example
  
    ```javascript
    let promiseObject = DS.PromiseObject.create({
      promise: $.getJSON('/some/remote/data.json')
    });
  
    promiseObject.get('name'); // null
  
    promiseObject.then(function() {
      promiseObject.get('name'); // 'Tomster'
    });
    ```
  
    @class PromiseObject
    @namespace DS
    @extends Ember.ObjectProxy
    @uses Ember.PromiseProxyMixin
  */
  var PromiseObject = exports.PromiseObject = _ember.default.ObjectProxy.extend(_ember.default.PromiseProxyMixin);

  function promiseObject(promise, label) {
    return PromiseObject.create({
      promise: Promise.resolve(promise, label)
    });
  }

  function promiseArray(promise, label) {
    return PromiseArray.create({
      promise: Promise.resolve(promise, label)
    });
  }

  /**
    A PromiseManyArray is a PromiseArray that also proxies certain method calls
    to the underlying manyArray.
    Right now we proxy:
  
      * `reload()`
      * `createRecord()`
      * `on()`
      * `one()`
      * `trigger()`
      * `off()`
      * `has()`
  
    @class PromiseManyArray
    @namespace DS
    @extends Ember.ArrayProxy
  */

  function proxyToContent(method) {
    return function () {
      var _get;

      return (_get = get(this, 'content'))[method].apply(_get, arguments);
    };
  }

  var PromiseManyArray = exports.PromiseManyArray = PromiseArray.extend({
    reload: function reload() {
      (0, _debug.assert)('You are trying to reload an async manyArray before it has been created', get(this, 'content'));
      this.set('promise', this.get('content').reload());
      return this;
    },


    createRecord: proxyToContent('createRecord'),

    on: proxyToContent('on'),

    one: proxyToContent('one'),

    trigger: proxyToContent('trigger'),

    off: proxyToContent('off'),

    has: proxyToContent('has')
  });

  function promiseManyArray(promise, label) {
    return PromiseManyArray.create({
      promise: Promise.resolve(promise, label)
    });
  }
});
define('ember-data/-private/system/record-array-manager', ['exports', 'ember', 'ember-data/-private/system/record-arrays', 'ember-data/-private/debug'], function (exports, _ember, _recordArrays, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var get = _ember.default.get,
      MapWithDefault = _ember.default.MapWithDefault,
      emberRun = _ember.default.run;

  var RecordArrayManager = function () {
    function RecordArrayManager(options) {
      var _this = this;

      _classCallCheck(this, RecordArrayManager);

      this.store = options.store;
      this.isDestroying = false;
      this.isDestroyed = false;
      this.filteredRecordArrays = MapWithDefault.create({
        defaultValue: function defaultValue() {
          return [];
        }
      });

      this.liveRecordArrays = MapWithDefault.create({
        defaultValue: function defaultValue(modelName) {
          (0, _debug.assert)('liveRecordArrays.get expects modelName not modelClass as the param', typeof modelName === 'string');
          return _this.createRecordArray(modelName);
        }
      });

      this.changedRecords = [];
      this.loadedRecords = [];
      this._adapterPopulatedRecordArrays = [];
    }

    RecordArrayManager.prototype.recordDidChange = function recordDidChange(internalModel) {
      if (this.changedRecords.push(internalModel) !== 1) {
        return;
      }

      emberRun.schedule('actions', this, this.updateRecordArrays);
    };

    RecordArrayManager.prototype.recordArraysForRecord = function recordArraysForRecord(internalModel) {

      return internalModel._recordArrays;
    };

    RecordArrayManager.prototype.updateRecordArrays = function updateRecordArrays() {
      var updated = this.changedRecords;

      for (var i = 0, l = updated.length; i < l; i++) {
        var internalModel = updated[i];

        // During dematerialization we don't want to rematerialize the record.
        // recordWasDeleted can cause other records to rematerialize because it
        // removes the internal model from the array and Ember arrays will always
        // `objectAt(0)` and `objectAt(len -1)` to check whether `firstObject` or
        // `lastObject` have changed.  When this happens we don't want those
        // models to rematerialize their records.
        if (internalModel._isDematerializing || internalModel.isDestroyed || internalModel.currentState.stateName === 'root.deleted.saved') {
          this._recordWasDeleted(internalModel);
        } else {
          this._recordWasChanged(internalModel);
        }

        internalModel._isUpdatingRecordArrays = false;
      }

      updated.length = 0;
    };

    RecordArrayManager.prototype._recordWasDeleted = function _recordWasDeleted(internalModel) {
      var recordArrays = internalModel.__recordArrays;

      if (!recordArrays) {
        return;
      }

      recordArrays.forEach(function (array) {
        return array._removeInternalModels([internalModel]);
      });

      internalModel.__recordArrays = null;
    };

    RecordArrayManager.prototype._recordWasChanged = function _recordWasChanged(internalModel) {
      var _this2 = this;

      var modelName = internalModel.modelName;
      var recordArrays = this.filteredRecordArrays.get(modelName);
      var filter = void 0;
      recordArrays.forEach(function (array) {
        filter = get(array, 'filterFunction');
        _this2.updateFilterRecordArray(array, filter, modelName, internalModel);
      });
    };

    RecordArrayManager.prototype.recordWasLoaded = function recordWasLoaded(internalModel) {
      if (this.loadedRecords.push(internalModel) !== 1) {
        return;
      }

      emberRun.schedule('actions', this, this._flushLoadedRecords);
    };

    RecordArrayManager.prototype._flushLoadedRecords = function _flushLoadedRecords() {
      var internalModels = this.loadedRecords;

      for (var i = 0, l = internalModels.length; i < l; i++) {
        var internalModel = internalModels[i];
        var modelName = internalModel.modelName;

        var recordArrays = this.filteredRecordArrays.get(modelName);
        var filter = void 0;

        for (var j = 0, rL = recordArrays.length; j < rL; j++) {
          var array = recordArrays[j];
          filter = get(array, 'filterFunction');
          this.updateFilterRecordArray(array, filter, modelName, internalModel);
        }

        if (this.liveRecordArrays.has(modelName)) {
          var liveRecordArray = this.liveRecordArrays.get(modelName);
          this._addInternalModelToRecordArray(liveRecordArray, internalModel);
        }
      }

      this.loadedRecords.length = 0;
    };

    RecordArrayManager.prototype.updateFilterRecordArray = function updateFilterRecordArray(array, filter, modelName, internalModel) {
      var shouldBeInArray = filter(internalModel.getRecord());
      var recordArrays = this.recordArraysForRecord(internalModel);
      if (shouldBeInArray) {
        this._addInternalModelToRecordArray(array, internalModel);
      } else {
        recordArrays.delete(array);
        array._removeInternalModels([internalModel]);
      }
    };

    RecordArrayManager.prototype._addInternalModelToRecordArray = function _addInternalModelToRecordArray(array, internalModel) {
      var recordArrays = this.recordArraysForRecord(internalModel);
      if (!recordArrays.has(array)) {
        array._pushInternalModels([internalModel]);
        recordArrays.add(array);
      }
    };

    RecordArrayManager.prototype.syncLiveRecordArray = function syncLiveRecordArray(array, modelName) {
      (0, _debug.assert)('recordArrayManger.syncLiveRecordArray expects modelName not modelClass as the second param', typeof modelName === 'string');
      var hasNoPotentialDeletions = this.changedRecords.length === 0;
      var map = this.store._internalModelsFor(modelName);
      var hasNoInsertionsOrRemovals = map.length === array.length;

      /*
        Ideally the recordArrayManager has knowledge of the changes to be applied to
        liveRecordArrays, and is capable of strategically flushing those changes and applying
        small diffs if desired.  However, until we've refactored recordArrayManager, this dirty
        check prevents us from unnecessarily wiping out live record arrays returned by peekAll.
       */
      if (hasNoPotentialDeletions && hasNoInsertionsOrRemovals) {
        return;
      }

      this.populateLiveRecordArray(array, modelName);
    };

    RecordArrayManager.prototype.populateLiveRecordArray = function populateLiveRecordArray(array, modelName) {
      (0, _debug.assert)('recordArrayManger.populateLiveRecordArray expects modelName not modelClass as the second param', typeof modelName === 'string');

      var modelMap = this.store._internalModelsFor(modelName);
      var internalModels = modelMap.models;

      for (var i = 0; i < internalModels.length; i++) {
        var internalModel = internalModels[i];

        if (!internalModel.isDeleted() && !internalModel.isEmpty()) {
          this._addInternalModelToRecordArray(array, internalModel);
        }
      }
    };

    RecordArrayManager.prototype.updateFilter = function updateFilter(array, modelName, filter) {
      (0, _debug.assert)('recordArrayManger.updateFilter expects modelName not modelClass as the second param, received ' + modelName, typeof modelName === 'string');

      var modelMap = this.store._internalModelsFor(modelName);
      var internalModels = modelMap.models;

      for (var i = 0; i < internalModels.length; i++) {
        var internalModel = internalModels[i];

        if (!internalModel.isDeleted() && !internalModel.isEmpty()) {
          this.updateFilterRecordArray(array, filter, modelName, internalModel);
        }
      }
    };

    RecordArrayManager.prototype.liveRecordArrayFor = function liveRecordArrayFor(modelName) {
      (0, _debug.assert)('recordArrayManger.liveRecordArrayFor expects modelName not modelClass as the param', typeof modelName === 'string');

      return this.liveRecordArrays.get(modelName);
    };

    RecordArrayManager.prototype.createRecordArray = function createRecordArray(modelName) {
      (0, _debug.assert)('recordArrayManger.createRecordArray expects modelName not modelClass as the param', typeof modelName === 'string');

      return _recordArrays.RecordArray.create({
        modelName: modelName,
        content: _ember.default.A(),
        store: this.store,
        isLoaded: true,
        manager: this
      });
    };

    RecordArrayManager.prototype.createFilteredRecordArray = function createFilteredRecordArray(modelName, filter, query) {
      (0, _debug.assert)('recordArrayManger.createFilteredRecordArray expects modelName not modelClass as the first param, received ' + modelName, typeof modelName === 'string');

      var array = _recordArrays.FilteredRecordArray.create({
        query: query,
        modelName: modelName,
        content: _ember.default.A(),
        store: this.store,
        manager: this,
        filterFunction: filter
      });

      this.registerFilteredRecordArray(array, modelName, filter);

      return array;
    };

    RecordArrayManager.prototype.createAdapterPopulatedRecordArray = function createAdapterPopulatedRecordArray(modelName, query) {
      (0, _debug.assert)('recordArrayManger.createAdapterPopulatedRecordArray expects modelName not modelClass as the first param, received ' + modelName, typeof modelName === 'string');

      var array = _recordArrays.AdapterPopulatedRecordArray.create({
        modelName: modelName,
        query: query,
        content: _ember.default.A(),
        store: this.store,
        manager: this
      });

      this._adapterPopulatedRecordArrays.push(array);

      return array;
    };

    RecordArrayManager.prototype.registerFilteredRecordArray = function registerFilteredRecordArray(array, modelName, filter) {
      (0, _debug.assert)('recordArrayManger.registerFilteredRecordArray expects modelName not modelClass as the second param, received ' + modelName, typeof modelName === 'string');

      var recordArrays = this.filteredRecordArrays.get(modelName);
      recordArrays.push(array);

      this.updateFilter(array, modelName, filter);
    };

    RecordArrayManager.prototype.unregisterRecordArray = function unregisterRecordArray(array) {

      var modelName = array.modelName;

      // unregister filtered record array
      var recordArrays = this.filteredRecordArrays.get(modelName);
      var removedFromFiltered = remove(recordArrays, array);

      // remove from adapter populated record array
      var removedFromAdapterPopulated = remove(this._adapterPopulatedRecordArrays, array);

      if (!removedFromFiltered && !removedFromAdapterPopulated) {

        // unregister live record array
        if (this.liveRecordArrays.has(modelName)) {
          var liveRecordArrayForType = this.liveRecordArrayFor(modelName);
          if (array === liveRecordArrayForType) {
            this.liveRecordArrays.delete(modelName);
          }
        }
      }
    };

    RecordArrayManager.prototype.willDestroy = function willDestroy() {
      this.filteredRecordArrays.forEach(function (value) {
        return flatten(value).forEach(destroy);
      });
      this.liveRecordArrays.forEach(destroy);
      this._adapterPopulatedRecordArrays.forEach(destroy);
      this.isDestroyed = true;
    };

    RecordArrayManager.prototype.destroy = function destroy() {
      this.isDestroying = true;
      _ember.default.run.schedule('actions', this, this.willDestroy);
    };

    return RecordArrayManager;
  }();

  exports.default = RecordArrayManager;


  function destroy(entry) {
    entry.destroy();
  }

  function flatten(list) {
    var length = list.length;
    var result = [];

    for (var i = 0; i < length; i++) {
      result = result.concat(list[i]);
    }

    return result;
  }

  function remove(array, item) {
    var index = array.indexOf(item);

    if (index !== -1) {
      array.splice(index, 1);
      return true;
    }

    return false;
  }
});
define("ember-data/-private/system/record-arrays", ["exports", "ember-data/-private/system/record-arrays/record-array", "ember-data/-private/system/record-arrays/filtered-record-array", "ember-data/-private/system/record-arrays/adapter-populated-record-array"], function (exports, _recordArray, _filteredRecordArray, _adapterPopulatedRecordArray) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AdapterPopulatedRecordArray = exports.FilteredRecordArray = exports.RecordArray = undefined;
  exports.RecordArray = _recordArray.default;
  exports.FilteredRecordArray = _filteredRecordArray.default;
  exports.AdapterPopulatedRecordArray = _adapterPopulatedRecordArray.default;
});
define("ember-data/-private/system/record-arrays/adapter-populated-record-array", ["exports", "ember", "ember-data/-private/system/record-arrays/record-array", "ember-data/-private/system/clone-null"], function (exports, _ember, _recordArray, _cloneNull) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = _ember.default.get;
  exports.default = _recordArray.default.extend({
    init: function init() {
      // yes we are touching `this` before super, but ArrayProxy has a bug that requires this.
      this.set('content', this.get('content') || _ember.default.A());

      this._super.apply(this, arguments);
      this.query = this.query || null;
      this.links = null;
    },
    replace: function replace() {
      throw new Error("The result of a server query (on " + this.modelName + ") is immutable.");
    },
    _update: function _update() {
      var store = get(this, 'store');
      var query = get(this, 'query');

      return store._query(this.modelName, query, this);
    },


    /**
      @method _setInternalModels
      @param {Array} internalModels
      @param {Object} payload normalized payload
      @private
    */
    _setInternalModels: function _setInternalModels(internalModels, payload) {

      // TODO: initial load should not cause change events at all, only
      // subsequent. This requires changing the public api of adapter.query, but
      // hopefully we can do that soon.
      this.get('content').setObjects(internalModels);

      this.setProperties({
        isLoaded: true,
        isUpdating: false,
        meta: (0, _cloneNull.default)(payload.meta),
        links: (0, _cloneNull.default)(payload.links)
      });

      for (var i = 0, l = internalModels.length; i < l; i++) {
        var internalModel = internalModels[i];
        this.manager.recordArraysForRecord(internalModel).add(this);
      }

      // TODO: should triggering didLoad event be the last action of the runLoop?
      _ember.default.run.once(this, 'trigger', 'didLoad');
    }
  });
});
define('ember-data/-private/system/record-arrays/filtered-record-array', ['exports', 'ember', 'ember-data/-private/system/record-arrays/record-array'], function (exports, _ember, _recordArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = _ember.default.get;
  exports.default = _recordArray.default.extend({
    init: function init() {
      this._super.apply(this, arguments);

      this.set('filterFunction', this.get('filterFunction') || null);
      this.isLoaded = true;
    },

    /**
      The filterFunction is a function used to test records from the store to
      determine if they should be part of the record array.
       Example
       ```javascript
      var allPeople = store.peekAll('person');
      allPeople.mapBy('name'); // ["Tom Dale", "Yehuda Katz", "Trek Glowacki"]
       var people = store.filter('person', function(person) {
        if (person.get('name').match(/Katz$/)) { return true; }
      });
      people.mapBy('name'); // ["Yehuda Katz"]
       var notKatzFilter = function(person) {
        return !person.get('name').match(/Katz$/);
      };
      people.set('filterFunction', notKatzFilter);
      people.mapBy('name'); // ["Tom Dale", "Trek Glowacki"]
      ```
       @method filterFunction
      @param {DS.Model} record
      @return {Boolean} `true` if the record should be in the array
    */

    replace: function replace() {
      throw new Error('The result of a client-side filter (on ' + this.modelName + ') is immutable.');
    },


    /**
      @method updateFilter
      @private
    */
    _updateFilter: function _updateFilter() {
      if (get(this, 'isDestroying') || get(this, 'isDestroyed')) {
        return;
      }
      get(this, 'manager').updateFilter(this, this.modelName, get(this, 'filterFunction'));
    },


    updateFilter: _ember.default.observer('filterFunction', function () {
      _ember.default.run.once(this, this._updateFilter);
    })
  });
});
define("ember-data/-private/system/record-arrays/record-array", ["exports", "ember", "ember-data/-private/system/promise-proxies", "ember-data/-private/system/snapshot-record-array"], function (exports, _ember, _promiseProxies, _snapshotRecordArray) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      get = _ember.default.get,
      set = _ember.default.set,
      Promise = _ember.default.RSVP.Promise;
  exports.default = _ember.default.ArrayProxy.extend(_ember.default.Evented, {
    init: function init() {
      this._super.apply(this, arguments);

      /**
        The array of client ids backing the record array. When a
        record is requested from the record array, the record
        for the client id at the same index is materialized, if
        necessary, by the store.
         @property content
        @private
        @type Ember.Array
        */
      this.set('content', this.content || null);

      /**
      The flag to signal a `RecordArray` is finished loading data.
       Example
       ```javascript
      var people = store.peekAll('person');
      people.get('isLoaded'); // true
      ```
       @property isLoaded
      @type Boolean
      */
      this.isLoaded = this.isLoaded || false;
      /**
      The flag to signal a `RecordArray` is currently loading data.
      Example
      ```javascript
      var people = store.peekAll('person');
      people.get('isUpdating'); // false
      people.update();
      people.get('isUpdating'); // true
      ```
      @property isUpdating
      @type Boolean
      */
      this.isUpdating = false;

      /**
      The store that created this record array.
      @property store
      @private
      @type DS.Store
      */
      this.store = this.store || null;
      this._updatingPromise = null;
    },
    replace: function replace() {
      throw new Error("The result of a server query (for all " + this.modelName + " types) is immutable. To modify contents, use toArray()");
    },


    /**
     The modelClass represented by this record array.
      @property type
     @type DS.Model
     */
    type: computed('modelName', function () {
      if (!this.modelName) {
        return null;
      }
      return this.store._modelFor(this.modelName);
    }).readOnly(),

    /**
      Retrieves an object from the content by index.
       @method objectAtContent
      @private
      @param {Number} index
      @return {DS.Model} record
    */
    objectAtContent: function objectAtContent(index) {
      var internalModel = get(this, 'content').objectAt(index);
      return internalModel && internalModel.getRecord();
    },


    /**
      Used to get the latest version of all of the records in this array
      from the adapter.
       Example
       ```javascript
      var people = store.peekAll('person');
      people.get('isUpdating'); // false
       people.update().then(function() {
        people.get('isUpdating'); // false
      });
       people.get('isUpdating'); // true
      ```
       @method update
    */
    update: function update() {
      var _this = this;

      if (get(this, 'isUpdating')) {
        return this._updatingPromise;
      }

      this.set('isUpdating', true);

      var updatingPromise = this._update().finally(function () {
        _this._updatingPromise = null;
        if (_this.get('isDestroying') || _this.get('isDestroyed')) {
          return;
        }
        _this.set('isUpdating', false);
      });

      this._updatingPromise = updatingPromise;

      return updatingPromise;
    },


    /*
      Update this RecordArray and return a promise which resolves once the update
      is finished.
     */
    _update: function _update() {
      return this.store.findAll(this.modelName, { reload: true });
    },


    /**
      Adds an internal model to the `RecordArray` without duplicates
       @method addInternalModel
      @private
      @param {InternalModel} internalModel
    */
    _pushInternalModels: function _pushInternalModels(internalModels) {
      // pushObjects because the internalModels._recordArrays set was already
      // consulted for inclusion, so addObject and its on .contains call is not
      // required.
      get(this, 'content').pushObjects(internalModels);
    },


    /**
      Removes an internalModel to the `RecordArray`.
       @method removeInternalModel
      @private
      @param {InternalModel} internalModel
    */
    _removeInternalModels: function _removeInternalModels(internalModels) {
      get(this, 'content').removeObjects(internalModels);
    },


    /**
      Saves all of the records in the `RecordArray`.
       Example
       ```javascript
      var messages = store.peekAll('message');
      messages.forEach(function(message) {
        message.set('hasBeenSeen', true);
      });
      messages.save();
      ```
       @method save
      @return {DS.PromiseArray} promise
    */
    save: function save() {
      var _this2 = this;

      var promiseLabel = "DS: RecordArray#save " + this.modelName;
      var promise = Promise.all(this.invoke('save'), promiseLabel).then(function () {
        return _this2;
      }, null, 'DS: RecordArray#save return RecordArray');

      return _promiseProxies.PromiseArray.create({ promise: promise });
    },
    _dissociateFromOwnRecords: function _dissociateFromOwnRecords() {
      var _this3 = this;

      this.get('content').forEach(function (internalModel) {
        var recordArrays = internalModel.__recordArrays;

        if (recordArrays) {
          recordArrays.delete(_this3);
        }
      });
    },


    /**
      @method _unregisterFromManager
      @private
    */
    _unregisterFromManager: function _unregisterFromManager() {
      this.manager.unregisterRecordArray(this);
    },
    willDestroy: function willDestroy() {
      this._unregisterFromManager();
      this._dissociateFromOwnRecords();
      // TODO: we should not do work during destroy:
      //   * when objects are destroyed, they should simply be left to do
      //   * if logic errors do to this, that logic needs to be more careful during
      //    teardown (ember provides isDestroying/isDestroyed) for this reason
      //   * the exception being: if an dominator has a reference to this object,
      //     and must be informed to release e.g. e.g. removing itself from th
      //     recordArrayMananger
      set(this, 'content', null);
      set(this, 'length', 0);
      this._super.apply(this, arguments);
    },


    /*
      @method _createSnapshot
      @private
    */
    _createSnapshot: function _createSnapshot(options) {
      // this is private for users, but public for ember-data internals
      return new _snapshotRecordArray.default(this, this.get('meta'), options);
    },


    /*
      @method _takeSnapshot
      @private
    */
    _takeSnapshot: function _takeSnapshot() {
      return get(this, 'content').map(function (internalModel) {
        return internalModel.createSnapshot();
      });
    }
  });
});
define('ember-data/-private/system/references', ['exports', 'ember-data/-private/system/references/record', 'ember-data/-private/system/references/belongs-to', 'ember-data/-private/system/references/has-many'], function (exports, _record, _belongsTo, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HasManyReference = exports.BelongsToReference = exports.RecordReference = undefined;
  exports.RecordReference = _record.default;
  exports.BelongsToReference = _belongsTo.default;
  exports.HasManyReference = _hasMany.default;
});
define('ember-data/-private/system/references/belongs-to', ['exports', 'ember-data/model', 'ember', 'ember-data/-private/system/references/reference', 'ember-data/-private/features', 'ember-data/-private/debug'], function (exports, _model, _ember, _reference, _features, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
     A BelongsToReference is a low level API that allows users and
     addon author to perform meta-operations on a belongs-to
     relationship.
  
     @class BelongsToReference
     @namespace DS
     @extends DS.Reference
  */
  var BelongsToReference = function BelongsToReference(store, parentInternalModel, belongsToRelationship) {
    this._super$constructor(store, parentInternalModel);
    this.belongsToRelationship = belongsToRelationship;
    this.type = belongsToRelationship.relationshipMeta.type;
    this.parent = parentInternalModel.recordReference;

    // TODO inverse
  };

  BelongsToReference.prototype = Object.create(_reference.default.prototype);
  BelongsToReference.prototype.constructor = BelongsToReference;
  BelongsToReference.prototype._super$constructor = _reference.default;

  /**
     This returns a string that represents how the reference will be
     looked up when it is loaded. If the relationship has a link it will
     use the "link" otherwise it defaults to "id".
  
     Example
  
     ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        type: 'blog',
        id: 1,
        relationships: {
          user: {
            data: { type: 'user', id: 1 }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      // get the identifier of the reference
      if (userRef.remoteType() === "id") {
        let id = userRef.id();
      } else if (userRef.remoteType() === "link") {
        let link = userRef.link();
      }
      ```
  
     @method remoteType
     @return {String} The name of the remote type. This should either be "link" or "id"
  */
  BelongsToReference.prototype.remoteType = function () {
    if (this.belongsToRelationship.link) {
      return "link";
    }

    return "id";
  };

  /**
     The `id` of the record that this reference refers to. Together, the
     `type()` and `id()` methods form a composite key for the identity
     map. This can be used to access the id of an async relationship
     without triggering a fetch that would normally happen if you
     attempted to use `record.get('relationship.id')`.
  
     Example
  
     ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              data: { type: 'user', id: 1 }
            }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      // get the identifier of the reference
      if (userRef.remoteType() === "id") {
        let id = userRef.id();
      }
      ```
  
     @method id
     @return {String} The id of the record in this belongsTo relationship.
  */
  BelongsToReference.prototype.id = function () {
    var inverseRecord = this.belongsToRelationship.inverseRecord;
    return inverseRecord && inverseRecord.id;
  };

  /**
     The link Ember Data will use to fetch or reload this belongs-to
     relationship.
  
     Example
  
     ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              links: {
                related: '/articles/1/author'
              }
            }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      // get the identifier of the reference
      if (userRef.remoteType() === "link") {
        let link = userRef.link();
      }
      ```
  
     @method link
     @return {String} The link Ember Data will use to fetch or reload this belongs-to relationship.
  */
  BelongsToReference.prototype.link = function () {
    return this.belongsToRelationship.link;
  };

  /**
     The meta data for the belongs-to relationship.
  
     Example
  
     ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              links: {
                related: {
                  href: '/articles/1/author',
                  meta: {
                    lastUpdated: 1458014400000
                  }
                }
              }
            }
          }
        }
      });
  
      let userRef = blog.belongsTo('user');
  
      userRef.meta() // { lastUpdated: 1458014400000 }
      ```
  
     @method meta
     @return {Object} The meta information for the belongs-oo relationship.
  */
  BelongsToReference.prototype.meta = function () {
    return this.belongsToRelationship.meta;
  };

  /**
     `push` can be used to update the data in the relationship and Ember
     Data will treat the new data as the conanical value of this
     relationship on the backend.
  
     Example
  
      ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              data: { type: 'user', id: 1 }
            }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      // provide data for reference
      userRef.push({
        data: {
          type: 'user',
          id: 1,
          attributes: {
            username: "@user"
          }
        }
      }).then(function(user) {
        userRef.value() === user;
      });
      ```
  
     @method push
     @param {Object|Promise} objectOrPromise a promise that resolves to a JSONAPI document object describing the new value of this relationship.
     @return {Promise<record>} A promise that resolves with the new value in this belongs-to relationship.
  */
  BelongsToReference.prototype.push = function (objectOrPromise) {
    var _this = this;

    return _ember.default.RSVP.resolve(objectOrPromise).then(function (data) {
      var record = void 0;

      if (data instanceof _model.default) {
        if ((0, _features.default)('ds-overhaul-references')) {
          (0, _debug.deprecate)("BelongsToReference#push(DS.Model) is deprecated. Update relationship via `model.set('relationshipName', value)` instead.", false, {
            id: 'ds.references.belongs-to.push-record',
            until: '3.0'
          });
        }
        record = data;
      } else {
        record = _this.store.push(data);
      }

      (0, _debug.assertPolymorphicType)(_this.internalModel, _this.belongsToRelationship.relationshipMeta, record._internalModel);

      _this.belongsToRelationship.setCanonicalRecord(record._internalModel);

      return record;
    });
  };

  /**
     `value()` synchronously returns the current value of the belongs-to
     relationship. Unlike `record.get('relationshipName')`, calling
     `value()` on a reference does not trigger a fetch if the async
     relationship is not yet loaded. If the relationship is not loaded
     it will always return `null`.
  
     Example
  
      ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              data: { type: 'user', id: 1 }
            }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      userRef.value(); // null
  
      // provide data for reference
      userRef.push({
        data: {
          type: 'user',
          id: 1,
          attributes: {
            username: "@user"
          }
        }
      }).then(function(user) {
        userRef.value(); // user
      });
      ```
  
     @method value
     @param {Object|Promise} objectOrPromise a promise that resolves to a JSONAPI document object describing the new value of this relationship.
     @return {DS.Model} the record in this relationship
  */
  BelongsToReference.prototype.value = function () {
    var inverseRecord = this.belongsToRelationship.inverseRecord;

    if (inverseRecord && inverseRecord.isLoaded()) {
      return inverseRecord.getRecord();
    }

    return null;
  };

  /**
     Loads a record in a belongs to relationship if it is not already
     loaded. If the relationship is already loaded this method does not
     trigger a new load.
  
     Example
  
      ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              data: { type: 'user', id: 1 }
            }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      userRef.value(); // null
  
      userRef.load().then(function(user) {
        userRef.value() === user
      });
  
     @method load
     @return {Promise} a promise that resolves with the record in this belongs-to relationship.
  */
  BelongsToReference.prototype.load = function () {
    var _this2 = this;

    if (this.remoteType() === "id") {
      return this.belongsToRelationship.getRecord();
    }

    if (this.remoteType() === "link") {
      return this.belongsToRelationship.findLink().then(function (internalModel) {
        return _this2.value();
      });
    }
  };

  /**
     Triggers a reload of the value in this relationship. If the
     remoteType is `"link"` Ember Data will use the relationship link to
     reload the relationship. Otherwise it will reload the record by its
     id.
  
     Example
  
      ```javascript
      // models/blog.js
      export default DS.Model.extend({
        user: DS.belongsTo({ async: true })
      });
  
      let blog = store.push({
        data: {
          type: 'blog',
          id: 1,
          relationships: {
            user: {
              data: { type: 'user', id: 1 }
            }
          }
        }
      });
      let userRef = blog.belongsTo('user');
  
      userRef.reload().then(function(user) {
        userRef.value() === user
      });
  
     @method reload
     @return {Promise} a promise that resolves with the record in this belongs-to relationship after the reload has completed.
  */
  BelongsToReference.prototype.reload = function () {
    var _this3 = this;

    return this.belongsToRelationship.reload().then(function (internalModel) {
      return _this3.value();
    });
  };

  exports.default = BelongsToReference;
});
define('ember-data/-private/system/references/has-many', ['exports', 'ember', 'ember-data/-private/system/references/reference', 'ember-data/-private/debug', 'ember-data/-private/features'], function (exports, _ember, _reference, _debug, _features) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var resolve = _ember.default.RSVP.resolve,
      get = _ember.default.get;


  /**
     A HasManyReference is a low level API that allows users and addon
     author to perform meta-operations on a has-many relationship.
  
     @class HasManyReference
     @namespace DS
  */
  var HasManyReference = function HasManyReference(store, parentInternalModel, hasManyRelationship) {
    this._super$constructor(store, parentInternalModel);
    this.hasManyRelationship = hasManyRelationship;
    this.type = hasManyRelationship.relationshipMeta.type;
    this.parent = parentInternalModel.recordReference;

    // TODO inverse
  };

  HasManyReference.prototype = Object.create(_reference.default.prototype);
  HasManyReference.prototype.constructor = HasManyReference;
  HasManyReference.prototype._super$constructor = _reference.default;

  /**
     This returns a string that represents how the reference will be
     looked up when it is loaded. If the relationship has a link it will
     use the "link" otherwise it defaults to "id".
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             data: [{ type: 'comment', id: 1 }]
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     // get the identifier of the reference
     if (commentsRef.remoteType() === "ids") {
       let ids = commentsRef.ids();
     } else if (commentsRef.remoteType() === "link") {
       let link = commentsRef.link();
     }
     ```
  
     @method remoteType
     @return {String} The name of the remote type. This should either be "link" or "ids"
  */
  HasManyReference.prototype.remoteType = function () {
    if (this.hasManyRelationship.link) {
      return "link";
    }

    return "ids";
  };

  /**
     The link Ember Data will use to fetch or reload this has-many
     relationship.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             links: {
               related: '/posts/1/comments'
             }
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     commentsRef.link(); // '/posts/1/comments'
     ```
  
     @method link
     @return {String} The link Ember Data will use to fetch or reload this has-many relationship.
  */
  HasManyReference.prototype.link = function () {
    return this.hasManyRelationship.link;
  };

  /**
     `ids()` returns an array of the record ids in this relationship.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             data: [{ type: 'comment', id: 1 }]
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     commentsRef.ids(); // ['1']
     ```
  
     @method remoteType
     @return {Array} The ids in this has-many relationship
  */
  HasManyReference.prototype.ids = function () {
    var members = this.hasManyRelationship.members.toArray();

    return members.map(function (internalModel) {
      return internalModel.id;
    });
  };

  /**
     The link Ember Data will use to fetch or reload this has-many
     relationship.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             links: {
               related: {
                 href: '/posts/1/comments',
                 meta: {
                   count: 10
                 }
               }
             }
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     commentsRef.meta(); // { count: 10 }
     ```
  
     @method meta
     @return {Object} The meta information for the has-many relationship.
  */
  HasManyReference.prototype.meta = function () {
    return this.hasManyRelationship.meta;
  };

  /**
     `push` can be used to update the data in the relationship and Ember
     Data will treat the new data as the canonical value of this
     relationship on the backend.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             data: [{ type: 'comment', id: 1 }]
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     commentsRef.ids(); // ['1']
  
     commentsRef.push([
       [{ type: 'comment', id: 2 }],
       [{ type: 'comment', id: 3 }],
     ])
  
     commentsRef.ids(); // ['2', '3']
     ```
  
     @method push
     @param {Array|Promise} objectOrPromise a promise that resolves to a JSONAPI document object describing the new value of this relationship.
     @return {DS.ManyArray}
  */
  HasManyReference.prototype.push = function (objectOrPromise) {
    var _this = this;

    return resolve(objectOrPromise).then(function (payload) {
      var array = payload;

      if ((0, _features.default)("ds-overhaul-references")) {
        (0, _debug.deprecate)("HasManyReference#push(array) is deprecated. Push a JSON-API document instead.", !Array.isArray(payload), {
          id: 'ds.references.has-many.push-array',
          until: '3.0'
        });
      }

      var useLegacyArrayPush = true;
      if ((typeof payload === 'undefined' ? 'undefined' : _typeof(payload)) === "object" && payload.data) {
        array = payload.data;
        useLegacyArrayPush = array.length && array[0].data;

        if ((0, _features.default)('ds-overhaul-references')) {
          (0, _debug.deprecate)("HasManyReference#push() expects a valid JSON-API document.", !useLegacyArrayPush, {
            id: 'ds.references.has-many.push-invalid-json-api',
            until: '3.0'
          });
        }
      }

      if (!(0, _features.default)('ds-overhaul-references')) {
        useLegacyArrayPush = true;
      }

      var internalModels = void 0;
      if (useLegacyArrayPush) {
        internalModels = array.map(function (obj) {
          var record = _this.store.push(obj);

          (0, _debug.runInDebug)(function () {
            var relationshipMeta = _this.hasManyRelationship.relationshipMeta;
            (0, _debug.assertPolymorphicType)(_this.internalModel, relationshipMeta, record._internalModel);
          });

          return record._internalModel;
        });
      } else {
        var records = _this.store.push(payload);
        internalModels = _ember.default.A(records).mapBy('_internalModel');

        (0, _debug.runInDebug)(function () {
          internalModels.forEach(function (internalModel) {
            var relationshipMeta = _this.hasManyRelationship.relationshipMeta;
            (0, _debug.assertPolymorphicType)(_this.internalModel, relationshipMeta, internalModel);
          });
        });
      }

      _this.hasManyRelationship.computeChanges(internalModels);

      return _this.hasManyRelationship.manyArray;
    });
  };

  HasManyReference.prototype._isLoaded = function () {
    var hasData = get(this.hasManyRelationship, 'hasData');
    if (!hasData) {
      return false;
    }

    var members = this.hasManyRelationship.members.toArray();

    return members.every(function (internalModel) {
      return internalModel.isLoaded() === true;
    });
  };

  /**
     `value()` sycronously returns the current value of the has-many
      relationship. Unlike `record.get('relationshipName')`, calling
      `value()` on a reference does not trigger a fetch if the async
      relationship is not yet loaded. If the relationship is not loaded
      it will always return `null`.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             data: [{ type: 'comment', id: 1 }]
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     post.get('comments').then(function(comments) {
       commentsRef.value() === comments
     })
     ```
  
     @method value
     @return {DS.ManyArray}
  */
  HasManyReference.prototype.value = function () {
    if (this._isLoaded()) {
      return this.hasManyRelationship.manyArray;
    }

    return null;
  };

  /**
     Loads the relationship if it is not already loaded.  If the
     relationship is already loaded this method does not trigger a new
     load.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             data: [{ type: 'comment', id: 1 }]
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     commentsRef.load().then(function(comments) {
       //...
     });
     ```
  
     @method load
     @return {Promise} a promise that resolves with the ManyArray in
     this has-many relationship.
  */
  HasManyReference.prototype.load = function () {
    if (!this._isLoaded()) {
      return this.hasManyRelationship.getRecords();
    }

    return resolve(this.hasManyRelationship.manyArray);
  };

  /**
     Reloads this has-many relationship.
  
     Example
  
     ```app/models/post.js
     export default DS.Model.extend({
       comments: DS.hasMany({ async: true })
     });
     ```
  
     ```javascript
     let post = store.push({
       data: {
         type: 'post',
         id: 1,
         relationships: {
           comments: {
             data: [{ type: 'comment', id: 1 }]
           }
         }
       }
     });
  
     let commentsRef = post.hasMany('comments');
  
     commentsRef.reload().then(function(comments) {
       //...
     });
     ```
  
     @method reload
     @return {Promise} a promise that resolves with the ManyArray in this has-many relationship.
  */
  HasManyReference.prototype.reload = function () {
    return this.hasManyRelationship.reload();
  };

  exports.default = HasManyReference;
});
define('ember-data/-private/system/references/record', ['exports', 'ember', 'ember-data/-private/system/references/reference'], function (exports, _ember, _reference) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
     An RecordReference is a low level API that allows users and
     addon author to perform meta-operations on a record.
  
     @class RecordReference
     @namespace DS
  */
  var RecordReference = function RecordReference(store, internalModel) {
    this._super$constructor(store, internalModel);
    this.type = internalModel.modelName;
    this._id = internalModel.id;
  };

  RecordReference.prototype = Object.create(_reference.default.prototype);
  RecordReference.prototype.constructor = RecordReference;
  RecordReference.prototype._super$constructor = _reference.default;

  /**
     The `id` of the record that this reference refers to.
  
     Together, the `type` and `id` properties form a composite key for
     the identity map.
  
     Example
  
     ```javascript
     let userRef = store.getReference('user', 1);
  
     userRef.id(); // '1'
     ```
  
     @method id
     @return {String} The id of the record.
  */
  RecordReference.prototype.id = function () {
    return this._id;
  };

  /**
     How the reference will be looked up when it is loaded: Currently
     this always return `identity` to signifying that a record will be
     loaded by the `type` and `id`.
  
     Example
  
     ```javascript
     const userRef = store.getReference('user', 1);
  
     userRef.remoteType(); // 'identity'
     ```
  
     @method remoteType
     @return {String} 'identity'
  */
  RecordReference.prototype.remoteType = function () {
    return 'identity';
  };

  /**
    This API allows you to provide a reference with new data. The
    simplest usage of this API is similar to `store.push`: you provide a
    normalized hash of data and the object represented by the reference
    will update.
  
    If you pass a promise to `push`, Ember Data will not ask the adapter
    for the data if another attempt to fetch it is made in the
    interim. When the promise resolves, the underlying object is updated
    with the new data, and the promise returned by *this function* is resolved
    with that object.
  
    For example, `recordReference.push(promise)` will be resolved with a
    record.
  
     Example
  
     ```javascript
     let userRef = store.getReference('user', 1);
  
     // provide data for reference
     userRef.push({ data: { id: 1, username: "@user" }}).then(function(user) {
       userRef.value() === user;
     });
     ```
  
    @method push
    @param {Promise|Object}
    @return Promise<record> a promise for the value (record or relationship)
  */
  RecordReference.prototype.push = function (objectOrPromise) {
    var _this = this;

    return _ember.default.RSVP.resolve(objectOrPromise).then(function (data) {
      return _this.store.push(data);
    });
  };

  /**
    If the entity referred to by the reference is already loaded, it is
    present as `reference.value`. Otherwise the value returned by this function
    is `null`.
  
     Example
  
     ```javascript
     let userRef = store.getReference('user', 1);
  
     userRef.value(); // user
     ```
  
     @method value
     @return {DS.Model} the record for this RecordReference
  */
  RecordReference.prototype.value = function () {
    return this.internalModel.record;
  };

  /**
     Triggers a fetch for the backing entity based on its `remoteType`
     (see `remoteType` definitions per reference type).
  
     Example
  
     ```javascript
     let userRef = store.getReference('user', 1);
  
     // load user (via store.find)
     userRef.load().then(...)
     ```
  
     @method load
     @return {Promise<record>} the record for this RecordReference
  */
  RecordReference.prototype.load = function () {
    return this.store.findRecord(this.type, this._id);
  };

  /**
     Reloads the record if it is already loaded. If the record is not
     loaded it will load the record via `store.findRecord`
  
     Example
  
     ```javascript
     let userRef = store.getReference('user', 1);
  
     // or trigger a reload
     userRef.reload().then(...)
     ```
  
     @method reload
     @return {Promise<record>} the record for this RecordReference
  */
  RecordReference.prototype.reload = function () {
    var record = this.value();
    if (record) {
      return record.reload();
    }

    return this.load();
  };

  exports.default = RecordReference;
});
define("ember-data/-private/system/references/reference", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Reference = function Reference(store, internalModel) {
    this.store = store;
    this.internalModel = internalModel;
  };

  Reference.prototype = {
    constructor: Reference
  };

  exports.default = Reference;
});
define('ember-data/-private/system/relationship-meta', ['exports', 'ember-inflector', 'ember-data/-private/system/normalize-model-name'], function (exports, _emberInflector, _normalizeModelName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.typeForRelationshipMeta = typeForRelationshipMeta;
  exports.relationshipFromMeta = relationshipFromMeta;
  function typeForRelationshipMeta(meta) {
    var modelName = void 0;

    modelName = meta.type || meta.key;
    if (meta.kind === 'hasMany') {
      modelName = (0, _emberInflector.singularize)((0, _normalizeModelName.default)(modelName));
    }
    return modelName;
  }

  function relationshipFromMeta(meta) {
    return {
      key: meta.key,
      kind: meta.kind,
      type: typeForRelationshipMeta(meta),
      options: meta.options,
      name: meta.name,
      parentType: meta.parentType,
      isRelationship: true
    };
  }
});
define("ember-data/-private/system/relationships/belongs-to", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/normalize-model-name"], function (exports, _ember, _debug, _normalizeModelName) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = belongsTo;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
    `DS.belongsTo` is used to define One-To-One and One-To-Many
    relationships on a [DS.Model](/api/data/classes/DS.Model.html).
  
  
    `DS.belongsTo` takes an optional hash as a second parameter, currently
    supported options are:
  
    - `async`: A boolean value used to explicitly declare this to be an async relationship.
    - `inverse`: A string used to identify the inverse property on a
      related model in a One-To-Many relationship. See [Explicit Inverses](#toc_explicit-inverses)
  
    #### One-To-One
    To declare a one-to-one relationship between two models, use
    `DS.belongsTo`:
  
    ```app/models/user.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      profile: DS.belongsTo('profile')
    });
    ```
  
    ```app/models/profile.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      user: DS.belongsTo('user')
    });
    ```
  
    #### One-To-Many
    To declare a one-to-many relationship between two models, use
    `DS.belongsTo` in combination with `DS.hasMany`, like this:
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      comments: DS.hasMany('comment')
    });
    ```
  
    ```app/models/comment.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      post: DS.belongsTo('post')
    });
    ```
  
    You can avoid passing a string as the first parameter. In that case Ember Data
    will infer the type from the key name.
  
    ```app/models/comment.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      post: DS.belongsTo()
    });
    ```
  
    will lookup for a Post type.
  
    @namespace
    @method belongsTo
    @for DS
    @param {String} modelName (optional) type of the relationship
    @param {Object} options (optional) a hash of options
    @return {Ember.computed} relationship
  */
  function belongsTo(modelName, options) {
    var opts = void 0,
        userEnteredModelName = void 0;
    if ((typeof modelName === "undefined" ? "undefined" : _typeof(modelName)) === 'object') {
      opts = modelName;
      userEnteredModelName = undefined;
    } else {
      opts = options;
      userEnteredModelName = modelName;
    }

    if (typeof userEnteredModelName === 'string') {
      userEnteredModelName = (0, _normalizeModelName.default)(userEnteredModelName);
    }

    (0, _debug.assert)("The first argument to DS.belongsTo must be a string representing a model type key, not an instance of " + _ember.default.inspect(userEnteredModelName) + ". E.g., to define a relation to the Person model, use DS.belongsTo('person')", typeof userEnteredModelName === 'string' || typeof userEnteredModelName === 'undefined');

    opts = opts || {};

    var meta = {
      type: userEnteredModelName,
      isRelationship: true,
      options: opts,
      kind: 'belongsTo',
      name: 'Belongs To',
      key: null
    };

    return _ember.default.computed({
      get: function get(key) {
        if (opts.hasOwnProperty('serialize')) {
          (0, _debug.warn)("You provided a serialize option on the \"" + key + "\" property in the \"" + this._internalModel.modelName + "\" class, this belongs in the serializer. See DS.Serializer and it's implementations http://emberjs.com/api/data/classes/DS.Serializer.html", false, {
            id: 'ds.model.serialize-option-in-belongs-to'
          });
        }

        if (opts.hasOwnProperty('embedded')) {
          (0, _debug.warn)("You provided an embedded option on the \"" + key + "\" property in the \"" + this._internalModel.modelName + "\" class, this belongs in the serializer. See DS.EmbeddedRecordsMixin http://emberjs.com/api/data/classes/DS.EmbeddedRecordsMixin.html", false, {
            id: 'ds.model.embedded-option-in-belongs-to'
          });
        }

        return this._internalModel._relationships.get(key).getRecord();
      },
      set: function set(key, value) {
        if (value === undefined) {
          value = null;
        }
        if (value && value.then) {
          this._internalModel._relationships.get(key).setRecordPromise(value);
        } else if (value) {
          this._internalModel._relationships.get(key).setRecord(value._internalModel);
        } else {
          this._internalModel._relationships.get(key).setRecord(value);
        }

        return this._internalModel._relationships.get(key).getRecord();
      }
    }).meta(meta);
  }
});
define("ember-data/-private/system/relationships/ext", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/relationship-meta"], function (exports, _ember, _debug, _relationshipMeta) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.relationshipsByNameDescriptor = exports.relatedTypesDescriptor = exports.relationshipsDescriptor = undefined;


  var Map = _ember.default.Map;
  var MapWithDefault = _ember.default.MapWithDefault;

  var relationshipsDescriptor = exports.relationshipsDescriptor = _ember.default.computed(function () {
    if (_ember.default.testing === true && relationshipsDescriptor._cacheable === true) {
      relationshipsDescriptor._cacheable = false;
    }

    var map = new MapWithDefault({
      defaultValue: function defaultValue() {
        return [];
      }
    });

    // Loop through each computed property on the class
    this.eachComputedProperty(function (name, meta) {
      // If the computed property is a relationship, add
      // it to the map.
      if (meta.isRelationship) {
        meta.key = name;
        var relationshipsForType = map.get((0, _relationshipMeta.typeForRelationshipMeta)(meta));

        relationshipsForType.push({
          name: name,
          kind: meta.kind
        });
      }
    });

    return map;
  }).readOnly();

  var relatedTypesDescriptor = exports.relatedTypesDescriptor = _ember.default.computed(function () {
    var _this = this;

    if (_ember.default.testing === true && relatedTypesDescriptor._cacheable === true) {
      relatedTypesDescriptor._cacheable = false;
    }

    var modelName = void 0;
    var types = _ember.default.A();

    // Loop through each computed property on the class,
    // and create an array of the unique types involved
    // in relationships
    this.eachComputedProperty(function (name, meta) {
      if (meta.isRelationship) {
        meta.key = name;
        modelName = (0, _relationshipMeta.typeForRelationshipMeta)(meta);

        (0, _debug.assert)("You specified a hasMany (" + meta.type + ") on " + meta.parentType + " but " + meta.type + " was not found.", modelName);

        if (!types.includes(modelName)) {
          (0, _debug.assert)("Trying to sideload " + name + " on " + _this.toString() + " but the type doesn't exist.", !!modelName);
          types.push(modelName);
        }
      }
    });

    return types;
  }).readOnly();

  var relationshipsByNameDescriptor = exports.relationshipsByNameDescriptor = _ember.default.computed(function () {
    if (_ember.default.testing === true && relationshipsByNameDescriptor._cacheable === true) {
      relationshipsByNameDescriptor._cacheable = false;
    }

    var map = Map.create();

    this.eachComputedProperty(function (name, meta) {
      if (meta.isRelationship) {
        meta.key = name;
        var relationship = (0, _relationshipMeta.relationshipFromMeta)(meta);
        relationship.type = (0, _relationshipMeta.typeForRelationshipMeta)(meta);
        map.set(name, relationship);
      }
    });

    return map;
  }).readOnly();
});
define("ember-data/-private/system/relationships/has-many", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/normalize-model-name", "ember-data/-private/system/is-array-like"], function (exports, _ember, _debug, _normalizeModelName, _isArrayLike) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hasMany;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var get = _ember.default.get;


  /**
    `DS.hasMany` is used to define One-To-Many and Many-To-Many
    relationships on a [DS.Model](/api/data/classes/DS.Model.html).
  
    `DS.hasMany` takes an optional hash as a second parameter, currently
    supported options are:
  
    - `async`: A boolean value used to explicitly declare this to be an async relationship.
    - `inverse`: A string used to identify the inverse property on a related model.
  
    #### One-To-Many
    To declare a one-to-many relationship between two models, use
    `DS.belongsTo` in combination with `DS.hasMany`, like this:
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      comments: DS.hasMany('comment')
    });
    ```
  
    ```app/models/comment.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      post: DS.belongsTo('post')
    });
    ```
  
    #### Many-To-Many
    To declare a many-to-many relationship between two models, use
    `DS.hasMany`:
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      tags: DS.hasMany('tag')
    });
    ```
  
    ```app/models/tag.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      posts: DS.hasMany('post')
    });
    ```
  
    You can avoid passing a string as the first parameter. In that case Ember Data
    will infer the type from the singularized key name.
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      tags: DS.hasMany()
    });
    ```
  
    will lookup for a Tag type.
  
    #### Explicit Inverses
  
    Ember Data will do its best to discover which relationships map to
    one another. In the one-to-many code above, for example, Ember Data
    can figure out that changing the `comments` relationship should update
    the `post` relationship on the inverse because post is the only
    relationship to that model.
  
    However, sometimes you may have multiple `belongsTo`/`hasMany` for the
    same type. You can specify which property on the related model is
    the inverse using `DS.hasMany`'s `inverse` option:
  
    ```app/models/comment.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      onePost: DS.belongsTo('post'),
      twoPost: DS.belongsTo('post'),
      redPost: DS.belongsTo('post'),
      bluePost: DS.belongsTo('post')
    });
    ```
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      comments: DS.hasMany('comment', {
        inverse: 'redPost'
      })
    });
    ```
  
    You can also specify an inverse on a `belongsTo`, which works how
    you'd expect.
  
    @namespace
    @method hasMany
    @for DS
    @param {String} type (optional) type of the relationship
    @param {Object} options (optional) a hash of options
    @return {Ember.computed} relationship
  */
  function hasMany(type, options) {
    if ((typeof type === "undefined" ? "undefined" : _typeof(type)) === 'object') {
      options = type;
      type = undefined;
    }

    (0, _debug.assert)("The first argument to DS.hasMany must be a string representing a model type key, not an instance of " + _ember.default.inspect(type) + ". E.g., to define a relation to the Comment model, use DS.hasMany('comment')", typeof type === 'string' || typeof type === 'undefined');

    options = options || {};

    if (typeof type === 'string') {
      type = (0, _normalizeModelName.default)(type);
    }

    // Metadata about relationships is stored on the meta of
    // the relationship. This is used for introspection and
    // serialization. Note that `key` is populated lazily
    // the first time the CP is called.
    var meta = {
      type: type,
      options: options,
      isRelationship: true,
      kind: 'hasMany',
      name: 'Has Many',
      key: null
    };

    return _ember.default.computed({
      get: function get(key) {
        return this._internalModel._relationships.get(key).getRecords();
      },
      set: function set(key, records) {
        (0, _debug.assert)("You must pass an array of records to set a hasMany relationship", (0, _isArrayLike.default)(records));
        (0, _debug.assert)("All elements of a hasMany relationship must be instances of DS.Model, you passed " + _ember.default.inspect(records), function () {
          return _ember.default.A(records).every(function (record) {
            return record.hasOwnProperty('_internalModel') === true;
          });
        }());

        var relationship = this._internalModel._relationships.get(key);
        relationship.clear();
        relationship.addRecords(records.map(function (record) {
          return get(record, '_internalModel');
        }));
        return relationship.getRecords();
      }
    }).meta(meta);
  }
});
define("ember-data/-private/system/relationships/state/belongs-to", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/promise-proxies", "ember-data/-private/system/relationships/state/relationship"], function (exports, _ember, _debug, _promiseProxies, _relationship) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BelongsToRelationship = function (_Relationship) {
    _inherits(BelongsToRelationship, _Relationship);

    function BelongsToRelationship(store, internalModel, inverseKey, relationshipMeta) {
      _classCallCheck(this, BelongsToRelationship);

      var _this = _possibleConstructorReturn(this, _Relationship.call(this, store, internalModel, inverseKey, relationshipMeta));

      _this.internalModel = internalModel;
      _this.key = relationshipMeta.key;
      _this.inverseRecord = null;
      _this.canonicalState = null;
      return _this;
    }

    BelongsToRelationship.prototype.setRecord = function setRecord(newRecord) {
      if (newRecord) {
        this.addRecord(newRecord);
      } else if (this.inverseRecord) {
        this.removeRecord(this.inverseRecord);
      }
      this.setHasData(true);
      this.setHasLoaded(true);
    };

    BelongsToRelationship.prototype.setCanonicalRecord = function setCanonicalRecord(newRecord) {
      if (newRecord) {
        this.addCanonicalRecord(newRecord);
      } else if (this.canonicalState) {
        this.removeCanonicalRecord(this.canonicalState);
      }
      this.flushCanonicalLater();
    };

    BelongsToRelationship.prototype.addCanonicalRecord = function addCanonicalRecord(newRecord) {
      if (this.canonicalMembers.has(newRecord)) {
        return;
      }

      if (this.canonicalState) {
        this.removeCanonicalRecord(this.canonicalState);
      }

      this.canonicalState = newRecord;
      _Relationship.prototype.addCanonicalRecord.call(this, newRecord);
    };

    BelongsToRelationship.prototype.inverseDidDematerialize = function inverseDidDematerialize() {
      this.notifyBelongsToChanged();
    };

    BelongsToRelationship.prototype.flushCanonical = function flushCanonical() {
      //temporary fix to not remove newly created records if server returned null.
      //TODO remove once we have proper diffing
      if (this.inverseRecord && this.inverseRecord.isNew() && !this.canonicalState) {
        return;
      }
      if (this.inverseRecord !== this.canonicalState) {
        this.inverseRecord = this.canonicalState;
        this.notifyBelongsToChanged();
      }

      _Relationship.prototype.flushCanonical.call(this);
    };

    BelongsToRelationship.prototype.addRecord = function addRecord(newRecord) {
      if (this.members.has(newRecord)) {
        return;
      }

      (0, _debug.assertPolymorphicType)(this.internalModel, this.relationshipMeta, newRecord);

      if (this.inverseRecord) {
        this.removeRecord(this.inverseRecord);
      }

      this.inverseRecord = newRecord;
      _Relationship.prototype.addRecord.call(this, newRecord);
      this.notifyBelongsToChanged();
    };

    BelongsToRelationship.prototype.setRecordPromise = function setRecordPromise(newPromise) {
      var content = newPromise.get && newPromise.get('content');
      (0, _debug.assert)("You passed in a promise that did not originate from an EmberData relationship. You can only pass promises that come from a belongsTo or hasMany relationship to the get call.", content !== undefined);
      this.setRecord(content ? content._internalModel : content);
    };

    BelongsToRelationship.prototype.removeRecordFromOwn = function removeRecordFromOwn(record) {
      if (!this.members.has(record)) {
        return;
      }
      this.inverseRecord = null;
      _Relationship.prototype.removeRecordFromOwn.call(this, record);
      this.notifyBelongsToChanged();
    };

    BelongsToRelationship.prototype.notifyBelongsToChanged = function notifyBelongsToChanged() {
      this.internalModel.notifyBelongsToChanged(this.key);
    };

    BelongsToRelationship.prototype.removeCanonicalRecordFromOwn = function removeCanonicalRecordFromOwn(record) {
      if (!this.canonicalMembers.has(record)) {
        return;
      }
      this.canonicalState = null;
      _Relationship.prototype.removeCanonicalRecordFromOwn.call(this, record);
    };

    BelongsToRelationship.prototype.findRecord = function findRecord() {
      if (this.inverseRecord) {
        return this.store._findByInternalModel(this.inverseRecord);
      } else {
        return _ember.default.RSVP.Promise.resolve(null);
      }
    };

    BelongsToRelationship.prototype.fetchLink = function fetchLink() {
      var _this2 = this;

      return this.store.findBelongsTo(this.internalModel, this.link, this.relationshipMeta).then(function (record) {
        if (record) {
          _this2.addRecord(record);
        }
        return record;
      });
    };

    BelongsToRelationship.prototype.getRecord = function getRecord() {
      var _this3 = this;

      //TODO(Igor) flushCanonical here once our syncing is not stupid
      if (this.isAsync) {
        var promise = void 0;
        if (this.link) {
          if (this.hasLoaded) {
            promise = this.findRecord();
          } else {
            promise = this.findLink().then(function () {
              return _this3.findRecord();
            });
          }
        } else {
          promise = this.findRecord();
        }

        return _promiseProxies.PromiseObject.create({
          promise: promise,
          content: this.inverseRecord ? this.inverseRecord.getRecord() : null
        });
      } else {
        if (this.inverseRecord === null) {
          return null;
        }
        var toReturn = this.inverseRecord.getRecord();
        (0, _debug.assert)("You looked up the '" + this.key + "' relationship on a '" + this.internalModel.modelName + "' with id " + this.internalModel.id + " but some of the associated records were not loaded. Either make sure they are all loaded together with the parent record, or specify that the relationship is async (`DS.belongsTo({ async: true })`)", toReturn === null || !toReturn.get('isEmpty'));
        return toReturn;
      }
    };

    BelongsToRelationship.prototype.reload = function reload() {
      // TODO handle case when reload() is triggered multiple times

      if (this.link) {
        return this.fetchLink();
      }

      // reload record, if it is already loaded
      if (this.inverseRecord && this.inverseRecord.hasRecord) {
        return this.inverseRecord.record.reload();
      }

      return this.findRecord();
    };

    BelongsToRelationship.prototype.updateData = function updateData(data) {
      var internalModel = this.store._pushResourceIdentifier(this, data);
      this.setCanonicalRecord(internalModel);
    };

    return BelongsToRelationship;
  }(_relationship.default);

  exports.default = BelongsToRelationship;
});
define("ember-data/-private/system/relationships/state/create", ["exports", "ember", "ember-data/-private/system/relationships/state/has-many", "ember-data/-private/system/relationships/state/belongs-to", "ember-data/-private/debug"], function (exports, _ember, _hasMany, _belongsTo, _debug) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _get = _ember.default.get;


  function shouldFindInverse(relationshipMeta) {
    var options = relationshipMeta.options;
    return !(options && options.inverse === null);
  }

  function createRelationshipFor(internalModel, relationshipMeta, store) {
    var inverseKey = void 0;
    var inverse = null;

    if (shouldFindInverse(relationshipMeta)) {
      inverse = internalModel.type.inverseFor(relationshipMeta.key, store);
    } else {
      (0, _debug.runInDebug)(function () {
        internalModel.type.typeForRelationship(relationshipMeta.key, store);
      });
    }

    if (inverse) {
      inverseKey = inverse.name;
    }

    if (relationshipMeta.kind === 'hasMany') {
      return new _hasMany.default(store, internalModel, inverseKey, relationshipMeta);
    } else {
      return new _belongsTo.default(store, internalModel, inverseKey, relationshipMeta);
    }
  }

  var Relationships = function () {
    function Relationships(internalModel) {
      _classCallCheck(this, Relationships);

      this.internalModel = internalModel;
      this.initializedRelationships = Object.create(null);
    }

    // TODO @runspired deprecate this as it was never truly a record instance


    Relationships.prototype.has = function has(key) {
      return !!this.initializedRelationships[key];
    };

    Relationships.prototype.get = function get(key) {
      var relationships = this.initializedRelationships;
      var relationship = relationships[key];

      if (!relationship) {
        var internalModel = this.internalModel;
        var relationshipsByName = _get(internalModel.type, 'relationshipsByName');
        var rel = relationshipsByName.get(key);

        if (rel) {
          relationship = relationships[key] = createRelationshipFor(internalModel, rel, internalModel.store);
        }
      }

      return relationship;
    };

    _createClass(Relationships, [{
      key: "record",
      get: function get() {
        return this.internalModel;
      }
    }]);

    return Relationships;
  }();

  exports.default = Relationships;
});
define('ember-data/-private/system/relationships/state/has-many', ['exports', 'ember-data/-private/debug', 'ember-data/-private/system/promise-proxies', 'ember-data/-private/system/relationships/state/relationship', 'ember-data/-private/system/ordered-set', 'ember-data/-private/system/many-array'], function (exports, _debug, _promiseProxies, _relationship, _orderedSet, _manyArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ManyRelationship = function (_Relationship) {
    _inherits(ManyRelationship, _Relationship);

    function ManyRelationship(store, record, inverseKey, relationshipMeta) {
      _classCallCheck(this, ManyRelationship);

      var _this = _possibleConstructorReturn(this, _Relationship.call(this, store, record, inverseKey, relationshipMeta));

      _this.belongsToType = relationshipMeta.type;
      _this.canonicalState = [];
      _this.isPolymorphic = relationshipMeta.options.polymorphic;
      _this._manyArray = null;
      _this.__loadingPromise = null;
      return _this;
    }

    ManyRelationship.prototype._updateLoadingPromise = function _updateLoadingPromise(promise, content) {
      if (this.__loadingPromise) {
        if (content) {
          this.__loadingPromise.set('content', content);
        }
        this.__loadingPromise.set('promise', promise);
      } else {
        this.__loadingPromise = new _promiseProxies.PromiseManyArray({
          promise: promise,
          content: content
        });
      }

      return this.__loadingPromise;
    };

    ManyRelationship.prototype.destroy = function destroy() {
      _Relationship.prototype.destroy.call(this);
      if (this._manyArray) {
        this._manyArray.destroy();
        this._manyArray = null;
      }

      if (this._loadingPromise) {
        this._loadingPromise.destroy();
      }
    };

    ManyRelationship.prototype.updateMeta = function updateMeta(meta) {
      _Relationship.prototype.updateMeta.call(this, meta);
      if (this._manyArray) {
        this._manyArray.set('meta', meta);
      }
    };

    ManyRelationship.prototype.addCanonicalRecord = function addCanonicalRecord(record, idx) {
      if (this.canonicalMembers.has(record)) {
        return;
      }
      if (idx !== undefined) {
        this.canonicalState.splice(idx, 0, record);
      } else {
        this.canonicalState.push(record);
      }
      _Relationship.prototype.addCanonicalRecord.call(this, record, idx);
    };

    ManyRelationship.prototype.inverseDidDematerialize = function inverseDidDematerialize() {
      if (this._manyArray) {
        this._manyArray.destroy();
        this._manyArray = null;
      }
      this.notifyHasManyChanged();
    };

    ManyRelationship.prototype.addRecord = function addRecord(record, idx) {
      if (this.members.has(record)) {
        return;
      }
      _Relationship.prototype.addRecord.call(this, record, idx);
      // make lazy later
      this.manyArray.internalAddRecords([record], idx);
    };

    ManyRelationship.prototype.removeCanonicalRecordFromOwn = function removeCanonicalRecordFromOwn(record, idx) {
      var i = idx;
      if (!this.canonicalMembers.has(record)) {
        return;
      }
      if (i === undefined) {
        i = this.canonicalState.indexOf(record);
      }
      if (i > -1) {
        this.canonicalState.splice(i, 1);
      }
      _Relationship.prototype.removeCanonicalRecordFromOwn.call(this, record, idx);
    };

    ManyRelationship.prototype.flushCanonical = function flushCanonical() {
      if (this._manyArray) {
        this._manyArray.flushCanonical();
      }
      _Relationship.prototype.flushCanonical.call(this);
    };

    ManyRelationship.prototype.removeRecordFromOwn = function removeRecordFromOwn(record, idx) {
      if (!this.members.has(record)) {
        return;
      }
      _Relationship.prototype.removeRecordFromOwn.call(this, record, idx);
      var manyArray = this.manyArray;
      if (idx !== undefined) {
        //TODO(Igor) not used currently, fix
        manyArray.currentState.removeAt(idx);
      } else {
        manyArray.internalRemoveRecords([record]);
      }
    };

    ManyRelationship.prototype.notifyRecordRelationshipAdded = function notifyRecordRelationshipAdded(record, idx) {
      (0, _debug.assertPolymorphicType)(this.record, this.relationshipMeta, record);

      this.record.notifyHasManyAdded(this.key, record, idx);
    };

    ManyRelationship.prototype.reload = function reload() {
      var manyArray = this.manyArray;
      var manyArrayLoadedState = manyArray.get('isLoaded');

      if (this._loadingPromise) {
        if (this._loadingPromise.get('isPending')) {
          return this._loadingPromise;
        }
        if (this._loadingPromise.get('isRejected')) {
          manyArray.set('isLoaded', manyArrayLoadedState);
        }
      }

      var promise = void 0;
      if (this.link) {
        promise = this.fetchLink();
      } else {
        promise = this.store._scheduleFetchMany(manyArray.currentState).then(function () {
          return manyArray;
        });
      }

      this._updateLoadingPromise(promise);
      return this._loadingPromise;
    };

    ManyRelationship.prototype.computeChanges = function computeChanges(records) {
      var members = this.canonicalMembers;
      var recordsToRemove = [];
      var recordSet = setForArray(records);

      members.forEach(function (member) {
        if (recordSet.has(member)) {
          return;
        }

        recordsToRemove.push(member);
      });

      this.removeCanonicalRecords(recordsToRemove);

      for (var i = 0, l = records.length; i < l; i++) {
        var record = records[i];
        this.removeCanonicalRecord(record);
        this.addCanonicalRecord(record, i);
      }
    };

    ManyRelationship.prototype.fetchLink = function fetchLink() {
      var _this2 = this;

      return this.store.findHasMany(this.record, this.link, this.relationshipMeta).then(function (records) {
        if (records.hasOwnProperty('meta')) {
          _this2.updateMeta(records.meta);
        }
        _this2.store._backburner.join(function () {
          _this2.updateRecordsFromAdapter(records);
          _this2.manyArray.set('isLoaded', true);
        });
        return _this2.manyArray;
      });
    };

    ManyRelationship.prototype.findRecords = function findRecords() {
      var manyArray = this.manyArray;
      var internalModels = manyArray.currentState;

      //TODO CLEANUP
      return this.store.findMany(internalModels).then(function () {
        if (!manyArray.get('isDestroyed')) {
          //Goes away after the manyArray refactor
          manyArray.set('isLoaded', true);
        }
        return manyArray;
      });
    };

    ManyRelationship.prototype.notifyHasManyChanged = function notifyHasManyChanged() {
      this.record.notifyHasManyAdded(this.key);
    };

    ManyRelationship.prototype.getRecords = function getRecords() {
      var _this3 = this;

      //TODO(Igor) sync server here, once our syncing is not stupid
      var manyArray = this.manyArray;
      if (this.isAsync) {
        var promise = void 0;
        if (this.link) {
          if (this.hasLoaded) {
            promise = this.findRecords();
          } else {
            promise = this.findLink().then(function () {
              return _this3.findRecords();
            });
          }
        } else {
          promise = this.findRecords();
        }
        return this._updateLoadingPromise(promise, manyArray);
      } else {
        (0, _debug.assert)('You looked up the \'' + this.key + '\' relationship on a \'' + this.record.type.modelName + '\' with id ' + this.record.id + ' but some of the associated records were not loaded. Either make sure they are all loaded together with the parent record, or specify that the relationship is async (\'DS.hasMany({ async: true })\')', manyArray.isEvery('isEmpty', false));

        //TODO(Igor) WTF DO I DO HERE?
        // TODO @runspired equal WTFs to Igor
        if (!manyArray.get('isDestroyed')) {
          manyArray.set('isLoaded', true);
        }
        return manyArray;
      }
    };

    ManyRelationship.prototype.updateData = function updateData(data) {
      var internalModels = this.store._pushResourceIdentifiers(this, data);
      this.updateRecordsFromAdapter(internalModels);
    };

    _createClass(ManyRelationship, [{
      key: '_loadingPromise',
      get: function get() {
        return this.__loadingPromise;
      }
    }, {
      key: 'manyArray',
      get: function get() {
        if (!this._manyArray) {
          this._manyArray = _manyArray.default.create({
            canonicalState: this.canonicalState,
            store: this.store,
            relationship: this,
            type: this.store.modelFor(this.belongsToType),
            record: this.record,
            meta: this.meta,
            isPolymorphic: this.isPolymorphic
          });
        }
        return this._manyArray;
      }
    }]);

    return ManyRelationship;
  }(_relationship.default);

  exports.default = ManyRelationship;


  function setForArray(array) {
    var set = new _orderedSet.default();

    if (array) {
      for (var i = 0, l = array.length; i < l; i++) {
        set.add(array[i]);
      }
    }

    return set;
  }
});
define('ember-data/-private/system/relationships/state/relationship', ['exports', 'ember-data/-private/debug', 'ember-data/-private/system/ordered-set', 'ember-data/-private/system/normalize-link'], function (exports, _debug, _orderedSet, _normalizeLink2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Relationship = function () {
    function Relationship(store, internalModel, inverseKey, relationshipMeta) {
      _classCallCheck(this, Relationship);

      var async = relationshipMeta.options.async;
      this.members = new _orderedSet.default();
      this.canonicalMembers = new _orderedSet.default();
      this.store = store;
      this.key = relationshipMeta.key;
      this.inverseKey = inverseKey;
      this.internalModel = internalModel;
      this.isAsync = typeof async === 'undefined' ? true : async;
      this.relationshipMeta = relationshipMeta;
      //This probably breaks for polymorphic relationship in complex scenarios, due to
      //multiple possible modelNames
      this.inverseKeyForImplicit = this.internalModel.modelName + this.key;
      this.linkPromise = null;
      this.meta = null;
      this.hasData = false;
      this.hasLoaded = false;
    }

    // TODO @runspired deprecate this as it was never truly a record instance


    Relationship.prototype.destroy = function destroy() {
      var _this = this;

      if (!this.inverseKey) {
        return;
      }

      var allMembers =
      // we actually want a union of members and canonicalMembers
      // they should be disjoint but currently are not due to a bug
      this.members.toArray().concat(this.canonicalMembers.toArray());

      allMembers.forEach(function (inverseInternalModel) {
        var relationship = inverseInternalModel._relationships.get(_this.inverseKey);
        // TODO: there is always a relationship in this case; this guard exists
        // because there are tests that fail in teardown after putting things in
        // invalid state
        if (relationship) {
          relationship.inverseDidDematerialize();
        }
      });
    };

    Relationship.prototype.inverseDidDematerialize = function inverseDidDematerialize() {};

    Relationship.prototype.updateMeta = function updateMeta(meta) {
      this.meta = meta;
    };

    Relationship.prototype.clear = function clear() {

      var members = this.members.list;
      while (members.length > 0) {
        var member = members[0];
        this.removeRecord(member);
      }

      var canonicalMembers = this.canonicalMembers.list;
      while (canonicalMembers.length > 0) {
        var _member = canonicalMembers[0];
        this.removeCanonicalRecord(_member);
      }
    };

    Relationship.prototype.removeRecords = function removeRecords(records) {
      var _this2 = this;

      records.forEach(function (record) {
        return _this2.removeRecord(record);
      });
    };

    Relationship.prototype.addRecords = function addRecords(records, idx) {
      var _this3 = this;

      records.forEach(function (record) {
        _this3.addRecord(record, idx);
        if (idx !== undefined) {
          idx++;
        }
      });
    };

    Relationship.prototype.addCanonicalRecords = function addCanonicalRecords(records, idx) {
      for (var i = 0; i < records.length; i++) {
        if (idx !== undefined) {
          this.addCanonicalRecord(records[i], i + idx);
        } else {
          this.addCanonicalRecord(records[i]);
        }
      }
    };

    Relationship.prototype.addCanonicalRecord = function addCanonicalRecord(record, idx) {
      if (!this.canonicalMembers.has(record)) {
        this.canonicalMembers.add(record);
        if (this.inverseKey) {
          record._relationships.get(this.inverseKey).addCanonicalRecord(this.record);
        } else {
          if (!record._implicitRelationships[this.inverseKeyForImplicit]) {
            record._implicitRelationships[this.inverseKeyForImplicit] = new Relationship(this.store, record, this.key, { options: {} });
          }
          record._implicitRelationships[this.inverseKeyForImplicit].addCanonicalRecord(this.record);
        }
      }
      this.flushCanonicalLater();
      this.setHasData(true);
    };

    Relationship.prototype.removeCanonicalRecords = function removeCanonicalRecords(records, idx) {
      for (var i = 0; i < records.length; i++) {
        if (idx !== undefined) {
          this.removeCanonicalRecord(records[i], i + idx);
        } else {
          this.removeCanonicalRecord(records[i]);
        }
      }
    };

    Relationship.prototype.removeCanonicalRecord = function removeCanonicalRecord(record, idx) {
      if (this.canonicalMembers.has(record)) {
        this.removeCanonicalRecordFromOwn(record);
        if (this.inverseKey) {
          this.removeCanonicalRecordFromInverse(record);
        } else {
          if (record._implicitRelationships[this.inverseKeyForImplicit]) {
            record._implicitRelationships[this.inverseKeyForImplicit].removeCanonicalRecord(this.record);
          }
        }
      }
      this.flushCanonicalLater();
    };

    Relationship.prototype.addRecord = function addRecord(record, idx) {
      if (!this.members.has(record)) {
        this.members.addWithIndex(record, idx);
        this.notifyRecordRelationshipAdded(record, idx);
        if (this.inverseKey) {
          record._relationships.get(this.inverseKey).addRecord(this.record);
        } else {
          if (!record._implicitRelationships[this.inverseKeyForImplicit]) {
            record._implicitRelationships[this.inverseKeyForImplicit] = new Relationship(this.store, record, this.key, { options: {} });
          }
          record._implicitRelationships[this.inverseKeyForImplicit].addRecord(this.record);
        }
        this.record.updateRecordArrays();
      }
      this.setHasData(true);
    };

    Relationship.prototype.removeRecord = function removeRecord(record) {
      if (this.members.has(record)) {
        this.removeRecordFromOwn(record);
        if (this.inverseKey) {
          this.removeRecordFromInverse(record);
        } else {
          if (record._implicitRelationships[this.inverseKeyForImplicit]) {
            record._implicitRelationships[this.inverseKeyForImplicit].removeRecord(this.record);
          }
        }
      }
    };

    Relationship.prototype.removeRecordFromInverse = function removeRecordFromInverse(record) {
      var inverseRelationship = record._relationships.get(this.inverseKey);
      //Need to check for existence, as the record might unloading at the moment
      if (inverseRelationship) {
        inverseRelationship.removeRecordFromOwn(this.record);
      }
    };

    Relationship.prototype.removeRecordFromOwn = function removeRecordFromOwn(record) {
      this.members.delete(record);
      this.notifyRecordRelationshipRemoved(record);
      this.record.updateRecordArrays();
    };

    Relationship.prototype.removeCanonicalRecordFromInverse = function removeCanonicalRecordFromInverse(record) {
      var inverseRelationship = record._relationships.get(this.inverseKey);
      //Need to check for existence, as the record might unloading at the moment
      if (inverseRelationship) {
        inverseRelationship.removeCanonicalRecordFromOwn(this.record);
      }
    };

    Relationship.prototype.removeCanonicalRecordFromOwn = function removeCanonicalRecordFromOwn(record) {
      this.canonicalMembers.delete(record);
      this.flushCanonicalLater();
    };

    Relationship.prototype.flushCanonical = function flushCanonical() {
      var list = this.members.list;
      this.willSync = false;
      //a hack for not removing new records
      //TODO remove once we have proper diffing
      var newRecords = [];
      for (var i = 0; i < list.length; i++) {
        if (list[i].isNew()) {
          newRecords.push(list[i]);
        }
      }

      //TODO(Igor) make this less abysmally slow
      this.members = this.canonicalMembers.copy();
      for (var _i = 0; _i < newRecords.length; _i++) {
        this.members.add(newRecords[_i]);
      }
    };

    Relationship.prototype.flushCanonicalLater = function flushCanonicalLater() {
      if (this.willSync) {
        return;
      }
      this.willSync = true;
      this.store._updateRelationshipState(this);
    };

    Relationship.prototype.updateLink = function updateLink(link) {
      (0, _debug.warn)('You pushed a record of type \'' + this.record.modelName + '\' with a relationship \'' + this.key + '\' configured as \'async: false\'. You\'ve included a link but no primary data, this may be an error in your payload.', this.isAsync || this.hasData, {
        id: 'ds.store.push-link-for-sync-relationship'
      });
      (0, _debug.assert)('You have pushed a record of type \'' + this.record.modelName + '\' with \'' + this.key + '\' as a link, but the value of that link is not a string.', typeof link === 'string' || link === null);

      this.link = link;
      this.linkPromise = null;
      this.record.notifyPropertyChange(this.key);
    };

    Relationship.prototype.findLink = function findLink() {
      if (this.linkPromise) {
        return this.linkPromise;
      } else {
        var promise = this.fetchLink();
        this.linkPromise = promise;
        return promise.then(function (result) {
          return result;
        });
      }
    };

    Relationship.prototype.updateRecordsFromAdapter = function updateRecordsFromAdapter(records) {
      //TODO(Igor) move this to a proper place
      //TODO Once we have adapter support, we need to handle updated and canonical changes
      this.computeChanges(records);
    };

    Relationship.prototype.notifyRecordRelationshipAdded = function notifyRecordRelationshipAdded() {};

    Relationship.prototype.notifyRecordRelationshipRemoved = function notifyRecordRelationshipRemoved() {};

    Relationship.prototype.setHasData = function setHasData(value) {
      this.hasData = value;
    };

    Relationship.prototype.setHasLoaded = function setHasLoaded(value) {
      this.hasLoaded = value;
    };

    Relationship.prototype.push = function push(payload) {

      var hasData = false;
      var hasLink = false;

      if (payload.meta) {
        this.updateMeta(payload.meta);
      }

      if (payload.data !== undefined) {
        hasData = true;
        this.updateData(payload.data);
      }

      if (payload.links && payload.links.related) {
        var relatedLink = (0, _normalizeLink2.default)(payload.links.related);
        if (relatedLink && relatedLink.href && relatedLink.href !== this.link) {
          hasLink = true;
          this.updateLink(relatedLink.href);
        }
      }

      /*
       Data being pushed into the relationship might contain only data or links,
       or a combination of both.
        If we got data we want to set both hasData and hasLoaded to true since
       this would indicate that we should prefer the local state instead of
       trying to fetch the link or call findRecord().
        If we have no data but a link is present we want to set hasLoaded to false
       without modifying the hasData flag. This will ensure we fetch the updated
       link next time the relationship is accessed.
       */
      if (hasData) {
        this.setHasData(true);
        this.setHasLoaded(true);
      } else if (hasLink) {
        this.setHasLoaded(false);
      }
    };

    Relationship.prototype.updateData = function updateData() {};

    _createClass(Relationship, [{
      key: 'record',
      get: function get() {
        return this.internalModel;
      }
    }, {
      key: 'parentType',
      get: function get() {
        return this.internalModel.modelName;
      }
    }]);

    return Relationship;
  }();

  exports.default = Relationship;
});
define('ember-data/-private/system/snapshot-record-array', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = SnapshotRecordArray;
  /**
    @module ember-data
  */

  /**
    @class SnapshotRecordArray
    @namespace DS
    @private
    @constructor
    @param {Array} snapshots An array of snapshots
    @param {Object} meta
  */
  function SnapshotRecordArray(recordArray, meta) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    /**
      An array of snapshots
      @private
      @property _snapshots
      @type {Array}
    */
    this._snapshots = null;
    /**
      An array of records
      @private
      @property _recordArray
      @type {Array}
    */
    this._recordArray = recordArray;

    /**
      Number of records in the array
       Example
       ```app/adapters/post.js
      import DS from 'ember-data'
       export default DS.JSONAPIAdapter.extend({
        shouldReloadAll(store, snapshotRecordArray) {
          return !snapshotRecordArray.length;
        },
      });
      ```
       @property length
      @type {Number}
    */
    this.length = recordArray.get('length');

    /**
      The type of the underlying records for the snapshots in the array, as a DS.Model
      @property type
      @type {DS.Model}
    */
    this.type = recordArray.get('type');

    /**
      Meta objects for the record array.
       Example
       ```app/adapters/post.js
      import DS from 'ember-data'
       export default DS.JSONAPIAdapter.extend({
        shouldReloadAll(store, snapshotRecordArray) {
          var lastRequestTime = snapshotRecordArray.meta.lastRequestTime;
          var twentyMinutes = 20 * 60 * 1000;
          return Date.now() > lastRequestTime + twentyMinutes;
        },
      });
      ```
       @property meta
      @type {Object}
    */
    this.meta = meta;

    /**
      A hash of adapter options passed into the store method for this request.
       Example
       ```app/adapters/post.js
      import MyCustomAdapter from './custom-adapter';
       export default MyCustomAdapter.extend({
        findAll(store, type, sinceToken, snapshotRecordArray) {
          if (snapshotRecordArray.adapterOptions.subscribe) {
            // ...
          }
          // ...
        }
      });
      ```
       @property adapterOptions
      @type {Object}
    */
    this.adapterOptions = options.adapterOptions;

    /**
      The relationships to include for this request.
       Example
       ```app/adapters/application.js
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        findAll(store, type, snapshotRecordArray) {
          var url = `/${type.modelName}?include=${encodeURIComponent(snapshotRecordArray.include)}`;
           return fetch(url).then((response) => response.json())
        }
      });
       @property include
      @type {String|Array}
    */
    this.include = options.include;
  }

  /**
    Get snapshots of the underlying record array
  
    Example
  
    ```app/adapters/post.js
    import DS from 'ember-data'
  
    export default DS.JSONAPIAdapter.extend({
      shouldReloadAll(store, snapshotArray) {
        var snapshots = snapshotArray.snapshots();
  
        return snapshots.any(function(ticketSnapshot) {
          var timeDiff = moment().diff(ticketSnapshot.attr('lastAccessedAt'), 'minutes');
          if (timeDiff > 20) {
            return true;
          } else {
            return false;
          }
        });
      }
    });
    ```
  
    @method snapshots
    @return {Array} Array of snapshots
  */
  SnapshotRecordArray.prototype.snapshots = function () {
    if (this._snapshots !== null) {
      return this._snapshots;
    }

    this._snapshots = this._recordArray._takeSnapshot();

    return this._snapshots;
  };
});
define("ember-data/-private/system/snapshot", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var get = _ember.default.get;

  var Snapshot = function () {
    function Snapshot(internalModel) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Snapshot);

      this._attributes = Object.create(null);
      this._belongsToRelationships = Object.create(null);
      this._belongsToIds = Object.create(null);
      this._hasManyRelationships = Object.create(null);
      this._hasManyIds = Object.create(null);
      this._internalModel = internalModel;

      var record = internalModel.getRecord();

      /**
       The underlying record for this snapshot. Can be used to access methods and
       properties defined on the record.
        Example
        ```javascript
       let json = snapshot.record.toJSON();
       ```
        @property record
       @type {DS.Model}
       */
      this.record = record;
      record.eachAttribute(function (keyName) {
        return _this._attributes[keyName] = get(record, keyName);
      });

      /**
       The id of the snapshot's underlying record
        Example
        ```javascript
       // store.push('post', { id: 1, author: 'Tomster', title: 'Ember.js rocks' });
       postSnapshot.id; // => '1'
       ```
        @property id
       @type {String}
       */
      this.id = internalModel.id;

      /**
       A hash of adapter options
       @property adapterOptions
       @type {Object}
       */
      this.adapterOptions = options.adapterOptions;
      this.include = options.include;

      /**
       The type of the underlying record for this snapshot, as a DS.Model.
        @property type
       @type {DS.Model}
       */
      // TODO @runspired we should deprecate this in favor of modelClass but only once
      // we've cleaned up the internals enough that a public change to follow suite is
      // uncontroversial.
      this.type = internalModel.modelClass;

      /**
       The name of the type of the underlying record for this snapshot, as a string.
        @property modelName
       @type {String}
       */
      this.modelName = internalModel.modelName;

      this._changedAttributes = record.changedAttributes();
    }

    /**
     Returns the value of an attribute.
      Example
      ```javascript
     // store.push('post', { id: 1, author: 'Tomster', title: 'Ember.js rocks' });
     postSnapshot.attr('author'); // => 'Tomster'
     postSnapshot.attr('title'); // => 'Ember.js rocks'
     ```
      Note: Values are loaded eagerly and cached when the snapshot is created.
      @method attr
     @param {String} keyName
     @return {Object} The attribute value or undefined
     */


    Snapshot.prototype.attr = function attr(keyName) {
      if (keyName in this._attributes) {
        return this._attributes[keyName];
      }
      throw new _ember.default.Error("Model '" + _ember.default.inspect(this.record) + "' has no attribute named '" + keyName + "' defined.");
    };

    Snapshot.prototype.attributes = function attributes() {
      return _ember.default.copy(this._attributes);
    };

    Snapshot.prototype.changedAttributes = function changedAttributes() {
      var changedAttributes = Object.create(null);
      var changedAttributeKeys = Object.keys(this._changedAttributes);

      for (var i = 0, length = changedAttributeKeys.length; i < length; i++) {
        var key = changedAttributeKeys[i];
        changedAttributes[key] = _ember.default.copy(this._changedAttributes[key]);
      }

      return changedAttributes;
    };

    Snapshot.prototype.belongsTo = function belongsTo(keyName, options) {
      var id = options && options.id;
      var relationship = void 0,
          inverseRecord = void 0,
          hasData = void 0;
      var result = void 0;

      if (id && keyName in this._belongsToIds) {
        return this._belongsToIds[keyName];
      }

      if (!id && keyName in this._belongsToRelationships) {
        return this._belongsToRelationships[keyName];
      }

      relationship = this._internalModel._relationships.get(keyName);
      if (!(relationship && relationship.relationshipMeta.kind === 'belongsTo')) {
        throw new _ember.default.Error("Model '" + _ember.default.inspect(this.record) + "' has no belongsTo relationship named '" + keyName + "' defined.");
      }

      hasData = get(relationship, 'hasData');
      inverseRecord = get(relationship, 'inverseRecord');

      if (hasData) {
        if (inverseRecord && !inverseRecord.isDeleted()) {
          if (id) {
            result = get(inverseRecord, 'id');
          } else {
            result = inverseRecord.createSnapshot();
          }
        } else {
          result = null;
        }
      }

      if (id) {
        this._belongsToIds[keyName] = result;
      } else {
        this._belongsToRelationships[keyName] = result;
      }

      return result;
    };

    Snapshot.prototype.hasMany = function hasMany(keyName, options) {
      var ids = options && options.ids;
      var relationship = void 0,
          members = void 0,
          hasData = void 0;
      var results = void 0;

      if (ids && keyName in this._hasManyIds) {
        return this._hasManyIds[keyName];
      }

      if (!ids && keyName in this._hasManyRelationships) {
        return this._hasManyRelationships[keyName];
      }

      relationship = this._internalModel._relationships.get(keyName);
      if (!(relationship && relationship.relationshipMeta.kind === 'hasMany')) {
        throw new _ember.default.Error("Model '" + _ember.default.inspect(this.record) + "' has no hasMany relationship named '" + keyName + "' defined.");
      }

      hasData = get(relationship, 'hasData');
      members = get(relationship, 'members');

      if (hasData) {
        results = [];
        members.forEach(function (member) {
          if (!member.isDeleted()) {
            if (ids) {
              results.push(member.id);
            } else {
              results.push(member.createSnapshot());
            }
          }
        });
      }

      if (ids) {
        this._hasManyIds[keyName] = results;
      } else {
        this._hasManyRelationships[keyName] = results;
      }

      return results;
    };

    Snapshot.prototype.eachAttribute = function eachAttribute(callback, binding) {
      this.record.eachAttribute(callback, binding);
    };

    Snapshot.prototype.eachRelationship = function eachRelationship(callback, binding) {
      this.record.eachRelationship(callback, binding);
    };

    Snapshot.prototype.serialize = function serialize(options) {
      return this.record.store.serializerFor(this.modelName).serialize(this, options);
    };

    return Snapshot;
  }();

  exports.default = Snapshot;
});
define('ember-data/-private/system/store', ['exports', 'ember', 'ember-data/-private/debug', 'ember-data/model', 'ember-data/-private/system/normalize-model-name', 'ember-data/adapters/errors', 'ember-data/-private/system/identity-map', 'ember-data/-private/system/promise-proxies', 'ember-data/-private/system/store/common', 'ember-data/-private/system/store/serializer-response', 'ember-data/-private/system/store/serializers', 'ember-data/-private/system/store/finders', 'ember-data/-private/utils', 'ember-data/-private/system/coerce-id', 'ember-data/-private/system/record-array-manager', 'ember-data/-private/system/store/container-instance-cache', 'ember-data/-private/system/model/internal-model', 'ember-data/-private/features'], function (exports, _ember, _debug, _model, _normalizeModelName, _errors, _identityMap, _promiseProxies, _common, _serializerResponse, _serializers, _finders, _utils, _coerceId, _recordArrayManager, _containerInstanceCache, _internalModel5, _features) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Store = exports.badIdFormatAssertion = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var badIdFormatAssertion = exports.badIdFormatAssertion = '`id` passed to `findRecord()` has to be non-empty string or number';

  var A = _ember.default.A,
      Backburner = _ember.default._Backburner,
      computed = _ember.default.computed,
      copy = _ember.default.copy,
      ENV = _ember.default.ENV,
      EmberError = _ember.default.Error,
      get = _ember.default.get,
      inspect = _ember.default.inspect,
      isNone = _ember.default.isNone,
      isPresent = _ember.default.isPresent,
      MapWithDefault = _ember.default.MapWithDefault,
      emberRun = _ember.default.run,
      set = _ember.default.set,
      RSVP = _ember.default.RSVP,
      Service = _ember.default.Service,
      typeOf = _ember.default.typeOf;
  var Promise = RSVP.Promise;


  //Get the materialized model from the internalModel/promise that returns
  //an internal model and return it in a promiseObject. Useful for returning
  //from find methods
  function promiseRecord(internalModelPromise, label) {
    var toReturn = internalModelPromise.then(function (internalModel) {
      return internalModel.getRecord();
    });

    return (0, _promiseProxies.promiseObject)(toReturn, label);
  }

  var Store = void 0;

  // Implementors Note:
  //
  //   The variables in this file are consistently named according to the following
  //   scheme:
  //
  //   * +id+ means an identifier managed by an external source, provided inside
  //     the data provided by that source. These are always coerced to be strings
  //     before being used internally.
  //   * +clientId+ means a transient numerical identifier generated at runtime by
  //     the data store. It is important primarily because newly created objects may
  //     not yet have an externally generated id.
  //   * +internalModel+ means a record internalModel object, which holds metadata about a
  //     record, even if it has not yet been fully materialized.
  //   * +type+ means a DS.Model.

  /**
    The store contains all of the data for records loaded from the server.
    It is also responsible for creating instances of `DS.Model` that wrap
    the individual data for a record, so that they can be bound to in your
    Handlebars templates.
  
    Define your application's store like this:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
    });
    ```
  
    Most Ember.js applications will only have a single `DS.Store` that is
    automatically created by their `Ember.Application`.
  
    You can retrieve models from the store in several ways. To retrieve a record
    for a specific id, use `DS.Store`'s `findRecord()` method:
  
    ```javascript
    store.findRecord('person', 123).then(function (person) {
    });
    ```
  
    By default, the store will talk to your backend using a standard
    REST mechanism. You can customize how the store talks to your
    backend by specifying a custom adapter:
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.Adapter.extend({
    });
    ```
  
    You can learn more about writing a custom adapter by reading the `DS.Adapter`
    documentation.
  
    ### Store createRecord() vs. push() vs. pushPayload()
  
    The store provides multiple ways to create new record objects. They have
    some subtle differences in their use which are detailed below:
  
    [createRecord](#method_createRecord) is used for creating new
    records on the client side. This will return a new record in the
    `created.uncommitted` state. In order to persist this record to the
    backend you will need to call `record.save()`.
  
    [push](#method_push) is used to notify Ember Data's store of new or
    updated records that exist in the backend. This will return a record
    in the `loaded.saved` state. The primary use-case for `store#push` is
    to notify Ember Data about record updates (full or partial) that happen
    outside of the normal adapter methods (for example
    [SSE](http://dev.w3.org/html5/eventsource/) or [Web
    Sockets](http://www.w3.org/TR/2009/WD-websockets-20091222/)).
  
    [pushPayload](#method_pushPayload) is a convenience wrapper for
    `store#push` that will deserialize payloads if the
    Serializer implements a `pushPayload` method.
  
    Note: When creating a new record using any of the above methods
    Ember Data will update `DS.RecordArray`s such as those returned by
    `store#peekAll()`, `store#findAll()` or `store#filter()`. This means any
    data bindings or computed properties that depend on the RecordArray
    will automatically be synced to include the new or updated record
    values.
  
    @class Store
    @namespace DS
    @extends Ember.Service
  */
  exports.Store = Store = Service.extend({

    /**
      @method init
      @private
    */
    init: function init() {
      this._super.apply(this, arguments);
      this._backburner = new Backburner(['normalizeRelationships', 'syncRelationships', 'finished']);
      // internal bookkeeping; not observable
      this.recordArrayManager = new _recordArrayManager.default({ store: this });
      this._identityMap = new _identityMap.default();
      this._pendingSave = [];
      this._instanceCache = new _containerInstanceCache.default((0, _utils.getOwner)(this), this);
      this._modelFactoryCache = Object.create(null);

      /*
        Ember Data uses several specialized micro-queues for organizing
        and coalescing similar async work.
         These queues are currently controlled by a flush scheduled into
        ember-data's custom backburner instance.
       */
      // used for coalescing record save requests
      this._pendingSave = [];
      // used for coalescing relationship updates
      this._updatedRelationships = [];
      // used for coalescing relationship setup needs
      this._pushedInternalModels = [];
      // used for coalescing internal model updates
      this._updatedInternalModels = [];

      // used to keep track of all the find requests that need to be coalesced
      this._pendingFetch = MapWithDefault.create({
        defaultValue: function defaultValue() {
          return [];
        }
      });

      this._instanceCache = new _containerInstanceCache.default((0, _utils.getOwner)(this), this);
    },


    /**
      The default adapter to use to communicate to a backend server or
      other persistence layer. This will be overridden by an application
      adapter if present.
       If you want to specify `app/adapters/custom.js` as a string, do:
       ```js
      import DS from 'ember-data';
       export default DS.Store.extend({
        adapter: 'custom',
      });
      ```
       @property adapter
      @default '-json-api'
      @type {String}
    */
    adapter: '-json-api',

    /**
      Returns a JSON representation of the record using a custom
      type-specific serializer, if one exists.
       The available options are:
       * `includeId`: `true` if the record's ID should be included in
        the JSON representation
       @method serialize
      @private
      @deprecated
      @param {DS.Model} record the record to serialize
      @param {Object} options an options hash
    */
    serialize: function serialize(record, options) {
      if (true) {
        (0, _debug.deprecate)('Use of store.serialize is deprecated, use record.serialize instead.', false, {
          id: 'ds.store.serialize',
          until: '3.0'
        });
      }
      var snapshot = record._internalModel.createSnapshot();
      return snapshot.serialize(options);
    },


    /**
      This property returns the adapter, after resolving a possible
      string key.
       If the supplied `adapter` was a class, or a String property
      path resolved to a class, this property will instantiate the
      class.
       This property is cacheable, so the same instance of a specified
      adapter class should be used for the lifetime of the store.
       @property defaultAdapter
      @private
      @return DS.Adapter
    */
    defaultAdapter: computed('adapter', function () {
      var adapter = get(this, 'adapter');

      (0, _debug.assert)('You tried to set `adapter` property to an instance of `DS.Adapter`, where it should be a name', typeof adapter === 'string');

      return this.adapterFor(adapter);
    }),

    // .....................
    // . CREATE NEW RECORD .
    // .....................

    /**
      Create a new record in the current store. The properties passed
      to this method are set on the newly created record.
       To create a new instance of a `Post`:
       ```js
      store.createRecord('post', {
        title: 'Rails is omakase'
      });
      ```
       To create a new instance of a `Post` that has a relationship with a `User` record:
       ```js
      let user = this.store.peekRecord('user', 1);
      store.createRecord('post', {
        title: 'Rails is omakase',
        user: user
      });
      ```
       @method createRecord
      @param {String} modelName
      @param {Object} inputProperties a hash of properties to set on the
        newly created record.
      @return {DS.Model} record
    */
    createRecord: function createRecord(modelName, inputProperties) {
      (0, _debug.assert)('You need to pass a model name to the store\'s createRecord method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);
      var properties = copy(inputProperties) || Object.create(null);

      // If the passed properties do not include a primary key,
      // give the adapter an opportunity to generate one. Typically,
      // client-side ID generators will use something like uuid.js
      // to avoid conflicts.

      if (isNone(properties.id)) {
        properties.id = this._generateId(normalizedModelName, properties);
      }

      // Coerce ID to a string
      properties.id = (0, _coerceId.default)(properties.id);

      var internalModel = this.buildInternalModel(normalizedModelName, properties.id);
      var record = internalModel.getRecord();

      // Move the record out of its initial `empty` state into
      // the `loaded` state.
      // TODO @runspired this seems really bad, store should not be changing the state
      internalModel.loadedData();

      // Set the properties specified on the record.
      // TODO @runspired this is probably why we do the bad thing above
      record.setProperties(properties);

      // TODO @runspired this should also be coalesced into some form of internalModel.setState()
      internalModel.eachRelationship(function (key, descriptor) {
        internalModel._relationships.get(key).setHasData(true);
      });

      return record;
    },


    /**
      If possible, this method asks the adapter to generate an ID for
      a newly created record.
       @method _generateId
      @private
      @param {String} modelName
      @param {Object} properties from the new record
      @return {String} if the adapter can generate one, an ID
    */
    _generateId: function _generateId(modelName, properties) {
      var adapter = this.adapterFor(modelName);

      if (adapter && adapter.generateIdForRecord) {
        return adapter.generateIdForRecord(this, modelName, properties);
      }

      return null;
    },


    // .................
    // . DELETE RECORD .
    // .................

    /**
      For symmetry, a record can be deleted via the store.
       Example
       ```javascript
      let post = store.createRecord('post', {
        title: 'Rails is omakase'
      });
       store.deleteRecord(post);
      ```
       @method deleteRecord
      @param {DS.Model} record
    */
    deleteRecord: function deleteRecord(record) {
      record.deleteRecord();
    },


    /**
      For symmetry, a record can be unloaded via the store.
      This will cause the record to be destroyed and freed up for garbage collection.
       Example
       ```javascript
      store.findRecord('post', 1).then(function(post) {
        store.unloadRecord(post);
      });
      ```
       @method unloadRecord
      @param {DS.Model} record
    */
    unloadRecord: function unloadRecord(record) {
      record.unloadRecord();
    },


    // ................
    // . FIND RECORDS .
    // ................

    /**
      @method find
      @param {String} modelName
      @param {String|Integer} id
      @param {Object} options
      @return {Promise} promise
      @private
    */
    find: function find(modelName, id, options) {
      // The default `model` hook in Ember.Route calls `find(modelName, id)`,
      // that's why we have to keep this method around even though `findRecord` is
      // the public way to get a record by modelName and id.
      (0, _debug.assert)('Using store.find(type) has been removed. Use store.findAll(modelName) to retrieve all records for a given type.', arguments.length !== 1);
      (0, _debug.assert)('Calling store.find(modelName, id, { preload: preload }) is no longer supported. Use store.findRecord(modelName, id, { preload: preload }) instead.', !options);
      (0, _debug.assert)('You need to pass the model name and id to the store\'s find method', arguments.length === 2);
      (0, _debug.assert)('You cannot pass \'' + id + '\' as id to the store\'s find method', typeof id === 'string' || typeof id === 'number');
      (0, _debug.assert)('Calling store.find() with a query object is no longer supported. Use store.query() instead.', (typeof id === 'undefined' ? 'undefined' : _typeof(id)) !== 'object');
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      return this.findRecord(normalizedModelName, id);
    },


    /**
      This method returns a record for a given type and id combination.
       The `findRecord` method will always resolve its promise with the same
      object for a given type and `id`.
       The `findRecord` method will always return a **promise** that will be
      resolved with the record.
       Example
       ```app/routes/post.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
          return this.store.findRecord('post', params.post_id);
        }
      });
      ```
       If the record is not yet available, the store will ask the adapter's `find`
      method to find the necessary data. If the record is already present in the
      store, it depends on the reload behavior _when_ the returned promise
      resolves.
       ### Preloading
       You can optionally `preload` specific attributes and relationships that you know of
      by passing them via the passed `options`.
       For example, if your Ember route looks like `/posts/1/comments/2` and your API route
      for the comment also looks like `/posts/1/comments/2` if you want to fetch the comment
      without fetching the post you can pass in the post to the `findRecord` call:
       ```javascript
      store.findRecord('comment', 2, { preload: { post: 1 } });
      ```
       If you have access to the post model you can also pass the model itself:
       ```javascript
      store.findRecord('post', 1).then(function (myPostModel) {
        store.findRecord('comment', 2, { post: myPostModel });
      });
      ```
       ### Reloading
       The reload behavior is configured either via the passed `options` hash or
      the result of the adapter's `shouldReloadRecord`.
       If `{ reload: true }` is passed or `adapter.shouldReloadRecord` evaluates
      to `true`, then the returned promise resolves once the adapter returns
      data, regardless if the requested record is already in the store:
       ```js
      store.push({
        data: {
          id: 1,
          type: 'post',
          revision: 1
        }
      });
       // adapter#findRecord resolves with
      // [
      //   {
      //     id: 1,
      //     type: 'post',
      //     revision: 2
      //   }
      // ]
      store.findRecord('post', 1, { reload: true }).then(function(post) {
        post.get('revision'); // 2
      });
      ```
       If no reload is indicated via the abovementioned ways, then the promise
      immediately resolves with the cached version in the store.
       ### Background Reloading
       Optionally, if `adapter.shouldBackgroundReloadRecord` evaluates to `true`,
      then a background reload is started, which updates the records' data, once
      it is available:
       ```js
      // app/adapters/post.js
      import ApplicationAdapter from "./application";
       export default ApplicationAdapter.extend({
        shouldReloadRecord(store, snapshot) {
          return false;
        },
         shouldBackgroundReloadRecord(store, snapshot) {
          return true;
        }
      });
       // ...
       store.push({
        data: {
          id: 1,
          type: 'post',
          revision: 1
        }
      });
       let blogPost = store.findRecord('post', 1).then(function(post) {
        post.get('revision'); // 1
      });
       // later, once adapter#findRecord resolved with
      // [
      //   {
      //     id: 1,
      //     type: 'post',
      //     revision: 2
      //   }
      // ]
       blogPost.get('revision'); // 2
      ```
       If you would like to force or prevent background reloading, you can set a
      boolean value for `backgroundReload` in the options object for
      `findRecord`.
       ```app/routes/post/edit.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
          return this.store.findRecord('post', params.post_id, { backgroundReload: false });
        }
      });
      ```
      If you pass an object on the `adapterOptions` property of the options
     argument it will be passed to you adapter via the snapshot
       ```app/routes/post/edit.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
          return this.store.findRecord('post', params.post_id, {
            adapterOptions: { subscribe: false }
          });
        }
      });
      ```
       ```app/adapters/post.js
      import MyCustomAdapter from './custom-adapter';
       export default MyCustomAdapter.extend({
        findRecord(store, type, id, snapshot) {
          if (snapshot.adapterOptions.subscribe) {
            // ...
          }
          // ...
        }
      });
      ```
       See [peekRecord](#method_peekRecord) to get the cached version of a record.
       ### Retrieving Related Model Records
       If you use an adapter such as Ember's default
      [`JSONAPIAdapter`](http://emberjs.com/api/data/classes/DS.JSONAPIAdapter.html)
      that supports the [JSON API specification](http://jsonapi.org/) and if your server
      endpoint supports the use of an
      ['include' query parameter](http://jsonapi.org/format/#fetching-includes),
      you can use `findRecord()` to automatically retrieve additional records related to
      the one you request by supplying an `include` parameter in the `options` object.
       For example, given a `post` model that has a `hasMany` relationship with a `comment`
      model, when we retrieve a specific post we can have the server also return that post's
      comments in the same request:
       ```app/routes/post.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
         return this.store.findRecord('post', params.post_id, { include: 'comments' });
        }
      });
       ```
      In this case, the post's comments would then be available in your template as
      `model.comments`.
       Multiple relationships can be requested using an `include` parameter consisting of a
      comma-separated list (without white-space) while nested relationships can be specified
      using a dot-separated sequence of relationship names. So to request both the post's
      comments and the authors of those comments the request would look like this:
       ```app/routes/post.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
         return this.store.findRecord('post', params.post_id, { include: 'comments,comments.author' });
        }
      });
       ```
       @since 1.13.0
      @method findRecord
      @param {String} modelName
      @param {(String|Integer)} id
      @param {Object} options
      @return {Promise} promise
    */
    findRecord: function findRecord(modelName, id, options) {
      (0, _debug.assert)('You need to pass a model name to the store\'s findRecord method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
      (0, _debug.assert)(badIdFormatAssertion, typeof id === 'string' && id.length > 0 || typeof id === 'number' && !isNaN(id));

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      var internalModel = this._internalModelForId(normalizedModelName, id);
      options = options || {};

      if (!this.hasRecordForId(normalizedModelName, id)) {
        return this._findByInternalModel(internalModel, options);
      }

      var fetchedInternalModel = this._findRecord(internalModel, options);

      return promiseRecord(fetchedInternalModel, 'DS: Store#findRecord ' + normalizedModelName + ' with id: ' + id);
    },
    _findRecord: function _findRecord(internalModel, options) {
      // Refetch if the reload option is passed
      if (options.reload) {
        return this._scheduleFetch(internalModel, options);
      }

      var snapshot = internalModel.createSnapshot(options);
      var adapter = this.adapterFor(internalModel.modelName);

      // Refetch the record if the adapter thinks the record is stale
      if (adapter.shouldReloadRecord(this, snapshot)) {
        return this._scheduleFetch(internalModel, options);
      }

      if (options.backgroundReload === false) {
        return Promise.resolve(internalModel);
      }

      // Trigger the background refetch if backgroundReload option is passed
      if (options.backgroundReload || adapter.shouldBackgroundReloadRecord(this, snapshot)) {
        this._scheduleFetch(internalModel, options);
      }

      // Return the cached record
      return Promise.resolve(internalModel);
    },
    _findByInternalModel: function _findByInternalModel(internalModel) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (options.preload) {
        internalModel.preloadData(options.preload);
      }

      var fetchedInternalModel = this._findEmptyInternalModel(internalModel, options);

      return promiseRecord(fetchedInternalModel, 'DS: Store#findRecord ' + internalModel.modelName + ' with id: ' + internalModel.id);
    },
    _findEmptyInternalModel: function _findEmptyInternalModel(internalModel, options) {
      if (internalModel.isEmpty()) {
        return this._scheduleFetch(internalModel, options);
      }

      //TODO double check about reloading
      if (internalModel.isLoading()) {
        return internalModel._loadingPromise;
      }

      return Promise.resolve(internalModel);
    },


    /**
      This method makes a series of requests to the adapter's `find` method
      and returns a promise that resolves once they are all loaded.
       @private
      @method findByIds
      @param {String} modelName
      @param {Array} ids
      @return {Promise} promise
    */
    findByIds: function findByIds(modelName, ids) {
      (0, _debug.assert)('You need to pass a model name to the store\'s findByIds method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var promises = new Array(ids.length);

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      for (var i = 0; i < ids.length; i++) {
        promises[i] = this.findRecord(normalizedModelName, ids[i]);
      }

      return (0, _promiseProxies.promiseArray)(RSVP.all(promises).then(A, null, 'DS: Store#findByIds of ' + normalizedModelName + ' complete'));
    },


    /**
      This method is called by `findRecord` if it discovers that a particular
      type/id pair hasn't been loaded yet to kick off a request to the
      adapter.
       @method _fetchRecord
      @private
      @param {InternalModel} internalModel model
      @return {Promise} promise
     */
    _fetchRecord: function _fetchRecord(internalModel, options) {
      var modelName = internalModel.modelName;
      var adapter = this.adapterFor(modelName);

      (0, _debug.assert)('You tried to find a record but you have no adapter (for ' + modelName + ')', adapter);
      (0, _debug.assert)('You tried to find a record but your adapter (for ' + modelName + ') does not implement \'findRecord\'', typeof adapter.findRecord === 'function');

      return (0, _finders._find)(adapter, this, internalModel.type, internalModel.id, internalModel, options);
    },
    _scheduleFetchMany: function _scheduleFetchMany(internalModels) {
      var fetches = new Array(internalModels.length);

      for (var i = 0; i < internalModels.length; i++) {
        fetches[i] = this._scheduleFetch(internalModels[i]);
      }

      return Promise.all(fetches);
    },
    _scheduleFetch: function _scheduleFetch(internalModel, options) {
      if (internalModel._loadingPromise) {
        return internalModel._loadingPromise;
      }

      var id = internalModel.id,
          modelName = internalModel.modelName;

      var resolver = RSVP.defer('Fetching ' + modelName + '\' with id: ' + id);
      var pendingFetchItem = {
        internalModel: internalModel,
        resolver: resolver,
        options: options
      };

      var promise = resolver.promise;

      internalModel.loadingData(promise);
      if (this._pendingFetch.size === 0) {
        emberRun.schedule('afterRender', this, this.flushAllPendingFetches);
      }

      this._pendingFetch.get(modelName).push(pendingFetchItem);

      return promise;
    },
    flushAllPendingFetches: function flushAllPendingFetches() {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }

      this._pendingFetch.forEach(this._flushPendingFetchForType, this);
      this._pendingFetch.clear();
    },
    _flushPendingFetchForType: function _flushPendingFetchForType(pendingFetchItems, modelName) {
      var store = this;
      var adapter = store.adapterFor(modelName);
      var shouldCoalesce = !!adapter.findMany && adapter.coalesceFindRequests;
      var totalItems = pendingFetchItems.length;
      var internalModels = new Array(totalItems);
      var seeking = Object.create(null);

      for (var i = 0; i < totalItems; i++) {
        var pendingItem = pendingFetchItems[i];
        var internalModel = pendingItem.internalModel;
        internalModels[i] = internalModel;
        seeking[internalModel.id] = pendingItem;
      }

      function _fetchRecord(recordResolverPair) {
        var recordFetch = store._fetchRecord(recordResolverPair.internalModel, recordResolverPair.options); // TODO adapter options

        recordResolverPair.resolver.resolve(recordFetch);
      }

      function handleFoundRecords(foundInternalModels, expectedInternalModels) {
        // resolve found records
        var found = Object.create(null);
        for (var _i = 0, l = foundInternalModels.length; _i < l; _i++) {
          var _internalModel = foundInternalModels[_i];
          var pair = seeking[_internalModel.id];
          found[_internalModel.id] = _internalModel;

          if (pair) {
            var resolver = pair.resolver;
            resolver.resolve(_internalModel);
          }
        }

        // reject missing records
        var missingInternalModels = [];

        for (var _i2 = 0, _l = expectedInternalModels.length; _i2 < _l; _i2++) {
          var _internalModel2 = expectedInternalModels[_i2];

          if (!found[_internalModel2.id]) {
            missingInternalModels.push(_internalModel2);
          }
        }

        if (missingInternalModels.length) {
          (0, _debug.warn)('Ember Data expected to find records with the following ids in the adapter response but they were missing: ' + inspect(missingInternalModels.map(function (r) {
            return r.id;
          })), false, {
            id: 'ds.store.missing-records-from-adapter'
          });
          rejectInternalModels(missingInternalModels);
        }
      }

      function rejectInternalModels(internalModels, error) {
        for (var _i3 = 0, l = internalModels.length; _i3 < l; _i3++) {
          var _internalModel3 = internalModels[_i3];
          var pair = seeking[_internalModel3.id];

          if (pair) {
            pair.resolver.reject(error || new Error('Expected: \'' + _internalModel3 + '\' to be present in the adapter provided payload, but it was not found.'));
          }
        }
      }

      if (shouldCoalesce) {
        // TODO: Improve records => snapshots => records => snapshots
        //
        // We want to provide records to all store methods and snapshots to all
        // adapter methods. To make sure we're doing that we're providing an array
        // of snapshots to adapter.groupRecordsForFindMany(), which in turn will
        // return grouped snapshots instead of grouped records.
        //
        // But since the _findMany() finder is a store method we need to get the
        // records from the grouped snapshots even though the _findMany() finder
        // will once again convert the records to snapshots for adapter.findMany()
        var snapshots = new Array(totalItems);
        for (var _i4 = 0; _i4 < totalItems; _i4++) {
          snapshots[_i4] = internalModels[_i4].createSnapshot();
        }

        var groups = adapter.groupRecordsForFindMany(this, snapshots);

        var _loop = function _loop(l, _i5) {
          var group = groups[_i5];
          var totalInGroup = groups[_i5].length;
          var ids = new Array(totalInGroup);
          var groupedInternalModels = new Array(totalInGroup);

          for (var j = 0; j < totalInGroup; j++) {
            var _internalModel4 = group[j]._internalModel;

            groupedInternalModels[j] = _internalModel4;
            ids[j] = _internalModel4.id;
          }

          if (totalInGroup > 1) {
            (0, _finders._findMany)(adapter, store, modelName, ids, groupedInternalModels).then(function (foundInternalModels) {
              handleFoundRecords(foundInternalModels, groupedInternalModels);
            }).catch(function (error) {
              rejectInternalModels(groupedInternalModels, error);
            });
          } else if (ids.length === 1) {
            var pair = seeking[groupedInternalModels[0].id];
            _fetchRecord(pair);
          } else {
            (0, _debug.assert)("You cannot return an empty array from adapter's method groupRecordsForFindMany", false);
          }
        };

        for (var _i5 = 0, l = groups.length; _i5 < l; _i5++) {
          _loop(l, _i5);
        }
      } else {
        for (var _i6 = 0; _i6 < totalItems; _i6++) {
          _fetchRecord(pendingFetchItems[_i6]);
        }
      }
    },


    /**
      Get the reference for the specified record.
       Example
       ```javascript
      let userRef = store.getReference('user', 1);
       // check if the user is loaded
      let isLoaded = userRef.value() !== null;
       // get the record of the reference (null if not yet available)
      let user = userRef.value();
       // get the identifier of the reference
      if (userRef.remoteType() === 'id') {
      let id = userRef.id();
      }
       // load user (via store.find)
      userRef.load().then(...)
       // or trigger a reload
      userRef.reload().then(...)
       // provide data for reference
      userRef.push({ id: 1, username: '@user' }).then(function(user) {
        userRef.value() === user;
      });
      ```
       @method getReference
      @param {String} modelName
      @param {String|Integer} id
      @since 2.5.0
      @return {RecordReference}
    */
    getReference: function getReference(modelName, id) {
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      return this._internalModelForId(normalizedModelName, id).recordReference;
    },


    /**
      Get a record by a given type and ID without triggering a fetch.
       This method will synchronously return the record if it is available in the store,
      otherwise it will return `null`. A record is available if it has been fetched earlier, or
      pushed manually into the store.
       _Note: This is a synchronous method and does not return a promise._
       ```js
      let post = store.peekRecord('post', 1);
       post.get('id'); // 1
      ```
       @since 1.13.0
      @method peekRecord
      @param {String} modelName
      @param {String|Integer} id
      @return {DS.Model|null} record
    */
    peekRecord: function peekRecord(modelName, id) {
      (0, _debug.assert)('You need to pass a model name to the store\'s peekRecord method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      if (this.hasRecordForId(normalizedModelName, id)) {
        return this._internalModelForId(normalizedModelName, id).getRecord();
      } else {
        return null;
      }
    },


    /**
      This method is called by the record's `reload` method.
       This method calls the adapter's `find` method, which returns a promise. When
      **that** promise resolves, `reloadRecord` will resolve the promise returned
      by the record's `reload`.
       @method reloadRecord
      @private
      @param {DS.Model} internalModel
      @return {Promise} promise
    */
    _reloadRecord: function _reloadRecord(internalModel) {
      var id = internalModel.id,
          modelName = internalModel.modelName;

      var adapter = this.adapterFor(modelName);

      (0, _debug.assert)('You cannot reload a record without an ID', id);
      (0, _debug.assert)('You tried to reload a record but you have no adapter (for ' + modelName + ')', adapter);
      (0, _debug.assert)('You tried to reload a record but your adapter does not implement \'findRecord\'', typeof adapter.findRecord === 'function' || typeof adapter.find === 'function');

      return this._scheduleFetch(internalModel);
    },


    /**
     This method returns true if a record for a given modelName and id is already
     loaded in the store. Use this function to know beforehand if a findRecord()
     will result in a request or that it will be a cache hit.
      Example
      ```javascript
     store.hasRecordForId('post', 1); // false
     store.findRecord('post', 1).then(function() {
       store.hasRecordForId('post', 1); // true
     });
     ```
       @method hasRecordForId
      @param {String} modelName
      @param {(String|Integer)} id
      @return {Boolean}
    */
    hasRecordForId: function hasRecordForId(modelName, id) {
      (0, _debug.assert)('You need to pass a model name to the store\'s hasRecordForId method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      var trueId = (0, _coerceId.default)(id);
      var internalModel = this._internalModelsFor(normalizedModelName).get(trueId);

      return !!internalModel && internalModel.isLoaded();
    },


    /**
      Returns id record for a given type and ID. If one isn't already loaded,
      it builds a new record and leaves it in the `empty` state.
       @method recordForId
      @private
      @param {String} modelName
      @param {(String|Integer)} id
      @return {DS.Model} record
    */
    recordForId: function recordForId(modelName, id) {
      (0, _debug.assert)('You need to pass a model name to the store\'s recordForId method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      return this._internalModelForId(modelName, id).getRecord();
    },
    _internalModelForId: function _internalModelForId(modelName, id) {
      var trueId = (0, _coerceId.default)(id);
      var internalModel = this._internalModelsFor(modelName).get(trueId);

      if (!internalModel) {
        internalModel = this.buildInternalModel(modelName, trueId);
      }

      return internalModel;
    },


    /**
      @method findMany
      @private
      @param {Array} internalModels
      @return {Promise} promise
    */
    findMany: function findMany(internalModels) {
      var finds = new Array(internalModels.length);

      for (var i = 0; i < internalModels.length; i++) {
        finds[i] = this._findEmptyInternalModel(internalModels[i]);
      }

      return Promise.all(finds);
    },


    /**
      If a relationship was originally populated by the adapter as a link
      (as opposed to a list of IDs), this method is called when the
      relationship is fetched.
       The link (which is usually a URL) is passed through unchanged, so the
      adapter can make whatever request it wants.
       The usual use-case is for the server to register a URL as a link, and
      then use that URL in the future to make a request for the relationship.
       @method findHasMany
      @private
      @param {InternalModel} internalModel
      @param {any} link
      @param {(Relationship)} relationship
      @return {Promise} promise
    */
    findHasMany: function findHasMany(internalModel, link, relationship) {
      var adapter = this.adapterFor(internalModel.modelName);

      (0, _debug.assert)('You tried to load a hasMany relationship but you have no adapter (for ' + internalModel.modelName + ')', adapter);
      (0, _debug.assert)('You tried to load a hasMany relationship from a specified \'link\' in the original payload but your adapter does not implement \'findHasMany\'', typeof adapter.findHasMany === 'function');

      return (0, _finders._findHasMany)(adapter, this, internalModel, link, relationship);
    },


    /**
      @method findBelongsTo
      @private
      @param {InternalModel} internalModel
      @param {any} link
      @param {Relationship} relationship
      @return {Promise} promise
    */
    findBelongsTo: function findBelongsTo(internalModel, link, relationship) {
      var adapter = this.adapterFor(internalModel.modelName);

      (0, _debug.assert)('You tried to load a belongsTo relationship but you have no adapter (for ' + internalModel.modelName + ')', adapter);
      (0, _debug.assert)('You tried to load a belongsTo relationship from a specified \'link\' in the original payload but your adapter does not implement \'findBelongsTo\'', typeof adapter.findBelongsTo === 'function');

      return (0, _finders._findBelongsTo)(adapter, this, internalModel, link, relationship);
    },


    /**
      This method delegates a query to the adapter. This is the one place where
      adapter-level semantics are exposed to the application.
       Each time this method is called a new request is made through the adapter.
       Exposing queries this way seems preferable to creating an abstract query
      language for all server-side queries, and then require all adapters to
      implement them.
       ---
       If you do something like this:
       ```javascript
      store.query('person', { page: 1 });
      ```
       The call made to the server, using a Rails backend, will look something like this:
       ```
      Started GET "/api/v1/person?page=1"
      Processing by Api::V1::PersonsController#index as HTML
      Parameters: { "page"=>"1" }
      ```
       ---
       If you do something like this:
       ```javascript
      store.query('person', { ids: [1, 2, 3] });
      ```
       The call to the server, using a Rails backend, will look something like this:
       ```
      Started GET "/api/v1/person?ids%5B%5D=1&ids%5B%5D=2&ids%5B%5D=3"
      Processing by Api::V1::PersonsController#index as HTML
      Parameters: { "ids" => ["1", "2", "3"] }
      ```
       This method returns a promise, which is resolved with an
      [`AdapterPopulatedRecordArray`](http://emberjs.com/api/data/classes/DS.AdapterPopulatedRecordArray.html)
      once the server returns.
       @since 1.13.0
      @method query
      @param {String} modelName
      @param {any} query an opaque query to be used by the adapter
      @return {Promise} promise
    */
    query: function query(modelName, _query2) {
      (0, _debug.assert)('You need to pass a model name to the store\'s query method', isPresent(modelName));
      (0, _debug.assert)('You need to pass a query hash to the store\'s query method', _query2);
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);
      return this._query(normalizedModelName, _query2);
    },
    _query: function _query(modelName, query, array) {
      (0, _debug.assert)('You need to pass a model name to the store\'s query method', isPresent(modelName));
      (0, _debug.assert)('You need to pass a query hash to the store\'s query method', query);
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      array = array || this.recordArrayManager.createAdapterPopulatedRecordArray(modelName, query);

      var adapter = this.adapterFor(modelName);


      (0, _debug.assert)('You tried to load a query but you have no adapter (for ' + modelName + ')', adapter);
      (0, _debug.assert)('You tried to load a query but your adapter does not implement \'query\'', typeof adapter.query === 'function');

      var pA = (0, _promiseProxies.promiseArray)((0, _finders._query)(adapter, this, modelName, query, array));

      return pA;
    },


    /**
      This method makes a request for one record, where the `id` is not known
      beforehand (if the `id` is known, use [`findRecord`](#method_findRecord)
      instead).
       This method can be used when it is certain that the server will return a
      single object for the primary data.
       Let's assume our API provides an endpoint for the currently logged in user
      via:
       ```
      // GET /api/current_user
      {
        user: {
          id: 1234,
          username: 'admin'
        }
      }
      ```
       Since the specific `id` of the `user` is not known beforehand, we can use
      `queryRecord` to get the user:
       ```javascript
      store.queryRecord('user', {}).then(function(user) {
        let username = user.get('username');
        console.log(`Currently logged in as ${username}`);
      });
      ```
       The request is made through the adapters' `queryRecord`:
       ```app/adapters/user.js
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        queryRecord(modelName, query) {
          return Ember.$.getJSON('/api/current_user');
        }
      });
      ```
       Note: the primary use case for `store.queryRecord` is when a single record
      is queried and the `id` is not known beforehand. In all other cases
      `store.query` and using the first item of the array is likely the preferred
      way:
       ```
      // GET /users?username=unique
      {
        data: [{
          id: 1234,
          type: 'user',
          attributes: {
            username: "unique"
          }
        }]
      }
      ```
       ```javascript
      store.query('user', { username: 'unique' }).then(function(users) {
        return users.get('firstObject');
      }).then(function(user) {
        let id = user.get('id');
      });
      ```
       This method returns a promise, which resolves with the found record.
       If the adapter returns no data for the primary data of the payload, then
      `queryRecord` resolves with `null`:
       ```
      // GET /users?username=unique
      {
        data: null
      }
      ```
       ```javascript
      store.queryRecord('user', { username: 'unique' }).then(function(user) {
        console.log(user); // null
      });
      ```
       @since 1.13.0
      @method queryRecord
      @param {String} modelName
      @param {any} query an opaque query to be used by the adapter
      @return {Promise} promise which resolves with the found record or `null`
    */
    queryRecord: function queryRecord(modelName, query) {
      (0, _debug.assert)('You need to pass a model name to the store\'s queryRecord method', isPresent(modelName));
      (0, _debug.assert)('You need to pass a query hash to the store\'s queryRecord method', query);
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      var adapter = this.adapterFor(normalizedModelName);

      (0, _debug.assert)('You tried to make a query but you have no adapter (for ' + normalizedModelName + ')', adapter);
      (0, _debug.assert)('You tried to make a query but your adapter does not implement \'queryRecord\'', typeof adapter.queryRecord === 'function');

      return (0, _promiseProxies.promiseObject)((0, _finders._queryRecord)(adapter, this, modelName, query).then(function (internalModel) {
        // the promise returned by store.queryRecord is expected to resolve with
        // an instance of DS.Model
        if (internalModel) {
          return internalModel.getRecord();
        }

        return null;
      }));
    },


    /**
      `findAll` asks the adapter's `findAll` method to find the records for the
      given type, and returns a promise which will resolve with all records of
      this type present in the store, even if the adapter only returns a subset
      of them.
       ```app/routes/authors.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
          return this.store.findAll('author');
        }
      });
      ```
       _When_ the returned promise resolves depends on the reload behavior,
      configured via the passed `options` hash and the result of the adapter's
      `shouldReloadAll` method.
       ### Reloading
       If `{ reload: true }` is passed or `adapter.shouldReloadAll` evaluates to
      `true`, then the returned promise resolves once the adapter returns data,
      regardless if there are already records in the store:
       ```js
      store.push({
        data: {
          id: 'first',
          type: 'author'
        }
      });
       // adapter#findAll resolves with
      // [
      //   {
      //     id: 'second',
      //     type: 'author'
      //   }
      // ]
      store.findAll('author', { reload: true }).then(function(authors) {
        authors.getEach('id'); // ['first', 'second']
      });
      ```
       If no reload is indicated via the abovementioned ways, then the promise
      immediately resolves with all the records currently loaded in the store.
       ### Background Reloading
       Optionally, if `adapter.shouldBackgroundReloadAll` evaluates to `true`,
      then a background reload is started. Once this resolves, the array with
      which the promise resolves, is updated automatically so it contains all the
      records in the store:
       ```js
      // app/adapters/application.js
      export default DS.Adapter.extend({
        shouldReloadAll(store, snapshotsArray) {
          return false;
        },
         shouldBackgroundReloadAll(store, snapshotsArray) {
          return true;
        }
      });
       // ...
       store.push({
        data: {
          id: 'first',
          type: 'author'
        }
      });
       let allAuthors;
      store.findAll('author').then(function(authors) {
        authors.getEach('id'); // ['first']
         allAuthors = authors;
      });
       // later, once adapter#findAll resolved with
      // [
      //   {
      //     id: 'second',
      //     type: 'author'
      //   }
      // ]
       allAuthors.getEach('id'); // ['first', 'second']
      ```
       If you would like to force or prevent background reloading, you can set a
      boolean value for `backgroundReload` in the options object for
      `findAll`.
       ```app/routes/post/edit.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model() {
          return this.store.findAll('post', { backgroundReload: false });
        }
      });
      ```
       If you pass an object on the `adapterOptions` property of the options
      argument it will be passed to you adapter via the `snapshotRecordArray`
       ```app/routes/posts.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model(params) {
          return this.store.findAll('post', {
            adapterOptions: { subscribe: false }
          });
        }
      });
      ```
       ```app/adapters/post.js
      import MyCustomAdapter from './custom-adapter';
       export default MyCustomAdapter.extend({
        findAll(store, type, sinceToken, snapshotRecordArray) {
          if (snapshotRecordArray.adapterOptions.subscribe) {
            // ...
          }
          // ...
        }
      });
      ```
       See [peekAll](#method_peekAll) to get an array of current records in the
      store, without waiting until a reload is finished.
       ### Retrieving Related Model Records
       If you use an adapter such as Ember's default
      [`JSONAPIAdapter`](http://emberjs.com/api/data/classes/DS.JSONAPIAdapter.html)
      that supports the [JSON API specification](http://jsonapi.org/) and if your server
      endpoint supports the use of an
      ['include' query parameter](http://jsonapi.org/format/#fetching-includes),
      you can use `findAll()` to automatically retrieve additional records related to
      those requested by supplying an `include` parameter in the `options` object.
       For example, given a `post` model that has a `hasMany` relationship with a `comment`
      model, when we retrieve all of the post records we can have the server also return
      all of the posts' comments in the same request:
       ```app/routes/posts.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model() {
         return this.store.findAll('post', { include: 'comments' });
        }
      });
       ```
      Multiple relationships can be requested using an `include` parameter consisting of a
      comma-separated list (without white-space) while nested relationships can be specified
      using a dot-separated sequence of relationship names. So to request both the posts'
      comments and the authors of those comments the request would look like this:
       ```app/routes/posts.js
      import Ember from 'ember';
       export default Ember.Route.extend({
        model() {
         return this.store.findAll('post', { include: 'comments,comments.author' });
        }
      });
       ```
       See [query](#method_query) to only get a subset of records from the server.
       @since 1.13.0
      @method findAll
      @param {String} modelName
      @param {Object} options
      @return {Promise} promise
    */
    findAll: function findAll(modelName, options) {
      (0, _debug.assert)('You need to pass a model name to the store\'s findAll method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);
      var fetch = this._fetchAll(normalizedModelName, this.peekAll(normalizedModelName), options);

      return fetch;
    },


    /**
      @method _fetchAll
      @private
      @param {DS.Model} modelName
      @param {DS.RecordArray} array
      @return {Promise} promise
    */
    _fetchAll: function _fetchAll(modelName, array) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var adapter = this.adapterFor(modelName);
      var sinceToken = this._internalModelsFor(modelName).metadata.since;

      (0, _debug.assert)('You tried to load all records but you have no adapter (for ' + modelName + ')', adapter);
      (0, _debug.assert)('You tried to load all records but your adapter does not implement \'findAll\'', typeof adapter.findAll === 'function');

      if (options.reload) {
        set(array, 'isUpdating', true);
        return (0, _promiseProxies.promiseArray)((0, _finders._findAll)(adapter, this, modelName, sinceToken, options));
      }

      var snapshotArray = array._createSnapshot(options);

      if (adapter.shouldReloadAll(this, snapshotArray)) {
        set(array, 'isUpdating', true);
        return (0, _promiseProxies.promiseArray)((0, _finders._findAll)(adapter, this, modelName, sinceToken, options));
      }

      if (options.backgroundReload === false) {
        return (0, _promiseProxies.promiseArray)(Promise.resolve(array));
      }

      if (options.backgroundReload || adapter.shouldBackgroundReloadAll(this, snapshotArray)) {
        set(array, 'isUpdating', true);
        (0, _finders._findAll)(adapter, this, modelName, sinceToken, options);
      }

      return (0, _promiseProxies.promiseArray)(Promise.resolve(array));
    },


    /**
      @method didUpdateAll
      @param {String} modelName
      @private
    */
    didUpdateAll: function didUpdateAll(modelName) {
      var liveRecordArray = this.recordArrayManager.liveRecordArrayFor(modelName);

      set(liveRecordArray, 'isUpdating', false);
    },


    /**
      This method returns a filtered array that contains all of the
      known records for a given type in the store.
       Note that because it's just a filter, the result will contain any
      locally created records of the type, however, it will not make a
      request to the backend to retrieve additional records. If you
      would like to request all the records from the backend please use
      [store.findAll](#method_findAll).
       Also note that multiple calls to `peekAll` for a given type will always
      return the same `RecordArray`.
       Example
       ```javascript
      let localPosts = store.peekAll('post');
      ```
       @since 1.13.0
      @method peekAll
      @param {String} modelName
      @return {DS.RecordArray}
    */
    peekAll: function peekAll(modelName) {
      (0, _debug.assert)('You need to pass a model name to the store\'s peekAll method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);
      var liveRecordArray = this.recordArrayManager.liveRecordArrayFor(normalizedModelName);

      this.recordArrayManager.syncLiveRecordArray(liveRecordArray, normalizedModelName);

      return liveRecordArray;
    },


    /**
     This method unloads all records in the store.
     It schedules unloading to happen during the next run loop.
      Optionally you can pass a type which unload all records for a given type.
      ```javascript
     store.unloadAll();
     store.unloadAll('post');
     ```
      @method unloadAll
     @param {String} modelName
    */
    unloadAll: function unloadAll(modelName) {
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, !modelName || typeof modelName === 'string');

      if (arguments.length === 0) {
        this._identityMap.clear();
      } else {
        var normalizedModelName = (0, _normalizeModelName.default)(modelName);
        this._internalModelsFor(normalizedModelName).clear();
      }
    },


    /**
      Takes a type and filter function, and returns a live RecordArray that
      remains up to date as new records are loaded into the store or created
      locally.
       The filter function takes a materialized record, and returns true
      if the record should be included in the filter and false if it should
      not.
       Example
       ```javascript
      store.filter('post', function(post) {
        return post.get('unread');
      });
      ```
       The filter function is called once on all records for the type when
      it is created, and then once on each newly loaded or created record.
       If any of a record's properties change, or if it changes state, the
      filter function will be invoked again to determine whether it should
      still be in the array.
       Optionally you can pass a query, which is the equivalent of calling
      [query](#method_query) with that same query, to fetch additional records
      from the server. The results returned by the server could then appear
      in the filter if they match the filter function.
       The query itself is not used to filter records, it's only sent to your
      server for you to be able to do server-side filtering. The filter
      function will be applied on the returned results regardless.
       Example
       ```javascript
      store.filter('post', { unread: true }, function(post) {
        return post.get('unread');
      }).then(function(unreadPosts) {
        unreadPosts.get('length'); // 5
        let unreadPost = unreadPosts.objectAt(0);
        unreadPost.set('unread', false);
        unreadPosts.get('length'); // 4
      });
      ```
       @method filter
      @private
      @param {String} modelName
      @param {Object} query optional query
      @param {Function} filter
      @return {DS.PromiseArray}
      @deprecated
    */
    filter: function filter(modelName, query, _filter) {
      (0, _debug.assert)('You need to pass a model name to the store\'s filter method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      if (!ENV.ENABLE_DS_FILTER) {
        (0, _debug.assert)('The filter API has been moved to a plugin. To enable store.filter using an environment flag, or to use an alternative, you can visit the ember-data-filter addon page. https://github.com/ember-data/ember-data-filter', false);
      }

      var promise = void 0;
      var length = arguments.length;
      var array = void 0;
      var hasQuery = length === 3;

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      // allow an optional server query
      if (hasQuery) {
        promise = this.query(normalizedModelName, query);
      } else if (arguments.length === 2) {
        _filter = query;
      }

      if (hasQuery) {
        array = this.recordArrayManager.createFilteredRecordArray(normalizedModelName, _filter, query);
      } else {
        array = this.recordArrayManager.createFilteredRecordArray(normalizedModelName, _filter);
      }

      promise = promise || Promise.resolve(array);

      return (0, _promiseProxies.promiseArray)(promise.then(function () {
        return array;
      }, null, 'DS: Store#filter of ' + normalizedModelName));
    },


    /**
      This method has been deprecated and is an alias for store.hasRecordForId, which should
      be used instead.
       @deprecated
      @method recordIsLoaded
      @param {String} modelName
      @param {string} id
      @return {boolean}
    */
    recordIsLoaded: function recordIsLoaded(modelName, id) {
      (0, _debug.deprecate)('Use of recordIsLoaded is deprecated, use hasRecordForId instead.', false, {
        id: 'ds.store.recordIsLoaded',
        until: '3.0'
      });
      return this.hasRecordForId(modelName, id);
    },


    // ..............
    // . PERSISTING .
    // ..............

    /**
      This method is called by `record.save`, and gets passed a
      resolver for the promise that `record.save` returns.
       It schedules saving to happen at the end of the run loop.
       @method scheduleSave
      @private
      @param {InternalModel} internalModel
      @param {Resolver} resolver
      @param {Object} options
    */
    scheduleSave: function scheduleSave(internalModel, resolver, options) {
      var snapshot = internalModel.createSnapshot(options);
      internalModel.flushChangedAttributes();
      internalModel.adapterWillCommit();
      this._pendingSave.push({
        snapshot: snapshot,
        resolver: resolver
      });
      emberRun.once(this, this.flushPendingSave);
    },


    /**
      This method is called at the end of the run loop, and
      flushes any records passed into `scheduleSave`
       @method flushPendingSave
      @private
    */
    flushPendingSave: function flushPendingSave() {
      var pending = this._pendingSave.slice();
      this._pendingSave = [];

      for (var i = 0, j = pending.length; i < j; i++) {
        var pendingItem = pending[i];
        var snapshot = pendingItem.snapshot;
        var resolver = pendingItem.resolver;
        var internalModel = snapshot._internalModel;
        var adapter = this.adapterFor(internalModel.modelName);
        var operation = void 0;

        if (internalModel.currentState.stateName === 'root.deleted.saved') {
          return resolver.resolve();
        } else if (internalModel.isNew()) {
          operation = 'createRecord';
        } else if (internalModel.isDeleted()) {
          operation = 'deleteRecord';
        } else {
          operation = 'updateRecord';
        }

        resolver.resolve(_commit(adapter, this, operation, snapshot));
      }
    },


    /**
      This method is called once the promise returned by an
      adapter's `createRecord`, `updateRecord` or `deleteRecord`
      is resolved.
       If the data provides a server-generated ID, it will
      update the record and the store's indexes.
       @method didSaveRecord
      @private
      @param {InternalModel} internalModel the in-flight internal model
      @param {Object} data optional data (see above)
    */
    didSaveRecord: function didSaveRecord(internalModel, dataArg) {
      var data = void 0;
      if (dataArg) {
        data = dataArg.data;
      }
      if (data) {
        // normalize relationship IDs into records
        this.updateId(internalModel, data);
        this._setupRelationshipsForModel(internalModel, data);
      } else {
        (0, _debug.assert)('Your ' + internalModel.modelName + ' record was saved to the server, but the response does not have an id and no id has been set client side. Records must have ids. Please update the server response to provide an id in the response or generate the id on the client side either before saving the record or while normalizing the response.', internalModel.id);
      }

      //We first make sure the primary data has been updated
      //TODO try to move notification to the user to the end of the runloop
      internalModel.adapterDidCommit(data);
    },


    /**
      This method is called once the promise returned by an
      adapter's `createRecord`, `updateRecord` or `deleteRecord`
      is rejected with a `DS.InvalidError`.
       @method recordWasInvalid
      @private
      @param {InternalModel} internalModel
      @param {Object} errors
    */
    recordWasInvalid: function recordWasInvalid(internalModel, errors) {
      internalModel.adapterDidInvalidate(errors);
    },


    /**
      This method is called once the promise returned by an
      adapter's `createRecord`, `updateRecord` or `deleteRecord`
      is rejected (with anything other than a `DS.InvalidError`).
       @method recordWasError
      @private
      @param {InternalModel} internalModel
      @param {Error} error
    */
    recordWasError: function recordWasError(internalModel, error) {
      internalModel.adapterDidError(error);
    },


    /**
      When an adapter's `createRecord`, `updateRecord` or `deleteRecord`
      resolves with data, this method extracts the ID from the supplied
      data.
       @method updateId
      @private
      @param {InternalModel} internalModel
      @param {Object} data
    */
    updateId: function updateId(internalModel, data) {
      var oldId = internalModel.id;
      var modelName = internalModel.modelName;
      var id = (0, _coerceId.default)(data.id);

      // ID absolutely can't be missing if the oldID is empty (missing Id in response for a new record)
      (0, _debug.assert)('\'' + modelName + '\' was saved to the server, but the response does not have an id and your record does not either.', !(id === null && oldId === null));

      // ID absolutely can't be different than oldID if oldID is not null
      (0, _debug.assert)('\'' + modelName + ':' + oldId + '\' was saved to the server, but the response returned the new id \'' + id + '\'. The store cannot assign a new id to a record that already has an id.', !(oldId !== null && id !== oldId));

      // ID can be null if oldID is not null (altered ID in response for a record)
      // however, this is more than likely a developer error.
      if (oldId !== null && id === null) {
        (0, _debug.warn)('Your ' + modelName + ' record was saved to the server, but the response does not have an id.', !(oldId !== null && id === null));
        return;
      }

      this._internalModelsFor(internalModel.modelName).set(id, internalModel);

      internalModel.setId(id);
    },


    /**
      Returns a map of IDs to client IDs for a given modelName.
       @method _internalModelsFor
      @private
      @param {String} modelName
      @return {Object} recordMap
    */
    _internalModelsFor: function _internalModelsFor(modelName) {
      return this._identityMap.retrieve(modelName);
    },


    // ................
    // . LOADING DATA .
    // ................

    /**
      This internal method is used by `push`.
       @method _load
      @private
      @param {Object} data
    */
    _load: function _load(data) {
      var internalModel = this._internalModelForId(data.type, data.id);

      internalModel.setupData(data);

      this.recordArrayManager.recordDidChange(internalModel);

      return internalModel;
    },


    /*
      In case someone defined a relationship to a mixin, for example:
      ```
        let Comment = DS.Model.extend({
          owner: belongsTo('commentable'. { polymorphic: true })
        });
        let Commentable = Ember.Mixin.create({
          comments: hasMany('comment')
        });
      ```
      we want to look up a Commentable class which has all the necessary
      relationship metadata. Thus, we look up the mixin and create a mock
      DS.Model, so we can access the relationship CPs of the mixin (`comments`)
      in this case
       @private
    */
    _modelForMixin: function _modelForMixin(normalizedModelName) {
      // container.registry = 2.1
      // container._registry = 1.11 - 2.0
      // container = < 1.11
      var owner = (0, _utils.getOwner)(this);
      var mixin = void 0;

      if (owner.factoryFor) {
        var MaybeMixin = owner.factoryFor('mixin:' + normalizedModelName);
        mixin = MaybeMixin && MaybeMixin.class;
      } else {
        mixin = owner._lookupFactory('mixin:' + normalizedModelName);
      }

      if (mixin) {
        var ModelForMixin = _model.default.extend(mixin);
        ModelForMixin.reopenClass({
          __isMixin: true,
          __mixin: mixin
        });

        //Cache the class as a model
        owner.register('model:' + normalizedModelName, ModelForMixin);
      }

      return this.modelFactoryFor(normalizedModelName);
    },


    /**
      Returns the model class for the particular `modelName`.
       The class of a model might be useful if you want to get a list of all the
      relationship names of the model, see
      [`relationshipNames`](http://emberjs.com/api/data/classes/DS.Model.html#property_relationshipNames)
      for example.
       @method modelFor
      @param {String} modelName
      @return {DS.Model}
    */
    modelFor: function modelFor(modelName) {
      (0, _debug.assert)('You need to pass a model name to the store\'s modelFor method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      return this._modelFor(normalizedModelName);
    },


    /*
      @private
     */
    _modelFor: function _modelFor(modelName) {
      var maybeFactory = this._modelFactoryFor(modelName);
      // for factorFor factory/class split
      return maybeFactory.class ? maybeFactory.class : maybeFactory;
    },
    _modelFactoryFor: function _modelFactoryFor(modelName) {
      var factory = this._modelFactoryCache[modelName];

      if (!factory) {
        factory = this.modelFactoryFor(modelName);

        if (!factory) {
          //Support looking up mixins as base types for polymorphic relationships
          factory = this._modelForMixin(modelName);
        }
        if (!factory) {
          throw new EmberError('No model was found for \'' + modelName + '\'');
        }

        // interopt with the future
        var klass = (0, _utils.getOwner)(this).factoryFor ? factory.class : factory;

        (0, _debug.assert)('\'' + inspect(klass) + '\' does not appear to be an ember-data model', klass.isModel);

        // TODO: deprecate this
        klass.modelName = klass.modelName || modelName;

        this._modelFactoryCache[modelName] = factory;
      }

      return factory;
    },


    /*
     @private
     */
    modelFactoryFor: function modelFactoryFor(modelName) {
      (0, _debug.assert)('You need to pass a model name to the store\'s modelFactoryFor method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');

      var normalizedModelName = (0, _normalizeModelName.default)(modelName);
      var owner = (0, _utils.getOwner)(this);

      if (owner.factoryFor) {
        return owner.factoryFor('model:' + normalizedModelName);
      } else {
        return owner._lookupFactory('model:' + normalizedModelName);
      }
    },


    /**
      Push some data for a given type into the store.
       This method expects normalized [JSON API](http://jsonapi.org/) document. This means you have to follow [JSON API specification](http://jsonapi.org/format/) with few minor adjustments:
      - record's `type` should always be in singular, dasherized form
      - members (properties) should be camelCased
       [Your primary data should be wrapped inside `data` property](http://jsonapi.org/format/#document-top-level):
       ```js
      store.push({
        data: {
          // primary data for single record of type `Person`
          id: '1',
          type: 'person',
          attributes: {
            firstName: 'Daniel',
            lastName: 'Kmak'
          }
        }
      });
      ```
       [Demo.](http://ember-twiddle.com/fb99f18cd3b4d3e2a4c7)
       `data` property can also hold an array (of records):
       ```js
      store.push({
        data: [
          // an array of records
          {
            id: '1',
            type: 'person',
            attributes: {
              firstName: 'Daniel',
              lastName: 'Kmak'
            }
          },
          {
            id: '2',
            type: 'person',
            attributes: {
              firstName: 'Tom',
              lastName: 'Dale'
            }
          }
        ]
      });
      ```
       [Demo.](http://ember-twiddle.com/69cdbeaa3702159dc355)
       There are some typical properties for `JSONAPI` payload:
      * `id` - mandatory, unique record's key
      * `type` - mandatory string which matches `model`'s dasherized name in singular form
      * `attributes` - object which holds data for record attributes - `DS.attr`'s declared in model
      * `relationships` - object which must contain any of the following properties under each relationships' respective key (example path is `relationships.achievements.data`):
        - [`links`](http://jsonapi.org/format/#document-links)
        - [`data`](http://jsonapi.org/format/#document-resource-object-linkage) - place for primary data
        - [`meta`](http://jsonapi.org/format/#document-meta) - object which contains meta-information about relationship
       For this model:
       ```app/models/person.js
      import DS from 'ember-data';
       export default DS.Model.extend({
        firstName: DS.attr('string'),
        lastName: DS.attr('string'),
         children: DS.hasMany('person')
      });
      ```
       To represent the children as IDs:
       ```js
      {
        data: {
          id: '1',
          type: 'person',
          attributes: {
            firstName: 'Tom',
            lastName: 'Dale'
          },
          relationships: {
            children: {
              data: [
                {
                  id: '2',
                  type: 'person'
                },
                {
                  id: '3',
                  type: 'person'
                },
                {
                  id: '4',
                  type: 'person'
                }
              ]
            }
          }
        }
      }
      ```
       [Demo.](http://ember-twiddle.com/343e1735e034091f5bde)
       To represent the children relationship as a URL:
       ```js
      {
        data: {
          id: '1',
          type: 'person',
          attributes: {
            firstName: 'Tom',
            lastName: 'Dale'
          },
          relationships: {
            children: {
              links: {
                related: '/people/1/children'
              }
            }
          }
        }
      }
      ```
       If you're streaming data or implementing an adapter, make sure
      that you have converted the incoming data into this form. The
      store's [normalize](#method_normalize) method is a convenience
      helper for converting a json payload into the form Ember Data
      expects.
       ```js
      store.push(store.normalize('person', data));
      ```
       This method can be used both to push in brand new
      records, as well as to update existing records.
       @method push
      @param {Object} data
      @return {DS.Model|Array} the record(s) that was created or
        updated.
    */
    push: function push(data) {
      var pushed = this._push(data);

      if (Array.isArray(pushed)) {
        var records = pushed.map(function (internalModel) {
          return internalModel.getRecord();
        });

        return records;
      }

      if (pushed === null) {
        return null;
      }

      var record = pushed.getRecord();

      return record;
    },


    /*
      Push some data in the form of a json-api document into the store,
      without creating materialized records.
       @method _push
      @private
      @param {Object} jsonApiDoc
      @return {DS.InternalModel|Array<DS.InternalModel>} pushed InternalModel(s)
    */
    _push: function _push(jsonApiDoc) {
      var _this = this;

      var internalModelOrModels = this._backburner.join(function () {
        var included = jsonApiDoc.included;
        var i = void 0,
            length = void 0;

        if (included) {
          for (i = 0, length = included.length; i < length; i++) {
            _this._pushInternalModel(included[i]);
          }
        }

        if (Array.isArray(jsonApiDoc.data)) {
          length = jsonApiDoc.data.length;
          var internalModels = new Array(length);

          for (i = 0; i < length; i++) {
            internalModels[i] = _this._pushInternalModel(jsonApiDoc.data[i]);
          }
          return internalModels;
        }

        if (jsonApiDoc.data === null) {
          return null;
        }

        (0, _debug.assert)('Expected an object in the \'data\' property in a call to \'push\' for ' + jsonApiDoc.type + ', but was ' + typeOf(jsonApiDoc.data), typeOf(jsonApiDoc.data) === 'object');

        return _this._pushInternalModel(jsonApiDoc.data);
      });

      return internalModelOrModels;
    },
    _hasModelFor: function _hasModelFor(modelName) {
      var owner = (0, _utils.getOwner)(this);
      modelName = (0, _normalizeModelName.default)(modelName);

      if (owner.factoryFor) {
        return !!owner.factoryFor('model:' + modelName);
      } else {
        return !!owner._lookupFactory('model:' + modelName);
      }
    },
    _pushInternalModel: function _pushInternalModel(data) {
      var _this2 = this;

      var modelName = data.type;
      (0, _debug.assert)('You must include an \'id\' for ' + modelName + ' in an object passed to \'push\'', data.id !== null && data.id !== undefined && data.id !== '');
      (0, _debug.assert)('You tried to push data with a type \'' + modelName + '\' but no model could be found with that name.', this._hasModelFor(modelName));

      (0, _debug.runInDebug)(function () {
        // If ENV.DS_WARN_ON_UNKNOWN_KEYS is set to true and the payload
        // contains unknown attributes or relationships, log a warning.

        if (ENV.DS_WARN_ON_UNKNOWN_KEYS) {
          var modelClass = _this2._modelFor(modelName);

          // Check unknown attributes
          var unknownAttributes = Object.keys(data.attributes || {}).filter(function (key) {
            return !get(modelClass, 'fields').has(key);
          });
          var unknownAttributesMessage = 'The payload for \'' + modelName + '\' contains these unknown attributes: ' + unknownAttributes + '. Make sure they\'ve been defined in your model.';
          (0, _debug.warn)(unknownAttributesMessage, unknownAttributes.length === 0, { id: 'ds.store.unknown-keys-in-payload' });

          // Check unknown relationships
          var unknownRelationships = Object.keys(data.relationships || {}).filter(function (key) {
            return !get(modelClass, 'fields').has(key);
          });
          var unknownRelationshipsMessage = 'The payload for \'' + modelName + '\' contains these unknown relationships: ' + unknownRelationships + '. Make sure they\'ve been defined in your model.';
          (0, _debug.warn)(unknownRelationshipsMessage, unknownRelationships.length === 0, { id: 'ds.store.unknown-keys-in-payload' });
        }
      });

      // Actually load the record into the store.
      var internalModel = this._load(data);

      this._setupRelationshipsForModel(internalModel, data);

      return internalModel;
    },
    _setupRelationshipsForModel: function _setupRelationshipsForModel(internalModel, data) {
      if (this._pushedInternalModels.push(internalModel, data) !== 2) {
        return;
      }

      this._backburner.schedule('normalizeRelationships', this, this._setupRelationships);
    },
    _setupRelationships: function _setupRelationships() {
      var pushed = this._pushedInternalModels;

      for (var i = 0, l = pushed.length; i < l; i += 2) {
        // This will convert relationships specified as IDs into DS.Model instances
        // (possibly unloaded) and also create the data structures used to track
        // relationships.
        var internalModel = pushed[i];
        var data = pushed[i + 1];
        setupRelationships(this, internalModel, data);
      }

      pushed.length = 0;
    },


    /**
      Push some raw data into the store.
       This method can be used both to push in brand new
      records, as well as to update existing records. You
      can push in more than one type of object at once.
      All objects should be in the format expected by the
      serializer.
       ```app/serializers/application.js
      import DS from 'ember-data';
       export default DS.ActiveModelSerializer;
      ```
       ```js
      let pushData = {
        posts: [
          { id: 1, post_title: "Great post", comment_ids: [2] }
        ],
        comments: [
          { id: 2, comment_body: "Insightful comment" }
        ]
      }
       store.pushPayload(pushData);
      ```
       By default, the data will be deserialized using a default
      serializer (the application serializer if it exists).
       Alternatively, `pushPayload` will accept a model type which
      will determine which serializer will process the payload.
       ```app/serializers/application.js
      import DS from 'ember-data';
       export default DS.ActiveModelSerializer;
      ```
       ```app/serializers/post.js
      import DS from 'ember-data';
       export default DS.JSONSerializer;
      ```
       ```js
      store.pushPayload('comment', pushData); // Will use the application serializer
      store.pushPayload('post', pushData); // Will use the post serializer
      ```
       @method pushPayload
      @param {String} modelName Optionally, a model type used to determine which serializer will be used
      @param {Object} inputPayload
    */
    pushPayload: function pushPayload(modelName, inputPayload) {
      var serializer = void 0;
      var payload = void 0;
      if (!inputPayload) {
        payload = modelName;
        serializer = defaultSerializer(this);
        (0, _debug.assert)('You cannot use \'store#pushPayload\' without a modelName unless your default serializer defines \'pushPayload\'', typeof serializer.pushPayload === 'function');
      } else {
        payload = inputPayload;
        (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
        var normalizedModelName = (0, _normalizeModelName.default)(modelName);
        serializer = this.serializerFor(normalizedModelName);
      }
      if ((0, _features.default)('ds-pushpayload-return')) {
        return serializer.pushPayload(this, payload);
      } else {
        serializer.pushPayload(this, payload);
      }
    },


    /**
      `normalize` converts a json payload into the normalized form that
      [push](#method_push) expects.
       Example
       ```js
      socket.on('message', function(message) {
        let modelName = message.model;
        let data = message.data;
        store.push(store.normalize(modelName, data));
      });
      ```
       @method normalize
      @param {String} modelName The name of the model type for this payload
      @param {Object} payload
      @return {Object} The normalized payload
    */
    normalize: function normalize(modelName, payload) {
      (0, _debug.assert)('You need to pass a model name to the store\'s normalize method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store methods has been removed. Please pass a dasherized string instead of ' + inspect(modelName), typeof modelName === 'string');
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);
      var serializer = this.serializerFor(normalizedModelName);
      var model = this._modelFor(normalizedModelName);
      return serializer.normalize(model, payload);
    },


    /**
      Build a brand new record for a given type, ID, and
      initial data.
       @method buildRecord
      @private
      @param {String} modelName
      @param {String} id
      @param {Object} data
      @return {InternalModel} internal model
    */
    buildInternalModel: function buildInternalModel(modelName, id, data) {

      (0, _debug.assert)('You can no longer pass a modelClass as the first argument to store.buildInternalModel. Pass modelName instead.', typeof modelName === 'string');

      var recordMap = this._internalModelsFor(modelName);

      (0, _debug.assert)('The id ' + id + ' has already been used with another record for modelClass \'' + modelName + '\'.', !id || !recordMap.get(id));

      // lookupFactory should really return an object that creates
      // instances with the injections applied
      var internalModel = new _internalModel5.default(modelName, id, this, data);

      recordMap.add(internalModel, id);

      return internalModel;
    },


    //Called by the state machine to notify the store that the record is ready to be interacted with
    recordWasLoaded: function recordWasLoaded(record) {
      this.recordArrayManager.recordWasLoaded(record);
    },


    // ...............
    // . DESTRUCTION .
    // ...............

    /**
      When a record is destroyed, this un-indexes it and
      removes it from any record arrays so it can be GCed.
       @method _removeFromIdMap
      @private
      @param {InternalModel} internalModel
    */
    _removeFromIdMap: function _removeFromIdMap(internalModel) {
      var recordMap = this._internalModelsFor(internalModel.modelName);
      var id = internalModel.id;

      recordMap.remove(internalModel, id);
    },


    // ......................
    // . PER-TYPE ADAPTERS
    // ......................

    /**
      Returns an instance of the adapter for a given type. For
      example, `adapterFor('person')` will return an instance of
      `App.PersonAdapter`.
       If no `App.PersonAdapter` is found, this method will look
      for an `App.ApplicationAdapter` (the default adapter for
      your entire application).
       If no `App.ApplicationAdapter` is found, it will return
      the value of the `defaultAdapter`.
       @method adapterFor
      @public
      @param {String} modelName
      @return DS.Adapter
    */
    adapterFor: function adapterFor(modelName) {
      (0, _debug.assert)('You need to pass a model name to the store\'s adapterFor method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store.adapterFor has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      return this._instanceCache.get('adapter', normalizedModelName);
    },


    // ..............................
    // . RECORD CHANGE NOTIFICATION .
    // ..............................

    /**
      Returns an instance of the serializer for a given type. For
      example, `serializerFor('person')` will return an instance of
      `App.PersonSerializer`.
       If no `App.PersonSerializer` is found, this method will look
      for an `App.ApplicationSerializer` (the default serializer for
      your entire application).
       if no `App.ApplicationSerializer` is found, it will attempt
      to get the `defaultSerializer` from the `PersonAdapter`
      (`adapterFor('person')`).
       If a serializer cannot be found on the adapter, it will fall back
      to an instance of `DS.JSONSerializer`.
       @method serializerFor
      @public
      @param {String} modelName the record to serialize
      @return {DS.Serializer}
    */
    serializerFor: function serializerFor(modelName) {
      (0, _debug.assert)('You need to pass a model name to the store\'s serializerFor method', isPresent(modelName));
      (0, _debug.assert)('Passing classes to store.serializerFor has been removed. Please pass a dasherized string instead of ' + modelName, typeof modelName === 'string');
      var normalizedModelName = (0, _normalizeModelName.default)(modelName);

      return this._instanceCache.get('serializer', normalizedModelName);
    },
    lookupAdapter: function lookupAdapter(name) {
      (0, _debug.deprecate)('Use of lookupAdapter is deprecated, use adapterFor instead.', false, {
        id: 'ds.store.lookupAdapter',
        until: '3.0'
      });
      return this.adapterFor(name);
    },
    lookupSerializer: function lookupSerializer(name) {
      (0, _debug.deprecate)('Use of lookupSerializer is deprecated, use serializerFor instead.', false, {
        id: 'ds.store.lookupSerializer',
        until: '3.0'
      });
      return this.serializerFor(name);
    },
    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);
      this._pushedInternalModels = null;
      this.recordArrayManager.destroy();
      this._instanceCache.destroy();

      this.unloadAll();
    },
    _updateRelationshipState: function _updateRelationshipState(relationship) {
      var _this3 = this;

      if (this._updatedRelationships.push(relationship) !== 1) {
        return;
      }

      this._backburner.join(function () {
        _this3._backburner.schedule('syncRelationships', _this3, _this3._flushUpdatedRelationships);
      });
    },
    _flushUpdatedRelationships: function _flushUpdatedRelationships() {
      var updated = this._updatedRelationships;

      for (var i = 0, l = updated.length; i < l; i++) {
        updated[i].flushCanonical();
      }

      updated.length = 0;
    },
    _updateInternalModel: function _updateInternalModel(internalModel) {
      if (this._updatedInternalModels.push(internalModel) !== 1) {
        return;
      }

      emberRun.schedule('actions', this, this._flushUpdatedInternalModels);
    },
    _flushUpdatedInternalModels: function _flushUpdatedInternalModels() {
      var updated = this._updatedInternalModels;

      for (var i = 0, l = updated.length; i < l; i++) {
        updated[i]._triggerDeferredTriggers();
      }

      updated.length = 0;
    },
    _pushResourceIdentifier: function _pushResourceIdentifier(relationship, resourceIdentifier) {
      if (isNone(resourceIdentifier)) {
        return;
      }

      (0, _debug.assert)('A ' + relationship.record.modelName + ' record was pushed into the store with the value of ' + relationship.key + ' being ' + inspect(resourceIdentifier) + ', but ' + relationship.key + ' is a belongsTo relationship so the value must not be an array. You should probably check your data payload or serializer.', !Array.isArray(resourceIdentifier));

      //TODO:Better asserts
      return this._internalModelForId(resourceIdentifier.type, resourceIdentifier.id);
    },
    _pushResourceIdentifiers: function _pushResourceIdentifiers(relationship, resourceIdentifiers) {
      if (isNone(resourceIdentifiers)) {
        return;
      }

      (0, _debug.assert)('A ' + relationship.record.modelName + ' record was pushed into the store with the value of ' + relationship.key + ' being \'' + inspect(resourceIdentifiers) + '\', but ' + relationship.key + ' is a hasMany relationship so the value must be an array. You should probably check your data payload or serializer.', Array.isArray(resourceIdentifiers));

      var _internalModels = new Array(resourceIdentifiers.length);
      for (var i = 0; i < resourceIdentifiers.length; i++) {
        _internalModels[i] = this._pushResourceIdentifier(relationship, resourceIdentifiers[i]);
      }
      return _internalModels;
    }
  });

  // Delegation to the adapter and promise management


  function defaultSerializer(store) {
    return store.serializerFor('application');
  }

  function _commit(adapter, store, operation, snapshot) {
    var internalModel = snapshot._internalModel;
    var modelName = snapshot.modelName;
    var modelClass = store._modelFor(modelName);
    (0, _debug.assert)('You tried to update a record but you have no adapter (for ' + modelName + ')', adapter);
    (0, _debug.assert)('You tried to update a record but your adapter (for ' + modelName + ') does not implement \'' + operation + '\'', typeof adapter[operation] === 'function');
    var promise = adapter[operation](store, modelClass, snapshot);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, modelName);
    var label = 'DS: Extract and notify about ' + operation + ' completion of ' + internalModel;

    (0, _debug.assert)('Your adapter\'s \'' + operation + '\' method must return a value, but it returned \'undefined\'', promise !== undefined);

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, internalModel));

    return promise.then(function (adapterPayload) {
      /*
        Note to future spelunkers hoping to optimize.
        We rely on this `run` to create a run loop if needed
        that `store._push` and `store.didSaveRecord` will both share.
         We use `join` because it is often the case that we
        have an outer run loop available still from the first
        call to `store._push`;
       */
      store._backburner.join(function () {
        var payload = void 0,
            data = void 0;
        if (adapterPayload) {
          payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, snapshot.id, operation);
          if (payload.included) {
            store._push({ data: null, included: payload.included });
          }
          data = payload.data;
        }
        store.didSaveRecord(internalModel, { data: data });
      });

      return internalModel;
    }, function (error) {
      if (error instanceof _errors.InvalidError) {
        var errors = serializer.extractErrors(store, modelClass, error, snapshot.id);

        store.recordWasInvalid(internalModel, errors);
      } else {
        store.recordWasError(internalModel, error);
      }

      throw error;
    }, label);
  }

  function setupRelationships(store, internalModel, data) {
    if (!data.relationships) {
      return;
    }

    internalModel.type.eachRelationship(function (key, descriptor) {
      if (!data.relationships[key]) {
        return;
      }

      var relationship = internalModel._relationships.get(key);
      relationship.push(data.relationships[key]);
    });
  }

  exports.Store = Store;
  exports.default = Store;
});
define('ember-data/-private/system/store/common', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._bind = _bind;
  exports._guard = _guard;
  exports._objectIsAlive = _objectIsAlive;
  var get = _ember.default.get;
  function _bind(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return function () {
      return fn.apply(undefined, args);
    };
  }

  function _guard(promise, test) {
    var guarded = promise['finally'](function () {
      if (!test()) {
        guarded._subscribers.length = 0;
      }
    });

    return guarded;
  }

  function _objectIsAlive(object) {
    return !(get(object, "isDestroyed") || get(object, "isDestroying"));
  }
});
define('ember-data/-private/system/store/container-instance-cache', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var set = _ember.default.set;

  var ContainerInstanceCache = function () {
    function ContainerInstanceCache(owner, store) {
      _classCallCheck(this, ContainerInstanceCache);

      this.isDestroying = false;
      this.isDestroyed = false;
      this._owner = owner;
      this._store = store;
      this._namespaces = {
        adapter: Object.create(null),
        serializer: Object.create(null)
      };
    }

    ContainerInstanceCache.prototype.get = function get(namespace, preferredKey) {
      var cache = this._namespaces[namespace];

      if (cache[preferredKey]) {
        return cache[preferredKey];
      }

      var preferredLookupKey = namespace + ':' + preferredKey;

      var instance = this._instanceFor(preferredLookupKey) || this._findInstance(namespace, this._fallbacksFor(namespace, preferredKey));
      if (instance) {
        cache[preferredKey] = instance;
        set(instance, 'store', this._store);
      }

      return cache[preferredKey];
    };

    ContainerInstanceCache.prototype._fallbacksFor = function _fallbacksFor(namespace, preferredKey) {
      if (namespace === 'adapter') {
        return ['application', this._store.get('adapter'), '-json-api'];
      }

      // serializer
      return ['application', this.get('adapter', preferredKey).get('defaultSerializer'), '-default'];
    };

    ContainerInstanceCache.prototype._findInstance = function _findInstance(namespace, fallbacks) {
      var cache = this._namespaces[namespace];

      for (var i = 0, length = fallbacks.length; i < length; i++) {
        var fallback = fallbacks[i];

        if (cache[fallback]) {
          return cache[fallback];
        }

        var lookupKey = namespace + ':' + fallback;
        var instance = this._instanceFor(lookupKey);

        if (instance) {
          cache[fallback] = instance;
          return instance;
        }
      }
    };

    ContainerInstanceCache.prototype._instanceFor = function _instanceFor(key) {
      return this._owner.lookup(key);
    };

    ContainerInstanceCache.prototype.destroyCache = function destroyCache(cache) {
      var cacheEntries = Object.keys(cache);

      for (var i = 0, length = cacheEntries.length; i < length; i++) {
        var cacheKey = cacheEntries[i];
        var cacheEntry = cache[cacheKey];
        if (cacheEntry) {
          cacheEntry.destroy();
        }
      }
    };

    ContainerInstanceCache.prototype.destroy = function destroy() {
      this.isDestroying = true;
      this.destroyCache(this._namespaces.adapter);
      this.destroyCache(this._namespaces.serializer);
      this.isDestroyed = true;
    };

    ContainerInstanceCache.prototype.toString = function toString() {
      return 'ContainerInstanceCache';
    };

    return ContainerInstanceCache;
  }();

  exports.default = ContainerInstanceCache;
});
define("ember-data/-private/system/store/finders", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/system/store/common", "ember-data/-private/system/store/serializer-response", "ember-data/-private/system/store/serializers"], function (exports, _ember, _debug, _common, _serializerResponse, _serializers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._find = _find;
  exports._findMany = _findMany;
  exports._findHasMany = _findHasMany;
  exports._findBelongsTo = _findBelongsTo;
  exports._findAll = _findAll;
  exports._query = _query;
  exports._queryRecord = _queryRecord;
  var Promise = _ember.default.RSVP.Promise;


  function payloadIsNotBlank(adapterPayload) {
    if (Array.isArray(adapterPayload)) {
      return true;
    } else {
      return Object.keys(adapterPayload || {}).length;
    }
  }

  function _find(adapter, store, modelClass, id, internalModel, options) {
    var snapshot = internalModel.createSnapshot(options);
    var modelName = internalModel.modelName;

    var promise = adapter.findRecord(store, modelClass, id, snapshot);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, modelName);
    var label = "DS: Handle Adapter#findRecord of '" + modelName + "' with id: '" + id + "'";

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));

    return promise.then(function (adapterPayload) {
      (0, _debug.assert)("You made a 'findRecord' request for a '" + modelName + "' with id '" + id + "', but the adapter's response did not have any data", payloadIsNotBlank(adapterPayload));
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, id, 'findRecord');
      (0, _debug.assert)("Ember Data expected the primary data returned from a 'findRecord' response to be an object but instead it found an array.", !Array.isArray(payload.data));

      (0, _debug.warn)("You requested a record of type '" + modelName + "' with id '" + id + "' but the adapter returned a payload with primary data having an id of '" + payload.data.id + "'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead http://emberjs.com/api/data/classes/DS.Store.html#method_queryRecord", payload.data.id === id, {
        id: 'ds.store.findRecord.id-mismatch'
      });

      return store._push(payload);
    }, function (error) {
      internalModel.notFound();
      if (internalModel.isEmpty()) {
        internalModel.unloadRecord();
      }

      throw error;
    }, "DS: Extract payload of '" + modelName + "'");
  }

  function _findMany(adapter, store, modelName, ids, internalModels) {
    var snapshots = _ember.default.A(internalModels).invoke('createSnapshot');
    var modelClass = store.modelFor(modelName); // `adapter.findMany` gets the modelClass still
    var promise = adapter.findMany(store, modelClass, ids, snapshots);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, modelName);
    var label = "DS: Handle Adapter#findMany of '" + modelName + "'";

    if (promise === undefined) {
      throw new Error('adapter.findMany returned undefined, this was very likely a mistake');
    }

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));

    return promise.then(function (adapterPayload) {
      (0, _debug.assert)("You made a 'findMany' request for '" + modelName + "' records with ids '[" + ids + "]', but the adapter's response did not have any data", payloadIsNotBlank(adapterPayload));
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, null, 'findMany');
      return store._push(payload);
    }, null, "DS: Extract payload of " + modelName);
  }

  function _findHasMany(adapter, store, internalModel, link, relationship) {
    var snapshot = internalModel.createSnapshot();
    var modelClass = store.modelFor(relationship.type);
    var promise = adapter.findHasMany(store, snapshot, link, relationship);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, relationship.type);
    var label = "DS: Handle Adapter#findHasMany of '" + internalModel.modelName + "' : '" + relationship.type + "'";

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, internalModel));

    return promise.then(function (adapterPayload) {
      (0, _debug.assert)("You made a 'findHasMany' request for a " + internalModel.modelName + "'s '" + relationship.key + "' relationship, using link '" + link + "' , but the adapter's response did not have any data", payloadIsNotBlank(adapterPayload));
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, null, 'findHasMany');
      var internalModelArray = store._push(payload);

      internalModelArray.meta = payload.meta;
      return internalModelArray;
    }, null, "DS: Extract payload of '" + internalModel.modelName + "' : hasMany '" + relationship.type + "'");
  }

  function _findBelongsTo(adapter, store, internalModel, link, relationship) {
    var snapshot = internalModel.createSnapshot();
    var modelClass = store.modelFor(relationship.type);
    var promise = adapter.findBelongsTo(store, snapshot, link, relationship);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, relationship.type);
    var label = "DS: Handle Adapter#findBelongsTo of " + internalModel.modelName + " : " + relationship.type;

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, internalModel));

    return promise.then(function (adapterPayload) {
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, null, 'findBelongsTo');

      if (!payload.data) {
        return null;
      }

      return store._push(payload);
    }, null, "DS: Extract payload of " + internalModel.modelName + " : " + relationship.type);
  }

  function _findAll(adapter, store, modelName, sinceToken, options) {
    var modelClass = store.modelFor(modelName); // adapter.findAll depends on the class
    var recordArray = store.peekAll(modelName);
    var snapshotArray = recordArray._createSnapshot(options);
    var promise = adapter.findAll(store, modelClass, sinceToken, snapshotArray);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, modelName);
    var label = "DS: Handle Adapter#findAll of " + modelClass;

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));

    return promise.then(function (adapterPayload) {
      (0, _debug.assert)("You made a 'findAll' request for '" + modelName + "' records, but the adapter's response did not have any data", payloadIsNotBlank(adapterPayload));
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, null, 'findAll');

      store._push(payload);
      store.didUpdateAll(modelName);

      return store.peekAll(modelName);
    }, null, 'DS: Extract payload of findAll ${modelName}');
  }

  function _query(adapter, store, modelName, query, recordArray) {
    var modelClass = store.modelFor(modelName); // adapter.query needs the class
    var promise = adapter.query(store, modelClass, query, recordArray);

    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, modelName);

    var label = "DS: Handle Adapter#query of " + modelClass;

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));

    return promise.then(function (adapterPayload) {
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, null, 'query');

      var internalModels = store._push(payload);

      (0, _debug.assert)('The response to store.query is expected to be an array but it was a single record. Please wrap your response in an array or use `store.queryRecord` to query for a single record.', Array.isArray(internalModels));
      recordArray._setInternalModels(internalModels, payload);

      return recordArray;
    }, null, "DS: Extract payload of query " + modelName);
  }

  function _queryRecord(adapter, store, modelName, query) {
    var modelClass = store.modelFor(modelName); // adapter.queryRecord needs the class
    var promise = adapter.queryRecord(store, modelClass, query);
    var serializer = (0, _serializers.serializerForAdapter)(store, adapter, modelName);
    var label = "DS: Handle Adapter#queryRecord of " + modelName;

    promise = Promise.resolve(promise, label);
    promise = (0, _common._guard)(promise, (0, _common._bind)(_common._objectIsAlive, store));

    return promise.then(function (adapterPayload) {
      var payload = (0, _serializerResponse.normalizeResponseHelper)(serializer, store, modelClass, adapterPayload, null, 'queryRecord');

      (0, _debug.assert)("Expected the primary data returned by the serializer for a 'queryRecord' response to be a single object or null but instead it was an array.", !Array.isArray(payload.data), {
        id: 'ds.store.queryRecord-array-response'
      });

      return store._push(payload);
    }, null, "DS: Extract payload of queryRecord " + modelName);
  }
});
define('ember-data/-private/system/store/serializer-response', ['exports', 'ember', 'ember-data/-private/debug'], function (exports, _ember, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.validateDocumentStructure = validateDocumentStructure;
  exports.normalizeResponseHelper = normalizeResponseHelper;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /*
    This is a helper method that validates a JSON API top-level document
  
    The format of a document is described here:
    http://jsonapi.org/format/#document-top-level
  
    @method validateDocumentStructure
    @param {Object} doc JSON API document
    @return {array} An array of errors found in the document structure
  */
  function validateDocumentStructure(doc) {
    var errors = [];
    if (!doc || (typeof doc === 'undefined' ? 'undefined' : _typeof(doc)) !== 'object') {
      errors.push('Top level of a JSON API document must be an object');
    } else {
      if (!('data' in doc) && !('errors' in doc) && !('meta' in doc)) {
        errors.push('One or more of the following keys must be present: "data", "errors", "meta".');
      } else {
        if ('data' in doc && 'errors' in doc) {
          errors.push('Top level keys "errors" and "data" cannot both be present in a JSON API document');
        }
      }
      if ('data' in doc) {
        if (!(doc.data === null || Array.isArray(doc.data) || _typeof(doc.data) === 'object')) {
          errors.push('data must be null, an object, or an array');
        }
      }
      if ('meta' in doc) {
        if (_typeof(doc.meta) !== 'object') {
          errors.push('meta must be an object');
        }
      }
      if ('errors' in doc) {
        if (!Array.isArray(doc.errors)) {
          errors.push('errors must be an array');
        }
      }
      if ('links' in doc) {
        if (_typeof(doc.links) !== 'object') {
          errors.push('links must be an object');
        }
      }
      if ('jsonapi' in doc) {
        if (_typeof(doc.jsonapi) !== 'object') {
          errors.push('jsonapi must be an object');
        }
      }
      if ('included' in doc) {
        if (_typeof(doc.included) !== 'object') {
          errors.push('included must be an array');
        }
      }
    }

    return errors;
  }

  /*
    This is a helper method that always returns a JSON-API Document.
  
    @method normalizeResponseHelper
    @param {DS.Serializer} serializer
    @param {DS.Store} store
    @param {subclass of DS.Model} modelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object} JSON-API Document
  */
  function normalizeResponseHelper(serializer, store, modelClass, payload, id, requestType) {
    var normalizedResponse = serializer.normalizeResponse(store, modelClass, payload, id, requestType);
    var validationErrors = [];
    (0, _debug.runInDebug)(function () {
      validationErrors = validateDocumentStructure(normalizedResponse);
    });
    (0, _debug.assert)('normalizeResponse must return a valid JSON API document:\n\t* ' + validationErrors.join('\n\t* '), _ember.default.isEmpty(validationErrors));

    return normalizedResponse;
  }
});
define("ember-data/-private/system/store/serializers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.serializerForAdapter = serializerForAdapter;
  function serializerForAdapter(store, adapter, modelName) {
    var serializer = adapter.serializer;

    if (serializer === undefined) {
      serializer = store.serializerFor(modelName);
    }

    if (serializer === null || serializer === undefined) {
      serializer = {
        extract: function extract(store, type, payload) {
          return payload;
        }
      };
    }

    return serializer;
  }
});
define("ember-data/-private/transforms", ["exports", "ember-data/transform", "ember-data/-private/transforms/number", "ember-data/-private/transforms/date", "ember-data/-private/transforms/string", "ember-data/-private/transforms/boolean"], function (exports, _transform, _number, _date, _string, _boolean) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BooleanTransform = exports.StringTransform = exports.DateTransform = exports.NumberTransform = exports.Transform = undefined;
  exports.Transform = _transform.default;
  exports.NumberTransform = _number.default;
  exports.DateTransform = _date.default;
  exports.StringTransform = _string.default;
  exports.BooleanTransform = _boolean.default;
});
define("ember-data/-private/transforms/boolean", ["exports", "ember", "ember-data/transform"], function (exports, _ember, _transform) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var isNone = _ember.default.isNone;
  exports.default = _transform.default.extend({
    deserialize: function deserialize(serialized, options) {
      var type = typeof serialized === "undefined" ? "undefined" : _typeof(serialized);

      if (isNone(serialized) && options.allowNull === true) {
        return null;
      }

      if (type === "boolean") {
        return serialized;
      } else if (type === "string") {
        return serialized.match(/^true$|^t$|^1$/i) !== null;
      } else if (type === "number") {
        return serialized === 1;
      } else {
        return false;
      }
    },
    serialize: function serialize(deserialized, options) {
      if (isNone(deserialized) && options.allowNull === true) {
        return null;
      }

      return Boolean(deserialized);
    }
  });
});
define("ember-data/-private/transforms/date", ["exports", "ember-data/-private/ext/date", "ember-data/transform"], function (exports, _date, _transform) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  exports.default = _transform.default.extend({
    deserialize: function deserialize(serialized) {
      var type = typeof serialized === "undefined" ? "undefined" : _typeof(serialized);

      if (type === "string") {
        return new Date((0, _date.parseDate)(serialized));
      } else if (type === "number") {
        return new Date(serialized);
      } else if (serialized === null || serialized === undefined) {
        // if the value is null return null
        // if the value is not present in the data return undefined
        return serialized;
      } else {
        return null;
      }
    },
    serialize: function serialize(date) {
      if (date instanceof Date && !isNaN(date)) {
        return date.toISOString();
      } else {
        return null;
      }
    }
  });
});
define("ember-data/-private/transforms/number", ["exports", "ember", "ember-data/transform"], function (exports, _ember, _transform) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var empty = _ember.default.isEmpty;

  function isNumber(value) {
    return value === value && value !== Infinity && value !== -Infinity;
  }

  /**
    The `DS.NumberTransform` class is used to serialize and deserialize
    numeric attributes on Ember Data record objects. This transform is
    used when `number` is passed as the type parameter to the
    [DS.attr](../../data#method_attr) function.
  
    Usage
  
    ```app/models/score.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      value: DS.attr('number'),
      player: DS.belongsTo('player'),
      date: DS.attr('date')
    });
    ```
  
    @class NumberTransform
    @extends DS.Transform
    @namespace DS
   */
  exports.default = _transform.default.extend({
    deserialize: function deserialize(serialized) {
      var transformed = void 0;

      if (empty(serialized)) {
        return null;
      } else {
        transformed = Number(serialized);

        return isNumber(transformed) ? transformed : null;
      }
    },
    serialize: function serialize(deserialized) {
      var transformed = void 0;

      if (empty(deserialized)) {
        return null;
      } else {
        transformed = Number(deserialized);

        return isNumber(transformed) ? transformed : null;
      }
    }
  });
});
define("ember-data/-private/transforms/string", ["exports", "ember", "ember-data/transform"], function (exports, _ember, _transform) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var none = _ember.default.isNone;

  /**
    The `DS.StringTransform` class is used to serialize and deserialize
    string attributes on Ember Data record objects. This transform is
    used when `string` is passed as the type parameter to the
    [DS.attr](../../data#method_attr) function.
  
    Usage
  
    ```app/models/user.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      isAdmin: DS.attr('boolean'),
      name: DS.attr('string'),
      email: DS.attr('string')
    });
    ```
  
    @class StringTransform
    @extends DS.Transform
    @namespace DS
   */
  exports.default = _transform.default.extend({
    deserialize: function deserialize(serialized) {
      return none(serialized) ? null : String(serialized);
    },
    serialize: function serialize(deserialized) {
      return none(deserialized) ? null : String(deserialized);
    }
  });
});
define('ember-data/-private/utils', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getOwner = exports.modelHasAttributeOrRelationshipNamedType = undefined;


  var get = _ember.default.get;

  /*
    Check if the passed model has a `type` attribute or a relationship named `type`.
  
    @method modelHasAttributeOrRelationshipNamedType
    @param modelClass
   */
  function modelHasAttributeOrRelationshipNamedType(modelClass) {
    return get(modelClass, 'attributes').has('type') || get(modelClass, 'relationshipsByName').has('type');
  }

  /*
    ember-container-inject-owner is a new feature in Ember 2.3 that finally provides a public
    API for looking items up.  This function serves as a super simple polyfill to avoid
    triggering deprecations.
   */
  function getOwner(context) {
    var owner = void 0;

    if (_ember.default.getOwner) {
      owner = _ember.default.getOwner(context);
    } else if (context.container) {
      owner = context.container;
    }

    if (owner && owner.lookupFactory && !owner._lookupFactory) {
      // `owner` is a container, we are just making this work
      owner._lookupFactory = owner.lookupFactory;
      owner.register = function () {
        var registry = owner.registry || owner._registry || owner;

        return registry.register.apply(registry, arguments);
      };
    }

    return owner;
  }

  exports.modelHasAttributeOrRelationshipNamedType = modelHasAttributeOrRelationshipNamedType;
  exports.getOwner = getOwner;
});
define('ember-data/-private/utils/parse-response-headers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = parseResponseHeaders;
  var CLRF = '\r\n';

  function parseResponseHeaders(headersString) {
    var headers = Object.create(null);

    if (!headersString) {
      return headers;
    }

    var headerPairs = headersString.split(CLRF);

    headerPairs.forEach(function (header) {
      var _header$split = header.split(':'),
          field = _header$split[0],
          value = _header$split.slice(1);

      field = field.trim();
      value = value.join(':').trim();

      if (value) {
        headers[field] = value;
      }
    });

    return headers;
  }
});
define('ember-data/adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Object.extend({

    /**
      If you would like your adapter to use a custom serializer you can
      set the `defaultSerializer` property to be the name of the custom
      serializer.
       Note the `defaultSerializer` serializer has a lower priority than
      a model specific serializer (i.e. `PostSerializer`) or the
      `application` serializer.
       ```app/adapters/django.js
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        defaultSerializer: 'django'
      });
      ```
       @property defaultSerializer
      @type {String}
    */
    defaultSerializer: '-default',

    /**
      The `findRecord()` method is invoked when the store is asked for a record that
      has not previously been loaded. In response to `findRecord()` being called, you
      should query your persistence layer for a record with the given ID. The `findRecord`
      method should return a promise that will resolve to a JavaScript object that will be
      normalized by the serializer.
       Here is an example `findRecord` implementation:
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        findRecord(store, type, id, snapshot) {
          return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.getJSON(`/${type.modelName}/${id}`).then(function(data) {
              resolve(data);
            }, function(jqXHR) {
              reject(jqXHR);
            });
          });
        }
      });
      ```
       @method findRecord
      @param {DS.Store} store
      @param {DS.Model} type
      @param {String} id
      @param {DS.Snapshot} snapshot
      @return {Promise} promise
    */
    findRecord: null,

    /**
      The `findAll()` method is used to retrieve all records for a given type.
       Example
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        findAll(store, type, sinceToken) {
          let query = { since: sinceToken };
           return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.getJSON(`/${type.modelName}`, query).then(function(data) {
              resolve(data);
            }, function(jqXHR) {
              reject(jqXHR);
            });
          });
        }
      });
      ```
       @method findAll
      @param {DS.Store} store
      @param {DS.Model} type
      @param {String} sinceToken
      @param {DS.SnapshotRecordArray} snapshotRecordArray
      @return {Promise} promise
    */
    findAll: null,

    /**
      This method is called when you call `query` on the store.
       Example
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        query(store, type, query) {
          return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.getJSON(`/${type.modelName}`, query).then(function(data) {
              resolve(data);
            }, function(jqXHR) {
              reject(jqXHR);
            });
          });
        }
      });
      ```
       @method query
      @param {DS.Store} store
      @param {DS.Model} type
      @param {Object} query
      @param {DS.AdapterPopulatedRecordArray} recordArray
      @return {Promise} promise
    */
    query: null,

    /**
      The `queryRecord()` method is invoked when the store is asked for a single
      record through a query object.
       In response to `queryRecord()` being called, you should always fetch fresh
      data. Once found, you can asynchronously call the store's `push()` method
      to push the record into the store.
       Here is an example `queryRecord` implementation:
       Example
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend(DS.BuildURLMixin, {
        queryRecord(store, type, query) {
          return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.getJSON(`/${type.modelName}`, query).then(function(data) {
              resolve(data);
            }, function(jqXHR) {
              reject(jqXHR);
            });
          });
        }
      });
      ```
       @method queryRecord
      @param {DS.Store} store
      @param {subclass of DS.Model} type
      @param {Object} query
      @return {Promise} promise
    */
    queryRecord: null,

    /**
      If the globally unique IDs for your records should be generated on the client,
      implement the `generateIdForRecord()` method. This method will be invoked
      each time you create a new record, and the value returned from it will be
      assigned to the record's `primaryKey`.
       Most traditional REST-like HTTP APIs will not use this method. Instead, the ID
      of the record will be set by the server, and your adapter will update the store
      with the new ID when it calls `didCreateRecord()`. Only implement this method if
      you intend to generate record IDs on the client-side.
       The `generateIdForRecord()` method will be invoked with the requesting store as
      the first parameter and the newly created record as the second parameter:
       ```javascript
      import DS from 'ember-data';
      import { v4 } from 'uuid';
       export default DS.Adapter.extend({
        generateIdForRecord(store, inputProperties) {
          return v4();
        }
      });
      ```
       @method generateIdForRecord
      @param {DS.Store} store
      @param {DS.Model} type   the DS.Model class of the record
      @param {Object} inputProperties a hash of properties to set on the
        newly created record.
      @return {(String|Number)} id
    */
    generateIdForRecord: null,

    /**
      Proxies to the serializer's `serialize` method.
       Example
       ```app/adapters/application.js
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        createRecord(store, type, snapshot) {
          let data = this.serialize(snapshot, { includeId: true });
          let url = `/${type.modelName}`;
           // ...
        }
      });
      ```
       @method serialize
      @param {DS.Snapshot} snapshot
      @param {Object}   options
      @return {Object} serialized snapshot
    */
    serialize: function serialize(snapshot, options) {
      return snapshot.serialize(options);
    },


    /**
      Implement this method in a subclass to handle the creation of
      new records.
       Serializes the record and sends it to the server.
       Example
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        createRecord(store, type, snapshot) {
          let data = this.serialize(snapshot, { includeId: true });
           return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
              type: 'POST',
              url: `/${type.modelName}`,
              dataType: 'json',
              data: data
            }).then(function(data) {
              Ember.run(null, resolve, data);
            }, function(jqXHR) {
              jqXHR.then = null; // tame jQuery's ill mannered promises
              Ember.run(null, reject, jqXHR);
            });
          });
        }
      });
      ```
       @method createRecord
      @param {DS.Store} store
      @param {DS.Model} type   the DS.Model class of the record
      @param {DS.Snapshot} snapshot
      @return {Promise} promise
    */
    createRecord: null,

    /**
      Implement this method in a subclass to handle the updating of
      a record.
       Serializes the record update and sends it to the server.
       The updateRecord method is expected to return a promise that will
      resolve with the serialized record. This allows the backend to
      inform the Ember Data store the current state of this record after
      the update. If it is not possible to return a serialized record
      the updateRecord promise can also resolve with `undefined` and the
      Ember Data store will assume all of the updates were successfully
      applied on the backend.
       Example
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        updateRecord(store, type, snapshot) {
          let data = this.serialize(snapshot, { includeId: true });
          let id = snapshot.id;
           return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
              type: 'PUT',
              url: `/${type.modelName}/${id}`,
              dataType: 'json',
              data: data
            }).then(function(data) {
              Ember.run(null, resolve, data);
            }, function(jqXHR) {
              jqXHR.then = null; // tame jQuery's ill mannered promises
              Ember.run(null, reject, jqXHR);
            });
          });
        }
      });
      ```
       @method updateRecord
      @param {DS.Store} store
      @param {DS.Model} type   the DS.Model class of the record
      @param {DS.Snapshot} snapshot
      @return {Promise} promise
    */
    updateRecord: null,

    /**
      Implement this method in a subclass to handle the deletion of
      a record.
       Sends a delete request for the record to the server.
       Example
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        deleteRecord(store, type, snapshot) {
          let data = this.serialize(snapshot, { includeId: true });
          let id = snapshot.id;
           return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
              type: 'DELETE',
              url: `/${type.modelName}/${id}`,
              dataType: 'json',
              data: data
            }).then(function(data) {
              Ember.run(null, resolve, data);
            }, function(jqXHR) {
              jqXHR.then = null; // tame jQuery's ill mannered promises
              Ember.run(null, reject, jqXHR);
            });
          });
        }
      });
      ```
       @method deleteRecord
      @param {DS.Store} store
      @param {DS.Model} type   the DS.Model class of the record
      @param {DS.Snapshot} snapshot
      @return {Promise} promise
    */
    deleteRecord: null,

    /**
      By default the store will try to coalesce all `fetchRecord` calls within the same runloop
      into as few requests as possible by calling groupRecordsForFindMany and passing it into a findMany call.
      You can opt out of this behaviour by either not implementing the findMany hook or by setting
      coalesceFindRequests to false.
       @property coalesceFindRequests
      @type {boolean}
    */
    coalesceFindRequests: true,

    /**
      The store will call `findMany` instead of multiple `findRecord`
      requests to find multiple records at once if coalesceFindRequests
      is true.
       ```app/adapters/application.js
      import Ember from 'ember';
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        findMany(store, type, ids, snapshots) {
          return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
              type: 'GET',
              url: `/${type.modelName}/`,
              dataType: 'json',
              data: { filter: { id: ids.join(',') } }
            }).then(function(data) {
              Ember.run(null, resolve, data);
            }, function(jqXHR) {
              jqXHR.then = null; // tame jQuery's ill mannered promises
              Ember.run(null, reject, jqXHR);
            });
          });
        }
      });
      ```
       @method findMany
      @param {DS.Store} store
      @param {DS.Model} type   the DS.Model class of the records
      @param {Array}    ids
      @param {Array} snapshots
      @return {Promise} promise
    */
    findMany: null,

    /**
      Organize records into groups, each of which is to be passed to separate
      calls to `findMany`.
       For example, if your api has nested URLs that depend on the parent, you will
      want to group records by their parent.
       The default implementation returns the records as a single group.
       @method groupRecordsForFindMany
      @param {DS.Store} store
      @param {Array} snapshots
      @return {Array}  an array of arrays of records, each of which is to be
                        loaded separately by `findMany`.
    */
    groupRecordsForFindMany: function groupRecordsForFindMany(store, snapshots) {
      return [snapshots];
    },


    /**
      This method is used by the store to determine if the store should
      reload a record from the adapter when a record is requested by
      `store.findRecord`.
       If this method returns `true`, the store will re-fetch a record from
      the adapter. If this method returns `false`, the store will resolve
      immediately using the cached record.
       For example, if you are building an events ticketing system, in which users
      can only reserve tickets for 20 minutes at a time, and want to ensure that
      in each route you have data that is no more than 20 minutes old you could
      write:
       ```javascript
      shouldReloadRecord(store, ticketSnapshot) {
        let lastAccessedAt = ticketSnapshot.attr('lastAccessedAt');
        let timeDiff = moment().diff(lastAccessedAt, 'minutes');
         if (timeDiff > 20) {
          return true;
        } else {
          return false;
        }
      }
      ```
       This method would ensure that whenever you do `store.findRecord('ticket',
      id)` you will always get a ticket that is no more than 20 minutes old. In
      case the cached version is more than 20 minutes old, `findRecord` will not
      resolve until you fetched the latest version.
       By default this hook returns `false`, as most UIs should not block user
      interactions while waiting on data update.
       Note that, with default settings, `shouldBackgroundReloadRecord` will always
      re-fetch the records in the background even if `shouldReloadRecord` returns
      `false`. You can override `shouldBackgroundReloadRecord` if this does not
      suit your use case.
       @since 1.13.0
      @method shouldReloadRecord
      @param {DS.Store} store
      @param {DS.Snapshot} snapshot
      @return {Boolean}
    */
    shouldReloadRecord: function shouldReloadRecord(store, snapshot) {
      return false;
    },


    /**
      This method is used by the store to determine if the store should
      reload all records from the adapter when records are requested by
      `store.findAll`.
       If this method returns `true`, the store will re-fetch all records from
      the adapter. If this method returns `false`, the store will resolve
      immediately using the cached records.
       For example, if you are building an events ticketing system, in which users
      can only reserve tickets for 20 minutes at a time, and want to ensure that
      in each route you have data that is no more than 20 minutes old you could
      write:
       ```javascript
      shouldReloadAll(store, snapshotArray) {
        let snapshots = snapshotArray.snapshots();
         return snapshots.any((ticketSnapshot) => {
          let lastAccessedAt = ticketSnapshot.attr('lastAccessedAt');
          let timeDiff = moment().diff(lastAccessedAt, 'minutes');
           if (timeDiff > 20) {
            return true;
          } else {
            return false;
          }
        });
      }
      ```
       This method would ensure that whenever you do `store.findAll('ticket')` you
      will always get a list of tickets that are no more than 20 minutes old. In
      case a cached version is more than 20 minutes old, `findAll` will not
      resolve until you fetched the latest versions.
       By default this methods returns `true` if the passed `snapshotRecordArray`
      is empty (meaning that there are no records locally available yet),
      otherwise it returns `false`.
       Note that, with default settings, `shouldBackgroundReloadAll` will always
      re-fetch all the records in the background even if `shouldReloadAll` returns
      `false`. You can override `shouldBackgroundReloadAll` if this does not suit
      your use case.
       @since 1.13.0
      @method shouldReloadAll
      @param {DS.Store} store
      @param {DS.SnapshotRecordArray} snapshotRecordArray
      @return {Boolean}
    */
    shouldReloadAll: function shouldReloadAll(store, snapshotRecordArray) {
      return !snapshotRecordArray.length;
    },


    /**
      This method is used by the store to determine if the store should
      reload a record after the `store.findRecord` method resolves a
      cached record.
       This method is *only* checked by the store when the store is
      returning a cached record.
       If this method returns `true` the store will re-fetch a record from
      the adapter.
       For example, if you do not want to fetch complex data over a mobile
      connection, or if the network is down, you can implement
      `shouldBackgroundReloadRecord` as follows:
       ```javascript
      shouldBackgroundReloadRecord(store, snapshot) {
        let connection = window.navigator.connection;
         if (connection === 'cellular' || connection === 'none') {
          return false;
        } else {
          return true;
        }
      }
      ```
       By default this hook returns `true` so the data for the record is updated
      in the background.
       @since 1.13.0
      @method shouldBackgroundReloadRecord
      @param {DS.Store} store
      @param {DS.Snapshot} snapshot
      @return {Boolean}
    */
    shouldBackgroundReloadRecord: function shouldBackgroundReloadRecord(store, snapshot) {
      return true;
    },


    /**
      This method is used by the store to determine if the store should
      reload a record array after the `store.findAll` method resolves
      with a cached record array.
       This method is *only* checked by the store when the store is
      returning a cached record array.
       If this method returns `true` the store will re-fetch all records
      from the adapter.
       For example, if you do not want to fetch complex data over a mobile
      connection, or if the network is down, you can implement
      `shouldBackgroundReloadAll` as follows:
       ```javascript
      shouldBackgroundReloadAll(store, snapshotArray) {
        let connection = window.navigator.connection;
         if (connection === 'cellular' || connection === 'none') {
          return false;
        } else {
          return true;
        }
      }
      ```
       By default this method returns `true`, indicating that a background reload
      should always be triggered.
       @since 1.13.0
      @method shouldBackgroundReloadAll
      @param {DS.Store} store
      @param {DS.SnapshotRecordArray} snapshotRecordArray
      @return {Boolean}
    */
    shouldBackgroundReloadAll: function shouldBackgroundReloadAll(store, snapshotRecordArray) {
      return true;
    }
  });
});
define('ember-data/adapters/errors', ['exports', 'ember', 'ember-data/-private/debug', 'ember-data/-private/features'], function (exports, _ember, _debug, _features) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ServerError = exports.ConflictError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.AbortError = exports.TimeoutError = exports.InvalidError = undefined;
  exports.AdapterError = AdapterError;
  exports.errorsHashToArray = errorsHashToArray;
  exports.errorsArrayToHash = errorsArrayToHash;


  var EmberError = _ember.default.Error;

  var SOURCE_POINTER_REGEXP = /^\/?data\/(attributes|relationships)\/(.*)/;
  var SOURCE_POINTER_PRIMARY_REGEXP = /^\/?data/;
  var PRIMARY_ATTRIBUTE_KEY = 'base';

  /**
    A `DS.AdapterError` is used by an adapter to signal that an error occurred
    during a request to an external API. It indicates a generic error, and
    subclasses are used to indicate specific error states. The following
    subclasses are provided:
  
    - `DS.InvalidError`
    - `DS.TimeoutError`
    - `DS.AbortError`
    - `DS.UnauthorizedError`
    - `DS.ForbiddenError`
    - `DS.NotFoundError`
    - `DS.ConflictError`
    - `DS.ServerError`
  
    To create a custom error to signal a specific error state in communicating
    with an external API, extend the `DS.AdapterError`. For example if the
    external API exclusively used HTTP `503 Service Unavailable` to indicate
    it was closed for maintenance:
  
    ```app/adapters/maintenance-error.js
    import DS from 'ember-data';
  
    export default DS.AdapterError.extend({ message: "Down for maintenance." });
    ```
  
    This error would then be returned by an adapter's `handleResponse` method:
  
    ```app/adapters/application.js
    import DS from 'ember-data';
    import MaintenanceError from './maintenance-error';
  
    export default DS.JSONAPIAdapter.extend({
      handleResponse(status) {
        if (503 === status) {
          return new MaintenanceError();
        }
  
        return this._super(...arguments);
      }
    });
    ```
  
    And can then be detected in an application and used to send the user to an
    `under-maintenance` route:
  
    ```app/routes/application.js
    import Ember from 'ember';
    import MaintenanceError from '../adapters/maintenance-error';
  
    export default Ember.Route.extend({
      actions: {
        error(error, transition) {
          if (error instanceof MaintenanceError) {
            this.transitionTo('under-maintenance');
            return;
          }
  
          // ...other error handling logic
        }
      }
    });
    ```
  
    @class AdapterError
    @namespace DS
  */
  function AdapterError(errors) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Adapter operation failed';

    this.isAdapterError = true;
    EmberError.call(this, message);

    this.errors = errors || [{
      title: 'Adapter Error',
      detail: message
    }];
  }

  var extendedErrorsEnabled = false;
  if (true) {
    extendedErrorsEnabled = true;
  }

  function extendFn(ErrorClass) {
    return function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          defaultMessage = _ref.message;

      return extend(ErrorClass, defaultMessage);
    };
  }

  function extend(ParentErrorClass, defaultMessage) {
    var ErrorClass = function ErrorClass(errors, message) {
      (0, _debug.assert)('`AdapterError` expects json-api formatted errors array.', Array.isArray(errors || []));
      ParentErrorClass.call(this, errors, message || defaultMessage);
    };
    ErrorClass.prototype = Object.create(ParentErrorClass.prototype);

    if (extendedErrorsEnabled) {
      ErrorClass.extend = extendFn(ErrorClass);
    }

    return ErrorClass;
  }

  AdapterError.prototype = Object.create(EmberError.prototype);

  if (extendedErrorsEnabled) {
    AdapterError.extend = extendFn(AdapterError);
  }

  /**
    A `DS.InvalidError` is used by an adapter to signal the external API
    was unable to process a request because the content was not
    semantically correct or meaningful per the API. Usually this means a
    record failed some form of server side validation. When a promise
    from an adapter is rejected with a `DS.InvalidError` the record will
    transition to the `invalid` state and the errors will be set to the
    `errors` property on the record.
  
    For Ember Data to correctly map errors to their corresponding
    properties on the model, Ember Data expects each error to be
    a valid json-api error object with a `source/pointer` that matches
    the property name. For example if you had a Post model that
    looked like this.
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      title: DS.attr('string'),
      content: DS.attr('string')
    });
    ```
  
    To show an error from the server related to the `title` and
    `content` properties your adapter could return a promise that
    rejects with a `DS.InvalidError` object that looks like this:
  
    ```app/adapters/post.js
    import Ember from 'ember';
    import DS from 'ember-data';
  
    export default DS.RESTAdapter.extend({
      updateRecord() {
        // Fictional adapter that always rejects
        return Ember.RSVP.reject(new DS.InvalidError([
          {
            detail: 'Must be unique',
            source: { pointer: '/data/attributes/title' }
          },
          {
            detail: 'Must not be blank',
            source: { pointer: '/data/attributes/content'}
          }
        ]));
      }
    });
    ```
  
    Your backend may use different property names for your records the
    store will attempt extract and normalize the errors using the
    serializer's `extractErrors` method before the errors get added to
    the the model. As a result, it is safe for the `InvalidError` to
    wrap the error payload unaltered.
  
    @class InvalidError
    @namespace DS
  */
  var InvalidError = exports.InvalidError = extend(AdapterError, 'The adapter rejected the commit because it was invalid');

  /**
    A `DS.TimeoutError` is used by an adapter to signal that a request
    to the external API has timed out. I.e. no response was received from
    the external API within an allowed time period.
  
    An example use case would be to warn the user to check their internet
    connection if an adapter operation has timed out:
  
    ```app/routes/application.js
    import Ember from 'ember';
    import DS from 'ember-data';
  
    const { TimeoutError } = DS;
  
    export default Ember.Route.extend({
      actions: {
        error(error, transition) {
          if (error instanceof TimeoutError) {
            // alert the user
            alert('Are you still connected to the internet?');
            return;
          }
  
          // ...other error handling logic
        }
      }
    });
    ```
  
    @class TimeoutError
    @namespace DS
  */
  var TimeoutError = exports.TimeoutError = extend(AdapterError, 'The adapter operation timed out');

  /**
    A `DS.AbortError` is used by an adapter to signal that a request to
    the external API was aborted. For example, this can occur if the user
    navigates away from the current page after a request to the external API
    has been initiated but before a response has been received.
  
    @class AbortError
    @namespace DS
  */
  var AbortError = exports.AbortError = extend(AdapterError, 'The adapter operation was aborted');

  /**
    A `DS.UnauthorizedError` equates to a HTTP `401 Unauthorized` response
    status. It is used by an adapter to signal that a request to the external
    API was rejected because authorization is required and has failed or has not
    yet been provided.
  
    An example use case would be to redirect the user to a log in route if a
    request is unauthorized:
  
    ```app/routes/application.js
    import Ember from 'ember';
    import DS from 'ember-data';
  
    const { UnauthorizedError } = DS;
  
    export default Ember.Route.extend({
      actions: {
        error(error, transition) {
          if (error instanceof UnauthorizedError) {
            // go to the sign in route
            this.transitionTo('login');
            return;
          }
  
          // ...other error handling logic
        }
      }
    });
    ```
  
    @class UnauthorizedError
    @namespace DS
  */
  var UnauthorizedError = exports.UnauthorizedError = extendedErrorsEnabled ? extend(AdapterError, 'The adapter operation is unauthorized') : null;

  /**
    A `DS.ForbiddenError` equates to a HTTP `403 Forbidden` response status.
    It is used by an adapter to signal that a request to the external API was
    valid but the server is refusing to respond to it. If authorization was
    provided and is valid, then the authenticated user does not have the
    necessary permissions for the request.
  
    @class ForbiddenError
    @namespace DS
  */
  var ForbiddenError = exports.ForbiddenError = extendedErrorsEnabled ? extend(AdapterError, 'The adapter operation is forbidden') : null;

  /**
    A `DS.NotFoundError` equates to a HTTP `404 Not Found` response status.
    It is used by an adapter to signal that a request to the external API
    was rejected because the resource could not be found on the API.
  
    An example use case would be to detect if the user has entered a route
    for a specific model that does not exist. For example:
  
    ```app/routes/post.js
    import Ember from 'ember';
    import DS from 'ember-data';
  
    const { NotFoundError } = DS;
  
    export default Ember.Route.extend({
      model(params) {
        return this.get('store').findRecord('post', params.post_id);
      },
  
      actions: {
        error(error, transition) {
          if (error instanceof NotFoundError) {
            // redirect to a list of all posts instead
            this.transitionTo('posts');
          } else {
            // otherwise let the error bubble
            return true;
          }
        }
      }
    });
    ```
  
    @class NotFoundError
    @namespace DS
  */
  var NotFoundError = exports.NotFoundError = extendedErrorsEnabled ? extend(AdapterError, 'The adapter could not find the resource') : null;

  /**
    A `DS.ConflictError` equates to a HTTP `409 Conflict` response status.
    It is used by an adapter to indicate that the request could not be processed
    because of a conflict in the request. An example scenario would be when
    creating a record with a client generated id but that id is already known
    to the external API.
  
    @class ConflictError
    @namespace DS
  */
  var ConflictError = exports.ConflictError = extendedErrorsEnabled ? extend(AdapterError, 'The adapter operation failed due to a conflict') : null;

  /**
    A `DS.ServerError` equates to a HTTP `500 Internal Server Error` response
    status. It is used by the adapter to indicate that a request has failed
    because of an error in the external API.
  
    @class ServerError
    @namespace DS
  */
  var ServerError = exports.ServerError = extendedErrorsEnabled ? extend(AdapterError, 'The adapter operation failed due to a server error') : null;

  /**
    Convert an hash of errors into an array with errors in JSON-API format.
  
    ```javascript
    import DS from 'ember-data';
  
    const { errorsHashToArray } = DS;
  
    let errors = {
      base: 'Invalid attributes on saving this record',
      name: 'Must be present',
      age: ['Must be present', 'Must be a number']
    };
  
    let errorsArray = errorsHashToArray(errors);
    // [
    //   {
    //     title: "Invalid Document",
    //     detail: "Invalid attributes on saving this record",
    //     source: { pointer: "/data" }
    //   },
    //   {
    //     title: "Invalid Attribute",
    //     detail: "Must be present",
    //     source: { pointer: "/data/attributes/name" }
    //   },
    //   {
    //     title: "Invalid Attribute",
    //     detail: "Must be present",
    //     source: { pointer: "/data/attributes/age" }
    //   },
    //   {
    //     title: "Invalid Attribute",
    //     detail: "Must be a number",
    //     source: { pointer: "/data/attributes/age" }
    //   }
    // ]
    ```
  
    @method errorsHashToArray
    @public
    @namespace
    @for DS
    @param {Object} errors hash with errors as properties
    @return {Array} array of errors in JSON-API format
  */
  function errorsHashToArray(errors) {
    var out = [];

    if (_ember.default.isPresent(errors)) {
      Object.keys(errors).forEach(function (key) {
        var messages = _ember.default.makeArray(errors[key]);
        for (var i = 0; i < messages.length; i++) {
          var title = 'Invalid Attribute';
          var pointer = '/data/attributes/' + key;
          if (key === PRIMARY_ATTRIBUTE_KEY) {
            title = 'Invalid Document';
            pointer = '/data';
          }
          out.push({
            title: title,
            detail: messages[i],
            source: {
              pointer: pointer
            }
          });
        }
      });
    }

    return out;
  }

  /**
    Convert an array of errors in JSON-API format into an object.
  
    ```javascript
    import DS from 'ember-data';
  
    const { errorsArrayToHash } = DS;
  
    let errorsArray = [
      {
        title: 'Invalid Attribute',
        detail: 'Must be present',
        source: { pointer: '/data/attributes/name' }
      },
      {
        title: 'Invalid Attribute',
        detail: 'Must be present',
        source: { pointer: '/data/attributes/age' }
      },
      {
        title: 'Invalid Attribute',
        detail: 'Must be a number',
        source: { pointer: '/data/attributes/age' }
      }
    ];
  
    let errors = errorsArrayToHash(errorsArray);
    // {
    //   "name": ["Must be present"],
    //   "age":  ["Must be present", "must be a number"]
    // }
    ```
  
    @method errorsArrayToHash
    @public
    @namespace
    @for DS
    @param {Array} errors array of errors in JSON-API format
    @return {Object}
  */
  function errorsArrayToHash(errors) {
    var out = {};

    if (_ember.default.isPresent(errors)) {
      errors.forEach(function (error) {
        if (error.source && error.source.pointer) {
          var key = error.source.pointer.match(SOURCE_POINTER_REGEXP);

          if (key) {
            key = key[2];
          } else if (error.source.pointer.search(SOURCE_POINTER_PRIMARY_REGEXP) !== -1) {
            key = PRIMARY_ATTRIBUTE_KEY;
          }

          if (key) {
            out[key] = out[key] || [];
            out[key].push(error.detail || error.title);
          }
        }
      });
    }

    return out;
  }
});
define('ember-data/adapters/json-api', ['exports', 'ember', 'ember-data/adapters/rest', 'ember-data/-private/features', 'ember-data/-private/debug'], function (exports, _ember, _rest, _features, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
    The `JSONAPIAdapter` is the default adapter used by Ember Data. It
    is responsible for transforming the store's requests into HTTP
    requests that follow the [JSON API](http://jsonapi.org/format/)
    format.
  
    ## JSON API Conventions
  
    The JSONAPIAdapter uses JSON API conventions for building the url
    for a record and selecting the HTTP verb to use with a request. The
    actions you can take on a record map onto the following URLs in the
    JSON API adapter:
  
  <table>
    <tr>
      <th>
        Action
      </th>
      <th>
        HTTP Verb
      </th>
      <th>
        URL
      </th>
    </tr>
    <tr>
      <th>
        `store.findRecord('post', 123)`
      </th>
      <td>
        GET
      </td>
      <td>
        /posts/123
      </td>
    </tr>
    <tr>
      <th>
        `store.findAll('post')`
      </th>
      <td>
        GET
      </td>
      <td>
        /posts
      </td>
    </tr>
    <tr>
      <th>
        Update `postRecord.save()`
      </th>
      <td>
        PATCH
      </td>
      <td>
        /posts/123
      </td>
    </tr>
    <tr>
      <th>
        Create `store.createRecord('post').save()`
      </th>
      <td>
        POST
      </td>
      <td>
        /posts
      </td>
    </tr>
    <tr>
      <th>
        Delete `postRecord.destroyRecord()`
      </th>
      <td>
        DELETE
      </td>
      <td>
        /posts/123
      </td>
    </tr>
  </table>
  
    ## Success and failure
  
    The JSONAPIAdapter will consider a success any response with a
    status code of the 2xx family ("Success"), as well as 304 ("Not
    Modified"). Any other status code will be considered a failure.
  
    On success, the request promise will be resolved with the full
    response payload.
  
    Failed responses with status code 422 ("Unprocessable Entity") will
    be considered "invalid". The response will be discarded, except for
    the `errors` key. The request promise will be rejected with a
    `DS.InvalidError`. This error object will encapsulate the saved
    `errors` value.
  
    Any other status codes will be treated as an adapter error. The
    request promise will be rejected, similarly to the invalid case,
    but with an instance of `DS.AdapterError` instead.
  
    ### Endpoint path customization
  
    Endpoint paths can be prefixed with a `namespace` by setting the
    namespace property on the adapter:
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.JSONAPIAdapter.extend({
      namespace: 'api/1'
    });
    ```
    Requests for the `person` model would now target `/api/1/people/1`.
  
    ### Host customization
  
    An adapter can target other hosts by setting the `host` property.
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.JSONAPIAdapter.extend({
      host: 'https://api.example.com'
    });
    ```
  
    Requests for the `person` model would now target
    `https://api.example.com/people/1`.
  
    @since 1.13.0
    @class JSONAPIAdapter
    @constructor
    @namespace DS
    @extends DS.RESTAdapter
  */
  /* global heimdall */
  /**
    @module ember-data
  */

  var JSONAPIAdapter = _rest.default.extend({
    defaultSerializer: '-json-api',

    ajaxOptions: function ajaxOptions(url, type, options) {
      var hash = this._super.apply(this, arguments);

      if (hash.contentType) {
        hash.contentType = 'application/vnd.api+json';
      }

      var beforeSend = hash.beforeSend;
      hash.beforeSend = function (xhr) {
        xhr.setRequestHeader('Accept', 'application/vnd.api+json');
        if (beforeSend) {
          beforeSend(xhr);
        }
      };

      return hash;
    },


    /**
      By default the JSONAPIAdapter will send each find request coming from a `store.find`
      or from accessing a relationship separately to the server. If your server supports passing
      ids as a query string, you can set coalesceFindRequests to true to coalesce all find requests
      within a single runloop.
       For example, if you have an initial payload of:
       ```javascript
      {
        data: {
          id: 1,
          type: 'post',
          relationship: {
            comments: {
              data: [
                { id: 1, type: 'comment' },
                { id: 2, type: 'comment' }
              ]
            }
          }
        }
      }
      ```
       By default calling `post.get('comments')` will trigger the following requests(assuming the
      comments haven't been loaded before):
       ```
      GET /comments/1
      GET /comments/2
      ```
       If you set coalesceFindRequests to `true` it will instead trigger the following request:
       ```
      GET /comments?filter[id]=1,2
      ```
       Setting coalesceFindRequests to `true` also works for `store.find` requests and `belongsTo`
      relationships accessed within the same runloop. If you set `coalesceFindRequests: true`
       ```javascript
      store.findRecord('comment', 1);
      store.findRecord('comment', 2);
      ```
       will also send a request to: `GET /comments?filter[id]=1,2`
       Note: Requests coalescing rely on URL building strategy. So if you override `buildURL` in your app
      `groupRecordsForFindMany` more likely should be overridden as well in order for coalescing to work.
       @property coalesceFindRequests
      @type {boolean}
    */
    coalesceFindRequests: false,

    findMany: function findMany(store, type, ids, snapshots) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        return this._super.apply(this, arguments);
      } else {
        var url = this.buildURL(type.modelName, ids, snapshots, 'findMany');
        return this.ajax(url, 'GET', { data: { filter: { id: ids.join(',') } } });
      }
    },
    pathForType: function pathForType(modelName) {
      var dasherized = _ember.default.String.dasherize(modelName);
      return _ember.default.String.pluralize(dasherized);
    },
    updateRecord: function updateRecord(store, type, snapshot) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        return this._super.apply(this, arguments);
      } else {
        var data = {};
        var serializer = store.serializerFor(type.modelName);

        serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

        var url = this.buildURL(type.modelName, snapshot.id, snapshot, 'updateRecord');

        return this.ajax(url, 'PATCH', { data: data });
      }
    },
    _hasCustomizedAjax: function _hasCustomizedAjax() {
      if (this.ajax !== JSONAPIAdapter.prototype.ajax) {
        (0, _debug.deprecate)('JSONAPIAdapter#ajax has been deprecated please use. `methodForRequest`, `urlForRequest`, `headersForRequest` or `dataForRequest` instead.', false, {
          id: 'ds.json-api-adapter.ajax',
          until: '3.0.0'
        });
        return true;
      }

      if (this.ajaxOptions !== JSONAPIAdapter.prototype.ajaxOptions) {
        (0, _debug.deprecate)('JSONAPIAdapterr#ajaxOptions has been deprecated please use. `methodForRequest`, `urlForRequest`, `headersForRequest` or `dataForRequest` instead.', false, {
          id: 'ds.json-api-adapter.ajax-options',
          until: '3.0.0'
        });
        return true;
      }

      return false;
    }
  });

  if ((0, _features.default)('ds-improved-ajax')) {

    JSONAPIAdapter.reopen({
      methodForRequest: function methodForRequest(params) {
        if (params.requestType === 'updateRecord') {
          return 'PATCH';
        }

        return this._super.apply(this, arguments);
      },
      dataForRequest: function dataForRequest(params) {
        var requestType = params.requestType,
            ids = params.ids;


        if (requestType === 'findMany') {
          return {
            filter: { id: ids.join(',') }
          };
        }

        if (requestType === 'updateRecord') {
          var store = params.store,
              type = params.type,
              snapshot = params.snapshot;

          var data = {};
          var serializer = store.serializerFor(type.modelName);

          serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

          return data;
        }

        return this._super.apply(this, arguments);
      },
      headersForRequest: function headersForRequest() {
        var headers = this._super.apply(this, arguments) || {};

        headers['Accept'] = 'application/vnd.api+json';

        return headers;
      },
      _requestToJQueryAjaxHash: function _requestToJQueryAjaxHash() {
        var hash = this._super.apply(this, arguments);

        if (hash.contentType) {
          hash.contentType = 'application/vnd.api+json';
        }

        return hash;
      }
    });
  }

  exports.default = JSONAPIAdapter;
});
define('ember-data/adapters/rest', ['exports', 'ember', 'ember-data/adapter', 'ember-data/adapters/errors', 'ember-data/-private/adapters/build-url-mixin', 'ember-data/-private/features', 'ember-data/-private/debug', 'ember-data/-private/utils/parse-response-headers'], function (exports, _ember, _adapter, _errors, _buildUrlMixin, _features, _debug, _parseResponseHeaders) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var MapWithDefault = _ember.default.MapWithDefault,
      get = _ember.default.get;


  var Promise = _ember.default.RSVP.Promise;

  /**
    The REST adapter allows your store to communicate with an HTTP server by
    transmitting JSON via XHR. Most Ember.js apps that consume a JSON API
    should use the REST adapter.
  
    This adapter is designed around the idea that the JSON exchanged with
    the server should be conventional.
  
    ## Success and failure
  
    The REST adapter will consider a success any response with a status code
    of the 2xx family ("Success"), as well as 304 ("Not Modified"). Any other
    status code will be considered a failure.
  
    On success, the request promise will be resolved with the full response
    payload.
  
    Failed responses with status code 422 ("Unprocessable Entity") will be
    considered "invalid". The response will be discarded, except for the
    `errors` key. The request promise will be rejected with a `DS.InvalidError`.
    This error object will encapsulate the saved `errors` value.
  
    Any other status codes will be treated as an "adapter error". The request
    promise will be rejected, similarly to the "invalid" case, but with
    an instance of `DS.AdapterError` instead.
  
    ## JSON Structure
  
    The REST adapter expects the JSON returned from your server to follow
    these conventions.
  
    ### Object Root
  
    The JSON payload should be an object that contains the record inside a
    root property. For example, in response to a `GET` request for
    `/posts/1`, the JSON should look like this:
  
    ```js
    {
      "posts": {
        "id": 1,
        "title": "I'm Running to Reform the W3C's Tag",
        "author": "Yehuda Katz"
      }
    }
    ```
  
    Similarly, in response to a `GET` request for `/posts`, the JSON should
    look like this:
  
    ```js
    {
      "posts": [
        {
          "id": 1,
          "title": "I'm Running to Reform the W3C's Tag",
          "author": "Yehuda Katz"
        },
        {
          "id": 2,
          "title": "Rails is omakase",
          "author": "D2H"
        }
      ]
    }
    ```
  
    Note that the object root can be pluralized for both a single-object response
    and an array response: the REST adapter is not strict on this. Further, if the
    HTTP server responds to a `GET` request to `/posts/1` (e.g. the response to a
    `findRecord` query) with more than one object in the array, Ember Data will
    only display the object with the matching ID.
  
    ### Conventional Names
  
    Attribute names in your JSON payload should be the camelCased versions of
    the attributes in your Ember.js models.
  
    For example, if you have a `Person` model:
  
    ```app/models/person.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      occupation: DS.attr('string')
    });
    ```
  
    The JSON returned should look like this:
  
    ```js
    {
      "people": {
        "id": 5,
        "firstName": "Zaphod",
        "lastName": "Beeblebrox",
        "occupation": "President"
      }
    }
    ```
  
    #### Relationships
  
    Relationships are usually represented by ids to the record in the
    relationship. The related records can then be sideloaded in the
    response under a key for the type.
  
    ```js
    {
      "posts": {
        "id": 5,
        "title": "I'm Running to Reform the W3C's Tag",
        "author": "Yehuda Katz",
        "comments": [1, 2]
      },
      "comments": [{
        "id": 1,
        "author": "User 1",
        "message": "First!",
      }, {
        "id": 2,
        "author": "User 2",
        "message": "Good Luck!",
      }]
    }
    ```
  
    If the records in the relationship are not known when the response
    is serialized its also possible to represent the relationship as a
    url using the `links` key in the response. Ember Data will fetch
    this url to resolve the relationship when it is accessed for the
    first time.
  
    ```js
    {
      "posts": {
        "id": 5,
        "title": "I'm Running to Reform the W3C's Tag",
        "author": "Yehuda Katz",
        "links": {
          "comments": "/posts/5/comments"
        }
      }
    }
    ```
  
    ### Errors
  
    If a response is considered a failure, the JSON payload is expected to include
    a top-level key `errors`, detailing any specific issues. For example:
  
    ```js
    {
      "errors": {
        "msg": "Something went wrong"
      }
    }
    ```
  
    This adapter does not make any assumptions as to the format of the `errors`
    object. It will simply be passed along as is, wrapped in an instance
    of `DS.InvalidError` or `DS.AdapterError`. The serializer can interpret it
    afterwards.
  
    ## Customization
  
    ### Endpoint path customization
  
    Endpoint paths can be prefixed with a `namespace` by setting the namespace
    property on the adapter:
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.RESTAdapter.extend({
      namespace: 'api/1'
    });
    ```
    Requests for the `Person` model would now target `/api/1/people/1`.
  
    ### Host customization
  
    An adapter can target other hosts by setting the `host` property.
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.RESTAdapter.extend({
      host: 'https://api.example.com'
    });
    ```
  
    ### Headers customization
  
    Some APIs require HTTP headers, e.g. to provide an API key. Arbitrary
    headers can be set as key/value pairs on the `RESTAdapter`'s `headers`
    object and Ember Data will send them along with each ajax request.
  
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.RESTAdapter.extend({
      headers: {
        'API_KEY': 'secret key',
        'ANOTHER_HEADER': 'Some header value'
      }
    });
    ```
  
    `headers` can also be used as a computed property to support dynamic
    headers. In the example below, the `session` object has been
    injected into an adapter by Ember's container.
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.RESTAdapter.extend({
      headers: Ember.computed('session.authToken', function() {
        return {
          'API_KEY': this.get('session.authToken'),
          'ANOTHER_HEADER': 'Some header value'
        };
      })
    });
    ```
  
    In some cases, your dynamic headers may require data from some
    object outside of Ember's observer system (for example
    `document.cookie`). You can use the
    [volatile](/api/classes/Ember.ComputedProperty.html#method_volatile)
    function to set the property into a non-cached mode causing the headers to
    be recomputed with every request.
  
    ```app/adapters/application.js
    import DS from 'ember-data';
  
    export default DS.RESTAdapter.extend({
      headers: Ember.computed(function() {
        return {
          'API_KEY': Ember.get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
          'ANOTHER_HEADER': 'Some header value'
        };
      }).volatile()
    });
    ```
  
    @class RESTAdapter
    @constructor
    @namespace DS
    @extends DS.Adapter
    @uses DS.BuildURLMixin
  */
  var RESTAdapter = _adapter.default.extend(_buildUrlMixin.default, {
    defaultSerializer: '-rest',

    sortQueryParams: function sortQueryParams(obj) {
      var keys = Object.keys(obj);
      var len = keys.length;
      if (len < 2) {
        return obj;
      }
      var newQueryParams = {};
      var sortedKeys = keys.sort();

      for (var i = 0; i < len; i++) {
        newQueryParams[sortedKeys[i]] = obj[sortedKeys[i]];
      }
      return newQueryParams;
    },


    /**
      By default the RESTAdapter will send each find request coming from a `store.find`
      or from accessing a relationship separately to the server. If your server supports passing
      ids as a query string, you can set coalesceFindRequests to true to coalesce all find requests
      within a single runloop.
       For example, if you have an initial payload of:
       ```javascript
      {
        post: {
          id: 1,
          comments: [1, 2]
        }
      }
      ```
       By default calling `post.get('comments')` will trigger the following requests(assuming the
      comments haven't been loaded before):
       ```
      GET /comments/1
      GET /comments/2
      ```
       If you set coalesceFindRequests to `true` it will instead trigger the following request:
       ```
      GET /comments?ids[]=1&ids[]=2
      ```
       Setting coalesceFindRequests to `true` also works for `store.find` requests and `belongsTo`
      relationships accessed within the same runloop. If you set `coalesceFindRequests: true`
       ```javascript
      store.findRecord('comment', 1);
      store.findRecord('comment', 2);
      ```
       will also send a request to: `GET /comments?ids[]=1&ids[]=2`
       Note: Requests coalescing rely on URL building strategy. So if you override `buildURL` in your app
      `groupRecordsForFindMany` more likely should be overridden as well in order for coalescing to work.
       @property coalesceFindRequests
      @type {boolean}
    */
    coalesceFindRequests: false,

    findRecord: function findRecord(store, type, id, snapshot) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, id: id, snapshot: snapshot,
          requestType: 'findRecord'
        });

        return this._makeRequest(request);
      } else {
        var url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
        var query = this.buildQuery(snapshot);

        return this.ajax(url, 'GET', { data: query });
      }
    },
    findAll: function findAll(store, type, sinceToken, snapshotRecordArray) {
      var query = this.buildQuery(snapshotRecordArray);

      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, sinceToken: sinceToken, query: query,
          snapshots: snapshotRecordArray,
          requestType: 'findAll'
        });

        return this._makeRequest(request);
      } else {
        var url = this.buildURL(type.modelName, null, snapshotRecordArray, 'findAll');

        if (sinceToken) {
          query.since = sinceToken;
        }

        return this.ajax(url, 'GET', { data: query });
      }
    },
    query: function query(store, type, _query) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, query: _query,
          requestType: 'query'
        });

        return this._makeRequest(request);
      } else {
        var url = this.buildURL(type.modelName, null, null, 'query', _query);

        if (this.sortQueryParams) {
          _query = this.sortQueryParams(_query);
        }

        return this.ajax(url, 'GET', { data: _query });
      }
    },
    queryRecord: function queryRecord(store, type, query) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, query: query,
          requestType: 'queryRecord'
        });

        return this._makeRequest(request);
      } else {
        var url = this.buildURL(type.modelName, null, null, 'queryRecord', query);

        if (this.sortQueryParams) {
          query = this.sortQueryParams(query);
        }

        return this.ajax(url, 'GET', { data: query });
      }
    },
    findMany: function findMany(store, type, ids, snapshots) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, ids: ids, snapshots: snapshots,
          requestType: 'findMany'
        });

        return this._makeRequest(request);
      } else {
        var url = this.buildURL(type.modelName, ids, snapshots, 'findMany');
        return this.ajax(url, 'GET', { data: { ids: ids } });
      }
    },
    findHasMany: function findHasMany(store, snapshot, url, relationship) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, snapshot: snapshot, url: url, relationship: relationship,
          requestType: 'findHasMany'
        });

        return this._makeRequest(request);
      } else {
        var id = snapshot.id;
        var type = snapshot.modelName;

        url = this.urlPrefix(url, this.buildURL(type, id, snapshot, 'findHasMany'));

        return this.ajax(url, 'GET');
      }
    },
    findBelongsTo: function findBelongsTo(store, snapshot, url, relationship) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, snapshot: snapshot, url: url, relationship: relationship,
          requestType: 'findBelongsTo'
        });

        return this._makeRequest(request);
      } else {
        var id = snapshot.id;
        var type = snapshot.modelName;

        url = this.urlPrefix(url, this.buildURL(type, id, snapshot, 'findBelongsTo'));
        return this.ajax(url, 'GET');
      }
    },
    createRecord: function createRecord(store, type, snapshot) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, snapshot: snapshot,
          requestType: 'createRecord'
        });

        return this._makeRequest(request);
      } else {
        var data = {};
        var serializer = store.serializerFor(type.modelName);
        var url = this.buildURL(type.modelName, null, snapshot, 'createRecord');

        serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

        return this.ajax(url, "POST", { data: data });
      }
    },
    updateRecord: function updateRecord(store, type, snapshot) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, snapshot: snapshot,
          requestType: 'updateRecord'
        });

        return this._makeRequest(request);
      } else {
        var data = {};
        var serializer = store.serializerFor(type.modelName);

        serializer.serializeIntoHash(data, type, snapshot);

        var id = snapshot.id;
        var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

        return this.ajax(url, "PUT", { data: data });
      }
    },
    deleteRecord: function deleteRecord(store, type, snapshot) {
      if ((0, _features.default)('ds-improved-ajax') && !this._hasCustomizedAjax()) {
        var request = this._requestFor({
          store: store, type: type, snapshot: snapshot,
          requestType: 'deleteRecord'
        });

        return this._makeRequest(request);
      } else {
        var id = snapshot.id;

        return this.ajax(this.buildURL(type.modelName, id, snapshot, 'deleteRecord'), "DELETE");
      }
    },
    _stripIDFromURL: function _stripIDFromURL(store, snapshot) {
      var url = this.buildURL(snapshot.modelName, snapshot.id, snapshot);

      var expandedURL = url.split('/');
      // Case when the url is of the format ...something/:id
      // We are decodeURIComponent-ing the lastSegment because if it represents
      // the id, it has been encodeURIComponent-ified within `buildURL`. If we
      // don't do this, then records with id having special characters are not
      // coalesced correctly (see GH #4190 for the reported bug)
      var lastSegment = expandedURL[expandedURL.length - 1];
      var id = snapshot.id;
      if (decodeURIComponent(lastSegment) === id) {
        expandedURL[expandedURL.length - 1] = "";
      } else if (endsWith(lastSegment, '?id=' + id)) {
        //Case when the url is of the format ...something?id=:id
        expandedURL[expandedURL.length - 1] = lastSegment.substring(0, lastSegment.length - id.length - 1);
      }

      return expandedURL.join('/');
    },


    // http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
    maxURLLength: 2048,

    groupRecordsForFindMany: function groupRecordsForFindMany(store, snapshots) {
      var groups = MapWithDefault.create({
        defaultValue: function defaultValue() {
          return [];
        }
      });
      var adapter = this;
      var maxURLLength = this.maxURLLength;

      snapshots.forEach(function (snapshot) {
        var baseUrl = adapter._stripIDFromURL(store, snapshot);
        groups.get(baseUrl).push(snapshot);
      });

      function splitGroupToFitInUrl(group, maxURLLength, paramNameLength) {
        var idsSize = 0;
        var baseUrl = adapter._stripIDFromURL(store, group[0]);
        var splitGroups = [[]];

        group.forEach(function (snapshot) {
          var additionalLength = encodeURIComponent(snapshot.id).length + paramNameLength;
          if (baseUrl.length + idsSize + additionalLength >= maxURLLength) {
            idsSize = 0;
            splitGroups.push([]);
          }

          idsSize += additionalLength;

          var lastGroupIndex = splitGroups.length - 1;
          splitGroups[lastGroupIndex].push(snapshot);
        });

        return splitGroups;
      }

      var groupsArray = [];
      groups.forEach(function (group, key) {
        var paramNameLength = '&ids%5B%5D='.length;
        var splitGroups = splitGroupToFitInUrl(group, maxURLLength, paramNameLength);

        splitGroups.forEach(function (splitGroup) {
          return groupsArray.push(splitGroup);
        });
      });

      return groupsArray;
    },
    handleResponse: function handleResponse(status, headers, payload, requestData) {
      if (this.isSuccess(status, headers, payload)) {
        return payload;
      } else if (this.isInvalid(status, headers, payload)) {
        return new _errors.InvalidError(payload.errors);
      }

      var errors = this.normalizeErrorResponse(status, headers, payload);
      var detailedMessage = this.generatedDetailedMessage(status, headers, payload, requestData);

      if (true) {
        switch (status) {
          case 401:
            return new _errors.UnauthorizedError(errors, detailedMessage);
          case 403:
            return new _errors.ForbiddenError(errors, detailedMessage);
          case 404:
            return new _errors.NotFoundError(errors, detailedMessage);
          case 409:
            return new _errors.ConflictError(errors, detailedMessage);
          default:
            if (status >= 500) {
              return new _errors.ServerError(errors, detailedMessage);
            }
        }
      }

      return new _errors.AdapterError(errors, detailedMessage);
    },
    isSuccess: function isSuccess(status, headers, payload) {
      return status >= 200 && status < 300 || status === 304;
    },
    isInvalid: function isInvalid(status, headers, payload) {
      return status === 422;
    },
    ajax: function ajax(url, type, options) {
      var adapter = this;

      var requestData = {
        url: url,
        method: type
      };

      return new Promise(function (resolve, reject) {
        var hash = adapter.ajaxOptions(url, type, options);

        hash.success = function (payload, textStatus, jqXHR) {
          var response = ajaxSuccess(adapter, jqXHR, payload, requestData);
          _ember.default.run.join(null, resolve, response);
        };

        hash.error = function (jqXHR, textStatus, errorThrown) {
          var responseData = {
            textStatus: textStatus,
            errorThrown: errorThrown
          };
          var error = ajaxError(adapter, jqXHR, requestData, responseData);
          _ember.default.run.join(null, reject, error);
        };

        adapter._ajaxRequest(hash);
      }, 'DS: RESTAdapter#ajax ' + type + ' to ' + url);
    },
    _ajaxRequest: function _ajaxRequest(options) {
      _ember.default.$.ajax(options);
    },
    ajaxOptions: function ajaxOptions(url, type, options) {
      var hash = options || {};
      hash.url = url;
      hash.type = type;
      hash.dataType = 'json';
      hash.context = this;

      if (hash.data && type !== 'GET') {
        hash.contentType = 'application/json; charset=utf-8';
        hash.data = JSON.stringify(hash.data);
      }

      var headers = get(this, 'headers');
      if (headers !== undefined) {
        hash.beforeSend = function (xhr) {
          Object.keys(headers).forEach(function (key) {
            return xhr.setRequestHeader(key, headers[key]);
          });
        };
      }

      return hash;
    },
    parseErrorResponse: function parseErrorResponse(responseText) {
      var json = responseText;

      try {
        json = _ember.default.$.parseJSON(responseText);
      } catch (e) {
        // ignored
      }

      return json;
    },
    normalizeErrorResponse: function normalizeErrorResponse(status, headers, payload) {
      if (payload && (typeof payload === 'undefined' ? 'undefined' : _typeof(payload)) === 'object' && payload.errors) {
        return payload.errors;
      } else {
        return [{
          status: '' + status,
          title: "The backend responded with an error",
          detail: '' + payload
        }];
      }
    },


    /**
      Generates a detailed ("friendly") error message, with plenty
      of information for debugging (good luck!)
       @method generatedDetailedMessage
      @private
      @param  {Number} status
      @param  {Object} headers
      @param  {Object} payload
      @param  {Object} requestData
      @return {String} detailed error message
    */
    generatedDetailedMessage: function generatedDetailedMessage(status, headers, payload, requestData) {
      var shortenedPayload = void 0;
      var payloadContentType = headers["Content-Type"] || "Empty Content-Type";

      if (payloadContentType === "text/html" && payload.length > 250) {
        shortenedPayload = "[Omitted Lengthy HTML]";
      } else {
        shortenedPayload = payload;
      }

      var requestDescription = requestData.method + ' ' + requestData.url;
      var payloadDescription = 'Payload (' + payloadContentType + ')';

      return ['Ember Data Request ' + requestDescription + ' returned a ' + status, payloadDescription, shortenedPayload].join('\n');
    },

    buildQuery: function buildQuery(snapshot) {
      var query = {};

      if (snapshot) {
        var include = snapshot.include;


        if (include) {
          query.include = include;
        }
      }

      return query;
    },
    _hasCustomizedAjax: function _hasCustomizedAjax() {
      if (this.ajax !== RESTAdapter.prototype.ajax) {
        (0, _debug.deprecate)('RESTAdapter#ajax has been deprecated please use. `methodForRequest`, `urlForRequest`, `headersForRequest` or `dataForRequest` instead.', false, {
          id: 'ds.rest-adapter.ajax',
          until: '3.0.0'
        });
        return true;
      }

      if (this.ajaxOptions !== RESTAdapter.prototype.ajaxOptions) {
        (0, _debug.deprecate)('RESTAdapter#ajaxOptions has been deprecated please use. `methodForRequest`, `urlForRequest`, `headersForRequest` or `dataForRequest` instead.', false, {
          id: 'ds.rest-adapter.ajax-options',
          until: '3.0.0'
        });
        return true;
      }

      return false;
    }
  });

  if ((0, _features.default)('ds-improved-ajax')) {

    RESTAdapter.reopen({
      dataForRequest: function dataForRequest(params) {
        var store = params.store,
            type = params.type,
            snapshot = params.snapshot,
            requestType = params.requestType,
            query = params.query;


        // type is not passed to findBelongsTo and findHasMany
        type = type || snapshot && snapshot.type;

        var serializer = store.serializerFor(type.modelName);
        var data = {};

        switch (requestType) {
          case 'createRecord':
            serializer.serializeIntoHash(data, type, snapshot, { includeId: true });
            break;

          case 'updateRecord':
            serializer.serializeIntoHash(data, type, snapshot);
            break;

          case 'findRecord':
            data = this.buildQuery(snapshot);
            break;

          case 'findAll':
            if (params.sinceToken) {
              query = query || {};
              query.since = params.sinceToken;
            }
            data = query;
            break;

          case 'query':
          case 'queryRecord':
            if (this.sortQueryParams) {
              query = this.sortQueryParams(query);
            }
            data = query;
            break;

          case 'findMany':
            data = { ids: params.ids };
            break;

          default:
            data = undefined;
            break;
        }

        return data;
      },
      methodForRequest: function methodForRequest(params) {
        var requestType = params.requestType;


        switch (requestType) {
          case 'createRecord':
            return 'POST';
          case 'updateRecord':
            return 'PUT';
          case 'deleteRecord':
            return 'DELETE';
        }

        return 'GET';
      },
      urlForRequest: function urlForRequest(params) {
        var type = params.type,
            id = params.id,
            ids = params.ids,
            snapshot = params.snapshot,
            snapshots = params.snapshots,
            requestType = params.requestType,
            query = params.query;


        // type and id are not passed from updateRecord and deleteRecord, hence they
        // are defined if not set
        type = type || snapshot && snapshot.type;
        id = id || snapshot && snapshot.id;

        switch (requestType) {
          case 'findAll':
            return this.buildURL(type.modelName, null, snapshots, requestType);

          case 'query':
          case 'queryRecord':
            return this.buildURL(type.modelName, null, null, requestType, query);

          case 'findMany':
            return this.buildURL(type.modelName, ids, snapshots, requestType);

          case 'findHasMany':
          case 'findBelongsTo':
            {
              var url = this.buildURL(type.modelName, id, snapshot, requestType);
              return this.urlPrefix(params.url, url);
            }
        }

        return this.buildURL(type.modelName, id, snapshot, requestType, query);
      },
      headersForRequest: function headersForRequest(params) {
        return this.get('headers');
      },
      _requestFor: function _requestFor(params) {
        var method = this.methodForRequest(params);
        var url = this.urlForRequest(params);
        var headers = this.headersForRequest(params);
        var data = this.dataForRequest(params);

        return { method: method, url: url, headers: headers, data: data };
      },
      _requestToJQueryAjaxHash: function _requestToJQueryAjaxHash(request) {
        var hash = {};

        hash.type = request.method;
        hash.url = request.url;
        hash.dataType = 'json';
        hash.context = this;

        if (request.data) {
          if (request.method !== 'GET') {
            hash.contentType = 'application/json; charset=utf-8';
            hash.data = JSON.stringify(request.data);
          } else {
            hash.data = request.data;
          }
        }

        var headers = request.headers;
        if (headers !== undefined) {
          hash.beforeSend = function (xhr) {
            Object.keys(headers).forEach(function (key) {
              return xhr.setRequestHeader(key, headers[key]);
            });
          };
        }

        return hash;
      },
      _makeRequest: function _makeRequest(request) {
        var adapter = this;
        var hash = this._requestToJQueryAjaxHash(request);

        var method = request.method,
            url = request.url;

        var requestData = { method: method, url: url };

        return new _ember.default.RSVP.Promise(function (resolve, reject) {

          hash.success = function (payload, textStatus, jqXHR) {
            var response = ajaxSuccess(adapter, jqXHR, payload, requestData);
            _ember.default.run.join(null, resolve, response);
          };

          hash.error = function (jqXHR, textStatus, errorThrown) {
            var responseData = {
              textStatus: textStatus,
              errorThrown: errorThrown
            };
            var error = ajaxError(adapter, jqXHR, requestData, responseData);
            _ember.default.run.join(null, reject, error);
          };

          adapter._ajaxRequest(hash);
        }, 'DS: RESTAdapter#makeRequest: ' + method + ' ' + url);
      }
    });
  }

  function ajaxSuccess(adapter, jqXHR, payload, requestData) {
    var response = void 0;
    try {
      response = adapter.handleResponse(jqXHR.status, (0, _parseResponseHeaders.default)(jqXHR.getAllResponseHeaders()), payload, requestData);
    } catch (error) {
      return Promise.reject(error);
    }

    if (response && response.isAdapterError) {
      return Promise.reject(response);
    } else {
      return response;
    }
  }

  function ajaxError(adapter, jqXHR, requestData, responseData) {
    (0, _debug.runInDebug)(function () {
      var message = 'The server returned an empty string for ' + requestData.method + ' ' + requestData.url + ', which cannot be parsed into a valid JSON. Return either null or {}.';
      var validJSONString = !(responseData.textStatus === "parsererror" && jqXHR.responseText === "");
      (0, _debug.warn)(message, validJSONString, {
        id: 'ds.adapter.returned-empty-string-as-JSON'
      });
    });

    var error = void 0;

    if (responseData.errorThrown instanceof Error) {
      error = responseData.errorThrown;
    } else if (responseData.textStatus === 'timeout') {
      error = new _errors.TimeoutError();
    } else if (responseData.textStatus === 'abort' || jqXHR.status === 0) {
      error = new _errors.AbortError();
    } else {
      try {
        error = adapter.handleResponse(jqXHR.status, (0, _parseResponseHeaders.default)(jqXHR.getAllResponseHeaders()), adapter.parseErrorResponse(jqXHR.responseText) || responseData.errorThrown, requestData);
      } catch (e) {
        error = e;
      }
    }

    return error;
  }

  //From http://stackoverflow.com/questions/280634/endswith-in-javascript
  function endsWith(string, suffix) {
    if (typeof String.prototype.endsWith !== 'function') {
      return string.indexOf(suffix, string.length - suffix.length) !== -1;
    } else {
      return string.endsWith(suffix);
    }
  }

  exports.default = RESTAdapter;
});
define('ember-data/attr', ['exports', 'ember', 'ember-data/-private/debug'], function (exports, _ember, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = attr;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
    @module ember-data
  */

  function getDefaultValue(record, options, key) {
    if (typeof options.defaultValue === 'function') {
      return options.defaultValue.apply(null, arguments);
    } else {
      var defaultValue = options.defaultValue;
      (0, _debug.deprecate)('Non primitive defaultValues are deprecated because they are shared between all instances. If you would like to use a complex object as a default value please provide a function that returns the complex object.', (typeof defaultValue === 'undefined' ? 'undefined' : _typeof(defaultValue)) !== 'object' || defaultValue === null, {
        id: 'ds.defaultValue.complex-object',
        until: '3.0.0'
      });
      return defaultValue;
    }
  }

  function hasValue(record, key) {
    return key in record._attributes || key in record._inFlightAttributes || key in record._data;
  }

  function getValue(record, key) {
    if (key in record._attributes) {
      return record._attributes[key];
    } else if (key in record._inFlightAttributes) {
      return record._inFlightAttributes[key];
    } else {
      return record._data[key];
    }
  }

  /**
    `DS.attr` defines an attribute on a [DS.Model](/api/data/classes/DS.Model.html).
    By default, attributes are passed through as-is, however you can specify an
    optional type to have the value automatically transformed.
    Ember Data ships with four basic transform types: `string`, `number`,
    `boolean` and `date`. You can define your own transforms by subclassing
    [DS.Transform](/api/data/classes/DS.Transform.html).
  
    Note that you cannot use `attr` to define an attribute of `id`.
  
    `DS.attr` takes an optional hash as a second parameter, currently
    supported options are:
  
    - `defaultValue`: Pass a string or a function to be called to set the attribute
                      to a default value if none is supplied.
  
    Example
  
    ```app/models/user.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      username: DS.attr('string'),
      email: DS.attr('string'),
      verified: DS.attr('boolean', { defaultValue: false })
    });
    ```
  
    Default value can also be a function. This is useful it you want to return
    a new object for each attribute.
  
    ```app/models/user.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      username: DS.attr('string'),
      email: DS.attr('string'),
      settings: DS.attr({
        defaultValue() {
          return {};
        }
      })
    });
    ```
  
    The `options` hash is passed as second argument to a transforms'
    `serialize` and `deserialize` method. This allows to configure a
    transformation and adapt the corresponding value, based on the config:
  
    ```app/models/post.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      text: DS.attr('text', {
        uppercase: true
      })
    });
    ```
  
    ```app/transforms/text.js
    import DS from 'ember-data';
  
    export default DS.Transform.extend({
      serialize(value, options) {
        if (options.uppercase) {
          return value.toUpperCase();
        }
  
        return value;
      },
  
      deserialize(value) {
        return value;
      }
    })
    ```
  
    @namespace
    @method attr
    @for DS
    @param {String|Object} type the attribute type
    @param {Object} options a hash of options
    @return {Attribute}
  */

  function attr(type, options) {
    if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
      options = type;
      type = undefined;
    } else {
      options = options || {};
    }

    var meta = {
      type: type,
      isAttribute: true,
      options: options
    };

    return _ember.default.computed({
      get: function get(key) {
        var internalModel = this._internalModel;
        if (hasValue(internalModel, key)) {
          return getValue(internalModel, key);
        } else {
          return getDefaultValue(this, options, key);
        }
      },
      set: function set(key, value) {
        var internalModel = this._internalModel;
        var oldValue = getValue(internalModel, key);
        var originalValue = void 0;

        if (value !== oldValue) {
          // Add the new value to the changed attributes hash; it will get deleted by
          // the 'didSetProperty' handler if it is no different from the original value
          internalModel._attributes[key] = value;

          if (key in internalModel._inFlightAttributes) {
            originalValue = internalModel._inFlightAttributes[key];
          } else {
            originalValue = internalModel._data[key];
          }

          this._internalModel.send('didSetProperty', {
            name: key,
            oldValue: oldValue,
            originalValue: originalValue,
            value: value
          });
        }

        return value;
      }
    }).meta(meta);
  }
});
define("ember-data/index", ["exports", "ember", "ember-data/-private/debug", "ember-data/-private/features", "ember-data/-private/global", "ember-data/-private/core", "ember-data/-private/system/normalize-model-name", "ember-data/-private/system/model/internal-model", "ember-data/-private/system/promise-proxies", "ember-data/-private/system/store", "ember-data/-private/system/model", "ember-data/model", "ember-data/-private/system/snapshot", "ember-data/adapter", "ember-data/serializer", "ember-data/adapters/errors", "ember-data/-private/system/record-arrays", "ember-data/-private/system/many-array", "ember-data/-private/system/record-array-manager", "ember-data/-private/adapters", "ember-data/-private/adapters/build-url-mixin", "ember-data/-private/serializers", "ember-data/serializers/embedded-records-mixin", "ember-data/-private/transforms", "ember-data/relationships", "ember-data/setup-container", "ember-data/-private/instance-initializers/initialize-store-service", "ember-data/-private/system/relationships/state/relationship", "ember-inflector"], function (exports, _ember, _debug, _features, _global, _core, _normalizeModelName, _internalModel, _promiseProxies, _store, _model, _model2, _snapshot, _adapter, _serializer, _errors, _recordArrays, _manyArray, _recordArrayManager, _adapters, _buildUrlMixin, _serializers, _embeddedRecordsMixin, _transforms, _relationships, _setupContainer, _initializeStoreService, _relationship) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
    Ember Data
    @module ember-data
    @main ember-data
  */

  if (_ember.default.VERSION.match(/^1\.([0-9]|1[0-2])\./)) {
    throw new _ember.default.Error("Ember Data requires at least Ember 1.13.0, but you have " + _ember.default.VERSION + ". Please upgrade your version of Ember, then upgrade Ember Data.");
  }

  _core.default.Store = _store.Store;
  _core.default.PromiseArray = _promiseProxies.PromiseArray;
  _core.default.PromiseObject = _promiseProxies.PromiseObject;

  _core.default.PromiseManyArray = _promiseProxies.PromiseManyArray;

  _core.default.Model = _model2.default;
  _core.default.RootState = _model.RootState;
  _core.default.attr = _model.attr;
  _core.default.Errors = _model.Errors;

  _core.default.InternalModel = _internalModel.default;
  _core.default.Snapshot = _snapshot.default;

  _core.default.Adapter = _adapter.default;

  _core.default.AdapterError = _errors.AdapterError;
  _core.default.InvalidError = _errors.InvalidError;
  _core.default.TimeoutError = _errors.TimeoutError;
  _core.default.AbortError = _errors.AbortError;

  if (true) {
    _core.default.UnauthorizedError = _errors.UnauthorizedError;
    _core.default.ForbiddenError = _errors.ForbiddenError;
    _core.default.NotFoundError = _errors.NotFoundError;
    _core.default.ConflictError = _errors.ConflictError;
    _core.default.ServerError = _errors.ServerError;
  }

  _core.default.errorsHashToArray = _errors.errorsHashToArray;
  _core.default.errorsArrayToHash = _errors.errorsArrayToHash;

  _core.default.Serializer = _serializer.default;

  _core.default.DebugAdapter = _debug.default;

  _core.default.RecordArray = _recordArrays.RecordArray;
  _core.default.FilteredRecordArray = _recordArrays.FilteredRecordArray;
  _core.default.AdapterPopulatedRecordArray = _recordArrays.AdapterPopulatedRecordArray;
  _core.default.ManyArray = _manyArray.default;

  _core.default.RecordArrayManager = _recordArrayManager.default;

  _core.default.RESTAdapter = _adapters.RESTAdapter;
  _core.default.BuildURLMixin = _buildUrlMixin.default;

  _core.default.RESTSerializer = _serializers.RESTSerializer;
  _core.default.JSONSerializer = _serializers.JSONSerializer;

  _core.default.JSONAPIAdapter = _adapters.JSONAPIAdapter;
  _core.default.JSONAPISerializer = _serializers.JSONAPISerializer;

  _core.default.Transform = _transforms.Transform;
  _core.default.DateTransform = _transforms.DateTransform;
  _core.default.StringTransform = _transforms.StringTransform;
  _core.default.NumberTransform = _transforms.NumberTransform;
  _core.default.BooleanTransform = _transforms.BooleanTransform;

  _core.default.EmbeddedRecordsMixin = _embeddedRecordsMixin.default;

  _core.default.belongsTo = _relationships.belongsTo;
  _core.default.hasMany = _relationships.hasMany;

  _core.default.Relationship = _relationship.default;

  _core.default._setupContainer = _setupContainer.default;
  _core.default._initializeStoreService = _initializeStoreService.default;

  Object.defineProperty(_core.default, 'normalizeModelName', {
    enumerable: true,
    writable: false,
    configurable: false,
    value: _normalizeModelName.default
  });

  Object.defineProperty(_global.default, 'DS', {
    configurable: true,
    get: function get() {
      (0, _debug.deprecate)('Using the global version of DS is deprecated. Please either import ' + 'the specific modules needed or `import DS from \'ember-data\';`.', false, { id: 'ember-data.global-ds', until: '3.0.0' });

      return _core.default;
    }
  });

  exports.default = _core.default;
});
define("ember-data/model", ["exports", "ember-data/-private/system/model"], function (exports, _model) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default;
});
define("ember-data/relationships", ["exports", "ember-data/-private/system/relationships/belongs-to", "ember-data/-private/system/relationships/has-many"], function (exports, _belongsTo, _hasMany) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasMany = exports.belongsTo = undefined;
  exports.belongsTo = _belongsTo.default;
  exports.hasMany = _hasMany.default;
});
define('ember-data/serializer', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Object.extend({

    /**
      The `store` property is the application's `store` that contains
      all records. It can be used to look up serializers for other model
      types that may be nested inside the payload response.
       Example:
       ```js
      Serializer.extend({
        extractRelationship(relationshipModelName, relationshipHash) {
          var modelClass = this.store.modelFor(relationshipModelName);
          var relationshipSerializer = this.store.serializerFor(relationshipModelName);
          return relationshipSerializer.normalize(modelClass, relationshipHash);
        }
      });
      ```
       @property store
      @type {DS.Store}
      @public
    */

    /**
      The `normalizeResponse` method is used to normalize a payload from the
      server to a JSON-API Document.
       http://jsonapi.org/format/#document-structure
       Example:
       ```js
      Serializer.extend({
        normalizeResponse(store, primaryModelClass, payload, id, requestType) {
          if (requestType === 'findRecord') {
            return this.normalize(primaryModelClass, payload);
          } else {
            return payload.reduce(function(documentHash, item) {
              let { data, included } = this.normalize(primaryModelClass, item);
              documentHash.included.push(...included);
              documentHash.data.push(data);
              return documentHash;
            }, { data: [], included: [] })
          }
        }
      });
      ```
       @since 1.13.0
      @method normalizeResponse
      @param {DS.Store} store
      @param {DS.Model} primaryModelClass
      @param {Object} payload
      @param {String|Number} id
      @param {String} requestType
      @return {Object} JSON-API Document
    */
    normalizeResponse: null,

    /**
      The `serialize` method is used when a record is saved in order to convert
      the record into the form that your external data source expects.
       `serialize` takes an optional `options` hash with a single option:
       - `includeId`: If this is `true`, `serialize` should include the ID
        in the serialized object it builds.
       Example:
       ```js
      Serializer.extend({
        serialize(snapshot, options) {
          var json = {
            id: snapshot.id
          };
           snapshot.eachAttribute((key, attribute) => {
            json[key] = snapshot.attr(key);
          });
           snapshot.eachRelationship((key, relationship) => {
            if (relationship.kind === 'belongsTo') {
              json[key] = snapshot.belongsTo(key, { id: true });
            } else if (relationship.kind === 'hasMany') {
              json[key] = snapshot.hasMany(key, { ids: true });
            }
          });
           return json;
        },
      });
      ```
       @method serialize
      @param {DS.Snapshot} snapshot
      @param {Object} [options]
      @return {Object}
    */
    serialize: null,

    /**
      The `normalize` method is used to convert a payload received from your
      external data source into the normalized form `store.push()` expects. You
      should override this method, munge the hash and return the normalized
      payload.
       Example:
       ```js
      Serializer.extend({
        normalize(modelClass, resourceHash) {
          var data = {
            id:            resourceHash.id,
            type:          modelClass.modelName,
            attributes:    resourceHash
          };
          return { data: data };
        }
      })
      ```
       @method normalize
      @param {DS.Model} typeClass
      @param {Object} hash
      @return {Object}
    */
    normalize: function normalize(typeClass, hash) {
      return hash;
    }
  });
});
define('ember-data/serializers/embedded-records-mixin', ['exports', 'ember', 'ember-data/-private/debug'], function (exports, _ember, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var get = _ember.default.get;
  var set = _ember.default.set;
  var camelize = _ember.default.String.camelize;

  /**
    ## Using Embedded Records
  
    `DS.EmbeddedRecordsMixin` supports serializing embedded records.
  
    To set up embedded records, include the mixin when extending a serializer,
    then define and configure embedded (model) relationships.
  
    Note that embedded records will serialize with the serializer for their model instead of the serializer in which they are defined.
  
    Below is an example of a per-type serializer (`post` type).
  
    ```app/serializers/post.js
    import DS from 'ember-data';
  
    export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
      attrs: {
        author: { embedded: 'always' },
        comments: { serialize: 'ids' }
      }
    });
    ```
    Note that this use of `{ embedded: 'always' }` is unrelated to
    the `{ embedded: 'always' }` that is defined as an option on `DS.attr` as part of
    defining a model while working with the `ActiveModelSerializer`.  Nevertheless,
    using `{ embedded: 'always' }` as an option to `DS.attr` is not a valid way to setup
    embedded records.
  
    The `attrs` option for a resource `{ embedded: 'always' }` is shorthand for:
  
    ```js
    {
      serialize: 'records',
      deserialize: 'records'
    }
    ```
  
    ### Configuring Attrs
  
    A resource's `attrs` option may be set to use `ids`, `records` or false for the
    `serialize`  and `deserialize` settings.
  
    The `attrs` property can be set on the `ApplicationSerializer` or a per-type
    serializer.
  
    In the case where embedded JSON is expected while extracting a payload (reading)
    the setting is `deserialize: 'records'`, there is no need to use `ids` when
    extracting as that is the default behavior without this mixin if you are using
    the vanilla `EmbeddedRecordsMixin`. Likewise, to embed JSON in the payload while
    serializing `serialize: 'records'` is the setting to use. There is an option of
    not embedding JSON in the serialized payload by using `serialize: 'ids'`. If you
    do not want the relationship sent at all, you can use `serialize: false`.
  
  
    ### EmbeddedRecordsMixin defaults
    If you do not overwrite `attrs` for a specific relationship, the `EmbeddedRecordsMixin`
    will behave in the following way:
  
    BelongsTo: `{ serialize: 'id', deserialize: 'id' }`
    HasMany:   `{ serialize: false, deserialize: 'ids' }`
  
    ### Model Relationships
  
    Embedded records must have a model defined to be extracted and serialized. Note that
    when defining any relationships on your model such as `belongsTo` and `hasMany`, you
    should not both specify `async: true` and also indicate through the serializer's
    `attrs` attribute that the related model should be embedded for deserialization.
    If a model is declared embedded for deserialization (`embedded: 'always'` or `deserialize: 'records'`),
    then do not use `async: true`.
  
    To successfully extract and serialize embedded records the model relationships
    must be setup correcty. See the
    [defining relationships](/guides/models/defining-models/#toc_defining-relationships)
    section of the **Defining Models** guide page.
  
    Records without an `id` property are not considered embedded records, model
    instances must have an `id` property to be used with Ember Data.
  
    ### Example JSON payloads, Models and Serializers
  
    **When customizing a serializer it is important to grok what the customizations
    are. Please read the docs for the methods this mixin provides, in case you need
    to modify it to fit your specific needs.**
  
    For example review the docs for each method of this mixin:
    * [normalize](/api/data/classes/DS.EmbeddedRecordsMixin.html#method_normalize)
    * [serializeBelongsTo](/api/data/classes/DS.EmbeddedRecordsMixin.html#method_serializeBelongsTo)
    * [serializeHasMany](/api/data/classes/DS.EmbeddedRecordsMixin.html#method_serializeHasMany)
  
    @class EmbeddedRecordsMixin
    @namespace DS
  */
  exports.default = _ember.default.Mixin.create({

    /**
      Normalize the record and recursively normalize/extract all the embedded records
      while pushing them into the store as they are encountered
       A payload with an attr configured for embedded records needs to be extracted:
       ```js
      {
        "post": {
          "id": "1"
          "title": "Rails is omakase",
          "comments": [{
            "id": "1",
            "body": "Rails is unagi"
          }, {
            "id": "2",
            "body": "Omakase O_o"
          }]
        }
      }
      ```
     @method normalize
     @param {DS.Model} typeClass
     @param {Object} hash to be normalized
     @param {String} prop the hash has been referenced by
     @return {Object} the normalized hash
    **/
    normalize: function normalize(typeClass, hash, prop) {
      var normalizedHash = this._super(typeClass, hash, prop);
      return this._extractEmbeddedRecords(this, this.store, typeClass, normalizedHash);
    },
    keyForRelationship: function keyForRelationship(key, typeClass, method) {
      if (method === 'serialize' && this.hasSerializeRecordsOption(key) || method === 'deserialize' && this.hasDeserializeRecordsOption(key)) {
        return this.keyForAttribute(key, method);
      } else {
        return this._super(key, typeClass, method) || key;
      }
    },


    /**
      Serialize `belongsTo` relationship when it is configured as an embedded object.
       This example of an author model belongs to a post model:
       ```js
      Post = DS.Model.extend({
        title:    DS.attr('string'),
        body:     DS.attr('string'),
        author:   DS.belongsTo('author')
      });
       Author = DS.Model.extend({
        name:     DS.attr('string'),
        post:     DS.belongsTo('post')
      });
      ```
       Use a custom (type) serializer for the post model to configure embedded author
       ```app/serializers/post.js
      import DS from 'ember-data';
       export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
          author: { embedded: 'always' }
        }
      })
      ```
       A payload with an attribute configured for embedded records can serialize
      the records together under the root attribute's payload:
       ```js
      {
        "post": {
          "id": "1"
          "title": "Rails is omakase",
          "author": {
            "id": "2"
            "name": "dhh"
          }
        }
      }
      ```
       @method serializeBelongsTo
      @param {DS.Snapshot} snapshot
      @param {Object} json
      @param {Object} relationship
    */
    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      var attr = relationship.key;
      if (this.noSerializeOptionSpecified(attr)) {
        this._super(snapshot, json, relationship);
        return;
      }
      var includeIds = this.hasSerializeIdsOption(attr);
      var includeRecords = this.hasSerializeRecordsOption(attr);
      var embeddedSnapshot = snapshot.belongsTo(attr);
      if (includeIds) {
        var serializedKey = this._getMappedKey(relationship.key, snapshot.type);
        if (serializedKey === relationship.key && this.keyForRelationship) {
          serializedKey = this.keyForRelationship(relationship.key, relationship.kind, "serialize");
        }

        if (!embeddedSnapshot) {
          json[serializedKey] = null;
        } else {
          json[serializedKey] = embeddedSnapshot.id;

          if (relationship.options.polymorphic) {
            this.serializePolymorphicType(snapshot, json, relationship);
          }
        }
      } else if (includeRecords) {
        this._serializeEmbeddedBelongsTo(snapshot, json, relationship);
      }
    },
    _serializeEmbeddedBelongsTo: function _serializeEmbeddedBelongsTo(snapshot, json, relationship) {
      var embeddedSnapshot = snapshot.belongsTo(relationship.key);
      var serializedKey = this._getMappedKey(relationship.key, snapshot.type);
      if (serializedKey === relationship.key && this.keyForRelationship) {
        serializedKey = this.keyForRelationship(relationship.key, relationship.kind, "serialize");
      }

      if (!embeddedSnapshot) {
        json[serializedKey] = null;
      } else {
        json[serializedKey] = embeddedSnapshot.serialize({ includeId: true });
        this.removeEmbeddedForeignKey(snapshot, embeddedSnapshot, relationship, json[serializedKey]);

        if (relationship.options.polymorphic) {
          this.serializePolymorphicType(snapshot, json, relationship);
        }
      }
    },


    /**
      Serializes `hasMany` relationships when it is configured as embedded objects.
       This example of a post model has many comments:
       ```js
      Post = DS.Model.extend({
        title:    DS.attr('string'),
        body:     DS.attr('string'),
        comments: DS.hasMany('comment')
      });
       Comment = DS.Model.extend({
        body:     DS.attr('string'),
        post:     DS.belongsTo('post')
      });
      ```
       Use a custom (type) serializer for the post model to configure embedded comments
       ```app/serializers/post.js
      import DS from 'ember-data;
       export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
          comments: { embedded: 'always' }
        }
      })
      ```
       A payload with an attribute configured for embedded records can serialize
      the records together under the root attribute's payload:
       ```js
      {
        "post": {
          "id": "1"
          "title": "Rails is omakase",
          "body": "I want this for my ORM, I want that for my template language..."
          "comments": [{
            "id": "1",
            "body": "Rails is unagi"
          }, {
            "id": "2",
            "body": "Omakase O_o"
          }]
        }
      }
      ```
       The attrs options object can use more specific instruction for extracting and
      serializing. When serializing, an option to embed `ids`, `ids-and-types` or `records` can be set.
      When extracting the only option is `records`.
       So `{ embedded: 'always' }` is shorthand for:
      `{ serialize: 'records', deserialize: 'records' }`
       To embed the `ids` for a related object (using a hasMany relationship):
       ```app/serializers/post.js
      import DS from 'ember-data;
       export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
          comments: { serialize: 'ids', deserialize: 'records' }
        }
      })
      ```
       ```js
      {
        "post": {
          "id": "1"
          "title": "Rails is omakase",
          "body": "I want this for my ORM, I want that for my template language..."
          "comments": ["1", "2"]
        }
      }
      ```
       To embed the relationship as a collection of objects with `id` and `type` keys, set
      `ids-and-types` for the related object.
       This is particularly useful for polymorphic relationships where records don't share
      the same table and the `id` is not enough information.
       By example having a user that has many pets:
       ```js
      User = DS.Model.extend({
        name:    DS.attr('string'),
        pets: DS.hasMany('pet', { polymorphic: true })
      });
       Pet = DS.Model.extend({
        name: DS.attr('string'),
      });
       Cat = Pet.extend({
        // ...
      });
       Parrot = Pet.extend({
        // ...
      });
      ```
       ```app/serializers/user.js
      import DS from 'ember-data;
       export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
          pets: { serialize: 'ids-and-types', deserialize: 'records' }
        }
      });
      ```
       ```js
      {
        "user": {
          "id": "1"
          "name": "Bertin Osborne",
          "pets": [
            { "id": "1", "type": "Cat" },
            { "id": "1", "type": "Parrot"}
          ]
        }
      }
      ```
       @method serializeHasMany
      @param {DS.Snapshot} snapshot
      @param {Object} json
      @param {Object} relationship
    */
    serializeHasMany: function serializeHasMany(snapshot, json, relationship) {
      var attr = relationship.key;
      if (this.noSerializeOptionSpecified(attr)) {
        this._super(snapshot, json, relationship);
        return;
      }

      if (this.hasSerializeIdsOption(attr)) {
        var serializedKey = this._getMappedKey(relationship.key, snapshot.type);
        if (serializedKey === relationship.key && this.keyForRelationship) {
          serializedKey = this.keyForRelationship(relationship.key, relationship.kind, "serialize");
        }

        json[serializedKey] = snapshot.hasMany(attr, { ids: true });
      } else if (this.hasSerializeRecordsOption(attr)) {
        this._serializeEmbeddedHasMany(snapshot, json, relationship);
      } else {
        if (this.hasSerializeIdsAndTypesOption(attr)) {
          this._serializeHasManyAsIdsAndTypes(snapshot, json, relationship);
        }
      }
    },


    /*
      Serializes a hasMany relationship as an array of objects containing only `id` and `type`
      keys.
      This has its use case on polymorphic hasMany relationships where the server is not storing
      all records in the same table using STI, and therefore the `id` is not enough information
       TODO: Make the default in Ember-data 3.0??
    */
    _serializeHasManyAsIdsAndTypes: function _serializeHasManyAsIdsAndTypes(snapshot, json, relationship) {
      var serializedKey = this.keyForAttribute(relationship.key, 'serialize');
      var hasMany = snapshot.hasMany(relationship.key);

      json[serializedKey] = _ember.default.A(hasMany).map(function (recordSnapshot) {
        //
        // I'm sure I'm being utterly naive here. Propably id is a configurate property and
        // type too, and the modelName has to be normalized somehow.
        //
        return { id: recordSnapshot.id, type: recordSnapshot.modelName };
      });
    },
    _serializeEmbeddedHasMany: function _serializeEmbeddedHasMany(snapshot, json, relationship) {
      var serializedKey = this._getMappedKey(relationship.key, snapshot.type);
      if (serializedKey === relationship.key && this.keyForRelationship) {
        serializedKey = this.keyForRelationship(relationship.key, relationship.kind, "serialize");
      }

      (0, _debug.warn)('The embedded relationship \'' + serializedKey + '\' is undefined for \'' + snapshot.modelName + '\' with id \'' + snapshot.id + '\'. Please include it in your original payload.', _ember.default.typeOf(snapshot.hasMany(relationship.key)) !== 'undefined', { id: 'ds.serializer.embedded-relationship-undefined' });

      json[serializedKey] = this._generateSerializedHasMany(snapshot, relationship);
    },


    /*
      Returns an array of embedded records serialized to JSON
    */
    _generateSerializedHasMany: function _generateSerializedHasMany(snapshot, relationship) {
      var hasMany = snapshot.hasMany(relationship.key);
      var manyArray = _ember.default.A(hasMany);
      var ret = new Array(manyArray.length);

      for (var i = 0; i < manyArray.length; i++) {
        var embeddedSnapshot = manyArray[i];
        var embeddedJson = embeddedSnapshot.serialize({ includeId: true });
        this.removeEmbeddedForeignKey(snapshot, embeddedSnapshot, relationship, embeddedJson);
        ret[i] = embeddedJson;
      }

      return ret;
    },


    /**
      When serializing an embedded record, modify the property (in the json payload)
      that refers to the parent record (foreign key for relationship).
       Serializing a `belongsTo` relationship removes the property that refers to the
      parent record
       Serializing a `hasMany` relationship does not remove the property that refers to
      the parent record.
       @method removeEmbeddedForeignKey
      @param {DS.Snapshot} snapshot
      @param {DS.Snapshot} embeddedSnapshot
      @param {Object} relationship
      @param {Object} json
    */
    removeEmbeddedForeignKey: function removeEmbeddedForeignKey(snapshot, embeddedSnapshot, relationship, json) {
      if (relationship.kind === 'belongsTo') {
        var parentRecord = snapshot.type.inverseFor(relationship.key, this.store);
        if (parentRecord) {
          var name = parentRecord.name;
          var embeddedSerializer = this.store.serializerFor(embeddedSnapshot.modelName);
          var parentKey = embeddedSerializer.keyForRelationship(name, parentRecord.kind, 'deserialize');
          if (parentKey) {
            delete json[parentKey];
          }
        }
      } /*else if (relationship.kind === 'hasMany') {
        return;
        }*/
    },


    // checks config for attrs option to embedded (always) - serialize and deserialize
    hasEmbeddedAlwaysOption: function hasEmbeddedAlwaysOption(attr) {
      var option = this.attrsOption(attr);
      return option && option.embedded === 'always';
    },


    // checks config for attrs option to serialize ids
    hasSerializeRecordsOption: function hasSerializeRecordsOption(attr) {
      var alwaysEmbed = this.hasEmbeddedAlwaysOption(attr);
      var option = this.attrsOption(attr);
      return alwaysEmbed || option && option.serialize === 'records';
    },


    // checks config for attrs option to serialize records
    hasSerializeIdsOption: function hasSerializeIdsOption(attr) {
      var option = this.attrsOption(attr);
      return option && (option.serialize === 'ids' || option.serialize === 'id');
    },


    // checks config for attrs option to serialize records as objects containing id and types
    hasSerializeIdsAndTypesOption: function hasSerializeIdsAndTypesOption(attr) {
      var option = this.attrsOption(attr);
      return option && (option.serialize === 'ids-and-types' || option.serialize === 'id-and-type');
    },


    // checks config for attrs option to serialize records
    noSerializeOptionSpecified: function noSerializeOptionSpecified(attr) {
      var option = this.attrsOption(attr);
      return !(option && (option.serialize || option.embedded));
    },


    // checks config for attrs option to deserialize records
    // a defined option object for a resource is treated the same as
    // `deserialize: 'records'`
    hasDeserializeRecordsOption: function hasDeserializeRecordsOption(attr) {
      var alwaysEmbed = this.hasEmbeddedAlwaysOption(attr);
      var option = this.attrsOption(attr);
      return alwaysEmbed || option && option.deserialize === 'records';
    },
    attrsOption: function attrsOption(attr) {
      var attrs = this.get('attrs');
      return attrs && (attrs[camelize(attr)] || attrs[attr]);
    },


    /**
     @method _extractEmbeddedRecords
     @private
    */
    _extractEmbeddedRecords: function _extractEmbeddedRecords(serializer, store, typeClass, partial) {
      var _this = this;

      typeClass.eachRelationship(function (key, relationship) {
        if (serializer.hasDeserializeRecordsOption(key)) {
          if (relationship.kind === "hasMany") {
            _this._extractEmbeddedHasMany(store, key, partial, relationship);
          }
          if (relationship.kind === "belongsTo") {
            _this._extractEmbeddedBelongsTo(store, key, partial, relationship);
          }
        }
      });
      return partial;
    },


    /**
     @method _extractEmbeddedHasMany
     @private
    */
    _extractEmbeddedHasMany: function _extractEmbeddedHasMany(store, key, hash, relationshipMeta) {
      var relationshipHash = get(hash, 'data.relationships.' + key + '.data');

      if (!relationshipHash) {
        return;
      }

      var hasMany = new Array(relationshipHash.length);

      for (var i = 0; i < relationshipHash.length; i++) {
        var item = relationshipHash[i];

        var _normalizeEmbeddedRel = this._normalizeEmbeddedRelationship(store, relationshipMeta, item),
            data = _normalizeEmbeddedRel.data,
            included = _normalizeEmbeddedRel.included;

        hash.included = hash.included || [];
        hash.included.push(data);
        if (included) {
          var _hash$included;

          (_hash$included = hash.included).push.apply(_hash$included, included);
        }

        hasMany[i] = { id: data.id, type: data.type };
      }

      var relationship = { data: hasMany };
      set(hash, 'data.relationships.' + key, relationship);
    },


    /**
     @method _extractEmbeddedBelongsTo
     @private
    */
    _extractEmbeddedBelongsTo: function _extractEmbeddedBelongsTo(store, key, hash, relationshipMeta) {
      var relationshipHash = get(hash, 'data.relationships.' + key + '.data');
      if (!relationshipHash) {
        return;
      }

      var _normalizeEmbeddedRel2 = this._normalizeEmbeddedRelationship(store, relationshipMeta, relationshipHash),
          data = _normalizeEmbeddedRel2.data,
          included = _normalizeEmbeddedRel2.included;

      hash.included = hash.included || [];
      hash.included.push(data);
      if (included) {
        var _hash$included2;

        (_hash$included2 = hash.included).push.apply(_hash$included2, included);
      }

      var belongsTo = { id: data.id, type: data.type };
      var relationship = { data: belongsTo };

      set(hash, 'data.relationships.' + key, relationship);
    },


    /**
     @method _normalizeEmbeddedRelationship
     @private
    */
    _normalizeEmbeddedRelationship: function _normalizeEmbeddedRelationship(store, relationshipMeta, relationshipHash) {
      var modelName = relationshipMeta.type;
      if (relationshipMeta.options.polymorphic) {
        modelName = relationshipHash.type;
      }
      var modelClass = store.modelFor(modelName);
      var serializer = store.serializerFor(modelName);

      return serializer.normalize(modelClass, relationshipHash, null);
    },

    isEmbeddedRecordsMixin: true
  });
});
define('ember-data/serializers/json-api', ['exports', 'ember', 'ember-inflector', 'ember-data/-private/debug', 'ember-data/serializers/json', 'ember-data/-private/system/normalize-model-name', 'ember-data/-private/features'], function (exports, _ember, _emberInflector, _debug, _json, _normalizeModelName, _features) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
    @module ember-data
  */

  var dasherize = _ember.default.String.dasherize;

  /**
    Ember Data 2.0 Serializer:
  
    In Ember Data a Serializer is used to serialize and deserialize
    records when they are transferred in and out of an external source.
    This process involves normalizing property names, transforming
    attribute values and serializing relationships.
  
    `JSONAPISerializer` supports the http://jsonapi.org/ spec and is the
    serializer recommended by Ember Data.
  
    This serializer normalizes a JSON API payload that looks like:
  
    ```app/models/player.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      name: DS.attr('string'),
      skill: DS.attr('string'),
      gamesPlayed: DS.attr('number'),
      club: DS.belongsTo('club')
    });
    ```
  
    ```app/models/club.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      name: DS.attr('string'),
      location: DS.attr('string'),
      players: DS.hasMany('player')
    });
    ```
  
    ```js
      {
        "data": [
          {
            "attributes": {
              "name": "Benfica",
              "location": "Portugal"
            },
            "id": "1",
            "relationships": {
              "players": {
                "data": [
                  {
                    "id": "3",
                    "type": "players"
                  }
                ]
              }
            },
            "type": "clubs"
          }
        ],
        "included": [
          {
            "attributes": {
              "name": "Eusebio Silva Ferreira",
              "skill": "Rocket shot",
              "games-played": 431
            },
            "id": "3",
            "relationships": {
              "club": {
                "data": {
                  "id": "1",
                  "type": "clubs"
                }
              }
            },
            "type": "players"
          }
        ]
      }
    ```
  
    to the format that the Ember Data store expects.
  
    ### Customizing meta
  
    Since a JSON API Document can have meta defined in multiple locations you can
    use the specific serializer hooks if you need to customize the meta.
  
    One scenario would be to camelCase the meta keys of your payload. The example
    below shows how this could be done using `normalizeArrayResponse` and
    `extractRelationship`.
  
    ```app/serializers/application.js
    export default JSONAPISerializer.extend({
      normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        let normalizedDocument = this._super(...arguments);
  
        // Customize document meta
        normalizedDocument.meta = camelCaseKeys(normalizedDocument.meta);
  
        return normalizedDocument;
      },
  
      extractRelationship(relationshipHash) {
        let normalizedRelationship = this._super(...arguments);
  
        // Customize relationship meta
        normalizedRelationship.meta = camelCaseKeys(normalizedRelationship.meta);
  
        return normalizedRelationship;
      }
    });
    ```
  
    @since 1.13.0
    @class JSONAPISerializer
    @namespace DS
    @extends DS.JSONSerializer
  */
  var JSONAPISerializer = _json.default.extend({
    _normalizeDocumentHelper: function _normalizeDocumentHelper(documentHash) {

      if (_ember.default.typeOf(documentHash.data) === 'object') {
        documentHash.data = this._normalizeResourceHelper(documentHash.data);
      } else if (Array.isArray(documentHash.data)) {
        var ret = new Array(documentHash.data.length);

        for (var i = 0; i < documentHash.data.length; i++) {
          var data = documentHash.data[i];
          ret[i] = this._normalizeResourceHelper(data);
        }

        documentHash.data = ret;
      }

      if (Array.isArray(documentHash.included)) {
        var _ret = new Array(documentHash.included.length);

        for (var _i = 0; _i < documentHash.included.length; _i++) {
          var included = documentHash.included[_i];
          _ret[_i] = this._normalizeResourceHelper(included);
        }

        documentHash.included = _ret;
      }

      return documentHash;
    },
    _normalizeRelationshipDataHelper: function _normalizeRelationshipDataHelper(relationshipDataHash) {
      if ((0, _features.default)("ds-payload-type-hooks")) {
        var modelName = this.modelNameFromPayloadType(relationshipDataHash.type);
        var deprecatedModelNameLookup = this.modelNameFromPayloadKey(relationshipDataHash.type);

        if (modelName !== deprecatedModelNameLookup && this._hasCustomModelNameFromPayloadKey()) {
          (0, _debug.deprecate)("You are using modelNameFromPayloadKey to normalize the type for a relationship. This has been deprecated in favor of modelNameFromPayloadType", false, {
            id: 'ds.json-api-serializer.deprecated-model-name-for-relationship',
            until: '3.0.0'
          });

          modelName = deprecatedModelNameLookup;
        }

        relationshipDataHash.type = modelName;
      } else {
        relationshipDataHash.type = this.modelNameFromPayloadKey(relationshipDataHash.type);
      }

      return relationshipDataHash;
    },
    _normalizeResourceHelper: function _normalizeResourceHelper(resourceHash) {
      (0, _debug.assert)(this.warnMessageForUndefinedType(), !_ember.default.isNone(resourceHash.type), {
        id: 'ds.serializer.type-is-undefined'
      });

      var modelName = void 0,
          usedLookup = void 0;

      if ((0, _features.default)("ds-payload-type-hooks")) {
        modelName = this.modelNameFromPayloadType(resourceHash.type);
        var deprecatedModelNameLookup = this.modelNameFromPayloadKey(resourceHash.type);

        usedLookup = 'modelNameFromPayloadType';

        if (modelName !== deprecatedModelNameLookup && this._hasCustomModelNameFromPayloadKey()) {
          (0, _debug.deprecate)("You are using modelNameFromPayloadKey to normalize the type for a resource. This has been deprecated in favor of modelNameFromPayloadType", false, {
            id: 'ds.json-api-serializer.deprecated-model-name-for-resource',
            until: '3.0.0'
          });

          modelName = deprecatedModelNameLookup;
          usedLookup = 'modelNameFromPayloadKey';
        }
      } else {
        modelName = this.modelNameFromPayloadKey(resourceHash.type);
        usedLookup = 'modelNameFromPayloadKey';
      }

      if (!this.store._hasModelFor(modelName)) {
        (0, _debug.warn)(this.warnMessageNoModelForType(modelName, resourceHash.type, usedLookup), false, {
          id: 'ds.serializer.model-for-type-missing'
        });
        return null;
      }

      var modelClass = this.store._modelFor(modelName);
      var serializer = this.store.serializerFor(modelName);

      var _serializer$normalize = serializer.normalize(modelClass, resourceHash),
          data = _serializer$normalize.data;

      return data;
    },
    pushPayload: function pushPayload(store, payload) {
      var normalizedPayload = this._normalizeDocumentHelper(payload);
      if ((0, _features.default)('ds-pushpayload-return')) {
        return store.push(normalizedPayload);
      } else {
        store.push(normalizedPayload);
      }
    },
    _normalizeResponse: function _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
      var normalizedPayload = this._normalizeDocumentHelper(payload);
      return normalizedPayload;
    },
    normalizeQueryRecordResponse: function normalizeQueryRecordResponse() {
      var normalized = this._super.apply(this, arguments);

      (0, _debug.assert)('Expected the primary data returned by the serializer for a `queryRecord` response to be a single object but instead it was an array.', !Array.isArray(normalized.data), {
        id: 'ds.serializer.json-api.queryRecord-array-response'
      });

      return normalized;
    },
    extractAttributes: function extractAttributes(modelClass, resourceHash) {
      var _this = this;

      var attributes = {};

      if (resourceHash.attributes) {
        modelClass.eachAttribute(function (key) {
          var attributeKey = _this.keyForAttribute(key, 'deserialize');
          if (resourceHash.attributes[attributeKey] !== undefined) {
            attributes[key] = resourceHash.attributes[attributeKey];
          }
          (0, _debug.runInDebug)(function () {
            if (resourceHash.attributes[attributeKey] === undefined && resourceHash.attributes[key] !== undefined) {
              (0, _debug.assert)('Your payload for \'' + modelClass.modelName + '\' contains \'' + key + '\', but your serializer is setup to look for \'' + attributeKey + '\'. This is most likely because Ember Data\'s JSON API serializer dasherizes attribute keys by default. You should subclass JSONAPISerializer and implement \'keyForAttribute(key) { return key; }\' to prevent Ember Data from customizing your attribute keys.', false);
            }
          });
        });
      }

      return attributes;
    },
    extractRelationship: function extractRelationship(relationshipHash) {

      if (_ember.default.typeOf(relationshipHash.data) === 'object') {
        relationshipHash.data = this._normalizeRelationshipDataHelper(relationshipHash.data);
      }

      if (Array.isArray(relationshipHash.data)) {
        var ret = new Array(relationshipHash.data.length);

        for (var i = 0; i < relationshipHash.data.length; i++) {
          var data = relationshipHash.data[i];
          ret[i] = this._normalizeRelationshipDataHelper(data);
        }

        relationshipHash.data = ret;
      }

      return relationshipHash;
    },
    extractRelationships: function extractRelationships(modelClass, resourceHash) {
      var _this2 = this;

      var relationships = {};

      if (resourceHash.relationships) {
        modelClass.eachRelationship(function (key, relationshipMeta) {
          var relationshipKey = _this2.keyForRelationship(key, relationshipMeta.kind, 'deserialize');
          if (resourceHash.relationships[relationshipKey] !== undefined) {

            var relationshipHash = resourceHash.relationships[relationshipKey];
            relationships[key] = _this2.extractRelationship(relationshipHash);
          }
          (0, _debug.runInDebug)(function () {
            if (resourceHash.relationships[relationshipKey] === undefined && resourceHash.relationships[key] !== undefined) {
              (0, _debug.assert)('Your payload for \'' + modelClass.modelName + '\' contains \'' + key + '\', but your serializer is setup to look for \'' + relationshipKey + '\'. This is most likely because Ember Data\'s JSON API serializer dasherizes relationship keys by default. You should subclass JSONAPISerializer and implement \'keyForRelationship(key) { return key; }\' to prevent Ember Data from customizing your relationship keys.', false);
            }
          });
        });
      }

      return relationships;
    },
    _extractType: function _extractType(modelClass, resourceHash) {
      if ((0, _features.default)("ds-payload-type-hooks")) {
        var modelName = this.modelNameFromPayloadType(resourceHash.type);
        var deprecatedModelNameLookup = this.modelNameFromPayloadKey(resourceHash.type);

        if (modelName !== deprecatedModelNameLookup && this._hasCustomModelNameFromPayloadKey()) {
          (0, _debug.deprecate)("You are using modelNameFromPayloadKey to normalize the type for a polymorphic relationship. This has been deprecated in favor of modelNameFromPayloadType", false, {
            id: 'ds.json-api-serializer.deprecated-model-name-for-polymorphic-type',
            until: '3.0.0'
          });

          modelName = deprecatedModelNameLookup;
        }

        return modelName;
      } else {
        return this.modelNameFromPayloadKey(resourceHash.type);
      }
    },
    modelNameFromPayloadKey: function modelNameFromPayloadKey(key) {
      return (0, _emberInflector.singularize)((0, _normalizeModelName.default)(key));
    },
    payloadKeyFromModelName: function payloadKeyFromModelName(modelName) {
      return (0, _emberInflector.pluralize)(modelName);
    },
    normalize: function normalize(modelClass, resourceHash) {
      if (resourceHash.attributes) {
        this.normalizeUsingDeclaredMapping(modelClass, resourceHash.attributes);
      }

      if (resourceHash.relationships) {
        this.normalizeUsingDeclaredMapping(modelClass, resourceHash.relationships);
      }

      var data = {
        id: this.extractId(modelClass, resourceHash),
        type: this._extractType(modelClass, resourceHash),
        attributes: this.extractAttributes(modelClass, resourceHash),
        relationships: this.extractRelationships(modelClass, resourceHash)
      };

      this.applyTransforms(modelClass, data.attributes);

      return { data: data };
    },
    keyForAttribute: function keyForAttribute(key, method) {
      return dasherize(key);
    },
    keyForRelationship: function keyForRelationship(key, typeClass, method) {
      return dasherize(key);
    },
    serialize: function serialize(snapshot, options) {
      var data = this._super.apply(this, arguments);

      var payloadType = void 0;
      if ((0, _features.default)("ds-payload-type-hooks")) {
        payloadType = this.payloadTypeFromModelName(snapshot.modelName);
        var deprecatedPayloadTypeLookup = this.payloadKeyFromModelName(snapshot.modelName);

        if (payloadType !== deprecatedPayloadTypeLookup && this._hasCustomPayloadKeyFromModelName()) {
          (0, _debug.deprecate)("You used payloadKeyFromModelName to customize how a type is serialized. Use payloadTypeFromModelName instead.", false, {
            id: 'ds.json-api-serializer.deprecated-payload-type-for-model',
            until: '3.0.0'
          });

          payloadType = deprecatedPayloadTypeLookup;
        }
      } else {
        payloadType = this.payloadKeyFromModelName(snapshot.modelName);
      }

      data.type = payloadType;
      return { data: data };
    },
    serializeAttribute: function serializeAttribute(snapshot, json, key, attribute) {
      var type = attribute.type;

      if (this._canSerialize(key)) {
        json.attributes = json.attributes || {};

        var value = snapshot.attr(key);
        if (type) {
          var transform = this.transformFor(type);
          value = transform.serialize(value, attribute.options);
        }

        var payloadKey = this._getMappedKey(key, snapshot.type);

        if (payloadKey === key) {
          payloadKey = this.keyForAttribute(key, 'serialize');
        }

        json.attributes[payloadKey] = value;
      }
    },
    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      var key = relationship.key;

      if (this._canSerialize(key)) {
        var belongsTo = snapshot.belongsTo(key);
        if (belongsTo !== undefined) {

          json.relationships = json.relationships || {};

          var payloadKey = this._getMappedKey(key, snapshot.type);
          if (payloadKey === key) {
            payloadKey = this.keyForRelationship(key, 'belongsTo', 'serialize');
          }

          var data = null;
          if (belongsTo) {
            var payloadType = void 0;

            if ((0, _features.default)("ds-payload-type-hooks")) {
              payloadType = this.payloadTypeFromModelName(belongsTo.modelName);
              var deprecatedPayloadTypeLookup = this.payloadKeyFromModelName(belongsTo.modelName);

              if (payloadType !== deprecatedPayloadTypeLookup && this._hasCustomPayloadKeyFromModelName()) {
                (0, _debug.deprecate)("You used payloadKeyFromModelName to serialize type for belongs-to relationship. Use payloadTypeFromModelName instead.", false, {
                  id: 'ds.json-api-serializer.deprecated-payload-type-for-belongs-to',
                  until: '3.0.0'
                });

                payloadType = deprecatedPayloadTypeLookup;
              }
            } else {
              payloadType = this.payloadKeyFromModelName(belongsTo.modelName);
            }

            data = {
              type: payloadType,
              id: belongsTo.id
            };
          }

          json.relationships[payloadKey] = { data: data };
        }
      }
    },
    serializeHasMany: function serializeHasMany(snapshot, json, relationship) {
      var key = relationship.key;
      var shouldSerializeHasMany = '_shouldSerializeHasMany';
      if (true) {
        shouldSerializeHasMany = 'shouldSerializeHasMany';
      }

      if (this[shouldSerializeHasMany](snapshot, key, relationship)) {
        var hasMany = snapshot.hasMany(key);
        if (hasMany !== undefined) {

          json.relationships = json.relationships || {};

          var payloadKey = this._getMappedKey(key, snapshot.type);
          if (payloadKey === key && this.keyForRelationship) {
            payloadKey = this.keyForRelationship(key, 'hasMany', 'serialize');
          }

          var data = new Array(hasMany.length);

          for (var i = 0; i < hasMany.length; i++) {
            var item = hasMany[i];

            var payloadType = void 0;

            if ((0, _features.default)("ds-payload-type-hooks")) {
              payloadType = this.payloadTypeFromModelName(item.modelName);
              var deprecatedPayloadTypeLookup = this.payloadKeyFromModelName(item.modelName);

              if (payloadType !== deprecatedPayloadTypeLookup && this._hasCustomPayloadKeyFromModelName()) {
                (0, _debug.deprecate)("You used payloadKeyFromModelName to serialize type for belongs-to relationship. Use payloadTypeFromModelName instead.", false, {
                  id: 'ds.json-api-serializer.deprecated-payload-type-for-has-many',
                  until: '3.0.0'
                });

                payloadType = deprecatedPayloadTypeLookup;
              }
            } else {
              payloadType = this.payloadKeyFromModelName(item.modelName);
            }

            data[i] = {
              type: payloadType,
              id: item.id
            };
          }

          json.relationships[payloadKey] = { data: data };
        }
      }
    }
  });

  if ((0, _features.default)("ds-payload-type-hooks")) {

    JSONAPISerializer.reopen({
      modelNameFromPayloadType: function modelNameFromPayloadType(type) {
        return (0, _emberInflector.singularize)((0, _normalizeModelName.default)(type));
      },
      payloadTypeFromModelName: function payloadTypeFromModelName(modelName) {
        return (0, _emberInflector.pluralize)(modelName);
      },
      _hasCustomModelNameFromPayloadKey: function _hasCustomModelNameFromPayloadKey() {
        return this.modelNameFromPayloadKey !== JSONAPISerializer.prototype.modelNameFromPayloadKey;
      },
      _hasCustomPayloadKeyFromModelName: function _hasCustomPayloadKeyFromModelName() {
        return this.payloadKeyFromModelName !== JSONAPISerializer.prototype.payloadKeyFromModelName;
      }
    });
  }

  (0, _debug.runInDebug)(function () {
    JSONAPISerializer.reopen({
      willMergeMixin: function willMergeMixin(props) {
        var constructor = this.constructor;
        (0, _debug.warn)('You\'ve defined \'extractMeta\' in ' + constructor.toString() + ' which is not used for serializers extending JSONAPISerializer. Read more at http://emberjs.com/api/data/classes/DS.JSONAPISerializer.html#toc_customizing-meta on how to customize meta when using JSON API.', _ember.default.isNone(props.extractMeta) || props.extractMeta === _json.default.prototype.extractMeta, {
          id: 'ds.serializer.json-api.extractMeta'
        });
        (0, _debug.warn)('The JSONAPISerializer does not work with the EmbeddedRecordsMixin because the JSON API spec does not describe how to format embedded resources.', !props.isEmbeddedRecordsMixin, {
          id: 'ds.serializer.embedded-records-mixin-not-supported'
        });
      },
      warnMessageForUndefinedType: function warnMessageForUndefinedType() {
        return 'Encountered a resource object with an undefined type (resolved resource using ' + this.constructor.toString() + ')';
      },
      warnMessageNoModelForType: function warnMessageNoModelForType(modelName, originalType, usedLookup) {
        return 'Encountered a resource object with type "' + originalType + '", but no model was found for model name "' + modelName + '" (resolved model name using \'' + this.constructor.toString() + '.' + usedLookup + '("' + originalType + '")\').';
      }
    });
  });

  exports.default = JSONAPISerializer;
});
define('ember-data/serializers/json', ['exports', 'ember', 'ember-data/-private/debug', 'ember-data/serializer', 'ember-data/-private/system/coerce-id', 'ember-data/-private/system/normalize-model-name', 'ember-data/-private/utils', 'ember-data/-private/features', 'ember-data/adapters/errors'], function (exports, _ember, _debug, _serializer, _coerceId, _normalizeModelName, _utils, _features, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var get = _ember.default.get;
  var isNone = _ember.default.isNone;
  var assign = _ember.default.assign || _ember.default.merge;

  /**
    Ember Data 2.0 Serializer:
  
    In Ember Data a Serializer is used to serialize and deserialize
    records when they are transferred in and out of an external source.
    This process involves normalizing property names, transforming
    attribute values and serializing relationships.
  
    By default, Ember Data uses and recommends the `JSONAPISerializer`.
  
    `JSONSerializer` is useful for simpler or legacy backends that may
    not support the http://jsonapi.org/ spec.
  
    For example, given the following `User` model and JSON payload:
  
    ```app/models/user.js
    import DS from 'ember-data';
  
    export default DS.Model.extend({
      friends: DS.hasMany('user'),
      house: DS.belongsTo('location'),
  
      name: DS.attr('string')
    });
    ```
  
    ```js
    {
      id: 1,
      name: 'Sebastian',
      friends: [3, 4],
      links: {
        house: '/houses/lefkada'
      }
    }
    ```
  
    `JSONSerializer` will normalize the JSON payload to the JSON API format that the
    Ember Data store expects.
  
    You can customize how JSONSerializer processes its payload by passing options in
    the `attrs` hash or by subclassing the `JSONSerializer` and overriding hooks:
  
      - To customize how a single record is normalized, use the `normalize` hook.
      - To customize how `JSONSerializer` normalizes the whole server response, use the
        `normalizeResponse` hook.
      - To customize how `JSONSerializer` normalizes a specific response from the server,
        use one of the many specific `normalizeResponse` hooks.
      - To customize how `JSONSerializer` normalizes your id, attributes or relationships,
        use the `extractId`, `extractAttributes` and `extractRelationships` hooks.
  
    The `JSONSerializer` normalization process follows these steps:
  
      - `normalizeResponse` - entry method to the serializer.
      - `normalizeCreateRecordResponse` - a `normalizeResponse` for a specific operation is called.
      - `normalizeSingleResponse`|`normalizeArrayResponse` - for methods like `createRecord` we expect
        a single record back, while for methods like `findAll` we expect multiple methods back.
      - `normalize` - `normalizeArray` iterates and calls `normalize` for each of its records while `normalizeSingle`
        calls it once. This is the method you most likely want to subclass.
      - `extractId` | `extractAttributes` | `extractRelationships` - `normalize` delegates to these methods to
        turn the record payload into the JSON API format.
  
    @class JSONSerializer
    @namespace DS
    @extends DS.Serializer
  */
  var JSONSerializer = _serializer.default.extend({

    /**
      The `primaryKey` is used when serializing and deserializing
      data. Ember Data always uses the `id` property to store the id of
      the record. The external source may not always follow this
      convention. In these cases it is useful to override the
      `primaryKey` property to match the `primaryKey` of your external
      store.
       Example
       ```app/serializers/application.js
      import DS from 'ember-data';
       export default DS.JSONSerializer.extend({
        primaryKey: '_id'
      });
      ```
       @property primaryKey
      @type {String}
      @default 'id'
    */
    primaryKey: 'id',

    /**
      The `attrs` object can be used to declare a simple mapping between
      property names on `DS.Model` records and payload keys in the
      serialized JSON object representing the record. An object with the
      property `key` can also be used to designate the attribute's key on
      the response payload.
       Example
       ```app/models/person.js
      import DS from 'ember-data';
       export default DS.Model.extend({
        firstName: DS.attr('string'),
        lastName: DS.attr('string'),
        occupation: DS.attr('string'),
        admin: DS.attr('boolean')
      });
      ```
       ```app/serializers/person.js
      import DS from 'ember-data';
       export default DS.JSONSerializer.extend({
        attrs: {
          admin: 'is_admin',
          occupation: { key: 'career' }
        }
      });
      ```
       You can also remove attributes by setting the `serialize` key to
      `false` in your mapping object.
       Example
       ```app/serializers/person.js
      import DS from 'ember-data';
       export default DS.JSONSerializer.extend({
        attrs: {
          admin: { serialize: false },
          occupation: { key: 'career' }
        }
      });
      ```
       When serialized:
       ```javascript
      {
        "firstName": "Harry",
        "lastName": "Houdini",
        "career": "magician"
      }
      ```
       Note that the `admin` is now not included in the payload.
       @property attrs
      @type {Object}
    */
    mergedProperties: ['attrs'],

    applyTransforms: function applyTransforms(typeClass, data) {
      var _this = this;

      var attributes = get(typeClass, 'attributes');

      typeClass.eachTransformedAttribute(function (key, typeClass) {
        if (data[key] === undefined) {
          return;
        }

        var transform = _this.transformFor(typeClass);
        var transformMeta = attributes.get(key);
        data[key] = transform.deserialize(data[key], transformMeta.options);
      });

      return data;
    },
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      switch (requestType) {
        case 'findRecord':
          return this.normalizeFindRecordResponse.apply(this, arguments);
        case 'queryRecord':
          return this.normalizeQueryRecordResponse.apply(this, arguments);
        case 'findAll':
          return this.normalizeFindAllResponse.apply(this, arguments);
        case 'findBelongsTo':
          return this.normalizeFindBelongsToResponse.apply(this, arguments);
        case 'findHasMany':
          return this.normalizeFindHasManyResponse.apply(this, arguments);
        case 'findMany':
          return this.normalizeFindManyResponse.apply(this, arguments);
        case 'query':
          return this.normalizeQueryResponse.apply(this, arguments);
        case 'createRecord':
          return this.normalizeCreateRecordResponse.apply(this, arguments);
        case 'deleteRecord':
          return this.normalizeDeleteRecordResponse.apply(this, arguments);
        case 'updateRecord':
          return this.normalizeUpdateRecordResponse.apply(this, arguments);
      }
    },
    normalizeFindRecordResponse: function normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSingleResponse.apply(this, arguments);
    },
    normalizeQueryRecordResponse: function normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSingleResponse.apply(this, arguments);
    },
    normalizeFindAllResponse: function normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeArrayResponse.apply(this, arguments);
    },
    normalizeFindBelongsToResponse: function normalizeFindBelongsToResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSingleResponse.apply(this, arguments);
    },
    normalizeFindHasManyResponse: function normalizeFindHasManyResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeArrayResponse.apply(this, arguments);
    },
    normalizeFindManyResponse: function normalizeFindManyResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeArrayResponse.apply(this, arguments);
    },
    normalizeQueryResponse: function normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeArrayResponse.apply(this, arguments);
    },
    normalizeCreateRecordResponse: function normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSaveResponse.apply(this, arguments);
    },
    normalizeDeleteRecordResponse: function normalizeDeleteRecordResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSaveResponse.apply(this, arguments);
    },
    normalizeUpdateRecordResponse: function normalizeUpdateRecordResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSaveResponse.apply(this, arguments);
    },
    normalizeSaveResponse: function normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
      return this.normalizeSingleResponse.apply(this, arguments);
    },
    normalizeSingleResponse: function normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
      return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, true);
    },
    normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
      return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
    },
    _normalizeResponse: function _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
      var documentHash = {
        data: null,
        included: []
      };

      var meta = this.extractMeta(store, primaryModelClass, payload);
      if (meta) {
        (0, _debug.assert)('The `meta` returned from `extractMeta` has to be an object, not "' + _ember.default.typeOf(meta) + '".', _ember.default.typeOf(meta) === 'object');
        documentHash.meta = meta;
      }

      if (isSingle) {
        var _normalize = this.normalize(primaryModelClass, payload),
            data = _normalize.data,
            included = _normalize.included;

        documentHash.data = data;
        if (included) {
          documentHash.included = included;
        }
      } else {
        var ret = new Array(payload.length);
        for (var i = 0, l = payload.length; i < l; i++) {
          var item = payload[i];

          var _normalize2 = this.normalize(primaryModelClass, item),
              _data = _normalize2.data,
              _included = _normalize2.included;

          if (_included) {
            var _documentHash$include;

            (_documentHash$include = documentHash.included).push.apply(_documentHash$include, _included);
          }
          ret[i] = _data;
        }

        documentHash.data = ret;
      }

      return documentHash;
    },
    normalize: function normalize(modelClass, resourceHash) {
      var data = null;

      if (resourceHash) {
        this.normalizeUsingDeclaredMapping(modelClass, resourceHash);
        if (_ember.default.typeOf(resourceHash.links) === 'object') {
          this.normalizeUsingDeclaredMapping(modelClass, resourceHash.links);
        }

        data = {
          id: this.extractId(modelClass, resourceHash),
          type: modelClass.modelName,
          attributes: this.extractAttributes(modelClass, resourceHash),
          relationships: this.extractRelationships(modelClass, resourceHash)
        };

        this.applyTransforms(modelClass, data.attributes);
      }

      return { data: data };
    },
    extractId: function extractId(modelClass, resourceHash) {
      var primaryKey = get(this, 'primaryKey');
      var id = resourceHash[primaryKey];
      return (0, _coerceId.default)(id);
    },
    extractAttributes: function extractAttributes(modelClass, resourceHash) {
      var _this2 = this;

      var attributeKey = void 0;
      var attributes = {};

      modelClass.eachAttribute(function (key) {
        attributeKey = _this2.keyForAttribute(key, 'deserialize');
        if (resourceHash[attributeKey] !== undefined) {
          attributes[key] = resourceHash[attributeKey];
        }
      });

      return attributes;
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      if (_ember.default.isNone(relationshipHash)) {
        return null;
      }
      /*
        When `relationshipHash` is an object it usually means that the relationship
        is polymorphic. It could however also be embedded resources that the
        EmbeddedRecordsMixin has be able to process.
      */
      if (_ember.default.typeOf(relationshipHash) === 'object') {
        if (relationshipHash.id) {
          relationshipHash.id = (0, _coerceId.default)(relationshipHash.id);
        }

        var modelClass = this.store.modelFor(relationshipModelName);
        if (relationshipHash.type && !(0, _utils.modelHasAttributeOrRelationshipNamedType)(modelClass)) {

          if ((0, _features.default)("ds-payload-type-hooks")) {
            var modelName = this.modelNameFromPayloadType(relationshipHash.type);
            var deprecatedModelNameLookup = this.modelNameFromPayloadKey(relationshipHash.type);

            if (modelName !== deprecatedModelNameLookup && this._hasCustomModelNameFromPayloadKey()) {
              (0, _debug.deprecate)("You used modelNameFromPayloadKey to customize how a type is normalized. Use modelNameFromPayloadType instead", false, {
                id: 'ds.json-serializer.deprecated-type-for-polymorphic-relationship',
                until: '3.0.0'
              });

              modelName = deprecatedModelNameLookup;
            }

            relationshipHash.type = modelName;
          } else {
            relationshipHash.type = this.modelNameFromPayloadKey(relationshipHash.type);
          }
        }
        return relationshipHash;
      }
      return { id: (0, _coerceId.default)(relationshipHash), type: relationshipModelName };
    },
    extractPolymorphicRelationship: function extractPolymorphicRelationship(relationshipModelName, relationshipHash, relationshipOptions) {
      return this.extractRelationship(relationshipModelName, relationshipHash);
    },
    extractRelationships: function extractRelationships(modelClass, resourceHash) {
      var _this3 = this;

      var relationships = {};

      modelClass.eachRelationship(function (key, relationshipMeta) {
        var relationship = null;
        var relationshipKey = _this3.keyForRelationship(key, relationshipMeta.kind, 'deserialize');
        if (resourceHash[relationshipKey] !== undefined) {
          var data = null;
          var relationshipHash = resourceHash[relationshipKey];
          if (relationshipMeta.kind === 'belongsTo') {
            if (relationshipMeta.options.polymorphic) {
              // extracting a polymorphic belongsTo may need more information
              // than the type and the hash (which might only be an id) for the
              // relationship, hence we pass the key, resource and
              // relationshipMeta too
              data = _this3.extractPolymorphicRelationship(relationshipMeta.type, relationshipHash, { key: key, resourceHash: resourceHash, relationshipMeta: relationshipMeta });
            } else {
              data = _this3.extractRelationship(relationshipMeta.type, relationshipHash);
            }
          } else if (relationshipMeta.kind === 'hasMany') {
            if (!_ember.default.isNone(relationshipHash)) {
              data = new Array(relationshipHash.length);
              for (var i = 0, l = relationshipHash.length; i < l; i++) {
                var item = relationshipHash[i];
                data[i] = _this3.extractRelationship(relationshipMeta.type, item);
              }
            }
          }
          relationship = { data: data };
        }

        var linkKey = _this3.keyForLink(key, relationshipMeta.kind);
        if (resourceHash.links && resourceHash.links[linkKey] !== undefined) {
          var related = resourceHash.links[linkKey];
          relationship = relationship || {};
          relationship.links = { related: related };
        }

        if (relationship) {
          relationships[key] = relationship;
        }
      });

      return relationships;
    },
    modelNameFromPayloadKey: function modelNameFromPayloadKey(key) {
      return (0, _normalizeModelName.default)(key);
    },
    normalizeRelationships: function normalizeRelationships(typeClass, hash) {
      var _this4 = this;

      var payloadKey = void 0;

      if (this.keyForRelationship) {
        typeClass.eachRelationship(function (key, relationship) {
          payloadKey = _this4.keyForRelationship(key, relationship.kind, 'deserialize');
          if (key === payloadKey) {
            return;
          }
          if (hash[payloadKey] === undefined) {
            return;
          }

          hash[key] = hash[payloadKey];
          delete hash[payloadKey];
        });
      }
    },
    normalizeUsingDeclaredMapping: function normalizeUsingDeclaredMapping(modelClass, hash) {
      var attrs = get(this, 'attrs');
      var normalizedKey = void 0;
      var payloadKey = void 0;

      if (attrs) {
        for (var key in attrs) {
          normalizedKey = payloadKey = this._getMappedKey(key, modelClass);

          if (hash[payloadKey] === undefined) {
            continue;
          }

          if (get(modelClass, 'attributes').has(key)) {
            normalizedKey = this.keyForAttribute(key);
          }

          if (get(modelClass, 'relationshipsByName').has(key)) {
            normalizedKey = this.keyForRelationship(key);
          }

          if (payloadKey !== normalizedKey) {
            hash[normalizedKey] = hash[payloadKey];
            delete hash[payloadKey];
          }
        }
      }
    },
    _getMappedKey: function _getMappedKey(key, modelClass) {
      (0, _debug.warn)('There is no attribute or relationship with the name `' + key + '` on `' + modelClass.modelName + '`. Check your serializers attrs hash.', get(modelClass, 'attributes').has(key) || get(modelClass, 'relationshipsByName').has(key), {
        id: 'ds.serializer.no-mapped-attrs-key'
      });

      var attrs = get(this, 'attrs');
      var mappedKey = void 0;
      if (attrs && attrs[key]) {
        mappedKey = attrs[key];
        //We need to account for both the { title: 'post_title' } and
        //{ title: { key: 'post_title' }} forms
        if (mappedKey.key) {
          mappedKey = mappedKey.key;
        }
        if (typeof mappedKey === 'string') {
          key = mappedKey;
        }
      }

      return key;
    },
    _canSerialize: function _canSerialize(key) {
      var attrs = get(this, 'attrs');

      return !attrs || !attrs[key] || attrs[key].serialize !== false;
    },
    _mustSerialize: function _mustSerialize(key) {
      var attrs = get(this, 'attrs');

      return attrs && attrs[key] && attrs[key].serialize === true;
    },
    shouldSerializeHasMany: function shouldSerializeHasMany(snapshot, key, relationship) {
      if (this._shouldSerializeHasMany !== JSONSerializer.prototype._shouldSerializeHasMany) {
        (0, _debug.deprecate)('The private method _shouldSerializeHasMany has been promoted to the public API. Please remove the underscore to use the public shouldSerializeHasMany method.', false, {
          id: 'ds.serializer.private-should-serialize-has-many',
          until: '3.0.0'
        });
      }

      return this._shouldSerializeHasMany(snapshot, key, relationship);
    },
    _shouldSerializeHasMany: function _shouldSerializeHasMany(snapshot, key, relationship) {
      var relationshipType = snapshot.type.determineRelationshipType(relationship, this.store);
      if (this._mustSerialize(key)) {
        return true;
      }
      return this._canSerialize(key) && (relationshipType === 'manyToNone' || relationshipType === 'manyToMany');
    },
    serialize: function serialize(snapshot, options) {
      var _this5 = this;

      var json = {};

      if (options && options.includeId) {
        if ((0, _features.default)('ds-serialize-id')) {
          this.serializeId(snapshot, json, get(this, 'primaryKey'));
        } else {
          var id = snapshot.id;
          if (id) {
            json[get(this, 'primaryKey')] = id;
          }
        }
      }

      snapshot.eachAttribute(function (key, attribute) {
        _this5.serializeAttribute(snapshot, json, key, attribute);
      });

      snapshot.eachRelationship(function (key, relationship) {
        if (relationship.kind === 'belongsTo') {
          _this5.serializeBelongsTo(snapshot, json, relationship);
        } else if (relationship.kind === 'hasMany') {
          _this5.serializeHasMany(snapshot, json, relationship);
        }
      });

      return json;
    },
    serializeIntoHash: function serializeIntoHash(hash, typeClass, snapshot, options) {
      assign(hash, this.serialize(snapshot, options));
    },
    serializeAttribute: function serializeAttribute(snapshot, json, key, attribute) {

      if (this._canSerialize(key)) {
        var type = attribute.type;
        var value = snapshot.attr(key);
        if (type) {
          var transform = this.transformFor(type);
          value = transform.serialize(value, attribute.options);
        }

        // if provided, use the mapping provided by `attrs` in
        // the serializer
        var payloadKey = this._getMappedKey(key, snapshot.type);

        if (payloadKey === key && this.keyForAttribute) {
          payloadKey = this.keyForAttribute(key, 'serialize');
        }

        json[payloadKey] = value;
      }
    },
    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      var key = relationship.key;

      if (this._canSerialize(key)) {
        var belongsToId = snapshot.belongsTo(key, { id: true });

        // if provided, use the mapping provided by `attrs` in
        // the serializer
        var payloadKey = this._getMappedKey(key, snapshot.type);
        if (payloadKey === key && this.keyForRelationship) {
          payloadKey = this.keyForRelationship(key, "belongsTo", "serialize");
        }

        //Need to check whether the id is there for new&async records
        if (isNone(belongsToId)) {
          json[payloadKey] = null;
        } else {
          json[payloadKey] = belongsToId;
        }

        if (relationship.options.polymorphic) {
          this.serializePolymorphicType(snapshot, json, relationship);
        }
      }
    },
    serializeHasMany: function serializeHasMany(snapshot, json, relationship) {
      var key = relationship.key;
      var shouldSerializeHasMany = '_shouldSerializeHasMany';
      if (true) {
        shouldSerializeHasMany = 'shouldSerializeHasMany';
      }

      if (this[shouldSerializeHasMany](snapshot, key, relationship)) {
        var hasMany = snapshot.hasMany(key, { ids: true });
        if (hasMany !== undefined) {
          // if provided, use the mapping provided by `attrs` in
          // the serializer
          var payloadKey = this._getMappedKey(key, snapshot.type);
          if (payloadKey === key && this.keyForRelationship) {
            payloadKey = this.keyForRelationship(key, "hasMany", "serialize");
          }

          json[payloadKey] = hasMany;
          // TODO support for polymorphic manyToNone and manyToMany relationships
        }
      }
    },
    serializePolymorphicType: function serializePolymorphicType() {},
    extractMeta: function extractMeta(store, modelClass, payload) {
      if (payload && payload['meta'] !== undefined) {
        var meta = payload.meta;
        delete payload.meta;
        return meta;
      }
    },
    extractErrors: function extractErrors(store, typeClass, payload, id) {
      var _this6 = this;

      if (payload && (typeof payload === 'undefined' ? 'undefined' : _typeof(payload)) === 'object' && payload.errors) {
        payload = (0, _errors.errorsArrayToHash)(payload.errors);

        this.normalizeUsingDeclaredMapping(typeClass, payload);

        typeClass.eachAttribute(function (name) {
          var key = _this6.keyForAttribute(name, 'deserialize');
          if (key !== name && payload[key] !== undefined) {
            payload[name] = payload[key];
            delete payload[key];
          }
        });

        typeClass.eachRelationship(function (name) {
          var key = _this6.keyForRelationship(name, 'deserialize');
          if (key !== name && payload[key] !== undefined) {
            payload[name] = payload[key];
            delete payload[key];
          }
        });
      }

      return payload;
    },
    keyForAttribute: function keyForAttribute(key, method) {
      return key;
    },
    keyForRelationship: function keyForRelationship(key, typeClass, method) {
      return key;
    },
    keyForLink: function keyForLink(key, kind) {
      return key;
    },
    transformFor: function transformFor(attributeType, skipAssertion) {
      var transform = (0, _utils.getOwner)(this).lookup('transform:' + attributeType);

      (0, _debug.assert)("Unable to find transform for '" + attributeType + "'", skipAssertion || !!transform);

      return transform;
    }
  });

  if ((0, _features.default)("ds-payload-type-hooks")) {

    JSONSerializer.reopen({
      modelNameFromPayloadType: function modelNameFromPayloadType(type) {
        return (0, _normalizeModelName.default)(type);
      },
      _hasCustomModelNameFromPayloadKey: function _hasCustomModelNameFromPayloadKey() {
        return this.modelNameFromPayloadKey !== JSONSerializer.prototype.modelNameFromPayloadKey;
      }
    });
  }

  if ((0, _features.default)("ds-serialize-id")) {

    JSONSerializer.reopen({
      serializeId: function serializeId(snapshot, json, primaryKey) {
        var id = snapshot.id;

        if (id) {
          json[primaryKey] = id;
        }
      }
    });
  }

  exports.default = JSONSerializer;
});
define("ember-data/serializers/rest", ["exports", "ember", "ember-inflector", "ember-data/-private/debug", "ember-data/serializers/json", "ember-data/-private/system/normalize-model-name", "ember-data/-private/system/coerce-id", "ember-data/-private/utils", "ember-data/-private/features"], function (exports, _ember, _emberInflector, _debug, _json, _normalizeModelName, _coerceId, _utils, _features) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var camelize = _ember.default.String.camelize;

  /**
    Normally, applications will use the `RESTSerializer` by implementing
    the `normalize` method.
  
    This allows you to do whatever kind of munging you need, and is
    especially useful if your server is inconsistent and you need to
    do munging differently for many different kinds of responses.
  
    See the `normalize` documentation for more information.
  
    ## Across the Board Normalization
  
    There are also a number of hooks that you might find useful to define
    across-the-board rules for your payload. These rules will be useful
    if your server is consistent, or if you're building an adapter for
    an infrastructure service, like Firebase, and want to encode service
    conventions.
  
    For example, if all of your keys are underscored and all-caps, but
    otherwise consistent with the names you use in your models, you
    can implement across-the-board rules for how to convert an attribute
    name in your model to a key in your JSON.
  
    ```app/serializers/application.js
    import DS from 'ember-data';
  
    export default DS.RESTSerializer.extend({
      keyForAttribute(attr, method) {
        return Ember.String.underscore(attr).toUpperCase();
      }
    });
    ```
  
    You can also implement `keyForRelationship`, which takes the name
    of the relationship as the first parameter, the kind of
    relationship (`hasMany` or `belongsTo`) as the second parameter, and
    the method (`serialize` or `deserialize`) as the third parameter.
  
    @class RESTSerializer
    @namespace DS
    @extends DS.JSONSerializer
  */
  var RESTSerializer = _json.default.extend({
    keyForPolymorphicType: function keyForPolymorphicType(key, typeClass, method) {
      var relationshipKey = this.keyForRelationship(key);

      return relationshipKey + "Type";
    },
    normalize: function normalize(modelClass, resourceHash, prop) {
      if (this.normalizeHash && this.normalizeHash[prop]) {
        (0, _debug.deprecate)('`RESTSerializer.normalizeHash` has been deprecated. Please use `serializer.normalize` to modify the payload of single resources.', false, {
          id: 'ds.serializer.normalize-hash-deprecated',
          until: '3.0.0'
        });
        this.normalizeHash[prop](resourceHash);
      }
      return this._super(modelClass, resourceHash);
    },
    _normalizeArray: function _normalizeArray(store, modelName, arrayHash, prop) {
      var _this = this;

      var documentHash = {
        data: [],
        included: []
      };

      var modelClass = store.modelFor(modelName);
      var serializer = store.serializerFor(modelName);

      _ember.default.makeArray(arrayHash).forEach(function (hash) {
        var _normalizePolymorphic = _this._normalizePolymorphicRecord(store, hash, prop, modelClass, serializer),
            data = _normalizePolymorphic.data,
            included = _normalizePolymorphic.included;

        documentHash.data.push(data);
        if (included) {
          var _documentHash$include;

          (_documentHash$include = documentHash.included).push.apply(_documentHash$include, included);
        }
      });

      return documentHash;
    },
    _normalizePolymorphicRecord: function _normalizePolymorphicRecord(store, hash, prop, primaryModelClass, primarySerializer) {
      var serializer = primarySerializer;
      var modelClass = primaryModelClass;

      var primaryHasTypeAttribute = (0, _utils.modelHasAttributeOrRelationshipNamedType)(primaryModelClass);

      if (!primaryHasTypeAttribute && hash.type) {
        // Support polymorphic records in async relationships
        var modelName = void 0;
        if ((0, _features.default)("ds-payload-type-hooks")) {
          modelName = this.modelNameFromPayloadType(hash.type);
          var deprecatedModelNameLookup = this.modelNameFromPayloadKey(hash.type);

          if (modelName !== deprecatedModelNameLookup && !this._hasCustomModelNameFromPayloadType() && this._hasCustomModelNameFromPayloadKey()) {
            (0, _debug.deprecate)("You are using modelNameFromPayloadKey to normalize the type for a polymorphic relationship. This is has been deprecated in favor of modelNameFromPayloadType", false, {
              id: 'ds.rest-serializer.deprecated-model-name-for-polymorphic-type',
              until: '3.0.0'
            });

            modelName = deprecatedModelNameLookup;
          }
        } else {
          modelName = this.modelNameFromPayloadKey(hash.type);
        }

        if (store._hasModelFor(modelName)) {
          serializer = store.serializerFor(modelName);
          modelClass = store.modelFor(modelName);
        }
      }

      return serializer.normalize(modelClass, hash, prop);
    },
    _normalizeResponse: function _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
      var _this2 = this;

      var documentHash = {
        data: null,
        included: []
      };

      var meta = this.extractMeta(store, primaryModelClass, payload);
      if (meta) {
        (0, _debug.assert)('The `meta` returned from `extractMeta` has to be an object, not "' + _ember.default.typeOf(meta) + '".', _ember.default.typeOf(meta) === 'object');
        documentHash.meta = meta;
      }

      var keys = Object.keys(payload);

      var _loop = function _loop(i, length) {
        var prop = keys[i];
        var modelName = prop;
        var forcedSecondary = false;

        /*
          If you want to provide sideloaded records of the same type that the
          primary data you can do that by prefixing the key with `_`.
           Example
           ```
          {
            users: [
              { id: 1, title: 'Tom', manager: 3 },
              { id: 2, title: 'Yehuda', manager: 3 }
            ],
            _users: [
              { id: 3, title: 'Tomster' }
            ]
          }
          ```
           This forces `_users` to be added to `included` instead of `data`.
         */
        if (prop.charAt(0) === '_') {
          forcedSecondary = true;
          modelName = prop.substr(1);
        }

        var typeName = _this2.modelNameFromPayloadKey(modelName);
        if (!store.modelFactoryFor(typeName)) {
          (0, _debug.warn)(_this2.warnMessageNoModelForKey(modelName, typeName), false, {
            id: 'ds.serializer.model-for-key-missing'
          });
          return "continue";
        }

        var isPrimary = !forcedSecondary && _this2.isPrimaryType(store, typeName, primaryModelClass);
        var value = payload[prop];

        if (value === null) {
          return "continue";
        }

        (0, _debug.runInDebug)(function () {
          var isQueryRecordAnArray = requestType === 'queryRecord' && isPrimary && Array.isArray(value);
          var message = "The adapter returned an array for the primary data of a `queryRecord` response. This is deprecated as `queryRecord` should return a single record.";

          (0, _debug.deprecate)(message, !isQueryRecordAnArray, {
            id: 'ds.serializer.rest.queryRecord-array-response',
            until: '3.0'
          });
        });

        /*
          Support primary data as an object instead of an array.
           Example
           ```
          {
            user: { id: 1, title: 'Tom', manager: 3 }
          }
          ```
         */
        if (isPrimary && _ember.default.typeOf(value) !== 'array') {
          var _normalizePolymorphic2 = _this2._normalizePolymorphicRecord(store, value, prop, primaryModelClass, _this2),
              _data = _normalizePolymorphic2.data,
              _included = _normalizePolymorphic2.included;

          documentHash.data = _data;
          if (_included) {
            var _documentHash$include2;

            (_documentHash$include2 = documentHash.included).push.apply(_documentHash$include2, _included);
          }
          return "continue";
        }

        var _normalizeArray2 = _this2._normalizeArray(store, typeName, value, prop),
            data = _normalizeArray2.data,
            included = _normalizeArray2.included;

        if (included) {
          var _documentHash$include3;

          (_documentHash$include3 = documentHash.included).push.apply(_documentHash$include3, included);
        }

        if (isSingle) {
          data.forEach(function (resource) {

            /*
              Figures out if this is the primary record or not.
               It's either:
               1. The record with the same ID as the original request
              2. If it's a newly created record without an ID, the first record
                 in the array
             */
            var isUpdatedRecord = isPrimary && (0, _coerceId.default)(resource.id) === id;
            var isFirstCreatedRecord = isPrimary && !id && !documentHash.data;

            if (isFirstCreatedRecord || isUpdatedRecord) {
              documentHash.data = resource;
            } else {
              documentHash.included.push(resource);
            }
          });
        } else {
          if (isPrimary) {
            documentHash.data = data;
          } else {
            if (data) {
              var _documentHash$include4;

              (_documentHash$include4 = documentHash.included).push.apply(_documentHash$include4, data);
            }
          }
        }
      };

      for (var i = 0, length = keys.length; i < length; i++) {
        var _ret = _loop(i, length);

        if (_ret === "continue") continue;
      }

      return documentHash;
    },
    isPrimaryType: function isPrimaryType(store, typeName, primaryTypeClass) {
      return store.modelFor(typeName) === primaryTypeClass;
    },
    pushPayload: function pushPayload(store, payload) {
      var _this3 = this;

      var documentHash = {
        data: [],
        included: []
      };

      var _loop2 = function _loop2(_prop) {
        var modelName = _this3.modelNameFromPayloadKey(_prop);
        if (!store.modelFactoryFor(modelName)) {
          (0, _debug.warn)(_this3.warnMessageNoModelForKey(_prop, modelName), false, {
            id: 'ds.serializer.model-for-key-missing'
          });
          return "continue";
        }
        var type = store.modelFor(modelName);
        var typeSerializer = store.serializerFor(type.modelName);

        _ember.default.makeArray(payload[_prop]).forEach(function (hash) {
          var _typeSerializer$norma = typeSerializer.normalize(type, hash, _prop),
              data = _typeSerializer$norma.data,
              included = _typeSerializer$norma.included;

          documentHash.data.push(data);
          if (included) {
            var _documentHash$include5;

            (_documentHash$include5 = documentHash.included).push.apply(_documentHash$include5, included);
          }
        });
      };

      for (var _prop in payload) {
        var _ret2 = _loop2(_prop);

        if (_ret2 === "continue") continue;
      }

      if ((0, _features.default)('ds-pushpayload-return')) {
        return store.push(documentHash);
      } else {
        store.push(documentHash);
      }
    },
    modelNameFromPayloadKey: function modelNameFromPayloadKey(key) {
      return (0, _emberInflector.singularize)((0, _normalizeModelName.default)(key));
    },
    serialize: function serialize(snapshot, options) {
      return this._super.apply(this, arguments);
    },
    serializeIntoHash: function serializeIntoHash(hash, typeClass, snapshot, options) {
      var normalizedRootKey = this.payloadKeyFromModelName(typeClass.modelName);
      hash[normalizedRootKey] = this.serialize(snapshot, options);
    },
    payloadKeyFromModelName: function payloadKeyFromModelName(modelName) {
      return camelize(modelName);
    },
    serializePolymorphicType: function serializePolymorphicType(snapshot, json, relationship) {
      var key = relationship.key;
      var typeKey = this.keyForPolymorphicType(key, relationship.type, 'serialize');
      var belongsTo = snapshot.belongsTo(key);

      // old way of getting the key for the polymorphic type
      key = this.keyForAttribute ? this.keyForAttribute(key, "serialize") : key;
      key = key + "Type";

      // The old way of serializing the type of a polymorphic record used
      // `keyForAttribute`, which is not correct. The next code checks if the old
      // way is used and if it differs from the new way of using
      // `keyForPolymorphicType`. If this is the case, a deprecation warning is
      // logged and the old way is restored (so nothing breaks).
      if (key !== typeKey && this.keyForPolymorphicType === RESTSerializer.prototype.keyForPolymorphicType) {
        (0, _debug.deprecate)("The key to serialize the type of a polymorphic record is created via keyForAttribute which has been deprecated. Use the keyForPolymorphicType hook instead.", false, {
          id: 'ds.rest-serializer.deprecated-key-for-polymorphic-type',
          until: '3.0.0'
        });

        typeKey = key;
      }

      if (_ember.default.isNone(belongsTo)) {
        json[typeKey] = null;
      } else {
        if ((0, _features.default)("ds-payload-type-hooks")) {
          json[typeKey] = this.payloadTypeFromModelName(belongsTo.modelName);
        } else {
          json[typeKey] = camelize(belongsTo.modelName);
        }
      }
    },
    extractPolymorphicRelationship: function extractPolymorphicRelationship(relationshipType, relationshipHash, relationshipOptions) {
      var key = relationshipOptions.key,
          resourceHash = relationshipOptions.resourceHash,
          relationshipMeta = relationshipOptions.relationshipMeta;


      // A polymorphic belongsTo relationship can be present in the payload
      // either in the form where the `id` and the `type` are given:
      //
      //   {
      //     message: { id: 1, type: 'post' }
      //   }
      //
      // or by the `id` and a `<relationship>Type` attribute:
      //
      //   {
      //     message: 1,
      //     messageType: 'post'
      //   }
      //
      // The next code checks if the latter case is present and returns the
      // corresponding JSON-API representation. The former case is handled within
      // the base class JSONSerializer.
      var isPolymorphic = relationshipMeta.options.polymorphic;
      var typeProperty = this.keyForPolymorphicType(key, relationshipType, 'deserialize');

      if (isPolymorphic && resourceHash[typeProperty] !== undefined && (typeof relationshipHash === "undefined" ? "undefined" : _typeof(relationshipHash)) !== 'object') {

        if ((0, _features.default)("ds-payload-type-hooks")) {

          var payloadType = resourceHash[typeProperty];
          var _type = this.modelNameFromPayloadType(payloadType);
          var deprecatedTypeLookup = this.modelNameFromPayloadKey(payloadType);

          if (payloadType !== deprecatedTypeLookup && !this._hasCustomModelNameFromPayloadType() && this._hasCustomModelNameFromPayloadKey()) {
            (0, _debug.deprecate)("You are using modelNameFromPayloadKey to normalize the type for a polymorphic relationship. This has been deprecated in favor of modelNameFromPayloadType", false, {
              id: 'ds.rest-serializer.deprecated-model-name-for-polymorphic-type',
              until: '3.0.0'
            });

            _type = deprecatedTypeLookup;
          }

          return {
            id: relationshipHash,
            type: _type
          };
        } else {

          var _type2 = this.modelNameFromPayloadKey(resourceHash[typeProperty]);
          return {
            id: relationshipHash,
            type: _type2
          };
        }
      }

      return this._super.apply(this, arguments);
    }
  });

  if ((0, _features.default)("ds-payload-type-hooks")) {

    RESTSerializer.reopen({
      modelNameFromPayloadType: function modelNameFromPayloadType(payloadType) {
        return (0, _emberInflector.singularize)((0, _normalizeModelName.default)(payloadType));
      },
      payloadTypeFromModelName: function payloadTypeFromModelName(modelName) {
        return camelize(modelName);
      },
      _hasCustomModelNameFromPayloadKey: function _hasCustomModelNameFromPayloadKey() {
        return this.modelNameFromPayloadKey !== RESTSerializer.prototype.modelNameFromPayloadKey;
      },
      _hasCustomModelNameFromPayloadType: function _hasCustomModelNameFromPayloadType() {
        return this.modelNameFromPayloadType !== RESTSerializer.prototype.modelNameFromPayloadType;
      },
      _hasCustomPayloadTypeFromModelName: function _hasCustomPayloadTypeFromModelName() {
        return this.payloadTypeFromModelName !== RESTSerializer.prototype.payloadTypeFromModelName;
      },
      _hasCustomPayloadKeyFromModelName: function _hasCustomPayloadKeyFromModelName() {
        return this.payloadKeyFromModelName !== RESTSerializer.prototype.payloadKeyFromModelName;
      }
    });
  }

  (0, _debug.runInDebug)(function () {
    RESTSerializer.reopen({
      warnMessageNoModelForKey: function warnMessageNoModelForKey(prop, typeKey) {
        return 'Encountered "' + prop + '" in payload, but no model was found for model name "' + typeKey + '" (resolved model name using ' + this.constructor.toString() + '.modelNameFromPayloadKey("' + prop + '"))';
      }
    });
  });

  exports.default = RESTSerializer;
});
define('ember-data/setup-container', ['exports', 'ember-data/-private/initializers/store', 'ember-data/-private/initializers/transforms', 'ember-data/-private/initializers/store-injections', 'ember-data/-private/initializers/data-adapter'], function (exports, _store, _transforms, _storeInjections, _dataAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = setupContainer;
  function setupContainer(application) {
    (0, _dataAdapter.default)(application);
    (0, _transforms.default)(application);
    (0, _storeInjections.default)(application);
    (0, _store.default)(application);
  }
});
define("ember-data/store", ["exports", "ember-data/-private/system/store"], function (exports, _store) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _store.default;
});
define('ember-data/transform', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Object.extend({
    /**
      When given a deserialized value from a record attribute this
      method must return the serialized value.
       Example
       ```javascript
      serialize(deserialized, options) {
        return Ember.isEmpty(deserialized) ? null : Number(deserialized);
      }
      ```
       @method serialize
      @param deserialized The deserialized value
      @param options hash of options passed to `DS.attr`
      @return The serialized value
    */
    serialize: null,

    /**
      When given a serialize value from a JSON object this method must
      return the deserialized value for the record attribute.
       Example
       ```javascript
      deserialize(serialized, options) {
        return empty(serialized) ? null : Number(serialized);
      }
      ```
       @method deserialize
      @param serialized The serialized value
      @param options hash of options passed to `DS.attr`
      @return The deserialized value
    */
    deserialize: null
  });
});
define("ember-data/version", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = "2.13.1";
});
define("ember-getowner-polyfill/index", ["exports", "ember"], function (exports, _ember) {

  _ember["default"].deprecate("ember-getowner-polyfill is now a true polyfill. Use Ember.getOwner directly instead of importing from ember-getowner-polyfill", false, {
    id: "ember-getowner-polyfill.import",
    until: '2.0.0'
  });

  exports["default"] = _ember["default"].getOwner;
});
define("ember-inflector/index", ["module", "exports", "ember", "ember-inflector/lib/system", "ember-inflector/lib/ext/string"], function (module, exports, _ember, _system) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultRules = exports.singularize = exports.pluralize = undefined;
  /* global define, module */

  _system.Inflector.defaultRules = _system.defaultRules;
  _ember.default.Inflector = _system.Inflector;

  _ember.default.String.pluralize = _system.pluralize;
  _ember.default.String.singularize = _system.singularize;

  exports.default = _system.Inflector;
  exports.pluralize = _system.pluralize;
  exports.singularize = _system.singularize;
  exports.defaultRules = _system.defaultRules;


  if (typeof define !== 'undefined' && define.amd) {
    define('ember-inflector', ['exports'], function (__exports__) {
      __exports__['default'] = _system.Inflector;
      __exports__.pluralize = _system.pluralize;
      __exports__.singularize = _system.singularize;

      return __exports__;
    });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = _system.Inflector;
    _system.Inflector.singularize = _system.singularize;
    _system.Inflector.pluralize = _system.pluralize;
  }
});
define('ember-inflector/lib/ext/string', ['ember', 'ember-inflector/lib/system/string'], function (_ember, _string) {
  'use strict';

  if (_ember.default.EXTEND_PROTOTYPES === true || _ember.default.EXTEND_PROTOTYPES.String) {
    /**
      See {{#crossLink "Ember.String/pluralize"}}{{/crossLink}}
       @method pluralize
      @for String
    */
    String.prototype.pluralize = function () {
      return (0, _string.pluralize)(this);
    };

    /**
      See {{#crossLink "Ember.String/singularize"}}{{/crossLink}}
       @method singularize
      @for String
    */
    String.prototype.singularize = function () {
      return (0, _string.singularize)(this);
    };
  }
});
define('ember-inflector/lib/helpers/pluralize', ['exports', 'ember-inflector', 'ember-inflector/lib/utils/make-helper'], function (exports, _emberInflector, _makeHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _makeHelper.default)(function (params, hash) {
    var count = void 0,
        word = void 0,
        withoutCount = false;

    if (params.length === 1) {
      word = params[0];
      return (0, _emberInflector.pluralize)(word);
    } else {
      count = params[0];
      word = params[1];

      if (hash["without-count"]) {
        withoutCount = hash["without-count"];
      }

      if (parseFloat(count) !== 1) {
        word = (0, _emberInflector.pluralize)(word);
      }

      return withoutCount ? word : count + " " + word;
    }
  });
});
define('ember-inflector/lib/helpers/singularize', ['exports', 'ember-inflector', 'ember-inflector/lib/utils/make-helper'], function (exports, _emberInflector, _makeHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _makeHelper.default)(function (params) {
    return (0, _emberInflector.singularize)(params[0]);
  });
});
define("ember-inflector/lib/system", ["exports", "ember-inflector/lib/system/inflector", "ember-inflector/lib/system/string", "ember-inflector/lib/system/inflections"], function (exports, _inflector, _string, _inflections) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultRules = exports.pluralize = exports.singularize = exports.Inflector = undefined;


  _inflector.default.inflector = new _inflector.default(_inflections.default);

  exports.Inflector = _inflector.default;
  exports.singularize = _string.singularize;
  exports.pluralize = _string.pluralize;
  exports.defaultRules = _inflections.default;
});
define('ember-inflector/lib/system/inflections', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    plurals: [[/$/, 's'], [/s$/i, 's'], [/^(ax|test)is$/i, '$1es'], [/(octop|vir)us$/i, '$1i'], [/(octop|vir)i$/i, '$1i'], [/(alias|status|bonus)$/i, '$1es'], [/(bu)s$/i, '$1ses'], [/(buffal|tomat)o$/i, '$1oes'], [/([ti])um$/i, '$1a'], [/([ti])a$/i, '$1a'], [/sis$/i, 'ses'], [/(?:([^f])fe|([lr])f)$/i, '$1$2ves'], [/(hive)$/i, '$1s'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/(x|ch|ss|sh)$/i, '$1es'], [/(matr|vert|ind)(?:ix|ex)$/i, '$1ices'], [/^(m|l)ouse$/i, '$1ice'], [/^(m|l)ice$/i, '$1ice'], [/^(ox)$/i, '$1en'], [/^(oxen)$/i, '$1'], [/(quiz)$/i, '$1zes']],

    singular: [[/s$/i, ''], [/(ss)$/i, '$1'], [/(n)ews$/i, '$1ews'], [/([ti])a$/i, '$1um'], [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, '$1sis'], [/(^analy)(sis|ses)$/i, '$1sis'], [/([^f])ves$/i, '$1fe'], [/(hive)s$/i, '$1'], [/(tive)s$/i, '$1'], [/([lr])ves$/i, '$1f'], [/([^aeiouy]|qu)ies$/i, '$1y'], [/(s)eries$/i, '$1eries'], [/(m)ovies$/i, '$1ovie'], [/(x|ch|ss|sh)es$/i, '$1'], [/^(m|l)ice$/i, '$1ouse'], [/(bus)(es)?$/i, '$1'], [/(o)es$/i, '$1'], [/(shoe)s$/i, '$1'], [/(cris|test)(is|es)$/i, '$1is'], [/^(a)x[ie]s$/i, '$1xis'], [/(octop|vir)(us|i)$/i, '$1us'], [/(alias|status|bonus)(es)?$/i, '$1'], [/^(ox)en/i, '$1'], [/(vert|ind)ices$/i, '$1ex'], [/(matr)ices$/i, '$1ix'], [/(quiz)zes$/i, '$1'], [/(database)s$/i, '$1']],

    irregularPairs: [['person', 'people'], ['man', 'men'], ['child', 'children'], ['sex', 'sexes'], ['move', 'moves'], ['cow', 'kine'], ['zombie', 'zombies']],

    uncountable: ['equipment', 'information', 'rice', 'money', 'species', 'series', 'fish', 'sheep', 'jeans', 'police']
  };
});
define('ember-inflector/lib/system/inflector', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var capitalize = _ember.default.String.capitalize;

  var BLANK_REGEX = /^\s*$/;
  var LAST_WORD_DASHED_REGEX = /([\w/-]+[_/\s-])([a-z\d]+$)/;
  var LAST_WORD_CAMELIZED_REGEX = /([\w/\s-]+)([A-Z][a-z\d]*$)/;
  var CAMELIZED_REGEX = /[A-Z][a-z\d]*$/;

  function loadUncountable(rules, uncountable) {
    for (var i = 0, length = uncountable.length; i < length; i++) {
      rules.uncountable[uncountable[i].toLowerCase()] = true;
    }
  }

  function loadIrregular(rules, irregularPairs) {
    var pair;

    for (var i = 0, length = irregularPairs.length; i < length; i++) {
      pair = irregularPairs[i];

      //pluralizing
      rules.irregular[pair[0].toLowerCase()] = pair[1];
      rules.irregular[pair[1].toLowerCase()] = pair[1];

      //singularizing
      rules.irregularInverse[pair[1].toLowerCase()] = pair[0];
      rules.irregularInverse[pair[0].toLowerCase()] = pair[0];
    }
  }

  /**
    Inflector.Ember provides a mechanism for supplying inflection rules for your
    application. Ember includes a default set of inflection rules, and provides an
    API for providing additional rules.
  
    Examples:
  
    Creating an inflector with no rules.
  
    ```js
    var inflector = new Ember.Inflector();
    ```
  
    Creating an inflector with the default ember ruleset.
  
    ```js
    var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
  
    inflector.pluralize('cow'); //=> 'kine'
    inflector.singularize('kine'); //=> 'cow'
    ```
  
    Creating an inflector and adding rules later.
  
    ```javascript
    var inflector = Ember.Inflector.inflector;
  
    inflector.pluralize('advice'); // => 'advices'
    inflector.uncountable('advice');
    inflector.pluralize('advice'); // => 'advice'
  
    inflector.pluralize('formula'); // => 'formulas'
    inflector.irregular('formula', 'formulae');
    inflector.pluralize('formula'); // => 'formulae'
  
    // you would not need to add these as they are the default rules
    inflector.plural(/$/, 's');
    inflector.singular(/s$/i, '');
    ```
  
    Creating an inflector with a nondefault ruleset.
  
    ```javascript
    var rules = {
      plurals:  [
        [ /$/, 's' ]
      ],
      singular: [
        [ /\s$/, '' ]
      ],
      irregularPairs: [
        [ 'cow', 'kine' ]
      ],
      uncountable: [ 'fish' ]
    };
  
    var inflector = new Ember.Inflector(rules);
    ```
  
    @class Inflector
    @namespace Ember
  */
  function Inflector(ruleSet) {
    ruleSet = ruleSet || {};
    ruleSet.uncountable = ruleSet.uncountable || makeDictionary();
    ruleSet.irregularPairs = ruleSet.irregularPairs || makeDictionary();

    var rules = this.rules = {
      plurals: ruleSet.plurals || [],
      singular: ruleSet.singular || [],
      irregular: makeDictionary(),
      irregularInverse: makeDictionary(),
      uncountable: makeDictionary()
    };

    loadUncountable(rules, ruleSet.uncountable);
    loadIrregular(rules, ruleSet.irregularPairs);

    this.enableCache();
  }

  if (!Object.create && !Object.create(null).hasOwnProperty) {
    throw new Error("This browser does not support Object.create(null), please polyfil with es5-sham: http://git.io/yBU2rg");
  }

  function makeDictionary() {
    var cache = Object.create(null);
    cache['_dict'] = null;
    delete cache['_dict'];
    return cache;
  }

  Inflector.prototype = {
    /**
      @public
       As inflections can be costly, and commonly the same subset of words are repeatedly
      inflected an optional cache is provided.
       @method enableCache
    */
    enableCache: function enableCache() {
      this.purgeCache();

      this.singularize = function (word) {
        this._cacheUsed = true;
        return this._sCache[word] || (this._sCache[word] = this._singularize(word));
      };

      this.pluralize = function (word) {
        this._cacheUsed = true;
        return this._pCache[word] || (this._pCache[word] = this._pluralize(word));
      };
    },

    /**
      @public
       @method purgedCache
    */
    purgeCache: function purgeCache() {
      this._cacheUsed = false;
      this._sCache = makeDictionary();
      this._pCache = makeDictionary();
    },

    /**
      @public
      disable caching
       @method disableCache;
    */
    disableCache: function disableCache() {
      this._sCache = null;
      this._pCache = null;
      this.singularize = function (word) {
        return this._singularize(word);
      };

      this.pluralize = function (word) {
        return this._pluralize(word);
      };
    },

    /**
      @method plural
      @param {RegExp} regex
      @param {String} string
    */
    plural: function plural(regex, string) {
      if (this._cacheUsed) {
        this.purgeCache();
      }
      this.rules.plurals.push([regex, string.toLowerCase()]);
    },

    /**
      @method singular
      @param {RegExp} regex
      @param {String} string
    */
    singular: function singular(regex, string) {
      if (this._cacheUsed) {
        this.purgeCache();
      }
      this.rules.singular.push([regex, string.toLowerCase()]);
    },

    /**
      @method uncountable
      @param {String} regex
    */
    uncountable: function uncountable(string) {
      if (this._cacheUsed) {
        this.purgeCache();
      }
      loadUncountable(this.rules, [string.toLowerCase()]);
    },

    /**
      @method irregular
      @param {String} singular
      @param {String} plural
    */
    irregular: function irregular(singular, plural) {
      if (this._cacheUsed) {
        this.purgeCache();
      }
      loadIrregular(this.rules, [[singular, plural]]);
    },

    /**
      @method pluralize
      @param {String} word
    */
    pluralize: function pluralize(word) {
      return this._pluralize(word);
    },

    _pluralize: function _pluralize(word) {
      return this.inflect(word, this.rules.plurals, this.rules.irregular);
    },
    /**
      @method singularize
      @param {String} word
    */
    singularize: function singularize(word) {
      return this._singularize(word);
    },

    _singularize: function _singularize(word) {
      return this.inflect(word, this.rules.singular, this.rules.irregularInverse);
    },

    /**
      @protected
       @method inflect
      @param {String} word
      @param {Object} typeRules
      @param {Object} irregular
    */
    inflect: function inflect(word, typeRules, irregular) {
      var inflection, substitution, result, lowercase, wordSplit, firstPhrase, lastWord, isBlank, isCamelized, rule, isUncountable;

      isBlank = !word || BLANK_REGEX.test(word);

      isCamelized = CAMELIZED_REGEX.test(word);
      firstPhrase = "";

      if (isBlank) {
        return word;
      }

      lowercase = word.toLowerCase();
      wordSplit = LAST_WORD_DASHED_REGEX.exec(word) || LAST_WORD_CAMELIZED_REGEX.exec(word);

      if (wordSplit) {
        firstPhrase = wordSplit[1];
        lastWord = wordSplit[2].toLowerCase();
      }

      isUncountable = this.rules.uncountable[lowercase] || this.rules.uncountable[lastWord];

      if (isUncountable) {
        return word;
      }

      for (rule in irregular) {
        if (lowercase.match(rule + "$")) {
          substitution = irregular[rule];

          if (isCamelized && irregular[lastWord]) {
            substitution = capitalize(substitution);
            rule = capitalize(rule);
          }

          return word.replace(new RegExp(rule, 'i'), substitution);
        }
      }

      for (var i = typeRules.length, min = 0; i > min; i--) {
        inflection = typeRules[i - 1];
        rule = inflection[0];

        if (rule.test(word)) {
          break;
        }
      }

      inflection = inflection || [];

      rule = inflection[0];
      substitution = inflection[1];

      result = word.replace(rule, substitution);

      return result;
    }
  };

  exports.default = Inflector;
});
define('ember-inflector/lib/system/string', ['exports', 'ember-inflector/lib/system/inflector'], function (exports, _inflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.singularize = exports.pluralize = undefined;


  function pluralize(word) {
    return _inflector.default.inflector.pluralize(word);
  }

  function singularize(word) {
    return _inflector.default.inflector.singularize(word);
  }

  exports.pluralize = pluralize;
  exports.singularize = singularize;
});
define('ember-inflector/lib/utils/make-helper', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = makeHelper;
  function makeHelper(helperFunction) {
    if (_ember.default.Helper) {
      return _ember.default.Helper.helper(helperFunction);
    }
    if (_ember.default.HTMLBars) {
      return _ember.default.HTMLBars.makeBoundHelper(helperFunction);
    }
    return _ember.default.Handlebars.makeBoundHelper(helperFunction);
  }
});
define('ember-load-initializers/index', ['exports'], function (exports) {
  function resolveInitializer(moduleName) {
    var module = require(moduleName, null, null, true);
    if (!module) {
      throw new Error(moduleName + ' must export an initializer.');
    }
    var initializer = module['default'];
    if (!initializer.name) {
      initializer.name = moduleName.slice(moduleName.lastIndexOf('/') + 1);
    }
    return initializer;
  }

  function registerInitializers(app, moduleNames) {
    for (var i = 0; i < moduleNames.length; i++) {
      app.initializer(resolveInitializer(moduleNames[i]));
    }
  }

  function registerInstanceInitializers(app, moduleNames) {
    for (var i = 0; i < moduleNames.length; i++) {
      app.instanceInitializer(resolveInitializer(moduleNames[i]));
    }
  }

  exports['default'] = function (app, prefix) {
    var initializerPrefix = prefix + '/initializers/';
    var instanceInitializerPrefix = prefix + '/instance-initializers/';
    var initializers = [];
    var instanceInitializers = [];
    // this is 2 pass because generally the first pass is the problem
    // and is reduced, and resolveInitializer has potential to deopt
    var moduleNames = Object.keys(requirejs._eak_seen);
    for (var i = 0; i < moduleNames.length; i++) {
      var moduleName = moduleNames[i];
      if (moduleName.lastIndexOf(initializerPrefix, 0) === 0) {
        initializers.push(moduleName);
      } else if (moduleName.lastIndexOf(instanceInitializerPrefix, 0) === 0) {
        instanceInitializers.push(moduleName);
      }
    }
    registerInitializers(app, initializers);
    registerInstanceInitializers(app, instanceInitializers);
  };
});
define('ember-resolver/container-debug-adapter', ['exports', 'ember', 'ember-resolver/utils/module-registry'], function (exports, _ember, _emberResolverUtilsModuleRegistry) {
  var ContainerDebugAdapter = _ember['default'].ContainerDebugAdapter;

  var ModulesContainerDebugAdapter = null;

  function getPod(type, key, prefix) {
    var match = key.match(new RegExp('^/?' + prefix + '/(.+)/' + type + '$'));
    if (match) {
      return match[1];
    }
  }

  // Support Ember < 1.5-beta.4
  // TODO: Remove this after 1.5.0 is released
  if (typeof ContainerDebugAdapter !== 'undefined') {

    /*
     * This module defines a subclass of Ember.ContainerDebugAdapter that adds two
     * important features:
     *
     *  1) is able provide injections to classes that implement `extend`
     *     (as is typical with Ember).
     */

    ModulesContainerDebugAdapter = ContainerDebugAdapter.extend({
      _moduleRegistry: null,

      init: function init() {
        this._super.apply(this, arguments);

        if (!this._moduleRegistry) {
          this._moduleRegistry = new _emberResolverUtilsModuleRegistry['default']();
        }
      },

      /**
        The container of the application being debugged.
        This property will be injected
        on creation.
         @property container
        @default null
      */

      /**
        The resolver instance of the application
        being debugged. This property will be injected
        on creation.
         @property resolver
        @default null
      */

      /**
        Returns true if it is possible to catalog a list of available
        classes in the resolver for a given type.
         @method canCatalogEntriesByType
        @param {string} type The type. e.g. "model", "controller", "route"
        @return {boolean} whether a list is available for this type.
      */
      canCatalogEntriesByType: function canCatalogEntriesByType() /* type */{
        return true;
      },

      /**
        Returns the available classes a given type.
         @method catalogEntriesByType
        @param {string} type The type. e.g. "model", "controller", "route"
        @return {Array} An array of classes.
      */
      catalogEntriesByType: function catalogEntriesByType(type) {
        var moduleNames = this._moduleRegistry.moduleNames();
        var types = _ember['default'].A();

        var prefix = this.namespace.modulePrefix;

        for (var i = 0, l = moduleNames.length; i < l; i++) {
          var key = moduleNames[i];

          if (key.indexOf(type) !== -1) {
            // Check if it's a pod module
            var name = getPod(type, key, this.namespace.podModulePrefix || prefix);
            if (!name) {
              // Not pod
              name = key.split(type + 's/').pop();

              // Support for different prefix (such as ember-cli addons).
              // Uncomment the code below when
              // https://github.com/ember-cli/ember-resolver/pull/80 is merged.

              //var match = key.match('^/?(.+)/' + type);
              //if (match && match[1] !== prefix) {
              // Different prefix such as an addon
              //name = match[1] + '@' + name;
              //}
            }
            types.addObject(name);
          }
        }
        return types;
      }
    });
  }

  exports['default'] = ModulesContainerDebugAdapter;
});
define('ember-resolver/index', ['exports', 'ember-resolver/resolver'], function (exports, _emberResolverResolver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberResolverResolver['default'];
    }
  });
});
define('ember-resolver/resolver', ['exports', 'ember', 'ember-resolver/utils/module-registry', 'ember-resolver/utils/class-factory', 'ember-resolver/utils/make-dictionary'], function (exports, _ember, _emberResolverUtilsModuleRegistry, _emberResolverUtilsClassFactory, _emberResolverUtilsMakeDictionary) {

  /*
   * This module defines a subclass of Ember.DefaultResolver that adds two
   * important features:
   *
   *  1) The resolver makes the container aware of es6 modules via the AMD
   *     output. The loader's _moduleEntries is consulted so that classes can be
   *     resolved directly via the module loader, without needing a manual
   *     `import`.
   *  2) is able to provide injections to classes that implement `extend`
   *     (as is typical with Ember).
   */

  var _Ember$String = _ember['default'].String;
  var underscore = _Ember$String.underscore;
  var classify = _Ember$String.classify;
  var dasherize = _Ember$String.dasherize;
  var get = _ember['default'].get;
  var DefaultResolver = _ember['default'].DefaultResolver;

  function parseName(fullName) {
    /*jshint validthis:true */

    if (fullName.parsedName === true) {
      return fullName;
    }

    var prefix, type, name;
    var fullNameParts = fullName.split('@');

    // HTMLBars uses helper:@content-helper which collides
    // with ember-cli namespace detection.
    // This will be removed in a future release of HTMLBars.
    if (fullName !== 'helper:@content-helper' && fullNameParts.length === 2) {
      var prefixParts = fullNameParts[0].split(':');

      if (prefixParts.length === 2) {
        prefix = prefixParts[1];
        type = prefixParts[0];
        name = fullNameParts[1];
      } else {
        var nameParts = fullNameParts[1].split(':');

        prefix = fullNameParts[0];
        type = nameParts[0];
        name = nameParts[1];
      }
    } else {
      fullNameParts = fullName.split(':');
      type = fullNameParts[0];
      name = fullNameParts[1];
    }

    var fullNameWithoutType = name;
    var namespace = get(this, 'namespace');
    var root = namespace;

    return {
      parsedName: true,
      fullName: fullName,
      prefix: prefix || this.prefix({ type: type }),
      type: type,
      fullNameWithoutType: fullNameWithoutType,
      name: name,
      root: root,
      resolveMethodName: "resolve" + classify(type)
    };
  }

  function resolveOther(parsedName) {
    /*jshint validthis:true */

    _ember['default'].assert('`modulePrefix` must be defined', this.namespace.modulePrefix);

    var normalizedModuleName = this.findModuleName(parsedName);

    if (normalizedModuleName) {
      var defaultExport = this._extractDefaultExport(normalizedModuleName, parsedName);

      if (defaultExport === undefined) {
        throw new Error(" Expected to find: '" + parsedName.fullName + "' within '" + normalizedModuleName + "' but got 'undefined'. Did you forget to `export default` within '" + normalizedModuleName + "'?");
      }

      if (this.shouldWrapInClassFactory(defaultExport, parsedName)) {
        defaultExport = (0, _emberResolverUtilsClassFactory['default'])(defaultExport);
      }

      return defaultExport;
    } else {
      return this._super(parsedName);
    }
  }

  // Ember.DefaultResolver docs:
  //   https://github.com/emberjs/ember.js/blob/master/packages/ember-application/lib/system/resolver.js
  var Resolver = DefaultResolver.extend({
    resolveOther: resolveOther,
    parseName: parseName,
    resolveTemplate: resolveOther,
    pluralizedTypes: null,
    moduleRegistry: null,

    makeToString: function makeToString(factory, fullName) {
      return '' + this.namespace.modulePrefix + '@' + fullName + ':';
    },

    shouldWrapInClassFactory: function shouldWrapInClassFactory() /* module, parsedName */{
      return false;
    },

    init: function init() {
      this._super();
      this.moduleBasedResolver = true;

      if (!this._moduleRegistry) {
        this._moduleRegistry = new _emberResolverUtilsModuleRegistry['default']();
      }

      this._normalizeCache = (0, _emberResolverUtilsMakeDictionary['default'])();

      this.pluralizedTypes = this.pluralizedTypes || (0, _emberResolverUtilsMakeDictionary['default'])();

      if (!this.pluralizedTypes.config) {
        this.pluralizedTypes.config = 'config';
      }
      this._deprecatedPodModulePrefix = false;
    },

    normalize: function normalize(fullName) {
      return this._normalizeCache[fullName] || (this._normalizeCache[fullName] = this._normalize(fullName));
    },

    _normalize: function _normalize(fullName) {
      // A) Convert underscores to dashes
      // B) Convert camelCase to dash-case, except for helpers where we want to avoid shadowing camelCase expressions
      // C) replace `.` with `/` in order to make nested controllers work in the following cases
      //      1. `needs: ['posts/post']`
      //      2. `{{render "posts/post"}}`
      //      3. `this.render('posts/post')` from Route

      var split = fullName.split(':');
      if (split.length > 1) {
        if (split[0] === 'helper') {
          return split[0] + ':' + split[1].replace(/_/g, '-');
        } else {
          return split[0] + ':' + dasherize(split[1].replace(/\./g, '/'));
        }
      } else {
        return fullName;
      }
    },

    pluralize: function pluralize(type) {
      return this.pluralizedTypes[type] || (this.pluralizedTypes[type] = type + 's');
    },

    podBasedLookupWithPrefix: function podBasedLookupWithPrefix(podPrefix, parsedName) {
      var fullNameWithoutType = parsedName.fullNameWithoutType;

      if (parsedName.type === 'template') {
        fullNameWithoutType = fullNameWithoutType.replace(/^components\//, '');
      }

      return podPrefix + '/' + fullNameWithoutType + '/' + parsedName.type;
    },

    podBasedModuleName: function podBasedModuleName(parsedName) {
      var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;

      return this.podBasedLookupWithPrefix(podPrefix, parsedName);
    },

    podBasedComponentsInSubdir: function podBasedComponentsInSubdir(parsedName) {
      var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;
      podPrefix = podPrefix + '/components';

      if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
        return this.podBasedLookupWithPrefix(podPrefix, parsedName);
      }
    },

    resolveEngine: function resolveEngine(parsedName) {
      var engineName = parsedName.fullNameWithoutType;
      var engineModule = engineName + '/engine';

      if (this._moduleRegistry.has(engineModule)) {
        return this._extractDefaultExport(engineModule);
      }
    },

    resolveRouteMap: function resolveRouteMap(parsedName) {
      var engineName = parsedName.fullNameWithoutType;
      var engineRoutesModule = engineName + '/routes';

      if (this._moduleRegistry.has(engineRoutesModule)) {
        var routeMap = this._extractDefaultExport(engineRoutesModule);

        _ember['default'].assert('The route map for ' + engineName + ' should be wrapped by \'buildRoutes\' before exporting.', routeMap.isRouteMap);

        return routeMap;
      }
    },

    mainModuleName: function mainModuleName(parsedName) {
      // if router:main or adapter:main look for a module with just the type first
      var tmpModuleName = parsedName.prefix + '/' + parsedName.type;

      if (parsedName.fullNameWithoutType === 'main') {
        return tmpModuleName;
      }
    },

    defaultModuleName: function defaultModuleName(parsedName) {
      return parsedName.prefix + '/' + this.pluralize(parsedName.type) + '/' + parsedName.fullNameWithoutType;
    },

    prefix: function prefix(parsedName) {
      var tmpPrefix = this.namespace.modulePrefix;

      if (this.namespace[parsedName.type + 'Prefix']) {
        tmpPrefix = this.namespace[parsedName.type + 'Prefix'];
      }

      return tmpPrefix;
    },

    /**
      A listing of functions to test for moduleName's based on the provided
     `parsedName`. This allows easy customization of additional module based
     lookup patterns.
      @property moduleNameLookupPatterns
     @returns {Ember.Array}
     */
    moduleNameLookupPatterns: _ember['default'].computed(function () {
      return [this.podBasedModuleName, this.podBasedComponentsInSubdir, this.mainModuleName, this.defaultModuleName];
    }),

    findModuleName: function findModuleName(parsedName, loggingDisabled) {
      var moduleNameLookupPatterns = this.get('moduleNameLookupPatterns');
      var moduleName;

      for (var index = 0, _length = moduleNameLookupPatterns.length; index < _length; index++) {
        var item = moduleNameLookupPatterns[index];

        var tmpModuleName = item.call(this, parsedName);

        // allow treat all dashed and all underscored as the same thing
        // supports components with dashes and other stuff with underscores.
        if (tmpModuleName) {
          tmpModuleName = this.chooseModuleName(tmpModuleName, parsedName);
        }

        if (tmpModuleName && this._moduleRegistry.has(tmpModuleName)) {
          moduleName = tmpModuleName;
        }

        if (!loggingDisabled) {
          this._logLookup(moduleName, parsedName, tmpModuleName);
        }

        if (moduleName) {
          return moduleName;
        }
      }
    },

    chooseModuleName: function chooseModuleName(moduleName, parsedName) {
      var _this = this;

      var underscoredModuleName = underscore(moduleName);

      if (moduleName !== underscoredModuleName && this._moduleRegistry.has(moduleName) && this._moduleRegistry.has(underscoredModuleName)) {
        throw new TypeError("Ambiguous module names: `" + moduleName + "` and `" + underscoredModuleName + "`");
      }

      if (this._moduleRegistry.has(moduleName)) {
        return moduleName;
      } else if (this._moduleRegistry.has(underscoredModuleName)) {
        return underscoredModuleName;
      }
      // workaround for dasherized partials:
      // something/something/-something => something/something/_something
      var partializedModuleName = moduleName.replace(/\/-([^\/]*)$/, '/_$1');

      if (this._moduleRegistry.has(partializedModuleName)) {
        _ember['default'].deprecate('Modules should not contain underscores. ' + 'Attempted to lookup "' + moduleName + '" which ' + 'was not found. Please rename "' + partializedModuleName + '" ' + 'to "' + moduleName + '" instead.', false, { id: 'ember-resolver.underscored-modules', until: '3.0.0' });

        return partializedModuleName;
      }
      _ember['default'].runInDebug(function () {
        var isCamelCaseHelper = parsedName.type === 'helper' && !!moduleName.match(/[a-z]+[A-Z]+/);
        if (isCamelCaseHelper) {
          _this._camelCaseHelperWarnedNames = _this._camelCaseHelperWarnedNames || [];
          var alreadyWarned = _this._camelCaseHelperWarnedNames.indexOf(parsedName.fullName) > -1;
          if (!alreadyWarned && _this._moduleRegistry.has(dasherize(moduleName))) {
            _this._camelCaseHelperWarnedNames.push(parsedName.fullName);
            _ember['default'].warn('Attempted to lookup "' + parsedName.fullName + '" which ' + 'was not found. In previous versions of ember-resolver, a bug would have ' + 'caused the module at "' + dasherize(moduleName) + '" to be ' + 'returned for this camel case helper name. This has been fixed. ' + 'Use the dasherized name to resolve the module that would have been ' + 'returned in previous versions.', false, { id: 'ember-resolver.camelcase-helper-names', until: '3.0.0' });
          }
        }
      });
    },

    // used by Ember.DefaultResolver.prototype._logLookup
    lookupDescription: function lookupDescription(fullName) {
      var parsedName = this.parseName(fullName);

      var moduleName = this.findModuleName(parsedName, true);

      return moduleName;
    },

    // only needed until 1.6.0-beta.2 can be required
    _logLookup: function _logLookup(found, parsedName, description) {
      if (!_ember['default'].ENV.LOG_MODULE_RESOLVER && !parsedName.root.LOG_RESOLVER) {
        return;
      }

      var symbol, padding;

      if (found) {
        symbol = '[✓]';
      } else {
        symbol = '[ ]';
      }

      if (parsedName.fullName.length > 60) {
        padding = '.';
      } else {
        padding = new Array(60 - parsedName.fullName.length).join('.');
      }

      if (!description) {
        description = this.lookupDescription(parsedName);
      }

      _ember['default'].Logger.info(symbol, parsedName.fullName, padding, description);
    },

    knownForType: function knownForType(type) {
      var moduleKeys = this._moduleRegistry.moduleNames();

      var items = (0, _emberResolverUtilsMakeDictionary['default'])();
      for (var index = 0, length = moduleKeys.length; index < length; index++) {
        var moduleName = moduleKeys[index];
        var fullname = this.translateToContainerFullname(type, moduleName);

        if (fullname) {
          items[fullname] = true;
        }
      }

      return items;
    },

    translateToContainerFullname: function translateToContainerFullname(type, moduleName) {
      var prefix = this.prefix({ type: type });

      // Note: using string manipulation here rather than regexes for better performance.
      // pod modules
      // '^' + prefix + '/(.+)/' + type + '$'
      var podPrefix = prefix + '/';
      var podSuffix = '/' + type;
      var start = moduleName.indexOf(podPrefix);
      var end = moduleName.indexOf(podSuffix);

      if (start === 0 && end === moduleName.length - podSuffix.length && moduleName.length > podPrefix.length + podSuffix.length) {
        return type + ':' + moduleName.slice(start + podPrefix.length, end);
      }

      // non-pod modules
      // '^' + prefix + '/' + pluralizedType + '/(.+)$'
      var pluralizedType = this.pluralize(type);
      var nonPodPrefix = prefix + '/' + pluralizedType + '/';

      if (moduleName.indexOf(nonPodPrefix) === 0 && moduleName.length > nonPodPrefix.length) {
        return type + ':' + moduleName.slice(nonPodPrefix.length);
      }
    },

    _extractDefaultExport: function _extractDefaultExport(normalizedModuleName) {
      var module = require(normalizedModuleName, null, null, true /* force sync */);

      if (module && module['default']) {
        module = module['default'];
      }

      return module;
    }
  });

  Resolver.reopenClass({
    moduleBasedResolver: true
  });

  exports['default'] = Resolver;
});
/*globals require */
define('ember-resolver/utils/class-factory', ['exports'], function (exports) {
  exports['default'] = classFactory;

  function classFactory(klass) {
    return {
      create: function create(injections) {
        if (typeof klass.extend === 'function') {
          return klass.extend(injections);
        } else {
          return klass;
        }
      }
    };
  }
});
define("ember-resolver/utils/create", ["exports", "ember"], function (exports, _ember) {

  var create = Object.create || _ember["default"].create;
  if (!(create && !create(null).hasOwnProperty)) {
    throw new Error("This browser does not support Object.create(null), please polyfil with es5-sham: http://git.io/yBU2rg");
  }

  exports["default"] = create;
});
define('ember-resolver/utils/make-dictionary', ['exports', 'ember-resolver/utils/create'], function (exports, _emberResolverUtilsCreate) {
  exports['default'] = makeDictionary;

  function makeDictionary() {
    var cache = (0, _emberResolverUtilsCreate['default'])(null);
    cache['_dict'] = null;
    delete cache['_dict'];
    return cache;
  }
});
define('ember-resolver/utils/module-registry', ['exports', 'ember'], function (exports, _ember) {

  if (typeof requirejs.entries === 'undefined') {
    requirejs.entries = requirejs._eak_seen;
  }

  function ModuleRegistry(entries) {
    this._entries = entries || requirejs.entries;
  }

  ModuleRegistry.prototype.moduleNames = function ModuleRegistry_moduleNames() {
    return (Object.keys || _ember['default'].keys)(this._entries);
  };

  ModuleRegistry.prototype.has = function ModuleRegistry_has(moduleName) {
    return moduleName in this._entries;
  };

  ModuleRegistry.prototype.get = function ModuleRegistry_get(moduleName) {
    var exportName = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];

    var module = require(moduleName);
    return module && module[exportName];
  };

  exports['default'] = ModuleRegistry;
});
/*globals requirejs, require */
define('ember-wormhole/components/ember-wormhole', ['exports', 'ember', 'ember-wormhole/templates/components/ember-wormhole', 'ember-wormhole/utils/dom'], function (exports, _ember, _emberWormholeTemplatesComponentsEmberWormhole, _emberWormholeUtilsDom) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;
  var run = _ember['default'].run;
  exports['default'] = Component.extend({
    layout: _emberWormholeTemplatesComponentsEmberWormhole['default'],

    /*
     * Attrs
     */
    to: computed.alias('destinationElementId'),
    destinationElementId: null,
    destinationElement: computed('destinationElementId', 'renderInPlace', function () {
      var renderInPlace = this.get('renderInPlace');
      if (renderInPlace) {
        return this._element;
      }
      var id = this.get('destinationElementId');
      if (!id) {
        return null;
      }
      return (0, _emberWormholeUtilsDom.findElementById)(this._dom.document, id);
    }),
    renderInPlace: false,

    /*
     * Lifecycle
     */
    init: function init() {
      this._super.apply(this, arguments);

      this._dom = (0, _emberWormholeUtilsDom.getDOM)(this);

      // Create text nodes used for the head, tail
      this._wormholeHeadNode = this._dom.document.createTextNode('');
      this._wormholeTailNode = this._dom.document.createTextNode('');

      // A prop to help in the mocking of didInsertElement timing for Fastboot
      this._didInsert = false;
    },

    /*
     * didInsertElement does not fire in Fastboot. Here we use willRender and
     * a _didInsert property to approximate the timing. Importantly we want
     * to run appendToDestination after the child nodes have rendered.
     */
    willRender: function willRender() {
      var _this = this;

      this._super.apply(this, arguments);
      if (!this._didInsert) {
        this._didInsert = true;
        run.schedule('afterRender', function () {
          if (_this.isDestroyed) {
            return;
          }
          _this._element = _this._wormholeHeadNode.parentNode;
          if (!_this._element) {
            throw new Error('The head node of a wormhole must be attached to the DOM');
          }
          _this._appendToDestination();
        });
      }
    },

    willDestroyElement: function willDestroyElement() {
      var _this2 = this;

      // not called in fastboot
      this._super.apply(this, arguments);
      this._didInsert = false;
      var _wormholeHeadNode = this._wormholeHeadNode;
      var _wormholeTailNode = this._wormholeTailNode;

      run.schedule('render', function () {
        _this2._removeRange(_wormholeHeadNode, _wormholeTailNode);
      });
    },

    _destinationDidChange: observer('destinationElement', function () {
      var destinationElement = this.get('destinationElement');
      if (destinationElement !== this._wormholeHeadNode.parentNode) {
        run.schedule('render', this, '_appendToDestination');
      }
    }),

    _appendToDestination: function _appendToDestination() {
      var destinationElement = this.get('destinationElement');
      if (!destinationElement) {
        var destinationElementId = this.get('destinationElementId');
        if (destinationElementId) {
          throw new Error('ember-wormhole failed to render into \'#' + this.get('destinationElementId') + '\' because the element is not in the DOM');
        }
        throw new Error('ember-wormhole failed to render content because the destinationElementId was set to an undefined or falsy value.');
      }

      var currentActiveElement = (0, _emberWormholeUtilsDom.getActiveElement)();
      this._appendRange(destinationElement, this._wormholeHeadNode, this._wormholeTailNode);
      if (currentActiveElement && (0, _emberWormholeUtilsDom.getActiveElement)() !== currentActiveElement) {
        currentActiveElement.focus();
      }
    },

    _appendRange: function _appendRange(destinationElement, firstNode, lastNode) {
      while (firstNode) {
        destinationElement.insertBefore(firstNode, null);
        firstNode = firstNode !== lastNode ? lastNode.parentNode.firstChild : null;
      }
    },

    _removeRange: function _removeRange(firstNode, lastNode) {
      var node = lastNode;
      do {
        var next = node.previousSibling;
        if (node.parentNode) {
          node.parentNode.removeChild(node);
          if (node === firstNode) {
            break;
          }
        }
        node = next;
      } while (node);
    }

  });
});
define("ember-wormhole/templates/components/ember-wormhole", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "/cm8ocrP", "block": "{\"statements\":[[\"append\",[\"helper\",[\"unbound\"],[[\"get\",[\"_wormholeHeadNode\"]]],null],false],[\"yield\",\"default\"],[\"append\",[\"helper\",[\"unbound\"],[[\"get\",[\"_wormholeTailNode\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-wormhole/templates/components/ember-wormhole.hbs" } });
});
define('ember-wormhole/utils/dom', ['exports'], function (exports) {
  exports.getActiveElement = getActiveElement;
  exports.findElementById = findElementById;
  exports.getDOM = getDOM;
  /*
   * Implement some helpers methods for interacting with the DOM,
   * be it Fastboot's SimpleDOM or the browser's version.
   */

  function getActiveElement() {
    if (typeof document === 'undefined') {
      return null;
    } else {
      return document.activeElement;
    }
  }

  function childNodesOfElement(element) {
    var children = [];
    var child = element.firstChild;
    while (child) {
      children.push(child);
      child = child.nextSibling;
    }
    return children;
  }

  function findElementById(doc, id) {
    if (doc.getElementById) {
      return doc.getElementById(id);
    }

    var nodes = childNodesOfElement(doc);
    var node = undefined;

    while (nodes.length) {
      node = nodes.shift();

      if (node.getAttribute && node.getAttribute('id') === id) {
        return node;
      }

      nodes = childNodesOfElement(node).concat(nodes);
    }
  }

  // Private Ember API usage. Get the dom implementation used by the current
  // renderer, be it native browser DOM or Fastboot SimpleDOM

  function getDOM(context) {
    var renderer = context.renderer;

    if (renderer._dom) {
      // pre glimmer2
      return renderer._dom;
    } else if (renderer._env && renderer._env.getDOM) {
      // glimmer2
      return renderer._env.getDOM();
    } else {
      throw new Error('ember-wormhole could not get DOM');
    }
  }
});
define("liquid-fire/action", ["exports", "liquid-fire/promise"], function (exports, _promise) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Action = function () {
    function Action(nameOrHandler) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Action);

      if (typeof nameOrHandler === 'function') {
        this.handler = nameOrHandler;
      } else {
        this.name = nameOrHandler;
      }
      this.reversed = opts.reversed;
      this.args = args;
    }

    _createClass(Action, [{
      key: "validateHandler",
      value: function validateHandler(transitionMap) {
        if (!this.handler) {
          this.handler = transitionMap.lookup(this.name);
        }
      }
    }, {
      key: "run",
      value: function run(context) {
        var _this = this;

        return new _promise.default(function (resolve, reject) {
          _promise.default.resolve(_this.handler.apply(context, _this.args)).then(resolve, reject);
        });
      }
    }]);

    return Action;
  }();

  exports.default = Action;
});
define("liquid-fire/animate", ["exports", "liquid-fire/promise", "ember", "velocity"], function (exports, _promise, _ember, _velocity) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.animate = animate;
  exports.stop = stop;
  exports.setDefaults = setDefaults;
  exports.isAnimating = isAnimating;
  exports.finish = finish;
  exports.timeSpent = timeSpent;
  exports.timeRemaining = timeRemaining;


  // Make sure Velocity always has promise support by injecting our own
  // RSVP-based implementation if it doesn't already have one.
  if (!_velocity.default.Promise) {
    _velocity.default.Promise = _promise.default;
  }

  // Velocity's tick() defaults to RAF's high resolution timestamp. If the browser
  // is under high stress the RAF timestamp may have a significant offset which
  // can result in dropping a large chunk of frames. Because of this, the use of
  // the RAF timestamp should be opt-in.
  /* jshint newcap: false */
  _velocity.default.timestamp = false;

  function animate(elt, props, opts, label) {
    // These numbers are just sane defaults in the probably-impossible
    // case where somebody tries to read our state before the first
    // 'progress' callback has fired.
    var state = { percentComplete: 0, timeRemaining: 100, timeSpent: 0 };

    if (!elt || elt.length === 0) {
      return _promise.default.resolve();
    }

    if (!opts) {
      opts = {};
    } else {
      opts = _ember.default.copy(opts);
    }

    // By default, we ask velocity to clear the element's `display`
    // and `visibility` properties at the start of animation. Our
    // animated divs are all initially rendered with `display:none`
    // and `visibility:hidden` to prevent a flash of before-animated
    // content.
    if (typeof opts.display === 'undefined') {
      opts.display = '';
    }
    if (typeof opts.visibility === 'undefined') {
      opts.visibility = 'visible';
    }

    if (opts.progress) {
      throw new Error("liquid-fire's 'animate' function reserves the use of Velocity's 'progress' option for its own nefarious purposes.");
    }

    opts.progress = function () {
      state.percentComplete = arguments[1];
      state.timeRemaining = arguments[2];
      state.timeSpent = state.timeRemaining / (1 / state.percentComplete - 1);
    };

    state.promise = _promise.default.resolve(_velocity.default.animate(elt[0], props, opts));

    if (label) {
      state.promise = state.promise.then(function () {
        clearLabel(elt, label);
      }, function (err) {
        clearLabel(elt, label);
        throw err;
      });
      applyLabel(elt, label, state);
    }

    return state.promise;
  }

  function stop(elt) {
    if (elt) {
      (0, _velocity.default)(elt[0], 'stop', true);
    }
  }

  function setDefaults(props) {
    for (var key in props) {
      if (props.hasOwnProperty(key)) {
        if (key === 'progress') {
          throw new Error("liquid-fire's 'animate' function reserves the use of Velocity's '" + key + "' option for its own nefarious purposes.");
        }
        _velocity.default.defaults[key] = props[key];
      }
    }
  }

  function isAnimating(elt, animationLabel) {
    return elt && elt.data('lfTags_' + animationLabel);
  }

  function finish(elt, animationLabel) {
    return stateForLabel(elt, animationLabel).promise;
  }

  function timeSpent(elt, animationLabel) {
    return stateForLabel(elt, animationLabel).timeSpent;
  }

  function timeRemaining(elt, animationLabel) {
    return stateForLabel(elt, animationLabel).timeRemaining;
  }

  function stateForLabel(elt, label) {
    var state = isAnimating(elt, label);
    if (!state) {
      throw new Error("no animation labeled " + label + " is in progress");
    }
    return state;
  }

  function applyLabel(elt, label, state) {
    if (elt) {
      elt.data('lfTags_' + label, state);
    }
  }

  function clearLabel(elt, label) {
    if (elt) {
      elt.data('lfTags_' + label, null);
    }
  }
});
define('liquid-fire/components/-lf-get-outlet-state', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, _ember, _emberInternals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: '',
    layout: _emberInternals.getOutletStateTemplate
  });
});
define('liquid-fire/components/illiquid-model', ['exports', 'ember', 'liquid-fire/templates/components/illiquid-model'], function (exports, _ember, _illiquidModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IlliquidModel = _ember.default.Component.extend({
    layout: _illiquidModel.default,
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      if (!this.get('_fixedModel')) {
        this.set('_fixedModel', this.get('model'));
      }
    }
  });

  IlliquidModel.reopenClass({
    positionalParams: ['model']
  });

  exports.default = IlliquidModel;
});
define('liquid-fire/components/liquid-bind', ['exports', 'ember', 'liquid-fire/templates/components/liquid-bind'], function (exports, _ember, _liquidBind) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var LiquidBind = _ember.default.Component.extend({
    layout: _liquidBind.default,
    tagName: '',
    positionalParams: ['value'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    forwardMatchContext: _ember.default.computed('matchContext', function () {
      var m = this.get('matchContext');
      if (!m) {
        m = {};
      }
      if (!m.helperName) {
        m.helperName = 'liquid-bind';
      }
      return m;
    })
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports.default = LiquidBind;
});
define('liquid-fire/components/liquid-child', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['liquid-child'],

    init: function init() {
      this._super.apply(this, arguments);
      this._waitingFor = [];
    },
    didInsertElement: function didInsertElement() {
      var _this = this;

      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this._waitForAll().then(function () {
        if (!_this.isDestroying) {
          _this._waitingFor = null;
          _this.sendAction('liquidChildDidRender', _this);
        }
      });
    },


    _isLiquidChild: true,
    _waitForMe: function _waitForMe(promise) {
      if (!this._waitingFor) {
        return;
      }
      this._waitingFor.push(promise);
      var ancestor = this.nearestWithProperty('_isLiquidChild');
      if (ancestor) {
        ancestor._waitForMe(promise);
      }
    },
    _waitForAll: function _waitForAll() {
      var _this2 = this;

      var promises = this._waitingFor;
      this._waitingFor = [];
      return _ember.default.RSVP.Promise.all(promises).then(function () {
        if (_this2._waitingFor.length > 0) {
          return _this2._waitForAll();
        }
      });
    }
  });
});
define("liquid-fire/components/liquid-container", ["exports", "ember", "liquid-fire/growable", "liquid-fire/components/liquid-measured", "liquid-fire/templates/components/liquid-container"], function (exports, _ember, _growable, _liquidMeasured, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend(_growable.default, {
    layout: _liquidContainer.default,
    classNames: ['liquid-container'],

    lockSize: function lockSize(elt, want) {
      elt.outerWidth(want.width);
      elt.outerHeight(want.height);
    },

    unlockSize: function unlockSize() {
      var _this = this;

      var doUnlock = function doUnlock() {
        _this.updateAnimatingClass(false);
        var elt = _this.$();
        if (elt) {
          elt.css({ width: '', height: '' });
        }
      };
      if (this._scaling) {
        this._scaling.then(doUnlock);
      } else {
        doUnlock();
      }
    },

    // We're doing this manually instead of via classNameBindings
    // because it depends on upward-data-flow, which generates warnings
    // under Glimmer.
    updateAnimatingClass: function updateAnimatingClass(on) {
      if (this.isDestroyed) {
        return;
      }
      if (on) {
        this.$().addClass('liquid-animating');
      } else {
        this.$().removeClass('liquid-animating');
      }
    },


    startMonitoringSize: _ember.default.on('didInsertElement', function () {
      this._wasInserted = true;
    }),

    actions: {

      willTransition: function willTransition(versions) {
        if (!this._wasInserted) {
          return;
        }

        // Remember our own size before anything changes
        var elt = this.$();
        this._cachedSize = (0, _liquidMeasured.measure)(elt);

        // And make any children absolutely positioned with fixed sizes.
        for (var i = 0; i < versions.length; i++) {
          goAbsolute(versions[i]);
        }
      },

      afterChildInsertion: function afterChildInsertion(versions) {
        var elt = this.$();
        var enableGrowth = this.get('enableGrowth') !== false;

        // Measure children
        var sizes = [];
        for (var i = 0; i < versions.length; i++) {
          if (versions[i].view) {
            sizes[i] = (0, _liquidMeasured.measure)(versions[i].view.$());
          }
        }

        // Measure ourself again to see how big the new children make
        // us.
        var want = (0, _liquidMeasured.measure)(elt);
        var have = this._cachedSize || want;

        // Make ourself absolute
        if (enableGrowth) {
          this.lockSize(elt, have);
        } else {
          this.lockSize(elt, {
            height: Math.max(want.height, have.height),
            width: Math.max(want.width, have.width)
          });
        }

        // Apply '.liquid-animating' to liquid-container allowing
        // any customizable CSS control while an animating is occuring
        this.updateAnimatingClass(true);

        // Make the children absolute and fixed size.
        for (i = 0; i < versions.length; i++) {
          goAbsolute(versions[i], sizes[i]);
        }

        // Kick off our growth animation
        if (enableGrowth) {
          this._scaling = this.animateGrowth(elt, have, want);
        }
      },

      afterTransition: function afterTransition(versions) {
        for (var i = 0; i < versions.length; i++) {
          goStatic(versions[i]);
        }
        this.unlockSize();
      }
    }
  });


  function goAbsolute(version, size) {
    if (!version.view) {
      return;
    }
    var elt = version.view.$();
    var pos = elt.position();
    if (!size) {
      size = (0, _liquidMeasured.measure)(elt);
    }
    elt.outerWidth(size.width);
    elt.outerHeight(size.height);
    elt.css({
      position: 'absolute',
      top: pos.top,
      left: pos.left
    });
  }

  function goStatic(version) {
    if (version.view && !version.view.isDestroyed) {
      version.view.$().css({ width: '', height: '', position: '' });
    }
  }
});
define('liquid-fire/components/liquid-if', ['exports', 'ember', 'liquid-fire/templates/components/liquid-if'], function (exports, _ember, _liquidIf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var LiquidIf = _ember.default.Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    layout: _liquidIf.default,
    tagName: '',
    helperName: 'liquid-if'
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports.default = LiquidIf;
});
define("liquid-fire/components/liquid-measured", ["exports", "liquid-fire/mutation-observer", "ember", "liquid-fire/templates/components/liquid-measured"], function (exports, _mutationObserver, _ember, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.measure = measure;
  exports.default = _ember.default.Component.extend({
    layout: _liquidMeasured.default,

    init: function init() {
      this._super.apply(this, arguments);
      this._destroyOnUnload = this._destroyOnUnload.bind(this);
    },


    didInsertElement: function didInsertElement() {
      var self = this;

      // This prevents margin collapse
      this.$().css({
        overflow: 'auto'
      });

      this.didMutate();

      this.observer = new _mutationObserver.default(function (mutations) {
        self.didMutate(mutations);
      });
      this.observer.observe(this.get('element'), {
        attributes: true,
        subtree: true,
        childList: true,
        characterData: true
      });
      this.$().bind('webkitTransitionEnd', function () {
        self.didMutate();
      });
      // Chrome Memory Leak: https://bugs.webkit.org/show_bug.cgi?id=93661
      window.addEventListener('unload', this._destroyOnUnload);
    },

    willDestroyElement: function willDestroyElement() {
      if (this.observer) {
        this.observer.disconnect();
      }
      window.removeEventListener('unload', this._destroyOnUnload);
    },

    transitionMap: _ember.default.inject.service('liquid-fire-transitions'),

    didMutate: function didMutate() {
      // by incrementing the running transitions counter here we prevent
      // tests from falling through the gap between the time they
      // triggered mutation the time we may actually animate in
      // response.
      var tmap = this.get('transitionMap');
      tmap.incrementRunningTransitions();
      _ember.default.run.next(this, function () {
        this._didMutate();
        tmap.decrementRunningTransitions();
      });
    },

    _didMutate: function _didMutate() {
      var elt = this.$();
      if (!elt || !elt[0]) {
        return;
      }
      this.set('measurements', measure(elt));
    },

    _destroyOnUnload: function _destroyOnUnload() {
      this.willDestroyElement();
    }
  });
  function measure($elt) {
    return $elt[0].getBoundingClientRect();
  }
});
define('liquid-fire/components/liquid-outlet', ['exports', 'ember', 'liquid-fire/templates/components/liquid-outlet', 'liquid-fire/ember-internals'], function (exports, _ember, _liquidOutlet, _emberInternals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var LiquidOutlet = _ember.default.Component.extend({
    layout: _liquidOutlet.default,
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    versionEquality: _ember.default.computed('outletName', 'watchModels', function () {
      var outletName = this.get('outletName');
      var watchModels = this.get('watchModels');
      return function (oldValue, newValue) {
        var oldChild = (0, _emberInternals.childRoute)(oldValue, outletName);
        var newChild = (0, _emberInternals.childRoute)(newValue, outletName);
        return (0, _emberInternals.routeIsStable)(oldChild, newChild) && (!watchModels || (0, _emberInternals.modelIsStable)(oldChild, newChild));
      };
    }),
    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.set('outletName', this.get('inputOutletName') || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports.default = LiquidOutlet;
});
define("liquid-fire/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-measured", "liquid-fire/growable", "ember", "liquid-fire/templates/components/liquid-spacer"], function (exports, _liquidMeasured, _growable, _ember, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend(_growable.default, {
    layout: _liquidSpacer.default,
    enabled: true,

    didInsertElement: function didInsertElement() {
      var child = this.$('> div');
      var measurements = this.myMeasurements((0, _liquidMeasured.measure)(child));
      var elt = this.$();
      elt.css('overflow', 'hidden');
      if (this.get('growWidth')) {
        elt.outerWidth(measurements.width);
      }
      if (this.get('growHeight')) {
        elt.outerHeight(measurements.height);
      }
    },

    sizeChange: _ember.default.observer('measurements', function () {
      if (!this.get('enabled')) {
        return;
      }
      var elt = this.$();
      if (!elt || !elt[0]) {
        return;
      }
      var want = this.myMeasurements(this.get('measurements'));
      var have = (0, _liquidMeasured.measure)(this.$());
      this.animateGrowth(elt, have, want);
    }),

    // given our child's outerWidth & outerHeight, figure out what our
    // outerWidth & outerHeight should be.
    myMeasurements: function myMeasurements(childMeasurements) {
      var elt = this.$();
      return {
        width: childMeasurements.width + sumCSS(elt, padding('width')) + sumCSS(elt, border('width')),
        height: childMeasurements.height + sumCSS(elt, padding('height')) + sumCSS(elt, border('height'))
      };
      //if (this.$().css('box-sizing') === 'border-box') {
    }

  });


  function sides(dimension) {
    return dimension === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  }

  function padding(dimension) {
    var s = sides(dimension);
    return ['padding' + s[0], 'padding' + s[1]];
  }

  function border(dimension) {
    var s = sides(dimension);
    return ['border' + s[0] + 'Width', 'border' + s[1] + 'Width'];
  }

  function sumCSS(elt, fields) {
    var accum = 0;
    for (var i = 0; i < fields.length; i++) {
      var num = parseFloat(elt.css(fields[i]), 10);
      if (!isNaN(num)) {
        accum += num;
      }
    }
    return accum;
  }
});
define('liquid-fire/components/liquid-sync', ['exports', 'ember', 'liquid-fire/templates/components/liquid-sync', 'liquid-fire/mixins/pausable'], function (exports, _ember, _liquidSync, _pausable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend(_pausable.default, {
    tagName: '',
    layout: _liquidSync.default,
    didInsertElement: function didInsertElement() {
      this.pauseLiquidFire();
    },

    actions: {
      ready: function ready() {
        this.resumeLiquidFire();
      }
    }
  });
});
define('liquid-fire/components/liquid-unless', ['exports', 'liquid-fire/components/liquid-if'], function (exports, _liquidIf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _liquidIf.default.extend({
    helperName: 'liquid-unless',
    inverted: true
  });
});
define("liquid-fire/components/liquid-versions", ["exports", "ember", "liquid-fire/ember-internals", "liquid-fire/templates/components/liquid-versions"], function (exports, _ember, _emberInternals, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var get = _ember.default.get;
  var set = _ember.default.set;

  exports.default = _ember.default.Component.extend({
    layout: _liquidVersions.default,
    tagName: "",

    transitionMap: _ember.default.inject.service('liquid-fire-transitions'),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.appendVersion();
    },
    appendVersion: function appendVersion() {
      var versions = this.versions;
      var firstTime = false;
      var newValue = this.getAttr('value');
      var oldValue;
      var versionEquality = this.get('versionEquality') || defaultEqualityCheck;

      if (!versions) {
        firstTime = true;
        versions = _ember.default.A();
      } else {
        if (versions[0]) {
          oldValue = versions[0].value;
        }
      }

      if (!firstTime && versionEquality(oldValue, newValue)) {
        if (versions[0] && versionEquality !== defaultEqualityCheck) {
          // When using custom equality checkers, we may consider values
          // equal for our purposes that are not `===`. In that case, we
          // still need to thread updated values through to our children
          // so they have their own opportunity to react.
          _ember.default.set(versions[0], 'value', newValue);
        }
        return;
      }

      this.notifyContainer('willTransition', versions);
      var newVersion = {
        value: newValue
      };
      versions.unshiftObject(newVersion);

      this.firstTime = firstTime;
      if (firstTime) {
        set(this, 'versions', versions);
      }

      if (!(newValue || this.get('renderWhenFalse') || firstTime)) {
        this._transition();
      }
    },


    _transition: function _transition() {
      var _this = this;

      var versions = get(this, 'versions');
      var transition;
      var firstTime = this.firstTime;
      this.firstTime = false;

      this.notifyContainer('afterChildInsertion', versions);

      transition = get(this, 'transitionMap').transitionFor({
        versions: versions,
        parentElement: _ember.default.$((0, _emberInternals.containingElement)(this)),
        use: get(this, 'use'),
        rules: get(this, 'rules'),
        matchContext: get(this, 'matchContext') || {},
        // Using strings instead of booleans here is an
        // optimization. The constraint system can match them more
        // efficiently, since it treats boolean constraints as generic
        // "match anything truthy/falsy" predicates, whereas string
        // checks are a direct object property lookup.
        firstTime: firstTime ? 'yes' : 'no'
      });

      if (this._runningTransition) {
        this._runningTransition.interrupt();
      }
      this._runningTransition = transition;

      transition.run().then(function (wasInterrupted) {
        // if we were interrupted, we don't handle the cleanup because
        // another transition has already taken over.
        if (!wasInterrupted) {
          _this.finalizeVersions(versions);
          _this.notifyContainer("afterTransition", versions);
        }
      }, function (err) {
        _this.finalizeVersions(versions);
        _this.notifyContainer("afterTransition", versions);
        throw err;
      });
    },

    finalizeVersions: function finalizeVersions(versions) {
      versions.replace(1, versions.length - 1);
    },

    notifyContainer: function notifyContainer(method, versions) {
      var target = get(this, 'notify');
      if (target) {
        target.send(method, versions);
      }
    },

    actions: {
      childDidRender: function childDidRender(child) {
        var version = get(child, 'version');
        set(version, 'view', child);
        this._transition();
      }
    }

  });


  // All falsey values are considered equal, everything else gets strict
  // equality.
  function defaultEqualityCheck(a, b) {
    return !a && !b || a === b;
  }
});
define('liquid-fire/constrainables', ['exports', 'liquid-fire/ember-internals'], function (exports, _emberInternals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    oldValue: {
      reversesTo: 'newValue',
      accessor: function accessor(conditions) {
        return [versionValue(conditions, 1)];
      }
    },
    newValue: {
      reversesTo: 'oldValue',
      accessor: function accessor(conditions) {
        return [versionValue(conditions, 0)];
      }
    },
    oldRoute: {
      reversesTo: 'newRoute',
      accessor: function accessor(conditions) {
        return (0, _emberInternals.routeName)((0, _emberInternals.childRoute)(versionValue(conditions, 1), conditions.matchContext.outletName));
      }
    },
    newRoute: {
      reversesTo: 'oldRoute',
      accessor: function accessor(conditions) {
        return (0, _emberInternals.routeName)((0, _emberInternals.childRoute)(versionValue(conditions, 0), conditions.matchContext.outletName));
      }
    },
    oldModel: {
      reversesTo: 'newModel',
      accessor: function accessor(conditions) {
        return (0, _emberInternals.routeModel)((0, _emberInternals.childRoute)(versionValue(conditions, 1), conditions.matchContext.outletName));
      }
    },
    newModel: {
      reversesTo: 'oldModel',
      accessor: function accessor(conditions) {
        return (0, _emberInternals.routeModel)((0, _emberInternals.childRoute)(versionValue(conditions, 0), conditions.matchContext.outletName));
      }
    },
    helperName: {
      accessor: function accessor(conditions) {
        return conditions.matchContext.helperName;
      }
    },
    outletName: {
      accessor: function accessor(conditions) {
        return conditions.matchContext.outletName;
      }
    },
    parentElementClass: {
      accessor: function accessor(conditions) {
        var cls = conditions.parentElement.attr('class');
        if (cls) {
          return cls.split(/\s+/);
        }
      }
    },
    parentElement: {},
    firstTime: {},
    media: {}
  };


  function versionValue(conditions, index) {
    var versions = conditions.versions;
    return versions[index] ? versions[index].value : null;
  }
});
define("liquid-fire/constraint", ["exports", "ember", "liquid-fire/constrainables"], function (exports, _ember, _constrainables) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ANY = exports.EMPTY = undefined;
  exports.constraintKeys = constraintKeys;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Constraint = function () {
    function Constraint(target, matcher) {
      _classCallCheck(this, Constraint);

      // targets are the properties of a transition that we can
      // constrain
      this.target = target;
      if (arguments.length === 1) {
        return;
      }
      if (matcher instanceof RegExp) {
        this.predicate = function (value) {
          return matcher.test(value);
        };
      } else if (typeof matcher === 'function') {
        this.predicate = matcher;
      } else if (typeof matcher === 'boolean') {
        this.predicate = function (value) {
          return matcher ? value : !value;
        };
      } else {
        this.keys = constraintKeys(matcher);
      }
    }

    _createClass(Constraint, [{
      key: "invert",
      value: function invert() {
        if (!_constrainables.default[this.target].reversesTo) {
          return this;
        }
        var inverse = new this.constructor(_constrainables.default[this.target].reversesTo);
        inverse.predicate = this.predicate;
        inverse.keys = this.keys;
        return inverse;
      }
    }]);

    return Constraint;
  }();

  exports.default = Constraint;
  var EMPTY = exports.EMPTY = '__liquid_fire_EMPTY__';
  var ANY = exports.ANY = '__liquid_fire_ANY__';

  function constraintKeys(matcher) {
    if (typeof matcher === 'undefined' || matcher === null) {
      matcher = [EMPTY];
    } else if (!_ember.default.isArray(matcher)) {
      matcher = [matcher];
    }
    return _ember.default.A(matcher).map(function (elt) {
      if (typeof elt === 'string') {
        return elt;
      } else {
        return _ember.default.guidFor(elt);
      }
    });
  }
});
define('liquid-fire/constraints', ['exports', 'ember', 'liquid-fire/constraint', 'liquid-fire/constrainables'], function (exports, _ember, _constraint, _constrainables) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Constraints = function () {
    function Constraints() {
      _classCallCheck(this, Constraints);

      this.targets = {};
      this.ruleCounter = 0;
      for (var i = 0; i < constrainableKeys.length; i++) {
        this.targets[constrainableKeys[i]] = {};
      }
    }

    _createClass(Constraints, [{
      key: 'addRule',
      value: function addRule(rule) {
        rule.id = this.ruleCounter++;
        if (rule.debug) {
          this.debug = true;
        }
        this.addHalfRule(rule);
        if (rule.reverse) {
          var inverted = rule.invert();
          inverted.id = rule.id + ' reverse';
          this.addHalfRule(inverted);
        }
      }
    }, {
      key: 'addHalfRule',
      value: function addHalfRule(rule) {
        var _this = this;

        var seen = {};
        rule.constraints.forEach(function (constraint) {
          seen[constraint.target] = true;
          _this.addConstraint(rule, constraint);
        });
        constrainableKeys.forEach(function (key) {
          if (!seen[key]) {
            _this.addConstraint(rule, { target: key });
          }
        });
      }
    }, {
      key: 'addConstraint',
      value: function addConstraint(rule, constraint) {
        var _this2 = this;

        var context = this.targets[constraint.target];
        if (!context) {
          throw new Error('Unknown constraint target ' + constraint.target);
        }
        if (constraint.keys) {
          constraint.keys.forEach(function (key) {
            _this2.addKey(context, key, rule);
          });
        } else {
          this.addKey(context, _constraint.ANY, rule);
        }
      }
    }, {
      key: 'addKey',
      value: function addKey(context, key, rule) {
        if (!context[key]) {
          context[key] = {};
        }
        context[key][_ember.default.guidFor(rule)] = rule;
      }
    }, {
      key: 'bestMatch',
      value: function bestMatch(conditions) {
        if (this.debug) {
          console.log("[liquid-fire] Checking transition rules for", conditions.parentElement[0]);
        }

        var rules = this.match(conditions);
        var best = highestPriority(rules);

        if (rules.length > 1 && this.debug) {
          rules.forEach(function (rule) {
            if (rule !== best && rule.debug) {
              console.log(describeRule(rule) + ' matched, but it was superceded by another rule');
            }
          });
        }
        if (best && best.debug) {
          console.log(describeRule(best) + ' matched');
        }
        return best;
      }
    }, {
      key: 'match',
      value: function match(conditions) {
        var rules = this.matchByKeys(conditions);
        rules = this.matchPredicates(conditions, rules);
        return rules;
      }
    }, {
      key: 'matchByKeys',
      value: function matchByKeys(conditions) {
        var matchSets = [];
        for (var i = 0; i < constrainableKeys.length; i++) {
          var key = constrainableKeys[i];
          var value = conditionAccessor(conditions, key);
          matchSets.push(this.matchingSet(key, value));
        }
        return intersection(matchSets);
      }
    }, {
      key: 'matchingSet',
      value: function matchingSet(prop, value) {
        var keys = (0, _constraint.constraintKeys)(value);
        var context = this.targets[prop];
        var matched = _ember.default.A();
        for (var i = 0; i < keys.length; i++) {
          if (context[keys[i]]) {
            matched.push(context[keys[i]]);
          }
        }
        if (keys.length === 0 && context[_constraint.EMPTY]) {
          matched.push(context[_constraint.EMPTY]);
        }
        if (context[_constraint.ANY]) {
          matched.push(context[_constraint.ANY]);
        }
        matched = union(matched);
        if (this.debug) {
          this.logDebugRules(matched, context, prop, value);
        }
        return matched;
      }
    }, {
      key: 'logDebugRules',
      value: function logDebugRules(matched, context, target, value) {
        _ember.default.A(Object.keys(context)).forEach(function (setKey) {
          var set = context[setKey];
          _ember.default.A(Object.keys(set)).forEach(function (ruleKey) {
            var rule = set[ruleKey];
            if (rule.debug && !matched[_ember.default.guidFor(rule)]) {
              var _console;

              (_console = console).log.apply(_console, [describeRule(rule) + ' rejected because ' + target + ' was'].concat(_toConsumableArray(value)));
            }
          });
        });
      }
    }, {
      key: 'matchPredicates',
      value: function matchPredicates(conditions, rules) {
        var output = [];
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i];
          var matched = true;
          for (var j = 0; j < rule.constraints.length; j++) {
            var constraint = rule.constraints[j];
            if (constraint.predicate && !this.matchConstraintPredicate(conditions, rule, constraint)) {
              matched = false;
              break;
            }
          }
          if (matched) {
            output.push(rule);
          }
        }
        return output;
      }
    }, {
      key: 'matchConstraintPredicate',
      value: function matchConstraintPredicate(conditions, rule, constraint) {
        var values = conditionAccessor(conditions, constraint.target);
        var reverse = _constrainables.default[constraint.target].reversesTo;
        var inverseValues;
        if (reverse) {
          inverseValues = conditionAccessor(conditions, reverse);
        }
        for (var i = 0; i < values.length; i++) {
          if (constraint.predicate(values[i], inverseValues ? inverseValues[i] : null)) {
            return true;
          }
        }
        if (rule.debug) {
          var _console2;

          if (constraint.target === 'parentElement') {
            values = values.map(function (v) {
              return v[0];
            });
          }
          (_console2 = console).log.apply(_console2, [describeRule(rule) + ' rejected because of a constraint on ' + constraint.target + '. ' + constraint.target + ' was'].concat(_toConsumableArray(values)));
        }
      }
    }]);

    return Constraints;
  }();

  exports.default = Constraints;


  function conditionAccessor(conditions, key) {
    var constrainable = _constrainables.default[key];
    if (constrainable.accessor) {
      return constrainable.accessor(conditions) || [];
    } else {
      return [conditions[key]];
    }
  }

  // Returns a list of property values from source whose keys also
  // appear in all of the rest objects.
  function intersection(sets) {
    var source = sets[0];
    var rest = sets.slice(1);
    var keys = Object.keys(source);
    var keysLength = keys.length;
    var restLength = rest.length;
    var result = [];
    for (var keyIndex = 0; keyIndex < keysLength; keyIndex++) {
      var key = keys[keyIndex];
      var matched = true;
      for (var restIndex = 0; restIndex < restLength; restIndex++) {
        if (!rest[restIndex].hasOwnProperty(key)) {
          matched = false;
          break;
        }
      }
      if (matched) {
        result.push(source[key]);
      }
    }
    return result;
  }

  function union(sets) {
    var setsLength = sets.length;
    var output = {};
    for (var i = 0; i < setsLength; i++) {
      var set = sets[i];
      var keys = Object.keys(set);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        output[key] = set[key];
      }
    }
    return output;
  }

  function describeRule(rule) {
    return '[liquid-fire rule ' + rule.id + ']';
  }

  function highestPriority(rules) {
    var best;
    var bestScore = 0;
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      var score = rules[i].constraints.length;
      if (!best || score > bestScore || score === bestScore && rule.id > best.id) {
        best = rule;
        bestScore = score;
      }
    }
    return best;
  }

  var constrainableKeys = _ember.default.A(Object.keys(_constrainables.default));
});
define("liquid-fire/dsl", ["exports", "liquid-fire/animate", "liquid-fire/rule", "liquid-fire/constraint", "liquid-fire/action"], function (exports, _animate, _rule, _constraint, _action) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var DSL = function () {
    function DSL(map, constraints) {
      _classCallCheck(this, DSL);

      this.map = map;
      this.constraints = constraints;
    }

    _createClass(DSL, [{
      key: "setDefault",
      value: function setDefault(props) {
        (0, _animate.setDefaults)(props);
      }
    }, {
      key: "transition",
      value: function transition() {
        var rule = new _rule.default();
        var parts = Array.prototype.slice.apply(arguments).reduce(function (a, b) {
          return a.concat(b);
        }, []);

        for (var i = 0; i < parts.length; i++) {
          rule.add(parts[i]);
        }

        rule.validate(this.map);
        this.constraints.addRule(rule);
      }
    }, {
      key: "fromRoute",
      value: function fromRoute(routeName) {
        return [new _constraint.default('oldRoute', routeName)];
      }
    }, {
      key: "toRoute",
      value: function toRoute(routeName) {
        return [new _constraint.default('newRoute', routeName)];
      }
    }, {
      key: "withinRoute",
      value: function withinRoute(routeName) {
        return this.fromRoute(routeName).concat(this.toRoute(routeName));
      }
    }, {
      key: "fromValue",
      value: function fromValue(matcher) {
        return [new _constraint.default('oldValue', matcher)];
      }
    }, {
      key: "toValue",
      value: function toValue(matcher) {
        return [new _constraint.default('newValue', matcher)];
      }
    }, {
      key: "betweenValues",
      value: function betweenValues(matcher) {
        return this.fromValue(matcher).concat(this.toValue(matcher));
      }
    }, {
      key: "fromModel",
      value: function fromModel(matcher) {
        return [new _constraint.default('oldModel', matcher)];
      }
    }, {
      key: "toModel",
      value: function toModel(matcher) {
        return [new _constraint.default('newModel', matcher)];
      }
    }, {
      key: "betweenModels",
      value: function betweenModels(matcher) {
        return this.fromModel(matcher).concat(this.toModel(matcher));
      }
    }, {
      key: "hasClass",
      value: function hasClass(name) {
        return new _constraint.default('parentElementClass', name);
      }
    }, {
      key: "matchSelector",
      value: function matchSelector(selector) {
        return new _constraint.default('parentElement', function (elt) {
          return elt.is(selector);
        });
      }
    }, {
      key: "childOf",
      value: function childOf(selector) {
        return this.matchSelector(selector + ' > *');
      }
    }, {
      key: "use",
      value: function use(nameOrHandler) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return new _action.default(nameOrHandler, args);
      }
    }, {
      key: "reverse",
      value: function reverse(nameOrHandler) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return new _action.default(nameOrHandler, args, { reversed: true });
      }
    }, {
      key: "useAndReverse",
      value: function useAndReverse(nameOrHandler) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return [this.use.apply(this, [nameOrHandler].concat(args)), this.reverse.apply(this, [nameOrHandler].concat(args))];
      }
    }, {
      key: "onInitialRender",
      value: function onInitialRender() {
        return new _constraint.default('firstTime', 'yes');
      }
    }, {
      key: "includingInitialRender",
      value: function includingInitialRender() {
        return new _constraint.default('firstTime', ['yes', 'no']);
      }
    }, {
      key: "inHelper",
      value: function inHelper() {
        for (var _len4 = arguments.length, names = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          names[_key4] = arguments[_key4];
        }

        return new _constraint.default('helperName', names);
      }
    }, {
      key: "outletName",
      value: function outletName() {
        for (var _len5 = arguments.length, names = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          names[_key5] = arguments[_key5];
        }

        return new _constraint.default('outletName', names);
      }
    }, {
      key: "media",
      value: function media(query) {
        return new _constraint.default('media', function () {
          return window.matchMedia(query).matches;
        });
      }
    }, {
      key: "debug",
      value: function debug() {
        return 'debug';
      }
    }]);

    return DSL;
  }();

  exports.default = DSL;
});
define('liquid-fire/ember-internals', ['exports', 'liquid-fire/ember-internals/common', 'liquid-fire/ember-internals/version-specific'], function (exports, _common, _versionSpecific) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'childRoute', {
    enumerable: true,
    get: function () {
      return _common.childRoute;
    }
  });
  Object.defineProperty(exports, 'routeName', {
    enumerable: true,
    get: function () {
      return _common.routeName;
    }
  });
  Object.defineProperty(exports, 'routeModel', {
    enumerable: true,
    get: function () {
      return _common.routeModel;
    }
  });
  Object.defineProperty(exports, 'routeIsStable', {
    enumerable: true,
    get: function () {
      return _common.routeIsStable;
    }
  });
  Object.defineProperty(exports, 'modelIsStable', {
    enumerable: true,
    get: function () {
      return _common.modelIsStable;
    }
  });
  Object.defineProperty(exports, 'containingElement', {
    enumerable: true,
    get: function () {
      return _versionSpecific.containingElement;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _versionSpecific.initialize;
    }
  });
  Object.defineProperty(exports, 'getOutletStateTemplate', {
    enumerable: true,
    get: function () {
      return _versionSpecific.getOutletStateTemplate;
    }
  });
});
define('liquid-fire/ember-internals/common', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.childRoute = childRoute;
  exports.routeName = routeName;
  exports.routeModel = routeModel;
  exports.routeIsStable = routeIsStable;
  exports.modelIsStable = modelIsStable;


  // Traverses down to the child routeInfo with the given name.
  function childRoute(routeInfo, outletName) {
    var outlets = void 0;
    // TODO: the second condition is only necessary because every
    // constrainable accessor runs against every value all the time. It
    // would be better to add a precondition on helperName that would
    // short-circuit this elsewhere.
    if (routeInfo && (outlets = routeInfo.outlets)) {
      return outlets[outletName];
    }
  }

  // Finds the route name from a route state so we can apply our
  // matching rules to it.
  function routeName(routeInfo) {
    if (routeInfo) {
      return [routeInfo.render.name];
    }
  }

  // Finds the route's model from a route state so we can apply our
  // matching rules to it. On first access, will lock down the value of
  // the model so that future changes don't change the answer. This lets
  // us avoid the problem of singleton controllers changing underneath
  // us.
  function routeModel(routeInfo) {
    if (routeInfo && !routeInfo.hasOwnProperty('_lf_model')) {
      var r = void 0,
          c = void 0;
      if ((r = routeInfo.render) && (c = r.controller)) {
        routeInfo._lf_model = _ember.default.get(c, 'model');
      } else {
        routeInfo._lf_model = null;
      }
    }

    if (routeInfo) {
      return [routeInfo._lf_model];
    } else {
      return [];
    }
  }

  function routeIsStable(oldRouteInfo, newRouteInfo) {
    if (!oldRouteInfo && !newRouteInfo) {
      return true;
    }

    if (!oldRouteInfo || !newRouteInfo) {
      return false;
    }

    return oldRouteInfo.render.template === newRouteInfo.render.template && oldRouteInfo.render.controller === newRouteInfo.render.controller;
  }

  // Only valid for states that already satisfy routeIsStable
  function modelIsStable(oldRouteInfo, newRouteInfo) {
    var oldModel = routeModel(oldRouteInfo) || [];
    var newModel = routeModel(newRouteInfo) || [];
    return oldModel[0] === newModel[0];
  }
});
define('liquid-fire/ember-internals/version-specific/index', ['exports', 'liquid-fire/templates/version-specific/get-outlet-state', 'ember'], function (exports, _getOutletState, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getOutletStateTemplate = undefined;
  exports.initialize = initialize;
  exports.containingElement = containingElement;
  Object.defineProperty(exports, 'getOutletStateTemplate', {
    enumerable: true,
    get: function () {
      return _getOutletState.default;
    }
  });
  var getViewBounds = _ember.default.ViewUtils.getViewBounds;
  function initialize() {}

  function containingElement(view) {
    return getViewBounds(view).parentElement;
  }
});
define("liquid-fire/growable", ["exports", "ember", "liquid-fire/promise", "velocity"], function (exports, _ember, _promise, _velocity) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var capitalize = _ember.default.String.capitalize; /* jshint newcap: false */
  exports.default = _ember.default.Mixin.create({
    growDuration: 250,
    growPixelsPerSecond: 200,
    growEasing: 'slide',
    shrinkDelay: 0,
    growDelay: 0,
    growWidth: true,
    growHeight: true,

    transitionMap: _ember.default.inject.service('liquid-fire-transitions'),

    animateGrowth: function animateGrowth(elt, have, want) {
      var _this = this;

      this.get('transitionMap').incrementRunningTransitions();
      var adaptations = [];

      if (this.get('growWidth')) {
        adaptations.push(this._adaptDimension(elt, 'width', have, want));
      }

      if (this.get('growHeight')) {
        adaptations.push(this._adaptDimension(elt, 'height', have, want));
      }

      return _promise.default.all(adaptations).then(function () {
        _this.get('transitionMap').decrementRunningTransitions();
      });
    },

    _adaptDimension: function _adaptDimension(elt, dimension, have, want) {
      if (have[dimension] === want[dimension]) {
        return _promise.default.resolve();
      }
      var target = {};
      target['outer' + capitalize(dimension)] = [want[dimension], have[dimension]];
      return (0, _velocity.default)(elt[0], target, {
        delay: this._delayFor(have[dimension], want[dimension]),
        duration: this._durationFor(have[dimension], want[dimension]),
        queue: false,
        easing: this.get('growEasing') || this.constructor.prototype.growEasing
      });
    },

    _delayFor: function _delayFor(before, after) {
      if (before > after) {
        return this.get('shrinkDelay') || this.constructor.prototype.shrinkDelay;
      }

      return this.get('growDelay') || this.constructor.prototype.growDelay;
    },

    _durationFor: function _durationFor(before, after) {
      return Math.min(this.get('growDuration') || this.constructor.prototype.growDuration, 1000 * Math.abs(before - after) / (this.get('growPixelsPerSecond') || this.constructor.prototype.growPixelsPerSecond));
    }

  });
});
define('liquid-fire/helpers/lf-lock-model', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, _ember, _emberInternals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lfLockModel = lfLockModel;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function lfLockModel(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        routeInfo = _ref2[0],
        outletName = _ref2[1];

    // ensures that the name is locked, see implementation of `routeModel`
    (0, _emberInternals.routeModel)((0, _emberInternals.childRoute)(routeInfo, outletName));
    return routeInfo;
  }

  exports.default = _ember.default.Helper.helper(lfLockModel);
});
define('liquid-fire/helpers/lf-or', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lfOr = lfOr;
  function lfOr(params /*, hash*/) {
    return params.reduce(function (a, b) {
      return a || b;
    }, false);
  }

  exports.default = _ember.default.Helper.helper(lfOr);
});
define("liquid-fire/index", ["exports", "liquid-fire/mixins/pausable", "liquid-fire/transition-map", "liquid-fire/animate", "liquid-fire/promise", "liquid-fire/mutation-observer", "liquid-fire/velocity-ext"], function (exports, _pausable, _transitionMap, _animate, _promise, _mutationObserver) {
         "use strict";

         Object.defineProperty(exports, "__esModule", {
                  value: true
         });
         exports.MutationObserver = exports.Promise = exports.finish = exports.timeRemaining = exports.timeSpent = exports.isAnimating = exports.stop = exports.animate = exports.TransitionMap = exports.Pausable = undefined;
         Object.defineProperty(exports, "Pausable", {
                  enumerable: true,
                  get: function () {
                           return _pausable.default;
                  }
         });
         exports.TransitionMap = _transitionMap.default;
         exports.animate = _animate.animate;
         exports.stop = _animate.stop;
         exports.isAnimating = _animate.isAnimating;
         exports.timeSpent = _animate.timeSpent;
         exports.timeRemaining = _animate.timeRemaining;
         exports.finish = _animate.finish;
         exports.Promise = _promise.default;
         exports.MutationObserver = _mutationObserver.default;
});
define('liquid-fire/is-browser', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBrowser;
  function isBrowser() {
    return typeof window !== 'undefined' && window && typeof document !== 'undefined' && document;
  }
});
define('liquid-fire/mixins/pausable', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({
    _transitionMap: _ember.default.inject.service('liquid-fire-transitions'),

    _initializeLiquidFirePauseable: _ember.default.on('init', function () {
      this._lfDefer = [];
    }),
    pauseLiquidFire: function pauseLiquidFire() {
      var context = this.nearestWithProperty('_isLiquidChild');
      if (context) {
        var defer = new _ember.default.RSVP.defer();
        var tmap = this.get('_transitionMap');
        tmap.incrementRunningTransitions();
        defer.promise.finally(function () {
          return tmap.decrementRunningTransitions();
        });
        this._lfDefer.push(defer);
        context._waitForMe(defer.promise);
      }
    },

    resumeLiquidFire: _ember.default.on('willDestroyElement', function () {
      var defer = this._lfDefer.pop();
      if (defer) {
        defer.resolve();
      }
    })
  });
});
define('liquid-fire/mutation-observer', ['exports', 'liquid-fire/is-browser'], function (exports, _isBrowser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.testingKick = testingKick;

  var activePollers = [];

  function MutationPoller(callback) {
    this.callback = callback;
  }

  MutationPoller.prototype = {
    observe: function observe() {
      this.interval = setInterval(this.callback, 100);
      activePollers.push(this);
    },
    disconnect: function disconnect() {
      clearInterval(this.interval);
      activePollers.splice(activePollers.indexOf(this), 1);
    }
  };

  var M;
  if ((0, _isBrowser.default)()) {
    M = window.MutationObserver || window.WebkitMutationObserver || MutationPoller;
  } else {
    M = MutationPoller;
  }

  exports.default = M;


  // PhantomJS does not have real mutation observers, so to get
  // reasonable test timing we have to manually kick it.
  function testingKick() {
    for (var i = 0; i < activePollers.length; i++) {
      activePollers[i].callback();
    }
  }
});
define("liquid-fire/promise", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.RSVP.Promise;
});
define("liquid-fire/rule", ["exports", "ember", "liquid-fire/action", "liquid-fire/constraint"], function (exports, _ember, _action, _constraint) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Rule = function () {
    function Rule() {
      _classCallCheck(this, Rule);

      this.constraints = _ember.default.A();
      this.use = null;
      this.reverse = null;
    }

    _createClass(Rule, [{
      key: "add",
      value: function add(thing) {
        if (thing instanceof _action.default) {
          var prop = 'use';
          if (thing.reversed) {
            prop = 'reverse';
          }
          if (this[prop]) {
            throw new Error("More than one \"" + prop + "\" statement in the same transition rule is not allowed");
          }
          this[prop] = thing;
        } else if (thing === 'debug') {
          this.debug = true;
        } else {
          this.constraints.push(thing);
        }
      }
    }, {
      key: "validate",
      value: function validate(transitionMap) {
        if (!this.use) {
          throw new Error("Every transition rule must include a \"use\" statement");
        }
        this.use.validateHandler(transitionMap);
        if (this.reverse) {
          this.reverse.validateHandler(transitionMap);
        }
        if (!this.constraints.find(function (c) {
          return c.target === 'firstTime';
        })) {
          this.constraints.push(new _constraint.default('firstTime', 'no'));
        }
      }
    }, {
      key: "invert",
      value: function invert() {
        var rule = new this.constructor();
        rule.use = this.reverse;
        rule.reverse = this.use;
        rule.constraints = this.constraints.map(function (c) {
          return c.invert();
        });
        rule.debug = this.debug;
        return rule;
      }
    }]);

    return Rule;
  }();

  exports.default = Rule;
});
define('liquid-fire/running-transition', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var RunningTransition = function () {
    function RunningTransition(transitionMap, versions, animation) {
      _classCallCheck(this, RunningTransition);

      this.transitionMap = transitionMap;
      this.animation = animation || transitionMap.lookup('default');
      this.animationContext = publicAnimationContext(this, versions);
    }

    _createClass(RunningTransition, [{
      key: 'run',
      value: function run() {
        var _this = this;

        if (this._ran) {
          return this._ran;
        }

        this.transitionMap.incrementRunningTransitions();
        return this._ran = this._invokeAnimation().catch(function (err) {
          // If the animation blew up, try to leave the DOM in a
          // non-broken state as best we can before rethrowing.
          return _this.transitionMap.lookup('default').apply(_this.animationContext).then(function () {
            throw err;
          });
        }).finally(function () {
          _this.transitionMap.decrementRunningTransitions();
        });
      }
    }, {
      key: 'interrupt',
      value: function interrupt() {
        this.interrupted = true;
        this.animationContext.oldElement = null;
        this.animationContext.newElement = null;
        this.animationContext.older.forEach(function (entry) {
          entry.element = null;
        });
      }
    }, {
      key: '_invokeAnimation',
      value: function _invokeAnimation() {
        var _this2 = this;

        return this.animation.run(this.animationContext).then(function () {
          return _this2.interrupted;
        });
      }
    }]);

    return RunningTransition;
  }();

  exports.default = RunningTransition;


  // This defines the public set of things that user's transition
  // implementations can access as `this`.
  function publicAnimationContext(rt, versions) {
    var c = {};
    addPublicVersion(c, 'new', versions[0]);
    if (versions[1]) {
      addPublicVersion(c, 'old', versions[1]);
    }
    c.older = versions.slice(2).map(function (v) {
      var context = {};
      addPublicVersion(context, null, v);
      return context;
    });

    // Animations are allowed to look each other up.
    c.lookup = function (name) {
      return rt.transitionMap.lookup(name);
    };

    return c;
  }

  function addPublicVersion(context, prefix, version) {
    var props = {
      view: version.view,
      element: version.view ? version.view.$() : null,
      value: version.value
    };
    for (var key in props) {
      var outputKey = key;
      if (props.hasOwnProperty(key)) {
        if (prefix) {
          outputKey = prefix + _ember.default.String.capitalize(key);
        }
        context[outputKey] = props[key];
      }
    }
  }
});
define("liquid-fire/tabbable", ["ember"], function (_ember) {
  "use strict";

  var $ = _ember.default.$; /*!
                             * Adapted from jQuery UI core
                             *
                             * http://jqueryui.com
                             *
                             * Copyright 2014 jQuery Foundation and other contributors
                             * Released under the MIT license.
                             * http://jquery.org/license
                             *
                             * http://api.jqueryui.com/category/ui-core/
                             */

  function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
  }

  function visible(element) {
    var $el = $(element);
    return $.expr.filters.visible(element) && !$($el, $el.parents()).filter(function () {
      return $.css(this, "visibility") === "hidden";
    }).length;
  }

  if (!$.expr[':'].tabbable) {
    $.expr[':'].tabbable = function (element) {
      var tabIndex = $.attr(element, "tabindex"),
          isTabIndexNaN = isNaN(tabIndex);
      return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
    };
  }
});
define("liquid-fire/templates/components/illiquid-model", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "rHRLqjXh", "block": "{\"statements\":[[\"yield\",\"default\",[[\"get\",[\"_fixedModel\"]]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/illiquid-model.hbs" } });
});
define("liquid-fire/templates/components/liquid-bind", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "dy8vRB/T", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"containerless\"]]],null,8,4]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"append\",[\"get\",[\"version\"]],false]],\"locals\":[]},{\"statements\":[[\"yield\",\"default\",[[\"get\",[\"version\"]]]]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[\"version\"]},{\"statements\":[[\"block\",[\"liquid-versions\"],null,[[\"value\",\"notify\",\"use\",\"rules\",\"matchContext\",\"versionEquality\",\"renderWhenFalse\"],[[\"get\",[\"value\"]],[\"get\",[\"container\"]],[\"get\",[\"use\"]],[\"get\",[\"rules\"]],[\"get\",[\"forwardMatchContext\"]],[\"get\",[\"versionEquality\"]],true]],2]],\"locals\":[\"container\"]},{\"statements\":[[\"block\",[\"liquid-container\"],null,[[\"id\",\"class\",\"growDuration\",\"growPixelsPerSecond\",\"growEasing\",\"shrinkDelay\",\"growDelay\",\"enableGrowth\"],[[\"get\",[\"containerId\"]],[\"get\",[\"class\"]],[\"get\",[\"growDuration\"]],[\"get\",[\"growPixelsPerSecond\"]],[\"get\",[\"growEasing\"]],[\"get\",[\"shrinkDelay\"]],[\"get\",[\"growDelay\"]],[\"get\",[\"enableGrowth\"]]]],3]],\"locals\":[]},{\"statements\":[[\"append\",[\"get\",[\"version\"]],false]],\"locals\":[]},{\"statements\":[[\"yield\",\"default\",[[\"get\",[\"version\"]]]]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,6,5]],\"locals\":[\"version\"]},{\"statements\":[[\"block\",[\"liquid-versions\"],null,[[\"value\",\"use\",\"rules\",\"matchContext\",\"versionEquality\",\"renderWhenFalse\",\"class\"],[[\"get\",[\"value\"]],[\"get\",[\"use\"]],[\"get\",[\"rules\"]],[\"get\",[\"forwardMatchContext\"]],[\"get\",[\"versionEquality\"]],true,[\"get\",[\"class\"]]]],7]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-bind.hbs" } });
});
define("liquid-fire/templates/components/liquid-container", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "443Wqyqz", "block": "{\"statements\":[[\"yield\",\"default\",[[\"get\",[null]]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-container.hbs" } });
});
define("liquid-fire/templates/components/liquid-if", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "bk1EGOBx", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"containerless\"]]],null,8,4]],\"locals\":[],\"named\":[],\"yields\":[\"inverse\",\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"yield\",\"inverse\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"valueVersion\"]]],null,1,0]],\"locals\":[\"valueVersion\"]},{\"statements\":[[\"block\",[\"liquid-versions\"],null,[[\"value\",\"notify\",\"matchContext\",\"use\",\"rules\",\"renderWhenFalse\"],[[\"helper\",[\"if\"],[[\"get\",[\"inverted\"]],[\"helper\",[\"if\"],[[\"get\",[\"predicate\"]],false,true],null],[\"helper\",[\"if\"],[[\"get\",[\"predicate\"]],true,false],null]],null],[\"get\",[\"container\"]],[\"helper\",[\"hash\"],null,[[\"helperName\"],[[\"get\",[\"helperName\"]]]]],[\"get\",[\"use\"]],[\"get\",[\"rules\"]],[\"has-block\",\"inverse\"]]],2]],\"locals\":[\"container\"]},{\"statements\":[[\"block\",[\"liquid-container\"],null,[[\"id\",\"class\",\"growDuration\",\"growPixelsPerSecond\",\"growEasing\",\"shrinkDelay\",\"growDelay\",\"enableGrowth\"],[[\"get\",[\"containerId\"]],[\"get\",[\"class\"]],[\"get\",[\"growDuration\"]],[\"get\",[\"growPixelsPerSecond\"]],[\"get\",[\"growEasing\"]],[\"get\",[\"shrinkDelay\"]],[\"get\",[\"growDelay\"]],[\"get\",[\"enableGrowth\"]]]],3]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"yield\",\"inverse\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"valueVersion\"]]],null,6,5]],\"locals\":[\"valueVersion\"]},{\"statements\":[[\"text\",\"\\n\"],[\"text\",\"\\n\"],[\"block\",[\"liquid-versions\"],null,[[\"value\",\"matchContext\",\"use\",\"rules\",\"renderWhenFalse\",\"class\"],[[\"helper\",[\"if\"],[[\"get\",[\"inverted\"]],[\"helper\",[\"if\"],[[\"get\",[\"predicate\"]],false,true],null],[\"helper\",[\"if\"],[[\"get\",[\"predicate\"]],true,false],null]],null],[\"helper\",[\"hash\"],null,[[\"helperName\"],[[\"get\",[\"helperName\"]]]]],[\"get\",[\"use\"]],[\"get\",[\"rules\"]],[\"has-block\",\"inverse\"],[\"get\",[\"class\"]]]],7]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-if.hbs" } });
});
define("liquid-fire/templates/components/liquid-measured", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "O7Adqngs", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-measured.hbs" } });
});
define("liquid-fire/templates/components/liquid-outlet", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "EogIXCo5", "block": "{\"statements\":[[\"block\",[\"-lf-get-outlet-state\"],null,null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"helper\",[\"outlet\"],[[\"get\",[\"outletName\"]]],null],false]],\"locals\":[]},{\"statements\":[[\"block\",[\"-with-dynamic-vars\"],null,[[\"outletState\"],[[\"get\",[\"version\"]]]],0]],\"locals\":[\"version\"]},{\"statements\":[[\"block\",[\"liquid-bind\"],[[\"helper\",[\"lf-lock-model\"],[[\"get\",[\"outletState\"]],[\"get\",[\"outletName\"]]],null]],[[\"containerId\",\"versionEquality\",\"matchContext\",\"class\",\"use\",\"rules\",\"containerless\",\"growDuration\",\"growPixelsPerSecond\",\"growEasing\",\"shrinkDelay\",\"growDelay\",\"enableGrowth\"],[[\"get\",[\"containerId\"]],[\"get\",[\"versionEquality\"]],[\"helper\",[\"hash\"],null,[[\"outletName\",\"helperName\"],[[\"get\",[\"outletName\"]],\"liquid-outlet\"]]],[\"get\",[\"class\"]],[\"get\",[\"use\"]],[\"get\",[\"rules\"]],[\"get\",[\"containerless\"]],[\"get\",[\"growDuration\"]],[\"get\",[\"growPixelsPerSecond\"]],[\"get\",[\"growEasing\"]],[\"get\",[\"shrinkDelay\"]],[\"get\",[\"growDelay\"]],[\"get\",[\"enableGrowth\"]]]],1]],\"locals\":[\"outletState\"]}],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-outlet.hbs" } });
});
define("liquid-fire/templates/components/liquid-spacer", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "0c4RW3Fn", "block": "{\"statements\":[[\"block\",[\"liquid-measured\"],null,[[\"measurements\"],[[\"get\",[\"measurements\"]]]],0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-spacer.hbs" } });
});
define("liquid-fire/templates/components/liquid-sync", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "pPWzrxFv", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"ready\"],null]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-sync.hbs" } });
});
define("liquid-fire/templates/components/liquid-versions", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "uDinmOJ4", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"versions\"]]],null,2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"yield\",\"default\",[[\"get\",[\"version\",\"value\"]]]]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-child\"],null,[[\"version\",\"liquidChildDidRender\",\"class\"],[[\"get\",[\"version\"]],\"childDidRender\",[\"get\",[\"class\"]]]],0]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"lf-or\"],[[\"get\",[\"renderWhenFalse\"]],[\"get\",[\"version\",\"value\"]]],null]],null,1]],\"locals\":[\"version\"]}],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/components/liquid-versions.hbs" } });
});
define("liquid-fire/templates/version-specific/get-outlet-state", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "JGnaQtpr", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"-get-dynamic-var\"],[\"outletState\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "liquid-fire/templates/version-specific/get-outlet-state.hbs" } });
});
define("liquid-fire/transition-map", ["exports", "liquid-fire/running-transition", "liquid-fire/dsl", "ember", "liquid-fire/action", "liquid-fire/constraints"], function (exports, _runningTransition, _dsl, _ember, _action, _constraints) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var TransitionMap = _ember.default.Service.extend({
    init: function init() {
      this._super.apply(this, arguments);

      this.activeCount = 0;
      this.constraints = new _constraints.default();
      var owner = _ember.default.getOwner(this);
      var config;
      if (owner.factoryFor) {
        var maybeConfig = owner.factoryFor('transitions:main');
        config = maybeConfig && maybeConfig.class;
      } else {
        config = owner._lookupFactory('transitions:main');
      }
      if (config) {
        this.map(config);
      }
      if (_ember.default.testing) {
        this._registerWaiter();
      }
    },
    runningTransitions: function runningTransitions() {
      return this.activeCount;
    },
    incrementRunningTransitions: function incrementRunningTransitions() {
      this.activeCount++;
    },
    decrementRunningTransitions: function decrementRunningTransitions() {
      var _this = this;

      this.activeCount--;
      _ember.default.run.next(function () {
        _this._maybeResolveIdle();
      });
    },
    waitUntilIdle: function waitUntilIdle() {
      var _this2 = this;

      if (this._waitingPromise) {
        return this._waitingPromise;
      }
      return this._waitingPromise = new _ember.default.RSVP.Promise(function (resolve) {
        _this2._resolveWaiting = resolve;
        _ember.default.run.next(function () {
          _this2._maybeResolveIdle();
        });
      });
    },
    _maybeResolveIdle: function _maybeResolveIdle() {
      if (this.activeCount === 0 && this._resolveWaiting) {
        var resolveWaiting = this._resolveWaiting;
        this._resolveWaiting = null;
        this._waitingPromise = null;
        resolveWaiting();
      }
    },
    lookup: function lookup(transitionName) {
      var owner = _ember.default.getOwner(this);
      var handler;
      if (owner.factoryFor) {
        var maybeHandler = owner.factoryFor('transition:' + transitionName);
        handler = maybeHandler && maybeHandler.class;
      } else {
        handler = owner._lookupFactory('transition:' + transitionName);
      }
      if (!handler) {
        throw new Error("unknown transition name: " + transitionName);
      }
      return handler;
    },
    defaultAction: function defaultAction() {
      if (!this._defaultAction) {
        this._defaultAction = new _action.default(this.lookup('default'));
      }
      return this._defaultAction;
    },
    constraintsFor: function constraintsFor(conditions) {
      if (conditions.rules) {
        var constraints = new _constraints.default();
        this.map(conditions.rules, constraints);
        return constraints;
      } else {
        return this.constraints;
      }
    },
    transitionFor: function transitionFor(conditions) {
      var action;
      if (conditions.use && conditions.firstTime !== 'yes') {
        action = new _action.default(conditions.use);
        action.validateHandler(this);
      } else {
        var rule = this.constraintsFor(conditions).bestMatch(conditions);
        if (rule) {
          action = rule.use;
        } else {
          action = this.defaultAction();
        }
      }
      return new _runningTransition.default(this, conditions.versions, action);
    },
    map: function map(handler, constraints) {
      if (handler) {
        handler.apply(new _dsl.default(this, constraints || this.constraints));
      }
      return this;
    },
    _registerWaiter: function _registerWaiter() {
      var self = this;
      this._waiter = function () {
        return self.runningTransitions() === 0;
      };
      _ember.default.Test.registerWaiter(this._waiter);
    },
    willDestroy: function willDestroy() {
      if (this._waiter) {
        _ember.default.Test.unregisterWaiter(this._waiter);
        this._waiter = null;
      }
    }
  });

  TransitionMap.reopenClass({
    map: function map(handler) {
      var t = TransitionMap.create();
      t.map(handler);
      return t;
    }
  });

  exports.default = TransitionMap;
});
define("liquid-fire/transitions/cross-fade", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = crossFade;
  function crossFade() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, opts), (0, _liquidFire.animate)(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }
  // END-SNIPPET
  // BEGIN-SNIPPET cross-fade-definition
});
define("liquid-fire/transitions/default", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = defaultTransition;


  // This is what we run when no animation is asked for. It just sets
  // the newly-added element to visible (because we always start them
  // out invisible so that transitions can control their initial
  // appearance).
  function defaultTransition() {
    if (this.newElement) {
      this.newElement.css({ visibility: '' });
    }
    return _liquidFire.Promise.resolve();
  }
});
define("liquid-fire/transitions/explode", ["exports", "ember", "liquid-fire"], function (exports, _ember, _liquidFire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = explode;


  // Explode is not, by itself, an animation. It exists to pull apart
  // other elements so that each of the pieces can be targeted by
  // animations.

  function explode() {
    var _this = this;

    var seenElements = {};
    var sawBackgroundPiece = false;

    for (var _len = arguments.length, pieces = Array(_len), _key = 0; _key < _len; _key++) {
      pieces[_key] = arguments[_key];
    }

    var promises = pieces.map(function (piece) {
      if (piece.matchBy) {
        return matchAndExplode(_this, piece, seenElements);
      } else if (piece.pick || piece.pickOld || piece.pickNew) {
        return explodePiece(_this, piece, seenElements);
      } else {
        sawBackgroundPiece = true;
        return runAnimation(_this, piece);
      }
    });
    if (!sawBackgroundPiece) {
      if (this.newElement) {
        this.newElement.css({ visibility: '' });
      }
      if (this.oldElement) {
        this.oldElement.css({ visibility: 'hidden' });
      }
    }
    return _liquidFire.Promise.all(promises);
  }

  function explodePiece(context, piece, seen) {
    var childContext = _ember.default.copy(context);
    var selectors = [piece.pickOld || piece.pick, piece.pickNew || piece.pick];
    var cleanupOld, cleanupNew;

    if (selectors[0] || selectors[1]) {
      cleanupOld = _explodePart(context, 'oldElement', childContext, selectors[0], seen);
      cleanupNew = _explodePart(context, 'newElement', childContext, selectors[1], seen);
      if (!cleanupOld && !cleanupNew) {
        return _liquidFire.Promise.resolve();
      }
    }

    return runAnimation(childContext, piece).finally(function () {
      if (cleanupOld) {
        cleanupOld();
      }
      if (cleanupNew) {
        cleanupNew();
      }
    });
  }

  function _explodePart(context, field, childContext, selector, seen) {
    var child, childOffset, width, height, newChild;
    var elt = context[field];

    childContext[field] = null;
    if (elt && selector) {
      child = elt.find(selector).filter(function () {
        var guid = _ember.default.guidFor(this);
        if (!seen[guid]) {
          seen[guid] = true;
          return true;
        }
      });
      if (child.length > 0) {
        childOffset = child.offset();
        width = child.outerWidth();
        height = child.outerHeight();
        newChild = child.clone();

        // Hide the original element
        child.css({ visibility: 'hidden' });

        // If the original element's parent was hidden, hide our clone
        // too.
        if (elt.css('visibility') === 'hidden') {
          newChild.css({ visibility: 'hidden' });
        }
        newChild.appendTo(elt.parent());
        newChild.outerWidth(width);
        newChild.outerHeight(height);
        var newParentOffset = newChild.offsetParent().offset();
        newChild.css({
          position: 'absolute',
          top: childOffset.top - newParentOffset.top,
          left: childOffset.left - newParentOffset.left,
          margin: 0
        });

        // Pass the clone to the next animation
        childContext[field] = newChild;
        return function cleanup() {
          newChild.remove();
          child.css({ visibility: '' });
        };
      }
    }
  }

  function animationFor(context, piece) {
    var name, args, func;
    if (!piece.use) {
      throw new Error("every argument to the 'explode' animation must include a followup animation to 'use'");
    }
    if (_ember.default.isArray(piece.use)) {
      name = piece.use[0];
      args = piece.use.slice(1);
    } else {
      name = piece.use;
      args = [];
    }
    if (typeof name === 'function') {
      func = name;
    } else {
      func = context.lookup(name);
    }
    return function () {
      return _liquidFire.Promise.resolve(func.apply(this, args));
    };
  }

  function runAnimation(context, piece) {
    return new _liquidFire.Promise(function (resolve, reject) {
      animationFor(context, piece).apply(context).then(resolve, reject);
    });
  }

  function matchAndExplode(context, piece, seen) {
    if (!context.oldElement || !context.newElement) {
      return _liquidFire.Promise.resolve();
    }

    // reduce the matchBy scope
    if (piece.pick) {
      context.oldElement = context.oldElement.find(piece.pick);
      context.newElement = context.newElement.find(piece.pick);
    }

    if (piece.pickOld) {
      context.oldElement = context.oldElement.find(piece.pickOld);
    }

    if (piece.pickNew) {
      context.newElement = context.newElement.find(piece.pickNew);
    }

    // use the fastest selector available
    var selector;

    if (piece.matchBy === 'id') {
      selector = function selector(attrValue) {
        return "#" + attrValue;
      };
    } else if (piece.matchBy === 'class') {
      selector = function selector(attrValue) {
        return "." + attrValue;
      };
    } else {
      selector = function selector(attrValue) {
        var escapedAttrValue = attrValue.replace(/'/g, "\\'");
        return "[" + piece.matchBy + "='" + escapedAttrValue + "']";
      };
    }

    var hits = _ember.default.A(context.oldElement.find("[" + piece.matchBy + "]").toArray());
    return _liquidFire.Promise.all(hits.map(function (elt) {
      var attrValue = _ember.default.$(elt).attr(piece.matchBy);

      // if there is no match for a particular item just skip it
      if (attrValue === "" || context.newElement.find(selector(attrValue)).length === 0) {
        return _liquidFire.Promise.resolve();
      }

      return explodePiece(context, {
        pick: selector(attrValue),
        use: piece.use
      }, seen);
    }));
  }
});
define('liquid-fire/transitions/fade', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = fade;
  function fade() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var firstStep;
    var outOpts = opts;
    var fadingElement = findFadingElement(this);

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = (0, _liquidFire.finish)(fadingElement, 'fade-out');
    } else {
      if ((0, _liquidFire.isAnimating)(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: (0, _liquidFire.timeSpent)(this.oldElement, 'fade-in') };
      }
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = (0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return (0, _liquidFire.animate)(_this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts, 'fade-in');
    });
  } // BEGIN-SNIPPET fade-definition


  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if ((0, _liquidFire.isAnimating)(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if ((0, _liquidFire.isAnimating)(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
  // END-SNIPPET
});
define('liquid-fire/transitions/flex-grow', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexGrow;
  function flexGrow(opts) {
    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { 'flex-grow': 0 }, opts), (0, _liquidFire.animate)(this.newElement, { 'flex-grow': [1, 0] }, opts)]);
  }
});
define('liquid-fire/transitions/fly-to', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flyTo;
  function flyTo() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.newElement) {
      return _liquidFire.Promise.resolve();
    } else if (!this.oldElement) {
      this.newElement.css({ visibility: '' });
      return _liquidFire.Promise.resolve();
    }

    var oldOffset = this.oldElement.offset();
    var newOffset = this.newElement.offset();

    if (opts.movingSide === 'new') {
      var motion = {
        translateX: [0, oldOffset.left - newOffset.left],
        translateY: [0, oldOffset.top - newOffset.top],
        outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
        outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
      };
      this.oldElement.css({ visibility: 'hidden' });
      return (0, _liquidFire.animate)(this.newElement, motion, opts);
    } else {
      var _motion = {
        translateX: newOffset.left - oldOffset.left,
        translateY: newOffset.top - oldOffset.top,
        outerWidth: this.newElement.outerWidth(),
        outerHeight: this.newElement.outerHeight()
      };
      this.newElement.css({ visibility: 'hidden' });
      return (0, _liquidFire.animate)(this.oldElement, _motion, opts).then(function () {
        _this.newElement.css({ visibility: '' });
      });
    }
  }
});
define('liquid-fire/transitions/move-over', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = moveOver;
  function moveOver(dimension, direction, opts) {
    var _this = this;

    var oldParams = {},
        newParams = {},
        firstStep,
        property,
        measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if ((0, _liquidFire.isAnimating)(this.oldElement, 'moving-in')) {
      firstStep = (0, _liquidFire.finish)(this.oldElement, 'moving-in');
    } else {
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = _liquidFire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';
      newParams[property] = ["0px", -1 * bigger * direction + 'px'];

      return _liquidFire.Promise.all([(0, _liquidFire.animate)(_this.oldElement, oldParams, opts), (0, _liquidFire.animate)(_this.newElement, newParams, opts, 'moving-in')]);
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }
});
define("liquid-fire/transitions/scale", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = scale;
  function scale() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _liquidFire.animate)(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
      return (0, _liquidFire.animate)(_this.newElement, { scale: [1, 0.2] }, opts);
    });
  }
});
define("liquid-fire/transitions/scroll-then", ["exports", "ember", "liquid-fire/is-browser"], function (exports, _ember, _isBrowser) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (nextTransitionName, options) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var _this = this;

    if ((0, _isBrowser.default)()) {
      _ember.default.assert("You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')", 'string' === typeof nextTransitionName);

      var el = document.getElementsByTagName('html');
      var nextTransition = this.lookup(nextTransitionName);
      if (!options) {
        options = {};
      }

      _ember.default.assert("The second argument to scrollThen is passed to Velocity's scroll function and must be an object", 'object' === (typeof options === "undefined" ? "undefined" : _typeof(options)));

      // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
      options = _ember.default.merge({ duration: 500, offset: 0 }, options);

      // additional args can be passed through after the scroll options object
      // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

      return window.$.Velocity(el, 'scroll', options).then(function () {
        nextTransition.apply(_this, rest);
      });
    }
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
});
define("liquid-fire/transitions/to-down", ["exports", "liquid-fire/transitions/move-over"], function (exports, _moveOver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (opts) {
    return _moveOver.default.call(this, 'y', 1, opts);
  };
});
define("liquid-fire/transitions/to-left", ["exports", "liquid-fire/transitions/move-over"], function (exports, _moveOver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (opts) {
    return _moveOver.default.call(this, 'x', -1, opts);
  };
});
define("liquid-fire/transitions/to-right", ["exports", "liquid-fire/transitions/move-over"], function (exports, _moveOver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (opts) {
    return _moveOver.default.call(this, 'x', 1, opts);
  };
});
define("liquid-fire/transitions/to-up", ["exports", "liquid-fire/transitions/move-over"], function (exports, _moveOver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (opts) {
    return _moveOver.default.call(this, 'y', -1, opts);
  };
});
define('liquid-fire/transitions/wait', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (ms) {
    var _this = this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new _ember.default.RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(_this.lookup(opts.then || 'default').call(_this));
      }, ms);
    });
  };
});
define('liquid-fire/velocity-ext', ['velocity'], function (_velocity) {
  'use strict';

  var VCSS = _velocity.default.CSS; /*
                                      This makes it possible to animate outerHeight and outerWidth with
                                      Velocity, which is much more convenient for our purposes. Submitted
                                      to Velocity as PR #485.
                                    */

  function augmentDimension(name, element) {
    var sides = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

    if (VCSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === 'border-box') {
      /* in box-sizing mode, the VCSS width / height accessors already give the outerWidth / outerHeight. */
      return 0;
    } else {
      var augment = 0;
      var fields = ['padding' + sides[0], 'padding' + sides[1], 'border' + sides[0] + 'Width', 'border' + sides[1] + 'Width'];
      for (var i = 0; i < fields.length; i++) {
        var value = parseFloat(VCSS.getPropertyValue(element, fields[i]));
        if (!isNaN(value)) {
          augment += value;
        }
      }
      return augment;
    }
  }

  function outerDimension(name) {
    return function (type, element, propertyValue) {
      switch (type) {
        case "name":
          return name;
        case "extract":
          return parseFloat(propertyValue) + augmentDimension(name, element);
        case "inject":
          return parseFloat(propertyValue) - augmentDimension(name, element) + "px";
      }
    };
  }

  VCSS.Normalizations.registered.outerWidth = outerDimension('width');
  VCSS.Normalizations.registered.outerHeight = outerDimension('height');
});//# sourceMappingURL=addons.map
