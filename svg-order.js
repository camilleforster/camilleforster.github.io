d3.selectAll("#emotions g").on("mouseover", function(){
	d3.select(this).raise()
    var testElement = document.querySelectorAll("#emotions g");
    [].forEach.call(testElement, function(test) {
        if(test.classList.contains('wasClicked')) {
            d3.select(test).raise()
        }
    });
});

$("#emotions g").on('click', function testing() {
    var testElement = document.querySelectorAll("#emotions g");
    var count = 0;
    [].forEach.call(testElement, function(test) {
        if(test.classList.contains('wasClicked')) {
            count++;
        }
    });
    if(count <=4 && (this).classList.contains('wasClicked')) {
        $(this).removeClass('wasClicked');
        $(this).css({'fill': 'auto'})
    } else if (count < 4) {
        d3.select(this).raise()
        $(this).addClass('wasClicked');
        $(this).css({'fill': 'freeze'})
    }
});

var index = 0;
const colors = ['gray', 'white'];
document.body.addEventListener('click', function (evt) {
    if(evt.target.className === 'button') {
        evt.target.style.color = colors[index];
        if(evt.target.id === 'sarcasm') {
            $('#emotions g#loathing')[0].dispatchEvent(new Event('click'));
            $('#emotions g#admiration')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'irony') {
            $('#emotions g#vigilance')[0].dispatchEvent(new Event('click'));
            $('#emotions g#amazement')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'defensive') {
            $('#emotions g#rage')[0].dispatchEvent(new Event('click'));
            $('#emotions g#terror')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'sadistic') {
            $('#emotions g#grief')[0].dispatchEvent(new Event('click'));
            $('#emotions g#ecstasy')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'bittersweet') {
            $('#emotions g#grief')[0].dispatchEvent(new Event('click'));
            $('#emotions g#ecstasy')[0].dispatchEvent(new Event('click'));
            $('#emotions g#joy')[0].dispatchEvent(new Event('click'));
            $('#emotions g#sadness')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'fury') {
            $('#emotions g#rage')[0].dispatchEvent(new Event('click'));
            $('#emotions g#terror')[0].dispatchEvent(new Event('click'));
            $('#emotions g#fear')[0].dispatchEvent(new Event('click'));
            $('#emotions g#anger')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'stunned') {
            $('#emotions g#vigilance')[0].dispatchEvent(new Event('click'));
            $('#emotions g#amazement')[0].dispatchEvent(new Event('click'));
            $('#emotions g#anticipation')[0].dispatchEvent(new Event('click'));
            $('#emotions g#surprise')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'derisive') {
            $('#emotions g#disgust')[0].dispatchEvent(new Event('click'));
            $('#emotions g#loathing')[0].dispatchEvent(new Event('click'));
            $('#emotions g#admiration')[0].dispatchEvent(new Event('click'));
            $('#emotions g#trust')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'remorse') {
            $('#emotions g#loathing')[0].dispatchEvent(new Event('click'));
            $('#emotions g#grief')[0].dispatchEvent(new Event('click'));
            $('#emotions g#disgust')[0].dispatchEvent(new Event('click'));
            $('#emotions g#sadness')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'contempt') {
            $('#emotions g#loathing')[0].dispatchEvent(new Event('click'));
            $('#emotions g#disgust')[0].dispatchEvent(new Event('click'));
            $('#emotions g#anger')[0].dispatchEvent(new Event('click'));
            $('#emotions g#rage')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'aggressiveness') {
            $('#emotions g#rage')[0].dispatchEvent(new Event('click'));
            $('#emotions g#anger')[0].dispatchEvent(new Event('click'));
            $('#emotions g#vigilance')[0].dispatchEvent(new Event('click'));
            $('#emotions g#anticipation')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'optimism') {
            $('#emotions g#vigilance')[0].dispatchEvent(new Event('click'));
            $('#emotions g#ecstasy')[0].dispatchEvent(new Event('click'));
            $('#emotions g#anticipation')[0].dispatchEvent(new Event('click'));
            $('#emotions g#joy')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'love') {
            $('#emotions g#ecstasy')[0].dispatchEvent(new Event('click'));
            $('#emotions g#joy')[0].dispatchEvent(new Event('click'));
            $('#emotions g#admiration')[0].dispatchEvent(new Event('click'));
            $('#emotions g#trust')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'submission') {
            $('#emotions g#admiration')[0].dispatchEvent(new Event('click'));
            $('#emotions g#terror')[0].dispatchEvent(new Event('click'));
            $('#emotions g#trust')[0].dispatchEvent(new Event('click'));
            $('#emotions g#fear')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'awe') {
            $('#emotions g#terror')[0].dispatchEvent(new Event('click'));
            $('#emotions g#fear')[0].dispatchEvent(new Event('click'));
            $('#emotions g#amazement')[0].dispatchEvent(new Event('click'));
            $('#emotions g#surprise')[0].dispatchEvent(new Event('click'));
        }
        if(evt.target.id === 'disapproval') {
            $('#emotions g#amazement')[0].dispatchEvent(new Event('click'));
            $('#emotions g#surprise')[0].dispatchEvent(new Event('click'));
            $('#emotions g#grief')[0].dispatchEvent(new Event('click'));
            $('#emotions g#sadness')[0].dispatchEvent(new Event('click'));
        }
        index = index >= colors.length - 1 ? 0 : index + 1;
    }
}, false);