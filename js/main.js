window.addEventListener("scroll", function() {
    var scrollPos = window.scrollY;
    var headerText = document.querySelector('.ease_exit');
    var inputs = document.querySelector('#zayavka2');
    var header_header = document.querySelector('header');
    var winW = screen.width;
    var sec_disp = document.querySelector('.parallax');
    var fir_disp = document.querySelector('.image_1');

    if (scrollPos <= 1100) {
        inputs.style.display = "inherit";
    }
    else {
        inputs.style.display = "none";
    }

    if ((scrollPos <= 930) && (winW > 1023)) {
        headerText.style.transform = "translateY(" + (scrollPos*1) + "px" + ")";
        headerText.style.display = "inherit";
        header_header.style.display = "inherit";
        header_header.style.transform = "translateY(" + (scrollPos*1) + "px" + ")";
    }
    else if (scrollPos <= 930) {
        headerText.style.display = "inherit";
        header_header.style.display = "inherit";
    }
    else {
    }
    setTimeout(() => {
        document.querySelector(".parallax").classList.add("animate-me");
    }, 10);
});

function ActivizeButton(id) {
    document.querySelector(id).classList.toggle("active2");
}

function close_mobile_menu() {
    $('.burger_menu, .header_menu_mobile, .header_logo').toggleClass('active_mobile');
        document.querySelector("body").classList.toggle("no_overflow");
        document.querySelector("header").classList.toggle("header_bg");
}

/* accordions */
$(document).ready(function() {
    $('.buy_auto_button').on('click', function(e) {
        e.preventDefault();
        $('.flex_c').toggleClass('active_button');

        if ($(this).closest('.accordion-item').hasClass('active')) {
            $('.accordion-item').removeClass('active');
        }
        else {
            $('.accordion-item').removeClass('active');
            $(this).closest('.accordion-item').addClass('active');
        }
        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('normal');
    });

    $('.header_accordion_a').on('click', function(e) {
        e.preventDefault();
        $('.header_accordion_a').toggleClass('active_button');
        // Add the correct active class
        if($(this).closest('.header_accordion').hasClass('active')) {
            // Remove active classes
            $('.header_accordion').removeClass('active');
        }
        else {
            // Remove active classes
            $('.header_accordion').removeClass('active');
            // Add the active class
            $(this).closest('.header_accordion').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.header_accordion .container').not($content).slideUp('normal');
    });

    $('.burger_menu').click(function(event) {
        $('.burger_menu, .header_menu_mobile, .header_logo').toggleClass('active_mobile');
        document.querySelector("body").classList.toggle("no_overflow");
        document.querySelector("header").classList.toggle("header_bg");
    });
    $('#mobile_rent_btn').click(function(event) {
        $('.header_link').toggleClass('arrow_move');
    })
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
});

//
// Initialize library
var lib = Nanogram;

function buildPorfolio() {
  var preloader = document.getElementById("preloader");
  preloader.classList.add("preloader--loading");
  // Get content from https://www.instagram.com/instagram/
  return lib
    .getMediaByUsername("avtoprokat__nakhodka")
    .then(function (response) {
      console.log(response.profile);

      // Get photos
      var photos = response.profile.edge_owner_to_timeline_media.edges;
      var items = [];
      var start_title;
      /*response.profile.edge_owner_to_timeline_media.edges[0]
      .node.edge_media_to_caption.edges[0].node.text.substr(0,139);
      start_title += "...";*/

      // Create new elements
      // <div class="portfolio__item">
      //   <a href="..." target="_blank" class="portfolio__link">
      //     <img src="..." alt="..." width="..." height="..." class="portfolio__img">
      //   </a>
      // </div>
      //console.log(start_title);
      for (var i = 0; i <= /*photos.length - 1*/ 2; i++) {
        var current = photos[i].node;

        var div = document.createElement("div");
        var link = document.createElement("a");
        var img = document.createElement("img");

        //
        var div_for_text = document.createElement("a");
        var div_card = document.createElement("div");

        var thumbnail = current.thumbnail_resources[4];
        var imgSrc = thumbnail.src;
        var imgWidth = thumbnail.config_width;
        var imgHeight = thumbnail.config_height;
        var imgAlt = current.accessibility_caption;

        var shortcode = current.shortcode;
        var linkHref = "https://www.instagram.com/p/" + shortcode;

        //картинка с лайком + количество
        var heart_img = document.createElement("img");
        var heart_count_div = document.createElement("div");
        heart_count_div.classList.add("like_com_count");
        var heart_count = response.profile.edge_owner_to_timeline_media.edges[i]
        .node.edge_liked_by.count;


        div_card.classList.add("div_card");
        //картинка с комментарием + количество
        var comment_img = document.createElement("img");
        var comment_count_div = document.createElement("div");
        comment_count_div.classList.add("like_com_count");
        var comment_count = response.profile.edge_owner_to_timeline_media.edges[i]
        .node.edge_media_to_comment.count;


        div.classList.add("portfolio__item");

        //
        start_title = response.profile.edge_owner_to_timeline_media.edges[i]
        .node.edge_media_to_caption.edges[0].node.text.substr(0,139);
        start_title += "...";


        heart_img.classList.add("inst_card_img");
        heart_img.src = ("img/icon/heart.svg")
        heart_img.width = 30;
        heart_img.height = 30;

        comment_img.classList.add("inst_card_img");
        comment_img.src = ("img/icon/comment.svg")
        comment_img.width = 30;
        comment_img.height = 30;


        div_for_text.classList.add("inst_text_card");
        

        img.classList.add("portfolio__img");
        img.src = imgSrc;
        img.width = imgWidth;
        img.height = imgHeight;
        img.alt = imgAlt;

        link.classList.add("portfolio__link");
        link.href = linkHref;
        link.target = "_blank";

        link.appendChild(img);
        div.appendChild(link);
        //
        div_for_text.href = linkHref;
        div_for_text.target = "_blank";
        
        div.appendChild(div_for_text);
        div_for_text.appendChild(div_card);

        heart_count_div.innerHTML += heart_count;
        div_card.appendChild(heart_img);
        div_card.appendChild(heart_count_div);
        comment_count_div.innerHTML += comment_count;
        div_card.appendChild(comment_img);
        div_card.appendChild(comment_count_div);


        div_for_text.innerHTML += start_title;

        //div.append("Image");
        items.push(div);
      }

      // Create container for our portfolio
      var container = document.createElement("div");
      container.id = "portfolio";
      container.classList.add("portfolio");

      // Append all photos to our container
      for (var j = 0; j <= items.length - 1; j++) {
        container.appendChild(items[j]);
      }

      // Append our container to body
      //document.body.appendChild(container);

      var out = document.querySelector(".inst_card");
      out.appendChild(container);

      preloader.classList.remove("preloader--loading");
    })
    .catch(function (error) {
      console.log(error);
      preloader.classList.remove("preloader--loading");
    });
}

//buildPorfolio();
