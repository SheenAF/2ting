$(function() {

	// Menu Tabular
	var $menu_tabs = $('.menu__tabs li a'); 
	$menu_tabs.on('click', function(e) {
		e.preventDefault();
		$menu_tabs.removeClass('active');
		$(this).addClass('active');

		$('.menu__item').fadeOut(300);
		$(this.hash).delay(300).fadeIn();
	});

});






// Images and alt attribute
var images = {
  image: [
    {src: 'http://www.connectwithlife.com/wp-content/uploads/2016/05/Kendrick-Lamar-Tells-Us-to-Stay-True-in-a-New-Spoken-Word-Video-2.jpg', alt: 'Project 1'}
    , {src: 'http://nahright.com/wp-content/uploads/2017/03/ransom2-450x450.jpg', alt: 'Project 2'}
    , {src: 'http://www.idolator.com/wp-content/uploads/sites/10/2012/07/13/Kendrick-Lamar-Swimming-Pools-Drank1-450x450.jpg', alt: 'Project 3'}
    , {src: 'http://www.meltingbutter.com/wp-content/uploads/2016/03/000.March-Fresh-15-Playlist-Kendrick-Lamar-Thundercat-Rome%CC%81o-Elvis-x-Le-Motel-more-meltingbutter.com-Music-copy-450x450.jpg', alt: 'Project 4'}
    , {src: 'https://pbs.twimg.com/media/DF3yP8AUIAAPMMY.jpg', alt: 'Project 5'}
    , {src: 'http://premierwuzhere.com/blog/wp-content/uploads/2017/04/C9H8-PWUIAAzbQ2-e1491920575924-350x350.jpeg', alt: 'Project 6'}
    , {src: 'http://nahright.com/wp-content/uploads/2016/05/fab-survive-450x450.jpg', alt: 'Project 7'}
    , {src: 'http://rtv_news.s3.amazonaws.com/wp-content/uploads/2013/10/kendrick-pusha-450x450.jpg', alt: 'Project 8'}
    , {src: 'http://static.oprah.com/images/o2/201607/201607-omag-kendrick-lamar-450x450.jpg', alt: 'Project 9'}
    , {src: 'http://getmybuzzup.com/wp-content/uploads/2014/07/Kendrick-Lamar-The-Relevant.jpg', alt: 'Project 10'}
    , {src: 'https://i.pinimg.com/originals/f8/b7/7e/f8b77ede3e9fcf0d0edf755496e13fcc.jpg', alt: 'Project 11'}
    , {src: 'http://static.djbooth.net/pics-features/kendrick-tpab-impact-in-20-years.jpg', alt: 'Project 12'}
    , {src: 'https://i.pinimg.com/originals/82/e7/0b/82e70bb3b442d3f5e17617f87dabff62.jpg', alt: 'Project 10'}
    , {src: 'http://www.detailsofmylife.net/wp-content/uploads/2012/11/Kendrick-Lamar-Bedtime-Mix.jpg', alt: 'Project 11'}
    , {src: 'http://www.ultimatechart.com/system/artists/Kendrick_Lamar.jpg', alt: 'Project 12'}
    , {src: 'https://bursarts.files.wordpress.com/2015/06/wpid-kendrick_lamar_king_of_new_york-front-large.jpg', alt: 'Project 10'}
    , {src: 'https://i.pinimg.com/736x/5e/4f/bc/5e4fbcfdd1568ccdce3d72eae81a7cb2--inspirational-music-kendrick-lamar.jpg', alt: 'Project 11'}
    , {src: 'http://static.djbooth.net/pics-playlists/kendricklamar-playlist.jpg', alt: 'Project 12'}
    , {src: 'http://www.okayplayer.com/wp-content/uploads/2015/04/Kendrick-Lamar-Kanye-West-All-Day-Verse-Square.jpg', alt: 'Project 10'}
    , {src: 'http://musicheadz.com/wp-content/uploads/2015/04/Kendrick-Lamar-Punch-Its-True-Remix-Artwork.jpg', alt: 'Project 11'}
    , {src: 'http://www.rehabonlinemag.com/wp-content/uploads/2015/05/kendrick-lamar-2015.png', alt: 'Project 12'}
  ]
};

// Show Modal Image 
function onClick(element) {
  document.getElementById("img").src = element.src;
  document.getElementById("modal").style.display = "block";
}