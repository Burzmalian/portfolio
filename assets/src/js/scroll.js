$(document).ready(function () {

    $('#fullpage').fullpage({
        anchors: ['Gyles', 'Skills', 'Work','Me'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Gyles', 'Skills', 'Work', 'Me'],
        sectionsColor: ['#ccc', '#878785', '#C0B9A9', '#4B4A4B'],
        sectionSelector: '.section',  
        paddingTop: '15px',
        paddingBottom: '10px',     
        responsiveWidth: 767,
        resize:false
    });
});