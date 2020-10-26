let m_chronometer = new Chronometer();
let m_leftBtn     = document.getElementById('btnLeft');
let m_rightBtn    = document.getElementById('btnRight');
let m_minDec      = document.getElementById('minDec');
let m_minUni      = document.getElementById('minUni');
let m_secDec      = document.getElementById('secDec');
let m_secUni      = document.getElementById('secUni');
let m_milDec      = document.getElementById('milDec');
let m_milUni      = document.getElementById('milUni');

let m_splitList   = document.getElementById("splits");

function printTime(minutes,seconds, mil) 
{
    if(minutes>0)
        this.printMinutes(minutes);

    this.printSeconds(seconds);
    this.printMilliseconds(mil);
}

function printMinutes(minutes) 
{
    m_minDec.innerHTML = minutes[0];
    m_minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) 
{
    m_secDec.innerHTML = seconds[0];
    m_secUni.innerHTML = seconds[1];

}

function printMilliseconds(mil) 
{
    m_milDec.innerHTML = mil[0];
    m_milUni.innerHTML = mil[1];
}

function printSplit() 
{
    const l_li = document.createElement("li");
    const l_text = document.createTextNode(m_chronometer.splitClick());
    l_li.appendChild(l_text);
    m_splitList.appendChild(l_li);
}

function clearSplits() 
{
    m_splitList.innerHTML ="";
}

function setStopBtn() 
{
    m_leftBtn.innerHTML = m_currentCounting? 'STOP' : 'START';
    m_leftBtn.className = m_currentCounting? 'btn stop' : 'btn start';
}

function setSplitBtn() 
{
    m_rightBtn.innerHTML = m_currentCounting? 'SPLIT' : 'RESET';
    m_rightBtn.className = m_currentCounting? 'btn split' : 'btn reset';
}

///Start Exercice
let m_currentCounting = false;

const onStartButton = ()=>
{

    m_chronometer.startClick();
    m_currentCounting=true;
    setStopBtn();
    setSplitBtn();

    m_leftBtn.onclick = onStopButton;
    m_rightBtn.onclick = onSplitButton;
}
const onStopButton = () =>
{
    clearInterval(m_chronometer.intervalId);
    m_currentCounting=false;
    setStopBtn();
    setSplitBtn();

    m_leftBtn.onclick = onStartButton;
    m_rightBtn.onclick = onResetButton;
}
const onResetButton = () =>
{

    m_chronometer.resetClick();
    m_chronometer.setTime(m_chronometer.minutes,m_chronometer.seconds,m_chronometer.mil);
    printTime(m_chronometer.minutes, m_chronometer.seconds, m_chronometer.mil);
    clearSplits();
}

const onSplitButton = () =>
{
    printSplit();
}

m_rightBtn.onclick = onResetButton;
m_leftBtn.onclick = onStartButton;
