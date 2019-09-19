$(document).ready(function () {
    console.log("jquery");

    // $('selector').action() //....jquery code syntax
    // $('p').click(); //...click on all p element


    $('p').click(function () {
        console.log('clicked on p',this);

        $(this).hide(function () {
            console.log('p is hide');
        });
    });

    $('p.odd').dblclick(function () {
        console.log('double clicked on p',this);

        $(this).hide(function () {
            console.log('p is hide');
        });
    });

    $('p.odd').mouseenter(function () {
        console.log('mouse enter ',this);
        $(this).hide(function(){
          console.log('p hide by mouse enter')  
        })

    });

    $('p.odd').hover(function () {
        console.log('hover on',this);
        
    },
    function(){
        console.log('hover off')
    }
    );

    // demoing the On method
    $('h2').on(
        {
            click: function(){
                console.log('clicking on heading', this);

            },
            mouseleave: function(){
                console.log('mouse leave');

            }

        })
        $('#click').click(function(){
            $('#wiki').toggle(1000);

        })


        // $('#wiki').hide(2000, function(){
        //     console.log("hidden");

        // })
        
        // $('#wiki').show(2000, function(){
        //     console.log("show");
            
        // })

        // $('#click').show(1000, function(){
        //      console.log("show");
        //     })
        
        
        
        //.....Toggle mehtod :: fadeIn , fadeOut, fadeToggle, fadeTo
        
        // $('#click').click(function(){
        //     $('#wiki').fadeIn(1000);

        // })
        // $('#click').show(1000, function(){
        //     console.log("show");
        //    })
        // $('#click').click(function(){
        //     $('#wiki').fadeOut(1000);

        // })
        // $('#click').show(1000, function(){
        //     console.log("show");
        //    })
        // $('#click').click(function(){
        //     $('#wiki').fadeToggle(1000);

        
        // $('#click').show(1000, function(){
        //     console.log("show");
        //    })
        // $('#click').click(function(){
        //     $('#wiki').fadeTo(1000);

        // })

        //!!!!....slide methods= slideUp ,slideDown,slideToggle
        // syntax $('selector').slideUp(speed, vallbackfunction()
               // {xyz....
        //          })
            //!!! note :: speed and callback parameters are optional
            // $('#wiki').slideUp(1000, function(){
            //         console.log('slideUp done');

            // })
            
            // $('#wiki').slideDown(1000, function(){
            //     console.log('slideUp done');
                    
            // })
            
            // $('#wiki').slideToggle(1000, function(){
            //     console.log('slideUp done');
                    
            // })

            //!!!!....Animate funciton in jquery..!!!
            
            // method ::1
            // $('#wiki').animate({
            //     opacity:0.3,
            //     height :'10px',
            //     width:'10px',    
            // }, "slow")

            //method :: 2
            $('#wiki').animate({opacity:0.3}, 2000);
            $('#wiki').animate({opacity:0.9}, 2000);
            $('#wiki').animate({width:'350px'}, 2000);


//    !!!.... change and remove val of html element             
    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    
    
//    !!!!....empty the value of elemnt or remove the html element     
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    // $('#wiki').remove()


//      !!!.......Add and  remove class in element 
    //     $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')

// !!!!..........change the css of element
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')

// Ajax using jquery

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })






});



// !! NOTES !!  
    
// there are three type of selectors in jquery
//     1. element selector
//             // $('p').hide();// pass html element 
    
//     2. id selector
//             // $('#1').hide();// pass id 

//     3. class selector 
//             // $('.odd').hide();// pass class
        
//     4. other selector
//             //$('*').click() // clicks on all elements
//             //$('p.odd').click // select using html element and class name 
//             //$('p:2').click // select using html element and id 

// Event in jquery 
// 1. Mouse event = click, doubleclick, mouseenter, mouseleave 
// 2. keyboardEvent = keypress, keydown, keyup
// 3. form event = submit, change, focus, blur
// 4. docuament / window events = load, resize, scroll, unload
// 
//
//
//
//
//