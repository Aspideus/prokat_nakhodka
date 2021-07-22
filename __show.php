<?php
include "__db_load.php"; //Подключаем БД
//делаем запрос на товары этой категории

$name = $_POST['message']; //echo $name;

    if ($name == 'all_cars')
    $query = "SELECT * FROM cars";
elseif ($name == 'not_all') 
    $query = "SELECT * FROM cars LIMIT 6";
elseif ($name == '4 WD')
    $query = "SELECT * FROM cars WHERE drive_unit = '4 WD'";
elseif ($name == 'гибрид')
    $query = "SELECT * FROM cars WHERE fuel = 'гибрид'";
else
    $query = "SELECT * FROM cars WHERE body_type = '$name'";
    
    // 
    //  //хэтчбэк кроссовер универсал минивэн грузовой
    // 

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

//$result = mysql_query($query) or die(mysql_error());
// выводим товары полученные по запросу
/*while ($row=mysql_fetch_array($result))
{
print $row['Name']."<br>";
}*/

//////$load = db_load(x);

    $rows = mysqli_num_rows($result); // количество полученных строк
    
    /*echo "<style>th {border: 1px solid black; background-color: gray; color: white;} td {border: 1px solid gray;} td img {height:50px; width: 65px; object-fit: scale-down;}</style>";
    echo "<table id='content'><tr><th>Id</th><th>Машина</th><th>Год</th><th>Тип кузова</th><th>Привод</th><th>Топливо</th><th>Цена месяц</th><th>Цена неделя</th><th>Цена 3 дня</th><th>Объем д.</th><th>Цвет</th><th>Места</th><th>Трансмиссия</th><th>Багажник</th><th>Расход</th><th>Выкуп</th><th>Новинка</th><th>Залог</th><th>Минимум аренды</th><th>О. фото</th><th>Доп фото 1</th><th>Доп фото 2</th><th>Доп фото 3</th><th>Доп фото 4</th><th>Доп фото 5</th></tr>";
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
    echo "</table>"; */
    
    echo '
            <button class="mobile_filter" onclick="document.querySelector(\'.auto_choice\').classList.toggle(\'grid_display\');">
                Фильтр
            </button>
            <div class="auto_choice">';
             if (($name != 'all_cars') && ($name != 'not_all')) 
                echo '<button style="width: 113px;" onclick="load_db(\'not_all\')"> Все </button>';
            echo '
                <button style="width: 113px;" class="sedan" onclick="load_db(\'седан\'); ActivizeButton(\'.sedan\');"> Седан </button>
                <button style="width: 120px;" class="hatchback" onclick="load_db(\'хэтчбэк\'); ActivizeButton(\'.hatchback\');"> Хэтчбэк </button>
                <button style="width: 150px;" class="universal" onclick="load_db(\'универсал\'); ActivizeButton(\'.universal\');"> Универсал </button>
                <button style="width: 138px;" class="minivan" onclick="load_db(\'минивэн\'); ActivizeButton(\'.minivan\');"> Минивэн </button>
                <button style="width: 151px;" class="crossover" onclick="load_db(\'кроссовер\'); ActivizeButton(\'.crossover\');"> Кроссовер </button>
                <button style="width: 158px;" class="truck" onclick="load_db(\'грузовик\'); ActivizeButton(\'.truck\');"> Грузовик </button>
                
                <button style="width: 120px;" class="wd4" onclick="load_db(\'4 WD\'); ActivizeButton(\'.wd4\');"> 4WD </button>
                <button style="width: 120px;" class="hybrid" onclick="load_db(\'гибрид\'); ActivizeButton(\'.hybrid\');"> Гибрид </button>
            </div>
            <ul class="mashinki">';
    
    ///

        for ($j = 0 ; $j < $rows ; ++$j) {
        $row = mysqli_fetch_row($result);
            echo '
                <li id="'.$row[0].'">
                    <div class="catalog_card"> ';
            if($row[15] == 'yes') {
                echo '
                    <div class="outbuy">
                        возможен выкуп
                    </div>
                    ';
            };
            if($row[16] == 'yes') {
                echo '
                    <div class="new_car">
                        новинка
                    </div>';
            };
            echo '
                        <div class="catalog_img_container">
                            <img class="lazy" src="'.$row[19]."\" onclick=\"document.getElementById('parent_popup_car".$row[0]."').style.display='block'; img_returns('".$row[19]."');  $('.img-big-a').attr('href','".$row[19]."');\" alt=\"Фотография затерялась:(\" />
                        </div>
                        <div class=\"catalog_title\"> ".$row[1].' </div>
                        <span></span>
        
                        <div class="catalog_info">
                            Год выпуска: <span> '.$row[2].' </span>
                            <br>
                            Тип кузова: <span> '.$row[3].' </span>
                            <br>
                            Привод: <span> '.$row[4].' </span>
                        </div>
                        <div class="catalog_text">
                            <div class="catalog_price">
                                от <span> '.$row[6].' Р </span> / сутки
                            </div>
                            <div class="flex50 catalog_card_button">
                                <button class="catalog_book" id="auto'.$row[0].'" type="submit"  onclick="document.getElementById(\'parent_popup\').style.display=\'block\'; localStorage.setItem(\'car_id\', \''.$row[1].'\'); auto_chosen(\''.$row[1].'\')"> Забронировать </button>
                                <button class="car_more_info_button" onclick="document.getElementById(\'parent_popup_car'.$row[0].'\').style.display=\'block\'; document.querySelector(\'body\').classList.add(\'no_overflow\'); img_returns(\''.$row[19].'\');  $(\'.img-big-a\').attr(\'href\',\''.$row[19].'\');"> Подробнее </button>
                            </div>
                        </div>
                    </div>
                    
                </li>
                <div id="parent_popup_car'.$row[0].'" class="parent_popup_car" style="display: none;">
                    <a href="javascript:void(null);" class="popup_area overflow_return" onclick="document.getElementById(\'parent_popup_car'.$row[0].'\').style.display=\'none\'; document.querySelector(\'body\').classList.remove(\'no_overflow\');"></a>
                    <div class="car_info_popup">
                        <div class="closeform overflow_return" onclick="document.getElementById(\'parent_popup_car'.$row[0].'\').style.display=\'none\'; document.querySelector(\'body\').classList.remove(\'no_overflow\');" style="padding-top: 20px;">
                                <span></span>
                        </div>
                        <div class="flex_car_card">
                            <div class="flex50 flex_car_card_img">
                                <div class="car_img_card">
                                    <a data-fancybox="gallery'.$row[0].'" class="img-big-a" ><img class="lazy img-big" src="'.$row[19].'" alt="Фотография затерялась:(" /></a>
                                </div>
                            </div>
                            <div class="flex50 flex_car_card_title">
                                '.$row[1].'
                                <br>
                                <span></span>
                                <div>
                                    <div class="catalog_info">
                                        Год выпуска: <span> '.$row[2].' </span>
                                        <br>
                                        Цвет: <span> '.$row[10].' </span>
                                        <br>
                                        Двигатель объем: <span> '.$row[9].' </span>
                                        <br>
                                        Привод: <span> '.$row[4].' </span>
                                        <br>
                                        Вид топлива: <span> '.$row[5].' </span>
                                        <br>
                                        Тип кузова: <span> '.$row[3].' </span>
                                        <br>
                                        Количество посадочных мест: <span> '.$row[11].' </span>
                                        <br>
                                        Трансмиссия: <span> '.$row[12].' </span>
                                        <br>
                                        Объём багажника: <span> '.$row[13].' </span>
                                        <br>
                                        Расход топлива: <span> '.$row[14].' </span>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div> <div class="flex_car_card">
                            <div class="flex50 flex_car_card_img">
                                <div class="car_img_podcard">';

                                //

                                if ($row[20] !== null)
                                    echo '<a data-fancybox="gallery'.$row[0].'" href="'.$row[20].'"><img class="lazy" src="'.$row[20].'" onclick="change_img(this)" alt="Фотография затерялась:("/></a>';
                                if ($row[21] !== null)
                                    echo '<a data-fancybox="gallery'.$row[0].'" href="'.$row[21].'"><img class="lazy" src="'.$row[21].'" onclick="change_img(this)" alt="Фотография затерялась:("/></a>';
                                if ($row[22] !== null)
                                    echo '<a data-fancybox="gallery'.$row[0].'" href="'.$row[22].'"><img class="lazy" src="'.$row[22].'" onclick="change_img(this)" alt="Фотография затерялась:("/></a>';
                                if ($row[23] !== null)
                                    echo '<a data-fancybox="gallery'.$row[0].'" href="'.$row[23].'"><img class="lazy" src="'.$row[23].'" onclick="change_img(this)" alt="Фотография затерялась:("/></a>';
                                if ($row[24] !== null)
                                    echo '<a data-fancybox="gallery'.$row[0].'" href="'.$row[24].'"><img class="lazy" src="'.$row[24].'" onclick="change_img(this)" alt="Фотография затерялась:("/></a>';

                                //
                                /*htmlCatalog += */ echo '
                                </div>
                            </div>
                            <div class="flex50 flex_car_card_title">
                                <div class="catalog_text">
                                    <div class="catalog_price">
                                        от <span> '.$row[6].' Р </span> / сутки
                                    </div>
                                    <div class="catalog_price">
                                        <!--залог <span style="font-size: 16px;">'.$row[17].'</span> рублей
                                        <br> --> аренда от '.$row[18].' суток
                                    </div>
                                    <div class="flex50 catalog_card_button">
                                        <button class="catalog_book" style="width:50%;" id="auto_more'.$row[0].'" type="submit" onclick="document.getElementById(\'parent_popup\').style.display=\'block\'; localStorage.setItem(\'car_id\', \''.$row[1].'\'); auto_chosen(\''.$row[1].'\')"> Забронировать </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex_car_card" style="margin-top: 20px;">
                            <div class="flex50">
                                <div class="products-rental_conditions">
                                    Условия аренды с правом выкупа
                                    <ul class="products-desc_ul">
                                        <li> Возраст более 25 лет </li>
                                        <li> Стаж вождения более 3-х лет </li>
                                        <li> Наличие постоянной прописки в России </li>
                                        <li> Документы: гражданский паспорт, водительское удостоверение </li>
                                        <li> Лимит пробега 300 км/сутки <br> (превышение лимита пробега 3 рубля/км) </li>
                                        <li> Дополнительно: доставка и возврат авто по адресу клиента по г.Находке - 300 рублей </li>
                                        <li> При выкупе первоначальный взнос 0% от стоимости авто </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex50">
                                <div class="products-rental_cost">
                                    Стоимость аренды
                                    <ul class="products-desc_ul">
                                        <li> ' ;
                                        if($row[18] != '7')
                                            echo 'от ';
                                       echo $row[18].' дней: <span> '.$row[8].' Р </span> / сутки </li>
                                        <li> от 7 до 30 дней: <span> '.$row[7].' Р </span> / сутки </li>
                                        <li> месяц и более <span> '.$row[6].' Р </span> / сутки </li>
                                    </ul>
                                </div>
                                <div class="products-rental_cost">
                                    Размер залога: <span> '.$row[17].' Р</span>
                                    <div class="products-desc_ul" style="padding-left: 0; max-width: 90%;"> 
                                        Залог возвращается по окончании аренды за исключением 1000 рублей. 1000 берётся на 10 дней в случае штрафов по камерам, через 10 дней возвращается.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ';
        
        
            }
            
            if($name !== 'all_cars')
            echo '</ul> <div style="margin-bottom: 75px;"> <a href="javascript:void(null);" class="show_more_button" > показать все </a> </div>
            <script> //Я не знаю почему, но я не могу этот скрипт просто в конец другого файла вынести, видимо потому что эта часть уже после прогрузки страницы происходит
                $(\'.show_more_button\').click(function(){

                //console.log(\'all_cars\');
                load_db(\'all_cars\');
                }); 
                
                function change_img(param){
                    let src = $(param).prop(\'src\');
                    $(\'.img-big\').prop(\'src\',src);
                //src = $(param).attr(\'href\');
                //var href = $(\'.img-big-a\').prop(\'href\');
                $(\'.img-big-a\').attr(\'href\',src);
                    }
                function img_returns(source) {
                    $(\'.img-big\').prop(\'src\',source);
                }
            </script>
            '; //onclick="productsPage.render();"

   // `;
    ///
     
    // очищаем результат
    mysqli_free_result($result);

 
mysqli_close($link);
?>