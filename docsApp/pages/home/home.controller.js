angular
  .module('testApp')
  .controller('HomeController', HomeController);


function HomeController($scope) {
  var vm = this;
  var masterPanel = angular.element(document.body.querySelector('.master-panel'));
  vm.selectedItems = [];

  $scope.$watch(function () { return vm.selectedItems; }, function (value) {
    masterPanel.toggleClass('closed', !value.length);
  }, true);


  vm.locationData2 = [
    {
      id: 1,
      name: 'Location One',
      menus: [
        {
          id: 1,
          name: 'Menu One',
          items: [
            {
              id: 1,
              name: 'Item One',
              reporting_group: 'Reporting Test One'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Location Two',
      menus: [
        {
          id: 2,
          name: 'Menu Two',
          items: [
            {
              id: 2,
              name: 'Item Two'
            }
          ]
        }
      ]
    }
  ];

  vm.locationData = [
    {
      id: 1,
      name: 'Smashburger texas Austin north',
      menus: [
        {
          id: 1,
          name: 'menu One',
          items: [
            {
              id: 1,
              name: 'Item One',
              price: '12.00'
            },
            {
              id: 2,
              name: 'Item two',
              price: '12.00'
            },
            {
              id: 3,
              name: 'Item Three',
              price: '12.00'
            }
          ]
        },
        {
          id: 1,
          name: 'menu Two',
          items: [
            {
              id: 1,
              name: 'Item One',
              price: '12.00'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Smashburger texas Austin south'
    },
    {
      id: 3,
      name: 'Smashburger texas San marcos',
      menus: [
        {
          id: 1,
          name: 'menu One',
          items: [
            {
              id: 1,
              name: 'Item One',
              price: '12.00'
            },
            {
              id: 2,
              name: 'Item two',
              price: '12.00'
            },
            {
              id: 3,
              name: 'Item Three',
              price: '12.00'
            }
          ]
        },
        {
          id: 1,
          name: 'menu Two',
          items: [
            {
              id: 1,
              name: 'Item One',
              price: '12.00'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'one',
      menus: [
        {
          id: 1,
          name: 'menu One',
          items: [
            {
              id: 1,
              name: 'Item One',
              price: '12.00'
            },
            {
              id: 2,
              name: 'Item two',
              price: '12.00'
            },
            {
              id: 3,
              name: 'Item Three',
              price: '12.00'
            },
            {
              id: 4,
              name: 'Item Four',
              price: '12.00'
            },
            {
              id: 5,
              name: 'Item Five',
              price: '12.00'
            },
            {
              id: 6,
              name: 'Item Six',
              price: '12.00'
            }
          ]
        },
        {
          id: 2,
          name: 'menu Two'
        },
        {
          id: 3,
          name: 'menu Three'
        }
      ]
    }
  ];
}
