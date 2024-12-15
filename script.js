const container = document.getElementById("container");
const timeEl = document.getElementById("timeEl");

const appendItem = (item) => {
  const domElement = `<div style="background-color: var(--primary-${item.dataTitle}); background-image: url('/images/icon-${item.dataTitle}.svg');" class="rounded-2xl pt-12 bg-no-repeat bg-[right_1rem_top]">
  <div class="grid gap-4 rounded-2xl p-8 bg-[var(--neutral-blue)] cursor-pointer hover:bg-[var(--neutral-blue-hover)]">
    <div class="flex items-center justify-between">
      <h2 class="font-medium">${item.title}</h2>
      <img src="images/icon-ellipsis.svg" alt="" aria-hidden="true">
    </div>
    <div class="flex items-center gap-4 justify-between lg:grid">

      <p class="font-light text-xl lg:text-6xl"><span>${item.timeframe.current}</span>hrs</p>
      <p class="text-[var(--neutral-light-violet)] lg:text-base">Last <span>${item.timeframe.previous}</span>hrs</p>

    </div>
  </div>
</div>`;

    container.innerHTML += domElement;
}

const populate = (data) => {
  container.innerHTML = "";
  data.map(item => {
    appendItem(item);
  })
}

const changePeriod = (idElements, data) => {
  const periodEls = document.querySelectorAll(idElements);
  periodEls.forEach(periodEl => {
    periodEl.addEventListener('click', () =>{
      periodEls.forEach(periodEl => {periodEl.classList.remove('text-white');});
      periodEl.classList.add('text-white');
      const timePeriod = periodEl.textContent;
      console.log(timePeriod);
      populate(filterData(data, timePeriod.toLowerCase()));
    })
  });  
}

const timesPeriod = (keys) => {
  for (let keyEl of keys){
    const domElement = `<a class="cursor-pointer hover:text-white" id="period">${keyEl}</a>`
    timeEl.innerHTML += domElement;
  }

  const periodEls = document.querySelectorAll("#period");
  periodEls[1].classList.add("text-white");
}

const filterData = (data, timePeriod) =>{
  return data.map(item => {
    let periodEl = item.timeframes[timePeriod];
    return {...item, timeframe: periodEl};
  })
}

fetch('./data.json').then((response) => {
  if(!response.ok) return console.log('Oops! Something went wrong.');

  return response.json();
}).then((data) => {
  // handle the data

  timesPeriod(Object.keys(data[0].timeframes));

  populate(filterData(data, "weekly"));

  changePeriod("#period", data);
});

