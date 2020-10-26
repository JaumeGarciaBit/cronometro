class Chronometer 
{
    constructor() 
    {
        this.currentTime=0;
        this.intervalId=0;

    }

    startClick() 
    {
        this.intervalId = setInterval(()=>
        {
            this.currentTime+=10;
            this.setTime();
            console.log(this.minutes+':'+this.seconds+':'+this.mil);
            printTime(this.minutes,this.seconds, this.mil);
        },10)
    }

    setMinutes() 
    {
        return Math.floor((this.currentTime/60000)%60);
    }

    setSeconds() 
    {
        let l_result =Math.floor((this.currentTime/1000)%60);
        return l_result;
    }

    twoDigitsNumber(number) 
    {
        return '0'.concat(number.toString()).slice(-2);
    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes());
        this.seconds = this.twoDigitsNumber(this.setSeconds());
        this.mil = this.twoDigitsNumber(this.setMilliseconds());
    }

    setMilliseconds() 
    {
        return Math.floor(this.currentTime/10);
    }

    stopClick() 
    {
        clearInterval(this.intervalId);
    }

    resetClick() 
    {
        this.currentTime=0;
    }

    splitClick() 
    {
        let l_result = this.minutes + ":" + this.seconds + ":" + this.mil;
        return l_result;
    }
}
