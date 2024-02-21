var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'https://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'https://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion',
    },
    {
        name : 'Volvo',
        image : 'img/volvo.jpg',
        link : 'https://www.arabalar.com.tr/volvo/xc40/2023/1-5-t2-plus',
    },
    {
        name : 'Skoda',
        image : 'img/skoda.jpg',
        link : 'https://www.arabalar.com.tr/skoda/superb/2023/1-5-tsi-crystal-dsg',
    },
    {
        name : 'Honda',
        image : 'img/honda.jpg',
        link : 'https://www.arabalar.com.tr/honda/city',
    },
    
]

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '1000',
    random :false
}
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){

    index--;
    showSlide(index);
    console.log(index);

})
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter',function() {
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function() {
        init(settings);
    })
})

function init(settings) {

    var prev;

    //setTimeout // 2 saniye sonra başlatılacak fonksiyonu belirityo
    interval = setInterval(function() {

        if(settings.random) {
            //random
            do {
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else {
            //artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration) // clearinterval ile durdurmadığınz sürece tekrar eder


}

function showSlide(i) {
    
    index = i;

    if(i<0) {
        index = slaytCount -1;
    }
    if(i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);

}

