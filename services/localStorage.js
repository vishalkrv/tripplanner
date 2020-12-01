const LocalStorageService = (function() {
    var _service;
    function _getService() {
      if (!_service) {
        _service = this;
        return _service;
      }
      return _service;
    }
    function _setToken(tokenObj) {
      localStorage.setItem("accessToken", tokenObj.accessToken);
      localStorage.setItem("username", tokenObj.username);
    }
    function _setAccessToken(tokenObj) {
      localStorage.setItem("accessToken", tokenObj.accessToken);
    }
  
    function _getAccessToken() {
      return localStorage.getItem("accessToken");
    }
    function _getUserName() {
      return localStorage.getItem("username");
    }
    function _clearToken() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
    }
    return {
      getService: _getService,
      setToken: _setToken,
      setAccessToken:_setAccessToken,
      getAccessToken: _getAccessToken,
      getUserName: _getUserName,
      clearToken: _clearToken
    };
  })();
  export default LocalStorageService;
  