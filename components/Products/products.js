class Products {

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ id, name, price, price1m, price3d, img, img_p1, img_p2, img_p3, img_p4, img_p5, year, body_type, drive_unit, fuel, car_color, drive_v, seat_cap, transmission, baggage_v, fuel_cap, outbuy, new_car, deposit, min_d}) => {
            htmlCatalog += `
                <li>
                    <div class="catalog_card"> `
            if(outbuy == 'yes') {
                htmlCatalog += `
                    <div class="outbuy">
                        возможен выкуп
                    </div>
                    `
            };
            if(new_car == 'yes') {
                htmlCatalog += `
                    <div class="new_car">
                        новинка
                    </div>`
            };
            htmlCatalog += `
                        <div class="catalog_img_container">
                            <img class="lazy" src="${img}" onclick="document.getElementById('parent_popup_car${id}').style.display='block'; img_returns('${img}');  $('.img-big-a').attr('href','${img}');" alt="Фотография затерялась:(" />
                        </div>
                        <div class="catalog_title"> ${name} </div>
                        <span></span>
                        <div class="catalog_info">
                            Год выпуска: <span> ${year} </span>
                            <br>
                            Тип кузова: <span> ${body_type} </span>
                            <br>
                            Привод: <span> ${drive_unit} </span>
                        </div>
                        <div class="catalog_text">
                            <div class="catalog_price">
                                от <span> ${price} Р </span> / сутки
                            </div>
                            <div class="flex50 catalog_card_button">
                                <button class="catalog_book" id="auto${id}" type="submit"  onclick="document.getElementById('parent_popup').style.display='block'; localStorage.setItem('car_id', '${name}'); auto_chosen('${name}')"> Забронировать </button>
                                <button class="car_more_info_button" onclick="document.getElementById('parent_popup_car${id}').style.display='block'; document.querySelector('body').classList.add('no_overflow'); img_returns('${img}');  $('.img-big-a').attr('href','${img}');"> Подробнее </button>
                            </div>
                        </div>
                    </div>
                </li>
                <div id="parent_popup_car${id}" class="parent_popup_car" style="display: none;">
                    <a href="javascript:void(null);" class="popup_area overflow_return" onclick="document.getElementById('parent_popup_car${id}').style.display='none'; document.querySelector('body').classList.remove('no_overflow');"></a>
                    <div class="car_info_popup">
                        <div class="closeform overflow_return" onclick="document.getElementById('parent_popup_car${id}').style.display='none'; document.querySelector('body').classList.remove('no_overflow');" style="padding-top: 20px;">
                                <span></span>
                        </div>
                        <div class="flex_car_card">
                            <div class="flex50 flex_car_card_img">
                                <div class="car_img_card">
                                    <a data-fancybox="gallery${id}" class="img-big-a" ><img class="lazy img-big" src="${img}" alt="Фотография затерялась:(" /></a>
                                </div>
                            </div>
                            <div class="flex50 flex_car_card_title">
                                ${name}
                                <br>
                                <span></span>
                                <div>
                                    <div class="catalog_info">
                                        Год выпуска: <span> ${year} </span>
                                        <br>
                                        Цвет: <span> ${car_color} </span>
                                        <br>
                                        Двигатель объем: <span> ${drive_v} </span>
                                        <br>
                                        Привод: <span> ${drive_unit} </span>
                                        <br>
                                        Вид топлива: <span> ${fuel} </span>
                                        <br>
                                        Тип кузова: <span> ${body_type} </span>
                                        <br>
                                        Количество посадочных мест: <span> ${seat_cap} </span>
                                        <br>
                                        Трансмиссия: <span> ${transmission} </span>
                                        <br>
                                        Объём багажника: <span> ${baggage_v} </span>
                                        <br>
                                        Расход топлива: <span> ${fuel_cap} </span>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex_car_card">
                            <div class="flex50 flex_car_card_img">
                                <div class="car_img_podcard">`

                                if (img_p1 != undefined)
                                    htmlCatalog += `<a data-fancybox="gallery${id}" href="${img_p1}"><img class="lazy" src="${img_p1}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                                if (img_p2 != undefined)
                                    htmlCatalog += `<a data-fancybox="gallery${id}" href="${img_p2}"><img class="lazy" src="${img_p2}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                                if (img_p3 != undefined)
                                    htmlCatalog += `<a data-fancybox="gallery${id}" href="${img_p3}"><img class="lazy" src="${img_p3}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                                if (img_p4 != undefined)
                                    htmlCatalog += `<a data-fancybox="gallery${id}" href="${img_p4}"><img class="lazy" src="${img_p4}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                                if (img_p5 != undefined)
                                    htmlCatalog += `<a data-fancybox="gallery${id}" href="${img_p5}"><img class="lazy" src="${img_p5}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`

                                htmlCatalog += `
                                </div>
                            </div>
                            <div class="flex50 flex_car_card_title">
                                <div class="catalog_text">
                                    <div class="catalog_price">
                                        от <span> ${price} Р </span> / сутки
                                    </div>
                                    <div class="catalog_price">
                                        <!--залог <span style="font-size: 16px;">${deposit}</span> рублей
                                        <br> --> аренда ${min_d} суток
                                    </div>
                                    <div class="flex50 catalog_card_button">
                                        <button class="catalog_book" style="width:50%;" id="auto_more${id}" type="submit" onclick="document.getElementById('parent_popup').style.display='block'; localStorage.setItem('car_id', '${name}'); auto_chosen('${name}')"> Забронировать </button>
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
                                        <li> ${min_d} дней: <span> ${price3d} Р </span> / сутки </li>
                                        <li> от 7 до 30 дней: <span> ${price1m} Р </span> / сутки </li>
                                        <li> месяц и более <span> ${price} Р </span> / сутки </li>
                                    </ul>
                                </div>
                                <div class="products-rental_cost">
                                    Размер залога: <span>${deposit} Р</span>
                                    <div class="products-desc_ul" style="padding-left: 0; max-width: 90%;"> 
                                        Залог возвращается по окончании аренды за исключением 1000 рублей. 1000 берётся на 10 дней в случае штрафов по камерам, через 10 дней возвращается.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        const html = `
            <button class="mobile_filter" onclick="document.querySelector('.auto_choice').classList.toggle('grid_display');">
                Фильтр
            </button>
            <div class="auto_choice">
                <button style="width: 113px;" class="sedan" onclick="productsPage.render_one_type_only('седан'); ActivizeButton('.sedan');"> Седан </button>
                <button style="width: 120px;" class="hatchback" onclick="productsPage.render_one_type_only('хэтчбэк'); ActivizeButton('.hatchback');"> Хэтчбэк </button>
                <button style="width: 150px;" class="universal" onclick="productsPage.render_one_type_only('универсал'); ActivizeButton('.universal');"> Универсал </button>
                <button style="width: 138px;" class="minivam" onclick="productsPage.render_one_type_only('минивэн'); ActivizeButton('.minivan');"> Минивэн </button>
                <button style="width: 151px;" class="crossover" onclick="productsPage.render_one_type_only('кроссовер'); ActivizeButton('.crossover');"> Кроссовер </button>
                <button style="width: 158px;" class="truck" onclick="productsPage.render_one_type_only('грузовик'); ActivizeButton('.truck');"> Грузовой </button>
                
                <button style="width: 120px;" class="wd4" onclick="productsPage.render_one_type_only('4 WD'); ActivizeButton('.wd4');"> 4WD </button>
                <button style="width: 120px;" class="hybrid" onclick="productsPage.render_one_type_only('гибрид'); ActivizeButton('.hybrid');"> Гибрид </button>
            </div>
                <ul>
                    ${htmlCatalog}
                </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }

    render6() {
        var counter = 1;
        let htmlCatalog6 = '';
        CATALOG.forEach(({ id, name, price, price1m, price3d, img, img_p1, img_p2, img_p3, img_p4, img_p5, year, body_type, drive_unit, fuel, car_color, drive_v, seat_cap, transmission, baggage_v, fuel_cap, outbuy, new_car, deposit, min_d}) => {
            if(counter <= 6) {
                htmlCatalog6 += `
                    <li>
                    <div class="catalog_card"> `
                if (outbuy == 'yes') {
                    htmlCatalog6 += ` <div class="outbuy">
                        возможен выкуп
                    </div> `
                 }            
                 if(new_car == 'yes') {
                    htmlCatalog6 += `
                    <div class="new_car">
                        новинка
                    </div>`
                 };
                htmlCatalog6 += ` <div class="catalog_img_container">
                            <img class="lazy" src="${img}" onclick="document.getElementById('parent_popup_car${id}').style.display='block'; img_returns('${img}');  $('.img-big-a').attr('href','${img}');" alt="Фотография затерялась:(" />
                        </div>
                        <div class="catalog_title"> ${name} </div>
                        <span></span>
                        <div class="catalog_info">
                            Год выпуска: <span> ${year} </span>
                            <br>
                            Тип кузова: <span> ${body_type} </span>
                            <br>
                            Привод: <span> ${drive_unit} </span>
                        </div>
                        <div class="catalog_text">
                            <div class="catalog_price">
                                от <span> ${price} Р </span> / сутки
                            </div>
                            <div class="flex50 catalog_card_button">
                                <button class="catalog_book" id="auto${id}" type="submit"  onclick="document.getElementById('parent_popup').style.display='block'; localStorage.setItem('car_id', '${name}'); auto_chosen('${name}')"> Забронировать </button>
                                <button class="car_more_info_button" onclick="document.getElementById('parent_popup_car${id}').style.display='block'; document.querySelector('body').classList.add('no_overflow');  img_returns('${img}');  $('.img-big-a').attr('href','${img}');"> Подробнее </button>
                            </div>
                        </div>
                    </div>
                </li>
                <div id="parent_popup_car${id}" class="parent_popup_car" style="display: none;">
                    <a href="javascript:void(null);" class="popup_area overflow_return" onclick="document.getElementById('parent_popup_car${id}').style.display='none'; document.querySelector('body').classList.remove('no_overflow');"></a>
                    <div class="car_info_popup">
                        <div class="closeform overflow_return" onclick="document.getElementById('parent_popup_car${id}').style.display='none'; document.querySelector('body').classList.remove('no_overflow');" style="padding-top: 20px;"> <!-- $('.img-big').prop('src','${img}'); -->
                                <span></span>
                        </div>
                        <div class="flex_car_card">
                            <div class="flex50 flex_car_card_img">
                                <div class="car_img_card">
                                    <a data-fancybox="gallery${id}" class="img-big-a" ><img class="lazy img-big" src="${img}" alt="Фотография затерялась:(" /></a> <!-- onclick="$('.img-big').prop('src','${img}');" -->
                                </div>
                            </div>
                            <div class="flex50 flex_car_card_title">
                                ${name}
                                <br>
                                <span></span>
                                <div>
                                    <div class="catalog_info">
                                        Год выпуска: <span> ${year} </span>
                                        <br>
                                        Цвет: <span> ${car_color} </span>
                                        <br>
                                        Двигатель объем: <span> ${drive_v} </span>
                                        <br>
                                        Привод: <span> ${drive_unit} </span>
                                        <br>
                                        Вид топлива: <span> ${fuel} </span>
                                        <br>
                                        Тип кузова: <span> ${body_type} </span>
                                        <br>
                                        Количество посадочных мест: <span> ${seat_cap} </span>
                                        <br>
                                        Трансмиссия: <span> ${transmission} </span>
                                        <br>
                                        Объём багажника: <span> ${baggage_v} </span>
                                        <br>
                                        Расход топлива: <span> ${fuel_cap} </span>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex_car_card">
                            <div class="flex50 flex_car_card_img">
                                <div class="car_img_podcard">`

                            if (img_p1 != undefined)
                                htmlCatalog6 += `<a data-fancybox="gallery${id}" href="${img_p1}"><img class="lazy" src="${img_p1}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>` <!-- data-fancybox="gallery${id}" href="${img_p1}" -->
                            if (img_p2 != undefined)
                                htmlCatalog6 += `<a data-fancybox="gallery${id}" href="${img_p2}"><img class="lazy" src="${img_p2}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                            if (img_p3 != undefined)
                                htmlCatalog6 += `<a data-fancybox="gallery${id}" href="${img_p3}"><img class="lazy" src="${img_p3}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                            if (img_p4 != undefined)
                                htmlCatalog6 += `<a data-fancybox="gallery${id}" href="${img_p4}"><img class="lazy" src="${img_p4}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                            if (img_p5 != undefined)
                                htmlCatalog6 += `<a data-fancybox="gallery${id}" href="${img_p5}"><img class="lazy" src="${img_p5}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`

                            htmlCatalog6 += `
                                </div>
                            </div>
                            <div class="flex50 flex_car_card_title">
                                <div class="catalog_text">
                                    <div class="catalog_price">
                                        от <span> ${price} Р </span> / сутки
                                    </div>
                                    <div class="catalog_price">
                                        <!-- залог <span style="font-size: 16px;">${deposit}</span> рублей
                                        <br> --> аренда ${min_d} суток
                                    </div>
                                    <div class="flex50 catalog_card_button">
                                        <button class="catalog_book" style="width:50%;" id="auto_more${id}" type="submit" onclick="document.getElementById('parent_popup').style.display='block'; localStorage.setItem('car_id', '${name}'); auto_chosen('${name}')"> Забронировать </button>
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
                                        <li> ${min_d} дней: <span> ${price3d} Р </span> / сутки </li>
                                        <li> от 7 до 30 дней: <span> ${price1m} Р </span> / сутки </li>
                                        <li> месяц и более <span> ${price} Р </span> / сутки </li>
                                    </ul>
                                </div>
                                <div class="products-rental_cost">
                                    Размер залога: <span>${deposit} Р</span>
                                    <div class="products-desc_ul" style="padding-left: 0; max-width: 90%;"> 
                                        Залог возвращается по окончании аренды за исключением 1000 рублей. 1000 берётся на 10 дней в случае штрафов по камерам, через 10 дней возвращается.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                counter += 1;
            }
            else {
                return true;
            }
        });
        const html6 = `
        <button class="mobile_filter"  onclick="document.querySelector('.auto_choice').classList.toggle('grid_display');">
                Фильтр
        </button>
        <div class="auto_choice">
            <button style="width: 113px;" class="sedan" onclick="productsPage.render_one_type_only('седан'); ActivizeButton('.sedan');"> Седан </button>
            <button style="width: 120px;" class="hatchback" onclick="productsPage.render_one_type_only('хэтчбэк'); ActivizeButton('.hatchback');"> Хэтчбэк </button>
            <button style="width: 150px;" class="universal" onclick="productsPage.render_one_type_only('универсал'); ActivizeButton('.universal');"> Универсал </button>
            <button style="width: 138px;" class="minivan" onclick="productsPage.render_one_type_only('минивэн'); ActivizeButton('.minivan');"> Минивэн </button>
            <button style="width: 151px;" class="crossover" onclick="productsPage.render_one_type_only('кроссовер'); ActivizeButton('.crossover');"> Кроссовер </button>
            <button style="width: 158px;" class="truck" onclick="productsPage.render_one_type_only('грузовик'); ActivizeButton('.truck');"> Грузовой </button>
            
            <button style="width: 120px;" class="wd4" onclick="productsPage.render_one_type_only('4 WD'); ActivizeButton('.wd4');"> 4WD </button>
            <button style="width: 120px;" class="hybrid" onclick="productsPage.render_one_type_only('гибрид'); ActivizeButton('.hybrid');"> Гибрид </button>
        </div>
        <ul class="mashinki">
            ${htmlCatalog6}
        </ul>
        <div style="margin-bottom: 75px;"> <a href="javascript:void(null);" class="show_more_button" onclick="productsPage.render();"> показать еще </a> </div>
    `;
    ROOT_PRODUCTS.innerHTML = html6;
    }

    render_one_type_only(type) {
        let htmlCatalogac = '';
        CATALOG.forEach(({ id, name, price, price1m, price3d, img, img_p1, img_p2, img_p3, img_p4, img_p5, year, body_type, drive_unit, fuel, car_color, drive_v, seat_cap, transmission, baggage_v, fuel_cap, outbuy, new_car, deposit, min_d}) => {
            if((type == body_type)||(type == drive_unit)||(type == fuel)) {
                htmlCatalogac += `
                    <li>
                    <div class="catalog_card">
                `
                if (outbuy == 'yes') {
                    htmlCatalogac += `
                        <div class="outbuy">
                            возможен выкуп
                        </div>
                        `
                }
                if(new_car == 'yes') {
                    htmlCatalogac += `
                    <div class="new_car">
                        новинка
                    </div>`
                };
                htmlCatalogac += `
                    <div class="catalog_img_container">
                        <img class="lazy" src="${img}" onclick="document.getElementById('parent_popup_car${id}').style.display='block'; img_returns('${img}');  $('.img-big-a').attr('href','${img}');" alt="Фотография затерялась:(" />
                    </div>
                    <div class="catalog_title"> ${name} </div>
                    <span></span>
                    <div class="catalog_info">
                        Год выпуска: <span> ${year} </span>
                        <br>
                        Тип кузова: <span> ${body_type} </span>
                        <br>
                        Привод: <span> ${drive_unit} </span>
                    </div>
                    <div class="catalog_text">
                        <div class="catalog_price">
                            от <span> ${price} Р </span> / сутки
                        </div>
                        <div class="flex50 catalog_card_button">
                            <button class="catalog_book" id="auto${id}" type="submit"  onclick="document.getElementById('parent_popup').style.display='block'; localStorage.setItem('car_id', '${name}'); auto_chosen('${name}')"> Забронировать </button>
                            <button class="car_more_info_button" onclick="document.querySelector('body').classList.add('no_overflow'); document.getElementById('parent_popup_car${id}').style.display='block'; img_returns('${img}');  $('.img-big-a').attr('href','${img}');"> Подробнее </button>
                        </div>
                    </div>
                </div>
            </li>
            <div id="parent_popup_car${id}" class="parent_popup_car" style="display: none;">
                <a href="javascript:void(null);" class="popup_area overflow_return" onclick="document.getElementById('parent_popup_car${id}').style.display='none'; document.querySelector('body').classList.remove('no_overflow');"></a>
                <div class="car_info_popup">
                    <div class="closeform overflow_return" onclick="document.getElementById('parent_popup_car${id}').style.display='none'; document.querySelector('body').classList.remove('no_overflow');" style="padding-top: 20px;">
                            <span></span>
                    </div>
                    <div class="flex_car_card">
                        <div class="flex50 flex_car_card_img">
                            <div class="car_img_card">
                                <a data-fancybox="gallery${id}" class="img-big-a" ><img class="lazy img-big" src="${img}" alt="Фотография затерялась:(" /></a>
                            </div>
                        </div>
                        <div class="flex50 flex_car_card_title">
                            ${name}
                            <br>
                            <span></span>
                            <div>
                                <div class="catalog_info">
                                    Год выпуска: <span> ${year} </span>
                                    <br>
                                    Цвет: <span> ${car_color} </span>
                                    <br>
                                    Двигатель объем: <span> ${drive_v} </span>
                                    <br>
                                    Привод: <span> ${drive_unit} </span>
                                    <br>
                                    Вид топлива: <span> ${fuel} </span>
                                    <br>
                                    Тип кузова: <span> ${body_type} </span>
                                    <br>
                                    Количество посадочных мест: <span> ${seat_cap} </span>
                                    <br>
                                    Трансмиссия: <span> ${transmission} </span>
                                    <br>
                                    Объём багажника: <span> ${baggage_v} </span>
                                    <br>
                                    Расход топлива: <span> ${fuel_cap} </span>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex_car_card">
                        <div class="flex50 flex_car_card_img">
                            <div class="car_img_podcard"> `

                        if (img_p1 != undefined)
                            htmlCatalogac += `<a data-fancybox="gallery${id}" href="${img_p1}"><img class="lazy" src="${img_p1}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                        if (img_p2 != undefined)
                            htmlCatalogac += `<a data-fancybox="gallery${id}" href="${img_p2}"><img class="lazy" src="${img_p2}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                        if (img_p3 != undefined)
                            htmlCatalogac += `<a data-fancybox="gallery${id}" href="${img_p3}"><img class="lazy" src="${img_p3}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                        if (img_p4 != undefined)
                            htmlCatalogac += `<a data-fancybox="gallery${id}" href="${img_p4}"><img class="lazy" src="${img_p4}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`
                        if (img_p5 != undefined)
                            htmlCatalogac += `<a data-fancybox="gallery${id}" href="${img_p5}"><img class="lazy" src="${img_p5}" onclick="change_img(this)" alt="Фотография затерялась:("/></a>`

                        htmlCatalogac += `
                            </div>
                        </div>
                        <div class="flex50 flex_car_card_title">
                            <div class="catalog_text">
                                <div class="catalog_price">
                                    от <span> ${price} Р </span> / сутки
                                </div>
                                <div class="catalog_price">
                                    <!--залог <span style="font-size: 16px;">${deposit}</span> рублей
                                    <br> --> аренда ${min_d} суток
                                </div>
                                <div class="flex50 catalog_card_button">
                                    <button class="catalog_book" style="width:50%;" id="auto_more${id}" type="submit" onclick="document.getElementById('parent_popup').style.display='block'; localStorage.setItem('car_id', '${name}'); auto_chosen('${name}')"> Забронировать </button>
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
                                    <li> ${min_d} дней: <span> ${price3d} Р </span> / сутки </li>
                                    <li> от 7 до 30 дней: <span> ${price1m} Р </span> / сутки </li>
                                    <li> месяц и более <span> ${price} Р </span> / сутки </li>
                                </ul>
                            </div>
                            <div class="products-rental_cost">
                                    Размер залога: <span>${deposit} Р</span>
                                    <div class="products-desc_ul" style="padding-left: 0; max-width: 90%;"> 
                                        Залог возвращается по окончании аренды за исключением 1000 рублей. 1000 берётся на 10 дней в случае штрафов по камерам, через 10 дней возвращается.
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
            }
        });
        if (htmlCatalogac == '') {
            htmlCatalogac += `
                <div class="buy_auto_podtext">
                    Таких типов авто у нас пока не представлено...
                </div>
            `;
        }
        const htmlac = `
        <button class="mobile_filter" onclick="document.querySelector('.auto_choice').classList.toggle('grid_display');">
            Фильтр 
            <div class="mobile_filter_chosen"></div>
        </button>
        <div class="auto_choice">
            <button style="width: 113px;" onclick="productsPage.render6();"> Все </button>
            <button style="width: 113px;" class="sedan" onclick="productsPage.render_one_type_only('седан'); ActivizeButton('.sedan');"> Седан </button>
            <button style="width: 120px;" class="hatchback" onclick="productsPage.render_one_type_only('хэтчбэк'); ActivizeButton('.hatchback');"> Хэтчбэк </button>
            <button style="width: 150px;" class="universal" onclick="productsPage.render_one_type_only('универсал'); ActivizeButton('.universal');"> Универсал </button>
            <button style="width: 138px;" class="minivan" onclick="productsPage.render_one_type_only('минивэн'); ActivizeButton('.minivan');"> Минивэн </button>
            <button style="width: 151px;" class="crossover" onclick="productsPage.render_one_type_only('кроссовер'); ActivizeButton('.crossover');"> Кроссовер </button>
            <button style="width: 158px;" class="truck" onclick="productsPage.render_one_type_only('грузовик'); ActivizeButton('.truck');"> Грузовой </button>
            
            <button style="width: 120px;" class="wd4" onclick="productsPage.render_one_type_only('4 WD'); ActivizeButton('.wd4');"> 4WD </button>
            <button style="width: 120px;" class="hybrid" onclick="productsPage.render_one_type_only('гибрид'); ActivizeButton('.hybrid');"> Гибрид </button>
        </div>
        <ul class="mashinki">
            ${htmlCatalogac}
        </ul>
        <div style="margin-bottom: 75px;"> <a href="javascript:void(null);" class="show_more_button" onclick="productsPage.render();"> показать всё </a> </div>
        `;
        ROOT_PRODUCTS.innerHTML = htmlac;
    }
}

    function change_img(param){
        var src = $(param).prop('src');
        $('.img-big').prop('src',src);
        //src = $(param).attr('href');
        //var href = $('.img-big-a').prop('href');
        $('.img-big-a').attr('href',src);
    }
    function img_returns(source) {
        $('.img-big').prop('src',source);
    }

const productsPage = new Products();
productsPage.render6();
