angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('FormsCtrl', function($scope){

})
.controller('InspectionsCtrl', function($scope){
  $scope.inspections = [
    {jobName: 'Dugan Chimney', id:1, address: '2468 Hunting Valley Dr. Decatur GA,30033'},
    {jobName: 'Boyd Roof', id:2, address: 'Somewhere near the lake'},
    {jobName: 'Cotter oven', id:3, address: '2481 Cotter Way'}
  ];
})
.controller('LinksCtrl', function($scope){

})
.controller('CalculatorsCtrl', function($scope, $stateParams){
  $scope.calculators = [
    {name: 'Fireplace Liner Calculator', id: 1, imgUrl: ''},
    {name: 'Gas Venting Charts', id: 2, imgUrl: ''},
    {name: 'Oil Venting Charts', id: 3, imgUrl: ''},
    {name: 'Themix Calculator', id: 4, imgUrl: ''},
    {name: 'Heat Shield Calculator', id: 5, imgUrl: ''},
    {name: 'Enervex (Exhasuto) Fan Sizing', id: 6, imgUrl: ''}
  ];
})

.controller('CalculatorCtrl', function($scope, $stateParams) {

});