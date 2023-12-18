'use strict'

const MATRIX_SIZE = 8
var currNum
var numberMatrix = []
var gameFlag = false

function initializeNumberMatrix()
{
    currNum = 1
    if(numberMatrix.length === 0)
    {
        for (let i = 0; i < MATRIX_SIZE; i++)
        {
            numberMatrix[i] = []
        }
    }

    for (let i = 0, count = 1; i < MATRIX_SIZE; i++) 
    {
        for (let ii = 0; ii < MATRIX_SIZE; ii++) 
        {
            numberMatrix[i][ii] = 
            {
                num: count++,
                flag: false
            }
        }
    }

    shuffleNumMatrix()
    console.log(numberMatrix)
}

function getMatrixElement(row,col)
{
    return numberMatrix[row][col].num
}

function getMatrixElementFlag(row,col)
{
    return numberMatrix[row][col].flag
}

function generateRandomNumInRange(low,high)
{
    return (parseInt(Math.random()*100000,10)%8)
}

function shuffleNumMatrix()
{
    for (let i = 0; i < MATRIX_SIZE; i++) 
    {
        for (let ii = 0; ii < MATRIX_SIZE; ii++) 
        {
            let row = generateRandomNumInRange(0,8)
            let col = generateRandomNumInRange(0,8)
            let temp = numberMatrix[row][col]
            numberMatrix[row][col] = numberMatrix[i][ii]
            numberMatrix[i][ii] = temp
        }
    }
}

function itemClicked(row,col)
{
    if(currNum === numberMatrix[row][col].num)
    {
        numberMatrix[row][col].flag = true
        currNum++
        onRenderMatrix()
    }
    if(currNum === 11)
    {
        gameFlag = true
    }
}