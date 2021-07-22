<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

</head>
<body>
    <button class="button_1">Все</button>
    <button>4 WD</button>
    <button>6 первых</button>
    <input type="text">
    <button>тип</button>
<?php


   function db_load($param) {
       require_once '__db_load.php';
//require_once 'connection.php'; // подключаем скрипт


/*$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link)); 
$link->set_charset('utf8');*/

//

//

 //SELECT * FROM cars LIMIT 6
if ($param != '6') {
    $query ="SELECT * FROM cars";
    }
    else {
    $query ="SELECT * FROM cars LIMIT 6";
    }
    
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 


//echo json_encode( $result );
/*$alias = $_GET[name];
echo $alias;*/

if($result)
{
    $rows = mysqli_num_rows($result); // количество полученных строк
    echo "<style>th {border: 1px solid black; background-color: gray; color: white;} td {border: 1px solid gray;} td img {height:50px; width: 65px; object-fit: scale-down;}</style>";
    echo "<table id='content'><tr><th>Id 0</th><th>Машина 1</th><th>Год 2</th><th>Тип кузова 3</th><th>Привод 4</th><th>Топливо 5</th><th>Цена месяц 6</th><th>Цена неделя 7</th><th>Цена 3 дня 8</th><th>Объем д. 9</th><th>Цвет 10</th><th>Места 11</th><th>Трансмиссия 12</th><th>Багажник 13</th><th>Расход 14</th><th>Выкуп 15</th><th>Новинка 16</th><th>Залог 17</th><th>Минимум аренды 18</th><th>О. фото 19</th><th>Доп фото 1 20</th><th>Доп фото 2 21</th><th>Доп фото 3 22</th><th>Доп фото 4 23</th><th>Доп фото 5 24</th></tr>";
    for ($i = 0 ; $i < $rows ; ++$i)
    {
        $row = mysqli_fetch_row($result);
        echo '<tr>';
            for ($j = 0 ; $j < 25 ; ++$j) {
                if (strpos($row[$j], 'img/') !== false)
                    echo '<td> <img src="'.$row[$j].'"/></td>';
                else
                    echo '<td>'.$row[$j].'</td>';
            //if ($row[$j]) == 'img/catalog/c_hr/ch-r1.jpg'
                
            }
        echo "</tr>";
    }
    echo "</table>";
     
    // очищаем результат
    mysqli_free_result($result);
}
 
mysqli_close($link);
}
db_load('all');
?>

</body>

</html>