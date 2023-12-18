'use strict'
var startGameInterval
var timerInterval
var currTime

function onInit()
{
    $('.btn-startGame').on('click',onStartGame)
}

function onStartGame()
{
    clearInterval(startGameInterval)
    clearInterval(timerInterval)
    onDisableClicks()
    currTime = 0
    onClickItem()
    initializeNumberMatrix()
    var timer = 3
    startGameInterval = setInterval(function()
    {   
        if(timer === 0)
        {
            $('h2').text('Game Start!')
            onRenderMatrix()
            startTimer()
            clearInterval(startGameInterval)
        }
        else if(timer > 0)
        {
            $('h2').text(timer--)
        }
    },1000)
}

function onRenderMatrix()
{
    $('.grid-item').each(function(index)
    {
        $(this).text(getMatrixElement(parseInt(index/MATRIX_SIZE),index%MATRIX_SIZE))
        $(this).on('click',function()
        {
            itemClicked(parseInt(index/MATRIX_SIZE),index%MATRIX_SIZE)
        })
        let flag = getMatrixElementFlag(parseInt(index/MATRIX_SIZE),index%MATRIX_SIZE)
        if(flag)
        {
            $(this).css("background-color", "chartreuse");
        }
        else
        {
            $(this).css("background-color", "burlywood");
        }
    })
}

function onClickItem()
{
    $('.grid-item').each(function(index)
    {
        $(this).on('click',function()
        {
            itemClicked(parseInt(index/MATRIX_SIZE),index%MATRIX_SIZE)
        })
    })
}

function onDisableClicks()
{
    $('.grid-item').each(function(index)
    {
        $(this).off('click');
    })
}

function startTimer()
{
    timerInterval = setInterval(function(){
        if(gameFlag === true)
            onGameEnd()
        currTime += 0.1
        $('.stats').text(`Next number: ${currNum} | Time: ${parseInt(currTime,10)}`)
    },100)
}

function onGameEnd()
{
    clearInterval(startGameInterval)
    clearInterval(timerInterval)
    onDisableClicks()
    alert(`Congratulations you've won the game! your time: ${parseInt(currTime,10)} seconds`)
}