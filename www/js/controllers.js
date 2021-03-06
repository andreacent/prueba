angular.module('starter.controllers', [])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HomeCtrl', function() {
})

.controller('CollectionCtrl', function($scope, Collections, $state, Markers) {
  console.log(Markers.getMarkers()); //aqui estoy tratando de obtener el json del servidor
  $scope.collections = Collections.all();
  console.log($scope.collections);
})

.controller('CollectionDetailCtrl', function($scope, $stateParams, Collections) {
  $scope.collection = Collections.get($stateParams.collectionId);
  $scope.products   = $scope.collection.products;
  console.log($scope.productos);
})

.controller('ProductCtrl', function($scope, $stateParams, $ionicModal, Collections) {
  $scope.collection = Collections.get($stateParams.collectionId);
  $scope.product    = Collections.get_product($scope.collection,$stateParams.productId);
  console.log($scope.products);

  $ionicModal.fromTemplateUrl('templates/forms.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(){
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  };
});
