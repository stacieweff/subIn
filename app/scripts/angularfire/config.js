angular.module('firebase.config', [])
  .constant('FBURL', 'https://subin-ae168.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');
