 var test = [5, 7, [4, [2], 8, [1, 3], 2],
   [9, []],
   1, 8
 ];

 var test2 = [];

 function treeSum(arr) {

   var sum = 0; //Сумме присваивается значение 0
   arr.forEach(function(v) { //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве

     if (typeof v != 'object') // Условие остановки рекурсии
       return sum += v;
     return sum += treeSum(v); // Рекурсия 
   });

   return sum; // Возврат рез-та
 }
 console.log(treeSum(test)); // Вывод суммы элементов тестового массива в консоль
 console.log(treeSum(test2));