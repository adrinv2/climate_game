
var loopDuration = 1;
var loopStart = 0;
var loopEnd = loopStart + loopDuration;
var vidElem = document.getElementById('video1');

  function skipTime(time) {
     vidElem.play();
     vidElem.pause();
     vidElem.currentTime = time;
     vidElem.play();
  };

function shiftVideo(amount) {
    loopEnd += amount;
    if (loopEnd > vidElem.duration) {
        loopEnd = vidElem.duration;
    }
    if (loopEnd < loopDuration) {
        loopEnd = loopDuration;
    }
    loopStart = loopEnd - loopDuration;
    console.log(amount, loopStart, loopEnd, loopDuration);
}

(function() {
    setInterval(function() {
        var now = vidElem.currentTime;
        if (now > loopEnd) {
            vidElem.currentTime = loopStart;
            vidElem.play();
        }
    }, 10);

    $('.answer').on("click", function(e) {
        shiftVideo(parseFloat($(e.currentTarget).attr("data-value")));
    });
})();
