"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var export_class_Challenge_js_1 = require("D:/\u0422\u0420\u041F\u0418/\u041B\u0430\u0431\u044B/Lab_1/export class Challenge.js");
function createPhoneNumber(args) {
    var numberPhone = "";
    for (var index = 0; index < 10; index++) {
        if (args[index] == null)
            args[index] = 0;
        if (index == 0)
            numberPhone += "(";
        numberPhone += args[index];
        if (index == 2)
            numberPhone += ") ";
        if (index == 5)
            numberPhone += "-";
    }
    return numberPhone;
}
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(num));
//-------2
console.log(export_class_Challenge_js_1.Challenge.solution(10));
//-------3
function turnArray(array, numberTurn) {
    try {
        if (numberTurn < 0)
            throw new Error("Отрицательное число поворота");
        numberTurn = numberTurn % (array.length);
        for (var i = 0; i < numberTurn; i++) {
            console.log("---------------" + i);
            var endNum = array[array.length - 1];
            for (var j = array.length; j > 0; j--) {
                array[j] = array[j - 1];
            }
            array[0] = endNum;
            array.pop();
            // let n = array.pop();
            // if(typeof n === 'number'){
            //     array.unshift(n);
            // }
            // else {
            //     throw new Error("Что-то не получилось(");
            // }
        }
    }
    catch (e) {
        console.log("Случилось что-то плохое, а именно:\n" + e);
        return;
    }
    console.log(array);
    return;
}
turnArray([1, 2, 3, 4, 5, 6, 7], 6);
//-----4
function median(arr1, arr2) {
    var commonArr = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    commonArr.sort(function (a, b) { return a - b; });
    console.log('-----------------');
    console.log(commonArr);
    if (commonArr.length % 2 == 0) {
        return (commonArr[Math.floor(commonArr.length / 2)] + commonArr[Math.floor(commonArr.length / 2 - 1)]) / 2;
    }
    else {
        return commonArr[Math.floor(commonArr.length / 2)];
    }
}
console.log(median([1, 5, 2, 7], [12, 3, 9, 10]));
function sudoku(matrix) {
    //let str_ok = false;
    //let col_ok = false;
    //let square_ok = false;
    var id = 10;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "") {
                matrix[i][j] = String(id);
                id += 1;
            }
        }
    }
    //проверка по строкам
    for (var i = 0; i < matrix.length; i++) {
        var set = new Set(matrix[i]);
        if (matrix[i].length != set.size) {
            return false;
        }
    }
    //проверка по столбцам
    for (var i = 0; i < matrix.length; i++) {
        var set = new Set();
        var col = new Array;
        for (var j = 0; j < matrix[i].length; j++) {
            set.add(matrix[i][j]);
            col.push(matrix[i][j]);
        }
        if (col.length != set.size) {
            return false;
        }
    }
    //проверка по квадратам
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var set = new Set();
            set.add(matrix[i * 3][j * 3]);
            set.add(matrix[i * 3][j * 3 + 1]);
            set.add(matrix[i * 3][j * 3 + 2]);
            set.add(matrix[i * 3 + 1][j * 3]);
            set.add(matrix[i * 3 + 1][j * 3 + 1]);
            set.add(matrix[i * 3 + 1][j * 3 + 2]);
            set.add(matrix[i * 3 + 2][j * 3]);
            set.add(matrix[i * 3 + 2][j * 3 + 1]);
            set.add(matrix[i * 3 + 2][j * 3 + 2]);
            console.log(matrix[i * 3][j * 3] + " " + matrix[i * 3][j * 3 + 1] + " " + matrix[i * 3][j * 3 + 2]);
            console.log(matrix[i * 3 + 1][j * 3] + " " + matrix[i * 3 + 1][j * 3 + 1] + " " + matrix[i * 3 + 1][j * 3 + 2]);
            console.log(matrix[i * 3 + 2][j * 3] + " " + matrix[i * 3 + 2][j * 3 + 1] + " " + matrix[i * 3 + 2][j * 3 + 2]);
            if (set.size != 9) {
                return false;
            }
        }
    }
    return true;
}
var matrix = [
    ["5", "3", "", "", "7", "", "", "", "",],
    ["6", "", "", "1", "9", "5", "", "", "",],
    ["", "9", "8", "", "", "", "", "6", "",],
    ["8", "", "", "", "6", "", "", "", "3",],
    ["4", "", "", "8", "", "3", "", "", "1",],
    ["7", "", "", "", "2", "", "", "", "6",],
    ["", "6", "", "", "", "", "2", "8", "",],
    ["", "", "", "4", "1", "9", "", "", "5",],
    ["", "", "", "", "8", "", "", "7", "9",]
];
console.log(sudoku(matrix));
