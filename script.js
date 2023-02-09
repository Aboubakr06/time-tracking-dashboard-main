let periods = ['.daily', '.weekly', '.monthly'];
let categories = [
  { current: '.work-current', last: '.work-last' },
  { current: '.play-current', last: '.play-last' },
  { current: '.study-current', last: '.study-last' },
  { current: '.exercise-current', last: '.exercise-last' },
  { current: '.social-current', last: '.social-last' },
  { current: '.care-current', last: '.care-last' }];

let currentPeriod;
let values = {
  daily: [
    { current: 5, last: 'Day - 7' },
    { current: 1, last: 'Day - 2' },
    { current: 0, last: 'Day - 1' },
    { current: 1, last: 'Day - 1' },
    { current: 1, last: 'Day - 3' },
    { current: 0, last: 'Day - 1' }
  ],
  weekly: [
    { current: 32, last: 'Week - 36' },
    { current: 10, last: 'Week - 8' },
    { current: 4, last: 'Week - 7' },
    { current: 4, last: 'Week - 5' },
    { current: 5, last: 'Week - 10' },
    { current: 2, last: 'Week - 2' }
  ],
  monthly: [
    { current: 103, last: 'Month - 128' },
    { current: 23, last: 'Month - 29' },
    { current: 13, last: 'Month - 19' },
    { current: 11, last: 'Month - 18' },
    { current: 21, last: 'Month - 23' },
    { current: 7, last: 'Month - 11' }
  ]
};

periods.forEach(function (period) {
  document.querySelector(period).addEventListener('click', function () {
    currentPeriod = period.substr(1);

    periods.forEach(function (p) {
      document.querySelector(p).classList.remove('text-white');
    });
    document.querySelector(period).classList.add('text-white');

    categories.forEach(function (category, index) {
      document.querySelector(category.current).innerHTML = values[currentPeriod][index].current;
      document.querySelector(category.last).innerHTML = values[currentPeriod][index].last;
    });
  });
});
