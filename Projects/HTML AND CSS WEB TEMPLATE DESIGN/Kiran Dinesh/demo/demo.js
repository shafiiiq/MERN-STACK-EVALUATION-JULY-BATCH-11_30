var video_grid = document.getElementById('video-gr');
var scrollMenu = document.getElementById('scrollMenu');
var shortContainer = document.getElementById('shortContainer');
var liked_videos = document.getElementById('liked_videos')
subscribtionContainer = document.getElementById('subscribtionContainer');
var sidebarLarge = document.getElementById('sidebarLarge');
var sidebarSmall = document.getElementById('sidebarSmall');
var youContainer = document.getElementById('youContainer');
function sideBar() {

  if (sidebarLarge.style.display === "none") {
    sidebarLarge.style.display = "flex";
    sidebarSmall.style.display = "none";
    video_grid.style.gridTemplateColumns = "1fr 1fr 1fr";
  } else {
    sidebarLarge.style.display = "none";
    sidebarSmall.style.display = "flex";
    video_grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  }
}

function scrollMenuLeft() {
  var menuScroll = document.getElementById('menuScroll');
  menuScroll.scrollLeft += 50;
}
function scrollMenuRight(){
  var menuScroll=document.getElementById('menuScroll')
  menuScroll.scrollLeft -= 50;
}

function shorts() {
  video_grid.style.display = 'none';
  shortContainer.style.display = 'flex';
  scrollMenu.style.display = 'none';
  liked_videos.style.display = 'none';
  subscribtionContainer.style.display = 'none';
  youContainer.style.display='none';
}
function home() {
  var homeImg=document.getElementById('homeImg')
  video_grid.style.display = 'grid';
  scrollMenu.style.display = 'flex';
  shortContainer.style.display = 'none';
  liked_videos.style.display = 'none';
  subscribtionContainer.style.display = 'none';
  youContainer.style.display='none';
}
function likedVideos() {
  liked_videos.style.display = 'flex';
  video_grid.style.display = 'none';
  scrollMenu.style.display = 'none';
  shortContainer.style.display = 'none';
  subscribtionContainer.style.display = 'none';
  youContainer.style.display='none';

}
function subscription() {
  video_grid.style.display = 'none';
  scrollMenu.style.display = 'none';
  shortContainer.style.display = 'none';
  liked_videos.style.display = 'none';
  subscribtionContainer.style.display = 'flex';
  youContainer.style.display='none';
}
function you(){
  youContainer.style.display='flex';
  video_grid.style.display = 'none';
  scrollMenu.style.display = 'none';
  shortContainer.style.display = 'none';
  liked_videos.style.display = 'none';
  subscribtionContainer.style.display = 'none';
}